import { useState } from "react";

export default function MainSection(){

    const [ingredients, setIngredients] = useState(["Chicken", "Oregano", "Tomatoes"]);
    const ingredientsListItems = ingredients.map((item, index) => (
        <li key={index}>{item}</li>
    ));

    

    const handleFormSubmit = (e)=>{
        e.preventDefault();        
        console.log(ingredients);
        
    }
    return(
        <>
        <form  onSubmit={handleFormSubmit} className="add-ingredient-form" >
            <input type="text" name="ingredient" id="ingredient" placeholder="e.g. oregano"/>
            <button type="submit">Add ingreadient</button>
        </form>
        <ul>
            {ingredientsListItems}
        </ul>
        </>
    )
}