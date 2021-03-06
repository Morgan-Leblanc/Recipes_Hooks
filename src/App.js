import React, { useState } from "react";
import Header from "./components/Header";
import Cards from "./components/Cards";
import ManageRecipe from "./components/ManageRecipe";
import { Provider as RecipeProvider } from "./context/RecipeContext";
// CSS
import "./App.css";

const App = props => {
  const [pseudo] = useState(props.match.params.pseudo);

  return (
    <div className="box">
      <RecipeProvider>
        <Header pseudo={pseudo} />
        <Cards pseudo={pseudo} />
        <ManageRecipe />
      </RecipeProvider>
    </div>
  );
};

export default App;
