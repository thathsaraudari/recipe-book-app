import { useParams } from "react-router-dom";
import recipeData from "../data/recipes.json";

const RecipeDetails = () => {
    const { recipeId } = useParams();
    const recipe = recipeData.find((r) => r.id === recipeId);

    return (
        <div style={{ padding: "1rem" }}>
            <h2>{recipe.name}</h2>
            <img src={recipe.image} alt={recipe.name} width="300" />
            <p><strong>Calories:</strong> {recipe.calories}</p>
            <p><strong>Servings:</strong> {recipe.servings}</p>
            <p>
                <strong>Calories:</strong> {recipe.calories}{" "}
                {recipe.calories < 300 ? "🥗" : "🍔"}
            </p>
        </div>
    )

};

export default RecipeDetails;