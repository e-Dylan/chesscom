import Board from "@/components/Board";
import Nav from "@/components/Nav";
import UserChip from "@/components/UserChip";
import theme from "@/styles";
import { Flex } from "@chakra-ui/react";

const Play = () => {
  return (
    <Flex w="100vw" h="100vh" flexDir="row">
      <Nav />
      <Flex w="100%" h="100%" p="40px" bg={theme.colors.bg1} direction="column">
        <UserChip />
        <Board />
        <UserChip username="windows7wasmyidea" rating="1052" />
      </Flex>
    </Flex>
  );
};

export default Play;
