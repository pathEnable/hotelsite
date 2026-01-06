import { hotelDetails } from "@/lib/data";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import Reveal from "@/components/Reveal";

export default function ContactPage() {
    return (
        <div className="bg-background min-h-screen py-24 px-6">
            <Reveal>
                <div className="max-w-xl mx-auto">
                    <Card>
                        <CardHeader className="text-center">
                            <CardTitle className="text-3xl">Contactez-nous</CardTitle>
                            <p className="text-sm text-muted">{hotelDetails.phone} · {hotelDetails.email}</p>
                        </CardHeader>
                        <CardContent>
                            <form className="space-y-6">
                                <div className="space-y-2">
                                    <label className="block text-sm font-medium text-muted">Nom</label>
                                    <Input type="text" />
                                </div>

                                <div className="space-y-2">
                                    <label className="block text-sm font-medium text-muted">Email</label>
                                    <Input type="email" />
                                </div>

                                <div className="space-y-2">
                                    <label className="block text-sm font-medium text-muted">Message</label>
                                    <Textarea rows={5} />
                                </div>

                                <Button type="submit" className="w-full">
                                    Envoyer
                                </Button>
                            </form>
                        </CardContent>
                    </Card>
                </div>
            </Reveal>
        </div>
    );
}
