import type { SiteContent } from './app/types/SiteContent'

/**
 * Mock SiteContent used by the `.playground` to preview the template in isolation.
 * Not shipped to production — edit it freely while designing your template.
 *
 * A realistic, fully-filled French plumber example: every SiteContent key is populated so
 * the whole page (hero, emergency, services, gallery, reviews, FAQ, zone, contact…) renders.
 */
export const mockSiteContent: SiteContent = {
  businessName: 'Plomberie Martin',
  subtitle:
    'Dépannage, installation et rénovation à Rennes et alentours — un artisan de confiance, disponible 7j/7.',
  phone: '02 99 00 12 34',
  email: 'contact@plomberie-martin.fr',
  city: 'Rennes',
  area: 'Ille-et-Vilaine',
  // Copie éditoriale éditée par le client dans son CMS (absente = défaut de la template).
  heroBadge: 'Plombier chauffagiste depuis 2003',
  servicesHeading: 'Nos interventions',
  about:
    "Artisan plombier installé à Rennes depuis plus de quinze ans, je prends en charge vos dépannages, installations et rénovations avec le même soin. Quand vous appelez, vous parlez directement à l'artisan qui viendra chez vous — pas à un standard. Diagnostic honnête, matériel de qualité et chantier laissé propre : c'est ma manière de travailler.",
  heroImage: 'https://picsum.photos/seed/cuivre-hero/800/600',
  aboutImage: 'https://picsum.photos/seed/cuivre-about/800/600',
  palette: {
    primary: '#1080B4',
    secondary: '#10293D',
    accent: '#22A8C4',
  },
  services: [
    {
      title: 'Dépannage & urgences',
      description:
        'Fuite, canalisation bouchée, panne de chauffe-eau : intervention rapide 7j/7 pour limiter les dégâts.',
    },
    {
      title: 'Recherche de fuite',
      description: 'Détection précise sans casse inutile, puis réparation durable de la fuite.',
    },
    {
      title: 'Installation sanitaire',
      description:
        'Salle de bain, cuisine, WC : pose complète et soignée, du réseau aux finitions.',
    },
    {
      title: 'Chauffe-eau & chauffage',
      description:
        'Installation, remplacement et entretien de chauffe-eau et de systèmes de chauffage.',
    },
    {
      title: 'Rénovation de salle de bain',
      description: "Modernisation complète de vos pièces d'eau, de la dépose à la mise en service.",
    },
    {
      title: 'Mise aux normes',
      description: 'Remise à niveau de vos installations pour plus de sécurité et de confort.',
    },
  ],
  gallery: [
    {
      url: 'https://picsum.photos/seed/cuivre1/800/600',
      alt: 'Rénovation complète de salle de bain',
    },
    { url: 'https://picsum.photos/seed/cuivre2/800/600', alt: 'Installation de chauffe-eau' },
    { url: 'https://picsum.photos/seed/cuivre3/800/600', alt: 'Pose de robinetterie de cuisine' },
    { url: 'https://picsum.photos/seed/cuivre4/800/600', alt: 'Réseau de cuivre soigné' },
    { url: 'https://picsum.photos/seed/cuivre5/800/600', alt: "Douche à l'italienne" },
    { url: 'https://picsum.photos/seed/cuivre6/800/600', alt: "Remplacement de colonne d'eau" },
  ],
  reviews: [
    {
      author: 'Sophie L.',
      rating: 5,
      text: "Intervention rapide un dimanche pour une fuite sous l'évier. Travail propre, prix annoncé respecté, je recommande vivement.",
    },
    {
      author: 'Marc D.',
      rating: 5,
      text: 'A rénové entièrement notre salle de bain. Chantier tenu dans les délais et fini impeccable. Un vrai professionnel.',
    },
    {
      author: 'Christine B.',
      rating: 4,
      text: 'Remplacement du chauffe-eau très bien géré, explications claires. Ponctuel et de bon conseil.',
    },
    {
      author: 'Julien P.',
      rating: 5,
      text: 'Débouchage express et diagnostic honnête, sans essayer de vendre plus que nécessaire. Parfait.',
    },
  ],
  faq: [
    {
      question: 'Intervenez-vous en urgence le week-end ?',
      answer:
        'Oui, nous intervenons 7j/7 pour les urgences (fuites, dégâts des eaux, chauffe-eau en panne). Appelez-nous, on vous rappelle rapidement.',
    },
    {
      question: 'Le devis est-il gratuit ?',
      answer:
        'Le devis est toujours gratuit et sans engagement. On se déplace, on diagnostique et on vous remet un prix clair avant toute intervention.',
    },
    {
      question: 'Quelles zones couvrez-vous ?',
      answer:
        "Rennes et les communes voisines d'Ille-et-Vilaine. Vous êtes juste à côté ? Appelez pour vérifier, nous nous déplaçons souvent au-delà.",
    },
    {
      question: 'Quels moyens de paiement acceptez-vous ?',
      answer:
        "Carte bancaire, chèque et virement. La facture détaillée vous est remise à la fin de l'intervention.",
    },
    {
      question: 'Proposez-vous une garantie sur vos travaux ?',
      answer:
        'Oui. Nos installations sont couvertes par la garantie décennale et nous restons disponibles en cas de besoin après le chantier.',
    },
  ],
  zones: ['Rennes', 'Cesson-Sévigné', 'Bruz', 'Saint-Grégoire', 'Chantepie', 'Pacé'],
  openingHours: [
    { day: 'Lundi', hours: '8h–18h' },
    { day: 'Mardi', hours: '8h–18h' },
    { day: 'Mercredi', hours: '8h–18h' },
    { day: 'Jeudi', hours: '8h–18h' },
    { day: 'Vendredi', hours: '8h–18h' },
    { day: 'Samedi', hours: '9h–12h' },
    { day: 'Dimanche', hours: 'Urgences uniquement' },
  ],
}
