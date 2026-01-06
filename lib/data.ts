export interface Room {
  id: string;
  name: string;
  type: 'Suite' | 'Chambre' | 'Penthouse';
  price: number;
  size: number; // m2
  capacity: number;
  description: string;
  image: string;
  amenities: string[];
}

export const hotelDetails = {
  name: "Ave Maria",
  location: "Parakou, Bénin",
  address: "Quartier Arafat, Parakou",
  phone: "+229 23 00 00 00",
  email: "contact@avemaria.bj",
  description: "Votre escale de prestige au cœur du septentrion. Ave Maria allie confort moderne et chaleur de l'accueil du Nord-Bénin."
};

export const rooms: Room[] = [
  {
    id: "royal-suite",
    name: "Suite Royale",
    type: "Suite",
    price: 850,
    size: 90,
    capacity: 2,
    description: "Le luxe absolu à Parakou. Un vaste séjour lumineux, une décoration inspirée de l'artisanat local et une vue imprenable sur la cité.",
    image: "https://images.unsplash.com/photo-1590490360182-c33d57733427?q=80&w=2072&auto=format&fit=crop",
    amenities: ["Vue Panoramique", "Salon Privé", "Jacuzzi", "Corbeille de fruits locaux"]
  },
  {
    id: "prestige-room",
    name: "Chambre Prestige",
    type: "Chambre",
    price: 60,
    size: 40,
    capacity: 2,
    description: "Un cocon de sérénité. Mobilier en bois de teck, climatisation performante et literie haut de gamme.",
    image: "https://images.unsplash.com/photo-1618773928121-c32242e63f39?q=80&w=2070&auto=format&fit=crop",
    amenities: ["Lit King Size", "Espace Bureau", "Douche pluie", "Wifi Haut Débit"]
  },
  {
    id: "family-suite",
    name: "Suite Familiale",
    type: "Suite",
    price: 120,
    size: 75,
    capacity: 4,
    description: "Espace et convivialité pour toute la famille. Deux chambres connectées et un salon commun chaleureux.",
    image: "https://images.unsplash.com/photo-1591088398332-9a77f00a90af?q=80&w=1971&auto=format&fit=crop",
    amenities: ["2 Chambres", "Salon", "TV Connectée", "Frigo"]
  },
  {
    id: "deluxe-room",
    name: "Chambre Standard",
    type: "Chambre",
    price: 45,
    size: 30,
    capacity: 2,
    description: "Le confort essentiel. Idéale pour les voyageurs d'affaires de passage à Parakou.",
    image: "https://images.unsplash.com/photo-1611892440504-42a792e24d32?q=80&w=2070&auto=format&fit=crop",
    amenities: ["Climatisation", "Bureau", "Douche"]
  },
  {
    id: "junior-suite",
    name: "Suite Junior",
    type: "Suite",
    price: 95,
    size: 55,
    capacity: 2,
    description: "Équilibre parfait entre intimité et confort. Un espace salon discret, une literie moelleuse et une atmosphère sereine.",
    image: "https://images.unsplash.com/photo-1551887373-6f5b6f68d7df?q=80&w=2070&auto=format&fit=crop",
    amenities: ["Coin Salon", "Lit King Size", "Minibar", "Wifi Haut Débit"]
  },
  {
    id: "superior-room",
    name: "Chambre Supérieure",
    type: "Chambre",
    price: 70,
    size: 35,
    capacity: 2,
    description: "Plus d&apos;espace, plus de calme. Idéale pour prolonger votre séjour à Parakou avec un confort durable.",
    image: "https://images.unsplash.com/photo-1551776235-dde6d482980b?q=80&w=2070&auto=format&fit=crop",
    amenities: ["Espace Bureau", "Douche pluie", "Climatisation", "Coffre-fort"]
  },
  {
    id: "penthouse-panorama",
    name: "Penthouse Panorama",
    type: "Penthouse",
    price: 180,
    size: 110,
    capacity: 3,
    description: "Une expérience rare. Terrasse, grands volumes, et un panorama sur la ville — pour célébrer, se reposer, ou travailler avec style.",
    image: "https://images.unsplash.com/photo-1560067174-8943bd89db84?q=80&w=2070&auto=format&fit=crop",
    amenities: ["Terrasse Privée", "Salon", "Baignoire", "Service Conciergerie"]
  }
];
