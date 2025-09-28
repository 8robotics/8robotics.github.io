import React from "react";
import { ShaderAnimation } from "@/components/ui/shader-lines";
import Layout from '@/Layout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Shield, Target, Users, Lightbulb } from 'lucide-react';

const About = () => {
  const values = [
    {
      icon: Lightbulb,
      title: 'Innovation',
      description: "Pushing the boundaries of what's possible in robotics through creative engineering and cutting-edge research."
    },
    {
      icon: Shield,
      title: 'Safety',
      description: 'Prioritizing human safety in every design decision, with fail-safe systems and rigorous testing protocols.'
    },
    {
      icon: Target,
      title: 'Reliability',
      description: 'Building robust systems that perform consistently in real-world environments with minimal maintenance.'
    },
    {
      icon: Users,
      title: 'Transparency',
      description: 'Open communication with partners, investors, and the public about our progress and challenges.'
    }
  ];

  return (
    <Layout>
      <div className="min-h-screen">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-tech">
          <div className="container mx-auto px-4">
            <div className="relative flex h-[300px] md:h-[400px] w-full flex-col items-center justify-center overflow-hidden rounded-xl mb-8">
              <ShaderAnimation />
              <span className="pointer-events-none z-10 text-center text-5xl md:text-7xl leading-none font-semibold tracking-tighter whitespace-pre-wrap text-white drop-shadow-lg">
                About 8robotics
              </span>
            </div>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-center">
              Founded in 2025 by experienced legged robot researchers, we're dedicated to 
              advancing humanoid robotics through innovative engineering and responsible development.
            </p>
          </div>
        </section>

        {/* Company Story */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">Our Story</h2>
              <div className="prose prose-lg max-w-none text-muted-foreground">
                <p className="text-lg leading-relaxed mb-6">
                  8robotics was born from a simple yet ambitious vision: to create humanoid robots 
                  that seamlessly integrate into human environments, enhancing our capabilities while 
                  maintaining the highest standards of safety and reliability.
                </p>
                <p className="text-lg leading-relaxed mb-6">
                  Our founding team brings together decades of experience in legged robotics, 
                  having worked on some of the most advanced robotic systems in the world. 
                  We've seen the challenges and opportunities in this field, and we're committed 
                  to solving the hardest problems through innovative engineering and thoughtful design.
                </p>
                <p className="text-lg leading-relaxed">
                  Today, we're building the next generation of humanoid robots that will work 
                  alongside humans in homes, offices, and industrial environments. Our approach 
                  combines cutting-edge AI with robust mechanical engineering to create machines 
                  that are not just intelligent, but truly helpful.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Mission & Values */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Our Mission & Values
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Guided by principles that ensure we build technology that benefits humanity.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
              {values.map((value, index) => (
                <Card key={index} className="text-center hover-lift">
                  <CardHeader>
                    <value.icon className="w-12 h-12 text-primary mx-auto mb-4" />
                    <CardTitle className="text-xl">{value.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{value.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="text-center mb-16">
              <div className="bg-card rounded-2xl p-8 max-w-3xl mx-auto">
                <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
                <p className="text-lg text-muted-foreground">
                  To democratize access to advanced robotics by creating humanoid robots that are 
                  safe, reliable, and truly useful in everyday life. We believe that the future of 
                  human-robot collaboration depends on building trust through transparency, safety, 
                  and genuine utility.
                </p>
              </div>
            </div>

            <div className="text-center">
              <div className="bg-gradient-to-br from-primary to-orange-700 rounded-2xl p-8 max-w-3xl mx-auto text-white shadow-xl">
                <h3 className="text-2xl font-bold mb-4 drop-shadow-lg">Ready to Learn More?</h3>
                <p className="text-lg mb-6 opacity-95 drop-shadow">
                  Interested in partnerships, investment opportunities, or learning more about our technology? <br />
                  We'd love to connect with you.
                </p>
                <a 
                  href="/contact" 
                  className="inline-block bg-white text-orange-600 px-8 py-3 rounded-lg font-semibold shadow-lg hover:bg-orange-100 transition-colors border-2 border-white"
                >
                  Get in Touch
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default About;
