import { Box } from "@chakra-ui/react";
import React from "react";
import { useDrag } from "react-dnd";
import { Draggables } from "@/constants";

interface Props {
  pieceName: string;
}

const pieceImageUrls: any = {
  whiteKing:
    "https://images.chesscomfiles.com/chess-themes/pieces/neo/150/wk.png",
  whiteQueen:
    "url('https://images.chesscomfiles.com/chess-themes/pieces/neo/150/wq.png')",
  whiteRook:
    "url('https://images.chesscomfiles.com/chess-themes/pieces/neo/150/wr.png')",
  whiteBishop:
    "url('https://images.chesscomfiles.com/chess-themes/pieces/neo/150/wb.png')",
  whiteKnight:
    "url('https://images.chesscomfiles.com/chess-themes/pieces/neo/150/wn.png')",
  whitePawn:
    "url('https://images.chesscomfiles.com/chess-themes/pieces/neo/150/wp.png')",
  blackKing:
    "url('https://images.chesscomfiles.com/chess-themes/pieces/neo/150/bk.png')",
  blackQueen:
    "url('https://images.chesscomfiles.com/chess-themes/pieces/neo/150/bq.png')",
  blackRook:
    "url('https://images.chesscomfiles.com/chess-themes/pieces/neo/150/br.png')",
  blackBishop:
    "url('https://images.chesscomfiles.com/chess-themes/pieces/neo/150/bb.png')",
  blackKnight:
    "url('https://images.chesscomfiles.com/chess-themes/pieces/neo/150/bn.png')",
  blackPawn:
    "url('https://images.chesscomfiles.com/chess-themes/pieces/neo/150/bp.png')",
};

const Piece = ({ pieceName }: Props) => {
  const [{ isDragging }, drag] = useDrag(() => ({
    type: Draggables.PIECE,
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
      cursor="grab"
      ref={drag}
      opacity={isDragging ? 0 : 1}
    ></Box>
  );
};

export default Piece;
