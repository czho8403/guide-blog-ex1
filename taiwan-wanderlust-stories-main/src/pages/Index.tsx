import Header from '@/components/Header';
import Hero from '@/components/Hero';
import MapExploration from '@/components/MapExploration';
import PlaceCards from '@/components/PlaceCards';
import LocalGuides from '@/components/LocalGuides';
import BlogPreview from '@/components/BlogPreview';
import InteractionSection from '@/components/InteractionSection';
import Footer from '@/components/Footer';
import { Helmet, HelmetProvider } from "react-helmet-async";

const Index = () => {
  return (
    <HelmetProvider>
      <Helmet>
        <title>走踏台灣：在地人帶你看風景</title>
        <meta name="description" content="發現台灣，從一個地點開始。用照片與故事，記錄那些走過的地方與感動。" />
        {/* BlogPage 結構化資料 */}
        <script type="application/ld+json">{`
          {
            "@context": "https://schema.org",
            "@type": "Blog",
            "name": "走踏台灣",
            "description": "發現台灣，從一個地點開始。用照片與故事，記錄那些走過的地方與感動。"
          }
        `}</script>
      </Helmet>
      <div className="min-h-screen bg-white">
        <Header />
        <Hero />
        <MapExploration />
        <PlaceCards />
        <LocalGuides />
        <BlogPreview />
        <InteractionSection />
        <Footer />
      </div>
    </HelmetProvider>
  );
};

export default Index;
