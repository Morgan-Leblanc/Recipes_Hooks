import React from "react";

const Header = ({ pseudo }) => {
  const formatePseudo = pseudo =>
    /[aeiouy]/i.test(pseudo[0]) ? `d'${pseudo}` : `de ${pseudo}`;

  return (
    <header>
      <h1>La Boite a recette {formatePseudo(pseudo)}</h1>
    </header>
  );
};

export default Header;
