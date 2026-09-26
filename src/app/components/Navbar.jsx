
import { Search } from 'lucide-react';
import Link from 'next/link';
import CategoryFilter from './CategoryFilter';

const Navbar = () => {


    return (
        <div className="max-lg:collapse shadow-sm max-w-7xl mx-auto rounded-md">
            <input id="navbar-1-toggle" className="peer hidden" type="checkbox" />
            <div className="collapse-title navbar">
                <div className="navbar-start">
                    <Link href={"/"} className="btn btn-ghost text-xl">Internship </Link>
                </div>



                <div className="navbar-end flex items-center  gap-2.5  ">
                    <div className="hidden md:block lg:block">

                        <CategoryFilter />

                    </div>

                    <form action={"/products"} className="flex gap-2.5">

                        <input
                            type="text"
                            name="search"
                            placeholder="Search products..."
                            className="input input-bordered w-64 lg:w-auto"
                        />
                        <button className='cursor-pointer' type='submit'><Search /></button>

                    </form>
                </div>
            </div>
        </div>
    );
};

export default Navbar;