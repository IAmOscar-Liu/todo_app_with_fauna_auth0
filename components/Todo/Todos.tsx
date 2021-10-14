import { Stack } from "@chakra-ui/react";
import { Todo } from "./Todo";
import { useAllTodosQuery } from "../../generated/graphql";

export const Todos = () => {
  const { data, loading, error } = useAllTodosQuery();

  if (loading) return <h1>loading</h1>;
  if (error) return <div>{error.message}</div>;

  return (
    <Stack spacing="5" justify="flex-start">
      {data.GetAllTodosSortedByCreatedAt.data.map(({ _id, user_id, title, note, completed, created_at }) => (
        <Todo
          key={_id}
          id={_id}
          title={title}
          note={note}
          userName={user_id}
          completed={completed}
          created_at={created_at}
        />
      ))}
    </Stack>
  );
};
