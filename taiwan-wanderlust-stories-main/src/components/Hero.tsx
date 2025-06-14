
import { Button } from '@/components/ui/button';
import { MapPin } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative min-h-[70vh] flex items-center justify-center bg-gradient-to-br from-primary/10 to-primary/5">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-20"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=1920&h=1080&fit=crop")',
          filter: 'blur(1px)'
        }}
      />
      
      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 animate-fade-in">
          發現台灣，<br className="md:hidden" />從一個地點開始
        </h1>
        <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-2xl mx-auto animate-fade-in">
          用照片與故事，記錄那些走過的地方與感動
        </p>
        
        <Button 
          size="lg" 
          className="bg-primary hover:bg-primary/90 text-white px-8 py-4 text-lg rounded-full shadow-lg hover:shadow-xl transition-all duration-300 animate-scale-in"
        >
          <MapPin className="w-5 h-5 mr-2" />
          以我目前位置探索附近地點
        </Button>
      </div>
    </section>
  );
};

export default Hero;
