import BookDemo from "@/components/book-demo/BookDemo";
import InnovativeFeatures from "@/components/home/innovativeFeatures/InnovativeFeatures";
import Testimonials from "@/components/our-experts/Testimonials";
import Hero from "@/components/product/Hero";
import SuccessStories from "@/components/product/SuccessStories";
import { loadData } from "@/lib/api";
import { ProductFeatures } from "@/types/api/pages/ProductFeatures";
import Head from "next/head";

const Product = ({ productData }: { productData: ProductFeatures }) => {
  return (
    <>
     <Head>
        <title> Products | Immerge Therapeutics</title>
        <meta property="og:title" content="Products | Immerge Therapeutics" />
        <meta name="description" content="Immerge Therapeutics" /> 
        
      </Head>
      <div className="">
        <section className="md:px-[116px] px-6  md:mb-[123px]">
          <Hero data={productData.hero} />
        </section>
        <section className="md:px-[116px] px-6 mb-[82px] md:mb-[90px]">
          <InnovativeFeatures data={productData.innovative_features} />
        </section>
        <section className="md:px-[116px] px-6">
          <SuccessStories
            data={productData.designed_for_every_physiotherapy_use_case}
          />
        </section>
        <section className="md:px-[116px] pl-6 mb-[72px]">
          <Testimonials data={productData.testimonials} />
        </section>
      </div>
      <section className="mb-[50px]">
        <BookDemo />
      </section>
    </>
  );
};

export default Product;

export async function getStaticProps() {
  try {
    const result = await loadData("product");
    const productData: ProductFeatures = result[0].acf;

    return {
      props: { productData },
    };
  } catch (error) {
    console.log(error, "error getting data from getstaticProps");
    return {
      props: { productData: null },
    };
  }
}
