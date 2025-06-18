import React from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';
import { useTranslation } from 'react-i18next';

export function EmblaCarousel() {
  const [emblaRef] = useEmblaCarousel({ loop: false }, [Autoplay()]);
  const { t } = useTranslation();

  const slides = [
    '/images/banner1.png',
    '/images/banner2.png',
    '/images/banner3.png',
  ];

  return (
    <div className="embla" ref={emblaRef}>
      <div className="embla__container mt-[90px]">
        {slides.map((image, index) => (
          <div className="embla__slide" key={index}>
            <div className="relative w-full h-[80vh] bg-black text-white">
              {/* Background Image */}
              <img
                src={image}
                alt={`Slide ${index + 1}`}
                className="w-full h-full object-cover"
              />

              {/* Black Overlay */}
              <div className="absolute inset-0 bg-black bg-opacity-80"></div>

              {/* Text Content */}
              <div className="absolute inset-0 flex flex-col justify-center items-center text-center px-4">
                <h1 className="text-4xl md:text-6xl font-extrabold leading-tight uppercase">
                  {t('carousel.title1')} <br />
                  <span className="text-[#5b8b8b]">{t('carousel.title2')}</span>
                </h1>
                <p className="mt-6 max-w-3xl text-lg md:text-xl">
                  {t('carousel.subtitle1')} <br />
                  {t('carousel.subtitle2')}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
