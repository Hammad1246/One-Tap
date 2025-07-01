"use client"
import ProductCard from "./ProductCard";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import { FreeMode } from "swiper/modules";

const ProductSection = ({ title, products }) => {
  return (
    <div className="md:mb-12">
      {/* Section Header */}
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-base  text-[#515154CC]">{title}</h2>
      </div>

      {/* Product Swiper */}
      <Swiper
        spaceBetween={16}
        slidesPerView={1.2}
        breakpoints={{
          640: { slidesPerView: 2.2 },
          1024: { slidesPerView: 3 },
        }}
        freeMode={true}
        modules={[FreeMode]}
        className="!pb-4"
      >
        {products.map((product) => (
          <SwiperSlide key={product.id}>
            <ProductCard
              productId={product.id}
              title={product.title}
              description={product.description}
              price={product.price}
              originalPrice={product.originalPrice}
              image={product.image}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default ProductSection;