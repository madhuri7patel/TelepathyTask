import { Banner, CoffeeList, DiscoverBestCoffee, Feedback, Footer, GetChance, Header, Newsletter, WhyWeDifferent } from "@/components";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Header />
      <Banner />
      <DiscoverBestCoffee />
      <CoffeeList />
      <WhyWeDifferent />
      <GetChance />
      <Feedback />
      <Newsletter />
      <Footer />
    </>
  );
}
