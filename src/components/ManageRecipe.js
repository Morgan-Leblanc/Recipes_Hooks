import React, { useState, useContext } from "react";
import { Context as RecipeContext } from "../context/RecipeContext";

const ManageRecipe = () => {
  const { addRecipe } = useContext(RecipeContext);
  const [nom, setNom] = useState("");
  const [image, setImage] = useState("");
  const [ingredients, setIngrédients] = useState("");
  const [instructions, setInstructions] = useState("");

  const handleSubmit = event => {
    event.preventDefault();
    const recipe = {
      nom,
      image,
      ingredients,
      instructions
    };
    addRecipe(recipe);
  };

  return (
    <div>
      <div className="cards">
        <form className="admin-form ajouter-recette">
          <input
            name="nom"
            value={nom}
            placeholder="Rentrez un nom pour la recette"
            onChange={e => setNom(e.target.value)}
          ></input>
          <input
            name="image"
            value={image}
            placeholder="insérez une image"
            onChange={e => setImage(e.target.value)}
          ></input>
          <textarea
            name="ingrédient"
            value={ingredients}
            placeholder="Insérez des ingrédients"
            rows="3"
            onChange={e => setIngrédients(e.target.value)}
          ></textarea>
          <textarea
            name="instructions"
            value={instructions}
            placeholder="Insérez des instructions"
            rows="15"
            onChange={e => setInstructions(e.target.value)}
          ></textarea>
          <button onClick={handleSubmit}>check</button>
        </form>
      </div>
    </div>
  );
};

export default ManageRecipe;
