
import { MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Header = () => {
  const navItems = ['最新分享', '探索地圖', '在地嚮導', '關於本站'];

  return (
    <header className="bg-white/95 backdrop-blur-sm border-b border-gray-100 sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <MapPin className="h-8 w-8 text-primary" />
            <h1 className="text-2xl font-bold text-gray-900">走踏台灣</h1>
          </div>

          {/* Navigation - Desktop */}
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <a
                key={item}
                href="#"
                className="text-gray-600 hover:text-primary transition-colors duration-200"
              >
                {item}
              </a>
            ))}
          </nav>

          {/* Mobile Menu Toggle */}
          <Button
            variant="outline"
            size="sm"
            className="md:hidden"
          >
            選單
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
