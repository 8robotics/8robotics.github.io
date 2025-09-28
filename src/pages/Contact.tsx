import React, { useState } from 'react';
import Layout from '@/Layout';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Mail, Phone, MapPin } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { ShaderAnimation } from "@/components/ui/shader-lines";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message sent!",
      description: "Thank you for your interest. We'll get back to you soon.",
    });
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <Layout>
      {/* Hero Section */}
        <section className="py-20 bg-gradient-tech">
          <div className="container mx-auto px-4">
            <div className="relative flex h-[300px] md:h-[400px] w-full flex-col items-center justify-center overflow-hidden rounded-xl mb-8">
              <ShaderAnimation colorScheme="green-blue" />
              <span className="pointer-events-none z-10 text-center text-5xl md:text-7xl leading-none font-semibold tracking-tighter whitespace-pre-wrap text-white drop-shadow-lg">
                Get in Touch
              </span>
            </div>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-center">
              Ready to discuss partnerships, investment opportunities, or learn more about 
              our humanoid robotics technology? We'd love to hear from you.
            </p>
          </div>
        </section>

      {/* Contact Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            <div className="flex flex-col gap-8">
              {/* Contact Form */}
              <Card className="hover-lift">
                <CardHeader>
                  <CardTitle className="text-2xl">Send us a message</CardTitle>
                  <p className="text-muted-foreground">
                    Whether you're interested in partnerships, investments, or just want to learn more, 
                    we're here to help.
                  </p>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <Input
                        placeholder="Your Name"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        required
                      />
                    </div>
                    <div>
                      <Input
                        type="email"
                        placeholder="your@email.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        required
                      />
                    </div>
                    <div>
                      <Textarea
                        placeholder="Tell us about your interest in 8robotics..."
                        rows={4}
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        required
                      />
                    </div>
                    <Button 
                      type="submit" 
                      className="w-full bg-orange-500 text-white hover:bg-orange-600 hover:shadow-glow"
                    >
                      Send Message
                    </Button>
                  </form>
                </CardContent>
              </Card>
              {/* Newsletter Signup */}
              <Card className="bg-gradient-tech border-0 hover-lift">
                <CardContent className="p-6">
                  <h3 className="font-semibold mb-2">Stay Updated</h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    Subscribe to our newsletter for the latest updates on our progress.
                  </p>
                  <div className="flex space-x-2">
                    <Input placeholder="Enter your email" className="flex-1" />
                    <Button className="bg-orange-500 text-white hover:bg-orange-600">Subscribe</Button>
                  </div>
                </CardContent>
              </Card>
            </div>
            {/* Contact Information */}
            <div className="space-y-8">
              <Card className="hover-lift">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-4">
                    <Mail className="w-8 h-8 text-primary" />
                    <div>
                      <h3 className="font-semibold">Email Us</h3>
                      <p className="text-muted-foreground">info@8robotics.tech</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="hover-lift">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-4">
                    <Phone className="w-8 h-8 text-primary" />
                    <div>
                      <h3 className="font-semibold">Call Us</h3>
                      <p className="text-muted-foreground">+98 903 134 7431</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="hover-lift">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-4">
                    <MapPin className="w-8 h-8 text-primary" />
                    <div>
                      <h3 className="font-semibold">Visit Us</h3>
                      <p className="text-muted-foreground">
                        Sharif Science and Technology Park,<br />
                        Tehran, Iran
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Partnership Information */}
              <Card className="border-primary/20 hover-lift">
                <CardContent className="p-6">
                  <h3 className="font-semibold mb-2 text-primary">Partnership Opportunities</h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    We're actively seeking strategic partners, investors, and collaborators 
                    in the robotics ecosystem.
                  </p>
                  <ul className="text-sm space-y-2 text-muted-foreground">
                    <li>• Technology partnerships</li>
                    <li>• Investment opportunities</li>
                    <li>• Research collaborations</li>
                    <li>• Strategic alliances</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
