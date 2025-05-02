import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const form = useRef();
  const [isSent, setIsSent] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_61wmwak", // Replace with your actual service ID
        "template_qlc7nll", // Replace with your actual template ID
        form.current,
        "a5ihxqBFFl15H_J2Z" // Replace with your actual public key
      )
      .then(
        () => {
          setIsSent(true);
          e.target.reset();
        },
        (error) => {
          console.error("Email sending failed:", error.text);
        }
      );
  };

  return (
    <div className="overflow-hidden px-6" id="contact">
      <div className="bg-white py-16 rounded-lg shadow-lg">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="space-y-6"
            >
              <h2 className="text-3xl font-semibold text-gray-800">
                Contact Me
              </h2>
              <form ref={form} onSubmit={sendEmail} className="space-y-4">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Name
                  </label>
                  <input
                    name="name"
                    type="text"
                    required
                    placeholder="Enter your name"
                    className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 sm:text-sm"
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Email
                  </label>
                  <input
                    name="email"
                    type="email"
                    required
                    placeholder="your@email.com"
                    className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 sm:text-sm"
                  />
                </div>
                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Message
                  </label>
                  <textarea
                    name="message"
                    required
                    placeholder="Enter your message"
                    className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 sm:text-sm"
                    rows={4}
                  />
                </div>
                <button
                  type="submit"
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-md"
                >
                  Submit
                </button>
                {isSent && (
                  <p className="text-green-600 pt-2">
                    Your message has been sent!
                  </p>
                )}
              </form>
            </motion.div>

            {/* Map */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="rounded-lg overflow-hidden h-full w-full"
            >
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3931.347141898781!2d38.74008827499196!3d9.036422590992188!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x164b8f609d161989%3A0x754e2e5b77dc266b!2sArada%2C%20Addis%20Ababa%2C%20Ethiopia!5e0!3m2!1sen!2set!4v1683057288423!5m2!1sen!2set"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Map of Arada, Addis Ababa"
              />
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
