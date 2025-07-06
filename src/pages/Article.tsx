import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { Calendar, ArrowLeft, Share2, Bookmark, User, Clock } from 'lucide-react';

interface ArticleData {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  date: string;
  readTime: string;
  author: string;
  category: string;
  image: string;
  tags: string[];
}

const Article: React.FC = () => {
  const { id } = useParams<{ id: string }>();

  // This would typically come from an API or database
  const articleData: ArticleData = {
    id: '1',
    title: '8Robotics Officially Launches: Pioneering the Next Generation of Humanoid Robotics',
    excerpt: 'Today marks a pivotal moment in the robotics industry as 8Robotics officially announces its launch, bringing together world-class AI researchers and robotics engineers.',
    content: `Today marks a pivotal moment in the robotics industry as 8Robotics officially announces its launch, bringing together world-class AI researchers, robotics engineers, and visionary leaders to revolutionize humanoid robotics technology.

Founded by a team of industry veterans with decades of combined experience in artificial intelligence and robotics, 8Robotics is positioned to address the growing demand for intelligent, human-like robots across healthcare, education, logistics, and personal assistance sectors.

## Our Vision for the Future

"We're not just building robots; we're creating intelligent partners that will seamlessly integrate into human society," said the founding team. "Our vision extends beyond automation to true collaboration between humans and humanoid robots."

The company's initial focus will be on developing advanced AI-driven control systems, natural language processing capabilities, and sophisticated sensor integration that enables humanoid robots to understand and respond to complex human environments with unprecedented accuracy and empathy.

## Revolutionary Technology Stack

8Robotics is developing a comprehensive technology stack that includes:

### Advanced Neural Networks
Our proprietary neural network architecture enables real-time decision making and adaptive learning, allowing our robots to improve their performance through continuous interaction with their environment.

### Natural Language Processing
State-of-the-art NLP capabilities enable our robots to understand and respond to human communication in natural, contextually appropriate ways.

### Computer Vision Systems
Advanced computer vision technology allows our robots to perceive and interpret their surroundings with human-like accuracy and understanding.

### Sensor Integration
Sophisticated sensor arrays provide our robots with enhanced spatial awareness and the ability to interact safely and effectively with humans and objects in their environment.

## Industry Applications

The potential applications for 8Robotics' humanoid robots span multiple industries:

**Healthcare**: Assisting medical professionals with patient care, medication management, and routine tasks, allowing healthcare workers to focus on critical patient needs.

**Education**: Serving as interactive teaching assistants and tutors, providing personalized learning experiences for students of all ages.

**Logistics**: Streamlining warehouse operations and delivery services with intelligent, adaptable robotic workers.

**Personal Assistance**: Providing companionship and support for elderly individuals and those with mobility challenges.

## Looking Ahead

As we embark on this exciting journey, 8Robotics is committed to responsible innovation that prioritizes human welfare and ethical considerations. We believe that the future of robotics lies not in replacing human workers, but in augmenting human capabilities and creating new opportunities for collaboration between humans and machines.

Our team is already working on the first prototype demonstrations, scheduled for Q4 2025, which will showcase the breakthrough capabilities we've been developing. We're also actively seeking partnerships with leading institutions and organizations that share our vision for a future where humanoid robots enhance human potential.

The launch of 8Robotics represents more than just a new company entering the market – it's the beginning of a new era in human-robot collaboration that will transform how we work, learn, and live.`,
    date: 'January 15, 2025',
    readTime: '8 min read',
    author: '8Robotics Team',
    category: 'Company Launch',
    image: '/pexels-photo-8386434.jpeg?auto=compress&cs=tinysrgb&w=1200&h=600&fit=crop',
    tags: ['Launch', 'AI', 'Robotics', 'Innovation', 'Technology']
  };

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
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Back Navigation */}
        <div className="mb-8">
          <Link
            to="/news"
            className="inline-flex items-center space-x-2 text-cyan-400 hover:text-cyan-300 transition-colors duration-300 bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-lg px-4 py-2 hover:border-cyan-400/30"
          >
            <ArrowLeft className="h-5 w-5" />
            <span>Back to News</span>
          </Link>
        </div>

        {/* Article Header */}
        <div className="mb-12">
          <div className="mb-6">
            <span className="bg-cyan-400/20 backdrop-blur-sm text-cyan-400 px-4 py-2 rounded-full text-sm font-medium uppercase border border-cyan-400/30">
              {articleData.category}
            </span>
          </div>
          
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
            {articleData.title}
          </h1>
          
          <p className="text-xl text-gray-300 mb-8 leading-relaxed">
            {articleData.excerpt}
          </p>

          {/* Article Meta */}
          <div className="flex flex-wrap items-center gap-6 text-gray-400 text-sm mb-8">
            <div className="flex items-center space-x-2">
              <User className="h-4 w-4" />
              <span>{articleData.author}</span>
            </div>
            <div className="flex items-center space-x-2">
              <Calendar className="h-4 w-4" />
              <span>{articleData.date}</span>
            </div>
            <div className="flex items-center space-x-2">
              <Clock className="h-4 w-4" />
              <span>{articleData.readTime}</span>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex items-center space-x-4 mb-8">
            <button className="flex items-center space-x-2 bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 hover:bg-gray-700/50 text-gray-300 hover:text-cyan-400 hover:border-cyan-400/30 px-4 py-2 rounded-lg transition-all duration-300">
              <Share2 className="h-4 w-4" />
              <span>Share</span>
            </button>
            <button className="flex items-center space-x-2 bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 hover:bg-gray-700/50 text-gray-300 hover:text-cyan-400 hover:border-cyan-400/30 px-4 py-2 rounded-lg transition-all duration-300">
              <Bookmark className="h-4 w-4" />
              <span>Save</span>
            </button>
          </div>
        </div>

        {/* Featured Image */}
        <div className="mb-12">
          <div className="relative h-64 md:h-96 rounded-2xl overflow-hidden border border-gray-700/50">
            <img
              src={articleData.image}
              alt={articleData.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-gray-900/60 to-transparent"></div>
          </div>
        </div>

        {/* Article Content */}
        <div className="prose prose-lg prose-invert max-w-none">
          <div className="text-gray-300 leading-relaxed space-y-6 bg-gray-800/30 backdrop-blur-sm border border-gray-700/30 rounded-2xl p-8">
            {articleData.content.split('\n\n').map((paragraph, index) => {
              if (paragraph.startsWith('## ')) {
                return (
                  <h2 key={index} className="text-2xl font-bold text-white mt-12 mb-6">
                    {paragraph.replace('## ', '')}
                  </h2>
                );
              } else if (paragraph.startsWith('### ')) {
                return (
                  <h3 key={index} className="text-xl font-semibold text-cyan-400 mt-8 mb-4">
                    {paragraph.replace('### ', '')}
                  </h3>
                );
              } else if (paragraph.startsWith('**') && paragraph.endsWith('**')) {
                return (
                  <p key={index} className="text-lg font-semibold text-cyan-400 mt-6 mb-3">
                    {paragraph.replace(/\*\*/g, '')}
                  </p>
                );
              } else {
                return (
                  <p key={index} className="text-gray-300 leading-relaxed">
                    {paragraph}
                  </p>
                );
              }
            })}
          </div>
        </div>

        {/* Tags */}
        <div className="mt-12 pt-8 border-t border-gray-800/50">
          <h3 className="text-lg font-semibold text-white mb-4">Tags</h3>
          <div className="flex flex-wrap gap-2">
            {articleData.tags.map((tag, index) => (
              <span
                key={index}
                className="bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 text-gray-300 px-3 py-1 rounded-full text-sm hover:bg-gray-700/50 hover:text-cyan-400 hover:border-cyan-400/30 transition-all duration-300 cursor-pointer"
              >
                #{tag}
              </span>
            ))}
          </div>
        </div>

        {/* Related Articles
        <div className="mt-16 pt-8 border-t border-gray-800/50">
          <h3 className="text-2xl font-bold text-white mb-8">Related Articles</h3>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-xl p-6 hover:border-cyan-400/30 transition-all duration-300 cursor-pointer group relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative z-10">
                <div className="h-32 bg-gray-700/50 rounded-lg mb-4 overflow-hidden">
                  <img
                    src="https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=400&h=200&fit=crop"
                    alt="Related Article"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <h4 className="text-lg font-semibold text-white mb-2 group-hover:text-cyan-400 transition-colors duration-300">
                  Breakthrough in Neural Network Architecture
                </h4>
                <p className="text-gray-400 text-sm">
                  Revolutionary advances in AI control systems for humanoid robots.
                </p>
              </div>
            </div>
            <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-xl p-6 hover:border-cyan-400/30 transition-all duration-300 cursor-pointer group relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative z-10">
                <div className="h-32 bg-gray-700/50 rounded-lg mb-4 overflow-hidden">
                  <img
                    src="https://images.pexels.com/photos/8386434/pexels-photo-8386434.jpeg?auto=compress&cs=tinysrgb&w=400&h=200&fit=crop"
                    alt="Related Article"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <h4 className="text-lg font-semibold text-white mb-2 group-hover:text-cyan-400 transition-colors duration-300">
                  Healthcare Partnership Announcement
                </h4>
                <p className="text-gray-400 text-sm">
                  Strategic collaborations with leading medical institutions.
                </p>
              </div>
            </div>
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default Article;