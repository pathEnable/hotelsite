"use client";

import Link from "next/link";
import { Menu, Moon, Sun } from "lucide-react";
import * as React from "react";
import { usePathname } from "next/navigation";

import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { cn } from "@/lib/utils";

export default function Navbar() {
    const [isScrolled, setIsScrolled] = React.useState(false);
    const [isLight, setIsLight] = React.useState(false);
    const pathname = usePathname();

    const isActive = (href: string) => {
        if (href === "/") return pathname === "/";
        return pathname === href || pathname.startsWith(`${href}/`);
    };

    React.useEffect(() => {
        const root = document.documentElement;
        setIsLight(root.classList.contains("light"));

        const onScroll = () => {
            setIsScrolled(window.scrollY > 8);
        };

        onScroll();
        window.addEventListener("scroll", onScroll, { passive: true });
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    const toggleTheme = () => {
        const root = document.documentElement;
        const nextIsLight = !root.classList.contains("light");
        if (nextIsLight) root.classList.add("light");
        else root.classList.remove("light");
        setIsLight(nextIsLight);

        try {
            localStorage.setItem("theme", nextIsLight ? "light" : "dark");
        } catch {
            // ignore
        }
    };

    return (
        <nav
            className={`fixed top-0 left-0 right-0 z-50 border-b border-border transition-all duration-300 ${
                isScrolled ? "bg-background/80 backdrop-blur-xl shadow-lg" : "bg-background/60 backdrop-blur-md"
            }`}
        >
            <div className={`max-w-7xl mx-auto px-6 flex items-center justify-between transition-[height] duration-300 ${isScrolled ? "h-16" : "h-20"}`}>
                {/* Logo */}
                <Link
                    href="/"
                    className="text-2xl font-serif text-primary tracking-widest uppercase hover:opacity-90 transition-opacity focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/30 rounded-md px-2 py-1"
                >
                    Ave <span className="text-foreground">Maria</span>
                </Link>

                {/* Navigation */}
                <div className="hidden md:flex items-center gap-8">
                    <Link
                        href="/"
                        className={cn(
                            "text-sm font-medium tracking-wide transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/30 rounded-md px-2 py-1 active:scale-[0.98]",
                            isActive("/") ? "text-primary" : "hover:text-primary"
                        )}
                    >
                        ACCUEIL
                    </Link>
                    <Link
                        href="/rooms"
                        className={cn(
                            "text-sm font-medium tracking-wide transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/30 rounded-md px-2 py-1 active:scale-[0.98]",
                            isActive("/rooms") ? "text-primary" : "hover:text-primary"
                        )}
                    >
                        CHAMBRES & SUITES
                    </Link>
                    <Link
                        href="/offers"
                        className={cn(
                            "text-sm font-medium tracking-wide transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/30 rounded-md px-2 py-1 active:scale-[0.98]",
                            isActive("/offers") ? "text-primary" : "hover:text-primary"
                        )}
                    >
                        OFFRES
                    </Link>
                    <Link
                        href="/services"
                        className={cn(
                            "text-sm font-medium tracking-wide transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/30 rounded-md px-2 py-1 active:scale-[0.98]",
                            isActive("/services") ? "text-primary" : "hover:text-primary"
                        )}
                    >
                        SERVICES
                    </Link>
                    <Link
                        href="/amenities"
                        className={cn(
                            "text-sm font-medium tracking-wide transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/30 rounded-md px-2 py-1 active:scale-[0.98]",
                            isActive("/amenities") ? "text-primary" : "hover:text-primary"
                        )}
                    >
                        RESTAURANT & SPA
                    </Link>
                    <Link
                        href="/about"
                        className={cn(
                            "text-sm font-medium tracking-wide transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/30 rounded-md px-2 py-1 active:scale-[0.98]",
                            isActive("/about") ? "text-primary" : "hover:text-primary"
                        )}
                    >
                        À PROPOS
                    </Link>
                </div>

                {/* Mobile menu */}
                <div className="md:hidden">
                    <Sheet>
                        <SheetTrigger asChild>
                            <Button variant="ghost" size="icon" aria-label="Ouvrir le menu">
                                <Menu />
                            </Button>
                        </SheetTrigger>
                        <SheetContent side="right">
                            <SheetHeader>
                                <SheetTitle className="font-serif tracking-widest uppercase">Ave Maria</SheetTitle>
                            </SheetHeader>
                            <div className="mt-6 flex flex-col gap-3">
                                <Button
                                    variant="ghost"
                                    className={cn(
                                        "justify-start focus-visible:ring-2 focus-visible:ring-primary/30",
                                        isActive("/") && "bg-surface text-primary"
                                    )}
                                    asChild
                                >
                                    <Link href="/">Accueil</Link>
                                </Button>
                                <Button
                                    variant="ghost"
                                    className={cn(
                                        "justify-start focus-visible:ring-2 focus-visible:ring-primary/30",
                                        isActive("/rooms") && "bg-surface text-primary"
                                    )}
                                    asChild
                                >
                                    <Link href="/rooms">Chambres & Suites</Link>
                                </Button>
                                <Button
                                    variant="ghost"
                                    className={cn(
                                        "justify-start focus-visible:ring-2 focus-visible:ring-primary/30",
                                        isActive("/offers") && "bg-surface text-primary"
                                    )}
                                    asChild
                                >
                                    <Link href="/offers">Offres</Link>
                                </Button>
                                <Button
                                    variant="ghost"
                                    className={cn(
                                        "justify-start focus-visible:ring-2 focus-visible:ring-primary/30",
                                        isActive("/services") && "bg-surface text-primary"
                                    )}
                                    asChild
                                >
                                    <Link href="/services">Services</Link>
                                </Button>
                                <Button
                                    variant="ghost"
                                    className={cn(
                                        "justify-start focus-visible:ring-2 focus-visible:ring-primary/30",
                                        isActive("/amenities") && "bg-surface text-primary"
                                    )}
                                    asChild
                                >
                                    <Link href="/amenities">Restaurant & Détente</Link>
                                </Button>
                                <Button
                                    variant="ghost"
                                    className={cn(
                                        "justify-start focus-visible:ring-2 focus-visible:ring-primary/30",
                                        isActive("/about") && "bg-surface text-primary"
                                    )}
                                    asChild
                                >
                                    <Link href="/about">À propos</Link>
                                </Button>
                                <Button variant="ghost" className="justify-start" onClick={toggleTheme}>
                                    {isLight ? (
                                        <span className="flex items-center gap-2">
                                            <Moon className="h-4 w-4" /> Mode sombre
                                        </span>
                                    ) : (
                                        <span className="flex items-center gap-2">
                                            <Sun className="h-4 w-4" /> Mode clair
                                        </span>
                                    )}
                                </Button>
                                <div className="pt-4">
                                    <Button className="w-full" asChild>
                                        <Link href="/contact">Contact / Réserver</Link>
                                    </Button>
                                </div>
                            </div>
                        </SheetContent>
                    </Sheet>
                </div>

                {/* CTA Button */}
                <div className="hidden md:flex items-center gap-2">
                    <Button
                        variant="ghost"
                        size="icon"
                        aria-label={isLight ? "Activer le mode sombre" : "Activer le mode clair"}
                        onClick={toggleTheme}
                        className="focus-visible:ring-2 focus-visible:ring-primary/30 active:scale-[0.98]"
                    >
                        {isLight ? <Moon /> : <Sun />}
                    </Button>
                    <Button asChild>
                        <Link href="/contact">Contact / Réserver</Link>
                    </Button>
                </div>
            </div>
        </nav>
    );
}
