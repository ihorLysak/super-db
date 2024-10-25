import { MinimalSuperheroDto } from "../../../libs/types/minimal-superhero-dto.type";
import { DISPLAYED_ENTITIES_AMOUNT } from "../../../libs/constants/displayed-entities-amount.constant";

const getEntriesForPage = (
  pageIndex: number,
  heroes: MinimalSuperheroDto[]
) => {
  const sliceStart = (pageIndex - 1) * DISPLAYED_ENTITIES_AMOUNT;
  const sliceEnd = sliceStart + DISPLAYED_ENTITIES_AMOUNT;

  return heroes.slice(sliceStart, sliceEnd);
};

export { getEntriesForPage };
