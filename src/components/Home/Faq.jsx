import Image from "next/image";
import FaqAccordion from "../utils/FaqAccordion";

const Faq = () => {
    return ( 
        <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold mb-6 text-center">Frequently Asked Questions</h2>
            <p className="text-muted text-center">Use securing confined his shutters. Delightful as he it acceptance an solicitude discretion reasonably.<br /> Carriage we husbands advanced an perceive greatest.</p>
            <div className="flex items-center justify-center gap-2">
                <Image src={'https://i.postimg.cc/9MW7Q1hy/faq-section-car.png'}
                alt="red mini cooper" height={300} width={400}
                ></Image>
                <FaqAccordion></FaqAccordion>
            </div>
        </div>
     );
}
 
export default Faq;