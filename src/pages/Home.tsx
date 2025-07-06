import React from 'react';
import VideoBillboard from '../components/VideoBillboard';
import { Brain, Users, Zap, ArrowRight } from 'lucide-react';

const Home: React.FC = () => {
  return (
    <div className="-mt-20">
      <VideoBillboard />
      
      {/* Our Vision Section */}
      <section className="py-20 bg-gray-900 relative overflow-hidden">
        {/* Section Background Elements */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-cyan-400/30 to-transparent"></div>
          <div className="absolute -top-32 -right-32 w-64 h-64 bg-cyan-400/5 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-32 -left-32 w-64 h-64 bg-blue-500/5 rounded-full blur-3xl"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center mb-16">
            <div className="inline-block mb-4">
              <div className="bg-cyan-400/10 backdrop-blur-sm border border-cyan-400/20 rounded-full px-4 py-2">
                <span className="text-cyan-400 text-xs font-medium uppercase tracking-wider">
                  Our Vision
                </span>
              </div>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6">
              Our Vision for Tomorrow
            </h2>
            <p className="text-lg sm:text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              At 8Robotics, we envision a future where humanoid robots integrate effortlessly into everyday life. 
              From boosting productivity to offering companionship and tackling challenges in healthcare, education, 
              and beyond, our AI-driven robots are designed to be intelligent partners for humanity.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 mt-16">
            <div className="text-center group">
              <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-xl p-8 h-full transition-all duration-500 hover:bg-gray-700/50 hover:scale-105 hover:border-cyan-400/30 relative overflow-hidden">
                {/* Card Background Effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="relative z-10">
                  <div className="bg-cyan-400/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-cyan-400/20 transition-colors duration-300">
                    <Brain className="h-8 w-8 text-cyan-400" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-4">AI-Powered Intelligence</h3>
                  <p className="text-gray-300">Advanced machine learning algorithms enabling robots to learn, adapt, and make intelligent decisions.</p>
                </div>
              </div>
            </div>
            
            <div className="text-center group">
              <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-xl p-8 h-full transition-all duration-500 hover:bg-gray-700/50 hover:scale-105 hover:border-cyan-400/30 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="relative z-10">
                  <div className="bg-cyan-400/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-cyan-400/20 transition-colors duration-300">
                    <Users className="h-8 w-8 text-cyan-400" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-4">Human-Centered Design</h3>
                  <p className="text-gray-300">Robots designed to complement human capabilities and seamlessly integrate into social environments.</p>
                </div>
              </div>
            </div>
            
            <div className="text-center group">
              <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-xl p-8 h-full transition-all duration-500 hover:bg-gray-700/50 hover:scale-105 hover:border-cyan-400/30 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="relative z-10">
                  <div className="bg-cyan-400/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-cyan-400/20 transition-colors duration-300">
                    <Zap className="h-8 w-8 text-cyan-400" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-4">Cutting-Edge Technology</h3>
                  <p className="text-gray-300">Leveraging the latest advancements in robotics, sensors, and autonomous systems for optimal performance.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About 8Robotics Section */}
      <section className="py-20 bg-gray-800 relative overflow-hidden">
        {/* Section Background Elements */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-blue-500/30 to-transparent"></div>
          <div className="absolute top-1/2 left-0 w-full h-px bg-gradient-to-r from-transparent via-cyan-400/10 to-transparent"></div>
          <div className="absolute -top-40 -left-40 w-80 h-80 bg-blue-500/5 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-40 -right-40 w-80 h-80 bg-cyan-400/5 rounded-full blur-3xl"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center mb-16">
            <div className="inline-block mb-4">
              <div className="bg-blue-500/10 backdrop-blur-sm border border-blue-500/20 rounded-full px-4 py-2">
                <span className="text-blue-400 text-xs font-medium uppercase tracking-wider">
                  About Us
                </span>
              </div>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6">
              Who We Are
            </h2>
            <p className="text-lg sm:text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Founded in 2025, 8Robotics is pioneering the next generation of humanoid robotics. 
              Our team of AI and robotics innovators is committed to transforming industries and 
              amplifying human potential through cutting-edge technology.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            <div className="bg-gray-900/50 backdrop-blur-sm border border-gray-700/50 rounded-xl p-8 hover:border-cyan-400/30 transition-all duration-500 group relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/5 to-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative z-10">
                <div className="w-12 h-12 bg-cyan-400/10 rounded-lg flex items-center justify-center mb-6 group-hover:bg-cyan-400/20 transition-colors duration-300">
                  <ArrowRight className="h-6 w-6 text-cyan-400" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-4">Our Mission</h3>
                <p className="text-gray-300">
                  To revolutionize industries like healthcare, education, and logistics with 
                  advanced humanoid robotics and AI.
                </p>
              </div>
            </div>

            <div className="bg-gray-900/50 backdrop-blur-sm border border-gray-700/50 rounded-xl p-8 hover:border-cyan-400/30 transition-all duration-500 group relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/5 to-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative z-10">
                <div className="w-12 h-12 bg-cyan-400/10 rounded-lg flex items-center justify-center mb-6 group-hover:bg-cyan-400/20 transition-colors duration-300">
                  <Users className="h-6 w-6 text-cyan-400" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-4">Expert Team</h3>
                <p className="text-gray-300">
                  Driven by world-class AI and robotics experts with decades of experience 
                  in groundbreaking tech.
                </p>
              </div>
            </div>

            <div className="bg-gray-900/50 backdrop-blur-sm border border-gray-700/50 rounded-xl p-8 hover:border-cyan-400/30 transition-all duration-500 group relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/5 to-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative z-10">
                <div className="w-12 h-12 bg-cyan-400/10 rounded-lg flex items-center justify-center mb-6 group-hover:bg-cyan-400/20 transition-colors duration-300">
                  <Zap className="h-6 w-6 text-cyan-400" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-4">Innovation First</h3>
                <p className="text-gray-300">
                  Relentlessly pushing the limits of humanoid robotics and artificial intelligence.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;