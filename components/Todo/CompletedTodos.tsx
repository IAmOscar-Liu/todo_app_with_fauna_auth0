import {
  Table,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
  Box,
  Heading,
} from "@chakra-ui/react";
import {  useGetCompletedTodosQuery } from "../../generated/graphql";

export const CompletedTodos = () => {
  const { data, loading, error } = useGetCompletedTodosQuery();

  if (loading) return <div>"Loading"</div>;
  if (error) return <div>{error.message}</div>;

  return (
    <Box as="section" py="12">
      <Box
        maxW={{
          base: "xl",
          md: "7xl",
        }}
        mx="auto"
        px={{
          base: "6",
          md: "8",
        }}
      >
        <Box overflowX="auto">
          <Heading size="lg" mb="6">
            Things have done!
          </Heading>
          <Table my="8" borderWidth="1px" fontSize="sm">
            <Thead bg="gray.50">
              <Tr>
                <Th whiteSpace="nowrap" scope="col">
                  Title
                </Th>
                <Th whiteSpace="nowrap" scope="col">
                  Note
                </Th>
                <Th whiteSpace="nowrap" scope="col">
                  Completed At
                </Th>
                <Th whiteSpace="nowrap" scope="col">
                  From
                </Th>
              </Tr>
            </Thead>
            <Tbody>
              {data.GetAllCompletedTodoSortedByCreatedAt.data.map(
                ({ _id, title, note, updated_at, user_id }) => (
                  <Tr key={_id}>
                    <Td>{title}</Td>
                    <Td>{note}</Td>
                    <Td>{new Date(updated_at).toLocaleString()}</Td>
                    <Td>{user_id.replace(/^user_id_/, "")}</Td>
                  </Tr>
                )
              )}
            </Tbody>
          </Table>
        </Box>
      </Box>
    </Box>
  );
};
