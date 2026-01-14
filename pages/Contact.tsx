import React, { useState, useRef, useEffect } from 'react';
import { Mail, Phone, Send, Check, CheckCircle } from 'lucide-react';
import { Link, useSearchParams } from 'react-router-dom';

const Contact: React.FC = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [searchParams] = useSearchParams();
  const formRef = useRef<HTMLElement>(null);
  const nameInputRef = useRef<HTMLInputElement>(null);

  const scrollToForm = (smooth = true) => {
    formRef.current?.scrollIntoView({ behavior: smooth ? 'smooth' : 'auto' });
    // Small delay to ensure smooth scroll finishes or starts before focus
    setTimeout(() => {
      nameInputRef.current?.focus();
    }, 500);
  };

  // Effect to handle deep linking and auto-focus from other pages
  useEffect(() => {
    if (searchParams.get('focus') === 'true') {
      // Give the page a moment to render before scrolling/focusing
      const timer = setTimeout(() => {
        scrollToForm(true);
      }, 100);
      return () => clearTimeout(timer);
    }
  }, [searchParams]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    // Scroll to top of form section to show success message clearly
    formRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="bg-white min-h-screen">
      {/* Hero Section */}
      <section className="bg-primary py-24 md:py-32 relative overflow-hidden">
        
        {/* Background Image & Overlay */}
        <div className="absolute inset-0 z-0">
          <div 
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: "url('https://storage.googleapis.com/msgsndr/7fFIJC0GfXGlSGfKIuzi/media/69661ec30475d45fdc3d170f.png')" }}
          ></div>
          <div className="absolute inset-0 bg-[#0B1F33]/85"></div>
        </div>

        {/* Decorative background elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
          <div className="absolute -right-[10%] -top-[10%] w-[800px] h-[800px] bg-white opacity-[0.03] rounded-full blur-3xl"></div>
          <div className="absolute right-[5%] top-[25%] w-[600px] h-[600px] bg-accent opacity-[0.04] rounded-full blur-3xl"></div>
        </div>

        <div className="container mx-auto px-6 relative z-10 text-center">
          <div className="max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-8 leading-tight">
              Start Your Free Storm Monitoring
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 leading-relaxed">
              Enter your property address. We'll analyze your storm exposure for the past 2 years and set up continuous monitoring — completely free. If we find something, you decide what to do next.
            </p>
          </div>
        </div>
      </section>

      {/* Form Section */}
      <section className="py-24 bg-white" ref={formRef}>
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-16 lg:gap-24">
            
            {/* Left Column: Form or Success State */}
            <div className="bg-white">
              {!isSubmitted ? (
                <>
                  {/* Reassurance Line */}
                  <div className="mb-8 space-y-2">
                    <div className="flex items-center space-x-2 text-sm text-gray-600">
                      <Check className="w-4 h-4 text-green-500 flex-shrink-0" />
                      <span>No cost — monitoring is free forever</span>
                    </div>
                    <div className="flex items-center space-x-2 text-sm text-gray-600">
                      <Check className="w-4 h-4 text-green-500 flex-shrink-0" />
                      <span>No obligation — you're not committing to anything</span>
                    </div>
                    <div className="flex items-center space-x-2 text-sm text-gray-600">
                      <Check className="w-4 h-4 text-green-500 flex-shrink-0" />
                      <span>No spam — we only contact you if there's a potential claim</span>
                    </div>
                  </div>

                  <form className="space-y-6" onSubmit={handleSubmit}>
                    <div className="space-y-2">
                      <label className="text-xs font-bold text-gray-500 uppercase tracking-wider">Your Name <span className="text-red-500">*</span></label>
                      <input 
                        ref={nameInputRef}
                        type="text" 
                        className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-colors" 
                        placeholder="John Smith" 
                        required 
                      />
                    </div>

                    <div className="space-y-2">
                      <label className="text-xs font-bold text-gray-500 uppercase tracking-wider">Company / Entity Name <span className="text-red-500">*</span></label>
                      <input type="text" className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-colors" placeholder="Smith Properties LLC" required />
                    </div>

                    <div className="space-y-2">
                      <label className="text-xs font-bold text-gray-500 uppercase tracking-wider">Email <span className="text-red-500">*</span></label>
                      <input type="email" className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-colors" placeholder="john@smithproperties.com" required />
                    </div>

                    <div className="space-y-2">
                      <label className="text-xs font-bold text-gray-500 uppercase tracking-wider">Phone Number</label>
                      <input type="tel" className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-colors" placeholder="(555) 555-5555" />
                    </div>

                    <div className="space-y-2">
                      <label className="text-xs font-bold text-gray-500 uppercase tracking-wider">Property Address <span className="text-red-500">*</span></label>
                      <input type="text" className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-colors" placeholder="123 Main Street, Suite 100, Dallas, TX 75201" required />
                      <p className="text-xs text-gray-400">Enter one property to start. We can add more later.</p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label className="text-xs font-bold text-gray-500 uppercase tracking-wider">Property Type <span className="text-red-500">*</span></label>
                        <div className="relative">
                          <select className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-colors appearance-none text-gray-600" required>
                            <option value="">Select Type...</option>
                            <option>Office</option>
                            <option>Retail</option>
                            <option>Industrial / Warehouse</option>
                            <option>Multifamily</option>
                            <option>Self-Storage</option>
                            <option>Mixed-Use</option>
                            <option>Other</option>
                          </select>
                          <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-gray-500">
                            <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
                          </div>
                        </div>
                      </div>

                      <div className="space-y-2">
                        <label className="text-xs font-bold text-gray-500 uppercase tracking-wider">Approximate Sq Footage</label>
                        <input type="text" className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-colors" placeholder="45,000 sq ft" />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label className="text-xs font-bold text-gray-500 uppercase tracking-wider">Anything else we should know?</label>
                      <textarea className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-colors h-32 resize-none" placeholder="Recent storms, known damage, upcoming sale or refinance, etc."></textarea>
                    </div>

                    <div className="pt-4">
                      <button type="submit" className="w-full bg-accent text-primary font-bold text-lg py-4 rounded-lg hover:bg-[#E6AC00] transition-all shadow-lg hover:-translate-y-0.5 flex items-center justify-center gap-2 group">
                        Start Free Monitoring <Send className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                      </button>
                      <p className="text-sm text-center text-gray-500 mt-4">
                        We'll analyze your property within 48 hours and email you with findings.
                      </p>
                    </div>
                  </form>
                </>
              ) : (
                <div className="py-12 px-6 flex flex-col items-center justify-center h-full text-center">
                  <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mb-8 shadow-sm">
                    <CheckCircle className="w-10 h-10 text-green-600" />
                  </div>
                  
                  <h2 className="text-3xl font-bold text-primary mb-6">We're On It.</h2>
                  
                  <p className="text-gray-600 text-lg leading-relaxed mb-8 max-w-lg">
                    Thanks for signing up. We'll analyze your property's storm history and get back to you within 48 hours.
                  </p>
                  
                  <div className="bg-gray-50 p-6 rounded-xl border border-gray-100 w-full max-w-lg mb-8 text-left">
                    <p className="text-primary font-bold mb-4">In the meantime, here's what we'll be looking at:</p>
                    <ul className="space-y-3">
                      <li className="flex items-start gap-3">
                        <Check className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-600 text-sm">Storm events within 50 miles of your property (past 24 months)</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <Check className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-600 text-sm">Hail size, wind speed, and duration data</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <Check className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-600 text-sm">Known damage patterns for your building type</span>
                      </li>
                    </ul>
                  </div>
                  
                  <Link to="/" className="inline-block bg-primary text-white px-8 py-3 rounded-lg font-bold hover:bg-primary/90 transition-all shadow-md hover:-translate-y-0.5">
                    Back to Home
                  </Link>
                </div>
              )}
            </div>

            {/* Right Column: Info & Benefits */}
            <div className="space-y-12 lg:pl-10 lg:border-l lg:border-gray-100">
              <div>
                <h2 className="text-3xl font-bold text-primary mb-8">What Happens Next</h2>
                <div className="space-y-8">
                  {/* Step 1 */}
                  <div className="flex gap-4">
                    <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0">
                      <span className="text-accent font-bold text-lg">1</span>
                    </div>
                    <p className="text-gray-700 text-lg leading-relaxed pt-1">
                      We analyze your property's storm history for the past 24 months
                    </p>
                  </div>

                  {/* Step 2 */}
                  <div className="flex gap-4">
                    <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0">
                      <span className="text-accent font-bold text-lg">2</span>
                    </div>
                    <p className="text-gray-700 text-lg leading-relaxed pt-1">
                      If there's potential damage, we'll reach out to discuss next steps
                    </p>
                  </div>

                  {/* Step 3 */}
                  <div className="flex gap-4">
                    <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0">
                      <span className="text-accent font-bold text-lg">3</span>
                    </div>
                    <p className="text-gray-700 text-lg leading-relaxed pt-1">
                      If not, your property stays on our radar — we'll alert you after future storms
                    </p>
                  </div>
                </div>

                <div className="mt-8 pt-6 border-t border-gray-100">
                  <p className="text-sm text-gray-400">
                    Your information is confidential. We don't share data with third parties.
                  </p>
                </div>
              </div>

              <div className="pt-10 border-t border-gray-200">
                <h3 className="font-bold text-gray-900 text-lg mb-6">Prefer to talk to someone?</h3>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3 text-gray-600">
                    <div className="w-8 h-8 rounded-full bg-gray-50 flex items-center justify-center flex-shrink-0">
                         <Phone className="w-4 h-4 text-accent" />
                    </div>
                    <a href="tel:+18018212530" className="hover:text-primary transition-colors font-medium text-lg">
                      Call us: +1 801-821-2530
                    </a>
                  </div>
                  <div className="flex items-center space-x-3 text-gray-600">
                    <div className="w-8 h-8 rounded-full bg-gray-50 flex items-center justify-center flex-shrink-0">
                        <Mail className="w-4 h-4 text-accent" />
                    </div>
                    <a href="mailto:info@stormchecks.com" className="hover:text-primary transition-colors font-medium text-lg">
                      Email: info@stormchecks.com
                    </a>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="bg-gray-50 py-24">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-primary">Common Questions</h2>
          </div>

          <div className="max-w-3xl mx-auto space-y-6">
            {/* Q1 */}
            <div className="bg-white p-8 rounded-xl border border-gray-200 shadow-sm">
              <h3 className="text-lg font-bold text-primary mb-3">Is monitoring really free?</h3>
              <p className="text-gray-600 leading-relaxed">
                Yes. Storm monitoring costs you nothing — now or ever. We only get paid if you recover money from a claim.
              </p>
            </div>

            {/* Q2 */}
            <div className="bg-white p-8 rounded-xl border border-gray-200 shadow-sm">
              <h3 className="text-lg font-bold text-primary mb-3">What if you don't find any damage?</h3>
              <p className="text-gray-600 leading-relaxed">
                Then you have peace of mind. Your property stays on our monitoring list, and we'll alert you if a future storm creates a potential claim.
              </p>
            </div>

            {/* Q3 */}
            <div className="bg-white p-8 rounded-xl border border-gray-200 shadow-sm">
              <h3 className="text-lg font-bold text-primary mb-3">Do I have to file a claim?</h3>
              <p className="text-gray-600 leading-relaxed">
                No. If we find damage, we'll show you what we found. You decide whether to pursue it. No pressure, no obligation.
              </p>
            </div>

            {/* Q4 */}
            <div className="bg-white p-8 rounded-xl border border-gray-200 shadow-sm">
              <h3 className="text-lg font-bold text-primary mb-3">How is StormChecks compensated?</h3>
              <p className="text-gray-600 leading-relaxed">
                We take 10% of any recovery — only if you get paid. The public adjuster we connect you with takes 20%. If the claim doesn't pay out, you owe nothing to anyone.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="bg-primary py-24 border-t border-white/10">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
            Every Month You Wait, the Window Shrinks
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-12 leading-relaxed">
            Storm damage claims have a 1–3 year filing deadline. Don't leave money on the table.
          </p>

          <button 
            onClick={() => scrollToForm(true)}
            className="bg-accent text-primary px-10 py-4 rounded-lg font-bold text-lg hover:bg-[#E6AC00] transition-all shadow-[0_4px_20px_rgba(201,151,0,0.2)] hover:shadow-[0_4px_25px_rgba(201,151,0,0.35)] hover:-translate-y-1"
          >
            Start Free Monitoring
          </button>
        </div>
      </section>
    </div>
  );
};

export default Contact;