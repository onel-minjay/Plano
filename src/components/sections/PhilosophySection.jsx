import React, { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { PHILOSOPHY_DATA } from '../../mocks/mockPlans';

gsap.registerPlugin(useGSAP, ScrollTrigger);

const PhilosophySection = () => {
    const containerRef = useRef(null);
    const imageRef = useRef(null);
    const videoRef = useRef(null);

    useGSAP(() => {
        // 텍스트 등장 애니메이션
        gsap.from('.phi-content > *', {
            scrollTrigger: {
                trigger: containerRef.current,
                start: 'top 70%',
            },
            y: 40,
            opacity: 0,
            duration: 1,
            stagger: 0.2,
            ease: 'power3.out'
        });

        // 이미지 패럴랙스 효과
        gsap.fromTo(imageRef.current,
            { scale: 1.1 },
            {
                scale: 1,
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: 'top bottom',
                    end: 'bottom top',
                    scrub: true, // 스크롤 속도에 맞춰 애니메이션 진행
                }
            }
        );
    }, { scope: containerRef });

    return (
        <section
            ref={containerRef}
            className="bg-[#0b1a14] py-24 md:py-32 overflow-hidden"
        >
            <div className="container mx-auto px-6">
                {/* 비디오 컨테이너 */}
                <div className="mx-auto mb-20 rounded-sm overflow-hidden aspect-[21/7] bg-gray-800">
                    <video
                        ref={videoRef}
                        src="/videos/philosophy-bg.mp4"
                        autoPlay
                        muted
                        loop
                        playsInline
                        className="w-full h-full object-cover opacity-80"
                    />
                </div>

                {/* 하단 텍스트 영역 */}
                <div className="phi-content mx-auto text-white">
                  <span className="inline-block text-3xl font-bold mb-3 opacity-40 ">
                    {PHILOSOPHY_DATA.subTitle}
                  </span>
                    <h2 className="text-3xl md:text-5xl font-bold mb-10 leading-tight whitespace-pre-wrap">
                        {PHILOSOPHY_DATA.mainTitle}
                    </h2>
                    <p className="text-md md:text-lg text-gray-400 leading-relaxed">
                        {PHILOSOPHY_DATA.description}
                    </p>
                </div>
            </div>
        </section>
    );
};

export default PhilosophySection;