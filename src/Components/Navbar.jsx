import React from "react";
import {
  Box,
  Button,
  ButtonGroup,
  Flex,
  Heading,
  Spacer,
} from "@chakra-ui/react";

import Menubar from "./Menubar";

const Navbar = () => {
  return (
    <div style={{ padding: "15px", border: "1px solid lightgray" }}>
      <Flex minWidth="max-content" alignItems="center" gap="2">
        <Box p="2">
          <Heading size="md">Logo</Heading>
        </Box>
        <Menubar></Menubar>
        <Spacer />
        <ButtonGroup gap="2">
          <Button colorScheme="teal">Sign in</Button>
          <Button colorScheme="pink">Sign Up</Button>
        </ButtonGroup>
      </Flex>
    </div>
  );
};

export default Navbar;