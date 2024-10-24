import { createAsyncThunk } from "@reduxjs/toolkit";
import { AsyncThunkConfig } from "../../types/async-thunk-config";
import {
  MinimalSuperheroDto,
  CreateSuperheroDto,
  FullSuperheroDto,
} from "../../../libs/types/types";

const createHero = createAsyncThunk<
  FullSuperheroDto,
  CreateSuperheroDto,
  AsyncThunkConfig
>("feed/create-hero", async (payload) => {
  const response = await fetch("http://localhost:3000/superheroes", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
  });

  return (await response.json()) as FullSuperheroDto;
});

const getAllHeroes = createAsyncThunk<
  MinimalSuperheroDto[],
  void,
  AsyncThunkConfig
>("feed/get-all-products", async () => {
  const response = await fetch("http://localhost:3000/superheroes");
  const data = (await response.json()) as MinimalSuperheroDto[];
  return data;
});

const deleteHero = createAsyncThunk<number, number, AsyncThunkConfig>(
  "feed/delete-hero",
  async (payload) => {
    await fetch(`http://localhost:3000/superheroes/${payload}`, {
      method: "DELETE",
    });

    return payload;
  }
);

export { createHero, getAllHeroes, deleteHero };
