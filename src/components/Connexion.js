import React, { useState } from "react";
import { Redirect } from "react-router-dom";

const Connexion = () => {
  const [pseudo, setPseudo] = useState("");
  const [goToApp, setGoToApp] = useState(false);

  const startApp = event => {
    event.preventDefault();
    setGoToApp(true);
  };

  const handleChange = event => {
    const pseudo = event.target.value;
    setPseudo(pseudo);
  };

  if (goToApp) {
    return <Redirect push to={`/pseudo/${pseudo}`} />;
  }

  return (
    <div className="connexionBox">
      <form className="connexion" onSubmit={startApp}>
        <h1>Ma Boîte à Recettes</h1>
        <input
          type="text"
          value={pseudo}
          onChange={handleChange}
          placeholder="Nom du Chef"
          pattern="[A-Za-z-]{1,}"
          required
        />
        <button type="submit">GO</button>
        <p>Pas de caractères spéciaux.</p>
      </form>
    </div>
  );
};

export default Connexion;
