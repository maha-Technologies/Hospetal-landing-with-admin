import React, { useEffect, useRef } from 'react';

const CardiologyServicesMedicoreHealth = () => {
  const cardsRef = useRef([]);

  useEffect(() => {
    // Micro-interaction for smooth scrolling or hover effects
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        if (targetId && targetId !== "#") {
            const targetElement = document.querySelector(targetId);
            if(targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        }
      });
    });

    // Simple observer for bento cards entry animation
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('opacity-100', 'translate-y-0');
          entry.target.classList.remove('opacity-0', 'translate-y-10');
        }
      });
    }, { threshold: 0.1 });

    cardsRef.current.forEach(card => {
      if (card) {
        card.classList.add('opacity-0', 'translate-y-10', 'transition-all', 'duration-700');
        observer.observe(card);
      }
    });

    return () => {
      cardsRef.current.forEach(card => {
        if (card) observer.unobserve(card);
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
      <header className="bg-surface dark:bg-surface-dim border-b border-outline-variant dark:border-outline w-full top-0 z-50 sticky">
        <nav className="flex justify-between items-center h-20 px-margin-desktop max-w-7xl mx-auto">
          <div className="font-headline-md text-headline-md font-bold text-primary dark:text-primary-fixed">ClinicalCare</div>
          <div className="hidden md:flex items-center space-x-xl h-full">
            <a className="font-label-md text-label-md text-primary dark:text-primary-fixed-dim border-b-2 border-primary font-bold pb-1 cursor-pointer active:opacity-80 transition-colors" href="#">Services</a>
            <a className="font-label-md text-label-md text-on-surface-variant dark:text-on-surface-variant hover:text-primary dark:hover:text-primary-fixed transition-colors cursor-pointer active:opacity-80" href="#">Find a Doctor</a>
            <a className="font-label-md text-label-md text-on-surface-variant dark:text-on-surface-variant hover:text-primary dark:hover:text-primary-fixed transition-colors cursor-pointer active:opacity-80" href="#">About Us</a>
            <a className="font-label-md text-label-md text-on-surface-variant dark:text-on-surface-variant hover:text-primary dark:hover:text-primary-fixed transition-colors cursor-pointer active:opacity-80" href="#">Contact</a>
          </div>
          <button className="bg-primary-container text-on-primary font-label-md text-label-md px-lg py-sm rounded-full hover:shadow-md transition-all active:scale-95">
            Patient Portal
          </button>
        </nav>
      </header>
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="hero-gradient relative overflow-hidden py-xl">
          <div className="max-w-7xl mx-auto px-margin-desktop grid grid-cols-1 lg:grid-cols-2 gap-xl items-center relative z-10">
            <div className="space-y-md">
              <div className="inline-flex items-center px-md py-xs rounded-full bg-secondary-container text-on-secondary-container font-label-md text-label-md uppercase tracking-wider">
                Cardiovascular Medicine
              </div>
              <h1 className="font-display-lg text-display-lg text-on-surface leading-tight">
                Excellence in Heart and Vascular Care
              </h1>
              <p className="font-body-lg text-body-lg text-on-surface-variant max-w-xl">
                Combining world-class expertise with cutting-edge technology to deliver comprehensive cardiac services, from preventative screening to complex surgical interventions.
              </p>
              <div className="flex gap-md pt-md">
                <button className="bg-primary text-on-primary px-lg py-md rounded-lg font-label-md text-label-md hover:bg-primary/90 transition-all">Book Appointment</button>
                <button className="border border-outline text-primary px-lg py-md rounded-lg font-label-md text-label-md hover:bg-surface-variant transition-all">View Research</button>
              </div>
            </div>
            <div className="relative">
              <div className="rounded-xl overflow-hidden shadow-xl aspect-[4/3] border border-outline-variant">
                <img className="w-full h-full object-cover" alt="Cardiology examination room" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCTXk2i3URrxc1Sm4anFv6jYsQ0nKkDuZQ484SQpc3c7yik50Vi1GmyWyBhzfPxw8zRNINfiQEG6hUVgcZjT3GWmss2_DoeTaKBSFl7lRjg14Ko7SEYA_WnJ5b_-AMniYKv6e_f2zAmL3xHQ1dUk52FVm-7BVwTiKDemZ4lkLxQ5Md1S2ZojUjLYo0kHVCkedaHYrPJor2fHaBdTBqnwEem9j99vWTZz7XNhWlbqexlajrsPz56QvXIzQ" />
              </div>
              {/* Stats Floating Card */}
              <div className="absolute -bottom-md -left-md glass-panel p-md rounded-lg shadow-lg max-w-[200px]">
                <div className="text-primary font-headline-md text-headline-md font-bold">15,000+</div>
                <div className="text-on-surface-variant font-label-sm text-label-sm">Successful Procedures Annually</div>
              </div>
            </div>
          </div>
        </section>

        {/* Treatments Bento Grid */}
        <section className="py-xl bg-surface">
          <div className="max-w-7xl mx-auto px-margin-desktop">
            <div className="flex flex-col md:flex-row justify-between items-end mb-xl gap-md">
              <div className="max-w-2xl">
                <h2 className="font-headline-lg text-headline-lg text-on-surface mb-sm">Specialized Treatments</h2>
                <p className="font-body-md text-body-md text-on-surface-variant">Our department is equipped with the latest diagnostic and therapeutic technologies to address all aspects of heart health.</p>
              </div>
              <div className="flex gap-sm">
                <button className="p-sm rounded-full border border-outline hover:bg-surface-variant transition-colors">
                  <span className="material-symbols-outlined">chevron_left</span>
                </button>
                <button className="p-sm rounded-full border border-outline hover:bg-surface-variant transition-colors">
                  <span className="material-symbols-outlined">chevron_right</span>
                </button>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-lg h-auto md:h-[600px]">
              <div ref={addToRefs} className="md:col-span-2 bg-surface-container-high rounded-xl p-xl flex flex-col justify-between border border-outline-variant bento-card">
                <div>
                  <span className="material-symbols-outlined text-primary text-[48px] mb-md" style={{ fontVariationSettings: "'FILL' 1" }}>monitor_heart</span>
                  <h3 className="font-headline-md text-headline-md text-on-surface mb-md">Interventional Cardiology</h3>
                  <p className="font-body-md text-body-md text-on-surface-variant mb-lg max-w-lg">Advanced catheter-based treatments for structural heart disease, utilizing minimally invasive techniques to ensure faster recovery times and better patient outcomes.</p>
                </div>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-sm font-label-md text-label-md text-primary">
                  <li className="flex items-center gap-xs"><span className="material-symbols-outlined text-[18px]">check_circle</span> Coronary Angioplasty</li>
                  <li className="flex items-center gap-xs"><span className="material-symbols-outlined text-[18px]">check_circle</span> Transcatheter Aortic Valve Replacement (TAVR)</li>
                  <li className="flex items-center gap-xs"><span className="material-symbols-outlined text-[18px]">check_circle</span> Mitral Valve Repair</li>
                  <li className="flex items-center gap-xs"><span className="material-symbols-outlined text-[18px]">check_circle</span> Atrial Septal Defect Closure</li>
                </ul>
              </div>
              <div ref={addToRefs} className="bg-primary text-on-primary rounded-xl p-xl flex flex-col justify-between bento-card shadow-lg">
                <span className="material-symbols-outlined text-[48px] mb-md">emergency</span>
                <div>
                  <h3 className="font-headline-md text-headline-md mb-md">24/7 Cardiac ER</h3>
                  <p className="font-body-sm text-body-sm opacity-90 mb-md">Immediate, life-saving interventions for heart attacks and acute cardiac crises with a door-to-balloon time significantly under national averages.</p>
                  <button className="w-full bg-on-primary text-primary font-label-md text-label-md py-sm rounded-lg hover:bg-primary-fixed transition-colors">Emergency Protocol</button>
                </div>
              </div>
              <div ref={addToRefs} className="bg-surface-container rounded-xl p-xl flex flex-col justify-between border border-outline-variant bento-card">
                <div>
                  <h3 className="font-headline-md text-headline-md text-on-surface mb-sm">Electrophysiology</h3>
                  <p className="font-body-sm text-body-sm text-on-surface-variant">Comprehensive diagnosis and management of heart rhythm disorders.</p>
                </div>
                <div className="mt-md pt-md border-t border-outline-variant">
                  <a className="text-primary font-label-md text-label-md flex items-center gap-xs" href="#">Learn More <span className="material-symbols-outlined text-[16px]">arrow_forward</span></a>
                </div>
              </div>
              <div ref={addToRefs} className="bg-surface-container rounded-xl p-xl flex flex-col justify-between border border-outline-variant bento-card">
                <div>
                  <h3 className="font-headline-md text-headline-md text-on-surface mb-sm">Preventative Care</h3>
                  <p className="font-body-sm text-body-sm text-on-surface-variant">Personalized risk assessments and lifestyle management programs.</p>
                </div>
                <div className="mt-md pt-md border-t border-outline-variant">
                  <a className="text-primary font-label-md text-label-md flex items-center gap-xs" href="#">Learn More <span className="material-symbols-outlined text-[16px]">arrow_forward</span></a>
                </div>
              </div>
              <div ref={addToRefs} className="bg-surface-container rounded-xl p-xl flex flex-col justify-between border border-outline-variant bento-card">
                <div>
                  <h3 className="font-headline-md text-headline-md text-on-surface mb-sm">Heart Failure</h3>
                  <p className="font-body-sm text-body-sm text-on-surface-variant">Specialized monitoring and chronic disease management.</p>
                </div>
                <div className="mt-md pt-md border-t border-outline-variant">
                  <a className="text-primary font-label-md text-label-md flex items-center gap-xs" href="#">Learn More <span className="material-symbols-outlined text-[16px]">arrow_forward</span></a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Lead Physician Profile */}
        <section className="py-xl bg-surface-container-low">
          <div className="max-w-7xl mx-auto px-margin-desktop">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-xl items-center">
              <div className="lg:col-span-5 relative">
                <div className="rounded-xl overflow-hidden aspect-[3/4] border border-outline-variant shadow-lg grayscale hover:grayscale-0 transition-all duration-700">
                  <img className="w-full h-full object-cover" alt="Dr. Elena Vance" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBV_FXuaTYyPQcjRVLX89sjvOL2oVH9z3sfXiykper2LkghxUJvuLCVB1vIh2fH2-3892peYO38JaWtcOqyz2KnOM_o0O-Le6sxkIli2YEwAgH8wmwHhouoMzIOM0F09rhhZ6PYNo4XsV2Xn8aO7-v6I5KBNoHRV_Hm3TiGIAuXUFlFc3ZUMrLzgtH6ae2gS8a-tFNZvS73tlyH5oFJgnFTgpanl-eJ2dsk7rV0BOvbrpm_OsooHNHIRQ" />
                </div>
                <div className="absolute -bottom-md -right-md bg-secondary-fixed text-on-secondary-fixed px-md py-sm rounded-lg font-label-md text-label-md shadow-md">
                  Chief of Cardiology
                </div>
              </div>
              <div className="lg:col-span-7 space-y-md">
                <h2 className="font-headline-lg text-headline-lg text-on-surface">Meet Dr. Elena Vance, MD, FACC</h2>
                <p className="font-body-lg text-body-lg text-primary font-semibold italic">"Our mission is to treat every heart as if it were our own family's."</p>
                <p className="font-body-md text-body-md text-on-surface-variant">
                  Dr. Vance has over 20 years of experience in interventional cardiology. She graduated from the Johns Hopkins School of Medicine and completed her fellowship at the Mayo Clinic. Her research on valve replacement technology has been published in numerous medical journals, and she leads a team of 45 specialized cardiac professionals at ClinicalCare.
                </p>
                <div className="grid grid-cols-2 gap-md pt-md">
                  <div className="p-md bg-surface rounded-lg border border-outline-variant">
                    <div className="font-label-sm text-label-sm text-outline mb-xs">Education</div>
                    <div className="font-label-md text-label-md text-on-surface">Johns Hopkins MD</div>
                  </div>
                  <div className="p-md bg-surface rounded-lg border border-outline-variant">
                    <div className="font-label-sm text-label-sm text-outline mb-xs">Specialization</div>
                    <div className="font-label-md text-label-md text-on-surface">Interventional Cardiology</div>
                  </div>
                </div>
                <button className="bg-primary text-on-primary px-lg py-md rounded-lg font-label-md text-label-md hover:bg-primary/90 transition-all">Schedule Consultation with Dr. Vance</button>
              </div>
            </div>
          </div>
        </section>

        {/* Contact & Map Section */}
        <section className="py-xl bg-surface">
          <div className="max-w-7xl mx-auto px-margin-desktop">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-xl">
              <div className="space-y-lg">
                <h2 className="font-headline-lg text-headline-lg text-on-surface">Get in Touch</h2>
                <div className="space-y-md">
                  <div className="flex gap-md">
                    <span className="material-symbols-outlined text-primary" style={{ fontVariationSettings: "'FILL' 1" }}>location_on</span>
                    <div>
                      <h4 className="font-label-md text-label-md text-on-surface">Clinic Location</h4>
                      <p className="font-body-sm text-body-sm text-on-surface-variant">North Wing, Level 4<br />800 Medical Center Plaza, Seattle, WA 98104</p>
                    </div>
                  </div>
                  <div className="flex gap-md">
                    <span className="material-symbols-outlined text-primary" style={{ fontVariationSettings: "'FILL' 1" }}>call</span>
                    <div>
                      <h4 className="font-label-md text-label-md text-on-surface">Direct Line</h4>
                      <p className="font-body-sm text-body-sm text-on-surface-variant">(206) 555-0128</p>
                    </div>
                  </div>
                  <div className="flex gap-md">
                    <span className="material-symbols-outlined text-primary" style={{ fontVariationSettings: "'FILL' 1" }}>schedule</span>
                    <div>
                      <h4 className="font-label-md text-label-md text-on-surface">Hours</h4>
                      <p className="font-body-sm text-body-sm text-on-surface-variant">Mon – Fri: 8:00 AM – 6:00 PM<br />Sat: 9:00 AM – 1:00 PM (Urgent Care Only)</p>
                    </div>
                  </div>
                </div>
                <div className="p-lg bg-surface-container rounded-xl border border-outline-variant">
                  <h4 className="font-label-md text-label-md text-on-surface mb-sm">Patient Inquiry</h4>
                  <form className="space-y-sm">
                    <input className="w-full px-md py-sm rounded border-outline-variant focus:border-primary focus:ring-1 focus:ring-primary outline-none" placeholder="Full Name" type="text" />
                    <input className="w-full px-md py-sm rounded border-outline-variant focus:border-primary focus:ring-1 focus:ring-primary outline-none" placeholder="Email Address" type="email" />
                    <textarea className="w-full px-md py-sm rounded border-outline-variant focus:border-primary focus:ring-1 focus:ring-primary outline-none" placeholder="How can we help?" rows="3"></textarea>
                    <button className="w-full bg-primary text-on-primary py-sm rounded-lg font-label-md text-label-md">Send Message</button>
                  </form>
                </div>
              </div>
              <div className="h-full min-h-[400px] rounded-xl overflow-hidden border border-outline-variant">
                {/* Map Placeholder */}
                <div className="w-full h-full bg-surface-variant relative">
                  <div className="w-full h-full bg-cover bg-center" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuBvT1F-Pg6u58DzVIdcHtJDCynIFApnBUjET4jQDlZSb_fzmv8oTAQSF45oU2DK2cWABGX_9mprfo-92R28eltfWRXa3Lb9j0d2Ry3dL0GJ6BjDnAOAptnjj9rCSAp2H7UFLiL5vs7b0gaGPlvtn-JOQqjRguls5yFwPWWfi30owvO-ascxSLcrq0bgAPISXFtnTppDIft1yR9SuRdpeJ3sAnqHzM8UqLvympDpJqOhrTTDFmvAWD8NqA')" }}></div>
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center">
                    <span className="material-symbols-outlined text-error text-[48px]" style={{ fontVariationSettings: "'FILL' 1" }}>location_on</span>
                    <div className="bg-surface p-sm rounded shadow-lg text-label-sm font-label-sm mt-xs">Cardiology Dept.</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-on-surface dark:bg-surface-container-lowest w-full mt-auto">
        <div className="flex flex-col md:flex-row justify-between items-center py-xl px-margin-desktop space-y-md md:space-y-0 max-w-7xl mx-auto">
          <div className="font-headline-md text-headline-md font-bold text-on-primary dark:text-primary">ClinicalCare</div>
          <div className="flex flex-wrap justify-center gap-lg">
            <a className="font-body-sm text-body-sm text-on-primary dark:text-on-surface opacity-80 hover:opacity-100 hover:text-secondary-fixed transition-all cursor-pointer" href="#">Privacy Policy</a>
            <a className="font-body-sm text-body-sm text-on-primary dark:text-on-surface opacity-80 hover:opacity-100 hover:text-secondary-fixed transition-all cursor-pointer" href="#">Terms of Service</a>
            <a className="font-body-sm text-body-sm text-on-primary dark:text-on-surface opacity-80 hover:opacity-100 hover:text-secondary-fixed transition-all cursor-pointer" href="#">Accessibility</a>
            <a className="font-body-sm text-body-sm text-on-primary dark:text-on-surface opacity-80 hover:opacity-100 hover:text-secondary-fixed transition-all cursor-pointer" href="#">Cookie Settings</a>
          </div>
          <div className="font-body-sm text-body-sm text-on-primary dark:text-on-surface opacity-80">
            © 2024 ClinicalCare Health Systems. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default CardiologyServicesMedicoreHealth;
