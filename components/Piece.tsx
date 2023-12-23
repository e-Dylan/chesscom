import { Box } from "@chakra-ui/react";
import React from "react";
import { useDrag } from "react-dnd";
import { Draggables, pieceImageUrls } from "@/constants";

interface Props {
  x: number;
  y: number;
  pieceName: string;
}

const Piece = ({ x, y, pieceName }: Props) => {
  const [{ isDragging }, drag] = useDrag(() => ({
    type: Draggables.PIECE,
    item: { x, y },
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  }));

  return (
    <Box
      backgroundImage={pieceImageUrls[pieceName]}
      backgroundSize="100%"
      willChange="transform"
      w="100%"
      h="100%"
      cursor={pieceName !== "em" ? "grab" : ""}
      ref={drag}
      opacity={isDragging ? 0 : 1}
    ></Box>
  );
};

export default Piece;
