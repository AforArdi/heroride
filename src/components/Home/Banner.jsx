'use client'
import { Button } from "@heroui/react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
// 2. IMPORT THE PAGINATION MODULE HERE (This is what's missing!)
import { Pagination, Autoplay } from "swiper/modules";

// 3. Make sure you also have the module's layout styles imported
import "swiper/css";
import "swiper/css/pagination";

const bannerCars = [
    { id: 1, name: 'Car 1', image: 'https://i.postimg.cc/nrtzS8bg/3.png' },
    { id: 2, name: 'Car 2', image: 'https://i.postimg.cc/Xq0J1MSt/4.png' },
    { id: 3, name: 'Car 3', image: 'https://i.postimg.cc/6qN3bsJD/7.png' },
]

const Banner = () => {
    return (
        <div className="max-w-7xl mx-auto flex items-center justify-between">
            <div className="space-y-6 w-full md:w-1/2">
                <h2 className="text-5xl font-bold">Find Affordable Dream <br /> Cars for Rental</h2>
                <p className="text-muted">Fulfil your automotive fantasies without breaking the bank. <br /> Check out our affordable car rentals for an opulent yet economical ride.</p>
                <Button>Explore Cars</Button>
            </div>
            <div className="w-full md:w-1/2 h-100 relative flex items-center justify-center">
                <div
                    className="absolute w-[320px] h-80 bg-[#f2e7d57a] bg-opacity-60 rounded-full top-1/2 right-40 -translate-y-1/2 pointer-events-none"
                />
                <Swiper
                    modules={[Pagination, Autoplay]}
                    spaceBetween={30}
                    slidesPerView={1}
                    pagination={{ clickable: true }}
                    navigation
                    autoplay={{
                        delay: 2000,
                        disableOnInteraction: false,
                    }}
                    className="w-full h-full pb-10" // Adding bottom padding so dots don't cover the image
                >
                    {bannerCars.map((car) => (
                        <SwiperSlide key={car.id} className="flex items-center justify-center">
                            <div className="relative w-full h-70">
                                <Image
                                    src={car.image}
                                    alt={car.name}
                                    width={500}
                                    height={400}
                                    className="object-contain"
                                    priority
                                    unoptimized // Useful if postimg.cc hotlinking acts up during development
                                />
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </div>
    );
}

export default Banner;