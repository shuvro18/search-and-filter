import Image from 'next/image'; 

export default function ProductCard({ product }) {

  const { title, price, category, rating } = product;
 

  return (
    <div className="w-72 bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300 border border-gray-100">
      {/* Product Image & Category Badge */}
      <div className="relative w-full h-48 bg-gray-100">
       
        <Image 
          src={product.images[0]} 
          alt={title}
          fill
          className="object-cover"
        />
        <span className="absolute top-3 left-3 bg-black/60 text-white text-xs px-3 py-1 rounded-full uppercase tracking-wider">
          {category}
        </span>
      </div>

      {/* Product Info */}
      <div className="p-4">
        {/* Product Title */}
        <h3 className="font-semibold text-gray-800 text-base truncate mb-3" title={title}>
          {title}
        </h3>
        
        {/* Price and Rating */}
        <div className="flex justify-between items-center">
          <span className="text-lg font-bold text-green-600">
            ${price}
          </span>
          <span className="text-sm font-medium text-amber-500 flex items-center gap-1">
            ⭐ {rating}
          </span>
        </div>
      </div>
    </div>
  );
}