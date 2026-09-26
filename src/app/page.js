import { fetchProductData } from "@/lib/data";
import ProductCard from "./components/productCard";

export default async function Home() {

  const productsData = await fetchProductData();
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
            {productsData?.products?.map((product) => (
              <div key={product.id} className="flex justify-center">
                <ProductCard product={product} />
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}
