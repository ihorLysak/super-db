import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { FullSuperheroDto } from "../../../libs/types/types";
import { getHeroDetails, changeHero } from "./actions";

interface State {
  heroDetails: FullSuperheroDto | null;
  isLoading: boolean;
}

const initialState: State = {
  heroDetails: null,
  isLoading: false,
};

const { actions, reducer } = createSlice({
  initialState,
  name: "details",
  reducers: {},
  extraReducers(builder) {
    builder.addCase(getHeroDetails.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(
      getHeroDetails.fulfilled,
      (state, action: PayloadAction<FullSuperheroDto>) => {
        state.heroDetails = action.payload;
        state.isLoading = false;
      }
    );
    builder.addCase(getHeroDetails.rejected, (state) => {
      state.isLoading = false;
    });

    builder.addCase(changeHero.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(
      changeHero.fulfilled,
      (state, action: PayloadAction<FullSuperheroDto>) => {
        state.heroDetails = action.payload;
        state.isLoading = false;
      }
    );
    builder.addCase(changeHero.rejected, (state) => {
      state.isLoading = false;
    });
  },
});

export { actions, reducer };
