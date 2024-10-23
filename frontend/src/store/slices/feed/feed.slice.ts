import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { MinimalSuperheroDto } from "../../../types/types";
import { getAllHeroes } from "./actions";

interface State {
  heroes: MinimalSuperheroDto[];
  isLoading: boolean;
}

const initialState: State = {
  heroes: [],
  isLoading: false,
};

const { actions, reducer } = createSlice({
  initialState,
  name: "products-list",
  reducers: {},
  extraReducers(builder) {
    builder.addCase(getAllHeroes.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(
      getAllHeroes.fulfilled,
      (state, action: PayloadAction<MinimalSuperheroDto[]>) => {
        state.isLoading = false;
        state.heroes = action.payload;
      }
    );
    builder.addCase(getAllHeroes.rejected, (state) => {
      state.isLoading = false;
    });
  },
});

export { actions, reducer };
