import Image from "next/image";

export default function FeaturesSection() {
  return (
    <section id="about" className="py-16 lg:py-24 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto  px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-12 ">
            <div className="space-y-4">
              <h2 className="text-3xl lg:text-3xl font-bold text-green-500">
                БИДНИЙ ЗОРИЛГО
              </h2>
              <p className=" text-lg leading-relaxed">
                Нийтийн ээмшийн 50 байршил дахь төлбөртэй зогсоолын менежментийг
                сайжруулах
              </p>
            </div>
            <div className="space-y-4">
              <h3 className="text-2xl lg:text-3xl font-bold  text-green-500">
                БИДНИЙ ҮНЭТ ЗҮЙЛ
              </h3>
              <p className=" text-lg leading-relaxed">
                Улаанбаатар хотын оршин суугчид болон Улаанбаатар хотыг зорин
                ирсэн орон нутгийн иргэд, гадаадын иргэд гэх мэт зогсоолоор
                үйлчлүүлэгчид юм. Үйлчлүүлэгчдийн хэрэгцээ шаардлагыг бүрэн
                тодорхойлж, тэдгээрт нийцсэн үйлчилгээ санал болгож ажиллана.
              </p>
            </div>
            <div className="space-y-4">
              <h3 className="text-2xl lg:text-3xl font-bold text-green-500">
                БИДНИЙ УРИА
              </h3>
              <p className=" text-lg leading-relaxed">
                Хэзээч ийм амар байсангүй
              </p>
            </div>
          </div>
          <div className="relative">
            <div className="relative w-full h-96 lg:h-[600px]">
              <Image
                src="/images/Parking-spot.png"
                alt="3D parking illustration"
                fill
                className="object-cover rounded-2xl "
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
