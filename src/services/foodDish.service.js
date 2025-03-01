export const FoodDishService = async (category) => {

    const baseUrl = `https://foodish-api.com/api/images/${category}`;

    const response = await fetch(baseUrl);
    const { image } = await response.json();

    console.log(image);
    return  image;
};