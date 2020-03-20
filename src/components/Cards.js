import React, { useState, useEffect, useContext } from "react";
import data from "../recettes";
import CardDisplay from "../components/CardDisplay";
import { Context as RecipeContext } from "../context/RecipeContext";

const Cards = () => {
  const {
    state: { recipe },
    addRecipe,
    reset
  } = useContext(RecipeContext);
  const [fill, setFill] = useState(false);

  const fillState = async () => {
    setFill(!fill);
  };

  useEffect(() => {
    if (fill) {
      addRecipe(Object.values(data));
    }
    if (fill === false) {
      reset();
    }
  }, [fill]);
  
  console.log(recipe);
  return (
    <div>
      <div>
        <CardDisplay />
      </div>
      <div>
        <footer>
          <button onClick={fillState}>Remplir</button>
        </footer>
      </div>
    </div>
  );
};

export default Cards;
