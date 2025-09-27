import React from 'react';
import { motion } from 'framer-motion';
import { 
  Zap, 
  Shield, 
  Cpu, 
  Globe, 
  BarChart3, 
  Users 
} from 'lucide-react';
import Navbar from '@/components/Navbar';

const Features = () => {
  const features = [
    {
      icon: Zap,
      title: "Lightning Fast Performance",
      description: "Experience blazing fast load times with our optimized infrastructure. Built for speed and reliability.",
      color: "text-yellow-500"
    },
    {
      icon: Shield,
      title: "Advanced Security",
      description: "Enterprise-grade security with end-to-end encryption. Your data is protected with military-grade security protocols.",
      color: "text-green-500"
    },
    {
      icon: Cpu,
      title: "AI-Powered Intelligence",
      description: "Leverage artificial intelligence to automate tasks and gain valuable insights from your data.",
      color: "text-blue-500"
    },
    {
      icon: Globe,
      title: "Global Accessibility",
      description: "Access your platform from anywhere in the world with 99.9% uptime guarantee and global CDN.",
      color: "text-purple-500"
    },
    {
      icon: BarChart3,
      title: "Advanced Analytics",
      description: "Get detailed insights and analytics with real-time reporting and customizable dashboards.",
      color: "text-orange-500"
    },
    {
      icon: Users,
      title: "Team Collaboration",
      description: "Seamless team collaboration with real-time sync, comments, and project management tools.",
      color: "text-pink-500"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { y: 40, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] }
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white">
      <Navbar />
      
      <div className="pt-24 pb-16 px-6">
        <div className="container mx-auto max-w-7xl">
          {/* Header Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="text-center mb-16"
          >
            <h1 className="text-4xl md:text-6xl font-bold text-convrt-dark-blue mb-6">
              Powerful <span className="text-convrt-purple">Features</span>
            </h1>
            <p className="text-xl text-convrt-dark-blue/70 max-w-3xl mx-auto leading-relaxed">
              Discover the comprehensive suite of tools and capabilities designed to 
              transform your workflow and accelerate your success.
            </p>
          </motion.div>

          {/* Features Grid */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {features.map((feature, index) => {
              const IconComponent = feature.icon;
              return (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  whileHover={{ 
                    y: -5, 
                    transition: { duration: 0.2 } 
                  }}
                  className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
                >
                  <div className={`w-16 h-16 rounded-2xl bg-gray-50 flex items-center justify-center mb-6 ${feature.color}`}>
                    <IconComponent size={32} />
                  </div>
                  
                  <h3 className="text-xl font-bold text-convrt-dark-blue mb-4">
                    {feature.title}
                  </h3>
                  
                  <p className="text-convrt-dark-blue/70 leading-relaxed">
                    {feature.description}
                  </p>
                </motion.div>
              );
            })}
          </motion.div>

          {/* CTA Section */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            viewport={{ once: true }}
            className="text-center mt-20"
          >
            <div className="bg-gradient-to-r from-convrt-purple to-convrt-dark-blue rounded-3xl p-12 text-white">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Ready to Experience These Features?
              </h2>
              <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
                Join thousands of users who are already leveraging our powerful platform 
                to achieve their goals faster and more efficiently.
              </p>
              <motion.a
                href="/"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center px-8 py-4 bg-white text-convrt-dark-blue font-semibold rounded-full hover:bg-gray-100 transition-colors"
              >
                Get Started Today
              </motion.a>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Features;