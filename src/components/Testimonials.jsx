import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { useTranslation } from "react-i18next";

const Testimonials = () => {
    const { t } = useTranslation();

    const testimonials = [
        {
            name: "Dr. Sarah L., Assistant Professor",
            image: "/images/client-02.png",
            text: t("testimonials.t1"),
        },
        {
            name: "Dr. Ahmed K., Senior Researcher",
            image: "/images/client-05.png",
            text: t("testimonials.t2"),
        },
        {
            name: "Priya S., Ph.D. Student",
            image: "/images/client-03.png",
            text: t("testimonials.t3"),
        },
        {
            name: "Emily T., Ph.D. Candidate",
            image: "/images/client-06.png",
            text: t("testimonials.t4"),
        },
        {
            name: "Mark R., Research Scholar",
            image: "/images/client-02.png",
            text: t("testimonials.t5"),
        },
    ];

    return (
        <section className="bg-[#f6f6f6] py-28 border-b border-b-gray-200">
            <div className="text-center px-6 mb-10">
                <h1 className="text-3xl font-semibold">{t("testimonials.title")}</h1>
                <p className="max-w-xl mx-auto text-gray-600 mt-2">
                    {t("testimonials.subtitle")}
                </p>
            </div>

            <Swiper
                modules={[Autoplay, Pagination]}
                spaceBetween={20}
                loop={true}
                autoplay={{
                    delay: 3000,
                    disableOnInteraction: false,
                }}
                pagination={{ clickable: true }}
                breakpoints={{
                    320: { slidesPerView: 1 },
                    640: { slidesPerView: 2 },
                    1024: { slidesPerView: 4 },
                }}
                className="mySwiper3 px-6"
            >
                {testimonials.map((testimonial, index) => (
                    <SwiperSlide key={index} className={index % 2 !== 0 ? "mt-16" : ""}>
                        <div className="pt-14">
                            <div className="bg-white rounded-2xl shadow-[0_10px_25px_rgba(0,0,0,0.1)] relative pb-4 px-5 pr-[10px]">
                                <img
                                    src={testimonial.image}
                                    alt="Client"
                                    className="h-24 absolute -top-12 left-8 rounded-full"
                                />
                                <div className="pt-20">
                                    <p className="text-[13px] leading-5 h-[140px] text-gray-700">
                                        {testimonial.text}
                                    </p>
                                    <div className="mt-4 flex justify-between items-center">
                                        <h3 className="text-[20px] font-semibold">{testimonial.name}</h3>
                                        <img src="/images/stars.png" alt="Stars" className="h-4" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>

            <style>{`
  .swiper-pagination {
    margin-top: 3.5rem !important; /* Increased from 2.5rem */
    position: relative;
  }
`}</style>
        </section>
    );
};

export default Testimonials;
