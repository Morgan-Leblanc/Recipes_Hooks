import React, { useState } from "react";
import Header from "./components/Header";
import Admin from "./components/Admin";
import Cards from "./components/Cards";
import ManageRecipe from "./components/ManageRecipe";
import { Provider as RecipeProvider } from "./context/RecipeContext";
// CSS
import "./App.css";

const App = props => {
  const [pseudo, setPseudo] = useState(props.match.params.pseudo);

  return (
    <div className="box">
      <RecipeProvider>
        <Header pseudo={pseudo} />
        <Cards pseudo={pseudo} />
        <ManageRecipe/>
        <Admin />
      </RecipeProvider>
    </div>
  );
};

export default App;
