import Nav from "@/components/Nav";
import theme from "@/styles";
import { Flex } from "@chakra-ui/react";

const Play = () => {
  return (
    <Flex w="100vw" h="100vh" flexDir="row">
      <Nav />
      <Flex w="100%" h="100%" bg="bg1"></Flex>
    </Flex>
  );
};

export default Play;
