import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

import { styles } from "../styles";
import { EarthCanvas } from "./canvas";
import { github } from "../assets";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";
import { motion as m } from "framer-motion";

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [copied, setCopied] = useState(null);

  const handleChange = (e) => {
    const { target } = e;
    const { name, value } = target;

    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    // Validate environment variables to avoid runtime error from EmailJS
    const serviceId = import.meta.env.VITE_APP_EMAILJS_SERVICE_ID;
    const templateId = import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID;
    const publicKey = import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY;

    // Treat explicit placeholders as missing values too
    const isPlaceholder = (v) => !v || v === "service_xxx" || v === "template_xxx";

    if (isPlaceholder(serviceId) || isPlaceholder(templateId) || !publicKey) {
      setLoading(false);
      console.error("EmailJS missing config", { serviceId, templateId, publicKey });
      alert(
        "EmailJS configuration is missing or using placeholder values. Please set real VITE_APP_EMAILJS_SERVICE_ID and VITE_APP_EMAILJS_TEMPLATE_ID in your .env (replace 'service_xxx'/'template_xxx') and restart the dev server."
      );
      return;
    }

    const payload = {
      from_name: form.name,
      to_name: "JavaScript Mastery",
      from_email: form.email,
      to_email: "defajati22@gmail.com",
      message: form.message,
    };

    // (debug logs removed)

    emailjs
      .send(
        serviceId,
        templateId,
        payload,
        publicKey
      )
      .then(
        () => {
          setLoading(false);
          alert("Thank you. I will get back to you as soon as possible.");

          setForm({
            name: "",
            email: "",
            message: "",
          });
        },
        (error) => {
          setLoading(false);
          console.error(error);

          alert("Ahh, something went wrong. Please try again.");
        }
      );
  };

  const socials = [
    {
      name: "GitHub",
      handle: "Depajatip",
      href: "https://github.com/Depajatip",
      bg: "bg-gradient-to-tr from-gray-800 to-gray-700",
      icon: github,
    },
    {
      name: "Letterboxd",
      handle: "defajati",
      href: "https://letterboxd.com/defajati/",
      bg: "bg-gradient-to-tr from-gray-800 to-gray-700",
      icon: "https://a.ltrbxd.com/logos/letterboxd-decal-dots-pos-rgb-500px.png",
    },
    {
      name: "Instagram",
      handle: "defajati",
      href: "https://www.instagram.com/defajati/",
      bg: "bg-gradient-to-tr from-pink-500 via-yellow-400 to-purple-600",
      icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Instagram_logo_2022.svg/2048px-Instagram_logo_2022.svg.png",
    },
    {
      name: "Spotify",
      handle: "depajati",
      href: "https://open.spotify.com/user/31ibx3s5z773tp3uywg5f2ymcbgu?si=gWj07YhJSM-RKCv2BfljrQ",
      bg: "bg-gradient-to-tr from-indigo-600 to-indigo-400",
      icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/19/Spotify_logo_without_text.svg/480px-Spotify_logo_without_text.svg.png",
    },
  ];

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 8, scale: 0.98 },
    show: { opacity: 1, y: 0, scale: 1, transition: { type: "spring", stiffness: 300, damping: 24 } },
  };

  const handleCopy = async (text, idx) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(idx);
      setTimeout(() => setCopied(null), 1600);
    } catch (e) {
      console.error("Copy failed", e);
      alert("Couldn't copy to clipboard, please copy manually.");
    }
  };

  return (
    <div
      className={`xl:mt-12 flex xl:flex-row flex-col-reverse gap-10 xl:overflow-visible overflow-hidden`}
    >
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className='flex-[0.75] bg-black-100 p-8 rounded-2xl'
      >
        <p className={styles.sectionSubText}>Get in touch</p>
        <h3 className={styles.sectionHeadText}>Contact.</h3>

        {/* Socials / quick contact badges */}
        <m.div
          className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-2 md:flex md:flex-wrap md:items-center md:gap-4 lg:gap-6"
          variants={container}
          initial="hidden"
          animate="show"
        >
          {socials.map((s, i) => (
            <m.a
              key={s.name}
              href={s.href}
              target="_blank"
              rel="noreferrer"
              variants={item}
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.98 }}
              aria-label={`Open ${s.name} (${s.handle}) in a new tab`}
              className={`group relative flex items-center gap-3 p-3 md:p-4 rounded-lg text-white ${s.bg} shadow-md hover:brightness-105 focus:outline-none focus:ring-2 focus:ring-indigo-400 transition-transform duration-200 md:hover:scale-105 lg:hover:scale-110 w-full sm:w-auto`}
            >
              <div className="w-10 h-10 md:w-12 md:h-12 rounded-full flex items-center justify-center bg-white/12">
                {s.icon ? (
                  <img src={s.icon} alt={s.name} className="w-6 h-6 md:w-8 md:h-8 object-contain" />
                ) : (
                  <span className="text-sm md:text-base">{s.svg}</span>
                )}
              </div>

              <div className="flex-1 min-w-0">
                <div className="text-xs md:text-sm opacity-80">{s.name}</div>
                <div className="text-sm md:text-base font-semibold truncate">{s.handle}</div>
              </div>

              <div className="flex items-center gap-2">
                {s.name === 'Email' ? (
                  <button
                    type="button"
                    onClick={(ev) => { ev.preventDefault(); ev.stopPropagation(); handleCopy(s.handle, i); }}
                    className="text-xs md:text-sm bg-white/10 px-2 py-1 rounded-md focus:ring-2 focus:ring-white"
                    aria-pressed={copied === i}
                    aria-label={`Copy ${s.handle} to clipboard`}
                  >
                    {copied === i ? 'Copied' : 'Copy'}
                  </button>
                ) : (
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="opacity-90">
                    <path d="M14 3H21V10" stroke="white" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M21 3L10 14" stroke="white" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M21 21H3V3" stroke="white" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                )}
              </div>

              {/* Tooltip */}
              <span className="pointer-events-none absolute -top-9 left-1/2 -translate-x-1/2 rounded-md bg-black-900 px-2 py-1 text-xs opacity-0 group-hover:opacity-100 group-focus:opacity-100 transition-opacity">
                Open {s.name}
              </span>
              <span className="sr-only" aria-live="polite">{copied === i ? `${s.name} copied` : ''}</span>
            </m.a>
          ))}
        </m.div>

        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className='mt-12 flex flex-col gap-8'
        >
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>Your Name</span>
            <input
              type='text'
              name='name'
              value={form.name}
              onChange={handleChange}
              placeholder="What's your good name?"
              className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
            />
          </label>
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>Your email</span>
            <input
              type='email'
              name='email'
              value={form.email}
              onChange={handleChange}
              placeholder="What's your web address?"
              className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
            />
          </label>
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>Your Message</span>
            <textarea
              rows={7}
              name='message'
              value={form.message}
              onChange={handleChange}
              placeholder='What you want to say?'
              className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
            />
          </label>

          <button
            type='submit'
            className='bg-tertiary py-3 px-8 rounded-xl outline-none w-fit text-white font-bold shadow-md shadow-primary'
          >
            {loading ? "Sending..." : "Send"}
          </button>
        </form>
      </motion.div>

      <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
        className='xl:flex-1 xl:h-auto md:h-[550px] h-[350px]'
      >
        <EarthCanvas />
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Contact, "contact");
