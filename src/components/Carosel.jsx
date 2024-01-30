import { Carousel, Typography, Button } from "@material-tailwind/react";
import slide1 from "../assest/in-slideshow-image-3.png"
import slide2 from "../assest/in-slideshow-image-4.png"
 
export function CarouselWithContent() {
  return (
    <Carousel className="" autoplay={true} loop={true} transition={{ duration: 1 }} navigation={({ setActiveIndex, activeIndex, length }) => (
        <></>
      )}>
      <div className="relative h-[70vh] w-full">
        <img
          src={slide1}
          alt="image 1"
          className="h-full w-full object-cover"
        />
       <div className="absolute inset-0 grid h-full w-full items-center">
          <div className="w-3/4 pl-12 md:w-2/4 md:pl-20 lg:pl-32">
            <Typography
              variant="h1"
              color="white"
              className="mb-4 text-3xl md:text-4xl lg:text-5xl text-[#3f3453]"
            >
              Trade Stocks and Cryptos Seamlessly .
            </Typography>
            <Typography
              variant="lead"
              color="white"
              className="mb-12  text-gray-700"
            >
              Trade Cryptocurrencies, Stock Indices, Commodities and Forex from a single account

            </Typography>
            <div className="flex gap-2">
              <button className="py-[10px] px-[30px] bg-customOrange opacity-90 rounded-md text-white hover:opacity-100">
                Open account
              </button>
              <button className="py-[10px] px-[30px] border border-customOrange rounded-md text-customOrange bg-white hidden md:block">
                Login account
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="relative h-[70vh] w-full">
        <img
          src={slide2}
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 grid h-full w-full items-center">
          <div className="w-3/4 pl-12 md:w-2/4 md:pl-20 lg:pl-32">
            <Typography
              variant="h1"
              color="white"
              className="mb-4 text-3xl md:text-4xl lg:text-5xl text-[#3f3453]"
            >
             Trade Forex and commodities with financial thinking.

            </Typography>
            <Typography
              variant="lead"
              color="white"
              className="mb-12 text-gray-700"
            >
             Access 40,000+ instruments – across asset classes – to trade, hedge and invest from a single account.
            </Typography>
            <div className="flex gap-2">
              <button className="py-[10px] px-[30px] bg-customOrange opacity-90 rounded-md text-white hover:opacity-100 ">
                Open account
              </button>
              <button className="py-[10px] px-[30px] border border-customOrange rounded-md text-customOrange bg-white hidden md:block">
                Login account
              </button>
            </div>
          </div>
        </div>
      </div>
    </Carousel>
  );
}