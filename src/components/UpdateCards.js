import React, { useContext, useState, useEffect } from "react";
import { Context as RecipeContext } from "../context/RecipeContext";
import DeleteCards from "./DeleteCards";

const UpdateCards = ({ id, recipes }) => {
  const {
    state: { recipe },
    updateRecipe
  } = useContext(RecipeContext);

  const recip = recipe.find(recipe => recipe.id === id);

  const [nom, setNom] = useState(recip.nom);
  const [image, setImage] = useState(recip.image);
  const [ingredients, setIngrédients] = useState(recip.ingredients);
  const [instructions, setInstructions] = useState(recip.instructions);
  const [display, setDisplay] = useState(false);
   
  const setChange = () => {
    setDisplay(!display);
  };



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
                onChange={e => {const newObject =  e.target.value
                setIngrédients(newObject)}}
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
                  updateRecipe(recip.id, nom, image, ingredients, instructions)

                }
              >
                Check
              </button>
            </div>
            <DeleteCards id={id} />
          </div>
      ) : null}
    </div>
  );
};

export default UpdateCards;
