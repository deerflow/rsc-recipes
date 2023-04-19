import { Meal } from './types';

const MEALS_API_PATH = 'https://www.themealdb.com/api/json/v1/1';

export const queryMeals = async (search?: string) => {
    if (!search) return querySelection();
    const response = await fetch(`${MEALS_API_PATH}/search.php?s=${search}`);
    if (!response.ok) return [];
    const data = await response.json();
    return data.meals as Meal[];
};

const querySelection = async () => {
    const response = await fetch(`${MEALS_API_PATH}/search.php?s`);
    if (!response.ok) return [];
    const data = await response.json();
    return data.meals as Meal[];
};

export const queryMealById = async (id: string) => {
    const response = await fetch(`${MEALS_API_PATH}/lookup.php?i=${id}`);
    if (!response.ok) return null;
    const data = await response.json();
    return data.meals as Meal[] | null;
};
