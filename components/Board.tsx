import { Flex } from "@chakra-ui/react";
import React, { useEffect, useState, useRef } from "react";
import Square from "./Square";
import useWindowDimensions from "@/hooks/useWindowDimensions";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";

const Board = () => {
  const [squares, setSquares] = useState<number[]>([]);
  const { height, width } = useWindowDimensions();
  const [boardH, setBoardH] = useState<number>(0);
  const boardRef = useRef<any>();
  //   const squares = [];
  const initBoard = () => {
    const newSquares = [];
    for (var i = 0; i < 64; i++) {
      newSquares.push(i);
    }
    setSquares(newSquares);
  };

  useEffect(() => {
    initBoard();
  }, []);

  useEffect(() => {
    setBoardH(boardRef.current.offsetWidth);
  }, [width]);

  return (
    <DndProvider backend={HTML5Backend}>
      <Flex flexWrap="wrap" ref={boardRef} w="60%" h={boardH}>
        {squares.map((square, i) => {
          const x = i % 8;
          const y = Math.floor(i / 8);
          return <Square black={(x + y) % 2 === 1} key={i} i={i}></Square>;
        })}
      </Flex>
    </DndProvider>
  );
};

export default Board;
