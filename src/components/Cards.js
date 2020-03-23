import React, { useState, useEffect, useContext } from "react";
import data from "../recettes";
import CardDisplay from "../components/CardDisplay";
import { Context as RecipeContext } from "../context/RecipeContext";

const Cards = () => {
  const { fetchRecipe, reset } = useContext(RecipeContext);
  const [fill, setFill] = useState(true);

  const fillState = async () => {
    setFill(!fill);
  };

  useEffect(() => {
    if (fill) {
      fetchRecipe(Object.values(data));
    }
    if (fill === false) {
      reset();
    } else{

    }
  }, [fill]);
  
  
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
