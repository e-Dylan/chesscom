import { Flex } from "@chakra-ui/react";
import React, { useEffect, useState, useRef } from "react";
import Square from "./Square";
import useWindowDimensions from "@/hooks/useWindowDimensions";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import { emptyStartString, gameStartString } from "@/constants";

const Board = () => {
  const [squares, setSquares] = useState<any[]>([]);
  const { width } = useWindowDimensions();
  const [boardH, setBoardH] = useState<number>(0);
  const boardRef = useRef<any>();

  const initBoard = (gameString: string) => {
    const newSquares: any[] = [];
    const squareArr = gameString.match(/.{1,2}/g);
    for (var i = 0; i < 64; i++) {
      if (squareArr !== null) {
        const piece: string = squareArr[i];
        const x: number = i % 8;
        const y: number = Math.floor(i / 8);
        newSquares.push({ piece, x, y });
      }
    }
    setSquares(newSquares);
  };

  useEffect(() => {
    initBoard(gameStartString);
  }, []);

  useEffect(() => {
    setBoardH(boardRef.current.offsetWidth);
  }, [width]);

  const movePiece = (
    fromX: number,
    fromY: number,
    toX: number,
    toY: number
  ): void => {
    const from = fromX + fromY * 8;
    const to = toX + toY * 8;

    if (from === to) return;

    const newSquares = [...squares];

    newSquares[to].piece = squares[from].piece;
    newSquares[from].piece = "em";
    setSquares(newSquares);
  };

  return (
    <DndProvider backend={HTML5Backend}>
      <Flex
        flexWrap="wrap"
        ref={boardRef}
        my="10px"
        w="60%"
        h={boardH}
        rounded="10rem"
      >
        {squares.map((square, i) => {
          let pieceName: string = square?.piece;

          return (
            <Square
              black={(square?.x + square?.y) % 2 === 1}
              key={i}
              i={i}
              x={square?.x}
              y={square?.y}
              pieceName={pieceName}
              movePiece={movePiece}
            ></Square>
          );
        })}
      </Flex>
    </DndProvider>
  );
};

export default Board;
