import React from 'react';
import {HERO_DATA, MOCK_PRODUCTS} from '../../mocks/mockPlans';

const ProductCarouselSection = () => {
    return (
        <section className="py-16 md:py-24 bg-white">
            <div className="container mx-auto px-4 md:px-6">
                <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 mb-12 md:mb-16">
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-gray-900 leading-tight">
                        환경을 만들다
                    </h2>
                    <div className="hidden md:flex gap-3">
                        <button className="w-12 h-12 rounded-full border border-gray-200 flex items-center justify-center hover:bg-black hover:text-white transition-all">←</button>
                        <button className="w-12 h-12 rounded-full border border-gray-200 flex items-center justify-center hover:bg-black hover:text-white transition-all">→</button>
                    </div>
                </div>

                {/* 반응형 그리드 시스템 */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-10 lg:gap-12">
                    {MOCK_PRODUCTS.map((product) => (
                        <div key={product.id} className="group">
                            <div className="aspect-[4/5] bg-gray-100 rounded-sm mb-6 overflow-hidden">
                                <img
                                    src={product.imageUrl}
                                    alt="Background"
                                    className="w-full h-full object-cover origin-center flex items-center justify-center text-gray-300 italic group-hover:scale-110 transition-transform duration-700"
                                />
                            </div>
                            <div className="border-t border-gray-100 pt-6">
                                <p className="text-[10px] md:text-xs font-bold text-gray-400 uppercase tracking-[0.2em] mb-3">
                                    {product.category}
                                </p>
                                <h3 className="text-lg md:text-xl font-bold text-gray-900 leading-snug">
                                    {product.description}
                                </h3>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ProductCarouselSection;