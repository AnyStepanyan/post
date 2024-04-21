// src/store/index.js

// Will export all our modules

import Vuex from "vuex";

import main from "./main";

export default new Vuex.Store({
  modules: {
    main,
  },
});
