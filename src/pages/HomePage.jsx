import React, { useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import HeroSection from '../components/sections/HeroSection';
import ProductCarouselSection from '../components/sections/ProductCarouselSection';

// ScrollTrigger 플러그인 등록
gsap.registerPlugin(ScrollTrigger, useGSAP);

const HomePage = () => {
    const mainRef = useRef(null);

    useGSAP(() => {
       // 첫 번째 섹션(Hero)은 제외하고 나머지 섹션만 스크롤 애니메이션 적용
        const sections = gsap.utils.toArray('section').slice(1);

        sections.forEach((section) => {
            gsap.from(section, {
                opacity: 0,
                y: 50,
                scrollTrigger: {
                    trigger: section,
                    start: 'top 80%',
                }
            });
        });
    }, { scope: mainRef });

    return (
        <div ref={mainRef} className="plano-wrapper min-h-screen flex flex-col">
            <Header />
            <main className="flex-grow">
                <HeroSection />
                <ProductCarouselSection />
            </main>
            <Footer />
        </div>
    );
};

export default HomePage;