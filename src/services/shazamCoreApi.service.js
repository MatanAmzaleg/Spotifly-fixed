
import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react"


export const shazamCoreApi = createApi({
  reducerPath: 'shazamCoreApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://shazam-core.p.rapidapi.com/v1',
    prepareHeaders: (headers) => {
      headers.set('X-RapidAPI-Key', '124c61629emsha6267252681b2fbp19e71cjsnd6bf29d6dd59')
      return headers
    }
  }),
  endpoints: (builder) => ({
    getTopCharts: builder.query({
      query: () => '/charts/world',
    })
  })
})

export const {
  useGetTopChartsQuery,

} = shazamCoreApi


