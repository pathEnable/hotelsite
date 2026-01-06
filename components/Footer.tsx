import Link from "next/link";

import { hotelDetails } from "@/lib/data";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function Footer() {
    return (
        <footer className="bg-surface border-t border-border mt-20 pt-16 pb-8">
            <div className="max-w-7xl mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
                    <div className="col-span-1 md:col-span-2">
                        <h3 className="text-2xl font-serif text-primary tracking-widest uppercase mb-6">
                            Ave <span className="text-foreground">Maria</span>
                        </h3>
                        <p className="text-muted leading-relaxed max-w-sm">
                            {hotelDetails.address}, {hotelDetails.location}. {hotelDetails.description}
                        </p>
                    </div>

                    <div>
                        <h4 className="text-sm font-bold uppercase tracking-widest mb-6 text-foreground">Navigation</h4>
                        <ul className="space-y-4">
                            <li><Link href="/" className="text-muted hover:text-primary transition-colors">Accueil</Link></li>
                            <li><Link href="/rooms" className="text-muted hover:text-primary transition-colors">Chambres & Suites</Link></li>
                            <li><Link href="/offers" className="text-muted hover:text-primary transition-colors">Offres</Link></li>
                            <li><Link href="/services" className="text-muted hover:text-primary transition-colors">Services</Link></li>
                            <li><Link href="/amenities" className="text-muted hover:text-primary transition-colors">Restaurant & Détente</Link></li>
                            <li><Link href="/about" className="text-muted hover:text-primary transition-colors">À Propos</Link></li>
                            <li><Link href="/contact" className="text-muted hover:text-primary transition-colors">Contact</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-sm font-bold uppercase tracking-widest mb-6 text-foreground">Contact</h4>
                        <ul className="space-y-4">
                            <li className="text-muted">{hotelDetails.email}</li>
                            <li className="text-muted">{hotelDetails.phone}</li>
                            <li className="text-muted">{hotelDetails.address}</li>
                        </ul>

                        <div className="mt-10">
                            <h4 className="text-sm font-bold uppercase tracking-widest mb-4 text-foreground">Newsletter</h4>
                            <p className="text-muted text-sm leading-relaxed">
                                Recevez nos offres et nouveautés — 1 message de temps en temps, sans spam.
                            </p>
                            <form className="mt-4 flex gap-2" action="#">
                                <Input type="email" placeholder="Votre email" aria-label="Votre email" />
                                <Button type="submit" className="shrink-0">
                                    S&apos;inscrire
                                </Button>
                            </form>
                        </div>
                    </div>
                </div>

                <div className="pt-8 border-t border-border/40 flex flex-col md:flex-row justify-between items-center text-xs text-muted uppercase tracking-wider">
                    <p>© 2025 Hôtel Ave Maria. Tous droits réservés.</p>
                    <div className="flex gap-6 mt-4 md:mt-0">
                        <a href="#" className="hover:text-foreground">Mentions Légales</a>
                        <a href="#" className="hover:text-foreground">Confidentialité</a>
                    </div>
                </div>
            </div>
        </footer>
    );
}
