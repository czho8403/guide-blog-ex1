import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const LocalGuides = () => {
  const guides = [
    {
      id: 1,
      name: '小芸',
      avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=100&h=100&fit=crop&crop=face',
      specialty: '台北秘境探索',
      quote: '「每個巷弄都有屬於自己的故事」',
      recommendations: [
        { name: '象山步道', image: 'https://images.unsplash.com/photo-1426604966848-d7adac402bff?w=300&h=200&fit=crop' },
        { name: '四四南村', image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=300&h=200&fit=crop' }
      ]
    },
    {
      id: 2,
      name: '阿豪',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face',
      specialty: '花東縱谷達人',
      quote: '「山與海之間，藏著最美的台灣」',
      recommendations: [
        { name: '池上伯朗大道', image: 'https://images.unsplash.com/photo-1501854140801-50d01698950b?w=300&h=200&fit=crop' },
        { name: '三仙台', image: 'https://images.unsplash.com/photo-1523712999610-f77fbcfc3843?w=300&h=200&fit=crop' }
      ]
    },
    {
      id: 3,
      name: '美玲',
      avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face',
      specialty: '南台灣文化之旅',
      quote: '「用心感受，每個地方都有溫度」',
      recommendations: [
        { name: '安平古堡', image: 'https://images.unsplash.com/photo-1500673922987-e212871fec22?w=300&h=200&fit=crop' },
        { name: '旗津海岸', image: 'https://images.unsplash.com/photo-1472396961693-142e6e269027?w=300&h=200&fit=crop' }
      ]
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            這些地點，是他們走出來的故事 🌿
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            跟著在地嚮導的腳步，發現那些藏在地圖上沒有標註的美麗秘境
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
          {guides.map((guide) => (
            <Card key={guide.id} className="hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-6">
                <div className="text-center mb-6">
                  <img
                    src={guide.avatar}
                    alt={`嚮導 ${guide.name} 頭像`}
                    className="w-16 h-16 rounded-full mx-auto mb-3 object-cover"
                  />
                  <h3 className="text-xl font-semibold text-gray-900">{guide.name}</h3>
                  <p className="text-sm text-primary font-medium">{guide.specialty}</p>
                  <p className="text-gray-600 italic mt-2 text-sm">{guide.quote}</p>
                </div>

                <div className="space-y-3">
                  <h4 className="font-medium text-gray-900 text-sm">推薦地點：</h4>
                  {guide.recommendations.map((rec, index) => (
                    <div key={index} className="flex items-center space-x-3 p-2 rounded-lg hover:bg-gray-50 transition-colors cursor-pointer">
                      <img
                        src={rec.image}
                        alt={`嚮導 ${guide.name} 推薦地點 ${rec.name} 照片`}
                        className="w-12 h-12 object-cover rounded-lg"
                      />
                      <span className="text-sm font-medium text-gray-700">{rec.name}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary hover:text-white">
            你也想成為嚮導？一起投稿吧
          </Button>
        </div>
      </div>
    </section>
  );
};

export default LocalGuides;
