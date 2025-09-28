import "@google/model-viewer";
import React from 'react';
import Layout from '@/Layout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Cog, Cpu, Brain, Calendar, Target, Zap } from 'lucide-react';
import { ShaderAnimation } from "@/components/ui/shader-lines";
const mechanicsImage = '/mechanics-tech.jpg';
const electronicsImage = '/electronics-tech.jpg';
const aiImage = '/ai-control-tech.jpg';

const Technology = () => {
  const technologies = [
    {
      icon: Cog,
      title: 'Advanced Mechanics',
      image: mechanicsImage,
      features: [
        'Custom mechanical design optimized for human-like movement',
        'High-torque servo motors with precision control',
        'Durable joints with 10,000+ hour lifespan',
        'Lightweight carbon fiber and aluminum structure',
        'Advanced actuators with force feedback',
        'Modular design for easy maintenance'
      ]
    },
    {
      icon: Cpu,
      title: 'Smart Electronics',
      image: electronicsImage,
      features: [
        'Custom data management board with real-time processing',
        'BLDC motor driver design with adaptive control',
        'Integrated power management system',
        'Multi-sensor fusion architecture',
        'High-speed communication protocols',
        'Fail-safe redundancy systems'
      ],
      show3D: true
    },
    {
      icon: Brain,
      title: 'AI Control Systems',
      image: aiImage,
      features: [
        'Reinforcement learning for dynamic motion control',
        'Computer vision with object recognition',
        'Natural language processing for human interaction',
        'Advanced perception pipelines',
        'Safety-first feedback control systems',
        'Continuous learning and adaptation'
      ]
    }
  ];

  // Tab state for electronics 3D viewer
  const [viewerTab, setViewerTab] = React.useState<'driver' | 'main_board'>('driver');

  const roadmapItems = [
    {
      quarter: 'Q4 2025',
      milestone: 'Core Platform Development',
      description: 'Complete mechanical framework and basic control systems',
      status: 'in-progress'
    },
    {
      quarter: 'Q1 2026',
      milestone: 'Advanced Mobility',
      description: 'Dynamic walking tasks',
      status: 'planned'
    },
    {
      quarter: 'Q2 2026',
      milestone: 'AI Integration Phase',
      description: 'Implement vision systems and basic interaction capabilities',
      status: 'planned'
    },
    {
      quarter: 'Q4 2026',
      milestone: 'Beta Testing Program',
      description: 'Limited release for research partners and early adopters',
      status: 'planned'
    }
  ];

  return (
    <Layout>
      <div className="min-h-screen">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-tech">
          <div className="container mx-auto px-4">
            <div className="relative flex h-[300px] md:h-[400px] w-full flex-col items-center justify-center overflow-hidden rounded-xl mb-8">
              <ShaderAnimation colorScheme="purple-pink" />
              <span className="pointer-events-none z-10 text-center text-5xl md:text-7xl leading-none font-semibold tracking-tighter whitespace-pre-wrap text-white drop-shadow-lg">
                Technology That Transforms
              </span>
            </div>
            <div className="max-w-2xl mx-auto bg-white/30 backdrop-blur-lg rounded-2xl shadow-lg p-6 text-center mb-8">
              <p className="text-xl text-muted-foreground">
                Our cutting-edge approach combines mechanical precision, advanced electronics, 
                and artificial intelligence to create the most sophisticated humanoid robots ever built.
              </p>
            </div>
          </div>
        </section>

        {/* Technology Pillars */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            {/* Mechanics */}
            <div className="flex flex-col md:flex-row items-center gap-12 mb-20">
              <div className="md:w-1/2 w-full order-2 md:order-2">
                <div className="relative rounded-3xl overflow-hidden shadow-2xl bg-white/40 backdrop-blur-lg">
                  <img 
                    src={mechanicsImage} 
                    alt="Advanced Mechanics"
                    className="w-full h-80 object-cover hover:scale-105 transition-transform duration-500 rounded-3xl"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-purple-600/20 via-transparent to-transparent pointer-events-none" />
                </div>
              </div>
              <div className="md:w-1/2 w-full order-1 md:order-1">
                <Card className="bg-white/60 backdrop-blur-lg rounded-3xl shadow-xl p-8">
                  <CardHeader className="flex flex-row items-center gap-4 mb-4">
                    <div className="w-14 h-14 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl flex items-center justify-center">
                      <Cog className="w-8 h-8 text-white" />
                    </div>
                    <CardTitle className="text-3xl font-bold text-purple-700 drop-shadow-lg">Advanced Mechanics</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3 mt-2">
                      {technologies[0].features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center gap-3 text-base text-muted-foreground">
                          <Zap className="w-5 h-5 text-pink-500" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </div>
            <div className="border-b-2 border-purple-200 mb-20" />

            {/* Electronics */}
            <div className="flex flex-col md:flex-row items-center gap-12 mb-8">
              <div className="md:w-1/2 w-full order-2 md:order-2">
                <div className="relative rounded-3xl overflow-hidden shadow-2xl bg-white/40 backdrop-blur-lg">
                  <img 
                    src={electronicsImage} 
                    alt="Smart Electronics"
                    className="w-full h-80 object-cover hover:scale-105 transition-transform duration-500 rounded-3xl"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-purple-600/20 via-transparent to-transparent pointer-events-none" />
                </div>
              </div>
              <div className="md:w-1/2 w-full order-1 md:order-1">
                <Card className="bg-white/60 backdrop-blur-lg rounded-3xl shadow-xl p-8">
                  <CardHeader className="flex flex-row items-center gap-4 mb-4">
                    <div className="w-14 h-14 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl flex items-center justify-center">
                      <Cpu className="w-8 h-8 text-white" />
                    </div>
                    <CardTitle className="text-3xl font-bold text-purple-700 drop-shadow-lg">Smart Electronics</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3 mt-2">
                      {technologies[1].features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center gap-3 text-base text-muted-foreground">
                          <Zap className="w-5 h-5 text-pink-500" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </div>
            {/* Electronics 3D Viewer row after electronics card */}
            <div className="w-full mt-8 mb-20">
              <div className="flex gap-2 mb-4 justify-center">
                <button
                  className={`px-4 py-2 rounded-lg font-semibold transition-colors ${viewerTab === 'driver' ? 'bg-purple-600 text-white' : 'bg-white/70 text-purple-600'}`}
                  onClick={() => setViewerTab('driver')}
                >
                  Driver Board
                </button>
                <button
                  className={`px-4 py-2 rounded-lg font-semibold transition-colors ${viewerTab === 'main_board' ? 'bg-purple-600 text-white' : 'bg-white/70 text-purple-600'}`}
                  onClick={() => setViewerTab('main_board')}
                >
                  Communication Board
                </button>
              </div>
              <div className="rounded-2xl overflow-hidden shadow-xl bg-white/40 backdrop-blur-lg max-w-4xl mx-auto">
                <model-viewer
                  src={viewerTab === 'driver' ? '/driver.glb' : '/main_board.glb'}
                  alt="3D model"
                  auto-rotate
                  camera-controls
                  style={{ width: "100%", height: "400px"}}
                  shadow-intensity="0.1"
                  exposure="0.15"
                  environment-image="neutral"
                />
              </div>
            </div>
            <div className="border-b-2 border-purple-200 mb-20" />

            {/* AI Control Systems */}
            <div className="flex flex-col md:flex-row items-center gap-12 mb-8">
              <div className="md:w-1/2 w-full order-2 md:order-2">
                <div className="relative rounded-3xl overflow-hidden shadow-2xl bg-white/40 backdrop-blur-lg">
                  <img 
                    src={aiImage} 
                    alt="AI Control Systems"
                    className="w-full h-80 object-cover hover:scale-105 transition-transform duration-500 rounded-3xl"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-purple-600/20 via-transparent to-transparent pointer-events-none" />
                </div>
              </div>
              <div className="md:w-1/2 w-full order-1 md:order-1">
                <Card className="bg-white/60 backdrop-blur-lg rounded-3xl shadow-xl p-8">
                  <CardHeader className="flex flex-row items-center gap-4 mb-4">
                    <div className="w-14 h-14 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl flex items-center justify-center">
                      <Brain className="w-8 h-8 text-white" />
                    </div>
                    <CardTitle className="text-3xl font-bold text-purple-700 drop-shadow-lg">AI Control Systems</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3 mt-2">
                      {technologies[2].features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center gap-3 text-base text-muted-foreground">
                          <Zap className="w-5 h-5 text-pink-500" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Roadmap */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Development Roadmap
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Our strategic milestones toward bringing advanced humanoid robotics to reality.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {roadmapItems.map((item, index) => (
                <Card key={index} className="hover-lift bg-muted/40">
                  <CardHeader>
                    <div className="flex items-center space-x-2 mb-2">
                      <Calendar className="w-5 h-5 text-primary" />
                      <span className="text-sm font-medium text-primary">{item.quarter}</span>
                    </div>
                    <CardTitle className="text-lg">{item.milestone}</CardTitle>
                    <Badge 
                      variant={item.status === 'in-progress' ? 'default' : 'secondary'}
                      className="w-fit"
                    >
                      {item.status === 'in-progress' ? 'In Progress' : 'Planned'}
                    </Badge>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">{item.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default Technology;
