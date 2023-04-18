import { Meal } from './types';

const MEALS_API_PATH = 'https://www.themealdb.com/api/json/v1/1';

export const queryMeals = async (search?: string) => {
    if (!search) return querySelection();
    const response = await fetch(`${MEALS_API_PATH}/search.php?s=${search}`);
    if (!response.ok) {
        console.error(response);
    }
    const data = await response.json();

    return data.meals as Meal[];
};

const querySelection = async () => {
    const response = await fetch(`${MEALS_API_PATH}/search.php?s`);
    const data = await response.json();
    return data.meals as Meal[];
};

const queryRandomMeal = async () => {
    const response = await fetch(`${MEALS_API_PATH}/random.php`);
    const data = await response.json();
    return data.meals as Meal[];
};
