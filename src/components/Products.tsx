import React from 'react';
import { ArrowRight, Cpu, Shield, Zap } from 'lucide-react';

const Products: React.FC = () => {
  const products = [
    {
      name: '8R-Alpha',
      subtitle: 'Home & Office Assistant',
      description: 'A versatile humanoid robot designed for home and office environments. Features advanced AI for task management, communication, and household assistance.',
      features: ['Voice Recognition', 'Task Automation', 'Smart Home Integration', 'Learning Capabilities'],
      icon: Cpu,
      gradient: 'from-sky-500 to-blue-600'
    },
    {
      name: '8R-Beta',
      subtitle: 'Healthcare Companion',
      description: 'Specialized for healthcare environments with medical assistance capabilities, patient monitoring, and emergency response systems.',
      features: ['Medical Monitoring', 'Emergency Response', 'Patient Care', 'Data Analytics'],
      icon: Shield,
      gradient: 'from-emerald-500 to-teal-600'
    },
    {
      name: '8R-Gamma',
      subtitle: 'Industrial Specialist',
      description: 'Built for industrial applications with enhanced strength, precision, and safety features for manufacturing and logistics operations.',
      features: ['Heavy Lifting', 'Precision Tasks', 'Safety Protocols', 'Quality Control'],
      icon: Zap,
      gradient: 'from-orange-500 to-red-600'
    }
  ];

  return (
    <section id="products" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
            Our <span className="bg-gradient-to-r from-sky-500 to-blue-600 bg-clip-text text-transparent">Products</span>
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Discover our cutting-edge humanoid robots, each designed for specific applications 
            and environments with advanced AI capabilities.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <div key={index} className="group relative bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden border border-slate-100">
              {/* Product Image Placeholder */}
              <div className={`h-64 bg-gradient-to-br ${product.gradient} relative overflow-hidden`}>
                <div className="absolute inset-0 bg-black/20"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <product.icon className="w-24 h-24 text-white/80" />
                </div>
                <div className="absolute top-4 right-4">
                  <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm">
                    <span className="text-white font-bold text-sm">0{index + 1}</span>
                  </div>
                </div>
              </div>

              <div className="p-8">
                <h3 className="text-2xl font-bold text-slate-900 mb-2">{product.name}</h3>
                <p className="text-sky-600 font-semibold mb-4">{product.subtitle}</p>
                <p className="text-slate-600 mb-6 leading-relaxed">{product.description}</p>
                
                <div className="mb-8">
                  <h4 className="font-semibold text-slate-900 mb-3">Key Features:</h4>
                  <ul className="space-y-2">
                    {product.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm text-slate-600">
                        <div className="w-2 h-2 bg-sky-500 rounded-full mr-3"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <button className="group w-full px-6 py-3 bg-slate-900 text-white font-semibold rounded-full hover:bg-slate-800 transition-colors duration-300 flex items-center justify-center space-x-2">
                  <span>Learn More</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;