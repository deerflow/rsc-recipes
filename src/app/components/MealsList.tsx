import { Meal } from '@/types';
import { FC } from 'react';
import Image from 'next/image';

const MealsList: FC<Props> = ({ meals }) => {
    if (!meals || !meals.length) return null;
    if (meals.length === 1) {
        const meal = meals[0];
        return <Meal {...meal} />;
    }

    return (
        <div className='flex flex-wrap max-w-[1128px] max-[1319px]:max-w-[846px] max-[1037px]:max-w-[564px] max-[755px]:max-w-[282px]'>
            {meals.map(meal => (
                <Meal {...meal} key={meal.idMeal} />
            ))}
        </div>
    );
};

const Meal: FC<Meal> = ({ strMeal, strMealThumb, strCategory }) => {
    return (
        <div className='m-4'>
            <Image src={strMealThumb} alt={`Image of ${strMeal}`} width={250} height={250} className='rounded-2xl' />
            <h2 className='font-semibold text-xl mt-2'>{strMeal}</h2>
            <p className='text-gray-400'>{strCategory}</p>
        </div>
    );
};

interface Props {
    meals: Meal[];
}

export default MealsList;
