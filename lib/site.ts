export const siteConfig = {
  name: "Tuff Workwear",
  tagline: "Built Tough. Priced Right.",
  phoneDisplay: "083 474 4343",
  phoneHref: "tel:+27834744343",
  whatsappNumber: "27834744343",
  email: "sales@tuffworkwear.co.za",
  address: "Daintree Avenue, Durban",
  url: "https://tuffworkwear.co.za",
};

export const localBusinessJsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: siteConfig.name,
  description:
    "Durban-based workwear supplier. Conti suits, safety boots, hi-viz, rain gear and apparel. Part of the Taurus Workwear group.",
  url: siteConfig.url,
  telephone: "+27834744343",
  email: siteConfig.email,
  address: {
    "@type": "PostalAddress",
    streetAddress: "Daintree Avenue",
    addressLocality: "Durban",
    addressRegion: "KwaZulu-Natal",
    addressCountry: "ZA",
  },
  priceRange: "R",
};

export function whatsappHref(message: string) {
  return `https://wa.me/${siteConfig.whatsappNumber}?text=${encodeURIComponent(message)}`;
}
