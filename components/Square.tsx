import React from "react";
import { Flex } from "@chakra-ui/react";
import theme from "@/styles";
import Piece from "./Piece";
import { useDrop } from "react-dnd";
import { Draggables } from "@/constants";

interface Props {
  black: boolean;
  i: number;
  x: number;
  y: number;
  pieceName: string;
  movePiece: (fromX: number, fromY: number, toX: number, toY: number) => void;
}

const Square = ({ black, i, x, y, pieceName, movePiece }: Props) => {
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
      rounded={
        i === 0
          ? "3px 0 0 0"
          : i === 7
          ? "0 3px 0 0"
          : i === 56
          ? "0 0 0 3px"
          : i === 63
          ? "0 0 3px 0"
          : "0px"
      }
    >
      {pieceName !== "em" && <Piece pieceName={pieceName} x={x} y={y} />}
    </Flex>
  );
};

export default Square;
