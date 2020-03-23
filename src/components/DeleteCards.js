import React, { useContext } from "react";
import { Context as RecipeContext } from "../context/RecipeContext";

const DeleteCards = ({id}) => {
  const {
    deleteRecipe
  } = useContext(RecipeContext);

  return (
    <div>
      <button onClick={() => deleteRecipe(id)}>X</button>
    </div>
  );
};

export default DeleteCards;
