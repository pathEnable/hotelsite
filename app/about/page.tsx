import { hotelDetails } from "@/lib/data";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Reveal from "@/components/Reveal";

export default function AboutPage() {
    return (
        <div className="bg-background min-h-screen py-24 px-6">
            <Reveal>
                <div className="max-w-3xl mx-auto">
                    <Card className="bg-surface/60">
                        <CardHeader className="text-center">
                            <CardTitle className="text-4xl md:text-5xl">Notre Histoire</CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-10">
                            <p className="text-muted text-lg leading-relaxed text-center">
                                {hotelDetails.name} est né d&apos;une idée simple : proposer à Parakou un lieu où l&apos;on se sent bien dès l&apos;arrivée.
                                Entre confort moderne, touches locales et service attentionné, nous accueillons aussi bien les voyageurs d&apos;affaires que les familles.
                            </p>

                            <div className="h-px w-24 bg-primary mx-auto" />

                            <p className="text-muted leading-relaxed text-center">
                                Installé à {hotelDetails.address}, {hotelDetails.name} vous offre des chambres et suites pensées pour le repos, un cadre calme,
                                et des espaces pour se retrouver (restaurant, détente, moments partagés).
                                Notre équipe met un point d&apos;honneur à vous guider et à rendre votre séjour fluide, chaleureux et authentique.
                            </p>
                        </CardContent>
                    </Card>
                </div>
            </Reveal>
        </div>
    );
}
