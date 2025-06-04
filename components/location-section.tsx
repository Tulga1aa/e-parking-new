import Image from "next/image";
import { MapPin } from "lucide-react";
import LocationMap from "./LocationMap";

export default function LocationSection() {
  return (
    <section id="locations" className="py-16 lg:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-8">
          {/* Section Header */}
          <div className="flex items-center space-x-4">
            <h2 className="text-3xl lg:text-4xl font-bold text-black">
              LOCATION
            </h2>
            <div className="relative">
              <MapPin className="w-8 h-8 text-red-500" />
              <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-6 h-2 bg-yellow-400 rounded-full opacity-80"></div>
            </div>
          </div>

          {/* Map Container */}
          <div className="relative w-full h-96 lg:h-[500px] rounded-2xl overflow-hidden shadow-lg">
            <LocationMap />
            {/* Map Overlay Info */}
            <div className="absolute top-4 left-4 bg-white rounded-lg shadow-md p-4 max-w-xs">
              <div className="text-sm font-semibold text-gray-800">
                CHD - 11 khoroo
              </div>
              <div className="text-xs text-gray-600">Ulaanbaatar - 15120</div>
            </div>
          </div>

          {/* Location Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
            <div className="bg-white rounded-lg p-6 shadow-md text-center">
              <div className="text-3xl font-bold text-green-500 mb-2">50+</div>
              <div className="text-gray-600">Байршил</div>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-md text-center">
              <div className="text-3xl font-bold text-green-500 mb-2">24/7</div>
              <div className="text-gray-600">Үйлчилгээ</div>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-md text-center">
              <div className="text-3xl font-bold text-green-500 mb-2">
                1000+
              </div>
              <div className="text-gray-600">Зогсоолын орон</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
