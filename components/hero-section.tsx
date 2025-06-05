import Apple from "@/public/svg/apple";
import PlayStore from "@/public/svg/playStore";
import Image from "next/image";

export default function HeroSection() {
  return (
    <section id="hero" className="bg-gray-50 py-16 lg:py-24 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl lg:text-6xl font-bold">
                <span className="text-green-500">EASY</span>{" "}
                <span className="text-black">PARKING</span>
              </h1>
              <h2 className="text-3xl lg:text-5xl font-bold text-black">
                АВТО ЗОГСООЛ
              </h2>
              <p className="text-xl lg:text-2xl text-gray-600 font-medium">
                ХЭЗЭЭЧ ИЙМ АМАР БАЙСАНГҮЙ
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#"
                className="inline-flex items-center justify-center px-6 py-3 border-2 border-black dark:bg-gray-300 rounded-lg hover:bg-green-500 hover:text-white transition-colors"
              >
                <div className="flex items-center space-x-4 w-44 h-12 text-black hover:text-white">
                  <PlayStore />
                  <div className="text-left">
                    <div className="text-xs">GET IT ON</div>
                    <div className="text-lg font-semibold">Google Play</div>
                  </div>
                </div>
              </a>

              <a
                href="#"
                className="inline-flex items-center justify-center px-6 py-3 border-2 border-black bg-black  rounded-lg hover:bg-green-500 text-white  hover:text-black transition-colors"
              >
                <div className="flex items-center space-x-4 w-44 h-12">
                  <Apple />
                  <div className="text-left">
                    <div className="text-xs">Download on the</div>
                    <div className="text-lg font-semibold">App Store</div>
                  </div>
                </div>
              </a>
            </div>
          </div>

          <div className="relative">
            <div className="relative w-full h-96 lg:h-[500px] shadow-2xl rounded-2xl overflow-hidden">
              <Image
                src="/images/parking-map.png"
                alt="Parking lot aerial view"
                fill
                className="object-cover rounded-2xl"
                priority
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-white text-8xl lg:text-9xl font-bold opacity-80 select-none">
                  EP
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
