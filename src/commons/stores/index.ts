import { atom, selector } from "recoil";
import { getAccessToken } from "../library/getAccessToken";

export const accessTokenState = atom({
  key: "accessTokenState",
  default: "",
});

export const restoreAccessTokenLoadable = selector({
  key: "restoreAccessTokenLoadable",
  get: async () => {
    const newAccessToken = await getAccessToken();
    return newAccessToken;
  },
});

export const modalState = atom({
  key: "modalState",
  default: false,
});
export const modalState2 = atom({
  key: "modalState2",
  default: false,
});
export const boardImageState = atom({
  key: "boardImageState",
  default: "",
});
export const mapPathState = atom({
  key: "mapPathState",
  default: "",
});
export const mapCenterState = atom({
  key: "mapCenterState",
  default: "",
});
export const mapPathViewState = atom({
  key: "mapPathState",
  default: [],
});
export const mapCenterViewState = atom({
  key: "mapCenterState",
  default: [],
});