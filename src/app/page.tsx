import { Inter } from 'next/font/google';
import { queryMeals } from '@/fns';
import { RFC } from '@/types';
import MealsList from './components/MealsList';

const inter = Inter({ subsets: ['latin'] });

const Home: RFC<Props> = async ({ searchParams }) => {
    const meals = await queryMeals(searchParams?.q);

    return (
        <main className='flex min-h-screen flex-col p-24 max-sm:p-4 bg-gray-100'>
            <form className='flex flex-col justify-center'>
                <input name='q' className='drop-shadow-md' />
                <button type='submit'>Search</button>
            </form>
            <div className='flex justify-center'>
                <MealsList meals={meals} />
            </div>
        </main>
    );
};

interface Props {
    searchParams: { q?: string };
}

export default Home;
