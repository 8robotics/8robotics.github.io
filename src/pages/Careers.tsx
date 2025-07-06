import React from 'react';
import { Users, Mail, Rocket, Code, Cog, Lightbulb } from 'lucide-react';

const Careers: React.FC = () => {
  return (
    <div className="py-20 bg-gray-900 relative overflow-hidden">
      {/* Page Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-cyan-400/30 to-transparent"></div>
        <div className="absolute -top-40 -left-40 w-96 h-96 bg-cyan-400/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-1/3 -right-40 w-80 h-80 bg-blue-500/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute -bottom-40 left-1/4 w-64 h-64 bg-purple-500/3 rounded-full blur-3xl animate-pulse delay-2000"></div>
        
        {/* Floating Elements */}
        <div className="absolute top-1/4 right-1/4 w-2 h-2 bg-cyan-400/30 rounded-full animate-pulse"></div>
        <div className="absolute top-3/4 left-1/3 w-1 h-1 bg-blue-400/40 rounded-full animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 right-1/3 w-1.5 h-1.5 bg-cyan-300/20 rounded-full animate-pulse delay-2000"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-16">
          <div className="inline-block mb-4">
            <div className="bg-cyan-400/10 backdrop-blur-sm border border-cyan-400/20 rounded-full px-4 py-2">
              <span className="text-cyan-400 text-xs font-medium uppercase tracking-wider">
                Join Our Team
              </span>
            </div>
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6">
            Join the 8Robotics Revolution
          </h1>
          <p className="text-lg sm:text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            We're seeking passionate innovators to shape the future of humanoid robotics. 
            Be part of a team that's building tomorrow's intelligent companions.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-xl p-8 hover:border-cyan-400/30 transition-all duration-500 group relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="relative z-10">
              <div className="bg-cyan-400/10 w-16 h-16 rounded-full flex items-center justify-center mb-6 group-hover:bg-cyan-400/20 transition-colors duration-300">
                <Code className="h-8 w-8 text-cyan-400" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-4">AI Engineers</h3>
              <p className="text-gray-300 mb-4">
                Develop cutting-edge machine learning algorithms and neural networks that power 
                our humanoid robots' decision-making capabilities.
              </p>
              <ul className="text-gray-300 text-sm space-y-2">
                <li>• Deep learning expertise</li>
                <li>• Computer vision experience</li>
                <li>• Natural language processing</li>
              </ul>
            </div>
          </div>

          <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-xl p-8 hover:border-cyan-400/30 transition-all duration-500 group relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="relative z-10">
              <div className="bg-cyan-400/10 w-16 h-16 rounded-full flex items-center justify-center mb-6 group-hover:bg-cyan-400/20 transition-colors duration-300">
                <Cog className="h-8 w-8 text-cyan-400" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-4">Robotics Engineers</h3>
              <p className="text-gray-300 mb-4">
                Design and build the mechanical systems, sensors, and control systems that 
                bring our humanoid robots to life.
              </p>
              <ul className="text-gray-300 text-sm space-y-2">
                <li>• Mechanical engineering background</li>
                <li>• Control systems expertise</li>
                <li>• Sensor integration experience</li>
              </ul>
            </div>
          </div>

          <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-xl p-8 hover:border-cyan-400/30 transition-all duration-500 group relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="relative z-10">
              <div className="bg-cyan-400/10 w-16 h-16 rounded-full flex items-center justify-center mb-6 group-hover:bg-cyan-400/20 transition-colors duration-300">
                <Lightbulb className="h-8 w-8 text-cyan-400" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-4">Research Scientists</h3>
              <p className="text-gray-300 mb-4">
                Push the boundaries of robotics research, exploring new paradigms in 
                human-robot interaction and autonomous systems.
              </p>
              <ul className="text-gray-300 text-sm space-y-2">
                <li>• PhD in relevant field</li>
                <li>• Published research experience</li>
                <li>• Innovation mindset</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-r from-cyan-400/10 to-blue-500/10 backdrop-blur-sm rounded-2xl p-8 md:p-12 border border-cyan-400/20 relative overflow-hidden mb-16">
          <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/5 to-blue-500/5"></div>
          <div className="relative z-10 text-center">
            <div className="bg-cyan-400/10 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
              <Users className="h-10 w-10 text-cyan-400" />
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-6">
              Ready to Build the Future?
            </h2>
            <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
              We're always looking for talented individuals who share our passion for 
              advancing humanoid robotics. Join us in creating intelligent systems that 
              will transform industries and improve lives.
            </p>
            <a
              href="mailto:info@8robotics.tech"
              className="inline-flex items-center space-x-2 bg-cyan-400 text-gray-900 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-cyan-300 transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-cyan-400/25"
            >
              <Mail className="h-5 w-5" />
              <span>Send Your Resume</span>
            </a>
          </div>
        </div>

        <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-xl p-8 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/5 to-blue-500/5 opacity-50"></div>
          <div className="relative z-10">
            <h2 className="text-2xl font-bold text-white mb-6 text-center">
              Why Choose 8Robotics?
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <div className="flex items-start space-x-3 mb-6">
                  <div className="bg-cyan-400/10 w-8 h-8 rounded-full flex items-center justify-center mt-1">
                    <Rocket className="h-4 w-4 text-cyan-400" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-cyan-400 mb-2">Cutting-Edge Technology</h3>
                    <p className="text-gray-300">
                      Work with the latest advancements in AI, robotics, and autonomous systems.
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="bg-cyan-400/10 w-8 h-8 rounded-full flex items-center justify-center mt-1">
                    <Users className="h-4 w-4 text-cyan-400" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-cyan-400 mb-2">Collaborative Environment</h3>
                    <p className="text-gray-300">
                      Join a team of world-class engineers and researchers who value innovation and teamwork.
                    </p>
                  </div>
                </div>
              </div>
              <div>
                <div className="flex items-start space-x-3 mb-6">
                  <div className="bg-cyan-400/10 w-8 h-8 rounded-full flex items-center justify-center mt-1">
                    <Lightbulb className="h-4 w-4 text-cyan-400" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-cyan-400 mb-2">Global Impact</h3>
                    <p className="text-gray-300">
                      Be part of projects that will transform healthcare, education, and beyond.
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="bg-cyan-400/10 w-8 h-8 rounded-full flex items-center justify-center mt-1">
                    <Code className="h-4 w-4 text-cyan-400" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-cyan-400 mb-2">Growth Opportunities</h3>
                    <p className="text-gray-300">
                      Advance your career while contributing to groundbreaking technological developments.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Careers;