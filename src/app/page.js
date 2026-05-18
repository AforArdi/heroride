import Banner from "@/components/Home/Banner";
import Faq from "@/components/Home/Faq";
import PopularCars from "@/components/Home/PopularCars";

export default function Home() {
  return (
    <div>
      <Banner></Banner>
      <PopularCars></PopularCars>
      <Faq></Faq>
    </div>
  );
}
