import Board from "@/components/Board";
import Nav from "@/components/Nav";
import UserChip from "@/components/UserChip";
import theme from "@/styles";
import { Box, Flex } from "@chakra-ui/react";
import { useState } from "react";

const Play = () => {
  const [navWidth, setNavWidth] = useState<string>("145px");
  return (
    <Flex w="100vw" h="100vh" flexDir="row">
      <Flex w="145px">
        <Nav navWidth={navWidth} />
      </Flex>
      <Flex w="100%" h="100%" p="40px" bg={theme.colors.bg1} direction="column">
        <UserChip />
        <Board />
        <UserChip username="windows7wasmyidea" rating="1052" />
      </Flex>
      <Flex w="300px" h="100%" bg={theme.colors.bg2}></Flex>
      <Flex w="160px" h="100%" bg={theme.colors.bg2}>
        <Box bg="#fff" w="100%" h="600px"></Box>
      </Flex>
    </Flex>
  );
};

export default Play;
