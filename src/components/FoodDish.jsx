import { useEffect, useState } from "react"
import { FoodDishService } from "../services/foodDish.service";

export const FoodDish = () => {

    const [image, setImage] = useState('');
    const [category, setCategory] = useState('');

    useEffect(() => {
        FoodDishService(category).then((image) =>{
            setImage(image);
        })
    }, [category])

    const onButtonClick = (event) =>{
        FoodDishService(category).then((image) =>{
            setImage(image);
        })
    }

    const onInputChange = (event) =>{
        const value = event.target.value;

        setCategory(value);
    }

    return (
        <>
            <div className="foodish-container">
                <h1>Componente consumo API</h1>
                <input onChange={onInputChange} value={category} type="text"/>
                <button onClick={onButtonClick}>Refresh image</button>
                <img src={image} className="image"/>
            </div>
        </>
    )
}