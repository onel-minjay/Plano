import React, { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { HERO_DATA } from '../../mocks/mockPlans';

gsap.registerPlugin(useGSAP);

const HeroSection = () => {
    const containerRef = useRef(null); // 섹션 전체 범위
    const imageRef = useRef(null);     // 배경 이미지 전용 ref
    const scopeRef = useRef(null);

    useGSAP(() => {
        const tl = gsap.timeline();

        // --- 배경 이미지 줌아웃 애니메이션 (130% -> 100%) ---
        // 텍스트 애니메이션보다 먼저 실행되거나 동시에 실행되도록 타임라인 앞부분에 배치
        tl.fromTo(imageRef.current,
            {
                scale: 1.3, // 시작 크기: 130%
                filter: 'blur(10px)', // (선택사항) 처음에 살짝 블러를 주면 더 몽환적입니다.
            },
            {
                scale: 1,   // 끝 크기: 100%
                filter: 'blur(0px)',
                duration: 2.5, // 천천히 부드럽게 줄어들도록 2.5초 설정
                ease: 'power2.out', // 부드러운 감속 효과
            },
            0 // 타임라인 시작점(0초)에서 바로 실행
        );

        // --- 기존 텍스트 등장 애니메이션 ---
        tl.fromTo('.hero-content > *',
            { y: 30, opacity: 0 },
            {
                y: 0,
                opacity: 1,
                duration: 1.2,
                stagger: 0.2,
                ease: 'power3.out',
            },
            0.5 // 배경 이미지가 움직이기 시작한 후 0.5초 뒤에 텍스트 등장 시작 (시차 효과)
        );

    }, { scope: containerRef });

    return (
        <section
            ref={containerRef}
            className="relative h-screen flex items-center bg-gray-900 overflow-hidden"
        >
            <div className="absolute inset-0">
                <img
                    ref={imageRef}
                    src={HERO_DATA.bgImage}
                    alt="Background"
                    className="w-full h-full object-cover origin-center"
                />
                {/*<div className="absolute inset-0 bg-gradient-to-r from-white/30 to-transparent" />*/}
            </div>

            <div className="container flex items-center justify-center px-6 relative z-10">
                <div className="hero-content flex flex-col items-center justify-center max-w-2xl text-white">
                    <p className="text-3xl md:text-4xl mb-3 font-extrabold leading-tight opacity-0">{HERO_DATA.subTitle}</p>
                    <h1 className="text-5xl md:text-6xl font-bold leading-tight opacity-0 mb-8">{HERO_DATA.mainTitle}</h1>
                    <p className="text-lg text-white/80 mb-20 opacity-0">{HERO_DATA.description}</p>
                    <button className="px-8 py-4 border border-white opacity-0 cursor-pointer">
                        {HERO_DATA.buttonText}
                    </button>
                </div>
            </div>
        </section>
    );
};

export default HeroSection;