
import { Card, CardContent } from '@/components/ui/card';
import { Link } from "react-router-dom";

const places = [
  {
    id: 1,
    slug: "jiufen-old-street",
    name: "九份老街",
    description: "黃昏時分的老街總是讓人回味無窮",
    image: "https://images.unsplash.com/photo-1472396961693-142e6e269027?w=400&h=300&fit=crop",
    tags: ["#新北", "#老街", "#夜景"],
  },
  {
    id: 2,
    slug: "taroko-gorge",
    name: "太魯閣峽谷",
    description: "大自然鬼斧神工的壯麗景致",
    image: "https://images.unsplash.com/photo-1523712999610-f77fbcfc3843?w=400&h=300&fit=crop",
    tags: ["#花蓮", "#峽谷", "#健行"],
  },
  {
    id: 3,
    slug: "alishan-sunrise",
    name: "阿里山日出",
    description: "雲海之上的第一道曙光",
    image: "https://images.unsplash.com/photo-1500673922987-e212871fec22?w=400&h=300&fit=crop",
    tags: ["#嘉義", "#日出", "#森林"],
  },
  {
    id: 4,
    slug: "kenting-national-park",
    name: "墾丁國家公園",
    description: "台灣最南端的熱帶風情",
    image: "https://images.unsplash.com/photo-1426604966848-d7adac402bff?w=400&h=300&fit=crop",
    tags: ["#屏東", "#海岸", "#度假"],
  },
  {
    id: 5,
    slug: "sun-moon-lake",
    name: "日月潭",
    description: "湖光山色中的寧靜時光",
    image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=400&h=300&fit=crop",
    tags: ["#南投", "#湖泊", "#划船"],
  },
  {
    id: 6,
    slug: "yehliu-geopark",
    name: "野柳地質公園",
    description: "奇岩怪石的地質奇觀",
    image: "https://images.unsplash.com/photo-1501854140801-50d01698950b?w=400&h=300&fit=crop",
    tags: ["#新北", "#地質", "#秘境"],
  }
];

const PlaceCards = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            精選地點推薦
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            每一個地點都有它獨特的故事，讓我們一起探索台灣的美麗角落
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {places.map((place) => (
            <Link to={`/place/${place.slug}`} key={place.id} aria-label={place.name}>
              <Card className="group hover:shadow-xl transition-all duration-300 cursor-pointer overflow-hidden">
                <div className="relative overflow-hidden">
                  <img
                    src={place.image}
                    alt={`台灣景點「${place.name}」主題圖片`}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-primary transition-colors">
                    {place.name}
                  </h3>
                  <p className="text-gray-600 mb-4 line-clamp-2">
                    {place.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {place.tags.map((tag, index) => (
                      <span
                        key={index}
                        className="inline-block px-3 py-1 bg-primary/10 text-primary text-sm rounded-full hover:bg-primary/20 transition-colors"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PlaceCards;
