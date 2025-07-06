import React from 'react';
import { Bot, Brain, Heart, Target } from 'lucide-react';

const About: React.FC = () => {
  return (
    <div className="py-20 bg-gray-900 relative overflow-hidden">
      {/* Page Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-cyan-400/30 to-transparent"></div>
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-cyan-400/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-1/2 -left-40 w-80 h-80 bg-blue-500/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute -bottom-40 right-1/4 w-64 h-64 bg-purple-500/3 rounded-full blur-3xl animate-pulse delay-2000"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-16">
          <div className="inline-block mb-4">
            <div className="bg-cyan-400/10 backdrop-blur-sm border border-cyan-400/20 rounded-full px-4 py-2">
              <span className="text-cyan-400 text-xs font-medium uppercase tracking-wider">
                About 8Robotics
              </span>
            </div>
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6">
            About 8Robotics
          </h1>
          <p className="text-lg sm:text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            We're building the future of humanoid robotics, one intelligent system at a time.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          <div className="relative">
            <div className="absolute -top-4 -left-4 w-full h-full bg-cyan-400/5 rounded-2xl blur-xl"></div>
            <div className="relative bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-8">
              <h2 className="text-2xl sm:text-3xl font-bold text-white mb-6">
                Our Story
              </h2>
              <p className="text-gray-300 mb-6 leading-relaxed">
                Founded in 2025, 8Robotics emerged from a vision to create humanoid robots that don't just perform tasks, 
                but truly understand and interact with the world around them. Our founders, veterans of the AI and robotics 
                industries, recognized the immense potential of combining advanced artificial intelligence with sophisticated 
                mechanical engineering.
              </p>
              <p className="text-gray-300 leading-relaxed">
                We believe that the future of robotics lies not in replacing humans, but in augmenting human capabilities 
                and creating intelligent partners that can work alongside us to solve complex challenges across multiple industries.
              </p>
            </div>
          </div>
          
          <div className="grid grid-cols-2 gap-6">
            <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-xl p-6 text-center hover:border-cyan-400/30 transition-all duration-500 group relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative z-10">
                <div className="bg-cyan-400/10 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-cyan-400/20 transition-colors duration-300">
                  <Bot className="h-6 w-6 text-cyan-400" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">Advanced AI</h3>
                <p className="text-gray-300 text-sm">Next-generation machine learning</p>
              </div>
            </div>
            
            <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-xl p-6 text-center hover:border-cyan-400/30 transition-all duration-500 group relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative z-10">
                <div className="bg-cyan-400/10 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-cyan-400/20 transition-colors duration-300">
                  <Brain className="h-6 w-6 text-cyan-400" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">Smart Learning</h3>
                <p className="text-gray-300 text-sm">Adaptive neural networks</p>
              </div>
            </div>
            
            <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-xl p-6 text-center hover:border-cyan-400/30 transition-all duration-500 group relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative z-10">
                <div className="bg-cyan-400/10 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-cyan-400/20 transition-colors duration-300">
                  <Heart className="h-6 w-6 text-cyan-400" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">Human-Centered</h3>
                <p className="text-gray-300 text-sm">Designed for collaboration</p>
              </div>
            </div>
            
            <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-xl p-6 text-center hover:border-cyan-400/30 transition-all duration-500 group relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative z-10">
                <div className="bg-cyan-400/10 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-cyan-400/20 transition-colors duration-300">
                  <Target className="h-6 w-6 text-cyan-400" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">Precision Focus</h3>
                <p className="text-gray-300 text-sm">Purpose-built solutions</p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-8 md:p-12 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/5 to-blue-500/5 opacity-50"></div>
          <div className="relative z-10">
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-8 text-center">
              Our Core Values
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center group">
                <div className="bg-cyan-400/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-cyan-400/20 transition-colors duration-300">
                  <Brain className="h-8 w-8 text-cyan-400" />
                </div>
                <h3 className="text-xl font-semibold text-cyan-400 mb-4">Innovation</h3>
                <p className="text-gray-300">
                  We push the boundaries of what's possible, constantly exploring new technologies 
                  and methodologies to advance the field of robotics.
                </p>
              </div>
              <div className="text-center group">
                <div className="bg-cyan-400/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-cyan-400/20 transition-colors duration-300">
                  <Heart className="h-8 w-8 text-cyan-400" />
                </div>
                <h3 className="text-xl font-semibold text-cyan-400 mb-4">Responsibility</h3>
                <p className="text-gray-300">
                  We develop technology responsibly, considering the ethical implications and 
                  societal impact of our innovations.
                </p>
              </div>
              <div className="text-center group">
                <div className="bg-cyan-400/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-cyan-400/20 transition-colors duration-300">
                  <Target className="h-8 w-8 text-cyan-400" />
                </div>
                <h3 className="text-xl font-semibold text-cyan-400 mb-4">Collaboration</h3>
                <p className="text-gray-300">
                  We believe in the power of human-robot collaboration to create solutions 
                  that neither could achieve alone.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;