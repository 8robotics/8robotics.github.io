import React from 'react';
import { Target, Users, Lightbulb, Award } from 'lucide-react';

const About: React.FC = () => {
  const features = [
    {
      icon: Target,
      title: 'Our Mission',
      description: 'To advance humanoid robotics for industries like healthcare, education, and logistics through innovative AI solutions.'
    },
    {
      icon: Users,
      title: 'Expert Team',
      description: 'Led by world-class AI and robotics experts with decades of combined experience in cutting-edge technology.'
    },
    {
      icon: Lightbulb,
      title: 'Innovation First',
      description: 'Constantly pushing the boundaries of what\'s possible with humanoid robotics and artificial intelligence.'
    },
    {
      icon: Award,
      title: 'Industry Recognition',
      description: 'Recognized as a leader in humanoid robotics development and AI integration solutions.'
    }
  ];

  return (
    <section id="about" className="py-20 bg-slate-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
            About <span className="bg-gradient-to-r from-sky-500 to-blue-600 bg-clip-text text-transparent">8Robotics</span>
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Founded in 2025, 8Robotics is at the forefront of humanoid robotics innovation. Our team of AI and robotics experts is dedicated to creating intelligent humanoid solutions that transform industries and enhance human capabilities.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {features.map((feature, index) => (
            <div key={index} className="group text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-sky-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                <feature.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-4">{feature.title}</h3>
              <p className="text-slate-600 leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>

        <div className="bg-gradient-to-r from-slate-900 to-blue-900 rounded-3xl p-8 md:p-12 text-white">
          <div className="max-w-4xl mx-auto text-center">
            <h3 className="text-3xl font-bold mb-6">Our Vision for the Future</h3>
            <p className="text-xl text-slate-300 leading-relaxed mb-8">
              We envision a world where humanoid robots seamlessly integrate into daily life, 
              enhancing productivity, providing companionship, and solving complex challenges 
              across healthcare, education, and beyond. Through advanced AI and robotics, 
              we're not just building machines—we're creating intelligent partners for humanity.
            </p>
            <div className="grid md:grid-cols-3 gap-8 text-center">
              <div>
                <div className="text-4xl font-bold text-sky-400 mb-2">50+</div>
                <div className="text-slate-300">Expert Engineers</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-sky-400 mb-2">3</div>
                <div className="text-slate-300">Robot Models</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-sky-400 mb-2">100+</div>
                <div className="text-slate-300">Partner Companies</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;