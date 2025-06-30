import React, { useState } from "react";
import {
  ChevronDown,
  ChevronUp,
  Check,
  Globe,
  Shield,
  Zap,
  Server,
  Clock,
  Users,
} from "lucide-react";

const Index = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const faqData = [
    {
      question: "What is China web hosting and why do I need it?",
      answer:
        "China web hosting refers to web hosting services located within mainland China or Hong Kong. It's essential for websites targeting Chinese audiences as it provides faster loading speeds, better SEO rankings in Chinese search engines like Baidu, and compliance with local regulations.",
    },
    {
      question:
        "What's the difference between web hosting Hong Kong and hosting China?",
      answer:
        "Web hosting Hong Kong typically offers easier setup without requiring ICP licensing, while hosting China provides the fastest speeds for mainland Chinese users but requires ICP registration. Hong Kong hosting is often preferred for international businesses targeting Chinese markets.",
    },
    {
      question:
        "Do I need special licensing for virtual server hosting Hong Kong?",
      answer:
        "Virtual server hosting Hong Kong generally doesn't require ICP licensing, making it more accessible for international businesses. However, if you plan to target mainland China specifically, you may need to consider compliance requirements.",
    },
    {
      question: "How does email hosting in China work?",
      answer:
        "Email hosting in China involves hosting your email servers within Chinese data centers, ensuring faster email delivery and better compliance with local regulations. This is crucial for businesses operating in China or communicating frequently with Chinese partners.",
    },
    {
      question: "What are the benefits of choosing ARZ Host for China hosting?",
      answer:
        "ARZ Host provides reliable China-based hosting solutions with 99.9% uptime, 24/7 support, and competitive pricing. Our hosting plans are optimized for both Chinese and international audiences, offering the best of both worlds.",
    },
  ];

  const pricingPlans = [
    {
      name: "Starter",
      price: "$9.99",
      period: "/month",
      ram: "2 GB",
      storage: "50 GB SSD",
      bandwidth: "1 TB",
      cores: "1 vCPU",
      location: "Hong Kong",
      link: "https://arzhost.com/hosting/",
      features: ["Free SSL Certificate", "Daily Backups", "24/7 Support"],
    },
    {
      name: "Professional",
      price: "$19.99",
      period: "/month",
      ram: "4 GB",
      storage: "100 GB SSD",
      bandwidth: "2 TB",
      cores: "2 vCPU",
      location: "China/Hong Kong",
      link: "https://arzhost.com/hosting/",
      features: [
        "Free SSL Certificate",
        "Daily Backups",
        "24/7 Support",
        "CDN Included",
      ],
      popular: true,
    },
    {
      name: "Enterprise",
      price: "$39.99",
      period: "/month",
      ram: "8 GB",
      storage: "200 GB SSD",
      bandwidth: "5 TB",
      cores: "4 vCPU",
      location: "China/Hong Kong",
      link: "https://arzhost.com/hosting/",
      features: [
        "Free SSL Certificate",
        "Daily Backups",
        "24/7 Support",
        "CDN Included",
        "Priority Support",
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white shadow-sm border-b border-seafoam">
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <a
                href="https://arzhost.com/"
                className="text-2xl font-bold text-deepBlue"
              >
                ARZ Host
              </a>
            </div>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                <a
                  href="#home"
                  className="text-deepBlue hover:text-aqua px-3 py-2 rounded-md text-sm font-medium"
                >
                  Home
                </a>
                <a
                  href="https://www.arzhost.com/about-us/"
                  className="text-deepBlue hover:text-aqua px-3 py-2 rounded-md text-sm font-medium"
                >
                  About Us
                </a>
                <a
                  href="https://www.arzhost.com/contact-us/"
                  className="text-deepBlue hover:text-aqua px-3 py-2 rounded-md text-sm font-medium"
                >
                  Contact Us
                </a>
                <a
                  href="https://www.arzhost.com/terms-conditions/"
                  className="text-deepBlue hover:text-aqua px-3 py-2 rounded-md text-sm font-medium"
                >
                  Terms
                </a>
                <a
                  href="https://www.arzhost.com/privacy-policy/"
                  className="text-deepBlue hover:text-aqua px-3 py-2 rounded-md text-sm font-medium"
                >
                  Privacy
                </a>
              </div>
            </div>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <section
        id="home"
        className="bg-gradient-to-br from-deepBlue to-aqua text-white py-20"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Premium <span className="text-seafoam">China Web Hosting</span>{" "}
              Solutions
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
              Experience lightning-fast <strong>web hosting in China</strong>{" "}
              and Hong Kong with 99.9% uptime guarantee. Perfect for businesses
              targeting Chinese markets.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://arzhost.com/hosting/china-based-web-server-hosting/"
                className="bg-white text-deepBlue px-8 py-3 rounded-lg font-semibold hover:bg-seafoam hover:text-white transition duration-300"
              >
                Get Started Today
              </a>
              <a
                href="https://arzhost.com/"
                className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-deepBlue transition duration-300"
              >
                View Our Hosting Services
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-deepBlue mb-4">
              Why Choose Our <span className="text-aqua">Hosting China</span>{" "}
              Services?
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Our <strong>virtual server hosting Hong Kong</strong> and China
              solutions are designed for maximum performance and reliability.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-lg text-center">
              <div className="bg-aqua text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Zap className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-semibold text-deepBlue mb-3">
                Lightning Fast Speed
              </h3>
              <p className="text-gray-600">
                Experience blazing fast loading times with our optimized{" "}
                <strong>web hosting Hong Kong</strong> infrastructure and CDN
                integration.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-lg text-center">
              <div className="bg-aqua text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-semibold text-deepBlue mb-3">
                Enterprise Security
              </h3>
              <p className="text-gray-600">
                Advanced security features including SSL certificates, DDoS
                protection, and regular security updates for your peace of mind.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-lg text-center">
              <div className="bg-aqua text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-semibold text-deepBlue mb-3">
                24/7 Expert Support
              </h3>
              <p className="text-gray-600">
                Our dedicated team provides round-the-clock support for all your{" "}
                <strong>email hosting in China</strong> and server needs.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-lg text-center">
              <div className="bg-aqua text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Globe className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-semibold text-deepBlue mb-3">
                Global Reach
              </h3>
              <p className="text-gray-600">
                Strategic data center locations in China and Hong Kong ensure
                optimal performance for your target audience.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-lg text-center">
              <div className="bg-aqua text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Server className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-semibold text-deepBlue mb-3">
                Scalable Infrastructure
              </h3>
              <p className="text-gray-600">
                Easily scale your resources as your business grows with our
                flexible hosting solutions and upgrade options.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-lg text-center">
              <div className="bg-aqua text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-semibold text-deepBlue mb-3">
                99.9% Uptime
              </h3>
              <p className="text-gray-600">
                Guaranteed uptime with redundant systems and proactive
                monitoring to keep your website always accessible.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-deepBlue mb-6">
                Unlock the Power of{" "}
                <span className="text-aqua">China Web Hosting</span>
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                "Choosing the right hosting provider can make or break your
                online presence in the Chinese market. Our specialized{" "}
                <strong>china web hosting</strong> solutions ensure your website
                performs optimally for Chinese users."
              </p>

              <div className="space-y-4">
                <div className="flex items-start">
                  <Check className="text-green-500 w-6 h-6 mt-1 mr-3 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-deepBlue">
                      Improved SEO Rankings
                    </h3>
                    <p className="text-gray-600">
                      Better visibility on{" "}
                      <a
                        href="https://en.wikipedia.org/wiki/Baidu"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-aqua underline"
                      >
                        Baidu
                      </a>{" "}
                      and other Chinese search engines with local hosting.
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <Check className="text-green-500 w-6 h-6 mt-1 mr-3 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-deepBlue">
                      Faster Loading Times
                    </h3>
                    <p className="text-gray-600">
                      Reduced latency for Chinese visitors with servers located
                      in strategic Asian locations.
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <Check className="text-green-500 w-6 h-6 mt-1 mr-3 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-deepBlue">
                      Compliance Ready
                    </h3>
                    <p className="text-gray-600">
                      Meet local regulations and requirements for operating
                      websites in the Chinese market.
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <Check className="text-green-500 w-6 h-6 mt-1 mr-3 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-deepBlue">
                      Enhanced User Experience
                    </h3>
                    <p className="text-gray-600">
                      Provide seamless browsing experience with minimal downtime
                      and optimal performance.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 p-8 rounded-lg">
              <h3 className="text-2xl font-bold text-deepBlue mb-6">
                Watch: Web Hosting in China Explained
              </h3>
              <div className="aspect-video">
                <iframe
                  width="100%"
                  height="100%"
                  src="https://www.youtube.com/embed/6hH8vbEUEUk"
                  title="Web Hosting in China - Complete Guide"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="rounded-lg"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-deepBlue mb-4">
              Choose Your Perfect{" "}
              <span className="text-aqua">Hosting Plan</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Flexible and affordable pricing for every business size. All plans
              include our premium features and 24/7 support.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {pricingPlans.map((plan, index) => (
              <div
                key={index}
                className={`bg-white rounded-lg shadow-lg overflow-hidden ${plan.popular ? "ring-2 ring-aqua transform scale-105" : ""}`}
              >
                {plan.popular && (
                  <div className="bg-aqua text-white text-center py-2 font-semibold">
                    Most Popular
                  </div>
                )}

                <div className="p-8">
                  <h3 className="text-2xl font-bold text-deepBlue mb-2">
                    {plan.name}
                  </h3>
                  <div className="flex items-baseline mb-6">
                    <span className="text-4xl font-bold text-deepBlue">
                      {plan.price}
                    </span>
                    <span className="text-gray-600 ml-1">{plan.period}</span>
                  </div>

                  <div className="space-y-3 mb-8">
                    <div className="flex justify-between">
                      <span className="text-gray-600">RAM:</span>
                      <span className="font-semibold text-deepBlue">
                        {plan.ram}
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Storage:</span>
                      <span className="font-semibold text-deepBlue">
                        {plan.storage}
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Bandwidth:</span>
                      <span className="font-semibold text-deepBlue">
                        {plan.bandwidth}
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">CPU Cores:</span>
                      <span className="font-semibold text-deepBlue">
                        {plan.cores}
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Location:</span>
                      <span className="font-semibold text-deepBlue">
                        {plan.location}
                      </span>
                    </div>
                  </div>

                  <ul className="space-y-2 mb-8">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center">
                        <Check className="text-green-500 w-5 h-5 mr-2" />
                        <span className="text-gray-600">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <a
                    href={plan.link}
                    className={`w-full py-3 px-6 rounded-lg font-semibold text-center block transition duration-300 ${
                      plan.popular
                        ? "bg-aqua text-white hover:bg-deepBlue"
                        : "bg-deepBlue text-white hover:bg-aqua"
                    }`}
                  >
                    Choose Plan
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-deepBlue mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-lg text-gray-600">
              Everything you need to know about our China web hosting services
            </p>
          </div>

          <div className="space-y-4">
            {faqData.map((faq, index) => (
              <div
                key={index}
                className="bg-white border border-seafoam rounded-lg shadow-sm"
              >
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-gray-50 focus:outline-none"
                >
                  <span className="font-semibold text-deepBlue">
                    {faq.question}
                  </span>
                  {openFaq === index ? (
                    <ChevronUp className="w-5 h-5 text-aqua" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-aqua" />
                  )}
                </button>

                {openFaq === index && (
                  <div className="px-6 pb-4">
                    <p
                      className="text-gray-600"
                      dangerouslySetInnerHTML={{ __html: faq.answer }}
                    ></p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-deepBlue text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Ready to Get Started?
              </h2>
              <p className="text-lg mb-8 text-gray-300">
                Join thousands of satisfied customers who trust{" "}
                <a
                  href="https://arzhost.com/"
                  className="text-seafoam underline"
                >
                  ARZ Host
                </a>{" "}
                for their China web hosting needs. Our team is ready to help you
                succeed online.
              </p>

              <div className="space-y-4">
                <div>
                  <h3 className="font-semibold text-seafoam mb-2">Website</h3>
                  <a
                    href="https://arzhost.com/"
                    className="text-white hover:text-seafoam"
                  >
                    arzhost.com
                  </a>
                </div>
                <div>
                  <h3 className="font-semibold text-seafoam mb-2">Phone</h3>
                  <a
                    href="tel:+16315948060"
                    className="text-white hover:text-seafoam"
                  >
                    +1 (631) 594-8060
                  </a>
                </div>
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-sm p-8 rounded-lg">
              <h3 className="text-2xl font-bold mb-6">
                Get Expert Consultation
              </h3>
              <p className="text-gray-300 mb-6">
                Not sure which plan is right for you? Our hosting experts are
                here to help you choose the perfect solution for your business
                needs.
              </p>
              <a
                href="https://www.arzhost.com/contact-us/"
                className="bg-seafoam text-deepBlue px-8 py-3 rounded-lg font-semibold hover:bg-white transition duration-300 inline-block"
              >
                Contact Our Experts
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">ARZ Host</h3>
              <p className="text-gray-400">
                Premium China web hosting solutions for businesses of all sizes.
              </p>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <a
                    href="https://www.arzhost.com/about-us/"
                    className="hover:text-white"
                  >
                    About Us
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.arzhost.com/contact-us/"
                    className="hover:text-white"
                  >
                    Contact Us
                  </a>
                </li>
                <li>
                  <a href="https://arzhost.com/" className="hover:text-white">
                    Our Services
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Legal</h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <a
                    href="https://www.arzhost.com/terms-conditions/"
                    className="hover:text-white"
                  >
                    Terms & Conditions
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.arzhost.com/privacy-policy/"
                    className="hover:text-white"
                  >
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.arzhost.com/disclaimer/"
                    className="hover:text-white"
                  >
                    Disclaimer
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Hosting Services</h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <a
                    href="https://arzhost.com/hosting/china-based-web-server-hosting/"
                    className="hover:text-white"
                  >
                    China Web Hosting
                  </a>
                </li>
                <li>
                  <a href="https://arzhost.com/" className="hover:text-white">
                    Hong Kong Hosting
                  </a>
                </li>
                <li>
                  <a href="https://arzhost.com/" className="hover:text-white">
                    Virtual Servers
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>
              &copy; 2024 ARZ Host. All rights reserved. Professional China web
              hosting solutions.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
