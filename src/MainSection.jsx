import { useState } from "react";

export default function MainSection(){

    const [ingredients, setIngredients] = useState([]);
    const ingredientsListItems = ingredients.map((item, index) => (
        <li key={index}>{item}</li>
    ));

    

    const handleFormSubmit = (formData)=>{
        //get the form object        
        console.log(Object.fromEntries(formData));
        const newIngredient = formData.get("ingredient");        
        setIngredients(prevIngrediants => [...prevIngrediants,newIngredient]);       
    }
    return(
        <>
        <form  action={handleFormSubmit} className="add-ingredient-form" >
            <input type="text" name="ingredient" id="ingredient" placeholder="e.g. oregano"/>
            <button type="submit">Add ingreadient</button>
        </form>
        <ul>
            {ingredientsListItems}
        </ul>
        </>
    )
}