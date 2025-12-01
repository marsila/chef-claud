import { useState } from "react";

export default function MainSection(){

    const [ingredients, setIngredients] = useState([]);
    const ingredientsListItems = ingredients.map((item, index) => (
        <li key={index}>{item}</li>
    ));

    

    const handleFormSubmit = (e)=>{
        e.preventDefault();        
        console.log(ingredients);
        //FormData API
        const formData = new FormData(e.currentTarget);
        const newIngredient = formData.get("ingredient");        
        setIngredients(prevIngrediants => [...prevIngrediants,newIngredient]);
        e.currentTarget.reset();        
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