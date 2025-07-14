import { useState } from "react";
import RecipeList from "../components/RecipeList";
import recipesData from "../data/recipes.json";

const Home = () => {
    const [recipes, setRecipes] = useState(recipesData);

    const handleDelete = (id) => {
        const updatedRecipes = [];

        for (let i = 0; i < recipes.length; i++) {
            if (recipes[i].id !== id) {
            updatedRecipes.push(recipes[i]);
            }
        }

        setRecipes(updatedRecipes);
    }

    return (
        <div>
            <h2>Recipe Dashboard</h2>
            <RecipeList recipes={recipes} onDelete={handleDelete} />
        </div>
    );

};
export default Home;
