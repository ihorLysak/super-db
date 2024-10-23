import { createAsyncThunk } from "@reduxjs/toolkit";
import { AsyncThunkConfig } from "../../types/async-thunk-config";
import { MinimalSuperheroDto } from "../../../types/types";

const getAllHeroes = createAsyncThunk<
  MinimalSuperheroDto[],
  void,
  AsyncThunkConfig
>("products-list/get-all-products", async () => {
  const response = await fetch("http://localhost:3000/products");
  const data = (await response.json()) as MinimalSuperheroDto[];
  return data;
});

export { getAllHeroes };
