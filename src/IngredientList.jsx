export default function IngredientList(props) {
  const ingredients = props.ingredients;
  const getRecipe = props.getRecipe;
  const loading = props.loading;
  console.log(loading);
  
  const ingredientsListItems = ingredients.map((item, index) => (
    <li key={index}>{item}</li>
  ));
  return (
    <section>
      <h2>Ingredients on hand:</h2>
      <ul className="ingredients-list" aria-live="polite">
        {ingredientsListItems}
      </ul>
      {ingredients.length > 3 && (
        <div className="get-recipe-container">
          <div>
            <h3>Ready for a recipe?</h3>
            <p>Generate a recipe from your list of ingredients.</p>
          </div>
          <button onClick={getRecipe} disabled={loading} 
            style={{ padding: '10px 20px', cursor: loading ? 'not-allowed' : 'pointer' }}
          >
            {loading ? 'Generating...' : 'Get a recipe'}
          </button>
        </div>
      )}
    </section>
  );
}
