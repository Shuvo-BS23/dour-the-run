import { ActionTree } from "vuex";
import { RootState } from "../../types";
import { authState } from "./types";

export const actions: ActionTree<authState, RootState> = {
  getLoggedIn({ commit }, payload) {
    commit("SET_LOGIN_STATE", true);
  },
};
