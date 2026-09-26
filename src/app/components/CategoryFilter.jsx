    'use client';

    import { useRouter, useSearchParams } from 'next/navigation';

    const categories = [
        { name: 'All Categories', type: '' },
        { name: 'Beauty', type: 'beauty' },
        { name: 'Fragrances', type: 'fragrances' },
        { name: 'Furniture', type: 'furniture' },
        { name: 'Kitchen Accessories', type: 'kitchen-accessories' },
        { name: 'Men’s Shoes', type: 'mens-shoes' },
        { name: 'Motorcycle', type: 'motorcycle' },
    ];

    export default function CategoryFilter() {
        const router = useRouter();
        const searchParams = useSearchParams();
        const currentCategory = searchParams.get('category') || '';

        const handleFilter = (e) => {
            const type = e.target.value;
            const params = new URLSearchParams(); 
            
            if (type) {
                params.set('category', type);
            }

            router.push(`/products?${params.toString()}`);
        };

        return (
            <div className="">
                <select
                    value={currentCategory}
                    onChange={handleFilter}
                    className="select select-bordered w-full max-w-xs bg-white text-gray-700 font-medium shadow-sm"
                >
                    {categories.map((cat) => (
                        <option key={cat.type} value={cat.type}>
                            {cat.name}
                        </option>
                    ))}
                </select>
            </div>
        );
    }