import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

const MapExploration = () => {
  const [activeFilter, setActiveFilter] = useState('全部');
  const filters = ['全部', '北部', '中部', '南部', '東部', '熱門', '秘境'];
  
  const mapLocations = [
    { id: 1, name: "九份老街", slug: "jiufen-old-street", region: "新北", image: "https://images.unsplash.com/photo-1426604966848-d7adac402bff?w=400&h=300&fit=crop", description: "黃昏時分的老街總是讓人回味無窮" },
    { id: 2, name: "太魯閣國家公園", slug: "taroko-gorge", region: "花蓮", image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=400&h=300&fit=crop", description: "壯闊峽谷與清澈溪流的絕美相遇" },
    { id: 3, name: "阿里山", slug: "alishan-sunrise", region: "嘉義", image: "https://images.unsplash.com/photo-1501854140801-50d01698950b?w=400&h=300&fit=crop", description: "日出雲海與千年神木的奇幻之旅" },
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            想去哪裡？點選地圖看看 🧭
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            透過互動地圖探索台灣各地的精彩景點，每個標記都有獨特的故事等你發現
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-2 mb-8">
          {filters.map((filter) => (
            <Button
              key={filter}
              variant={activeFilter === filter ? "default" : "outline"}
              size="sm"
              onClick={() => setActiveFilter(filter)}
              className={activeFilter === filter ? "bg-primary" : ""}
            >
              {filter}
            </Button>
          ))}
        </div>

        <div className="grid lg:grid-cols-2 gap-8 items-start">
          {/* Simulated Map */}
          <div className="relative">
            <div 
              className="w-full h-96 bg-cover bg-center rounded-lg shadow-lg relative overflow-hidden"
              style={{
                backgroundImage: 'url("https://images.unsplash.com/photo-1482938289607-e9573fc25ebb?w=800&h=600&fit=crop")',
              }}
            >
              <div className="absolute inset-0 bg-primary/20"></div>
              
              {/* Map Markers */}
              <div className="absolute top-1/4 left-1/3 w-4 h-4 bg-red-500 rounded-full border-2 border-white shadow-lg cursor-pointer hover:scale-110 transition-transform"></div>
              <div className="absolute top-2/3 right-1/4 w-4 h-4 bg-red-500 rounded-full border-2 border-white shadow-lg cursor-pointer hover:scale-110 transition-transform"></div>
              <div className="absolute bottom-1/4 left-1/2 w-4 h-4 bg-red-500 rounded-full border-2 border-white shadow-lg cursor-pointer hover:scale-110 transition-transform"></div>
              
              <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-2 rounded-lg">
                <p className="text-sm font-medium text-gray-700">點擊標記查看詳情</p>
              </div>
            </div>
          </div>

          {/* Location List */}
          <div className="space-y-4">
            {mapLocations.map((location) => (
              <a
                key={location.id}
                href={`/place/${location.slug}`}
                aria-label={`前往${location.name}地點詳情頁`}
              >
                <Card className="hover:shadow-lg transition-shadow duration-300 cursor-pointer">
                  <CardContent className="p-4">
                    <div className="flex items-center space-x-4">
                      <img
                        src={location.image}
                        alt={`台灣景點「${location.name}」地圖預覽圖`}
                        className="w-16 h-16 object-cover rounded-lg"
                      />
                      <div className="flex-1">
                        <h3 className="font-semibold text-gray-900">{location.name}</h3>
                        <p className="text-sm text-gray-600 mb-1">{location.description}</p>
                        <span className="inline-block px-2 py-1 bg-primary/10 text-primary text-xs rounded-full">
                          #{location.region}
                        </span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default MapExploration;
