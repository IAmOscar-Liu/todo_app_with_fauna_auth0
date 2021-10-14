import {
  ApolloClient,
  ApolloLink,
  HttpLink,
  InMemoryCache,
} from "@apollo/client";
import { getAccessToken } from "@auth0/nextjs-auth0";
import fetch from "isomorphic-fetch";
import { NextPageContext } from "next";
import { createWithApollo } from "./createWithApollo";

const createClient = (ctx: NextPageContext) => {
  const httpLink = new HttpLink({
    uri: "https://graphql.fauna.com/graphql", // "https://graphql.us.fauna.com/graphql",
    // credentials: "include",
  });

  const authLink = new ApolloLink((async (operation, forward) => {
    const getFaunadbAccessToken = async () => {
      try {
        if (typeof window === "undefined") {
          // server side
          console.log("server side accessToken");
          const { accessToken } = await getAccessToken(ctx.req, ctx.res);
          console.log(accessToken);
          return accessToken;
        } else {
          // client side
          return await fetch("/api/accessToken")
            .then((data) => {
              if (data.status === 401) {
                throw new Error("unauthorized");
              }
              return data.json();
            })
            .then((token) => token.accessToken);
        }
      } catch (e) {
        console.log("Error");
        console.log(e);
        return process.env.NEXT_PUBLIC_FAUNADB_USER_KEY;
      }
    };

    // if (typeof window === "undefined") {
    operation.setContext({
      headers: {
        authorization: `Bearer ${await getFaunadbAccessToken()}`,
      },
    });
    // }
    return forward(operation);
  }) as any);

  return new ApolloClient({
    link: ApolloLink.from([authLink, httpLink]),
    connectToDevTools: process.env.NODE_ENV === "development",
    cache: new InMemoryCache(),
  });
};

export const withApollo = createWithApollo(createClient);
