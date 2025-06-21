import { useState } from 'react';
import Head from 'next/head'; // Import Head for SEO
import Link from 'next/link';
import { motion } from 'framer-motion'; // Import motion for animations
import { Container, FormContainer, Input, Textarea, Button, TwoColumns } from '@/styles/Card.styled'; // Import styled components
import { TbBrandLinkedinFilled } from "react-icons/tb";
import { FaSearch, FaGithub } from "react-icons/fa";

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
            const response = await fetch('/api/nodemailer', {
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
        <Container>
            <Head>
                <title>Contact | Patrick Kabanda</title>
                <meta name="description" content="Get in touch with Me for inquiries, feedback, or collaboration opportunities." />
            </Head>
          <TwoColumns>
            <img
              src="/images/message-me.jpg" 
              alt="Contact Image" 
              className="hidden lg:block w-full h-full object-cover" 
            />
            <div className="container mx-auto p-4 py-12 min-h-screen flex flex-col items-center">
                <motion.h1
                    className="text-4xl font-bold text-center mb-8 text-white"
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    >
                Contact Me
                </motion.h1>
              
              <FormContainer
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
              >
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-300">
                      Name
                    </label>
                    <Input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-300">
                      Email
                    </label>
                    <Input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-300">
                      Message
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                    />
                  </div>
                  <Button
                    type="submit"
                    disabled={status === "loading"}
                  >
                    {status === "loading" ? "Sending..." : "Send Message"}
                  </Button>
                </form>
                {status === "success" && (
                  <p className="mt-4 text-green-500 text-center">Message sent successfully!</p>
                )}
                {status === "error" && (
                  <p className="mt-4 text-red-500 text-center">{errorMessage}</p>
                )}
              </FormContainer>
              <div className="text-center mt-8">
                <Link href="/projects" className="text-blue-200 hover:underline">
                  Back to Projects
                </Link>
              </div>

              {/* Social Media Links */}
              <div className="mt-8">
                <h2 className="text-lg font-semibold text-white mb-4">Connect with Me</h2>
                <div className="flex justify-center space-x-6">
                  <Link href="#" className="text-blue-400 hover:text-blue-600">
                    <TbBrandLinkedinFilled className="text-2xl" />
                  </Link>
                  <Link href="#" className="text-blue-400 hover:text-blue-600">
                    <FaSearch className="text-2xl" />
                  </Link>
                  <Link href="#" className="text-blue-400 hover:text-blue-600">
                    <FaGithub className="text-2xl" />
                  </Link>
                </div>
              </div>

            </div>
        </TwoColumns>
    </Container>
  );
}     

            