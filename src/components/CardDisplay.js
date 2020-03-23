import React, { useContext } from "react";
import { Context as RecipeContext } from "../context/RecipeContext";
import UpdateCards from "./UpdateCards";


const CardDisplay = () => {
  const {
    state: { recipe }
  } = useContext(RecipeContext);
  console.log(recipe);

  const requireImage = path => {
    try {
      return require(`../img/${path}`);
    } catch {
      return require(`../img/default.jpeg`);
    }
  };

  return (
    <div>
      {recipe &&
        recipe.map(recipes => {
          return (
            <div className="cards">
              <div className="card">
                <div className="image">
                  <img
                    src={requireImage(recipes.image)}
                    alt={`image${recipes.nom}`}
                  />
                </div>
                <div className="recette">
                  <h1>{recipes.nom}</h1>
                  <ul className="liste-ingredients">{recipes.ingredients}</ul>
                  <ol className="liste-instructions">{recipes.instructions}</ol>
                </div>
                <UpdateCards id={recipes.id} recipes={recipes} />
              </div>
            </div>
          );
        })}
    </div>
  );
};


export default CardDisplay;
