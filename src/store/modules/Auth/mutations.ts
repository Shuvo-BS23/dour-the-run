import { MutationTree } from "vuex";
import { authState } from "./types";

export const mutations: MutationTree<authState> = {
  SET_LOGIN_STATE(state, payload: boolean) {
    state.isLoggedin = payload;
  },
};
