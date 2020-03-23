import createDataContext from "./createDataContext";
const recipeReducer = (state, action) => {
  switch (action.type) {
    case "add_recipe":
      return { ...state, recipe: [...state.recipe, action.payload] };
    case "fetch_recipe":
      return { ...state, recipe: action.payload };
    case "delete_recipe":
      return {...state,
        recipe: state.recipe.filter(
          newRecipe => newRecipe.id !== action.payload
        )
      };
    case "update_recipe":
      return {
        recipe: state.recipe.map(newRecipe => {
          return newRecipe.id === action.payload.id
            ? action.payload
            : newRecipe;
        })
      };
    case "reset_state":
      return { ...state, recipe: [] };
    default:
      return state;
  }
};



const fetchRecipe = dispatch => recipe => {
  dispatch({ type: "fetch_recipe", payload: recipe });
};
const addRecipe = dispatch => recipe => {
  dispatch({ type: "add_recipe", payload: recipe });
};

const deleteRecipe = dispatch => {
  return id => {
    dispatch({ type: "delete_recipe", payload: id });
  };
};

const updateRecipe = dispatch => {
  return (id, nom, image, ingredients, instructions) =>
    dispatch({
      type: "update_recipe",
      payload: { id, nom, image, ingredients, instructions }
    });
};

const reset = dispatch => recipe => {
  dispatch({ type: "reset_state", payload: recipe });
};

export const { Context, Provider } = createDataContext(
  recipeReducer,
  {
    fetchRecipe,
    deleteRecipe,
    updateRecipe,
    addRecipe,
    reset
  },
  { recipe: [] }
);
