import { Box, IconButton } from "@chakra-ui/react";
import { MdDelete } from "react-icons/md";
import useSWR from "swr";
import { AllTodosDocument, AllTodosQuery, useDeleteTodoMutation } from "../../generated/graphql";

interface Props {
  id: string;
}

export const DeleteTodo = ({ id }: Props) => {
  // const { user } = useUser();
  const { data: user } = useSWR("/api/auth/me");
  const [deleteTodo] = useDeleteTodoMutation();
  const handleRemoveTodo = async (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    e.preventDefault();
    await deleteTodo({
      variables: { id, user_id: "user_id_" + user.name },
      update: (cache) => {
        const prevCache = cache.readQuery<AllTodosQuery>({
          query: AllTodosDocument,
        });
        const newCache = {
          ...prevCache,
          GetAllTodosSortedByCreatedAt: {
            ...prevCache.GetAllTodosSortedByCreatedAt,
            data: prevCache.GetAllTodosSortedByCreatedAt.data.filter(
              ({ _id }) => _id !== id
            ),
          },
        };
        cache.writeQuery<AllTodosQuery>({
          query: AllTodosDocument,
          data: newCache,
        });
      },
      onError: (error) => window.alert(error.message),
    });
  };

  return (
    <Box>
      <IconButton
        variant="outline"
        border="none"
        color="blue.500"
        aria-label="delete"
        fontSize="20px"
        onClick={handleRemoveTodo}
        icon={<MdDelete />}
      />
    </Box>
  );
};
