import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions =  {}
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  Date: any;
  /** The `Long` scalar type represents non-fractional signed whole numeric values. Long can represent values between -(2^63) and 2^63 - 1. */
  Long: any;
  Time: any;
};









export type Mutation = {
  __typename?: 'Mutation';
  /** Create a new document in the collection of 'Todo' */
  createTodo: Todo;
  deleteTodo?: Maybe<Todo>;
  completeTodo?: Maybe<Todo>;
  addTodo?: Maybe<Todo>;
  /** Update an existing document in the collection of 'Todo' */
  updateTodo?: Maybe<Todo>;
};


export type MutationCreateTodoArgs = {
  data: TodoInput;
};


export type MutationDeleteTodoArgs = {
  id: Scalars['String'];
  user_id: Scalars['String'];
};


export type MutationCompleteTodoArgs = {
  id: Scalars['String'];
  user_id: Scalars['String'];
};


export type MutationAddTodoArgs = {
  user_id: Scalars['String'];
  title: Scalars['String'];
  note: Scalars['String'];
};


export type MutationUpdateTodoArgs = {
  id: Scalars['ID'];
  data: TodoInput;
};

export type Query = {
  __typename?: 'Query';
  /** Find a document from the collection of 'Todo' by its id. */
  findTodoByID?: Maybe<Todo>;
  allTodos: TodoPage;
  GetAllCompletedTodoSortedByCreatedAt: QueryGetAllCompletedTodoSortedByCreatedAtPage;
  GetAllTodosSortedByCreatedAt: QueryGetAllTodosSortedByCreatedAtPage;
};


export type QueryFindTodoByIdArgs = {
  id: Scalars['ID'];
};


export type QueryAllTodosArgs = {
  _size?: Maybe<Scalars['Int']>;
  _cursor?: Maybe<Scalars['String']>;
};


export type QueryGetAllCompletedTodoSortedByCreatedAtArgs = {
  _size?: Maybe<Scalars['Int']>;
  _cursor?: Maybe<Scalars['String']>;
};


export type QueryGetAllTodosSortedByCreatedAtArgs = {
  _size?: Maybe<Scalars['Int']>;
  _cursor?: Maybe<Scalars['String']>;
};

/** The pagination object for elements of type 'Todo'. */
export type QueryGetAllCompletedTodoSortedByCreatedAtPage = {
  __typename?: 'QueryGetAllCompletedTodoSortedByCreatedAtPage';
  /** The elements of type 'Todo' in this page. */
  data: Array<Maybe<Todo>>;
  /** A cursor for elements coming after the current page. */
  after?: Maybe<Scalars['String']>;
  /** A cursor for elements coming before the current page. */
  before?: Maybe<Scalars['String']>;
};

/** The pagination object for elements of type 'Todo'. */
export type QueryGetAllTodosSortedByCreatedAtPage = {
  __typename?: 'QueryGetAllTodosSortedByCreatedAtPage';
  /** The elements of type 'Todo' in this page. */
  data: Array<Maybe<Todo>>;
  /** A cursor for elements coming after the current page. */
  after?: Maybe<Scalars['String']>;
  /** A cursor for elements coming before the current page. */
  before?: Maybe<Scalars['String']>;
};


export type Todo = {
  __typename?: 'Todo';
  /** The document's ID. */
  _id: Scalars['ID'];
  user_id: Scalars['String'];
  completed: Scalars['Boolean'];
  note: Scalars['String'];
  created_at: Scalars['String'];
  title: Scalars['String'];
  updated_at?: Maybe<Scalars['String']>;
  /** The document's timestamp. */
  _ts: Scalars['Long'];
};

/** 'Todo' input values */
export type TodoInput = {
  user_id: Scalars['String'];
  title: Scalars['String'];
  note: Scalars['String'];
  created_at: Scalars['String'];
  updated_at?: Maybe<Scalars['String']>;
  completed: Scalars['Boolean'];
};

/** The pagination object for elements of type 'Todo'. */
export type TodoPage = {
  __typename?: 'TodoPage';
  /** The elements of type 'Todo' in this page. */
  data: Array<Maybe<Todo>>;
  /** A cursor for elements coming after the current page. */
  after?: Maybe<Scalars['String']>;
  /** A cursor for elements coming before the current page. */
  before?: Maybe<Scalars['String']>;
};

export type AddTodoMutationVariables = Exact<{
  user_id: Scalars['String'];
  title: Scalars['String'];
  note: Scalars['String'];
}>;


export type AddTodoMutation = { __typename?: 'Mutation', addTodo?: Maybe<{ __typename?: 'Todo', _id: string, user_id: string, title: string, note: string, created_at: string, updated_at?: Maybe<string>, completed: boolean }> };

export type CompleteTodoMutationVariables = Exact<{
  id: Scalars['String'];
  user_id: Scalars['String'];
}>;


export type CompleteTodoMutation = { __typename?: 'Mutation', completeTodo?: Maybe<{ __typename?: 'Todo', _id: string, user_id: string, title: string, note: string, updated_at?: Maybe<string>, created_at: string, completed: boolean }> };

export type DeleteTodoMutationVariables = Exact<{
  id: Scalars['String'];
  user_id: Scalars['String'];
}>;


export type DeleteTodoMutation = { __typename?: 'Mutation', deleteTodo?: Maybe<{ __typename?: 'Todo', _id: string }> };

export type AllTodosQueryVariables = Exact<{ [key: string]: never; }>;


export type AllTodosQuery = { __typename?: 'Query', GetAllTodosSortedByCreatedAt: { __typename?: 'QueryGetAllTodosSortedByCreatedAtPage', data: Array<Maybe<{ __typename?: 'Todo', _id: string, user_id: string, title: string, note: string, created_at: string, updated_at?: Maybe<string>, completed: boolean }>> } };

export type GetCompletedTodosQueryVariables = Exact<{ [key: string]: never; }>;


export type GetCompletedTodosQuery = { __typename?: 'Query', GetAllCompletedTodoSortedByCreatedAt: { __typename?: 'QueryGetAllCompletedTodoSortedByCreatedAtPage', data: Array<Maybe<{ __typename?: 'Todo', _id: string, user_id: string, title: string, note: string, created_at: string, updated_at?: Maybe<string>, completed: boolean }>> } };


export const AddTodoDocument = gql`
    mutation AddTodo($user_id: String!, $title: String!, $note: String!) {
  addTodo(user_id: $user_id, title: $title, note: $note) {
    _id
    user_id
    title
    note
    created_at
    updated_at
    completed
  }
}
    `;
export type AddTodoMutationFn = Apollo.MutationFunction<AddTodoMutation, AddTodoMutationVariables>;

/**
 * __useAddTodoMutation__
 *
 * To run a mutation, you first call `useAddTodoMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useAddTodoMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [addTodoMutation, { data, loading, error }] = useAddTodoMutation({
 *   variables: {
 *      user_id: // value for 'user_id'
 *      title: // value for 'title'
 *      note: // value for 'note'
 *   },
 * });
 */
export function useAddTodoMutation(baseOptions?: Apollo.MutationHookOptions<AddTodoMutation, AddTodoMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<AddTodoMutation, AddTodoMutationVariables>(AddTodoDocument, options);
      }
export type AddTodoMutationHookResult = ReturnType<typeof useAddTodoMutation>;
export type AddTodoMutationResult = Apollo.MutationResult<AddTodoMutation>;
export type AddTodoMutationOptions = Apollo.BaseMutationOptions<AddTodoMutation, AddTodoMutationVariables>;
export const CompleteTodoDocument = gql`
    mutation CompleteTodo($id: String!, $user_id: String!) {
  completeTodo(id: $id, user_id: $user_id) {
    _id
    user_id
    title
    note
    updated_at
    created_at
    completed
  }
}
    `;
export type CompleteTodoMutationFn = Apollo.MutationFunction<CompleteTodoMutation, CompleteTodoMutationVariables>;

/**
 * __useCompleteTodoMutation__
 *
 * To run a mutation, you first call `useCompleteTodoMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCompleteTodoMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [completeTodoMutation, { data, loading, error }] = useCompleteTodoMutation({
 *   variables: {
 *      id: // value for 'id'
 *      user_id: // value for 'user_id'
 *   },
 * });
 */
export function useCompleteTodoMutation(baseOptions?: Apollo.MutationHookOptions<CompleteTodoMutation, CompleteTodoMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CompleteTodoMutation, CompleteTodoMutationVariables>(CompleteTodoDocument, options);
      }
export type CompleteTodoMutationHookResult = ReturnType<typeof useCompleteTodoMutation>;
export type CompleteTodoMutationResult = Apollo.MutationResult<CompleteTodoMutation>;
export type CompleteTodoMutationOptions = Apollo.BaseMutationOptions<CompleteTodoMutation, CompleteTodoMutationVariables>;
export const DeleteTodoDocument = gql`
    mutation DeleteTodo($id: String!, $user_id: String!) {
  deleteTodo(id: $id, user_id: $user_id) {
    _id
  }
}
    `;
export type DeleteTodoMutationFn = Apollo.MutationFunction<DeleteTodoMutation, DeleteTodoMutationVariables>;

/**
 * __useDeleteTodoMutation__
 *
 * To run a mutation, you first call `useDeleteTodoMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteTodoMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteTodoMutation, { data, loading, error }] = useDeleteTodoMutation({
 *   variables: {
 *      id: // value for 'id'
 *      user_id: // value for 'user_id'
 *   },
 * });
 */
export function useDeleteTodoMutation(baseOptions?: Apollo.MutationHookOptions<DeleteTodoMutation, DeleteTodoMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<DeleteTodoMutation, DeleteTodoMutationVariables>(DeleteTodoDocument, options);
      }
export type DeleteTodoMutationHookResult = ReturnType<typeof useDeleteTodoMutation>;
export type DeleteTodoMutationResult = Apollo.MutationResult<DeleteTodoMutation>;
export type DeleteTodoMutationOptions = Apollo.BaseMutationOptions<DeleteTodoMutation, DeleteTodoMutationVariables>;
export const AllTodosDocument = gql`
    query AllTodos {
  GetAllTodosSortedByCreatedAt {
    data {
      _id
      user_id
      title
      note
      created_at
      updated_at
      completed
    }
  }
}
    `;

/**
 * __useAllTodosQuery__
 *
 * To run a query within a React component, call `useAllTodosQuery` and pass it any options that fit your needs.
 * When your component renders, `useAllTodosQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useAllTodosQuery({
 *   variables: {
 *   },
 * });
 */
export function useAllTodosQuery(baseOptions?: Apollo.QueryHookOptions<AllTodosQuery, AllTodosQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<AllTodosQuery, AllTodosQueryVariables>(AllTodosDocument, options);
      }
export function useAllTodosLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<AllTodosQuery, AllTodosQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<AllTodosQuery, AllTodosQueryVariables>(AllTodosDocument, options);
        }
export type AllTodosQueryHookResult = ReturnType<typeof useAllTodosQuery>;
export type AllTodosLazyQueryHookResult = ReturnType<typeof useAllTodosLazyQuery>;
export type AllTodosQueryResult = Apollo.QueryResult<AllTodosQuery, AllTodosQueryVariables>;
export const GetCompletedTodosDocument = gql`
    query GetCompletedTodos {
  GetAllCompletedTodoSortedByCreatedAt {
    data {
      _id
      user_id
      title
      note
      created_at
      updated_at
      completed
    }
  }
}
    `;

/**
 * __useGetCompletedTodosQuery__
 *
 * To run a query within a React component, call `useGetCompletedTodosQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetCompletedTodosQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetCompletedTodosQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetCompletedTodosQuery(baseOptions?: Apollo.QueryHookOptions<GetCompletedTodosQuery, GetCompletedTodosQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetCompletedTodosQuery, GetCompletedTodosQueryVariables>(GetCompletedTodosDocument, options);
      }
export function useGetCompletedTodosLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetCompletedTodosQuery, GetCompletedTodosQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetCompletedTodosQuery, GetCompletedTodosQueryVariables>(GetCompletedTodosDocument, options);
        }
export type GetCompletedTodosQueryHookResult = ReturnType<typeof useGetCompletedTodosQuery>;
export type GetCompletedTodosLazyQueryHookResult = ReturnType<typeof useGetCompletedTodosLazyQuery>;
export type GetCompletedTodosQueryResult = Apollo.QueryResult<GetCompletedTodosQuery, GetCompletedTodosQueryVariables>;