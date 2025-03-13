import React, { useState } from "react";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import contactwalla from '../assets/contact.png';
import emailjs from 'emailjs-com';

const ContactWalla = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Send email via EmailJS
    emailjs.sendForm(
      "service_glslmbq", // Replace with your EmailJS service ID
      "template_30g8l7d", // Replace with your EmailJS template ID
      e.target, // The form itself
      "bXaGFjRFh8W1Wu6IX" // Replace with your EmailJS user ID
    )
    .then((result) => {
      console.log(result.text);
      toast.success("Message sent successfully!", { position: "top-right" });

      // Clear input fields after submission
      setFormData({ name: "", email: "", message: "" });
    }, (error) => {
      console.log(error.text);
      toast.error("Something went wrong, please try again.", { position: "top-right" });
    });
  };

  return (
    <>
      <section className="bg-gradient-to-r from-gray-400 to-gray-600 pt-20 px-6 text-white" id="contact">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 pb-5">
          {/* Left Side - Contact Info */}
          <div className="space-y-6 relative">
            <h2 className="text-4xl font-bold">Get in Touch</h2>
            <p className="text-lg text-gray-200">
              Have a question or want to work together? Feel free to reach out!
            </p>

            {/* Contact Details */}
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <Phone className="text-yellow-400" />
                <span className="text-lg">+123 456 7890</span>
              </div>
              <div className="flex items-center gap-4">
                <Mail className="text-yellow-400" />
                <span className="text-lg">contact@flowsync.com</span>
              </div>
              <div className="flex items-center gap-4">
                <MapPin className="text-yellow-400" />
                <span className="text-lg">123 Business St, Tech City</span>
              </div>
            </div>
            <img src={contactwalla} alt="" className="contactImage absolute bottom-0 left-90 w-90 rotate-315 z-0" />
          </div>

          {/* Right Side - Contact Form */}
          <div className="bg-white rounded-2xl shadow-2xl p-8 text-gray-900 relative">
            <h3 className="text-2xl font-bold mb-4 text-purple-600">Send a Message</h3>
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div>
                <label className="block text-gray-700 font-semibold">Your Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Enter your name"
                  className="w-full mt-2 p-3 border rounded-lg focus:ring-2 focus:ring-purple-400 focus:outline-none"
                />
              </div>
              <div>
                <label className="block text-gray-700 font-semibold">Your Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="you@example.com"
                  className="w-full mt-2 p-3 border rounded-lg focus:ring-2 focus:ring-purple-400 focus:outline-none"
                />
              </div>
              <div>
                <label className="block text-gray-700 font-semibold">Your Message</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="4"
                  placeholder="Type your message..."
                  className="w-full mt-2 p-3 border rounded-lg focus:ring-2 focus:ring-purple-400 focus:outline-none"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full flex items-center justify-center gap-2 bg-purple-500 hover:bg-purple-700 text-white font-bold py-3 rounded-lg transition-all duration-300"
              >
                Send Message <Send size={18} />
              </button>
            </form>
          </div>
        </div>
      </section>

      <p className="text-center bg-gray-900 p-4 w-full text-white">© 2025 Aashish Neupane. All Rights Reserved.</p>

      {/* Toast Notification */}
      <ToastContainer />
    </>
  );
};

export default ContactWalla;
