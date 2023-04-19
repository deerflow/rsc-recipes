import { queryMealById } from '@/fns';
import Image from 'next/image';

export default async function MealDetails({ params }: Props) {
    const meals = await queryMealById(params.id);
    if (!meals) return <div>Meal not found</div>;

    const meal = meals[0];
    const measures = (
        Object.entries(meal).filter(([key, measure]) => key.includes('strMeasure') && measure.trim()) as [
            [string, string]
        ]
    ).map(([key, measure]) => measure.trim());
    const ingredients = (
        Object.entries(meal).filter(([key, ingredient]) => key.includes('strIngredient') && ingredient.trim()) as [
            [string, string]
        ]
    ).map(([key, ingredient]) => ingredient.trim());

    const ingredientsList = measures.map((measure, index) => `${measure} ${ingredients[index]}`);

    return (
        <div>
            <h1>{meal.strMeal}</h1>
            <div className='flex'>
                <ul className='flex-1'>
                    {ingredientsList.map((ingredient, index) => (
                        <li key={index}>{ingredient}</li>
                    ))}
                </ul>
                <Image src={meal.strMealThumb} alt={meal.strMeal} width={300} height={300} />
            </div>

            <iframe
                width='560'
                height='315'
                src='https://www.youtube.com/embed/VVnZd8A84z4'
                title='YouTube video player'
                allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
                allowFullScreen
            ></iframe>
            <p className='flex-1 whitespace-pre-line'>{meal.strInstructions}</p>
        </div>
    );
}

interface Props {
    params: { id: string };
}
