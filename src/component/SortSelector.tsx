import { Menu, MenuButton, MenuList, MenuItem, Button } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";

const SortSelector = () => {
  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown />}>
        Sort by: relevance
      </MenuButton>
      <MenuList>
        <MenuItem>zero</MenuItem>
        <MenuItem>first</MenuItem>
      </MenuList>
    </Menu>
  );
};

export default SortSelector;
