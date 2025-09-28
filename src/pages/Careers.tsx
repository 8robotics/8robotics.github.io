import React from "react";
import Layout from '@/Layout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ShaderAnimation } from "@/components/ui/shader-lines";
import { MapPin, Clock, Users, Lightbulb, Rocket, Heart } from 'lucide-react';

interface JobListing {
  id: string;
  title: string;
  department: string;
  location: string;
  type: 'Full-time' | 'Part-time' | 'Contract';
  experience: string;
  description: string;
  requirements: string[];
}

const Careers = () => {
  const jobs: JobListing[] = [
    {
      id: '2',
      title: 'Senior Mechanical Engineer',
      department: 'Mechanics',
      location: 'Silicon Valley, CA',
      type: 'Full-time',
      experience: '5+ years',
      description: 'Design and develop advanced mechanical systems for humanoid robots, including actuators, joints, and structural components.',
      requirements: [
        'MS/PhD in Mechanical Engineering or related field',
        'Experience with robotic mechanical design',
        'Proficiency in CAD software (SolidWorks, Fusion 360)',
        'Knowledge of materials science and manufacturing processes'
      ]
    },
    {
      id: '1',
      title: 'Electronics Hardware Engineer',
      department: 'Electronics',
      location: 'Silicon Valley, CA',
      type: 'Full-time',
      experience: '3+ years',
      description: 'Develop custom electronics boards, motor drivers, and sensor integration systems for advanced robotics applications.',
      requirements: [
        'BS/MS in Electrical Engineering',
        'Experience with PCB design and embedded systems',
        'Knowledge of power electronics and motor control',
        'Familiarity with communication protocols (CAN, UART, SPI)'
      ]
    },
    {
      id: '3',
      title: 'AI/ML Research Scientist',
      department: 'AI & Control',
      location: 'Silicon Valley, CA',
      type: 'Full-time',
      experience: '4+ years',
      description: 'Research and implement cutting-edge AI algorithms for robot perception, planning, and control systems.',
      requirements: [
        'MS/PhD in Computer Science, Robotics, or related field',
  'Strong background in machine learning and deep learning',
  'Experience with reinforcement learning (RL)',
  'Simulation experience (Isaac Sim, MuJoCo)',
  'Proficiency in Python, PyTorch/TensorFlow'
      ]
    },
    {
      id: '4',
      title: 'Control Systems Engineer',
      department: 'AI & Control',
      location: 'Silicon Valley, CA',
      type: 'Full-time',
      experience: '3+ years',
      description: 'Develop and implement advanced control algorithms for dynamic robot motion and stability systems.',
      requirements: [
        'MS in Control Systems, Robotics, or related field',
        'Experience with real-time control systems',
  'Knowledge of dynamics and kinematics',
  'Simulation experience (Isaac Sim, MuJoCo)',
  'Proficiency in MATLAB/Simulink and C++'
      ]
    },
    {
      id: '5',
      title: 'Robotics Software Engineer',
      department: 'Software',
      location: 'Silicon Valley, CA',
      type: 'Full-time',
      experience: '2+ years',
      description: 'Build robust software infrastructure for robot operation, including real-time systems and safety protocols.',
      requirements: [
        'BS/MS in Computer Science or related field',
        'Strong C++ and Python programming skills',
        'Experience with ROS or similar robotics frameworks',
        'Knowledge of real-time systems and embedded programming'
      ]
    },
    {
      id: '6',
      title: 'Robotics Intern',
      department: 'Various',
      location: 'Silicon Valley, CA',
      type: 'Part-time',
      experience: 'Student',
      description: 'Join our team as an intern and contribute to cutting-edge robotics research across multiple disciplines.',
      requirements: [
        'Currently pursuing BS/MS in relevant field',
        'Strong academic performance',
        'Passion for robotics and innovation',
        'Programming experience preferred'
      ]
    }
  ];

  const cultureValues = [
    {
      icon: Lightbulb,
      title: 'Innovation First',
      description: 'We encourage creative thinking and bold approaches to solving complex problems.'
    },
    {
      icon: Users,
      title: 'Collaborative Spirit',
      description: 'Cross-functional teams working together to achieve breakthrough results.'
    },
    {
      icon: Rocket,
      title: 'Rapid Growth',
      description: 'Fast-paced environment with opportunities for professional development.'
    },
    {
      icon: Heart,
      title: 'Impact Driven',
      description: 'Building technology that makes a meaningful difference in the world.'
    }
  ];

  const getDepartmentColor = () => {
    return 'bg-primary/10 text-primary';
  };

  return (
    <Layout>
      <div className="min-h-screen">
        {/* Hero Section */}
          <section className="py-20 bg-gradient-tech">
            <div className="container mx-auto px-4">
              <div className="relative flex h-[300px] md:h-[400px] w-full flex-col items-center justify-center overflow-hidden rounded-xl mb-8">
                <ShaderAnimation colorScheme="orange-blue" />
                <span className="pointer-events-none z-10 text-center text-5xl md:text-7xl leading-none font-semibold tracking-tighter whitespace-pre-wrap text-white drop-shadow-lg">
                  Join Our Mission
                </span>
              </div>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-center">
                Help us build the future of humanoid robotics. We're looking for passionate 
                individuals who want to push the boundaries of what's possible.
              </p>
            </div>
          </section>

        {/* Culture Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Why Work With Us?
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Join a team of world-class engineers and researchers working on the 
                most exciting challenges in robotics.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
              {cultureValues.map((value, index) => (
                <Card key={index} className="text-center hover-lift bg-muted/30">
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

            <div className="bg-card rounded-2xl p-8 max-w-4xl mx-auto">
              <h3 className="text-2xl font-bold mb-4 text-center">Our Working Culture</h3>
              <p className="text-lg text-muted-foreground text-center mb-8">
                At 8robotics, we believe that the best work happens when brilliant minds 
                collaborate in an environment that values both innovation and work-life balance.
              </p>
              <div className="grid md:grid-cols-3 gap-6 text-center">
                <div>
                  <h4 className="font-semibold mb-2">Flexible Work</h4>
                  <p className="text-sm text-muted-foreground">
                    Hybrid work options with flexible hours
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Home Office Setup</h4>
                  <p className="text-sm text-muted-foreground">
                    Support to create your ideal workspace
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Equity Participation</h4>
                  <p className="text-sm text-muted-foreground">
                    Share in the company's growth
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Open Positions */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-12 text-center">Open Positions</h2>
            
            <div className="space-y-8 max-w-4xl mx-auto">
              {jobs.map((job) => (
                <Card key={job.id} className="group bg-white/80 border-0 shadow-xl hover:shadow-2xl transition-shadow duration-300 rounded-2xl overflow-hidden">
                  <CardHeader className="p-6 pb-0 flex flex-col gap-2">
                    <div className="flex items-center gap-3 mb-2">
                      <Badge className={getDepartmentColor() + ' text-xs px-3 py-1 rounded-full font-semibold'}>
                        {job.department}
                      </Badge>
                      <Badge variant="outline" className="flex items-center gap-1 text-xs px-3 py-1 rounded-full font-semibold">
                        <Clock className="w-3 h-3" />
                        {job.type}
                      </Badge>
                      <Badge variant="outline" className="text-xs px-3 py-1 rounded-full font-semibold">
                        {job.experience}
                      </Badge>
                    </div>
                    <CardTitle className="text-2xl font-bold group-hover:text-primary transition-colors mb-2">
                      {job.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="p-6 pt-0">
                    <p className="text-muted-foreground mb-4 text-base leading-relaxed">{job.description}</p>
                    <div className="bg-muted/20 rounded-xl p-4 mb-4">
                      <h4 className="font-semibold mb-2 text-sm text-primary">
                        {job.title === 'Robotics Intern' ? 'Good to Have' : 'Key Requirements'}
                      </h4>
                      <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground">
                        {job.requirements.map((req, index) => (
                          <li key={index}>{req}</li>
                        ))}
                      </ul>
                    </div>
                    <Button className="w-full bg-primary text-white font-bold py-3 rounded-xl mt-2 shadow-lg hover:bg-orange-600 transition-colors">
                      Apply Now
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Don't See Your Role?
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              We're always looking for exceptional talent. If you're passionate about 
              robotics and want to make an impact, we'd love to hear from you.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                className="bg-primary text-white font-bold py-3 px-8 rounded-xl shadow-lg hover:bg-orange-600 transition-colors"
              >
                Send Us Your Resume
              </Button>
              <Button 
                size="lg" 
                variant="outline"
              >
                Learn More About Us
              </Button>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default Careers;
