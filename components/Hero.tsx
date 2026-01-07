"use client";

import Link from "next/link";
import * as React from "react";

import { Button } from "@/components/ui/button";

export default function Hero() {
    const bgRef = React.useRef<HTMLDivElement | null>(null);

    React.useEffect(() => {
        const el = bgRef.current;
        if (!el) return;

        const prefersReducedMotion = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
        if (prefersReducedMotion) return;

        let raf = 0;
        const onScroll = () => {
            if (raf) return;
            raf = window.requestAnimationFrame(() => {
                raf = 0;
                const y = window.scrollY || 0;
                const offset = Math.min(80, y * 0.12);
                el.style.transform = `translate3d(0, ${offset}px, 0) scale(1.06)`;
            });
        };

        onScroll();
        window.addEventListener("scroll", onScroll, { passive: true });
        return () => {
            window.removeEventListener("scroll", onScroll);
            if (raf) window.cancelAnimationFrame(raf);
        };
    }, []);

    return (
        <section className="relative h-[90vh] flex items-center justify-center overflow-hidden">
            {/* Background with overlay */}
            <div
                ref={bgRef}
                className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
                style={{
                    backgroundImage: 'url("https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?q=80&w=2070&auto=format&fit=crop")',
                }}
            >
                <div className="absolute inset-0 bg-black/50" />
            </div>

            {/* Content */}
            <div className="relative z-10 text-center px-4 max-w-4xl mx-auto animate-fade-in">
                <h1 className="text-5xl md:text-7xl font-serif text-white mb-6 tracking-wide leading-tight drop-shadow-lg">
                    Ave Maria
                </h1>
                <p className="text-xl md:text-2xl text-white/90 mb-10 font-light tracking-wider opacity-0 animate-slide-up drop-shadow-md" style={{ animationDelay: '0.3s', animationFillMode: 'forwards' }}>
                    L&apos;élégance et le confort à Parakou
                </p>
                <div className="opacity-0 animate-slide-up" style={{ animationDelay: '0.6s', animationFillMode: 'forwards' }}>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                        <Button size="lg" asChild>
                            <Link href="/rooms">Découvrir nos Chambres</Link>
                        </Button>
                        <Button
                            size="lg"
                            variant="outline"
                            className="bg-white/10 text-white border-white/40 hover:bg-white/20 hover:text-white"
                            asChild
                        >
                            <Link href="/contact">Contacter</Link>
                        </Button>
                    </div>
                </div>
            </div>
        </section>
    );
}
