import React, { Dispatch, SetStateAction } from "react";
import { Box, Flex } from "@chakra-ui/react";
import theme from "@/styles";
import Piece from "./Piece";
import { useDrop } from "react-dnd";
import { Draggables } from "@/constants";

interface Props {
  black: boolean;
  i: number;
  squareXY: number[];
  pieceName: string;
  movePiece: (fromX: number, fromY: number, toX: number, toY: number) => void;
}

const Square = ({ black, i, squareXY, pieceName, movePiece }: Props) => {
  const [x, y] = squareXY;
  const [{ isOver }, drop] = useDrop(
    () => ({
      accept: Draggables.PIECE,
      drop: (item: any) => movePiece(item?.x, item?.y, x, y),
      collect: (monitor) => ({
        isOver: !!monitor.isOver(),
      }),
    }),
    []
  );

  return (
    <Flex
      bg={black ? theme.colors.darkSquare : theme.colors.lightSquare}
      w="12.5%"
      h="12.5%"
      ref={drop}
      border={isOver ? "5px solid whitesmoke" : "none"}
    >
      {pieceName !== "em" && (
        <Piece pieceName={pieceName} x={squareXY[0]} y={squareXY[1]} />
      )}
    </Flex>
  );
};

export default Square;
