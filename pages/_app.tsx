import { UserProvider } from "@auth0/nextjs-auth0";
import { ChakraProvider } from "@chakra-ui/react";
import { PageShell } from "../components/Layout/Pageshell";
import { SWRConfig } from "swr";
import axios from "axios";

// const httpLink = createHttpLink({
//   uri: "https://graphql.fauna.com/graphql", // "https://graphql.us.fauna.com/graphql",
// });

// const authLink = setContext((_, { headers }) => {
//   return {
//     headers: {
//       ...headers,
//       authorization: `Bearer ${process.env.NEXT_PUBLIC_FAUNADB_USER_KEY}`, // await extractAccessToken(ctx),
//     },
//   };
// });

// const client = new ApolloClient({
//   link: authLink.concat(httpLink),
//   connectToDevTools: process.env.NODE_ENV === "development",
//   cache: new InMemoryCache(),
// });

axios.defaults.baseURL = "http://localhost:3000";

function MyApp({ Component, pageProps }) {
  const { user } = pageProps;

  return (
    <ChakraProvider>
      <UserProvider user={user}>
        {/* <ApolloProvider client={client}> */}
        <SWRConfig
          value={{
            // dedupingInterval: 15000,
            fetcher: (url: string) =>
              axios(url)
                .then((r) => r.data)
                .catch(() => undefined),
          }}
        >
          <PageShell>
            <Component {...pageProps} />
          </PageShell>
        </SWRConfig>
        {/* </ApolloProvider> */}
      </UserProvider>
    </ChakraProvider>
  );
}

export default MyApp;
