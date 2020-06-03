import React from "react";

//to display the ingredients

const RecipeDetail = ({ ingredients }) => {
  return ingredients.map(ingredient => {
    return (
      <div className="ingredient-list">{ingredient.text}
      </div>
    );
  });
};

export default RecipeDetail;
