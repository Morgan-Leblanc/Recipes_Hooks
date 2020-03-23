import React, { useContext, useState, useEffect } from "react";
import { Context as RecipeContext } from "../context/RecipeContext";
import DeleteCards from "./DeleteCards";

const UpdateCards = ({ id, recipes }) => {
  const { updateRecipe } = useContext(RecipeContext);
  const [nom, setNom] = useState(recipes.nom);
  const [image, setImage] = useState(recipes.image);
  const [ingredients, setIngrédients] = useState(recipes.ingredients);
  const [instructions, setInstructions] = useState(recipes.instructions);
  const [display, setDisplay] = useState(false);

  const setChange = () => {
    setDisplay(!display);
  };
  useEffect(() => {}, [recipes]);

  return (
    <div>
      <button onClick={() => setChange()}>Edit</button>
      {display ? (
        <div className="card">
          <div className="admin-form">
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
            <button
              onClick={() =>
                updateRecipe(id, nom, image, ingredients, instructions)
              }
            >
              checkup
            </button>
            <DeleteCards id={id} />
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default UpdateCards;
