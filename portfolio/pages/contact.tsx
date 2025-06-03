import { useState } from 'react';
import Head from 'next/head'; // Import Head for SEO
import Link from 'next/link';
import { motion } from 'framer-motion'; // Import motion for animations

interface FormData {
    name: string;
    email: string;
    message: string;
}

export default function Contact() {
    const [formData, setFormData] = useState<FormData>({ name: '', email: '', message: '' });
    const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
    const [errorMessage, setErrorMessage] = useState('');

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setStatus('loading');
        setErrorMessage('');

        try {
            const response = await fetch('/api/contact', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                setStatus('success');
                setFormData({ name: '', email: '', message: '' });
            } else {
                const errorData = await response.json();
                setStatus('error');
                setErrorMessage(errorData.message || 'Failed to send message. Please try again later.');
            }
        } catch (err) {
            console.error('Error sending message:', err);
            setStatus('error');
            setErrorMessage('An unexpected error occurred. Please try again later.');
        }
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    return (
        <>
            <Head>
                <title>Contact | Patrick Kabanda</title>
                <meta name="description" content="Get in touch with Me for inquiries, feedback, or collaboration opportunities." />
            </Head>
            <div className="container mx-auto p-4 py-12 min-h-screen flex flex-col items-center">
                <motion.h1
                    className="text-4xl font-bold text-center mb-8 text-white"
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    >
                Contact Me
                </motion.h1>
        <motion.div
          className="w-full max-w-lg bg-gray-800 p-8 rounded-xl shadow-md"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-300">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="mt-1 w-full p-2 rounded-md bg-gray-700 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-300">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="mt-1 w-full p-2 rounded-md bg-gray-700 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-300">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={5}
                className="mt-1 w-full p-2 rounded-md bg-gray-700 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <motion.button
              type="submit"
              disabled={status === "loading"}
              className="w-full bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 disabled:opacity-50"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {status === "loading" ? "Sending..." : "Send Message"}
            </motion.button>
          </form>
          {status === "success" && (
            <p className="mt-4 text-green-500 text-center">Message sent successfully!</p>
          )}
          {status === "error" && (
            <p className="mt-4 text-red-500 text-center">{errorMessage}</p>
          )}
        </motion.div>
        <div className="text-center mt-8">
          <Link href="/projects" className="text-blue-500 hover:underline">
            Back to Projects
          </Link>
        </div>
      </div>
    </>
  );
}     

            