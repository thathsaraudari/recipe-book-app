import RecipeCard from "./RecipeCard";

const RecipeList = ({recipes, onDelete}) => (
    <div className="recipe-list">
        {recipes.map(recipe => (
            <RecipeCard key={recipe.id} recipe={recipe} onDelete={onDelete} />
        ))}
    </div>
)

export default RecipeList;