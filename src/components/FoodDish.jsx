import { useEffect, useState } from "react"
import { FoodDishService } from "../services/foodDish.service";
import { useFetch } from "../hooks/useFetch";

const CATEGORIES = ["pizza","burger", "pasta"];

export const FoodDish = () => {

    const [image, setImage] = useState('');
    const [category, setCategory] = useState('');

    const url = `https://foodish-api.com/api/images/${category}`;
    const {data, isLoading , hasError} = useFetch(url);

    const onButtonClick = (event) =>{
        FoodDishService(category).then((image) =>{
            setImage(image);
        })
    }

    if(isLoading){
        return (
            <>
            <h2>Is loading</h2>
            </>
        )
    }

    return (
        <>
            <div className="foodish-container">
                <h1>Componente consumo API Desde rama de Nico</h1>
                {/* <input onChange={} value={category} type="text"/> */}
                <button onClick={onButtonClick}>Refresh image</button>
                <img src={data.image} className="image"/>
            </div>
        </>
    )
}