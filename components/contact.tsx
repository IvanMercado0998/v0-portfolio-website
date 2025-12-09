// implement glas morphism ONLY "Send Me a Message"
// implement proper commented code 
// create a detailed instruction modal form that sends an email using a free email service like FormSubmit or EmailJS
//DO NOT CHANGE LOGIC 
// DO NOT CHANGE THE STYLING 

'use client';

import { useState } from 'react';

export default function Contact() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSending, setIsSending] = useState(false);
  const [statusMessage, setStatusMessage] = useState('');

  const handleSendEmail = async (e) => {
    e.preventDefault();
    
    if (!formData.name || !formData.email || !formData.subject || !formData.message) {
      setStatusMessage('Please fill in all fields');
      return;
    }

    setIsSending(true);
    setStatusMessage('');

    try {
      // Using FormSubmit - completely free email service
      const response = await fetch('https://formsubmit.co/ajax/8b6953da88009881f509223efde2d9e1', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          subject: formData.subject,
          message: formData.message,
          _captcha: 'false' // Disable captcha for seamless experience
        }),
      });

      const result = await response.json();

      if (response.ok) {
        setStatusMessage('✓ Message sent successfully!');
        setTimeout(() => {
          setFormData({ name: '', email: '', subject: '', message: '' });
          setIsModalOpen(false);
          setStatusMessage('');
        }, 2000);
      } else {
        setStatusMessage('× Failed to send message. Please try again.');
      }
    } catch (error) {
      console.error('Error sending email:', error);
      setStatusMessage('× An error occurred. Please try again.');
    } finally {
      setIsSending(false);
    }
  };

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-white text-black">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="section-title text-black">Let's Work Together</h2>
        <p className="text-xl text-black/70 mb-8 leading-relaxed">
          I'm always interested in hearing about new projects and opportunities in automotive electronics, embedded
          systems, and engineering innovation.
        </p>

        <div className="glass-card p-8 border-2 border-black/20 mb-8 bg-white">
          <p className="text-black/70 mb-6">
            Whether you have a project in mind or just want to chat about engineering challenges, I'd love to hear from
            you.
          </p>
          <button
            onClick={() => setIsModalOpen(true)}
            className="inline-block px-8 py-3 bg-black text-white font-bold rounded-lg hover:bg-black/80 transition-all"
          >
            Send Email
          </button>
        </div>
        
        <div className="grid md:grid-cols-3 gap-6">
          <div className="glass-card p-6 border border-black/10 bg-white">
            <h4 className="text-black font-bold mb-2">Email</h4>
            <p className="text-black/60">ivanbmercado0998@
            gmail.com</p>
          </div>
          <div className="glass-card p-6 border border-black/10 bg-white">
            <h4 className="text-black font-bold mb-2">LinkedIn</h4>
            <p className="text-black/60">www.linkedin.com/in/ivan-mercado-</p>
          </div>
          <div className="glass-card p-6 border border-black/10 bg-white">
            <h4 className="text-black font-bold mb-2">GitHub</h4>
            <p className="text-black/60">github.com/
            IvanMercado0998</p>
          </div>
        </div>
      </div>

      {isModalOpen && (
        <div 
          className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4 z-50"
          onClick={() => setIsModalOpen(false)}
        >
          <div 
            className="bg-white rounded-2xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="p-6 border-b border-black/10">
              <div className="flex justify-between items-center">
                <h3 className="text-2xl font-bold text-black">Send Me a Message</h3>
                <button
                  onClick={() => setIsModalOpen(false)}
                  className="text-black/40 hover:text-black text-4xl leading-none font-light transition-colors"
                >
                  ×
                </button>
              </div>
            </div>

            <div className="p-6 space-y-5">
              <div>
                <label htmlFor="name" className="block text-sm font-semibold text-black mb-2">
                  Your Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-black/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent transition-all"
                  placeholder="John Doe"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-semibold text-black mb-2">
                  Your Email *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-black/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent transition-all"
                  placeholder="john@example.com"
                />
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-semibold text-black mb-2">
                  Subject *
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-black/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent transition-all"
                  placeholder="Project Inquiry"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-semibold text-black mb-2">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  rows="6"
                  className="w-full px-4 py-3 border border-black/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent resize-none transition-all"
                  placeholder="Tell me about your project or inquiry..."
                />
              </div>

              {statusMessage && (
                <div className={`p-3 rounded-lg text-sm font-medium ${
                  statusMessage.includes('✓') 
                    ? 'bg-green-50 text-green-800 border border-green-200' 
                    : 'bg-red-50 text-red-800 border border-red-200'
                }`}>
                  {statusMessage}
                </div>
              )}

              <div className="flex gap-3 pt-2">
                <button
                  onClick={handleSendEmail}
                  disabled={isSending}
                  className="flex-1 px-6 py-3 bg-black text-white font-bold rounded-lg hover:bg-black/90 transition-all transform hover:scale-[1.02] active:scale-[0.98] disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSending ? 'Sending...' : 'Send Message'}
                </button>
                <button
                  onClick={() => setIsModalOpen(false)}
                  disabled={isSending}
                  className="px-6 py-3 border-2 border-black/20 text-black font-bold rounded-lg hover:bg-black/5 transition-all disabled:opacity-50"
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
