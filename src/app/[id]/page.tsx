import { queryMealById } from '@/fns';
import Image from 'next/image';
import Link from 'next/link';

export default async function MealDetails({ params }: Props) {
    const meals = await queryMealById(params.id);
    if (!meals) return <div>Meal not found</div>;

    const meal = meals[0];
    const measures = (
        Object.entries(meal).filter(([key, measure]) => key.includes('strMeasure') && measure?.trim()) as [
            [string, string]
        ]
    ).map(([key, measure]) => measure.trim());
    const ingredients = (
        Object.entries(meal).filter(([key, ingredient]) => key.includes('strIngredient') && ingredient?.trim()) as [
            [string, string]
        ]
    ).map(([key, ingredient]) => ingredient.trim());

    const ingredientsList = measures.map((measure, index) => `${measure} ${ingredients[index]}`);

    return (
        <main className='max-sm:p-4 p-12 bg-gray-100'>
            <Link
                href='/'
                className='bg-transparent border-gray-300 hover:border-blue-400 text-black border-[1px] border-solid transition-colors px-4 py-2 rounded-lg mb-2'
                type='submit'
            >
                Home
            </Link>
            <h1 className='text-center text-3xl font-bold mb-5'>{meal.strMeal}</h1>
            <div className='flex flex-col items-center'>
                <div className='w-fit mb-12 flex flex-col items-center'>
                    <div className='flex justify-between items-center flex-wrap gap-12 mb-12 max-sm:flex-col'>
                        <div>
                            <h2 className='text-xl font-semibold mb-2'>Ingredients</h2>
                            <ul className=' list-disc'>
                                {ingredientsList.map((ingredient, index) => (
                                    <li key={index}>{ingredient}</li>
                                ))}
                            </ul>
                        </div>
                        <Image src={meal.strMealThumb} alt={meal.strMeal} width={300} height={300} />
                    </div>
                    <div className='max-sm:w-96 max-sm:h-64 w-full h-72'>
                        <iframe
                            width='560'
                            height='315'
                            src='https://www.youtube.com/embed/VVnZd8A84z4'
                            title='YouTube video player'
                            allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
                            allowFullScreen
                            className='w-full h-full'
                        ></iframe>
                    </div>
                </div>
                <div>
                    <h2 className='text-xl font-semibold mb-2'>Steps</h2>
                    <p className='flex-1 whitespace-pre-line max-w-5xl'>{meal.strInstructions}</p>
                </div>
            </div>
        </main>
    );
}

interface Props {
    params: { id: string };
}
