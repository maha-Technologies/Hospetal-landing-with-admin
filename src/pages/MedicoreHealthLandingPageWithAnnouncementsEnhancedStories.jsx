import React, { useEffect, useRef } from 'react';

const MedicoreHealthLandingPageWithAnnouncementsEnhancedStories = () => {
  const cardsRef = useRef([]);

  useEffect(() => {
    const observerOptions = {
      threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('opacity-100', 'translate-y-0');
          entry.target.classList.remove('opacity-0', 'translate-y-10');
        }
      });
    }, observerOptions);

    cardsRef.current.forEach((el, index) => {
      if (el) {
        el.classList.add('transition-all', 'duration-700', 'opacity-0', 'translate-y-10');
        el.style.transitionDelay = `${index * 50}ms`;
        observer.observe(el);
      }
    });

    return () => {
      cardsRef.current.forEach(el => {
        if (el) observer.unobserve(el);
      });
    };
  }, []);

  const addToRefs = (el) => {
    if (el && !cardsRef.current.includes(el)) {
      cardsRef.current.push(el);
    }
  };

  return (
    <div>
      {/* TopNavBar */}
      <header className="fixed top-0 left-0 w-full z-50 bg-surface/80 backdrop-blur-md border-b border-outline-variant">
        <nav className="flex justify-between items-center w-full px-margin-desktop max-w-[1280px] mx-auto h-20">
          <div className="flex items-center gap-2">
            <span className="material-symbols-outlined text-primary text-3xl" style={{ fontVariationSettings: "'FILL' 1" }}>medical_services</span>
            <span className="font-headline-md text-headline-md font-bold text-primary">MediCore Health</span>
          </div>
          <div className="hidden md:flex items-center space-x-8">
            <a className="font-label-md text-label-md text-on-surface-variant hover:text-primary transition-colors" href="#services">Services</a>
            <a className="font-label-md text-label-md text-on-surface-variant hover:text-primary transition-colors" href="#">Doctors</a>
            <a className="font-label-md text-label-md text-on-surface-variant hover:text-primary transition-colors" href="#">About</a>
            <a className="font-label-md text-label-md text-on-surface-variant hover:text-primary transition-colors" href="#success-stories">Success Stories</a>
          </div>
          <div className="flex items-center gap-4">
            <button className="material-symbols-outlined text-on-surface-variant hover:text-primary transition-colors cursor-pointer">notifications</button>
            <button className="material-symbols-outlined text-on-surface-variant hover:text-primary transition-colors cursor-pointer">help</button>
            <button className="bg-primary text-on-primary px-6 py-2 rounded-lg font-label-md hover:bg-primary-container transition-all active:scale-95">
              New Update
            </button>
          </div>
        </nav>
      </header>

      <main className="pt-20">
        {/* Hero Section */}
        <section className="relative min-h-[870px] flex items-center overflow-hidden px-margin-mobile md:px-margin-desktop">
          <div className="absolute inset-0 z-0">
            <div className="absolute inset-0 bg-gradient-to-r from-surface via-surface/60 to-transparent z-10"></div>
            <img alt="Modern hospital corridor" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBEWnuJYKiItVG-pC-AhOUA32JyzMkBSfpJ3DV7vqB2mwYPJZqO3QKTm3BOmvrtOZuTX5VOT4-nTyGtGaFNfNrbR-XOrT9sBrWgACQutDZF_0GFvfNFasgM_1Yxp3aZ2sYa1O5A1nkpI8op_2joN8QqA3tToSceu0UzTRFBOkb6ONdn6oLAqEwRsNsGBWXmjvmz2Nac-qmxh4b9CdeuV2f2isUN4uBRaJEN-DS2QDxIYQLhsoIILmACzA" />
          </div>
          <div className="relative z-20 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary-container text-on-secondary-container mb-6">
              <span className="material-symbols-outlined text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>verified</span>
              <span className="text-label-sm font-label-sm">ISO 9001 CERTIFIED HEALTHCARE</span>
            </div>
            <h1 className="font-display-lg text-display-lg text-on-surface mb-6 leading-tight">
              Healthcare You <br /><span className="text-primary">Can Trust</span>
            </h1>
            <p className="font-body-lg text-body-lg text-on-surface-variant mb-10 max-w-lg">
              Experience world-class medical expertise combined with empathetic patient care. At MediCore, we prioritize your long-term wellness through innovation.
            </p>
            <div className="flex flex-wrap gap-4">
              <a className="bg-primary text-on-primary px-10 py-4 rounded-xl font-label-md text-lg hover:shadow-lg hover:shadow-primary/20 transition-all active:scale-95 flex items-center gap-2" href="#services">
                Explore Services
                <span className="material-symbols-outlined">arrow_forward</span>
              </a>
              <button className="border-2 border-primary text-primary px-10 py-4 rounded-xl font-label-md text-lg hover:bg-primary-fixed transition-all">
                Learn More
              </button>
            </div>
          </div>
          {/* Stats Floating Card */}
          <div className="hidden lg:block absolute right-margin-desktop bottom-1/4 glass-effect p-8 rounded-3xl w-80 shadow-2xl">
            <div className="flex flex-col gap-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-primary-container flex items-center justify-center text-on-primary-container">
                  <span className="material-symbols-outlined">group</span>
                </div>
                <div>
                  <div className="text-headline-md font-bold">15k+</div>
                  <div className="text-body-sm text-on-surface-variant">Patients Annually</div>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-secondary-container flex items-center justify-center text-on-secondary-container">
                  <span className="material-symbols-outlined">rewarded_ads</span>
                </div>
                <div>
                  <div className="text-headline-md font-bold">99%</div>
                  <div className="text-body-sm text-on-surface-variant">Satisfaction Rate</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Important Announcements Section */}
        <section className="py-12 bg-primary-container/10 border-y border-outline-variant">
          <div className="max-w-[1280px] mx-auto px-margin-mobile md:px-margin-desktop">
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-3">
                <span className="material-symbols-outlined text-primary text-2xl">campaign</span>
                <h2 className="font-headline-md text-headline-md text-on-surface">Important Announcements</h2>
              </div>
              <div className="flex gap-2">
                <button className="w-10 h-10 rounded-full border border-outline-variant flex items-center justify-center bg-surface hover:bg-surface-variant transition-colors">
                  <span className="material-symbols-outlined">chevron_left</span>
                </button>
                <button className="w-10 h-10 rounded-full border border-outline-variant flex items-center justify-center bg-surface hover:bg-surface-variant transition-colors">
                  <span className="material-symbols-outlined">chevron_right</span>
                </button>
              </div>
            </div>
            <div className="announcement-carousel flex gap-6 overflow-x-auto pb-4">
              <div ref={addToRefs} className="announcement-card min-w-[300px] md:min-w-[400px] bg-white p-6 rounded-2xl border border-outline-variant shadow-sm hover:shadow-md transition-shadow">
                <div className="text-label-sm font-label-sm text-primary mb-2">CLINIC UPDATE</div>
                <h3 className="font-label-md text-label-md mb-2">New Neurology Wing Opening Next Month</h3>
                <p className="text-body-sm text-on-surface-variant">We are expanding our neurology department to include a dedicated stroke recovery unit and advanced sleep study labs.</p>
              </div>
              <div ref={addToRefs} className="announcement-card min-w-[300px] md:min-w-[400px] bg-white p-6 rounded-2xl border border-outline-variant shadow-sm hover:shadow-md transition-shadow">
                <div className="text-label-sm font-label-sm text-secondary mb-2">COMMUNITY HEALTH</div>
                <h3 className="font-label-md text-label-md mb-2">Free Annual Wellness Checks for Seniors</h3>
                <p className="text-body-sm text-on-surface-variant">Starting October 1st, we're offering complimentary cardiovascular screenings for adults over 65. Book your slot today.</p>
              </div>
              <div ref={addToRefs} className="announcement-card min-w-[300px] md:min-w-[400px] bg-white p-6 rounded-2xl border border-outline-variant shadow-sm hover:shadow-md transition-shadow">
                <div className="text-label-sm font-label-sm text-error mb-2">HOLIDAY SCHEDULE</div>
                <h3 className="font-label-md text-label-md mb-2">Adjusted Laboratory Hours for Labor Day</h3>
                <p className="text-body-sm text-on-surface-variant">Our outpatient diagnostic labs will operate on a modified schedule (8 AM - 2 PM) during the upcoming holiday weekend.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Services Section (Bento Grid) */}
        <section className="py-24 bg-surface-container-lowest px-margin-mobile md:px-margin-desktop" id="services">
          <div className="max-w-[1280px] mx-auto">
            <div className="text-center mb-16">
              <h2 className="font-headline-lg text-headline-lg text-on-surface mb-4">Specialized Medical Care</h2>
              <p className="text-on-surface-variant max-w-2xl mx-auto">Our multidisciplinary teams use advanced technology to provide comprehensive solutions across all major healthcare fields.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-gutter">
              {/* Cardiology (Large) */}
              <div ref={addToRefs} className="md:col-span-2 bento-card bg-primary-container/10 border border-primary/10 rounded-3xl p-8 relative overflow-hidden group">
                <span className="material-symbols-outlined text-primary text-5xl mb-6">cardiology</span>
                <h3 className="font-headline-md text-headline-md mb-2">Cardiology</h3>
                <p className="text-on-surface-variant mb-6 max-w-sm">Heart health excellence with state-of-the-art diagnostic labs and minimally invasive surgical solutions.</p>
                <a className="inline-flex items-center text-primary font-label-md gap-2 group-hover:gap-4 transition-all" href="#">
                  View Department <span className="material-symbols-outlined">east</span>
                </a>
                <div className="absolute -right-4 -bottom-4 opacity-5 group-hover:opacity-10 transition-opacity">
                  <span className="material-symbols-outlined text-[180px]">monitor_heart</span>
                </div>
              </div>
              {/* Neurology */}
              <div ref={addToRefs} className="bento-card bg-surface border border-outline-variant rounded-3xl p-8 flex flex-col justify-between">
                <div>
                  <span className="material-symbols-outlined text-secondary text-4xl mb-6">psychology</span>
                  <h3 className="font-headline-md text-headline-md mb-2">Neurology</h3>
                  <p className="text-body-sm text-on-surface-variant">Expert management of complex neurological disorders and brain health.</p>
                </div>
                <a className="mt-8 material-symbols-outlined text-on-surface-variant hover:text-primary" href="#">arrow_circle_right</a>
              </div>
              {/* Pediatrics */}
              <div ref={addToRefs} className="bento-card bg-surface border border-outline-variant rounded-3xl p-8 flex flex-col justify-between">
                <div>
                  <span className="material-symbols-outlined text-on-error-container text-4xl mb-6">child_care</span>
                  <h3 className="font-headline-md text-headline-md mb-2">Pediatrics</h3>
                  <p className="text-body-sm text-on-surface-variant">Compassionate specialized care for our youngest patients from birth through adolescence.</p>
                </div>
                <a className="mt-8 material-symbols-outlined text-on-surface-variant hover:text-primary" href="#">arrow_circle_right</a>
              </div>
              {/* Additional Services */}
              <div ref={addToRefs} className="bento-card bg-surface border border-outline-variant rounded-3xl p-8">
                <span className="material-symbols-outlined text-primary text-3xl mb-4">emergency</span>
                <h4 className="font-label-md text-label-md mb-2">24/7 Emergency</h4>
                <p className="text-body-sm text-on-surface-variant">Rapid response unit.</p>
              </div>
              <div ref={addToRefs} className="bento-card bg-surface border border-outline-variant rounded-3xl p-8">
                <span className="material-symbols-outlined text-primary text-3xl mb-4">biotech</span>
                <h4 className="font-label-md text-label-md mb-2">Advanced Labs</h4>
                <p className="text-body-sm text-on-surface-variant">High-precision diagnostics.</p>
              </div>
              <div ref={addToRefs} className="bento-card bg-secondary-container text-on-secondary-container rounded-3xl p-8 md:col-span-2 flex items-center justify-between">
                <div>
                  <h3 className="font-headline-md text-headline-md mb-2">Looking for something else?</h3>
                  <p className="font-body-sm opacity-90">Browse our directory of over 40 specialized clinics.</p>
                </div>
                <button className="bg-on-secondary-container text-secondary-container px-6 py-3 rounded-xl font-label-md">Full Directory</button>
              </div>
            </div>
          </div>
        </section>

        {/* Success Stories Section */}
        <section className="py-24 bg-surface px-margin-mobile md:px-margin-desktop overflow-hidden" id="success-stories">
          <div className="max-w-[1280px] mx-auto">
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
              <div>
                <h2 className="font-headline-lg text-headline-lg text-on-surface mb-2">Success Stories</h2>
                <p className="text-on-surface-variant">Real journeys of recovery and hope from our patients.</p>
              </div>
              <div className="flex gap-2">
                <button className="w-12 h-12 rounded-full border border-outline-variant flex items-center justify-center hover:bg-surface-variant transition-colors">
                  <span className="material-symbols-outlined">chevron_left</span>
                </button>
                <button className="w-12 h-12 rounded-full border border-outline-variant flex items-center justify-center hover:bg-surface-variant transition-colors">
                  <span className="material-symbols-outlined">chevron_right</span>
                </button>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Testimonial 1 */}
              <div ref={addToRefs} className="bg-white rounded-[2rem] border border-outline-variant overflow-hidden flex flex-col h-full shadow-sm">
                <img alt="Patient recovery journey" className="w-full h-48 object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBEWnuJYKiItVG-pC-AhOUA32JyzMkBSfpJ3DV7vqB2mwYPJZqO3QKTm3BOmvrtOZuTX5VOT4-nTyGtGaFNfNrbR-XOrT9sBrWgACQutDZF_0GFvfNFasgM_1Yxp3aZ2sYa1O5A1nkpI8op_2joN8QqA3tToSceu0UzTRFBOkb6ONdn6oLAqEwRsNsGBWXmjvmz2Nac-qmxh4b9CdeuV2f2isUN4uBRaJEN-DS2QDxIYQLhsoIILmACzA" />
                <div className="p-8 flex flex-col flex-grow">
                  <div className="mb-4">
                    <span className="material-symbols-outlined text-primary text-3xl" style={{ fontVariationSettings: "'FILL' 1" }}>format_quote</span>
                  </div>
                  <p className="font-body-md text-body-md text-on-surface mb-4 italic">"The cardiac team at MediCore didn't just save my life; they gave me back my future. The recovery plan was personalized and surprisingly easy to follow."</p>
                  <p className="text-body-sm text-on-surface-variant mb-8">Following a sudden cardiac event, Robert underwent a minimally invasive valve repair. Our post-op rehabilitation program focused on gradual strength building and nutritional guidance, allowing him to return to his favorite weekend golf sessions in record time.</p>
                  <div className="mt-auto flex items-center gap-4 border-t border-outline-variant pt-6">
                    <img alt="Robert Henderson" className="w-12 h-12 rounded-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDHHUANWi0i-O2NditsVocXvRqIOY4Kma1ZrI_8r53CMVWtVEDvf21jpiPTalU4x0SJE3jO9ej5ep2A5S2H00WsA825p9401KlGm-tEZt_pmyDOo2iTZ6dmpKNSwyWDfwOaCoqMO-x_N8Z4Emu_5oAOkirB8-wEKxB8tM_n_ByfifCWaUwA8B_H_WEB9g0yVPD5-zz5uHgJ_GgbW9qPmYBH_UPraA7Hd9_ZfjzEBz4376vv4pY-_QwsRQ" />
                    <div>
                      <div className="font-label-md text-label-md">Robert Henderson</div>
                      <div className="text-label-sm text-primary">Cardiology Patient</div>
                    </div>
                  </div>
                </div>
              </div>
              {/* Testimonial 2 */}
              <div ref={addToRefs} className="bg-white rounded-[2rem] border border-outline-variant overflow-hidden flex flex-col h-full shadow-sm">
                <img alt="Pediatric care success" className="w-full h-48 object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBEWnuJYKiItVG-pC-AhOUA32JyzMkBSfpJ3DV7vqB2mwYPJZqO3QKTm3BOmvrtOZuTX5VOT4-nTyGtGaFNfNrbR-XOrT9sBrWgACQutDZF_0GFvfNFasgM_1Yxp3aZ2sYa1O5A1nkpI8op_2joN8QqA3tToSceu0UzTRFBOkb6ONdn6oLAqEwRsNsGBWXmjvmz2Nac-qmxh4b9CdeuV2f2isUN4uBRaJEN-DS2QDxIYQLhsoIILmACzA" />
                <div className="p-8 flex flex-col flex-grow">
                  <div className="mb-4">
                    <span className="material-symbols-outlined text-primary text-3xl" style={{ fontVariationSettings: "'FILL' 1" }}>format_quote</span>
                  </div>
                  <p className="font-body-md text-body-md text-on-surface mb-4 italic">"Finding specialized pediatric care for my daughter was our top priority. The doctors here treat her like their own, with so much patience and joy."</p>
                  <p className="text-body-sm text-on-surface-variant mb-8">When little Emma needed specialized orthopedic care, Sarah turned to MediCore. Our pediatric specialists coordinated a multi-phase treatment plan that combined cutting-edge technology with a kid-friendly environment that reduced anxiety for the whole family.</p>
                  <div className="mt-auto flex items-center gap-4 border-t border-outline-variant pt-6">
                    <img alt="Sarah Jenkins" className="w-12 h-12 rounded-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuD05Qrm-ChNDO6bs_Iz7Ynl-mElOy339wJkfAn_eh_KqbV6rbnIF24j-RSjTBKfRabtI2luKQHvqNff6F6JYVFFPMmYtCTleRKnkKwN7Hbr2Hexz5zWZ3nAU_TEx0je7lu5_kcLjhCS-qnrsXN2r2uMY8rmtHxadTgWB1zVb5u7BGiZgSjwILn5TwUlD2wb5A-ZPFHXXVEyHZ5YDXCq2taZs4BLIrnpIG4_upK75Rtij9zsW2twPzapiA" />
                    <div>
                      <div className="font-label-md text-label-md">Sarah Jenkins</div>
                      <div className="text-label-sm text-primary">Mother of Patient</div>
                    </div>
                  </div>
                </div>
              </div>
              {/* Testimonial 3 */}
              <div ref={addToRefs} className="bg-white rounded-[2rem] border border-outline-variant overflow-hidden flex flex-col h-full shadow-sm">
                <img alt="Neurology success story" className="w-full h-48 object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBEWnuJYKiItVG-pC-AhOUA32JyzMkBSfpJ3DV7vqB2mwYPJZqO3QKTm3BOmvrtOZuTX5VOT4-nTyGtGaFNfNrbR-XOrT9sBrWgACQutDZF_0GFvfNFasgM_1Yxp3aZ2sYa1O5A1nkpI8op_2joN8QqA3tToSceu0UzTRFBOkb6ONdn6oLAqEwRsNsGBWXmjvmz2Nac-qmxh4b9CdeuV2f2isUN4uBRaJEN-DS2QDxIYQLhsoIILmACzA" />
                <div className="p-8 flex flex-col flex-grow">
                  <div className="mb-4">
                    <span className="material-symbols-outlined text-primary text-3xl" style={{ fontVariationSettings: "'FILL' 1" }}>format_quote</span>
                  </div>
                  <p className="font-body-md text-body-md text-on-surface mb-4 italic">"After years of chronic back pain, the neurology department finally identified the root cause. I am now 6 months pain-free and back to hiking."</p>
                  <p className="text-body-sm text-on-surface-variant mb-8">Elena's case required precise diagnostic imaging and a targeted nerve therapy plan. Our neurology experts utilized advanced EMG testing to pinpoint the exact issue, leading to a non-surgical intervention that restored her mobility and quality of life.</p>
                  <div className="mt-auto flex items-center gap-4 border-t border-outline-variant pt-6">
                    <img alt="Elena Rodriguez" className="w-12 h-12 rounded-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDLMARPYBmIMGZXAvLbvSDIB9h78N6z2WhSe3_geHmNHwCm2ZN6M_BtpZ7ykopTLyPSXN3pzSaOjyKMtYR7lziuOHzoghq0qo7pW4hzww6qPND4nWeRf7_fIjHOHa-q448wuklbNUJAHcrD858wnCELX64TlTZIwOwulH5kU__evZ0C6FiJnOKgWiTmfJpAIMm1EzKtjvhrNzwQGdWwdG3baquUgpkYcI468Vhtw8-WPWmcWvODeCnbdA" />
                    <div>
                      <div className="font-label-md text-label-md">Elena Rodriguez</div>
                      <div className="text-label-sm text-primary">Neurology Patient</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-24 px-margin-mobile md:px-margin-desktop bg-surface-container-low">
          <div className="max-w-[1280px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="font-headline-lg text-headline-lg text-on-surface mb-6">Get in Touch</h2>
              <p className="text-body-lg text-on-surface-variant mb-10">We are here to help you 24/7. Whether you have questions about our services or need to locate a specific department, our team is ready.</p>
              <div className="space-y-8">
                <div className="flex items-start gap-6">
                  <div className="w-12 h-12 rounded-2xl bg-white flex items-center justify-center shadow-sm border border-outline-variant">
                    <span className="material-symbols-outlined text-primary">location_on</span>
                  </div>
                  <div>
                    <div className="font-label-md text-label-md">Main Campus</div>
                    <div className="text-on-surface-variant">1200 Healthcare Way, Medical District<br />Chicago, IL 60611</div>
                  </div>
                </div>
                <div className="flex items-start gap-6">
                  <div className="w-12 h-12 rounded-2xl bg-white flex items-center justify-center shadow-sm border border-outline-variant">
                    <span className="material-symbols-outlined text-primary">call</span>
                  </div>
                  <div>
                    <div className="font-label-md text-label-md">Phone Support</div>
                    <div className="text-on-surface-variant">General: (555) 123-4567<br />Emergency: (555) 911-0000</div>
                  </div>
                </div>
                <div className="flex items-start gap-6">
                  <div className="w-12 h-12 rounded-2xl bg-white flex items-center justify-center shadow-sm border border-outline-variant">
                    <span className="material-symbols-outlined text-primary">mail</span>
                  </div>
                  <div>
                    <div className="font-label-md text-label-md">Email Inquiries</div>
                    <div className="text-on-surface-variant">contact@medicorehealth.com</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="h-[500px] rounded-[2.5rem] overflow-hidden shadow-2xl border-4 border-white relative group">
              <img alt="Chicago Medical District map" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBzWz9xmKpHNcBzqw_AEcg7BJiSmiesIV8ErLS5zJVl2puyFVxHMhs03iDkOz4o7HfWVkmGw9T6e4WFRxJ6eqEjFk9f4UJPXmtZ1aQmibuppZr1gJYuvFHPny1lh0XgHkwRb0F6ri1-hWsVFi_TUdCnnujtjr1fWCD6aJqiQ3rGRm28dXw9hcOy28hshQQEf3LVq4WswrWg58EZixOMdLtwbZQL8LwSYCKIMhPwfWjubZkWHQBYTJ6Lqw" />
              <div className="absolute inset-0 bg-primary/10 group-hover:bg-transparent transition-colors duration-500"></div>
              <div className="absolute bottom-6 left-6 right-6 glass-effect p-6 rounded-2xl">
                <div className="flex justify-between items-center">
                  <div>
                    <div className="font-label-md">MediCore Main Tower</div>
                    <div className="text-body-sm opacity-80">Free parking for patients</div>
                  </div>
                  <button className="bg-primary text-white p-3 rounded-full hover:scale-110 transition-transform">
                    <span className="material-symbols-outlined">directions</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-surface-container-highest border-t border-outline-variant">
        <div className="flex flex-col md:flex-row justify-between items-center px-margin-desktop py-xl w-full max-w-[1280px] mx-auto">
          <div className="mb-8 md:mb-0">
            <div className="flex items-center gap-2 mb-4">
              <span className="material-symbols-outlined text-primary" style={{ fontVariationSettings: "'FILL' 1" }}>medical_services</span>
              <span className="font-label-md text-label-md font-bold text-on-surface">MediCore Health</span>
            </div>
            <p className="font-body-sm text-body-sm text-on-surface-variant">© 2024 MediCore Healthcare Systems. All rights reserved.</p>
          </div>
          <div className="flex flex-wrap justify-center gap-x-12 gap-y-4">
            <a className="font-body-sm text-body-sm text-on-surface-variant hover:text-primary transition-opacity hover:opacity-90" href="#">Privacy Policy</a>
            <a className="font-body-sm text-body-sm text-on-surface-variant hover:text-primary transition-opacity hover:opacity-90" href="#">Terms of Service</a>
            <a className="font-body-sm text-body-sm text-on-surface-variant hover:text-primary transition-opacity hover:opacity-90" href="#">Contact Support</a>
            <a className="font-body-sm text-body-sm text-on-surface-variant hover:text-primary transition-opacity hover:opacity-90" href="#">Security</a>
          </div>
          <div className="mt-8 md:mt-0 flex gap-4">
            <button className="w-10 h-10 rounded-full bg-surface flex items-center justify-center hover:bg-primary hover:text-white transition-all">
              <span className="material-symbols-outlined text-xl">share</span>
            </button>
            <button className="w-10 h-10 rounded-full bg-surface flex items-center justify-center hover:bg-primary hover:text-white transition-all">
              <span className="material-symbols-outlined text-xl">language</span>
            </button>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default MedicoreHealthLandingPageWithAnnouncementsEnhancedStories;
