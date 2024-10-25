import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import {
  FullSuperheroDto,
  MinimalSuperheroDto,
} from "../../../libs/types/types";
import { getAllHeroes, createHero, deleteHero } from "./actions";

interface State {
  heroes: MinimalSuperheroDto[];
  isLoading: boolean;
  pageIndex: number;
}

const initialState: State = {
  heroes: [],
  isLoading: false,
  pageIndex: 1,
};

const { actions, reducer } = createSlice({
  initialState,
  name: "feed",
  reducers: {
    setPageIndex(state, action: PayloadAction<number>) {
      state.pageIndex = action.payload;
    },
  },
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

    builder.addCase(createHero.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(
      createHero.fulfilled,
      (state, action: PayloadAction<FullSuperheroDto>) => {
        state.heroes = [...state.heroes, action.payload];
        state.isLoading = false;
      }
    );
    builder.addCase(createHero.rejected, (state) => {
      state.isLoading = false;
    });

    builder.addCase(deleteHero.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(
      deleteHero.fulfilled,
      (state, action: PayloadAction<number>) => {
        state.isLoading = false;

        const newHeroes = state.heroes.filter(
          (hero) => hero.id !== action.payload
        );

        state.heroes = newHeroes;
      }
    );
    builder.addCase(deleteHero.rejected, (state) => {
      state.isLoading = false;
    });
  },
});

export { actions, reducer };
