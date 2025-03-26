import React from 'react';

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-primary text-center mb-8 uppercase tracking-wide">
          Contact
        </h2>
        <div className="max-w-md mx-auto">
          <form
            action="https://formspree.io/f/yourFormID"
            method="POST"
            className="space-y-4"
          >
            <div>
              <label className="block text-sm text-primary font-medium" htmlFor="name">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className="mt-1 block w-full border border-gray-300 rounded p-2"
                required
              />
            </div>
            <div>
              <label className="block text-sm text-primary font-medium" htmlFor="email">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="mt-1 block w-full border border-gray-300 rounded p-2"
                required
              />
            </div>
            <div>
              <label className="block text-sm text-primary font-medium" htmlFor="message">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows="4"
                className="mt-1 block w-full border border-gray-300 rounded p-2"
                required
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full border border-primary text-primary py-2 rounded hover:bg-primary hover:text-white transition"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;