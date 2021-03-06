import { Box } from "@chakra-ui/react";
import { HiOutlineMenu, HiX } from "react-icons/hi";

interface Props {
  onClick: () => void;
  isOpen: boolean;
}

export const MobileHamburgerMenu = (props: Props) => {
  const { onClick, isOpen } = props;
  return (
    <Box
      ms="-4"
      minW={{
        base: "12",
        lg: "76px",
      }}
      display={{ lg: "none" }}
    >
      <Box as="button" onClick={onClick} p="2" fontSize="xl">
        <Box aria-hidden as={isOpen ? HiX : HiOutlineMenu} />
        <Box srOnly>{isOpen ? "Close menu" : "Open Menu"}</Box>
      </Box>
    </Box>
  );
};
