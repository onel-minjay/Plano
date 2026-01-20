import React, { useState, useEffect, useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { SITE_CONFIG } from '../../mocks/mockPlans';

gsap.registerPlugin(useGSAP);

const Header = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isOpen, setIsOpen] = useState(false);
    const menuRef = useRef(null);

    useEffect(() => {
        const handleScroll = () => {
            // 스크롤이 0보다 크면 true, 아니면 false
            setIsScrolled(window.scrollY > 0);
        };

        window.addEventListener('scroll', handleScroll);

        // 컴포넌트가 사라질 때 이벤트 리스너를 제거하여 메모리 누수를 방지합니다.
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useGSAP(() => {
        if (isOpen) {
            gsap.to(menuRef.current, {
                clipPath: 'circle(150% at 100% 0%)',
                duration: 0.8,
                ease: 'power3.inOut'
            });
        } else {
            gsap.to(menuRef.current, {
                clipPath: 'circle(0% at 100% 0%)',
                duration: 0.6,
                ease: 'power3.inOut'
            });
        }
    }, [isOpen]);

    const navLinks = ['Company', 'Product', 'Tech', 'Contact'];

    return (
        <header
            className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
                isScrolled
                    ? 'bg-white/90 backdrop-blur-md border-b border-gray-100 py-4'
                    : 'bg-transparent py-4'
            }`}
        >
            <div className="container mx-auto px-6 flex justify-between items-center">
                {/* 스크롤 여부에 따라 로고나 텍스트 색상을 변경해주는 디테일 */}
                <a
                    href="/"
                    className={`text-2xl font-black transition-colors ${
                        isScrolled ? 'text-black' : 'text-white'
                    }`}
                >
                    {SITE_CONFIG.companyName}
                </a>

                <nav className="hidden lg:block">
                    <ul className="flex gap-10">
                        {navLinks.map((link) => (
                            <li key={link}>
                                <a
                                    href={`#${link.toLowerCase()}`}
                                    className={`text-sm font-bold uppercase tracking-widest transition-colors ${
                                        isScrolled ? 'text-gray-900 hover:text-gray-500' : 'text-white hover:text-gray-300'
                                    }`}
                                >
                                    {link}
                                </a>
                            </li>
                        ))}
                    </ul>
                </nav>

                <button
                    onClick={() => setIsOpen(!isOpen)}
                    className="lg:hidden relative z-[60] w-10 h-10 flex flex-col justify-center items-center gap-1.5"
                >
                    {/* 스크롤 여부에 따라 햄버거 바 색상도 변경 */}
                    <span className={`w-6 h-0.5 transition-all ${
                        isOpen || isScrolled ? 'bg-black' : 'bg-white'
                    } ${isOpen ? 'rotate-45 translate-y-2' : ''}`} />
                    <span className={`w-6 h-0.5 transition-all ${
                        isOpen || isScrolled ? 'bg-black' : 'bg-white'
                    } ${isOpen ? 'opacity-0' : ''}`} />
                    <span className={`w-6 h-0.5 transition-all ${
                        isOpen || isScrolled ? 'bg-black' : 'bg-white'
                    } ${isOpen ? '-rotate-45 -translate-y-2' : ''}`} />
                </button>
            </div>

            {/* 모바일 메뉴 영역 (기존 코드 유지) */}
            <nav ref={menuRef} className="lg:hidden fixed h-screen inset-0 bg-white z-50 flex items-center justify-center" style={{ clipPath: 'circle(0% at 100% 0%)' }}>
                <ul className="text-center space-y-8">
                    {navLinks.map((item) => (
                        <li key={item}><a href={`#${item.toLowerCase()}`} onClick={() => setIsOpen(false)} className="text-4xl font-bold">{item}</a></li>
                    ))}
                </ul>
            </nav>
        </header>
    );
};

export default Header;