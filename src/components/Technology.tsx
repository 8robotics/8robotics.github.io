import React from 'react';
import { Brain, Eye, Mic, Cpu, Zap, Shield } from 'lucide-react';

const Technology: React.FC = () => {
  const technologies = [
    {
      icon: Brain,
      title: 'Advanced AI',
      description: 'Deep learning algorithms that enable natural language processing, decision making, and adaptive behavior.',
      color: 'from-purple-500 to-indigo-600'
    },
    {
      icon: Eye,
      title: 'Computer Vision',
      description: 'State-of-the-art visual processing for object recognition, navigation, and environmental understanding.',
      color: 'from-sky-500 to-blue-600'
    },
    {
      icon: Mic,
      title: 'Voice Processing',
      description: 'Multi-language speech recognition and natural voice synthesis for seamless human-robot communication.',
      color: 'from-emerald-500 to-teal-600'
    },
    {
      icon: Cpu,
      title: 'Neural Networks',
      description: 'Custom neural architectures optimized for real-time processing and continuous learning capabilities.',
      color: 'from-orange-500 to-red-600'
    },
    {
      icon: Zap,
      title: 'Edge Computing',
      description: 'On-device processing for instant response times and reduced dependency on cloud connectivity.',
      color: 'from-yellow-500 to-orange-600'
    },
    {
      icon: Shield,
      title: 'Safety Systems',
      description: 'Multi-layered safety protocols ensuring secure operation in human environments and workspaces.',
      color: 'from-green-500 to-emerald-600'
    }
  ];

  return (
    <section id="technology" className="py-20 bg-slate-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Cutting-Edge <span className="bg-gradient-to-r from-sky-400 to-blue-500 bg-clip-text text-transparent">Technology</span>
          </h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
            Our humanoid robots are powered by breakthrough technologies in AI, 
            machine learning, and advanced sensors that push the boundaries of what's possible.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {technologies.map((tech, index) => (
            <div key={index} className="group relative bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 hover:bg-slate-800/70 transition-all duration-300 border border-slate-700/50">
              <div className={`w-16 h-16 bg-gradient-to-br ${tech.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                <tech.icon className="w-8 h-8 text-white" />
              </div>
              
              <h3 className="text-xl font-bold text-white mb-4">{tech.title}</h3>
              <p className="text-slate-300 leading-relaxed">{tech.description}</p>
              
              {/* Hover effect overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-sky-500/5 to-blue-600/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
          ))}
        </div>

        <div className="mt-20 text-center">
          <div className="bg-gradient-to-r from-slate-800 to-blue-900 rounded-3xl p-8 md:p-12">
            <h3 className="text-3xl font-bold text-white mb-6">Innovation Pipeline</h3>
            <p className="text-xl text-slate-300 mb-8 max-w-3xl mx-auto leading-relaxed">
              We're constantly researching and developing next-generation technologies including 
              quantum computing integration, advanced material sciences, and breakthrough AI architectures.
            </p>
            <div className="grid md:grid-cols-4 gap-8 text-center">
              <div>
                <div className="text-3xl font-bold text-sky-400 mb-2">15+</div>
                <div className="text-slate-300">Patents Filed</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-sky-400 mb-2">$50M</div>
                <div className="text-slate-300">R&D Investment</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-sky-400 mb-2">24/7</div>
                <div className="text-slate-300">Lab Operations</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-sky-400 mb-2">99.9%</div>
                <div className="text-slate-300">Uptime Rating</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Technology;