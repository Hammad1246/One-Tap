"use client"
import ProductCard from "./ProductCard";

const ProductSection = ({ title, products }) => {
  return (
    <div className="mb-12">
      {/* Section Header */}
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-base  text-[#515154CC]">{title}</h2>
        <button className="text-[#007BFF] hover:text-blue-700 text-base !font-semibold cursor-pointer">
          View All
        </button>
      </div>

      {/* Product Grid */}
     
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            productId={product.id}
            title={product.title}
            description={product.description}
            price={product.price}
            originalPrice={product.originalPrice}
          />
        ))}
      </div>
    </div>
  );
};

export default ProductSection;