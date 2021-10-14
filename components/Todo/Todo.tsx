import { FormEvent } from "react";
import useSWR from "swr";
import { ButtonCheckbox } from "../../components/Checkbox/Checkbox";
import {
  AllTodosDocument,
  AllTodosQuery,
  GetCompletedTodosDocument,
  useCompleteTodoMutation,
} from "../../generated/graphql";

interface Props {
  id: any;
  title: string;
  note: string;
  userName: String;
  created_at: string;
  completed: Boolean;
}

export const Todo = ({
  id,
  title,
  note,
  userName,
  completed,
  created_at,
}: Props) => {
  // const { user } = useUser();
  const { data: user } = useSWR("/api/auth/me");
  const [completeTodo] = useCompleteTodoMutation();

  const handleCompleteTodo = async (e: FormEvent<any>) => {
    e.preventDefault();
    await completeTodo({
      variables: {
        id,
        user_id: "user_id_" + user?.name,
      },
      refetchQueries: [{ query: GetCompletedTodosDocument }],
      update: (cache) => {
        const prevCache = cache.readQuery<AllTodosQuery>({
          query: AllTodosDocument,
        });
        const newCache = {
          ...prevCache,
          GetAllTodosSortedByCreatedAt: {
            ...prevCache.GetAllTodosSortedByCreatedAt,
            data: prevCache.GetAllTodosSortedByCreatedAt.data.map((todo) => {
              if (todo._id !== id) return todo;
              return {
                ...todo,
                completed: true,
              };
            }),
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
    <ButtonCheckbox
      value={id}
      onChange={handleCompleteTodo}
      id={id}
      title={title}
      note={note}
      userName={userName}
      completed={completed}
      created_at={created_at}
    ></ButtonCheckbox>
  );
};
