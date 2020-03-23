import React, { useContext } from "react";
import { Context as RecipeContext } from "../context/RecipeContext";

const DeleteCards = ({ id }) => {
  const { deleteRecipe } = useContext(RecipeContext);

  return (
    <div>
        <div className="admin-form">
          <button onClick={() => deleteRecipe(id)}>X</button>
        </div>
    </div>
  );
};

export default DeleteCards;
