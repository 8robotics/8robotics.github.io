import { ShaderAnimation } from "@/components/ui/shader-lines";
import React from "react";
import Layout from '@/Layout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Calendar, ArrowRight, ExternalLink } from 'lucide-react';

interface NewsArticle {
  id: string;
  title: string;
  summary: string;
  date: string;
  category: string;
  featured: boolean;
  readTime: string;
  image?: string;
}

const News = () => {
  const articles: NewsArticle[] = [
    {
      id: '1',
      title: '8Robotics Officially Launches: Pioneering the Next Generation of Humanoid Robotics',
      summary: 'Today marks a pivotal moment in the robotics industry as 8Robotics officially announces its launch, bringing together world-class AI researchers and robotics engineers.',
      date: 'May 22, 2025',
      category: 'Company News',
      featured: true,
      readTime: '3 min read',
      image: '/logo.svg',
    },
    {
      id: '4',
      title: 'First Prototype Demonstration Scheduled for Q4 2025',
      summary: 'Get ready for the first public demonstration of our humanoid robot prototype, showcasing breakthrough capabilities in AI and robotics.',
      date: 'June 1, 2025',
      category: 'Company News',
      featured: true,
      readTime: '2 min read',
      image: '/secret_robot.png?auto=compress&cs=tinysrgb&w=800&h=400&fit=crop'
    },
  ];

  const featuredArticles = articles.filter(article => article.featured).slice(0, 2);
  const regularArticles = articles; // Show all articles, including featured

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'Technology':
        return 'bg-primary/10 text-primary hover:bg-primary/20';
      case 'Company News':
        return 'bg-blue-100 text-blue-600 font-bold hover:bg-blue-200';
      case 'Partnerships':
        return 'bg-green-100 text-green-600 font-bold hover:bg-green-200';
      case 'Media':
        return 'bg-purple-100 text-purple-700 hover:bg-purple-200';
      default:
        return 'bg-muted text-muted-foreground';
    }
  };

  return (
    <Layout>
      <div className="min-h-screen">
        {/* Hero Section */}
            <section className="py-20 bg-gradient-tech">
              <div className="container mx-auto px-4">
                <div className="relative flex h-[300px] md:h-[400px] w-full flex-col items-center justify-center overflow-hidden rounded-xl mb-8">
                  <ShaderAnimation colorScheme="green-blue" />
                  <span className="pointer-events-none z-10 text-center text-5xl md:text-7xl leading-none font-semibold tracking-tighter whitespace-pre-wrap text-white drop-shadow-lg">
                    Latest News
                  </span>
                </div>
                <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-center">
                  Stay updated with our latest developments, milestones, and insights 
                  in the world of humanoid robotics.
                </p>
              </div>
            </section>

        {/* Featured Articles (show two) */}
        {featuredArticles.length > 0 && (
          <section className="py-20">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto">
                <Badge className="mb-4 bg-accent/10 text-accent hover:bg-accent/20">
                  Featured Stories
                </Badge>
                <div className="grid md:grid-cols-2 gap-8">
                  {featuredArticles.map((article) => (
                    <Card key={article.id} className="overflow-hidden hover-lift bg-muted/30">
                      <div className="w-full aspect-[16/9] bg-white flex items-center justify-center overflow-hidden rounded-xl shadow-md">
                        {article.image && (
                          <img
                            src={article.image}
                            alt={article.title}
                            className="object-cover w-full h-full rounded-xl transition-transform duration-300 hover:scale-105"
                          />
                        )}
                      </div>
                      <div className="p-6">
                        <div className="flex items-center space-x-4 mb-4">
                          <Badge className={getCategoryColor(article.category)}>
                            {article.category}
                          </Badge>
                          <div className="flex items-center text-sm text-muted-foreground">
                            <Calendar className="w-4 h-4 mr-1" />
                            {formatDate(article.date)}
                          </div>
                        </div>
                        <h2 className="text-xl md:text-2xl font-bold mb-3">
                          {article.title}
                        </h2>
                        <p className="text-muted-foreground mb-4 leading-relaxed">
                          {article.summary}
                        </p>
                        <div className="flex items-center justify-between">
                          <span className="text-sm text-muted-foreground">
                            {article.readTime}
                          </span>
                          <Button className="bg-gradient-primary hover:shadow-glow">
                            Read Full Story
                            <ArrowRight className="ml-2 w-4 h-4" />
                          </Button>
                        </div>
                      </div>
                    </Card>
                  ))}
                </div>
              </div>
            </div>
          </section>
        )}

        {/* News List */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-12 text-center">Recent Updates</h2>
            <div className="space-y-6 max-w-3xl mx-auto">
              {regularArticles.map((article) => (
                <Card key={article.id} className="hover-lift group bg-white/80 border-0 shadow-md rounded-xl">
                  <CardHeader className="p-6 pb-0">
                    <div className="flex items-center gap-3 mb-2">
                      <Badge className={getCategoryColor(article.category) + ' text-xs px-3 py-1 rounded-full font-semibold'}>
                        {article.category}
                      </Badge>
                      <div className="flex items-center text-xs text-muted-foreground">
                        <Calendar className="w-4 h-4 mr-1" />
                        {formatDate(article.date)}
                      </div>
                    </div>
                    <CardTitle className="text-lg group-hover:text-primary transition-colors font-bold">
                      {article.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="p-6 pt-0">
                    <p className="text-muted-foreground mb-4 leading-relaxed">
                      {article.summary}
                    </p>
                    <div className="flex items-center justify-between">
                      <span className="text-xs text-muted-foreground">
                        {article.readTime}
                      </span>
                      <Button variant="ghost" size="sm" className="group-hover:text-primary font-semibold">
                        Read More
                        <ExternalLink className="ml-1 w-3 h-3" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Newsletter Signup - improved visibility */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <Card className="max-w-2xl mx-auto bg-gradient-tech border-0 shadow-xl">
              <CardContent className="p-8 text-center">
                <h3 className="text-2xl font-bold mb-4">Stay in the Loop</h3>
                <p className="text-muted-foreground mb-6">
                  Subscribe to our newsletter and never miss an update about our 
                  progress in humanoid robotics.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="flex-1 px-4 py-2 rounded-lg border border-border bg-background"
                  />
                  <Button className="bg-primary text-white font-bold py-3 px-8 rounded-xl shadow-lg hover:bg-orange-600 transition-colors">
                    Subscribe
                  </Button>
                </div>
                <p className="text-xs text-muted-foreground mt-4">
                  We respect your privacy. Unsubscribe at any time.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default News;
