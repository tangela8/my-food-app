import React, { useState } from "react";
import RecipeIngredients from "./RecipeIngredients";

//this will show the ingredients and allow the user to click on a link for the recipe

const Recipe = ({ recipe }) => {
  const [show, setShow] = useState(false);
  const {label, image, url, ingredients} = recipe.recipe;

  return (
    <div className="recipe">
      <h2>{label}</h2>
      <img src={image} alt={label} />
      <a href={url}>
        Recipe Here!
      </a>
      <button onClick={() => setShow(!show)}>Ingredients</button>
      {show && <RecipeIngredients ingredients={ingredients} />}
    </div>
  );
};

export default Recipe;
