import axios from "axios";
import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react"


export const youTubeCoreApi = createApi({
  reducerPath: 'youTubeCoreApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://youtube-search-results.p.rapidapi.com',
    prepareHeaders: (headers) => {
      headers.set('X-RapidAPI-Key', '124c61629emsha6267252681b2fbp19e71cjsnd6bf29d6dd59')

      return headers
    }
  }),
  endpoints: (builder) => ({
    getTopCharts: builder.query({
      query: () => '/youtube-search/?q=justin%20bieber',
    })
  })
})

export const {
  useGetTopChartsQuery,

} = youTubeCoreApi


