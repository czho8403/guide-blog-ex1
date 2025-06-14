
import { MapPin, Instagram, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo & Description */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <MapPin className="h-6 w-6 text-primary" />
              <h3 className="text-xl font-bold">走踏台灣</h3>
            </div>
            <p className="text-gray-400 mb-6 max-w-md">
              用照片與故事，記錄那些走過的地方與感動。
              每一個地點都有它獨特的故事，讓我們一起探索台灣的美麗角落。
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-primary transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-primary transition-colors">
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">快速連結</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-primary transition-colors">最新分享</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">探索地圖</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">在地嚮導</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">關於本站</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold mb-4">聯絡我們</h4>
            <div className="space-y-2 text-gray-400">
              <p>Email: hello@walking-taiwan.com</p>
              <p>合作提案歡迎來信</p>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>© 2024 走踏台灣. 本網站由 LOVABLE 建構，所有資料來自用戶真實分享</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
