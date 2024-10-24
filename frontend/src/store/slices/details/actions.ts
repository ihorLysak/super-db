import { createAsyncThunk } from "@reduxjs/toolkit";
import { AsyncThunkConfig } from "../../types/async-thunk-config";
import {
  FullSuperheroDto,
  CreateSuperheroDto,
} from "../../../libs/types/types";

const getHeroDetails = createAsyncThunk<
  FullSuperheroDto,
  number,
  AsyncThunkConfig
>("details/get-hero-details", async (payload) => {
  const response = fetch(`http://localhost:3000/superheroes/${payload}`);
  return (await response).json();
});

interface ChangeHeroPayload {
  dataToChange: CreateSuperheroDto;
  id: number;
}

const changeHero = createAsyncThunk<
  FullSuperheroDto,
  ChangeHeroPayload,
  AsyncThunkConfig
>("details/change-hero", async (payload) => {
  const response = fetch(`http://localhost:3000/superheroes/${payload.id}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload.dataToChange),
  });
  return (await response).json();
});

export { getHeroDetails, changeHero };