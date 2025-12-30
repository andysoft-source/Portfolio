'use client';

import React, { useState } from 'react';
import { LinkPreview } from '@/app/components/Ancertenity/link-preview';
import emailjs from '@emailjs/browser';
import {
  FiGithub, FiLinkedin, FiMail, FiSend, FiCopy, FiCheck, FiClock, FiUserCheck, FiAlertCircle
} from 'react-icons/fi';
import { PERSONAL_INFO } from '../constants/personalInfo';

export default function Page() {
  const { email, social, name } = PERSONAL_INFO;

  const [values, setValues] = useState({ name: '', email: '', subject: '', message: '', _hp: '' });
  const [errors, setErrors] = useState({});
  const [busy, setBusy] = useState(false);
  const [sent, setSent] = useState(false);

  const onChange = (e) => {
    const { name, value } = e.target;
    setValues((v) => ({ ...v, [name]: value }));
    setErrors((x) => ({ ...x, [name]: undefined }));
  };

  const validate = () => {
    const err = {};
    if (!values.name.trim()) err.name = 'Your name is required.';
    if (!values.email.trim()) err.email = 'Email is required.';
    else if (!/^\S+@\S+\.\S+$/.test(values.email)) err.email = 'Enter a valid email.';
    if (!values.message.trim()) err.message = 'Please write a short message.';
    if (values._hp) err.message = 'Bot detected.';
    setErrors(err);
    return Object.keys(err).length === 0;
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;
    setBusy(true);

    try {
      // Send email using EmailJS
      await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
        {
          from_name: values.name,
          from_email: values.email,
          subject: values.subject || 'Contact Form Message',
          message: values.message,
        },
        process.env.NEXT_PUBLIC_EMAILJS_USER_ID
      );

      setBusy(false);
      setSent(true);
      setValues({ name: '', email: '', subject: '', message: '', _hp: '' });
      setTimeout(() => setSent(false), 3200);
    } catch (error) {
      console.error('EmailJS Error:', error);
      setBusy(false);
      setErrors({ message: 'Failed to send message. Please try again.' });
    }
  };


  return (
    <div className="min-h-screen bg-white text-neutral-900 dark:bg-neutral-950 dark:text-neutral-100 px-4 sm:px-6 py-6 sm:py-10">
      <div className="mx-auto w-full max-w-7xl">
        {/* Heading */}
        <header className="mb-12 text-center">
          <h1 className="text-5xl md:text-6xl font-bold tracking-tight mb-4 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
            Contact Me
          </h1>
        </header>

        {/* Form */}
        <div className="max-w-2xl mx-auto">
          <form
            onSubmit={onSubmit}
            className="rounded-2xl border border-neutral-200/70 bg-white/80 backdrop-blur-sm p-5 shadow-sm
                       dark:border-neutral-800 dark:bg-white/[0.04]"
          >
            {/* honeypot */}
            <input
              name="_hp"
              value={values._hp}
              onChange={onChange}
              className="hidden"
              autoComplete="off"
              tabIndex={-1}
            />

            {sent && (
              <div className="mb-4 rounded-lg border border-emerald-500/40 bg-emerald-500/10 px-4 py-3 text-emerald-600 dark:text-emerald-400">
                Message sent! I’ll get back to you soon.
              </div>
            )}

            <div className="space-y-4">
              {/* Name */}
              <div>
                <label htmlFor="name" className="mb-1 block text-sm font-medium opacity-80">
                  Your Name
                </label>
                <input
                  id="name"
                  name="name"
                  value={values.name}
                  onChange={onChange}
                  placeholder={`e.g., ${name}`}
                  className={`w-full rounded-lg border bg-white p-3 text-neutral-900 focus:border-blue-500 focus:outline-none
                              dark:border-neutral-700 dark:bg-neutral-900 dark:text-neutral-100
                              ${errors.name ? 'border-red-500 focus:border-red-500' : 'border-neutral-300'}`}
                />
                {errors.name && (
                  <p className="mt-1 flex items-center gap-1 text-xs text-red-500">
                    <FiAlertCircle /> {errors.name}
                  </p>
                )}
              </div>

              {/* Email */}
              <div>
                <label htmlFor="email" className="mb-1 block text-sm font-medium opacity-80">
                  Your Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  value={values.email}
                  onChange={onChange}
                  placeholder="you@example.com"
                  className={`w-full rounded-lg border bg-white p-3 text-neutral-900 focus:border-blue-500 focus:outline-none
                              dark:border-neutral-700 dark:bg-neutral-900 dark:text-neutral-100
                              ${errors.email ? 'border-red-500 focus:border-red-500' : 'border-neutral-300'}`}
                />
                {errors.email && (
                  <p className="mt-1 flex items-center gap-1 text-xs text-red-500">
                    <FiAlertCircle /> {errors.email}
                  </p>
                )}
              </div>

              {/* Subject */}
              <div>
                <label htmlFor="subject" className="mb-1 block text-sm font-medium opacity-80">
                  Subject (optional)
                </label>
                <input
                  id="subject"
                  name="subject"
                  value={values.subject}
                  onChange={onChange}
                  placeholder="e.g., Freelance project inquiry"
                  className="w-full rounded-lg border border-neutral-300 bg-white p-3 text-neutral-900 focus:border-blue-500 focus:outline-none
                             dark:border-neutral-700 dark:bg-neutral-900 dark:text-neutral-100"
                />
              </div>

              {/* Message */}
              <div>
                <label htmlFor="message" className="mb-1 block text-sm font-medium opacity-80">
                  Your Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={6}
                  value={values.message}
                  onChange={onChange}
                  placeholder="Tell me a bit about your idea, timeline, and goals…"
                  className={`w-full resize-y rounded-lg border bg-white p-3 text-neutral-900 focus:border-blue-500 focus:outline-none
                              dark:border-neutral-700 dark:bg-neutral-900 dark:text-neutral-100
                              ${errors.message ? 'border-red-500 focus:border-red-500' : 'border-neutral-300'}`}
                />
                {errors.message && (
                  <p className="mt-1 flex items-center gap-1 text-xs text-red-500">
                    <FiAlertCircle /> {errors.message}
                  </p>
                )}
              </div>

              <button
                type="submit"
                disabled={busy}
                className="mt-1 inline-flex w-full items-center justify-center gap-2 rounded-lg bg-blue-600 px-4 py-3 font-semibold text-white
                           transition hover:bg-blue-500 disabled:opacity-60"
              >
                {busy ? (
                  <>
                    <span className="h-4 w-4 animate-spin rounded-full border-2 border-white/60 border-t-transparent" />
                    Sending…
                  </>
                ) : (
                  <>
                    <FiSend /> Send Message
                  </>
                )}
              </button>

              <p className="mt-2 text-center text-xs opacity-70">
                Prefer email? <a href={`mailto:${email}`} className="underline decoration-dotted">Write me directly</a>.
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}