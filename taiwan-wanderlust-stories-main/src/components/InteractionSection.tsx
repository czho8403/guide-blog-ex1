
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent } from '@/components/ui/card';

const InteractionSection = () => {
  const [comment, setComment] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (comment.trim()) {
      console.log('提交留言:', comment);
      setComment('');
      // 這裡可以添加實際的提交邏輯
    }
  };

  return (
    <section className="py-16 bg-primary/5">
      <div className="container mx-auto px-4">
        <Card className="max-w-2xl mx-auto">
          <CardContent className="p-8">
            <div className="text-center mb-6">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">
                你也有私藏景點嗎？歡迎留言分享 🌱
              </h2>
              <p className="text-gray-600">
                每個人心中都有一個特別的地方，分享你的發現，讓更多人感受台灣的美好
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <Textarea
                placeholder="分享你的私藏景點或旅行故事..."
                value={comment}
                onChange={(e) => setComment(e.target.value)}
                className="min-h-[120px] border-gray-200 focus:border-primary"
              />
              <div className="flex justify-end">
                <Button 
                  type="submit" 
                  className="bg-primary hover:bg-primary/90"
                  disabled={!comment.trim()}
                >
                  分享我的故事
                </Button>
              </div>
            </form>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default InteractionSection;
