import Vuex, { StoreOptions } from "vuex";
import { Auth } from "./modules/Auth";
import { RootState } from "./types";

const store: StoreOptions<RootState> = {
  modules: {
    Auth,
  },
};

export default new Vuex.Store<RootState>(store);
