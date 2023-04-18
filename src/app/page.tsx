import { Inter } from 'next/font/google';
import { queryMeals } from '@/fns';
import { RFC } from '@/types';
import MealsList from './components/MealsList';
import Link from 'next/link';

const inter = Inter({ subsets: ['latin'] });

const Home: RFC<Props> = async ({ searchParams }) => {
    const meals = await queryMeals(searchParams?.q);

    return (
        <main className='flex min-h-screen flex-col p-24 max-sm:p-4 bg-gray-100'>
            <form className='flex flex-col justify-center items-center mb-6'>
                <input name='q' className='shadow-md focus:shadow-lg w-96 max-w-full text-2xl p-2 outline-none mb-6' />
                <div>
                    <button
                        className='bg-blue-400 hover:bg-[#5699ea] transition-colors text-white px-4 py-2 rounded-lg mr-4'
                        type='submit'
                    >
                        Search
                    </button>
                    <Link
                        href='/'
                        className='bg-transparent border-gray-300 hover:border-blue-400 text-black border-[1px] border-solid transition-colors px-4 py-2 rounded-lg'
                        type='submit'
                    >
                        Home
                    </Link>
                </div>
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
