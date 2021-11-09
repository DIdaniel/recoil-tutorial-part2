import { selector } from "recoil";
import { boringActivities as boringAtom, selectedActivityType as selectedAtom } from "./atoms";
import { Types } from "./types";

export const filterActivities = selector({
  key: "filterActivities",
  get: ({ get }) => {
    const myFilter = get(selectedAtom);
    const myList = get(boringAtom);

    if (myFilter === Types[0]) {
      return myList;
    } else {
      return myList.filter((item) => item.type === myFilter);
    }
  },
});
