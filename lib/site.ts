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

export function whatsappHref(message: string) {
  return `https://wa.me/${siteConfig.whatsappNumber}?text=${encodeURIComponent(message)}`;
}
