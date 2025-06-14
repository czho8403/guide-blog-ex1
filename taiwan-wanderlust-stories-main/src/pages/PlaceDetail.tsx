
import { Helmet, HelmetProvider } from "react-helmet-async";
import { useParams, Link } from "react-router-dom";

const PLACES = [
  {
    id: 1,
    slug: "jiufen-old-street",
    name: "九份老街",
    description: "黃昏時分的老街總是讓人回味無窮",
    image: "https://images.unsplash.com/photo-1472396961693-142e6e269027?w=800&h=600&fit=crop",
    region: "新北",
    tags: ["#新北", "#老街", "#夜景"],
  },
  {
    id: 2,
    slug: "taroko-gorge",
    name: "太魯閣峽谷",
    description: "大自然鬼斧神工的壯麗景致",
    image: "https://images.unsplash.com/photo-1523712999610-f77fbcfc3843?w=800&h=600&fit=crop",
    region: "花蓮",
    tags: ["#花蓮", "#峽谷", "#健行"],
  },
  {
    id: 3,
    slug: "alishan-sunrise",
    name: "阿里山日出",
    description: "雲海之上的第一道曙光",
    image: "https://images.unsplash.com/photo-1500673922987-e212871fec22?w=800&h=600&fit=crop",
    region: "嘉義",
    tags: ["#嘉義", "#日出", "#森林"],
  },
  // ...可擴充更多地點
];

const PlaceDetail = () => {
  const { slug } = useParams();
  const place = PLACES.find((p) => p.slug === slug);

  if (!place) {
    return (
      <div className="container mx-auto px-4 py-20 text-center">
        <h1 className="text-2xl font-bold mb-4">找不到這個地點</h1>
        <Link to="/" className="text-primary underline">返回首頁</Link>
      </div>
    );
  }

  return (
    <HelmetProvider>
      {/* SEO Meta 與 Place Schema */}
      <Helmet>
        <title>{`${place.name} | 走踏台灣`}</title>
        <meta name="description" content={place.description} />
        <meta property="og:title" content={`${place.name} | 走踏台灣`} />
        <meta property="og:description" content={place.description} />
        <meta property="og:image" content={place.image} />
        <link rel="canonical" href={`/place/${place.slug}`} />
        {/* Place 結構化資料 */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Place",
            "name": place.name,
            "image": [place.image],
            "address": {
              "@type": "PostalAddress",
              "addressRegion": place.region,
              "addressCountry": "TW"
            },
            "description": place.description,
          })}
        </script>
      </Helmet>

      <main className="container mx-auto px-4 py-16 max-w-3xl">
        <article>
          <h1 className="text-4xl font-bold mb-4">{place.name}</h1>
          <img
            src={place.image}
            alt={`台灣景點「${place.name}」風景照片`}
            className="w-full max-h-96 object-cover rounded-lg shadow mb-6"
          />
          <p className="text-lg text-gray-700 mb-4">{place.description}</p>
          <div className="mb-6">
            <span className="font-medium text-gray-800 mr-2">標籤：</span>
            {place.tags.map((tag, i) => (
              <span key={i} className="inline-block mr-2 px-3 py-1 bg-primary/10 text-primary text-sm rounded-full">{tag}</span>
            ))}
          </div>
          <Link to="/" className="inline-block mt-4 text-primary underline">← 回到首頁</Link>
        </article>
      </main>
    </HelmetProvider>
  );
};

export default PlaceDetail;
