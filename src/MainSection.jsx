import { useState } from "react";

export default function MainSection() {
  const [ingredients, setIngredients] = useState([]);
  const ingredientsListItems = ingredients.map((item, index) => (
    <li key={index}>{item}</li>
  ));

  const handleFormSubmit = (formData) => {
    //get the form object
    console.log(Object.fromEntries(formData));
    const newIngredient = formData.get("ingredient");
    if (newIngredient.trim() !== "") {
      setIngredients((prevIngrediants) => [...prevIngrediants, newIngredient]);
    }
  };
  return (
    <>
      <form action={handleFormSubmit} className="add-ingredient-form">
        <input
          type="text"
          name="ingredient"
          id="ingredient"
          placeholder="e.g. oregano"
        />
        <button type="submit">Add ingreadient</button>
      </form>
      <section>
        {ingredients.length > 0 && (
          <div>
            <h2>Ingredients on hand:</h2>
            <ul className="ingredients-list" aria-live="polite">
              {ingredientsListItems}
            </ul>
          </div>
        )}
        <div className="get-recipe-container">
          <div>
            <h3>Ready for a recipe?</h3>
            <p>Generate a recipe from your list of ingredients.</p>
          </div>
          <button>Get a recipe</button>
        </div>
      </section>
    </>
  );
}
