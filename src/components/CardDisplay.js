import React, { useState, useContext } from "react";
import { Context as RecipeContext } from "../context/RecipeContext";

const CardDisplay = () => {
  const {
    state: { recipe }
  } = useContext(RecipeContext);
  // const ingrédients = recipes.ingredients
  //   .split(",")
  //   .map(item => <li key={item}>{item}</li>);

  // const instructions = recipes.instructions
  //   .split("\n")
  //   .map(item => <li key={item}>{item}</li>);

  const requireImage = path => {
    try {
      return require(`../img/${path}`);
    } catch {
      return require(`../img/default.jpeg`);
    }
  };

  console.log(recipe);

  return (
    <div>
      {recipe &&
        recipe.map((recipes,index) => {
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
              </div>
            </div>
          );
        })}
    </div>
  );
};

export default CardDisplay;
