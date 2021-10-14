import { Box, Container, Flex } from "@chakra-ui/react";
import useSWR from "swr";
import { MobileHamburgerMenu } from "./MobileHamburgerMenu";
import { NavMenu } from "./NavMenu";
import { useMobileMenuState } from "./useMobileMenuState";

interface Props {
  children: JSX.Element;
}

export const PageShell = ({ children }: Props) => {
  const { isMenuOpen, toggle } = useMobileMenuState();
  // const { user } = useUser();
  const { data: user } = useSWR("/api/auth/me");

  // if (isLoading) return <div>Loading...</div>;
  // if (error) return <div>{error.message}</div>;

  // console.log(user);

  return (
    <Flex direction="column" bg="gray.100" height="100vh">
      <Flex align="center" bg="blue.600" color="white" px="6" minH="16">
        <Flex justify="space-between" align="center" w="full">
          <MobileHamburgerMenu onClick={toggle} isOpen={isMenuOpen} />
          <NavMenu.Mobile isOpen={isMenuOpen} />
          <NavMenu.Desktop />
          {user ? (
            <a
              style={{ display: "flex", alignItems: "center" }}
              href="/api/auth/logout"
            >
              <img
                style={{
                  width: 40,
                  height: 40,
                  marginRight: 15,
                  borderRadius: "50%",
                }}
                src={user.picture}
                alt=""
              />
              Logout
            </a>
          ) : (
            <a href="/api/auth/login">Login</a>
          )}
        </Flex>
      </Flex>
      <Box as="main" py="8" flex="1">
        <Container maxW="7xl">
          <Box bg="white" p="6" rounded="lg" shadow="base">
            {children}
          </Box>
        </Container>
      </Box>
    </Flex>
  );
};
