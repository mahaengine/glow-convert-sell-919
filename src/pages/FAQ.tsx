import React from 'react';
import { motion } from 'framer-motion';
import { 
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { 
  Mail, 
  MessageCircle, 
  Phone, 
  HelpCircle 
} from 'lucide-react';
import Navbar from '@/components/Navbar';

const FAQ = () => {
  const faqs = [
    {
      question: "What is Convrt.ai and how does it work?",
      answer: "Convrt.ai is an AI-powered organic outbound platform that helps sales teams build trust and influence with potential buyers before making contact. Our AI analyzes social signals and relationship data to create personalized outreach strategies that feel natural and authentic."
    },
    {
      question: "How do I get started with the platform?",
      answer: "Getting started is simple! Sign up for a free account, connect your social media profiles and CRM, and our AI will begin analyzing your network and prospects. You can start your first campaign within minutes of setup."
    },
    {
      question: "What integrations do you support?",
      answer: "We integrate with popular CRM systems like Salesforce, HubSpot, and Pipedrive, as well as social platforms including LinkedIn, Twitter, and email providers. Our API also allows for custom integrations with your existing tech stack."
    },
    {
      question: "Is my data secure and private?",
      answer: "Absolutely. We use enterprise-grade security with end-to-end encryption, SOC 2 compliance, and GDPR compliance. Your data is never shared with third parties and is stored securely with regular security audits and monitoring."
    },
    {
      question: "What kind of results can I expect?",
      answer: "Our users typically see 15x higher response rates compared to traditional cold outreach, with 3-5x improvement in meeting booking rates. Results vary by industry and implementation, but most users see significant improvements within the first 30 days."
    },
    {
      question: "Do you offer a free trial?",
      answer: "Yes! We offer a 14-day free trial with full access to all features. No credit card required to start. You can test the platform with up to 100 prospects and see the results for yourself."
    },
    {
      question: "How much does the platform cost?",
      answer: "We offer flexible pricing plans starting at $49/month for individual users, with team and enterprise plans available. All plans include our core AI features, with higher tiers offering advanced analytics and priority support."
    },
    {
      question: "Can I cancel my subscription anytime?",
      answer: "Yes, you can cancel your subscription at any time with no cancellation fees. Your account will remain active until the end of your current billing period, and you can export your data before cancellation."
    },
    {
      question: "What support options are available?",
      answer: "We provide 24/7 email support, live chat during business hours, comprehensive documentation, video tutorials, and weekly group training sessions. Enterprise customers also get dedicated account management and phone support."
    },
    {
      question: "How does the AI personalization work?",
      answer: "Our AI analyzes publicly available social media data, mutual connections, shared interests, recent activity, and company news to create highly personalized outreach messages. The AI learns from successful interactions to continuously improve personalization quality."
    }
  ];

  const contactOptions = [
    {
      icon: Mail,
      title: "Email Support",
      description: "Get help via email",
      contact: "support@convrt.ai",
      color: "text-blue-500"
    },
    {
      icon: MessageCircle,
      title: "Live Chat",
      description: "Chat with our team",
      contact: "Available 9AM-5PM EST",
      color: "text-green-500"
    },
    {
      icon: Phone,
      title: "Phone Support",
      description: "Call us directly",
      contact: "+1 (555) 123-4567",
      color: "text-purple-500"
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
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] }
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white">
      <Navbar />
      
      <div className="pt-24 pb-16 px-6">
        <div className="container mx-auto max-w-4xl">
          {/* Header Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-convrt-purple/10 text-convrt-purple mb-6">
              <HelpCircle className="w-4 h-4 mr-2" />
              <span className="text-sm font-medium">Frequently Asked Questions</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-convrt-dark-blue mb-6">
              Got <span className="text-convrt-purple">Questions</span>?
            </h1>
            <p className="text-xl text-convrt-dark-blue/70 max-w-2xl mx-auto leading-relaxed">
              Find answers to the most common questions about our platform, features, and pricing.
            </p>
          </motion.div>

          {/* FAQ Section */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="mb-20"
          >
            <Accordion type="single" collapsible className="w-full space-y-4">
              {faqs.map((faq, index) => (
                <motion.div key={index} variants={itemVariants}>
                  <AccordionItem 
                    value={`item-${index}`}
                    className="bg-white rounded-2xl border border-gray-100 px-6 shadow-sm hover:shadow-md transition-all duration-200"
                  >
                    <AccordionTrigger className="text-left font-semibold text-convrt-dark-blue hover:text-convrt-purple transition-colors py-6">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-convrt-dark-blue/70 leading-relaxed pb-6">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                </motion.div>
              ))}
            </Accordion>
          </motion.div>

          {/* Contact Section */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            viewport={{ once: true }}
            className="bg-gradient-to-r from-convrt-purple to-convrt-dark-blue rounded-3xl p-12 text-white"
          >
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Still Have Questions?
              </h2>
              <p className="text-xl opacity-90 max-w-2xl mx-auto">
                Can't find what you're looking for? Our support team is here to help you get the answers you need.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {contactOptions.map((option, index) => {
                const IconComponent = option.icon;
                return (
                  <motion.div
                    key={index}
                    whileHover={{ y: -5 }}
                    transition={{ duration: 0.2 }}
                    className="text-center"
                  >
                    <div className="bg-white/10 rounded-2xl p-6 backdrop-blur-sm">
                      <div className={`w-16 h-16 rounded-full bg-white/20 flex items-center justify-center mx-auto mb-4 ${option.color}`}>
                        <IconComponent size={32} className="text-white" />
                      </div>
                      <h3 className="text-xl font-semibold mb-2">{option.title}</h3>
                      <p className="text-white/80 mb-4">{option.description}</p>
                      <p className="text-white font-medium">{option.contact}</p>
                    </div>
                  </motion.div>
                );
              })}
            </div>

            <div className="text-center mt-12">
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

export default FAQ;