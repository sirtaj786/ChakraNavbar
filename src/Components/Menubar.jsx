import { MenuButton, MenuItem, MenuList, Menu } from "@chakra-ui/react";
import React from "react";

const Menubar = () => {
  return (
    <div
      style={{
        marginLeft: "30px",
        display: "flex",
        justifyContent: "space-evenly",
        width: "30% ",
      }}
    >
      <Menu isLazy>
        <MenuButton>Inspration</MenuButton>
        <MenuList>
          {/* MenuItems are not rendered unless Menu is open */}
          <MenuItem>Explore Design Work</MenuItem>
          <MenuItem>New & Noteworthy</MenuItem>
        </MenuList>
      </Menu>
      <Menu isLazy>
        <MenuButton>Find Work</MenuButton>
        <MenuList>
          {/* MenuItems are not rendered unless Menu is open */}
          <MenuItem>Job Board</MenuItem>
          <MenuItem>Freelance Projects</MenuItem>
        </MenuList>
      </Menu>
      <Menu isLazy>
        <MenuButton>Learn Design</MenuButton>
      </Menu>
      <Menu isLazy>
        <MenuButton>Hire Designers</MenuButton>
      </Menu>
    </div>
  );
};

export default Menubar;