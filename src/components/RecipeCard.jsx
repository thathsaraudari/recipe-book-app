import { Link } from "react-router-dom";

const RecipeCard = ({recipe, onDelete}) => (
     <Link to={`/recipes/${recipe.id}`} style={{ textDecoration: 'none', color: 'inherit' }}>
        <div className="recipe-card">
            <img src={recipe.image} alt={recipe.name} width="150" />
            <h3>{recipe.name}</h3>
            <p>servings: {recipe.servings}</p>
            <p>
                Calories: {recipe.calories}{" "}
                {recipe.calories < 300 ? "🥗" : "🍔"}
            </p>
            <button onClick={() => onDelete(recipe.id)}>Delete</button>
        </div>
    </Link>
)

export default RecipeCard;
