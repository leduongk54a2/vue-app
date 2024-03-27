import {
  GET_ALL_CATEGORY,
  ADD_CATEGORY,
  DELETE_CATEGORY,
} from "@/store/modules/category/actions-type";
import {
  addCategoryApi,
  deleteCategoryApi,
  getAllCategoryApi,
} from "@/services/category";
import {
  SET_LIST_CATEGORY,
  SET_LOADING,
} from "@/store/modules/category/mutation-type";

const initialState = {
  listCategory: [],
  loading: false,
};
export const state = { ...initialState };

export const actions = {
  async [GET_ALL_CATEGORY](context, params) {
    context.commit(SET_LOADING, true);
    const response = await getAllCategoryApi(params);
    context.commit(SET_LOADING, false);
    if (response.data) context.commit(SET_LIST_CATEGORY, response.data);
    return response;
  },
  async [ADD_CATEGORY](context, params) {
    context.commit(SET_LOADING, true);
    const response = await addCategoryApi(params);
    context.commit(SET_LOADING, false);
    return response;
  },
  async [DELETE_CATEGORY](context, ids) {
    context.commit(SET_LOADING, true);
    const response = await deleteCategoryApi(ids);
    context.commit(SET_LOADING, false);
    return response;
  },
};

export const mutations = {
  [SET_LOADING](state, loading) {
    state.loading = loading;
  },
  [SET_LIST_CATEGORY](state, listCategory) {
    state.listCategory = listCategory;
  },
};

const getters = {
  listCategory(state) {
    return state.listCategory;
  },
  loading(state) {
    return state.loading;
  },
};

export default {
  state,
  actions,
  mutations,
  getters,
};
