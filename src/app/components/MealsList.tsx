import { Meal } from '@/types';
import { FC } from 'react';
import Image from 'next/image';
import Link from 'next/link';

const blurDataUrl =
    'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAAXNSR0IArs4c6QAAACJJREFUKFNjnDhx4n8GIgDjqEJ8oUR68DAxMTH8+/cPp6EA0PQd/6MyIfgAAAAASUVORK5CYII=';

const MealsList: FC<Props> = ({ meals }) => {
    if (!meals || !meals.length) return <p className='mt-24'>No recipes found</p>;
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

const Meal: FC<Meal> = ({ idMeal, strMeal, strMealThumb, strCategory }) => {
    return (
        <Link href={`/${idMeal}`} className='m-4 w-[250px]'>
            <Image
                src={strMealThumb}
                alt={`Image of ${strMeal}`}
                width={250}
                height={250}
                className='rounded-2xl shadow-sm'
                placeholder='blur'
                blurDataURL={blurDataUrl}
            />
            <h2 className='font-semibold text-xl mt-2'>{strMeal}</h2>
            <p className='text-gray-400'>{strCategory}</p>
        </Link>
    );
};

interface Props {
    meals: Meal[];
}

export default MealsList;
