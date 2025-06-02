'use client'
import React, { useState, useEffect } from 'react'
import Button from "@/components/Button";
import { useUser } from '@clerk/nextjs';

interface ContactFormData {
  name: string;
  email: string;
  message: string;
}

interface ContactSubmission extends ContactFormData {
  timestamp: string;
  id: string;
}



const Contact = () => {
  const textName: string = "leading-7 text-sm text-white"
  const inputBox: string = "w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-blue-500 focus:bg-white focus:ring-2 focus:ring-blue-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
  const email : string = process.env.GMAIL || "not found"

  // Form state
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    message: ''
  });
  
  // UI states
  const [submissions, setSubmissions] = useState<ContactSubmission[]>([]);
  const [showSubmissions, setShowSubmissions] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  // Load submissions from localStorage on component mount
  useEffect(() => {
    try {
      const savedSubmissions = localStorage.getItem('contactSubmissions');
      if (savedSubmissions) {
        setSubmissions(JSON.parse(savedSubmissions));
      }
    } catch (error) {
      console.error('Error loading submissions:', error);
    }
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    // Reset submit status when user starts typing again
    if (submitStatus !== 'idle') {
      setSubmitStatus('idle');
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      // Create new submission with unique ID and timestamp
      const newSubmission: ContactSubmission = {
        ...formData,
        timestamp: new Date().toISOString(),
        id: crypto.randomUUID() // Generate unique ID
      };
      
      // Update submissions state
      const updatedSubmissions = [newSubmission, ...submissions]; // Add new submission at the start
      setSubmissions(updatedSubmissions);
      
      // Save to localStorage
      localStorage.setItem('contactSubmissions', JSON.stringify(updatedSubmissions));
      
      // Clear form
      setFormData({
        name: '',
        email: '',
        message: ''
      });
      
      setSubmitStatus('success');
    } catch (error) {
      console.error('Error saving submission:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const clearSubmissions = () => {
    if (window.confirm('Are you sure you want to clear all submissions?')) {
      setSubmissions([]);
      localStorage.removeItem('contactSubmissions');
    }
  };

  const { isSignedIn, user, isLoaded } = useUser();

  // Add debug logs
  useEffect(() => {
    console.log('Auth Status:', { isSignedIn, isLoaded, user });
  }, [isSignedIn, isLoaded, user]);

  return (
    <>
      <section className="text-gray-600 body-font relative">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-col text-center w-full mb-12">
            <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-white">
              Contact Us
            </h1>
            <p className="lg:w-2/3 mx-auto leading-relaxed text-base text-muted-foreground">
              Have a question or want to get in touch? Fill out the form below and we'll get back to you as soon as possible.
            </p>
          </div>
          <div className="lg:w-1/2 md:w-2/3 mx-auto">
            <form onSubmit={handleSubmit} className="flex flex-wrap -m-2">
              <div className="p-2 w-1/2">
                <div className="relative">
                  <label htmlFor="name" className={textName}>
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className={inputBox}
                    required
                    minLength={2}
                    placeholder="Your name"
                  />
                </div>
              </div>
              <div className="p-2 w-1/2">
                <div className="relative">
                  <label htmlFor="email" className={textName}>
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className={inputBox}
                    required
                    placeholder="your.email@example.com"
                  />
                </div>
              </div>
              <div className="p-2 w-full">
                <div className="relative">
                  <label htmlFor="message" className={textName}>
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    className={inputBox}
                    required
                    minLength={10}
                    placeholder="Your message here..."
                    rows={4}
                  />
                </div>
              </div>
              <div className="p-2 w-full">
                <button 
                  type="submit"
                  className={`flex mx-auto bg-white rounded-full font-semibold py-1 px-4 hover:text-red-400 duration-300 focus:outline-none text-lg ${
                    isSubmitting ? 'opacity-50 cursor-not-allowed' : ''
                  }`}
                  disabled={isSubmitting}
                >
                  {isSubmitting ? 'Sending...' : 'Submit'}
                </button>
              </div>

                              {/* Status Messages */}
              {user?.primaryEmailAddress?.emailAddress === email && submitStatus === 'success' && (
                <div className="p-2 w-full text-center text-green-500">
                  Thank you for your message! We'll get back to you soon.
                </div>
              )}
              {submitStatus === 'error' && (
                <div className="p-2 w-full text-center text-red-500">
                  Oops! Something went wrong. Please try again.
                </div>
              )}
            </form>

            {/* View Submissions Section - Only visible to admin */}
            {isLoaded && isSignedIn && user?.primaryEmailAddress?.emailAddress === "muhammadsaeef045@gmail.com" && (
              <div className="mt-8">
                <div className="flex justify-between items-center mb-4">
                  <button
                    onClick={() => {
                      console.log('Show submissions clicked', { showSubmissions, submissions });
                      setShowSubmissions(!showSubmissions);
                    }}
                    className="text-blue-500 hover:text-blue-700 font-medium"
                  >
                    {showSubmissions ? 'Hide Submissions' : 'View Submissions'}
                  </button>
                  {showSubmissions && submissions.length > 0 && (
                    <button
                      onClick={clearSubmissions}
                      className="text-red-500 hover:text-red-700 text-sm"
                    >
                      Clear All
                    </button>
                  )}
                </div>

                {showSubmissions && (
                  <div className="mt-4 p-4 bg-gray-100 rounded-lg max-h-[500px] overflow-y-auto">
                    <h2 className="text-xl font-semibold mb-4">Recent Submissions</h2>
                    {submissions.length === 0 ? (
                      <p className="text-gray-500">No submissions yet</p>
                    ) : (
                      <div className="space-y-4">
                        {submissions.map((submission) => (
                          <div key={submission.id} className="border-b pb-4 last:border-b-0">
                            <div className="flex justify-between items-start">
                              <div>
                                <p className="font-medium">{submission.name}</p>
                                <p className="text-sm text-gray-600">{submission.email}</p>
                              </div>
                              <span className="text-xs text-gray-500">
                                {new Date(submission.timestamp).toLocaleString()}
                              </span>
                            </div>
                            <p className="mt-2 text-gray-700">{submission.message}</p>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                )}
              </div>
            )}

            <div className="p-2 w-full pt-8 mt-8 border-t border-gray-200 text-center">
              <a href="mailto:muhammadsaeef045@gmail.com" className="text-blue-500 hover:text-blue-700">
                muhammadsaeef045@gmail.com
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Contact
