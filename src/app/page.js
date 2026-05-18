import Banner from "@/components/Home/Banner";
import Faq from "@/components/Home/Faq";
import PopularCars from "@/components/Home/PopularCars";
import Reviews from "@/components/Home/Reviews";

export default function Home() {
  return (
    <div>
      <Banner></Banner>
      <PopularCars></PopularCars>
      <Reviews></Reviews>
      <Faq></Faq>
    </div>
  );
}
