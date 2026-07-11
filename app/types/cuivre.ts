/**
 * Types + construction du contenu de la template 'plumber-cuivre' (« Plombier Source »).
 *
 * La template est une couche (layer) Nuxt autonome : elle ne connaît rien de Storyblok,
 * du tunnel ou de PostHog. Elle rend un `SiteContent` typé (les données variables réelles
 * du prospect) et POSSÈDE sa propre copie éditoriale/boilerplate (titres de sections,
 * cadrage savoir-faire/méthode/marques/urgence, badge hero, libellés CTA, repères de
 * confiance…) sous forme de valeurs par défaut — c'est du design, pas de la donnée client.
 *
 * `buildCuivreContent` fusionne les deux : données variables issues de `SiteContent`,
 * boilerplate issu des défauts ci-dessous, pour produire la structure typée que les
 * sections attendent.
 */
import type { SiteContent } from '~/types/SiteContent'

export interface CuivreTheme {
  primary: string
  secondary: string
  accent: string
}

export const cuivreDefaultTheme: CuivreTheme = {
  primary: '#1080B4',
  secondary: '#10293D',
  accent: '#22A8C4',
}

export interface CuivreHeroContent {
  badge: string
  title: string
  subtitle: string
  city: string
  phone: string
  ctaCallLabel: string
  ctaQuoteLabel: string
  image: string
  imageCaption: string
  points: string[]
}

export interface CuivreTrustItem {
  value: string
  label: string
}

export interface CuivreEmergencyContent {
  heading: string
  text: string
  phone: string
  availabilityLabel: string
  items: string[]
}

export interface CuivreServiceItem {
  label: string
  description: string
}

export interface CuivreServicesContent {
  heading: string
  subheading: string
  items: CuivreServiceItem[]
}

export interface CuivreCraftItem {
  label: string
  description: string
}

export interface CuivreCraftContent {
  kicker: string
  heading: string
  text: string
  items: CuivreCraftItem[]
}

export interface CuivreAboutContent {
  kicker: string
  heading: string
  text: string
  image: string
  imageCaption: string
  points: string[]
}

export interface CuivreBrandsContent {
  heading: string
  subheading: string
  items: string[]
}

export interface CuivreGalleryItem {
  image: string
  caption: string
}

export interface CuivreGalleryContent {
  heading: string
  subheading: string
  items: CuivreGalleryItem[]
}

export interface CuivreProcessItem {
  title: string
  description: string
}

export interface CuivreProcessContent {
  heading: string
  subheading: string
  items: CuivreProcessItem[]
}

export interface CuivreReviewItem {
  quote: string
  author: string
  rating: number
}

export interface CuivreReviewsContent {
  heading: string
  items: CuivreReviewItem[]
}

export interface CuivreZoneContent {
  heading: string
  city: string
  areaLabel: string
  note: string
}

export interface CuivreFaqItem {
  question: string
  answer: string
}

export interface CuivreFaqContent {
  heading: string
  items: CuivreFaqItem[]
}

export interface CuivreContactContent {
  heading: string
  subheading: string
  phone: string
  email: string
  city: string
  hours: string
  ctaLabel: string
}

export interface CuivreSocialLink {
  /** Réseau normalisé (facebook, instagram, linkedin, tiktok, youtube, twitter). */
  network: string
  /** Libellé lisible du réseau. */
  label: string
  /** URL complète du profil. */
  url: string
}

/** Contenu complet de la page, prêt à être rendu par les sections. */
export interface CuivrePageContent {
  theme: CuivreTheme
  hero: CuivreHeroContent
  trustItems: CuivreTrustItem[]
  emergency: CuivreEmergencyContent
  services: CuivreServicesContent
  craft: CuivreCraftContent
  about: CuivreAboutContent
  brands: CuivreBrandsContent
  gallery: CuivreGalleryContent
  process: CuivreProcessContent
  reviews: CuivreReviewsContent
  zone: CuivreZoneContent
  faq: CuivreFaqContent
  contact: CuivreContactContent
  social: CuivreSocialLink[]
}

/**
 * Copie éditoriale/boilerplate possédée par la template (design, pas donnée client).
 * Ces libellés reproduisent l'intention d'une page Storyblok entièrement remplie, afin
 * que le rendu visuel soit identique même quand `SiteContent` ne fournit que les
 * données variables (nom, téléphone, services, avis…).
 */
const cuivreDefaults = {
  heroBadge: 'Artisan plombier',
  heroSubtitle:
    'Dépannage, installation et rénovation — un artisan de confiance, pas une plateforme.',
  heroCtaCallLabel: 'Appeler maintenant',
  heroCtaQuoteLabel: 'Demander un devis',
  heroPoints: ['Devis gratuit', 'Intervention rapide', 'Travail garanti'] as string[],

  trustItems: [
    { value: '7j/7', label: 'Dépannage & urgences' },
    { value: 'Garantie décennale', label: 'Travaux assurés' },
    { value: 'Devis 0 €', label: 'Sans engagement' },
    { value: 'Artisan local', label: 'Proche de chez vous' },
  ] as CuivreTrustItem[],

  emergencyHeading: 'Une fuite ? On intervient vite.',
  emergencyText:
    "Fuite, canalisation bouchée, chauffe-eau en panne ? Coupez l'arrivée d'eau, puis appelez : on vous rappelle vite et on intervient au plus tôt pour limiter les dégâts.",
  emergencyAvailabilityLabel: 'Disponible 7j/7',
  emergencyItems: [
    'Recherche et réparation de fuite',
    'Débouchage de canalisation',
    'Dépannage chauffe-eau',
    'Remise en eau après intervention',
  ] as string[],

  servicesHeading: 'Nos services',
  servicesSubheading:
    "Du petit dépannage à la rénovation complète, tout le savoir-faire d'un plombier au même endroit.",

  craftKicker: "Les règles de l'art",
  craftHeading: 'Un travail propre, fait pour durer',
  craftText:
    'Chaque intervention suit les mêmes exigences : diagnostic honnête, matériel de qualité, pose soignée et chantier laissé propre. Pas de mauvaise surprise, juste du travail bien fait.',
  craftItems: [
    {
      label: 'Diagnostic clair',
      description: "On explique le problème et la solution avant d'intervenir.",
    },
    {
      label: 'Matériel de qualité',
      description: 'Des marques reconnues, choisies pour leur fiabilité dans le temps.',
    },
    {
      label: 'Pose soignée',
      description: "Des finitions nettes, réalisées dans les règles de l'art.",
    },
    {
      label: 'Chantier propre',
      description: "On repart en laissant votre intérieur aussi propre qu'à l'arrivée.",
    },
  ] as CuivreCraftItem[],

  aboutKicker: 'Votre plombier',
  aboutHeading: 'Un artisan, pas une plateforme',
  aboutText:
    "Quand vous appelez, vous tombez sur l'artisan qui viendra chez vous — pas sur un standard. Un interlocuteur unique, un travail assumé et des conseils honnêtes, du premier appel à la fin du chantier.",
  aboutPoints: ['Interlocuteur unique', 'Devis détaillé', 'Prix transparents'] as string[],

  brandsHeading: 'Du matériel qui dure',
  brandsSubheading: 'Les marques que nous posons au quotidien, choisies pour leur fiabilité.',
  brandsItems: [
    'Grohe',
    'Geberit',
    'Atlantic',
    'Hansgrohe',
    'Jacob Delafon',
    'Saunier Duval',
  ] as string[],

  galleryHeading: 'Nos chantiers récents',
  gallerySubheading: 'Un aperçu de nos dernières réalisations, du dépannage à la rénovation.',

  processHeading: 'Comment ça se passe',
  processSubheading: "Une méthode simple et transparente, de l'appel à la vérification finale.",
  processItems: [
    {
      title: 'Votre appel',
      description: "Vous décrivez le problème, on évalue ensemble l'urgence et les options.",
    },
    {
      title: 'Visite & devis',
      description: 'On se déplace, on diagnostique et on vous remet un devis clair et gratuit.',
    },
    {
      title: 'Intervention',
      description: 'On réalise les travaux au moment convenu, proprement et dans les règles.',
    },
    {
      title: 'Contrôle',
      description: "On vérifie tout avec vous et on ne repart qu'une fois le travail impeccable.",
    },
  ] as CuivreProcessItem[],

  reviewsHeading: 'Ce que disent nos clients',

  zoneHeading: "Secteur d'intervention",
  zoneNote:
    'Vous êtes juste à côté ? Appelez pour vérifier : nous intervenons aussi dans les communes voisines.',

  faqHeading: 'Questions fréquentes',

  contactHeading: 'Parlons de votre projet',
  contactSubheading:
    'Un dépannage, un devis, une question ? Contactez-nous, on vous répond rapidement.',
  contactCtaLabel: 'Appeler maintenant',
} as const

/**
 * Formate une liste d'horaires d'ouverture en une chaîne lisible.
 * @param openingHours Liste `{ day, hours }` issue de `SiteContent` (potentiellement absente).
 * @returns Une chaîne « Jour hh–hh · Jour hh–hh », ou une chaîne vide si aucune donnée.
 */
function formatOpeningHours(openingHours: SiteContent['openingHours']): string {
  if (!Array.isArray(openingHours)) {
    return ''
  }
  return openingHours
    .map((entry): string => {
      const day: string = typeof entry.day === 'string' ? entry.day.trim() : ''
      const hours: string = typeof entry.hours === 'string' ? entry.hours.trim() : ''
      if (!day && !hours) {
        return ''
      }
      if (!hours) {
        return day
      }
      if (!day) {
        return hours
      }
      return `${day} ${hours}`
    })
    .filter((line): boolean => line.length > 0)
    .join(' · ')
}

/**
 * Retourne le texte éditorial du contenu s'il est non vide, sinon le défaut de la template.
 * @param value Texte éditorial issu de `SiteContent` (potentiellement absent).
 * @param templateDefault Copie par défaut possédée par la template.
 * @returns Le texte à afficher.
 */
function resolveEditorialText(value: string | undefined, templateDefault: string): string {
  return typeof value === 'string' && value.trim().length > 0 ? value : templateDefault
}

/** Réseaux connus → libellés lisibles (accessibilité + title au survol). */
const SOCIAL_LABELS: Record<string, string> = {
  facebook: 'Facebook',
  instagram: 'Instagram',
  linkedin: 'LinkedIn',
  tiktok: 'TikTok',
  youtube: 'YouTube',
  twitter: 'X (Twitter)',
}

/**
 * Normalise les liens réseaux sociaux (une URL non vide est requise).
 * @param social Liens bruts du prospect (optionnels).
 * @returns Les liens normalisés avec un libellé lisible.
 */
function normalizeSocial(social: SiteContent['social']): CuivreSocialLink[] {
  if (!Array.isArray(social)) {
    return []
  }
  return social
    .filter((link): boolean => typeof link.url === 'string' && link.url.trim().length > 0)
    .map((link): CuivreSocialLink => {
      const network: string = (link.network ?? '').trim().toLowerCase()
      return {
        network,
        label: SOCIAL_LABELS[network] ?? (network ? network : 'Lien'),
        url: (link.url ?? '').trim(),
      }
    })
}

/**
 * Construit le contenu de page entièrement typé à partir d'un `SiteContent`.
 *
 * Les champs VARIABLES (nom, téléphone, ville, services, avis, galerie, FAQ, horaires…)
 * proviennent de `content` ; les champs BOILERPLATE (titres de sections, cadrage éditorial,
 * repères de confiance, points…) proviennent des défauts de la template. La copie ÉDITORIALE
 * éditable par le client (badge et points du hero, libellés CTA, repères de confiance, titres
 * de sections) est reprise de `content` quand elle est non vide, sinon retombe sur les défauts.
 * Les règles de filtrage d'origine sont conservées : galerie limitée à 7 éléments, avis/FAQ
 * sans texte écartés, premier avis mis en vedette.
 * @param content Données variables du prospect.
 * @returns Le contenu typé prêt pour le rendu par les sections.
 */
export function buildCuivreContent(content: SiteContent): CuivrePageContent {
  const palette = content.palette ?? {}

  const trustItemsFromContent: CuivreTrustItem[] = Array.isArray(content.trustItems)
    ? content.trustItems
        .map((item): CuivreTrustItem => ({ value: item.value ?? '', label: item.label ?? '' }))
        .filter((item): boolean => item.value.length > 0 || item.label.length > 0)
    : []
  const trustItems: CuivreTrustItem[] = trustItemsFromContent.length
    ? trustItemsFromContent
    : cuivreDefaults.trustItems

  const heroPointsFromContent: string[] = Array.isArray(content.heroPoints)
    ? content.heroPoints.filter(
        (point): boolean => typeof point === 'string' && point.trim().length > 0,
      )
    : []
  const heroPoints: string[] = heroPointsFromContent.length
    ? heroPointsFromContent
    : cuivreDefaults.heroPoints

  const areaLabel: string =
    typeof content.area === 'string' && content.area.length > 0
      ? content.area
      : Array.isArray(content.zones)
        ? content.zones
            .filter((zone): boolean => typeof zone === 'string' && zone.length > 0)
            .join(' · ')
        : ''

  return {
    theme: {
      primary:
        typeof palette.primary === 'string' && palette.primary.length > 0
          ? palette.primary
          : cuivreDefaultTheme.primary,
      secondary:
        typeof palette.secondary === 'string' && palette.secondary.length > 0
          ? palette.secondary
          : cuivreDefaultTheme.secondary,
      accent:
        typeof palette.accent === 'string' && palette.accent.length > 0
          ? palette.accent
          : cuivreDefaultTheme.accent,
    },
    hero: {
      badge: resolveEditorialText(content.heroBadge, cuivreDefaults.heroBadge),
      title: content.businessName ?? '',
      subtitle:
        content.subtitle && content.subtitle.length > 0
          ? content.subtitle
          : cuivreDefaults.heroSubtitle,
      city: content.city ?? '',
      phone: content.phone ?? '',
      ctaCallLabel: resolveEditorialText(content.ctaCallLabel, cuivreDefaults.heroCtaCallLabel),
      ctaQuoteLabel: resolveEditorialText(content.ctaQuoteLabel, cuivreDefaults.heroCtaQuoteLabel),
      image: content.heroImage ?? '',
      imageCaption: '',
      points: heroPoints,
    },
    trustItems,
    emergency: {
      heading: cuivreDefaults.emergencyHeading,
      text: cuivreDefaults.emergencyText,
      phone: content.phone ?? '',
      availabilityLabel: cuivreDefaults.emergencyAvailabilityLabel,
      items: cuivreDefaults.emergencyItems,
    },
    services: {
      heading: resolveEditorialText(content.servicesHeading, cuivreDefaults.servicesHeading),
      subheading: cuivreDefaults.servicesSubheading,
      items: Array.isArray(content.services)
        ? content.services.map((service): CuivreServiceItem => ({
            label: service.title ?? '',
            description: service.description ?? '',
          }))
        : [],
    },
    craft: {
      kicker: cuivreDefaults.craftKicker,
      heading: cuivreDefaults.craftHeading,
      text: cuivreDefaults.craftText,
      items: cuivreDefaults.craftItems,
    },
    about: {
      kicker: cuivreDefaults.aboutKicker,
      heading: resolveEditorialText(content.aboutHeading, cuivreDefaults.aboutHeading),
      text: content.about && content.about.length > 0 ? content.about : cuivreDefaults.aboutText,
      image: content.aboutImage ?? '',
      imageCaption: '',
      points: cuivreDefaults.aboutPoints,
    },
    brands: {
      heading: cuivreDefaults.brandsHeading,
      subheading: cuivreDefaults.brandsSubheading,
      items: cuivreDefaults.brandsItems,
    },
    gallery: {
      heading: resolveEditorialText(content.galleryHeading, cuivreDefaults.galleryHeading),
      subheading: cuivreDefaults.gallerySubheading,
      items: Array.isArray(content.gallery)
        ? content.gallery
            .map((image): CuivreGalleryItem => ({
              image: image.url ?? '',
              caption: image.alt ?? '',
            }))
            .filter((item): boolean => item.image.length > 0)
            .slice(0, 7)
        : [],
    },
    process: {
      heading: cuivreDefaults.processHeading,
      subheading: cuivreDefaults.processSubheading,
      items: cuivreDefaults.processItems,
    },
    reviews: {
      heading: resolveEditorialText(content.reviewsHeading, cuivreDefaults.reviewsHeading),
      items: Array.isArray(content.reviews)
        ? content.reviews
            .map((review): CuivreReviewItem => ({
              quote: review.text ?? '',
              author: review.author && review.author.length > 0 ? review.author : 'Client',
              rating:
                typeof review.rating === 'number'
                  ? Math.min(5, Math.max(1, Math.round(review.rating)))
                  : 5,
            }))
            .filter((item): boolean => item.quote.length > 0)
        : [],
    },
    zone: {
      heading: cuivreDefaults.zoneHeading,
      city: content.city ?? '',
      areaLabel,
      note: cuivreDefaults.zoneNote,
    },
    faq: {
      heading: resolveEditorialText(content.faqHeading, cuivreDefaults.faqHeading),
      items: Array.isArray(content.faq)
        ? content.faq
            .map((item): CuivreFaqItem => ({
              question: item.question ?? '',
              answer: item.answer ?? '',
            }))
            .filter((item): boolean => item.question.length > 0)
        : [],
    },
    contact: {
      heading: resolveEditorialText(content.contactHeading, cuivreDefaults.contactHeading),
      subheading: cuivreDefaults.contactSubheading,
      phone: content.phone ?? '',
      email: content.email ?? '',
      city: content.city ?? '',
      hours: formatOpeningHours(content.openingHours),
      ctaLabel: cuivreDefaults.contactCtaLabel,
    },
    social: normalizeSocial(content.social),
  }
}
