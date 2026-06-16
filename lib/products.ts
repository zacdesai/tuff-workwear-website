import { whatsappHref } from "@/lib/site";

export type Product = {
  id: string;
  category: string;
  name: string;
  slug: string;
  spec: string;
  price: string;
  moq: string;
  colours: string[];
  image?: string;
  images?: string[];
  badge?: string;
  additionalInfo?: { label: string; value: string }[];
  // Extra category slug-prefixes this product should also appear under
  // (e.g. a hi-viz golfer listed under both Hi-viz and Golfers).
  extraCategories?: string[];
};

export const categories = [
  {
    name: "Conti suits",
    href: "/catalogue/conti-suits",
    count: "6 styles, sizes 30 to 56",
    tone: "Econo to premium. 80/20 poly cotton, denim, hi-viz. One price per size run.",
  },
  {
    name: "Hi-viz",
    href: "/catalogue/hi-viz",
    count: "Orange/navy and lime/navy",
    tone: "65/35 polycotton with reflective tape across chest, sleeves and legs.",
  },
  {
    name: "Flame & acid",
    href: "/catalogue/flame-acid",
    count: "D59 navy, sizes 28 to 54",
    tone: "Sasol-spec flame-retardant and acid-resistant suits. Triple stitched, YKK zips, navy.",
  },
  {
    name: "Safety boots",
    href: "/catalogue/safety-boots",
    count: "Steel toe, NRCS approved",
    tone: "Buffalo leather upper, cushioned insole, anti-slip sole. MOQ 10.",
  },
  {
    name: "Rain & freezer",
    href: "/catalogue/rain-freezer",
    count: "Rubberised suits and below-zero gear",
    tone: "2-piece rain suits from R225. Freezer jackets from R350.",
  },
  {
    name: "Golfers",
    href: "/catalogue/apparel/golfers",
    count: "13 colours, S to 3XL",
    tone: "180gsm Vicbay polo. 100% cotton pique, branding-ready.",
  },
  {
    name: "T-shirts",
    href: "/catalogue/apparel/t-shirts",
    count: "160gsm and 180gsm, S to 3XL",
    tone: "Vicbay Platinum and Heavyweight. Bulk basics with clean colour runs.",
  },
];

export const featuredProducts: Product[] = [
  {
    id: "ECONO-195-PLAIN",
    category: "Conti suit",
    name: "Econo Conti Suit",
    slug: "conti-suits/econo-conti-suit",
    spec: "195gsm poly cotton · triple stitched · bar tacked",
    price: "R149.00",
    moq: "MOQ 10",
    colours: ["#22334a", "#1a1a1a", "#1a3c8a", "#1a6b3c", "#9e9e9e", "#8c7d62", "#c0392b", "#e8611a"],
    image: "https://vulcanworkwear.co.za/wp-content/uploads/2024/11/NAVY-ECONO-PLAIN-700x933.png",
    images: [
      "https://vulcanworkwear.co.za/wp-content/uploads/2024/11/NAVY-ECONO-PLAIN-700x933.png",
      "https://vulcanworkwear.co.za/wp-content/uploads/2024/11/ECONO-ROYAL-700x933.jpg",
      "https://vulcanworkwear.co.za/wp-content/uploads/2024/11/ECONO-BLACK-700x933.jpg",
      "https://vulcanworkwear.co.za/wp-content/uploads/2024/11/ECONO-GREY-700x933.jpg",
      "https://vulcanworkwear.co.za/wp-content/uploads/2024/11/ECONO-EMERALD-GREEN-700x933.jpg",
      "https://vulcanworkwear.co.za/wp-content/uploads/2024/11/ECONO-ORANGE-700x933.jpg",
      "https://vulcanworkwear.co.za/wp-content/uploads/2024/11/ECONO-RED-700x933.jpg",
    ],
    badge: "Best seller",
  },
  {
    id: "PREMIUM-8020-PLAIN",
    category: "Conti suit",
    name: "Premium Conti Suit",
    slug: "conti-suits/premium-conti-suit",
    spec: "80/20 poly cotton · pen pocket · press stud jacket · sizes 30 to 56",
    price: "R225.00",
    moq: "MOQ 10",
    colours: ["#9e9e9e", "#1a3c8a", "#c0392b", "#1a1a1a", "#22334a", "#1a6b3c", "#6b7c5a"],
    image: "https://vulcanworkwear.co.za/wp-content/uploads/2023/01/PREMIUM-GREY-65-35-14-700x933.jpg",
    images: [
      "https://vulcanworkwear.co.za/wp-content/uploads/2023/01/PREMIUM-GREY-65-35-14-700x933.jpg",
      "https://vulcanworkwear.co.za/wp-content/uploads/2023/01/65-35-PREMIUM-ROYAL-700x933.jpg",
      "https://vulcanworkwear.co.za/wp-content/uploads/2023/01/65-35-PREMIUM-RED-700x933.jpg",
      "https://vulcanworkwear.co.za/wp-content/uploads/2023/01/11_030_Black-700x933.jpg",
      "https://vulcanworkwear.co.za/wp-content/uploads/2023/01/6535-NAVY-700x933.jpg",
      "https://vulcanworkwear.co.za/wp-content/uploads/2023/01/EMERALD-700x933.png",
      "https://vulcanworkwear.co.za/wp-content/uploads/2023/01/OLIVE-700x933.png",
    ],
  },
  {
    id: "HIVIZ-6535-TWOTONE",
    category: "Hi-viz",
    name: "Hi-Viz Two Tone Worksuit",
    slug: "hi-viz/hi-viz-two-tone-worksuit",
    spec: "65/35 polycotton · YKK chunky zip · reflective tape on chest, sleeves and legs",
    price: "R525.00",
    moq: "MOQ 10",
    colours: ["#e8611a", "#22334a", "#c8e020", "#22334a"],
    image: "https://vulcanworkwear.co.za/wp-content/uploads/2023/01/HI-VIZ-700x933.jpg",
    badge: "Hi-viz",
  },
  {
    id: "KIRIN-ST-NRCS",
    category: "Safety boot",
    name: "Kirin Safety Boot",
    slug: "safety-boots/kirin-steel-toe",
    spec: "Buffalo leather · steel toe cap · NRCS approved",
    price: "R295.00",
    moq: "MOQ 10",
    colours: ["#1a1a1a"],
    image: "/kirin-boot.png",
    badge: "NRCS approved",
  },
  {
    id: "VICBAY-POLO-180",
    category: "Golfer",
    name: "Vicbay Polo Golf Shirt",
    slug: "apparel/golfers/vicbay-polo-180gsm",
    spec: "180gsm 100% cotton pique · 13 colours · branding-ready",
    price: "R125.00",
    moq: "MOQ 10",
    colours: ["#1a1a1a", "#ffffff", "#22334a", "#7a8c5a", "#c0392b", "#e8a020", "#4a90d9", "#d4c9b0"],
    image: "https://www.vicbay-gp.co.za/web/image/product.product/550/image_1024/%5B7BG31%5D%20Mens%20Polo%20%28Black%2C%20S%29?unique=9f092c2",
  },
  {
    id: "VICBAY-HEAVY-TEE-180",
    category: "T-shirt",
    name: "Vicbay Heavyweight T-Shirt",
    slug: "apparel/t-shirts/vicbay-heavyweight-180gsm",
    spec: "180gsm 100% combed cotton · crew neck · tubular knit · double stitched",
    price: "R95.00",
    moq: "MOQ 10",
    colours: ["#1a1a1a", "#ffffff", "#22334a", "#c0392b", "#4a90d9", "#1a6b3c", "#6b4b2a", "#7a8c5a"],
    image: "https://www.vicbay-gp.co.za/web/image/product.product/308/image_1024/%5B8BG31%5D%20Heavyweight%20T-shirt%20%28Black%2C%20S%29?unique=342b70e",
  },
  {
    id: "D59-BLAZE-FLAME-ACID",
    category: "Flame & acid suit",
    name: "D59 Blaze Flame and Acid Suit",
    slug: "flame-acid/d59-blaze-flame-acid-suit",
    spec: "D59 flame-retardant and acid-resistant · Sasol spec · YKK zip · triple stitched",
    price: "R590.00",
    moq: "MOQ 10",
    colours: ["#22334a"],
    image: "https://vulcanworkwear.co.za/wp-content/uploads/2023/01/41_090_NV-1-700x933.jpg",
    badge: "Flame & acid",
  },
  {
    id: "HIVIZ-GOLFER-6535",
    category: "Hi-viz golfer",
    name: "Hi-Viz Two Tone Golfer",
    slug: "hi-viz/hi-viz-two-tone-golfer",
    spec: "Hi-viz two tone golf shirt · luminous panels with navy · branding-ready",
    price: "R200.00",
    moq: "MOQ 10",
    colours: ["#c8e020", "#22334a", "#e8611a"],
    image: "https://vulcanworkwear.co.za/wp-content/uploads/2024/11/31-700x933.png",
    badge: "Hi-viz",
  },
];

// Full product catalogue — used by catalogue pages
export const allProducts: Product[] = [
  // Conti suits
  {
    id: "ECONO-195-PLAIN",
    category: "Conti suit",
    name: "Econo Conti Suit",
    slug: "conti-suits/econo-conti-suit",
    spec: "195gsm poly cotton · triple stitched back rise and inside leg · bar tacked at stress points",
    price: "R149.00",
    moq: "MOQ 10",
    colours: ["#22334a", "#1a1a1a", "#1a3c8a", "#1a6b3c", "#9e9e9e", "#8c7d62", "#c0392b", "#e8611a"],
    image: "https://vulcanworkwear.co.za/wp-content/uploads/2024/11/NAVY-ECONO-PLAIN-700x933.png",
    images: [
      "https://vulcanworkwear.co.za/wp-content/uploads/2024/11/NAVY-ECONO-PLAIN-700x933.png",
      "https://vulcanworkwear.co.za/wp-content/uploads/2024/11/ECONO-ROYAL-700x933.jpg",
      "https://vulcanworkwear.co.za/wp-content/uploads/2024/11/ECONO-BLACK-700x933.jpg",
      "https://vulcanworkwear.co.za/wp-content/uploads/2024/11/ECONO-GREY-700x933.jpg",
      "https://vulcanworkwear.co.za/wp-content/uploads/2024/11/ECONO-EMERALD-GREEN-700x933.jpg",
      "https://vulcanworkwear.co.za/wp-content/uploads/2024/11/ECONO-ORANGE-700x933.jpg",
      "https://vulcanworkwear.co.za/wp-content/uploads/2024/11/ECONO-RED-700x933.jpg",
    ],
    badge: "Best seller",
    additionalInfo: [
      { label: "Fabric type", value: "195gsm polycotton" },
      { label: "Sizes", value: "30 – 56" },
      { label: "Garment type", value: "Suit (jacket and trousers)" },
      { label: "Production", value: "South Africa" },
      { label: "Flame-retardant", value: "No" },
      { label: "Acid-proof", value: "No" },
      { label: "Approved by", value: "Proudly South African" },
    ],
  },
  {
    id: "ECONO-195-REFLECTIVE",
    category: "Conti suit",
    name: "Econo Conti Suit with Reflective Tape",
    slug: "conti-suits/econo-conti-suit-reflective",
    spec: "195gsm poly cotton · reflective tape on forearms and shins · bar tacked",
    price: "R175.00",
    moq: "MOQ 10",
    colours: ["#22334a", "#1a1a1a", "#1a3c8a", "#1a6b3c", "#9e9e9e", "#8c7d62", "#c0392b", "#e8611a"],
    image: "https://vulcanworkwear.co.za/wp-content/uploads/2023/01/ECONO-NAVY-TAPE-700x933.png",
    images: [
      "https://vulcanworkwear.co.za/wp-content/uploads/2023/01/ECONO-NAVY-TAPE-700x933.png",
      "https://vulcanworkwear.co.za/wp-content/uploads/2023/01/ECONO-BLACK-REFLECTIVE-700x933.png",
      "https://vulcanworkwear.co.za/wp-content/uploads/2023/01/ECONO-EG-REFLECT-700x933.png",
      "https://vulcanworkwear.co.za/wp-content/uploads/2023/01/43_010_REF-700x933.jpg",
    ],
    additionalInfo: [
      { label: "Fabric type", value: "195gsm polycotton" },
      { label: "Sizes", value: "30 – 56" },
      { label: "Garment type", value: "Suit (jacket and trousers)" },
      { label: "Production", value: "South Africa" },
      { label: "Reflective tape", value: "On forearms and shins" },
      { label: "Flame-retardant", value: "No" },
      { label: "Acid-proof", value: "No" },
      { label: "Approved by", value: "Proudly South African" },
    ],
  },
  {
    id: "PREMIUM-8020-PLAIN",
    category: "Conti suit",
    name: "Premium Conti Suit",
    slug: "conti-suits/premium-conti-suit",
    spec: "80/20 poly cotton · pen pocket and press stud on jacket · triple stitched · sizes 30 to 56",
    price: "R225.00",
    moq: "MOQ 10",
    colours: ["#9e9e9e", "#1a3c8a", "#c0392b", "#1a1a1a", "#22334a", "#1a6b3c", "#6b7c5a"],
    image: "https://vulcanworkwear.co.za/wp-content/uploads/2023/01/PREMIUM-GREY-65-35-14-700x933.jpg",
    images: [
      "https://vulcanworkwear.co.za/wp-content/uploads/2023/01/PREMIUM-GREY-65-35-14-700x933.jpg",
      "https://vulcanworkwear.co.za/wp-content/uploads/2023/01/65-35-PREMIUM-ROYAL-700x933.jpg",
      "https://vulcanworkwear.co.za/wp-content/uploads/2023/01/65-35-PREMIUM-RED-700x933.jpg",
      "https://vulcanworkwear.co.za/wp-content/uploads/2023/01/11_030_Black-700x933.jpg",
      "https://vulcanworkwear.co.za/wp-content/uploads/2023/01/6535-NAVY-700x933.jpg",
      "https://vulcanworkwear.co.za/wp-content/uploads/2023/01/EMERALD-700x933.png",
      "https://vulcanworkwear.co.za/wp-content/uploads/2023/01/OLIVE-700x933.png",
    ],
    additionalInfo: [
      { label: "Fabric type", value: "80/20 polycotton" },
      { label: "Sizes", value: "26 – 52" },
      { label: "Garment type", value: "Suit (jacket and trousers)" },
      { label: "Production", value: "South Africa" },
      { label: "Flame-retardant", value: "No" },
      { label: "Acid-proof", value: "No" },
      { label: "Approved by", value: "YKK · Proudly South African" },
    ],
  },
  {
    id: "PREMIUM-8020-REFLECTIVE",
    category: "Conti suit",
    name: "Premium Conti Suit with Reflective Tape",
    slug: "conti-suits/premium-conti-suit-reflective",
    spec: "80/20 poly cotton · reflective tape · triple stitched · sizes 30 to 56",
    price: "R260.00",
    moq: "MOQ 10",
    colours: ["#9e9e9e", "#1a3c8a", "#c0392b", "#1a1a1a", "#22334a", "#1a6b3c"],
    image: "https://vulcanworkwear.co.za/wp-content/uploads/2024/11/REFLECTIVE-700x933.png",
    images: [
      "https://vulcanworkwear.co.za/wp-content/uploads/2024/11/REFLECTIVE-700x933.png",
      "https://vulcanworkwear.co.za/wp-content/uploads/2024/11/NAVY-REFLECTIVE-700x933.png",
    ],
    additionalInfo: [
      { label: "Fabric type", value: "80/20 polycotton" },
      { label: "Sizes", value: "26 – 52" },
      { label: "Garment type", value: "Suit (jacket and trousers)" },
      { label: "Reflective tape", value: "Full arms and legs" },
      { label: "Production", value: "South Africa" },
      { label: "Flame-retardant", value: "No" },
      { label: "Acid-proof", value: "No" },
      { label: "Approved by", value: "YKK · Proudly South African" },
    ],
  },
  {
    id: "DENIM-100-COTTON",
    category: "Conti suit",
    name: "Denim Conti Suit",
    slug: "conti-suits/denim-conti-suit",
    spec: "100% cotton denim · concealed zip front · triple stitched inside leg and back rise · sizes 30 to 54",
    price: "R265.00",
    moq: "MOQ 10",
    colours: ["#3b5175"],
    image: "https://vulcanworkwear.co.za/wp-content/uploads/2023/01/Untitled-design-22-700x933.png",
    additionalInfo: [
      { label: "Fabric type", value: "100% cotton denim" },
      { label: "Sizes", value: "30 – 54" },
      { label: "Garment type", value: "Conti suit (jacket and trousers)" },
      { label: "Production", value: "South Africa" },
      { label: "Flame-retardant", value: "No" },
      { label: "Acid-proof", value: "No" },
      { label: "Approved by", value: "YKK · Proudly South African" },
    ],
  },
  {
    id: "J54-COTTON-PLAIN",
    category: "Conti suit",
    name: "J54 100% Cotton Premium Suit",
    slug: "conti-suits/j54-cotton-premium-suit",
    spec: "100% cotton · YKK chunky Vislon zip · double utility pockets on jacket · fully triple stitched · sizes 30 to 56",
    price: "R395.00",
    moq: "MOQ 10",
    colours: ["#22334a", "#1a3c8a"],
    image: "https://vulcanworkwear.co.za/wp-content/uploads/2023/04/1-700x933.jpg",
    images: [
      "https://vulcanworkwear.co.za/wp-content/uploads/2023/04/1-700x933.jpg",
      "https://vulcanworkwear.co.za/wp-content/uploads/2023/04/2-700x933.jpg",
    ],
    additionalInfo: [
      { label: "Fabric type", value: "100% cotton" },
      { label: "Sizes", value: "30 – 56" },
      { label: "Sizing standard", value: "Conforms to SANS 434" },
      { label: "Zip", value: "YKK Chunky Vislon" },
      { label: "Pockets", value: "Double utility pockets on jacket" },
      { label: "Garment type", value: "Suit (jacket and trousers)" },
      { label: "Flame-retardant", value: "No" },
      { label: "Acid-proof", value: "No" },
      { label: "Production", value: "South Africa" },
      { label: "Approved by", value: "YKK · Proudly South African" },
    ],
  },
  {
    id: "J54-COTTON-REFLECTIVE",
    category: "Conti suit",
    name: "J54 100% Cotton Premium Suit with Reflective Tape",
    slug: "conti-suits/j54-cotton-premium-suit-reflective",
    spec: "100% cotton · reflective tape · YKK chunky Vislon zip · double utility pockets · sizes 30 to 56",
    price: "R425.00",
    moq: "MOQ 10",
    colours: ["#22334a", "#1a3c8a"],
    image: "https://vulcanworkwear.co.za/wp-content/uploads/2023/04/1-700x933.jpg",
    images: [
      "https://vulcanworkwear.co.za/wp-content/uploads/2023/04/1-700x933.jpg",
      "https://vulcanworkwear.co.za/wp-content/uploads/2023/04/2-700x933.jpg",
    ],
    additionalInfo: [
      { label: "Fabric type", value: "100% cotton" },
      { label: "Sizes", value: "30 – 56" },
      { label: "Sizing standard", value: "Conforms to SANS 434" },
      { label: "Zip", value: "YKK Chunky Vislon" },
      { label: "Pockets", value: "Double utility pockets on jacket" },
      { label: "Reflective tape", value: "Yes" },
      { label: "Garment type", value: "Suit (jacket and trousers)" },
      { label: "Flame-retardant", value: "No" },
      { label: "Acid-proof", value: "No" },
      { label: "Production", value: "South Africa" },
      { label: "Approved by", value: "YKK · Proudly South African" },
    ],
  },
  {
    id: "HIVIZ-6535-TWOTONE",
    category: "Hi-viz",
    name: "Hi-Viz Two Tone Worksuit",
    slug: "hi-viz/hi-viz-two-tone-worksuit",
    spec: "65/35 polycotton · YKK chunky zip · fully triple stitched · reflective tape across chest, sleeves and legs",
    price: "R525.00",
    moq: "MOQ 10",
    colours: ["#e8611a", "#22334a", "#c8e020", "#22334a"],
    image: "https://vulcanworkwear.co.za/wp-content/uploads/2023/01/HI-VIZ-700x933.jpg",
    badge: "Hi-viz",
    additionalInfo: [
      { label: "Fabric type", value: "65/35 polycotton" },
      { label: "Sizes", value: "28 – 54" },
      { label: "Garment type", value: "Suit (jacket and trousers)" },
      { label: "Reflective tape", value: "Across chest, sleeves and legs" },
      { label: "Production", value: "South Africa" },
      { label: "Flame-retardant", value: "No" },
      { label: "Acid-proof", value: "No" },
      { label: "Approved by", value: "YKK · Proudly South African" },
    ],
  },
  {
    id: "HIVIZ-GOLFER-6535",
    category: "Hi-viz golfer",
    name: "Hi-Viz Two Tone Golfer",
    slug: "hi-viz/hi-viz-two-tone-golfer",
    spec: "Hi-viz two tone golf shirt · luminous panels with navy · collar and button placket · branding-ready",
    price: "R200.00",
    moq: "MOQ 10",
    colours: ["#c8e020", "#22334a", "#e8611a"],
    image: "https://vulcanworkwear.co.za/wp-content/uploads/2024/11/31-700x933.png",
    images: [
      "https://vulcanworkwear.co.za/wp-content/uploads/2024/11/31-700x933.png",
      "https://vulcanworkwear.co.za/wp-content/uploads/2024/11/Vulcan-Website-Size-1-700x933.jpg",
    ],
    badge: "Hi-viz",
    extraCategories: ["apparel/golfers"],
    additionalInfo: [
      { label: "Garment type", value: "Hi-viz golf shirt" },
      { label: "Sizes", value: "S – 5XL" },
      { label: "Colours", value: "Luminous Yellow/Navy, Luminous Orange/Navy" },
      { label: "Branding", value: "Screen print and embroidery ready" },
      { label: "Production", value: "South Africa" },
      { label: "Approved by", value: "Proudly South African" },
    ],
  },
  {
    id: "BUNNY-JACKET-ELITE",
    category: "Hi-viz jacket",
    name: "Bunny Jacket",
    slug: "hi-viz/bunny-jacket",
    spec: "Fleece lined · zip-off sleeves · softshell outer · luminous or navy · sizes S to 5XL",
    price: "R595.00",
    moq: "MOQ 10",
    colours: ["#c8e020", "#e8611a", "#22334a"],
    image: "https://vulcanworkwear.co.za/wp-content/uploads/2023/02/Elite-Bunny-Jacket_Luminous-Yellow-700x934.png",
    images: [
      "https://vulcanworkwear.co.za/wp-content/uploads/2023/02/Elite-Bunny-Jacket_Luminous-Yellow-700x934.png",
      "https://vulcanworkwear.co.za/wp-content/uploads/2023/02/Elite-Bunny-Jacket_Luminous-Orange-700x934.png",
    ],
    badge: "Hi-viz",
    additionalInfo: [
      { label: "Outer shell", value: "Softshell" },
      { label: "Lining", value: "Fleece" },
      { label: "Feature", value: "Zip-off sleeves" },
      { label: "Garment type", value: "Bunny jacket" },
      { label: "Sizes", value: "S – 5XL" },
      { label: "Colours", value: "Hi-viz Yellow, Hi-viz Orange, Navy" },
      { label: "Production", value: "South Africa" },
      { label: "Approved by", value: "Proudly South African" },
    ],
  },
  // Flame & acid
  {
    id: "D59-BLAZE-FLAME-ACID",
    category: "Flame & acid suit",
    name: "D59 Blaze Flame and Acid Suit",
    slug: "flame-acid/d59-blaze-flame-acid-suit",
    spec: "D59 flame-retardant and acid-resistant fabric · Sasol spec · YKK zip · triple stitched · sizes 28 to 54",
    price: "R590.00",
    moq: "MOQ 10",
    colours: ["#22334a"],
    image: "https://vulcanworkwear.co.za/wp-content/uploads/2023/01/41_090_NV-1-700x933.jpg",
    badge: "Flame & acid",
    additionalInfo: [
      { label: "Fabric type", value: "D59 flame-retardant acid-resistant" },
      { label: "Specification", value: "Sasol spec" },
      { label: "Sizes", value: "28 – 54" },
      { label: "Garment type", value: "Suit (jacket and trousers)" },
      { label: "Sold as", value: "Suit or separate jacket and trousers" },
      { label: "Flame-retardant", value: "Yes" },
      { label: "Acid-proof", value: "Yes" },
      { label: "Production", value: "South Africa" },
      { label: "Approved by", value: "YKK · Proudly South African" },
    ],
  },
  // Safety boots
  {
    id: "KIRIN-ST-NRCS",
    category: "Safety boot",
    name: "Kirin Safety Boot",
    slug: "safety-boots/kirin-steel-toe",
    spec: "Buffalo leather upper · steel toe cap · NRCS approved · 4 pairs D-ring eyelets · cushioned insole · anti-slip PU sole",
    price: "R295.00",
    moq: "MOQ 10",
    colours: ["#1a1a1a"],
    image: "/kirin-boot.png",
    images: [
      "/kirin-boot.png",
      "/kirin-boot-2.jpg",
      "/kirin-boot-3.jpg",
      "/kirin-boot-4.jpg",
      "/kirin-boot-5.jpg",
      "/kirin-boot-6.jpg",
    ],
    badge: "NRCS approved",
    additionalInfo: [
      { label: "Upper material", value: "Buffalo leather" },
      { label: "Toe cap", value: "Steel" },
      { label: "Sole", value: "Anti-slip PU" },
      { label: "Insole", value: "Cushioned" },
      { label: "Fastening", value: "Lace-up with 4-pair D-ring eyelets" },
      { label: "Sizes", value: "3 – 12" },
      { label: "Approved by", value: "NRCS" },
    ],
  },
  // Rain & freezer
  {
    id: "RAIN-RUBBERISED-NAVY",
    category: "Rain suit",
    name: "Rubberised Rain Suit — Navy",
    slug: "rain-freezer/rubberised-rain-suit-navy",
    spec: "2-piece set · rubberised waterproof fabric · hooded jacket and matching trousers · taped seams",
    price: "R225.00",
    moq: "MOQ 5",
    colours: ["#22334a"],
    image: "https://vulcanworkwear.co.za/wp-content/uploads/2024/11/35-700x933.png",
    additionalInfo: [
      { label: "Fabric type", value: "Rubberised waterproof" },
      { label: "Garment type", value: "2-piece suit (jacket and trousers)" },
      { label: "Colour", value: "Navy" },
      { label: "Seams", value: "Taped" },
      { label: "Production", value: "South Africa" },
    ],
  },
  {
    id: "RAIN-RUBBERISED-YELLOW",
    category: "Rain suit",
    name: "Rubberised Rain Suit — Yellow",
    slug: "rain-freezer/rubberised-rain-suit-yellow",
    spec: "2-piece set · rubberised waterproof fabric · hooded jacket and matching trousers · taped seams",
    price: "R225.00",
    moq: "MOQ 5",
    colours: ["#f5c518"],
    image: "https://vulcanworkwear.co.za/wp-content/uploads/2024/11/34-700x933.png",
    additionalInfo: [
      { label: "Fabric type", value: "Rubberised waterproof" },
      { label: "Garment type", value: "2-piece suit (jacket and trousers)" },
      { label: "Colour", value: "Yellow" },
      { label: "Seams", value: "Taped" },
      { label: "Production", value: "South Africa" },
    ],
  },
  {
    id: "FREEZER-BELOW-ZERO-JACKET",
    category: "Freezer wear",
    name: "Below Zero Freezer Jacket",
    slug: "rain-freezer/below-zero-freezer-jacket",
    spec: "Padded inner lining · drawcord hood · full-length front zip · sizes S to 5XL",
    price: "R350.00",
    moq: "MOQ 5",
    colours: ["#22334a"],
    image: "https://vulcanworkwear.co.za/wp-content/uploads/2023/01/4-1-700x933.png",
    additionalInfo: [
      { label: "Outer shell", value: "Oxford nylon" },
      { label: "Lining", value: "Cotton inner" },
      { label: "Garment type", value: "Freezer jacket" },
      { label: "Sizes", value: "S – 4XL" },
      { label: "Colour", value: "Navy" },
      { label: "Production", value: "South Africa" },
      { label: "Approved by", value: "YKK · Proudly South African" },
    ],
  },
  {
    id: "FREEZER-BELOW-ZERO-PANTS",
    category: "Freezer wear",
    name: "Below Zero Freezer Pants",
    slug: "rain-freezer/below-zero-freezer-pants",
    spec: "Padded inner lining · elasticated waist · sizes S to 5XL",
    price: "R295.00",
    moq: "MOQ 5",
    colours: ["#22334a"],
    image: "https://vulcanworkwear.co.za/wp-content/uploads/2023/01/6-700x933.png",
    additionalInfo: [
      { label: "Outer shell", value: "Oxford nylon" },
      { label: "Lining", value: "Cotton inner" },
      { label: "Garment type", value: "Freezer trousers" },
      { label: "Sizes", value: "S – 4XL" },
      { label: "Colour", value: "Navy" },
      { label: "Production", value: "South Africa" },
      { label: "Approved by", value: "YKK · Proudly South African" },
    ],
  },
  // Apparel
  {
    id: "VICBAY-POLO-180",
    category: "Golfer",
    name: "Vicbay Polo Golf Shirt",
    slug: "apparel/golfers/vicbay-polo-180gsm",
    spec: "180gsm 100% cotton pique · rib-knit collar · 2-button tonal placket · double stitched sleeves and hem",
    price: "R125.00",
    moq: "MOQ 10",
    colours: ["#1a1a1a", "#ffffff", "#22334a", "#7a8c5a", "#c0392b", "#e8a020", "#4a90d9", "#d4c9b0"],
    image: "https://www.vicbay-gp.co.za/web/image/product.product/550/image_1024/%5B7BG31%5D%20Mens%20Polo%20%28Black%2C%20S%29?unique=9f092c2",
    images: [
      "https://www.vicbay-gp.co.za/web/image/product.product/550/image_1024/", // Black
      "https://www.vicbay-gp.co.za/web/image/product.product/556/image_1024/", // White
      "https://www.vicbay-gp.co.za/web/image/product.product/562/image_1024/", // Navy
      "https://www.vicbay-gp.co.za/web/image/product.product/568/image_1024/", // Grey
      "https://www.vicbay-gp.co.za/web/image/product.product/574/image_1024/", // Royal Blue
      "https://www.vicbay-gp.co.za/web/image/product.product/580/image_1024/", // Sky Blue
      "https://www.vicbay-gp.co.za/web/image/product.product/586/image_1024/", // Bottle Green
      "https://www.vicbay-gp.co.za/web/image/product.product/592/image_1024/", // Lime Green
      "https://www.vicbay-gp.co.za/web/image/product.product/598/image_1024/", // Khaki
      "https://www.vicbay-gp.co.za/web/image/product.product/604/image_1024/", // Pink
      "https://www.vicbay-gp.co.za/web/image/product.product/610/image_1024/", // Yellow
      "https://www.vicbay-gp.co.za/web/image/product.product/616/image_1024/", // Orange
      "https://www.vicbay-gp.co.za/web/image/product.product/622/image_1024/", // Red
      "https://www.vicbay-gp.co.za/web/image/product.image/836/image_1024/",   // Back
      "https://www.vicbay-gp.co.za/web/image/product.image/944/image_1024/",   // Back 2
    ],
    additionalInfo: [
      { label: "Fabric type", value: "100% cotton pique" },
      { label: "Weight", value: "180gsm" },
      { label: "Sizes", value: "S – 3XL" },
      { label: "Collar", value: "Rib-knit" },
      { label: "Placket", value: "2-button tonal" },
      { label: "Construction", value: "Double stitched sleeves and hem" },
      { label: "Production", value: "Southern Africa" },
    ],
  },
  {
    id: "VICBAY-HEAVY-TEE-180",
    category: "T-shirt",
    name: "Vicbay Heavyweight T-Shirt",
    slug: "apparel/t-shirts/vicbay-heavyweight-180gsm",
    spec: "180gsm 100% combed cotton · crew neck · neck ribbing · tubular knit · double stitched",
    price: "R95.00",
    moq: "MOQ 10",
    colours: ["#1a1a1a", "#ffffff", "#22334a", "#c0392b", "#4a90d9", "#1a6b3c", "#6b4b2a", "#7a8c5a"],
    image: "https://www.vicbay-gp.co.za/web/image/product.product/308/image_1024/%5B8BG31%5D%20Heavyweight%20T-shirt%20%28Black%2C%20S%29?unique=342b70e",
    images: [
      "https://www.vicbay-gp.co.za/web/image/product.product/308/image_1024/", // Black
      "https://www.vicbay-gp.co.za/web/image/product.product/316/image_1024/", // White
      "https://www.vicbay-gp.co.za/web/image/product.product/324/image_1024/", // Navy
      "https://www.vicbay-gp.co.za/web/image/product.product/332/image_1024/", // Sky Blue
      "https://www.vicbay-gp.co.za/web/image/product.product/340/image_1024/", // Purple
      "https://www.vicbay-gp.co.za/web/image/product.product/348/image_1024/", // Pink
      "https://www.vicbay-gp.co.za/web/image/product.product/356/image_1024/", // Brown
      "https://www.vicbay-gp.co.za/web/image/product.product/364/image_1024/", // Stone
      "https://www.vicbay-gp.co.za/web/image/product.image/354/image_1024/",   // Back
    ],
    additionalInfo: [
      { label: "Fabric type", value: "100% combed cotton" },
      { label: "Weight", value: "180gsm" },
      { label: "Sizes", value: "S – 6XL" },
      { label: "Neckline", value: "Crew neck with neck ribbing" },
      { label: "Construction", value: "Tubular knit · double stitched" },
      { label: "Production", value: "Southern Africa" },
    ],
  },
  {
    id: "VICBAY-PLATINUM-TEE-160",
    category: "T-shirt",
    name: "Vicbay Platinum T-Shirt",
    slug: "apparel/t-shirts/vicbay-platinum-160gsm",
    spec: "160gsm 100% ring spun cotton · crew neck · side seamed · shoulder tape · double stitched",
    price: "R83.75",
    moq: "MOQ 10",
    colours: ["#1a1a1a", "#ffffff", "#22334a", "#c0392b", "#4a90d9", "#1a6b3c", "#e8611a", "#9e9e9e"],
    image: "https://www.vicbay-gp.co.za/web/image/product.product/689/image_1024/%5B6BG31%5D%20Platinum%20T-shirt%20%28Black%2C%20S%29?unique=1ebc39c",
    images: [
      "https://www.vicbay-gp.co.za/web/image/product.product/689/image_1024/", // Black
      "https://www.vicbay-gp.co.za/web/image/product.product/695/image_1024/", // White
      "https://www.vicbay-gp.co.za/web/image/product.product/701/image_1024/", // Navy
      "https://www.vicbay-gp.co.za/web/image/product.product/707/image_1024/", // Grey
      "https://www.vicbay-gp.co.za/web/image/product.product/713/image_1024/", // Bottle Green
      "https://www.vicbay-gp.co.za/web/image/product.product/719/image_1024/", // Red
      "https://www.vicbay-gp.co.za/web/image/product.image/1438/image_1024/",  // Back
    ],
    additionalInfo: [
      { label: "Fabric type", value: "100% ring spun cotton" },
      { label: "Weight", value: "160gsm" },
      { label: "Sizes", value: "S – 3XL" },
      { label: "Neckline", value: "Crew neck" },
      { label: "Construction", value: "Side seamed · shoulder tape · double stitched" },
      { label: "Production", value: "Southern Africa" },
    ],
  },
];

export const heroWhatsappHref = whatsappHref(
  "Hi Tuff, I want to browse workwear for my crew. Please send current stock and pricing.",
);
