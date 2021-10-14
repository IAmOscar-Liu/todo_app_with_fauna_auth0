import { CompletedTodos } from "../components/Todo/CompletedTodos";
import { withApollo } from "../utils/withApollo";
import useSWR from "swr";

const Completed = () => {
  useSWR("/api/accessToken");
  // const { user, isLoading, error } = useUser();
  // if (isLoading) return <div>Loading...</div>;

  // if (error) return <div>{error.message}</div>;

  // if (!user) return <div>Please Login</div>;

  return <CompletedTodos />;
};

export default withApollo({ ssr: true })(Completed);
