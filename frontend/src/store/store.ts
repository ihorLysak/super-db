import { configureStore } from "@reduxjs/toolkit";
import { reducer as feedReducer } from "./slices/feed/feed";
import { reducer as detailsReducer } from "./slices/details/details";

export const store = configureStore({
  reducer: {
    feed: feedReducer,
    details: detailsReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
