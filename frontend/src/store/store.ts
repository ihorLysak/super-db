import { configureStore } from "@reduxjs/toolkit";
import { reducer as feedReducer } from "./slices/feed/feed";

export const store = configureStore({
  reducer: {
    feed: feedReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
