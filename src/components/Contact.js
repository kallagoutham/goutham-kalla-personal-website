import { motion } from "framer-motion";
import { styles } from "../styles";
import { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import { slideIn } from "../utils/motion";
import SectionWrapper from "../HigherOrderComponents/SectionWrapper";

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    emailjs
      .send(
        "service_2jbmzvk",
        "template_fwta7eh",
        {
          from_name: form.name,
          to_name: "Goutham",
          from_email: form.email,
          to_email: "kallagoutham33@gmail.com",
          message: form.message,
        },
        "aFYQhJ-yLWVKbw3hp"
      )
      .then(
        () => {
          setLoading(false);
          alert("Thank You!! I will get back to you soon");
          setForm({ name: "", email: "", message: "" });
        },
        () => {
          setLoading(false);
          alert("Something went wrong, Please try again later");
        }
      );
  };
  return (
    <div className="xl:mt-10 xl:flex-row flex-col-reverse flex gap-20 overflow-hidden pt-20 pb-10">
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className="flex-[0.75] bg-black-100 p-8 rounded-2xl"
      >
        <p className={styles.sectionSubText}>Get in touch</p>
        <h2 className={styles.sectionHeadText}>Contact</h2>
        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className="mt-12 flex flex-col gap-4"
        >
          <label className="flex flex col">
            <span className="text-white font-medium">Your Name</span>
          </label>
          <input
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
            className="bg-teritary py-4 px-4  text-white text-white rounded-lg placeholder:text-secondary placeholder:opacity-20 ooutlined-none border-none font-medium"
            placeholder="example: Goutham Kalla"
          />

          <label className="flex flex col">
            <span className="text-white font-medium">Your Email</span>
          </label>
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            className="bg-teritary py-4 px-4  text-white text-white rounded-lg placeholder:text-secondary placeholder:opacity-20 ooutlined-none border-none font-medium"
            placeholder="example: abc@example.com"
          />

          <label className="flex flex col">
            <span className="text-white font-medium">Your Message</span>
          </label>
          <textarea
            name="message"
            value={form.message}
            onChange={handleChange}
            className="bg-teritary py-4 px-4  text-white text-white rounded-lg placeholder:text-secondary placeholder:opacity-20 ooutlined-none border-none font-medium"
            placeholder="what do you want to say"
          />
          <button
            type="submit"
            className="bg-primary py-4 px-4 text-white rounded-lg font-bold outline-none w-fit shadow-primary"
          >
            {loading ? "Sending..." : "Send"}
          </button>
        </form>
      </motion.div>
      <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
        className="xl:flex-1 sl:h-auto md:h-[550px] h-[350px] flex flex-col justify-center items-center"
      >
        <section className="p-5 md:p-10 lg:p-20 w-full h-full" data-mapbox>
          <figure className="w-full h-full">
            <iframe
              title="map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12061.68166032083!2d-73.12020657482611!3d40.9065269437435!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89e83fbfc7ae4515%3A0x31dbf2d9187958c4!2sChapin%20G!5e0!3m2!1sen!2sus!4v1727549919593!5m2!1sen!2sus"
              loading="lazy"
              className="w-full h-full rounded-2xl"
              style={{ border: 0 }}
            ></iframe>
          </figure>
        </section>
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Contact, "contact");
