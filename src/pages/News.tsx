import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Calendar, ArrowRight, Rocket, Brain, Users, Zap, Filter, Search } from 'lucide-react';

interface NewsArticle {
  id: string;
  title: string;
  excerpt: string;
  date: string;
  category: 'launch' | 'technology' | 'partnership' | 'research';
  featured: boolean;
  image: string;
  content?: string;
}

const News: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchTerm, setSearchTerm] = useState('');

  const newsArticles: NewsArticle[] = [
    {
      id: '1',
      title: '8Robotics Officially Launches: Pioneering the Next Generation of Humanoid Robotics',
      excerpt: 'Today marks a pivotal moment in the robotics industry as 8Robotics officially announces its launch, bringing together world-class AI researchers and robotics engineers.',
      date: 'January 15, 2025',
      category: 'launch',
      featured: true,
      image: 'https://images.pexels.com/photos/8566526/pexels-photo-8566526.jpeg?auto=compress&cs=tinysrgb&w=800&h=400&fit=crop',
      content: `Today marks a pivotal moment in the robotics industry as 8Robotics officially announces its launch, bringing together world-class AI researchers, robotics engineers, and visionary leaders to revolutionize humanoid robotics technology.

Founded by a team of industry veterans with decades of combined experience in artificial intelligence and robotics, 8Robotics is positioned to address the growing demand for intelligent, human-like robots across healthcare, education, logistics, and personal assistance sectors.

"We're not just building robots; we're creating intelligent partners that will seamlessly integrate into human society," said the founding team. "Our vision extends beyond automation to true collaboration between humans and humanoid robots."

The company's initial focus will be on developing advanced AI-driven control systems, natural language processing capabilities, and sophisticated sensor integration that enables humanoid robots to understand and respond to complex human environments with unprecedented accuracy and empathy.`
    },
    {
      id: '2',
      title: 'Breakthrough in Neural Network Architecture for Humanoid Motion Control',
      excerpt: 'Our research team has developed a revolutionary neural network architecture that enables more natural and fluid movement in humanoid robots.',
      date: 'Coming Soon',
      category: 'technology',
      featured: false,
      image: 'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=800&h=400&fit=crop'
    },
    {
      id: '3',
      title: 'Strategic Partnership with Leading Healthcare Institutions',
      excerpt: 'Announcing partnerships with top medical centers to deploy humanoid robots in patient care and medical assistance applications.',
      date: 'Coming Soon',
      category: 'partnership',
      featured: false,
      image: 'https://images.pexels.com/photos/8386434/pexels-photo-8386434.jpeg?auto=compress&cs=tinysrgb&w=800&h=400&fit=crop'
    },
    {
      id: '4',
      title: 'First Prototype Demonstration Scheduled for Q3 2025',
      excerpt: 'Get ready for the first public demonstration of our humanoid robot prototype, showcasing breakthrough capabilities in AI and robotics.',
      date: 'Coming Soon',
      category: 'research',
      featured: false,
      image: 'https://images.pexels.com/photos/8566473/pexels-photo-8566473.jpeg?auto=compress&cs=tinysrgb&w=800&h=400&fit=crop'
    },
    {
      id: '5',
      title: 'Advanced AI Vision System Enables Real-Time Object Recognition',
      excerpt: 'Our latest computer vision breakthrough allows humanoid robots to identify and interact with objects in complex environments with 99.7% accuracy.',
      date: 'Coming Soon',
      category: 'technology',
      featured: false,
      image: 'https://images.pexels.com/photos/8386422/pexels-photo-8386422.jpeg?auto=compress&cs=tinysrgb&w=800&h=400&fit=crop'
    },
    {
      id: '6',
      title: 'Educational Robotics Initiative Launches in Partnership with Universities',
      excerpt: 'Collaborating with top universities to integrate humanoid robots into STEM education programs, revolutionizing how students learn about technology.',
      date: 'Coming Soon',
      category: 'partnership',
      featured: false,
      image: 'https://images.pexels.com/photos/8386427/pexels-photo-8386427.jpeg?auto=compress&cs=tinysrgb&w=800&h=400&fit=crop'
    }
  ];

  const categories = [
    { id: 'all', name: 'All News', icon: Filter },
    { id: 'launch', name: 'Company', icon: Rocket },
    { id: 'technology', name: 'Technology', icon: Brain },
    { id: 'partnership', name: 'Partnerships', icon: Users },
    { id: 'research', name: 'Research', icon: Zap }
  ];

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'launch': return Rocket;
      case 'technology': return Brain;
      case 'partnership': return Users;
      case 'research': return Zap;
      default: return Filter;
    }
  };

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'launch': return 'from-cyan-400/20 to-blue-500/20 border-cyan-400/30';
      case 'technology': return 'from-purple-400/20 to-pink-500/20 border-purple-400/30';
      case 'partnership': return 'from-green-400/20 to-emerald-500/20 border-green-400/30';
      case 'research': return 'from-orange-400/20 to-red-500/20 border-orange-400/30';
      default: return 'from-gray-400/20 to-gray-500/20 border-gray-400/30';
    }
  };

  const filteredArticles = newsArticles.filter(article => {
    const matchesCategory = selectedCategory === 'all' || article.category === selectedCategory;
    const matchesSearch = article.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         article.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const featuredArticle = newsArticles.find(article => article.featured);
  const regularArticles = filteredArticles.filter(article => !article.featured);

  return (
    <div className="py-20 bg-gray-900 min-h-screen relative overflow-hidden">
      {/* Page Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-cyan-400/30 to-transparent"></div>
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-cyan-400/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-1/3 -left-40 w-80 h-80 bg-blue-500/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute -bottom-40 right-1/4 w-64 h-64 bg-purple-500/3 rounded-full blur-3xl animate-pulse delay-2000"></div>
        
        {/* Floating Elements */}
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-cyan-400/30 rounded-full animate-pulse"></div>
        <div className="absolute top-2/3 right-1/3 w-1 h-1 bg-blue-400/40 rounded-full animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/3 w-1.5 h-1.5 bg-cyan-300/20 rounded-full animate-pulse delay-2000"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-block mb-4">
            <div className="bg-cyan-400/10 backdrop-blur-sm border border-cyan-400/20 rounded-full px-4 py-2">
              <span className="text-cyan-400 text-xs font-medium uppercase tracking-wider">
                News & Updates
              </span>
            </div>
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6">
            Latest News & Updates
          </h1>
          <p className="text-lg sm:text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            Stay informed about our latest breakthroughs, partnerships, and innovations in humanoid robotics.
          </p>
        </div>

        {/* Search and Filter */}
        <div className="mb-12">
          <div className="flex flex-col lg:flex-row gap-6 items-center justify-between">
            {/* Search Bar */}
            <div className="relative w-full lg:w-96">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search news..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-transparent transition-all duration-300"
              />
            </div>

            {/* Category Filter */}
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => {
                const IconComponent = category.icon;
                return (
                  <button
                    key={category.id}
                    onClick={() => setSelectedCategory(category.id)}
                    className={`flex items-center space-x-2 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 backdrop-blur-sm ${
                      selectedCategory === category.id
                        ? 'bg-cyan-400 text-gray-900'
                        : 'bg-gray-800/50 border border-gray-700/50 text-gray-300 hover:bg-gray-700/50 hover:text-cyan-400 hover:border-cyan-400/30'
                    }`}
                  >
                    <IconComponent className="h-4 w-4" />
                    <span>{category.name}</span>
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {/* Featured Article */}
        {featuredArticle && (selectedCategory === 'all' || selectedCategory === featuredArticle.category) && (
          <div className="mb-16">
            <Link to={`/news/${featuredArticle.id}`}>
              <div className={`bg-gradient-to-r ${getCategoryColor(featuredArticle.category)} backdrop-blur-sm rounded-2xl overflow-hidden border hover:scale-[1.02] transition-all duration-300 cursor-pointer relative`}>
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/5 to-blue-500/5"></div>
                <div className="grid lg:grid-cols-2 gap-8 relative z-10">
                  <div className="relative h-64 lg:h-full">
                    <img
                      src={featuredArticle.image}
                      alt={featuredArticle.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent"></div>
                  </div>
                  <div className="p-8 md:p-12">
                    <div className="flex items-center mb-6">
                      {React.createElement(getCategoryIcon(featuredArticle.category), {
                        className: "h-8 w-8 text-cyan-400 mr-3"
                      })}
                      <div>
                        <div className="flex items-center mb-2">
                          <Calendar className="h-5 w-5 text-cyan-400 mr-2" />
                          <span className="text-cyan-400 text-sm font-medium">{featuredArticle.date}</span>
                        </div>
                        <span className="bg-cyan-400/20 text-cyan-400 px-3 py-1 rounded-full text-xs font-medium uppercase">
                          Featured • {featuredArticle.category}
                        </span>
                      </div>
                    </div>
                    <h2 className="text-2xl sm:text-3xl font-bold text-white mb-6">
                      {featuredArticle.title}
                    </h2>
                    <p className="text-gray-300 mb-6 leading-relaxed">
                      {featuredArticle.excerpt}
                    </p>
                    <div className="flex items-center text-cyan-400 font-medium hover:text-cyan-300 transition-colors duration-300">
                      <span>Read Full Article</span>
                      <ArrowRight className="h-4 w-4 ml-1" />
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          </div>
        )}

        {/* News Grid */}
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {regularArticles.map((article) => {
            const IconComponent = getCategoryIcon(article.category);
            return (
              <Link key={article.id} to={`/news/${article.id}`}>
                <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-xl overflow-hidden hover:border-cyan-400/30 transition-all duration-500 group hover:transform hover:scale-105 cursor-pointer relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="relative z-10">
                    <div className="relative h-48 overflow-hidden">
                      <img
                        src={article.image}
                        alt={article.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent"></div>
                      <div className="absolute top-4 left-4">
                        <span className="bg-cyan-400/90 text-gray-900 px-3 py-1 rounded-full text-xs font-medium uppercase">
                          {article.category}
                        </span>
                      </div>
                    </div>
                    <div className="p-6">
                      <div className="flex items-center mb-4">
                        <IconComponent className="h-5 w-5 text-cyan-400 mr-2" />
                        <div className="flex items-center">
                          <Calendar className="h-4 w-4 text-cyan-400 mr-2" />
                          <span className="text-gray-300 text-sm">{article.date}</span>
                        </div>
                      </div>
                      <h3 className="text-xl font-semibold text-white mb-4 group-hover:text-cyan-400 transition-colors duration-300 line-clamp-2">
                        {article.title}
                      </h3>
                      <p className="text-gray-300 mb-6 leading-relaxed line-clamp-3">
                        {article.excerpt}
                      </p>
                      <div className="flex items-center text-cyan-400 text-sm font-medium">
                        <span>Read More</span>
                        <ArrowRight className="h-4 w-4 ml-1 group-hover:translate-x-1 transition-transform duration-300" />
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>

        {/* No Results */}
        {filteredArticles.length === 0 && (
          <div className="text-center py-16">
            <Search className="h-16 w-16 text-gray-600 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-gray-400 mb-2">No articles found</h3>
            <p className="text-gray-500">Try adjusting your search or filter criteria</p>
          </div>
        )}

        {/* Industry Insights */}
        <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-8 md:p-12 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/5 to-blue-500/5"></div>
          <div className="relative z-10">
            <div className="text-center mb-8">
              <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">
                Industry Insights
              </h2>
              <p className="text-lg text-gray-300 max-w-2xl mx-auto">
                Explore the latest trends and developments in humanoid robotics and AI technology.
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-gray-900/50 backdrop-blur-sm border border-gray-700/50 rounded-xl p-6 hover:border-cyan-400/30 transition-all duration-300 group">
                <div className="bg-cyan-400/10 w-12 h-12 rounded-full flex items-center justify-center mb-4 group-hover:bg-cyan-400/20 transition-colors duration-300">
                  <Brain className="h-6 w-6 text-cyan-400" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">AI Advancements</h3>
                <p className="text-gray-300 text-sm">
                  Latest breakthroughs in machine learning and neural networks for robotics.
                </p>
              </div>
              <div className="bg-gray-900/50 backdrop-blur-sm border border-gray-700/50 rounded-xl p-6 hover:border-cyan-400/30 transition-all duration-300 group">
                <div className="bg-cyan-400/10 w-12 h-12 rounded-full flex items-center justify-center mb-4 group-hover:bg-cyan-400/20 transition-colors duration-300">
                  <Users className="h-6 w-6 text-cyan-400" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">Market Trends</h3>
                <p className="text-gray-300 text-sm">
                  Industry analysis and market predictions for humanoid robotics adoption.
                </p>
              </div>
              <div className="bg-gray-900/50 backdrop-blur-sm border border-gray-700/50 rounded-xl p-6 hover:border-cyan-400/30 transition-all duration-300 group">
                <div className="bg-cyan-400/10 w-12 h-12 rounded-full flex items-center justify-center mb-4 group-hover:bg-cyan-400/20 transition-colors duration-300">
                  <Zap className="h-6 w-6 text-cyan-400" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">Innovation Hub</h3>
                <p className="text-gray-300 text-sm">
                  Research collaborations and technological partnerships shaping the future.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default News;