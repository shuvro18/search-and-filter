import { fetchCategoryData, fetchProductData, fetchSearchData } from '@/lib/data';
import React from 'react';
import ProductCard from '../components/productCard';

const page = async ({ searchParams }) => {
    const searchQuery = await searchParams;
    const text = searchQuery.search || "";
    const category = searchQuery.category || "";

    let products = [];
    if (text) {
        products = await fetchSearchData(text);
        
    } else if (category) {
        products = await fetchCategoryData(category)
    } 
    
    else {
        products = await fetchProductData()
    }


    return (
        <div>
            <main className=" bg-gray-50 py-8 px-4 sm:px-6 lg:px-8">
                {/* Container to center content and limit max width on large screens */}
                <div className="max-w-7xl mx-auto">
                    {/* Section Heading (Optional) */}
                    <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6">
                        All Products
                    </h2>

                    {/* Responsive Grid for Phone, Tablet, and PC */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
                        {products?.products?.length > 0 ? products?.products?.map((product) => (
                            <div key={product.id} className="flex justify-center">
                                <ProductCard product={product} />
                            </div>
                        )) : (<p className="text-gray-500 col-span-full text-center py-10">No Products found</p>)}
                    </div>
                </div>
            </main>
        </div>
    );
};

export default page;