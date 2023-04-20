import { configureStore } from '@reduxjs/toolkit'
import ticketsReducer, { ticketsApi } from './ticketsSlice'

export const store = configureStore({
    reducer: {
        tickets: ticketsReducer,
        [ticketsApi.reducerPath]: ticketsApi.reducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(ticketsApi.middleware),
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch
