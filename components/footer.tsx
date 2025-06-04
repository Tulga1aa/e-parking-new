import Link from "next/link"

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-green-500 rounded flex items-center justify-center">
                <span className="text-white font-bold text-lg">EP</span>
              </div>
              <div>
                <div className="text-green-500 font-bold">EASY</div>
                <div className="text-white font-bold -mt-1">PARKING</div>
              </div>
            </div>
            <p className="text-gray-400 text-sm">Улаанбаатар хотын авто зогсоолын шилдэг шийдэл</p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Холбоосууд</h3>
            <div className="space-y-2">
              <Link href="#" className="block text-gray-400 hover:text-white text-sm">
                Нүүр хуудас
              </Link>
              <Link href="#" className="block text-gray-400 hover:text-white text-sm">
                Бидний тухай
              </Link>
              <Link href="#" className="block text-gray-400 hover:text-white text-sm">
                Байршилууд
              </Link>
              <Link href="#" className="block text-gray-400 hover:text-white text-sm">
                Холбоо барих
              </Link>
            </div>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Холбоо барих</h3>
            <div className="space-y-2 text-sm text-gray-400">
              <p>И-мэйл: info@easyparking.mn</p>
              <p>Утас: +976 7777-7777</p>
              <p>Хаяг: Улаанбаатар хот</p>
            </div>
          </div>

          {/* Download */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Аппликейшн татах</h3>
            <div className="space-y-2">
              <a href="#" className="block">
                <div className="bg-gray-800 rounded-lg p-2 hover:bg-gray-700 transition-colors">
                  <div className="text-xs text-gray-400">GET IT ON</div>
                  <div className="text-sm font-semibold">Google Play</div>
                </div>
              </a>
              <a href="#" className="block">
                <div className="bg-gray-800 rounded-lg p-2 hover:bg-gray-700 transition-colors">
                  <div className="text-xs text-gray-400">Download on the</div>
                  <div className="text-sm font-semibold">App Store</div>
                </div>
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400 text-sm">© 2024 Easy Parking. Бүх эрх хуулиар хамгаалагдсан.</p>
        </div>
      </div>
    </footer>
  )
}
