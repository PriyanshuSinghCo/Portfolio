import React from "react";
import { FaEnvelope, FaLinkedin, FaGithub, FaTwitter } from "react-icons/fa";
import emailjs from "emailjs-com";
import toast from "react-hot-toast";

const Contact = () => {
  const handleSubmit = (e) => {
    e.preventDefault();

    const form = e.target;
    const name = form.user_name.value;
    const email = form.user_email.value;
    const number = form.user_number.value;
    const address = form.user_address.value;
    const message = form.message.value;

    emailjs
      .sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID || process.env.REACT_APP_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID || process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
        form,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY || process.env.REACT_APP_EMAILJS_PUBLIC_KEY
      )
      .then(() => {
        // 🔥 Toast first so it becomes visible
        toast.success("Message Sent Successfully");


        form.reset();

        // 🔥 then open WhatsApp (delay allows toast to show)
        const whatsappURL = `https://wa.me/919142840755?text=📩 New Contact Form Message%0A%0A👤 Name: ${name}%0A📧 Email: ${email}%0A📞 Phone: ${number}%0A🏠 Address: ${address}%0A💬 Message: ${message}`;
        setTimeout(() => {
          window.open(whatsappURL, "_blank");
        }, 500);
      })
      .catch((error) => {
        toast.error("Something went wrong");
        console.log(error);
      });
  };

  return (
    <section id="contact" className="bg-gradient-to-b from-bg-color to-[#111] py-20 px-8">
      <h2>Get In Touch</h2>
      <div className="flex flex-wrap gap-16 justify-center max-w-[1200px] mx-auto">

        <div className="flex-1 min-w-[300px]">
          <h3 className="text-3xl mb-4 text-primary-color font-bold">Let's Talk</h3>
          <p className="text-gray-400 mb-2 text-lg">
            I'm open to freelance opportunities and job offers. Feel free to reach out!
          </p>
          <h4 className="text-gray-400 mb-2 text-lg">Email: priyanshu2002krsingh@gmail.com</h4>
          <h4 className="text-gray-400 mb-2 text-lg">Phone: 9142840755</h4>
          <div className="flex gap-6 mt-5">
            <a href="https://github.com/PriyanshuSinghCo" className="text-3xl text-white hover:text-primary-color hover:-translate-y-1 transition-all duration-300"><FaGithub /></a>
            <a href="https://www.linkedin.com/in/priyanshu-singh-5b0b0a289/" className="text-3xl text-white hover:text-primary-color hover:-translate-y-1 transition-all duration-300"><FaLinkedin /></a>
            <a href="#" className="text-3xl text-white hover:text-primary-color hover:-translate-y-1 transition-all duration-300"><FaTwitter /></a>
            <a href="priyanshu2002krsingh@gmail.com" className="text-3xl text-white hover:text-primary-color hover:-translate-y-1 transition-all duration-300"><FaEnvelope /></a>
          </div>
        </div>

        {/* Contact Form */}
        <form onSubmit={handleSubmit} className="flex-1 min-w-[300px] bg-card-bg p-8 rounded-xl border border-card-border">
          <input name="user_name" type="text" placeholder="Your Name" required className="w-full p-4 mb-6 bg-black/30 border border-card-border rounded-md text-white" />
          <input name="user_email" type="email" placeholder="Your Email" required className="w-full p-4 mb-6 bg-black/30 border border-card-border rounded-md text-white" />
          <input name="user_number" type="text" placeholder="Phone Number" required className="w-full p-4 mb-6 bg-black/30 border border-card-border rounded-md text-white" />
          <input name="user_address" type="text" placeholder="Address" required className="w-full p-4 mb-6 bg-black/30 border border-card-border rounded-md text-white" />
          <textarea name="message" placeholder="Your Message" rows="5" required className="w-full p-4 mb-6 bg-black/30 border border-card-border rounded-md text-white"></textarea>
          <button type="submit" className="btn w-full">Send Message</button>
        </form>

      </div>
    </section>
  );
};

export default Contact;
