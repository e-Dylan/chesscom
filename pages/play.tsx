import Board from "@/components/Board";
import Nav from "@/components/Nav";
import theme from "@/styles";
import { Flex } from "@chakra-ui/react";

const Play = () => {
  return (
    <Flex w="100vw" h="100vh" flexDir="row">
      <Nav />
      <Flex w="100%" h="100%" bg={theme.colors.bg1}>
        <Board />
      </Flex>
    </Flex>
  );
};

export default Play;
