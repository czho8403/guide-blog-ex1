
import { Card, CardContent } from '@/components/ui/card';

const BlogPreview = () => {
  const articles = [
    {
      id: 1,
      title: '走進九份的黃昏時刻：老街裡的光影故事',
      excerpt: '當夕陽西下，九份老街的紅燈籠一盞盞亮起，彷彿時光倒流回到那個純樸的年代。每一條石階路，都承載著不同的記憶與故事...',
      image: 'https://images.unsplash.com/photo-1426604966848-d7adac402bff?w=400&h=250&fit=crop',
      publishDate: '2024年12月10日',
      readTime: '5 分鐘閱讀'
    },
    {
      id: 2,
      title: '太魯閣峽谷探險記：與大自然的深度對話',
      excerpt: '站在燕子口的吊橋上，望著腳下湍急的立霧溪，才真正體會到大自然的壯闊與力量。這趟太魯閣之旅，不僅是視覺的震撼...',
      image: 'https://images.unsplash.com/photo-1523712999610-f77fbcfc3843?w=400&h=250&fit=crop',
      publishDate: '2024年12月8日',
      readTime: '7 分鐘閱讀'
    },
    {
      id: 3,
      title: '阿里山日出雲海：等待那道最美的光',
      excerpt: '凌晨三點的阿里山森林遊樂區，只有我們這群追日者在黑暗中前行。當第一道曙光穿透雲海，那份感動至今難忘...',
      image: 'https://images.unsplash.com/photo-1500673922987-e212871fec22?w=400&h=250&fit=crop',
      publishDate: '2024年12月5日',
      readTime: '6 分鐘閱讀'
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4" as="h2">
            故事，不只是風景的附註
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            每個旅程都值得被記錄，每張照片背後都有動人的故事等著被分享
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {articles.map((article) => (
            <article key={article.id}>
              <Card className="group hover:shadow-xl transition-all duration-300 cursor-pointer overflow-hidden">
                <div className="relative overflow-hidden">
                  <img
                    src={article.image}
                    alt={`部落格文章-${article.title} 封面圖`}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-2 py-1 rounded-full text-xs font-medium text-gray-700">
                    {article.readTime}
                  </div>
                </div>
                <CardContent className="p-6">
                  <div className="mb-3">
                    <span className="text-sm text-gray-500">{article.publishDate}</span>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-primary transition-colors line-clamp-2">
                    {article.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed line-clamp-3">
                    {article.excerpt}
                  </p>
                </CardContent>
              </Card>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogPreview;
