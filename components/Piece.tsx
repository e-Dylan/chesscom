import { Box } from "@chakra-ui/react";
import React, { useEffect } from "react";
import { useDrag } from "react-dnd";
import { Draggables } from "@/constants";

const pieceImageUrls: any = {
  wk: "https://images.chesscomfiles.com/chess-themes/pieces/neo/150/wk.png",
  wq: "url('https://images.chesscomfiles.com/chess-themes/pieces/neo/150/wq.png')",
  wr: "url('https://images.chesscomfiles.com/chess-themes/pieces/neo/150/wr.png')",
  wb: "url('https://images.chesscomfiles.com/chess-themes/pieces/neo/150/wb.png')",
  wn: "url('https://images.chesscomfiles.com/chess-themes/pieces/neo/150/wn.png')",
  wp: "url('https://images.chesscomfiles.com/chess-themes/pieces/neo/150/wp.png')",
  bk: "url('https://images.chesscomfiles.com/chess-themes/pieces/neo/150/bk.png')",
  bq: "url('https://images.chesscomfiles.com/chess-themes/pieces/neo/150/bq.png')",
  br: "url('https://images.chesscomfiles.com/chess-themes/pieces/neo/150/br.png')",
  bb: "url('https://images.chesscomfiles.com/chess-themes/pieces/neo/150/bb.png')",
  bn: "url('https://images.chesscomfiles.com/chess-themes/pieces/neo/150/bn.png')",
  bp: "url('https://images.chesscomfiles.com/chess-themes/pieces/neo/150/bp.png')",
};

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
