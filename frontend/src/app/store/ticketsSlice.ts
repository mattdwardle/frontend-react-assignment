import { createSlice } from '@reduxjs/toolkit'
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { TicketsListTableItemVM } from '../tables/TicketsListTable'

interface Tickets {
    data: TicketsListTableItemVM[]
}

// Decided to use the RTK Query instead of the AsyncThunk as it handles the caching and the loading state
// can be used with the useGetAllTicketsQuery hook and can easily add more endpoints and polling
// mutation can be used with the useAddNewTicketMutation hook which updates the store automatically
// https://redux-toolkit.js.org/rtk-query/overview
export const ticketsApi = createApi({
    reducerPath: 'ticketsApi',
    baseQuery: fetchBaseQuery({ baseUrl: '/' }),
    endpoints: (builder) => ({
        getAllTickets: builder.query<Tickets, void>({
            query: () => 'tickets',
        }),
        addNewTicket: builder.mutation<{ message: string }, Partial<TicketsListTableItemVM>>({
            query: (body) => ({
                url: `tickets`,
                method: 'POST',
                body: {
                    ticket: {
                        ...body,
                    },
                },
            }),
        }),
    }),
})

const initialState = {}

export const ticketsSlice = createSlice({
    name: 'tickets',
    initialState,
    reducers: {
        fn: (state) => {
            // implement the reducers
        },
    },
})

// Action creators are generated for each case reducer function
export const { fn } = ticketsSlice.actions

export const { useGetAllTicketsQuery, useAddNewTicketMutation } = ticketsApi

export default ticketsSlice.reducer
