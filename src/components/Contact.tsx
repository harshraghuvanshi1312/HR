import { Mail, MapPin, Phone, Github, Linkedin, Instagram, MessageCircle } from 'lucide-react';
import { useState } from 'react';
import { projectId, publicAnonKey } from '../utils/supabase/info';

export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch(
        `https://${projectId}.supabase.co/functions/v1/make-server-ae40af9c/contact`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${publicAnonKey}`,
          },
          body: JSON.stringify(formData),
        }
      );

      if (response.ok) {
        alert('Thank you for your message! I will get back to you soon.');
        setFormData({ name: '', email: '', message: '' });
      } else {
        const error = await response.text();
        console.error('Error submitting form:', error);
        alert('There was an error submitting your message. Please try again.');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      alert('There was an error submitting your message. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const contactInfo = [
    { icon: <Mail size={20} />, label: 'Email', value: 'harshraghuvanshi1312@gmail.com', href: 'mailto:harshraghuvanshi1312@gmail.com' },
    { icon: <Phone size={20} />, label: 'Phone', value: '+919589015025', href: 'tel:+919589015025' },
    { icon: <MapPin size={20} />, label: 'Location', value: 'Dhar (M. P.), India - 454001', href: 'https://maps.app.goo.gl/tEKYnTkYkd7ZoSuk8' },
  ];

  const socialLinks = [
    { icon: <Github size={24} />, href: 'https://github.com/harshraghuvanshi1312/', label: 'GitHub' },
    { icon: <Linkedin size={24} />, href: 'https://www.linkedin.com/in/harshraghuvanshi1312/', label: 'LinkedIn' },
    { icon: <Instagram size={24} />, href: 'https://www.instagram.com/_harsh_r_/', label: 'Instagram' },
  ];

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl mb-4 text-gray-900">Get In Touch</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Have a project in mind or want to collaborate? I'd love to hear from you!
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl mb-6 text-gray-900">Contact Information</h3>
            <div className="space-y-4 mb-8">
              {contactInfo.map((item, index) => (
                <div key={index} className="flex items-start gap-4">
                  <div className="flex items-center justify-center w-10 h-10 bg-gray-100 rounded-lg text-gray-900 flex-shrink-0">
                    {item.icon}
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">{item.label}</p>
                    {item.href ? (
                      <a
                        href={item.href}
                        className="text-gray-900 hover:text-gray-600 transition-colors"
                      >
                        {item.value}
                      </a>
                    ) : (
                      <p className="text-gray-900">{item.value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            <div>
              <h4 className="text-lg mb-4 text-gray-900">Follow Me</h4>
              <div className="flex gap-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center w-12 h-12 bg-gray-100 rounded-lg text-gray-900 hover:bg-gray-900 hover:text-white transition-colors"
                    aria-label={social.label}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>

              <div className="mt-6">
                <a
                  href="https://wa.me/919589015025"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 w-full px-4 py-3 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-colors"
                >
                  <MessageCircle size={20} />
                  <span>Chat on WhatsApp</span>
                </a>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-2xl mb-6 text-gray-900">Send a Message</h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm mb-2 text-gray-700">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent"
                  placeholder="Enter your Name"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm mb-2 text-gray-700">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent"
                  placeholder="Enter Your Email"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm mb-2 text-gray-700">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent resize-none"
                  placeholder="Tell me about your project..."
                />
              </div>
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full px-6 py-3 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </button>
            </form>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-gray-200 text-center text-gray-600">
          <p>© 2026 Harsh Raghuvanshi. All rights reserved.</p>
        </div>
      </div>
    </section>
  );
}