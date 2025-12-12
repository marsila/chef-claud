import { useEffect, useRef, useState } from "react";
import RecipeCode from "./recipeCode";
import IngredientList from "./IngredientList";
import { generateContent } from "./ai";
import { Behavior } from "@google/genai";

export default function MainSection() {

  const [recipe, setRecipe] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const [ingredients, setIngredients] = useState([
    "all the main spices",
    "pasta",
    "ground beef",
    "tomato paste",
  ]);  

  const recipeSection = useRef(null);

  useEffect(() => {
    if(recipe !==""  && recipeSection.current !== null){
      recipeSection.current.scrollIntoView({behavior:"smooth"});
      // Another way in case the upper line didn't work:
      // const yCoord = recipeSection.current.getBoundingClientRect().top + window.scrollY
      //       window.scroll({
      //           top: yCoord,
      //           behavior: "smooth"
      //       })
    }
  }, [recipe])

  

  const handleFormSubmit = (formData) => {
    //get the form object
    //console.log(Object.fromEntries(formData));
    const newIngredient = formData.get("ingredient");
    if (newIngredient.trim() !== "") {
      setIngredients((prevIngrediants) => [...prevIngrediants, newIngredient]);
    }
  };

  async function getRecipe() {
    setLoading(true);
    setError(null);
    const recipeMarkdown = await generateContent(ingredients);
    setRecipe(recipeMarkdown);
    setLoading(prev => !prev);
    
    
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

      {ingredients.length > 0 && (
        <IngredientList
          ref = {recipeSection}
          ingredients={ingredients}
          getRecipe={getRecipe}
          loading ={loading}

        />
      )}
      {error && <p style={{ color: 'red', marginTop: '15px' }}>Error: {error}</p>}
      {recipe && <RecipeCode recipe={recipe} />}
    </>
  );
}
