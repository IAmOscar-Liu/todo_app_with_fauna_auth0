import { Box, Heading } from "@chakra-ui/react";
import useSWR from "swr";
import { AddTodo } from "../components/Todo/AddTodo";
import { Todos } from "../components/Todo/Todos";
import { withApollo } from "../utils/withApollo";

const Home = () => {
  // const { user, error, isLoading } = useUser();

  // if (isLoading) return <div>Loading...</div>;
  // if (error) return <div>{error.message}</div>;

  useSWR("/api/accessToken");
  const { data: user } = useSWR("/api/auth/me");
  // console.log(user);

  // const { data, error, loading } = useQuery(
  //   gql`
  //     # Write your query or mutation here
  //     query allTodos {
  //       allTodos {
  //         data {
  //           _id
  //           user_id
  //           title
  //           note
  //           created_at
  //           updated_at
  //           completed
  //         }
  //       }
  //     }
  //   `
  // );

  // console.log({ data, error, loading });

  return (
    <Box as="section" py="12">
      <Box
        maxW="xl"
        mx="auto"
        width="full"
        px={{
          base: "6",
          md: "8",
        }}
      >
        <Heading size="lg" mb="8" fontWeight="extrabold">
          {user ? "Things you gotta do!" : "Please login!"}
        </Heading>
        {user ? <AddTodo /> : <h2>Login to add new todo</h2>}
        <Todos />
      </Box>
    </Box>
  );
};

export default withApollo({ ssr: true })(Home);
