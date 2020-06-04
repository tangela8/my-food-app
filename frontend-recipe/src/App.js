import React, { useState } from 'react';
import './App.css';
import RecipeRoutes from './component/RecipeRoutes';
import Axios from "axios";
import Recipe from "./component/Recipe";


function App() {

  const [query, setQuery] = useState("");
  const [recipes, setRecipes] = useState([]);

  const YOUR_APP_ID = "6d63820c";
  const YOUR_APP_KEY = "5058aa743f9cc356f1c0c9d75755afec";

  const url = `https://api.edamam.com/search?q=${query}&app_id=${YOUR_APP_ID}&app_key=${YOUR_APP_KEY}`;

  const getData = async () => {
    if (query !== "") {
      const result = await Axios.get(url);

      console.log(result);
      setRecipes(result.data.hits);
      setQuery("");
    }
  };

  const onChange = e => setQuery(e.target.value);

  const onSubmit = e => {
    e.preventDefault();
    getData();
  };

  return (

    <div className="App">
      <h1>Recipe Search</h1>
      <form onSubmit={onSubmit} className="search-form">
        <input
          type="text"
          name="query"
          onChange={onChange}
          value={query}
          placeholder="Search Food"
        />
        <input type="submit" value="Search" />
      </form>
      <div className="recipes">
        {recipes !== [] &&
          recipes.map(recipe => <Recipe recipe={recipe} />)}
      </div>
      <div className="container">
        <RecipeRoutes />
    </div>
    </div>
  );
}

export default App;
