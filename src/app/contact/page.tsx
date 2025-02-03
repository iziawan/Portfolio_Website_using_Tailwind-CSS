import React from 'react';

const Contact = () => {
  return (
    <main className="relative min-h-screen bg-pink-100 py-10">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row lg:space-x-8 gap-10 lg:gap-12 space-y-8 lg:space-y-0 px-4 md:px-6 lg:px-8">

        {/* Embedded Google Map (On the Left Side) */}
        <div className="w-full lg:w-1/2 relative">
          <h2 className="text-2xl font-semibold mb-4 lg:mb-6 lg:absolute lg:top-0 text-center lg:text-left">Our Location</h2>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d241317.11609991368!2d72.74109971052927!3d33.684420841368224!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38dfbfd53138e75d%3A0x68f7f4425d2909bb!2sKarachi%2C%20Pakistan!5e0!3m2!1sen!2s!4v1618008379721!5m2!1sen!2s"
            width="100%"
            height="400"
            className="border-0 rounded-lg shadow-lg mt-6 lg:mt-10"
            loading="lazy"
            allowFullScreen
          ></iframe>
        </div>

        {/* Contact Form (On the Right Side) */}
        <div className="w-full lg:w-1/2 bg-white p-6 md:p-8 lg:p-10 rounded-lg shadow-md">
          <h1 className="text-3xl font-bold mb-6 text-center lg:text-left">Contact Us</h1>

          <form className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className="mt-1 p-3 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                required
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="mt-1 p-3 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                required
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                className="mt-1 p-3 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"

                required
              ></textarea>
            </div>
            <div>
              <button
                type="submit"
                className="w-full py-3 px-4 bg-indigo-600 text-white font-semibold rounded-md shadow hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition ease-in-out duration-150"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>

      </div>
    </main>
  );
};

export default Contact;
