import { CategoryGrid } from "@/components/home/category-grid";
import { ContactBar } from "@/components/home/contact-bar";
import { FeaturedProducts } from "@/components/home/featured-products";
import { HomeHero } from "@/components/home/home-hero";
import { HowToOrder } from "@/components/home/how-to-order";
import { TrustStrip } from "@/components/home/trust-strip";
import { TuffBlock } from "@/components/home/tuff-block";
import { featuredProducts } from "@/lib/products";

export default function Home() {
  const featured = featuredProducts[0];

  return (
    <>
      <HomeHero />
      <TrustStrip />
      <TuffBlock
        eyebrow="Featured product"
        title={featured.name}
        subtitle="195gsm poly cotton. Triple stitched where it counts. 8 colours, sizes 30 to 56, all at R149."
        features={[
          "195gsm poly cotton for daily site wear",
          "Triple stitched back rise and inside leg",
          "Bar tacked at every stress point",
          "8 colours from size 30 to 56, one price",
        ]}
        price={featured.price}
        image={featured.image}
        product={featured}
        secondaryCta={{
          label: "View details",
          href: `/catalogue/${featured.slug}`,
        }}
      />
      <CategoryGrid />
      <FeaturedProducts />
      <HowToOrder />
      <ContactBar />
    </>
  );
}
