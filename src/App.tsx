import React, { useEffect } from 'react';

const toolCategories = [
  {
    title: "SEO & Research",
    icon: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-emerald-500"><path d="M3 3v18h18"/><path d="m19 9-5 5-4-4-3 3"/></svg>`,
    tools: ["Ahrefs", "SEMrush", "Moz Pro", "Majestic", "SpyFu", "KWFinder"]
  },
  {
    title: "AI & Content Writing",
    icon: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-cyan-500"><path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z"/><path d="M5 3v4"/><path d="M3 5h4"/></svg>`,
    tools: ["ChatGPT Plus", "Jasper.ai", "Grammarly", "Copy.ai", "SurferSEO"]
  },
  {
    title: "Design & Media",
    icon: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-teal-500"><circle cx="13.5" cy="6.5" r=".5" fill="currentColor"/><circle cx="17.5" cy="10.5" r=".5" fill="currentColor"/><circle cx="8.5" cy="7.5" r=".5" fill="currentColor"/><circle cx="6.5" cy="12.5" r=".5" fill="currentColor"/><path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.926 0 1.648-.746 1.648-1.688 0-.437-.18-.835-.437-1.125-.29-.289-.438-.652-.438-1.125a1.64 1.64 0 0 1 1.668-1.668h1.996c3.051 0 5.555-2.503 5.555-5.554C21.965 6.012 17.461 2 12 2z"/></svg>`,
    tools: ["Canva Pro", "Envato Elements", "Shutterstock", "Freepik"]
  },
  {
    title: "E-commerce & FBA",
    icon: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-emerald-400"><path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z"/><path d="M3 6h18"/><path d="M16 10a4 4 0 0 1-8 0"/></svg>`,
    tools: ["Jungle Scout", "Helium 10", "Viral Launch", "Keepa"]
  },
  {
    title: "Video Marketing",
    icon: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-cyan-400"><circle cx="12" cy="12" r="10"/><path d="m10 8 6 4-6 4Z"/></svg>`,
    tools: ["Invideo", "Powtoon", "Animoto", "Renderforest"]
  },
  {
    title: "Ad Spy Tools",
    icon: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-teal-400"><path d="M19.07 4.93A10 10 0 0 0 6.99 3.34"/><path d="M4 6h.01"/><path d="M2.29 9.62A10 10 0 1 0 21.31 8.35"/><path d="M16.24 7.76A6 6 0 1 0 8.23 16.67"/><path d="M12 18h.01"/><path d="M17.99 11.66A6 6 0 0 1 15.77 16.67"/><circle cx="12" cy="12" r="2"/><path d="m13.41 10.59 5.66-5.66"/></svg>`,
    tools: ["AdSpy", "BigSpy", "PowerAdSpy", "Minea"]
  }
];

export default function App() {
  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-in');
          observer.unobserve(entry.target);
        }
      });
    }, observerOptions);

    document.querySelectorAll('.reveal').forEach((el) => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-stone-50 text-stone-800 font-sans selection:bg-emerald-500/30 antialiased overflow-x-hidden">
      <style>{`
        .reveal {
          opacity: 0;
          transform: translateY(20px);
          transition: all 0.8s cubic-bezier(0.16, 1, 0.3, 1);
        }
        .reveal.animate-in {
          opacity: 1;
          transform: translateY(0);
        }
        .reveal-delay-1 { transition-delay: 100ms; }
        .reveal-delay-2 { transition-delay: 200ms; }
        .reveal-delay-3 { transition-delay: 300ms; }
        .reveal-delay-4 { transition-delay: 400ms; }
        .reveal-delay-5 { transition-delay: 500ms; }
        .reveal-delay-6 { transition-delay: 600ms; }
      `}</style>

      {/* Navbar */}
      <nav className="fixed top-0 w-full z-50 bg-stone-50/90 backdrop-blur-md border-b border-stone-200 transition-all">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex-shrink-0 flex items-center gap-3 cursor-pointer">
              <div className="w-10 h-10 rounded-xl bg-emerald-600 flex items-center justify-center font-bold text-white shadow-sm">
                G
              </div>
              <span className="font-bold text-xl tracking-tight text-stone-900">GroupBuy<span className="text-emerald-600">SEO</span></span>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <a href="#features" className="text-stone-600 hover:text-stone-900 transition-colors text-sm font-medium">Features</a>
              <a href="#tools" className="text-stone-600 hover:text-stone-900 transition-colors text-sm font-medium">The Arsenal</a>
              <a href="#pricing" className="text-stone-600 hover:text-stone-900 transition-colors text-sm font-medium">Pricing</a>
              <a href="https://wa.me/447405772190" target="_blank" rel="noreferrer" className="bg-emerald-600 hover:bg-emerald-700 text-white px-6 py-2.5 rounded-full font-medium transition-all shadow-sm hover:shadow-md hover:-translate-y-0.5 text-sm">
                Get Access Now
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 lg:pt-48 lg:pb-24 px-4 relative overflow-hidden">
        <div className="max-w-5xl mx-auto text-center relative z-10">
          <div className="reveal inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-stone-200 text-sm text-stone-600 mb-8 shadow-sm">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            <span className="font-medium tracking-wide">Trusted by 10,000+ marketers since 2016</span>
          </div>
          
          <h1 className="reveal reveal-delay-1 text-5xl md:text-7xl font-extrabold tracking-tight mb-8 text-stone-900 leading-[1.1]">
            Unlock 300+ Premium Tools.<br />
            <span className="text-emerald-600">
              Fraction of the Cost.
            </span>
          </h1>
          
          <p className="reveal reveal-delay-2 text-lg md:text-xl text-stone-600 max-w-2xl mx-auto mb-12 leading-relaxed">
            Stop paying thousands in monthly subscriptions. Get shared access to Ahrefs, SEMrush, Jasper, Canva Pro, and more via our 100% safe portable browser.
          </p>
          
          <div className="reveal reveal-delay-3 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href="#pricing" className="w-full sm:w-auto px-8 py-4 bg-emerald-600 hover:bg-emerald-700 text-white rounded-full font-medium text-lg transition-all shadow-md hover:shadow-lg hover:-translate-y-0.5 flex items-center justify-center gap-2">
              View Pricing Plans
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6"/></svg>
            </a>
            <a href="https://wa.me/447405772190" target="_blank" rel="noreferrer" className="w-full sm:w-auto px-8 py-4 bg-white hover:bg-stone-100 text-stone-800 border border-stone-200 rounded-full font-medium text-lg transition-all shadow-sm hover:shadow-md hover:-translate-y-0.5 flex items-center justify-center gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-emerald-600"><path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z"/></svg>
              Live WhatsApp Support
            </a>
          </div>
        </div>
      </section>

      {/* Premium Tools Muted Grid Section */}
      <section className="py-20 border-y border-stone-200 bg-white relative z-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-10 reveal">
            <p className="text-sm font-semibold tracking-widest text-stone-400 uppercase">Access 300+ Premium Tools Including</p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 md:gap-6">
            <div className="reveal reveal-delay-1 h-28 rounded-2xl border border-stone-100 bg-stone-50 flex items-center justify-center grayscale opacity-60 hover:grayscale-0 hover:opacity-100 hover:border-orange-200 hover:bg-orange-50 transition-all duration-300 cursor-default">
              <span className="text-2xl font-bold font-serif text-orange-600">ahrefs</span>
            </div>
            <div className="reveal reveal-delay-2 h-28 rounded-2xl border border-stone-100 bg-stone-50 flex items-center justify-center grayscale opacity-60 hover:grayscale-0 hover:opacity-100 hover:border-orange-200 hover:bg-orange-50 transition-all duration-300 cursor-default">
              <span className="text-2xl font-extrabold tracking-tighter text-orange-500">SEMRUSH</span>
            </div>
            <div className="reveal reveal-delay-3 h-28 rounded-2xl border border-stone-100 bg-stone-50 flex items-center justify-center grayscale opacity-60 hover:grayscale-0 hover:opacity-100 hover:border-emerald-200 hover:bg-emerald-50 transition-all duration-300 cursor-default">
              <span className="text-xl font-bold flex items-center gap-2 text-stone-800">
                <div className="w-6 h-6 rounded-full bg-emerald-600 flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white"><path d="M12 2v20"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>
                </div> 
                ChatGPT
              </span>
            </div>
            <div className="reveal reveal-delay-4 h-28 rounded-2xl border border-stone-100 bg-stone-50 flex items-center justify-center grayscale opacity-60 hover:grayscale-0 hover:opacity-100 hover:border-violet-200 hover:bg-violet-50 transition-all duration-300 cursor-default">
              <span className="text-2xl font-bold text-violet-600 tracking-tight">Canva Pro</span>
            </div>
            <div className="reveal reveal-delay-5 h-28 rounded-2xl border border-stone-100 bg-stone-50 flex items-center justify-center grayscale opacity-60 hover:grayscale-0 hover:opacity-100 hover:border-purple-200 hover:bg-purple-50 transition-all duration-300 cursor-default">
              <span className="text-2xl font-bold text-purple-600 tracking-tight">Jasper.ai</span>
            </div>
            <div className="reveal reveal-delay-6 h-28 rounded-2xl border border-stone-100 bg-stone-50 flex items-center justify-center grayscale opacity-60 hover:grayscale-0 hover:opacity-100 hover:border-yellow-200 hover:bg-yellow-50 transition-all duration-300 cursor-default">
              <span className="text-2xl font-bold text-yellow-600 tracking-tight">Moz Pro</span>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section id="features" className="py-32 px-4 relative">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20 reveal">
            <h2 className="text-3xl md:text-5xl font-bold mb-6 text-stone-900">Built for Professional Marketers</h2>
            <p className="text-stone-600 max-w-2xl mx-auto text-lg">We've engineered the safest, most reliable group-buy infrastructure so you can focus on growing your business.</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="reveal reveal-delay-1 bg-white border border-stone-200 p-10 rounded-3xl transition-all duration-300 hover:shadow-lg hover:-translate-y-1 group">
              <div className="w-14 h-14 bg-emerald-50 rounded-2xl flex items-center justify-center mb-8 border border-emerald-100 group-hover:scale-110 transition-transform duration-300">
                <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-emerald-600"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2-1 4-2 7-2 2.5 0 4.5 1.2 7 2a1 1 0 0 1 1 1v7z"/></svg>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-stone-900">100% Safe Portable Browser</h3>
              <p className="text-stone-600 leading-relaxed">No complicated RDPs, sketchy extensions, or shared passwords. Our custom portable browser keeps your workspace secure, isolated, and ban-free.</p>
            </div>
            
            <div className="reveal reveal-delay-2 bg-white border border-stone-200 p-10 rounded-3xl transition-all duration-300 hover:shadow-lg hover:-translate-y-1 group">
              <div className="w-14 h-14 bg-teal-50 rounded-2xl flex items-center justify-center mb-8 border border-teal-100 group-hover:scale-110 transition-transform duration-300">
                <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-teal-600"><path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"/></svg>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-stone-900">Instant Automated Delivery</h3>
              <p className="text-stone-600 leading-relaxed">Get access immediately after payment. Our automated provisioning system ensures 100% uptime so you never miss a beat in your campaigns.</p>
            </div>
            
            <div className="reveal reveal-delay-3 bg-white border border-stone-200 p-10 rounded-3xl transition-all duration-300 hover:shadow-lg hover:-translate-y-1 group">
              <div className="w-14 h-14 bg-cyan-50 rounded-2xl flex items-center justify-center mb-8 border border-cyan-100 group-hover:scale-110 transition-transform duration-300">
                <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-cyan-600"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-stone-900">24/7 Priority Support</h3>
              <p className="text-stone-600 leading-relaxed">We're always here to help. Reach out to our dedicated support team via Skype, Email, or WhatsApp anytime, day or night, for instant resolutions.</p>
            </div>
          </div>
        </div>
      </section>

      {/* The Arsenal (Extracted Tools) */}
      <section id="tools" className="py-32 px-4 bg-white border-y border-stone-200 relative">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20 reveal">
            <h2 className="text-3xl md:text-5xl font-bold mb-6 text-stone-900">The Ultimate Marketing Arsenal</h2>
            <p className="text-stone-600 max-w-2xl mx-auto text-lg">Access over 300+ premium tools categorized perfectly for your workflow.</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {toolCategories.map((category, index) => (
              <div key={index} className={`reveal reveal-delay-${(index % 3) + 1} bg-stone-50 border border-stone-200 p-8 rounded-2xl hover:border-stone-300 transition-colors`}>
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 rounded-xl bg-white flex items-center justify-center border border-stone-200 shadow-sm" dangerouslySetInnerHTML={{ __html: category.icon }} />
                  <h3 className="text-xl font-bold text-stone-900">{category.title}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {category.tools.map((tool, i) => (
                    <span key={i} className="px-3 py-1.5 bg-white border border-stone-200 rounded-lg text-sm text-stone-600 hover:text-stone-900 hover:border-stone-300 transition-colors cursor-default shadow-sm">
                      {tool}
                    </span>
                  ))}
                  <span className="px-3 py-1.5 text-sm text-stone-500 font-medium">+ more</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="py-32 px-4 relative">
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-20 reveal">
            <h2 className="text-3xl md:text-5xl font-bold mb-6 text-stone-900">Simple, Transparent Pricing</h2>
            <p className="text-stone-600 max-w-2xl mx-auto text-lg">Choose the combo that fits your needs. Upgrade or cancel anytime.</p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto items-center">
            {/* Basic */}
            <div className="reveal reveal-delay-1 bg-white border border-stone-200 rounded-[2rem] p-10 shadow-sm">
              <h3 className="text-xl font-semibold text-stone-600 mb-2">Basic Combo</h3>
              <div className="flex items-baseline gap-1 mb-8">
                <span className="text-5xl font-bold text-stone-900">€20</span>
                <span className="text-stone-500 font-medium">/month</span>
              </div>
              <ul className="space-y-5 mb-10">
                <li className="flex items-center gap-4 text-stone-700">
                  <div className="w-6 h-6 rounded-full bg-emerald-50 flex items-center justify-center"><svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="text-emerald-600"><path d="M20 6 9 17l-5-5"/></svg></div>
                  5+ Premium Tools
                </li>
                <li className="flex items-center gap-4 text-stone-700">
                  <div className="w-6 h-6 rounded-full bg-emerald-50 flex items-center justify-center"><svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="text-emerald-600"><path d="M20 6 9 17l-5-5"/></svg></div>
                  Portable Browser Access
                </li>
                <li className="flex items-center gap-4 text-stone-700">
                  <div className="w-6 h-6 rounded-full bg-emerald-50 flex items-center justify-center"><svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="text-emerald-600"><path d="M20 6 9 17l-5-5"/></svg></div>
                  Standard Support
                </li>
                <li className="flex items-center gap-4 text-stone-400">
                  <div className="w-6 h-6 rounded-full bg-stone-100 flex items-center justify-center"><svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg></div>
                  Ahrefs & SEMrush
                </li>
              </ul>
              <a href="https://wa.me/447405772190" className="block w-full py-4 px-4 bg-stone-100 hover:bg-stone-200 text-stone-800 text-center rounded-xl font-medium transition-colors">
                Get Basic
              </a>
            </div>

            {/* Premium (Highlighted) */}
            <div className="reveal reveal-delay-2 bg-emerald-700 border border-emerald-600 rounded-[2rem] p-10 relative transform lg:-translate-y-4 shadow-xl">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-emerald-500 text-white px-6 py-1.5 rounded-full text-sm font-bold uppercase tracking-wider shadow-md">
                Most Popular
              </div>
              <h3 className="text-xl font-semibold text-emerald-100 mb-2">Premium Combo</h3>
              <div className="flex items-baseline gap-1 mb-8">
                <span className="text-6xl font-bold text-white">€35</span>
                <span className="text-emerald-200 font-medium">/month</span>
              </div>
              <ul className="space-y-5 mb-10">
                <li className="flex items-center gap-4 text-white">
                  <div className="w-6 h-6 rounded-full bg-emerald-600 flex items-center justify-center"><svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="text-white"><path d="M20 6 9 17l-5-5"/></svg></div>
                  11+ Premium Tools
                </li>
                <li className="flex items-center gap-4 text-white font-medium">
                  <div className="w-6 h-6 rounded-full bg-emerald-600 flex items-center justify-center"><svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="text-white"><path d="M20 6 9 17l-5-5"/></svg></div>
                  Includes Ahrefs & SEMrush
                </li>
                <li className="flex items-center gap-4 text-white">
                  <div className="w-6 h-6 rounded-full bg-emerald-600 flex items-center justify-center"><svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="text-white"><path d="M20 6 9 17l-5-5"/></svg></div>
                  Portable Browser Access
                </li>
                <li className="flex items-center gap-4 text-white">
                  <div className="w-6 h-6 rounded-full bg-emerald-600 flex items-center justify-center"><svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="text-white"><path d="M20 6 9 17l-5-5"/></svg></div>
                  Priority 24/7 Support
                </li>
              </ul>
              <a href="https://wa.me/447405772190" className="block w-full py-4 px-4 bg-white hover:bg-stone-50 text-emerald-700 text-center rounded-xl font-bold transition-all shadow-md hover:shadow-lg hover:-translate-y-0.5">
                Get Premium Now
              </a>
            </div>

            {/* Agency */}
            <div className="reveal reveal-delay-3 bg-white border border-stone-200 rounded-[2rem] p-10 shadow-sm">
              <h3 className="text-xl font-semibold text-stone-600 mb-2">Agency Combo</h3>
              <div className="flex items-baseline gap-1 mb-8">
                <span className="text-5xl font-bold text-stone-900">€90</span>
                <span className="text-stone-500 font-medium">/month</span>
              </div>
              <ul className="space-y-5 mb-10">
                <li className="flex items-center gap-4 text-stone-700">
                  <div className="w-6 h-6 rounded-full bg-emerald-50 flex items-center justify-center"><svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="text-emerald-600"><path d="M20 6 9 17l-5-5"/></svg></div>
                  80+ Premium Tools
                </li>
                <li className="flex items-center gap-4 text-stone-700">
                  <div className="w-6 h-6 rounded-full bg-emerald-50 flex items-center justify-center"><svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="text-emerald-600"><path d="M20 6 9 17l-5-5"/></svg></div>
                  All Premium Features
                </li>
                <li className="flex items-center gap-4 text-stone-700">
                  <div className="w-6 h-6 rounded-full bg-emerald-50 flex items-center justify-center"><svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="text-emerald-600"><path d="M20 6 9 17l-5-5"/></svg></div>
                  Multiple User Access
                </li>
                <li className="flex items-center gap-4 text-stone-700">
                  <div className="w-6 h-6 rounded-full bg-emerald-50 flex items-center justify-center"><svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="text-emerald-600"><path d="M20 6 9 17l-5-5"/></svg></div>
                  Dedicated Account Manager
                </li>
              </ul>
              <a href="https://wa.me/447405772190" className="block w-full py-4 px-4 bg-stone-100 hover:bg-stone-200 text-stone-800 text-center rounded-xl font-medium transition-colors">
                Get Agency
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-stone-900 py-16 border-t border-stone-800">
        <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-4 gap-12">
          <div className="col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-8 h-8 rounded-lg bg-emerald-600 flex items-center justify-center font-bold text-white text-sm">
                G
              </div>
              <span className="font-bold text-xl tracking-tight text-white">GroupBuy<span className="text-emerald-500">SEO</span></span>
            </div>
            <p className="text-stone-400 max-w-md mb-8 leading-relaxed">
              Providing shared access to over 300 premium digital marketing, AI, and SEO tools at a fraction of their original cost. 100% safe, instant delivery, and trusted since 2016.
            </p>
            <div className="flex gap-4">
              <span className="px-3 py-1 bg-stone-800 rounded-full text-stone-300 text-xs font-semibold tracking-wider uppercase">Trusted since 2016</span>
            </div>
          </div>
          
          <div>
            <h4 className="font-bold text-white mb-6 uppercase tracking-wider text-sm">Quick Links</h4>
            <ul className="space-y-3">
              <li><a href="#features" className="text-stone-400 hover:text-emerald-400 transition-colors text-sm font-medium">Features</a></li>
              <li><a href="#tools" className="text-stone-400 hover:text-emerald-400 transition-colors text-sm font-medium">The Arsenal</a></li>
              <li><a href="#pricing" className="text-stone-400 hover:text-emerald-400 transition-colors text-sm font-medium">Pricing Plans</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold text-white mb-6 uppercase tracking-wider text-sm">Contact Us</h4>
            <ul className="space-y-4">
              <li>
                <a href="https://wa.me/447405772190" className="text-stone-400 hover:text-emerald-400 transition-colors text-sm flex items-center gap-3 font-medium">
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z"/></svg>
                  +44 7405 772190 (UK)
                </a>
              </li>
              <li>
                <a href="https://wa.me/15704370233" className="text-stone-400 hover:text-emerald-400 transition-colors text-sm flex items-center gap-3 font-medium">
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z"/></svg>
                  +1 570 437 0233 (US)
                </a>
              </li>
              <li className="text-stone-400 text-sm flex items-start gap-3">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mt-0.5 flex-shrink-0"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
                <span>support@groupbuyseotools.net</span>
              </li>
              <li className="text-stone-500 text-sm flex items-start gap-3 mt-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mt-0.5 flex-shrink-0"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>
                <span>2532 Lamberts Branch Road<br/>Coral Gables, FL 33134</span>
              </li>
            </ul>
          </div>
        </div>
        <div className="max-w-7xl mx-auto px-4 mt-16 pt-8 border-t border-stone-800 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-stone-500 text-sm font-medium">
            &copy; {new Date().getFullYear()} GroupBuySeoTools. All rights reserved.
          </div>
          <div className="flex gap-6 text-sm font-medium text-stone-500">
            <a href="#" className="hover:text-stone-300 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-stone-300 transition-colors">Terms of Service</a>
          </div>
        </div>
      </footer>

      {/* Floating WhatsApp Widget */}
      <a 
        href="https://wa.me/447405772190" 
        target="_blank" 
        rel="noreferrer"
        className="fixed bottom-6 right-6 w-16 h-16 bg-emerald-600 hover:bg-emerald-500 text-white rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all z-50 hover:-translate-y-1 group"
        aria-label="Chat on WhatsApp"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="group-hover:scale-110 transition-transform"><path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z"/></svg>
      </a>
    </div>
  );
}
