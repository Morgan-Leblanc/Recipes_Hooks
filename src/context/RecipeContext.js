import createDataContext from "./createDataContext";
const recipeReducer = (state, action) => {
  switch (action.type) {
    case "fetch_data":
      return state;
    case "add_recipe":
      return { ...state, recipe: action.payload };
    case "delete_recipe":
      return { ...state, recipe: [...state.recipe, action.payload] };
    case "update_recipe":
      return null;
    case "reset_state":
      return { ...state, recipe: [] };
    default:
      return state;
  }
};


const addRecipe = dispatch => async recipe => {
 await dispatch({ type: "add_recipe", payload: recipe });
};
const deleteRecipe = dispatch => recipe => {
  dispatch({ type: "delete_recipe", payload: recipe });
};
const updateRecipe = dispatch => recipe => {
  dispatch({ type: "update_recipe", payload: recipe });
};
const reset = dispatch => recipe => {
  dispatch({ type: "reset_state", payload: recipe });
};

export const { Context, Provider } = createDataContext(
  recipeReducer,
  {
    addRecipe,
    deleteRecipe,
    updateRecipe,
    reset
  },
  { recipe:"" }
);
