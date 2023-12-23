import React from "react";
import { Box, Flex } from "@chakra-ui/react";
import theme from "@/styles";
import Piece from "./Piece";

interface Props {
  black: boolean;
  i: number;
}

const Square = ({ black, i }: Props) => {
  return (
    <Flex
      //   align="center"
      //   justify="center"
      bg={black ? theme.colors.darkSquare : theme.colors.lightSquare}
      w="12.5%"
      h="12.5%"
    >
      {i === 5 && <Piece pieceName="whiteKing" />}
    </Flex>
  );
};

export default Square;
