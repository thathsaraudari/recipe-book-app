const RecipeCard = ({recipe, onDelete}) => (
    <div className="recipe-card">
        <img src={recipe.image} alt={recipe.name} width="150" />
        <h3>{recipe.name}</h3>
        <p>servings: {recipe.servings}</p>
        <p>
            Calories: {recipe.calories}{" "}
            {recipe.calories < 300 ? "🥗" : "🍔"}
        </p>
        <p>{recipe.vegetarian ? "🌱 Vegetarian" : "🍖 Non-Vegetarian"}</p>
        <button onClick={() => onDelete(recipe.id)}>Delete</button>
    </div>

)

export default RecipeCard;
