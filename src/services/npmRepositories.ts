import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

interface Response {
  objects: Result[];
  total: number;
  time: string;
}

interface Result {
  package: {
    [key: string]: any;
    name: string;
  };
  score: {};
  searchScore: number;
}

export const repositoriesApi = createApi({
  reducerPath: 'repositoriesApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://registry.npmjs.org/-/v1/search',
  }),

  endpoints: (builder) => ({
    getRepositoryByName: builder.query({
      query: (term: string) => ({
        url: '',
        params: {
          text: term,
        },
      }),
      transformResponse: (response: Response) =>
        response.objects.map((result: Result) => result.package.name),
    }),
  }),
});

export const { useGetRepositoryByNameQuery } = repositoriesApi;
