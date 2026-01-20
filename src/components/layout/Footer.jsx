import React, { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollToPlugin } from 'gsap/ScrollToPlugin';
import { SITE_CONFIG } from '../../mocks/mockPlans';

gsap.registerPlugin(useGSAP, ScrollToPlugin);

const Footer = () => {
    const footerRef = useRef(null);

    const handleScrollTop = () => {
        gsap.to(window, { duration: 0.8, scrollTo: 0, ease: "power3.inOut" });
    };

    return (
        <footer ref={footerRef} className="bg-white pt-20 pb-10 border-t border-gray-100">
            <div className="container mx-auto px-6">
                <div className="flex justify-between items-start mb-20">
                    <h2 className="text-5xl font-bold tracking-tight text-gray-900">
                        {SITE_CONFIG.companyName}
                    </h2>
                    <button className="flex items-center gap-2 group text-sm font-bold uppercase tracking-widest">
                        CONTACT
                        <span className="w-8 h-8 rounded-full bg-black text-white flex items-center justify-center group-hover:translate-x-1 transition-transform">
              →
            </span>
                    </button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 border-t border-gray-200 pt-12">
                    <section>
                        <h3 className="text-sm font-bold mb-6 uppercase tracking-wider">주소</h3>
                        <address className="not-italic text-gray-600 leading-relaxed max-w-[240px]">
                            {SITE_CONFIG.contact.address}
                        </address>
                    </section>

                    <section>
                        <h3 className="text-sm font-bold mb-6 uppercase tracking-wider">E-MAIL</h3>
                        <a href={`mailto:${SITE_CONFIG.contact.email}`} className="text-gray-600 hover:text-black transition-colors">
                            {SITE_CONFIG.contact.email}
                        </a>
                    </section>

                    <section>
                        <h3 className="text-sm font-bold mb-6 uppercase tracking-wider">FAX</h3>
                        <p className="text-gray-600">{SITE_CONFIG.contact.fax}</p>
                    </section>
                </div>

                <div className="flex justify-end mt-20">
                    <button
                        onClick={handleScrollTop}
                        className="w-12 h-12 rounded-full bg-gray-200 flex flex-col items-center justify-center text-[10px] font-bold hover:bg-black hover:text-white transition-all group"
                    >
                        <span className="group-hover:-translate-y-1 transition-transform">↑</span>
                        TOP
                    </button>
                </div>
            </div>
        </footer>
    );
};

export default Footer;