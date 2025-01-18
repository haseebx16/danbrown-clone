'use client';
import Image from 'next/image';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import localFont from 'next/font/local';

function NextArrow(props) {
  const { onClick } = props;
  return (
    <button
      onClick={onClick}
      className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white/80 p-3 rounded-full shadow-lg hover:bg-white transition-all duration-200"
    >
      <FaChevronRight className="w-6 h-6 text-gray-800" />
    </button>
  );
}

function PrevArrow(props) {
  const { onClick } = props;
  return (
    <button
      onClick={onClick}
      className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white/80 p-3 rounded-full shadow-lg hover:bg-white transition-all duration-200"
    >
      <FaChevronLeft className="w-6 h-6 text-gray-800" />
    </button>
  );
}

const timesNewRoman = localFont({
    src: "./times.ttf",
    variable: "--font-times-new-roman",
    display: "swap",
  });

export default function Portfolio() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 1500,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  const books = [
    { id: 1, src: '/it-hd.png', title: "IT The Novel" },
    { id: 2, src: '/Carriee-min.png', title: "Carrie" },
    { id: 3, src: '/end.png', title: "End Of Watch" },
    { id: 4, src: '/green.png', title: "The Green Mile" },
    { id: 5, src: '/dallas.png', title: "Dallas '63" },
    { id: 6, src: '/crew.png', title: "Skeleton Crew" },
  ];

  return (
    <section className={`${timesNewRoman.className} py-20 bg-white`}>
      <div className="max-w-[1400px] mx-auto px-12">
        <h2 className="text-5xl  text-center md:mb-12 mt-16 md:mt-0 text-black font-bold">
          OUR PORTFOLIO<span className="text-red-700">.</span>
        </h2>
        
        <div className="relative px-8">
          <Slider {...settings}>
            {books.map((book) => (
              <div key={book.id} className="px-4">
                <div className="relative h-[500px] w-full group">
                  <Image
                    src={book.src}
                    alt={book.title}
                    fill
                    className="object-contain transition-transform duration-300 group-hover:scale-105"
                  />
                  {/* Overlay with title */}
                  <div className="absolute inset-0 bg-black/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center p-4 hidden md:flex">
                    <h3 className="text-white text-2xl font-oswald text-center">
                      {book.title}
                    </h3>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </section>
  );
}
