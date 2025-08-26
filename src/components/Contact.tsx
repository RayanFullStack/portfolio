import React, { useState } from 'react';
import { Github, Mail, Send, CheckCircle } from 'lucide-react';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    emailjs.send(
      'service_dgmncua',          // Service ID
      'template_10tx44r',         // Template ID
      {
        from_name: formData.name,
        from_email: formData.email,
        message: formData.message,
        to_email: 'rayanf.dev@gmail.com',
        time: new Date().toLocaleString()
      },
      'RpuFf9OUL5cKZeskW'        // Public Key
    ).then(() => {
      setIsSubmitted(true);
      setTimeout(() => {
        setIsSubmitted(false);
        setFormData({ name: '', email: '', message: '' });
      }, 3000);
    }, (error) => {
      console.error(error);
      alert('An error occurred, please try again.');
    });
  };

  return (
    <section id="contact" className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">📬 Contact</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Do you have a project in mind? Feel free to reach out and let’s talk about 
            your needs and how I can help.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-white mb-4">Let’s work together</h3>
              <p className="text-gray-300 leading-relaxed mb-6">
                I’m always open to new opportunities and collaborations. 
                Whether it’s for a web project, automation, or technical consulting, 
                I’d be happy to discuss it with you.
              </p>
            </div>

            <div className="space-y-4">
              <a
                href="https://github.com/RayanFullStack"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center p-4 bg-gray-800 rounded-lg hover:bg-gray-700 transition-colors duration-200 group border border-gray-700"
              >
                <div className="flex items-center justify-center w-12 h-12 bg-purple-600 text-white rounded-lg mr-4 group-hover:bg-purple-700 transition-colors duration-200">
                  <Github size={24} />
                </div>
                <div>
                  <h4 className="font-semibold text-white">GitHub</h4>
                  <p className="text-gray-300 text-sm">Check out my open-source projects</p>
                </div>
              </a>

              <div className="flex items-center p-4 bg-gray-800 rounded-lg border border-gray-700">
                <div className="flex items-center justify-center w-12 h-12 bg-indigo-600 text-white rounded-lg mr-4">
                  <Mail size={24} />
                </div>
                <div>
                  <h4 className="font-semibold text-white">Email</h4>
                  <p className="text-gray-300 text-sm">Use the form on the right</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gray-800 rounded-2xl p-8 border border-gray-700">
            {isSubmitted ? (
              <div className="text-center py-12">
                <CheckCircle className="mx-auto mb-4 text-green-500" size={48} />
                <h3 className="text-xl font-bold text-white mb-2">Message sent!</h3>
                <p className="text-gray-300">I’ll get back to you as soon as possible.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-200 text-white placeholder-gray-400"
                    placeholder="Your name"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-200 text-white placeholder-gray-400"
                    placeholder="your@email.com"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-200 resize-none text-white placeholder-gray-400"
                    placeholder="Describe your project or request..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full flex items-center justify-center px-6 py-3 bg-purple-600 text-white font-medium rounded-lg hover:bg-purple-700 transition-all duration-200 shadow-lg hover:shadow-purple-500/25"
                >
                  <Send className="mr-2" size={20} />
                  Send Message
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
