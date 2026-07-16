import React, { useEffect, useRef } from 'react';

const MedicoreHealthLandingPage = () => {
  const cardsRef = useRef([]);

  useEffect(() => {
    const observerOptions = {
      threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.style.opacity = 1;
          entry.target.style.transform = 'translateY(0)';
        }
      });
    }, observerOptions);

    cardsRef.current.forEach((el, index) => {
      if (el) {
        el.style.transition = 'all 0.7s ease-out';
        el.style.opacity = 0;
        el.style.transform = 'translateY(40px)';
        el.style.transitionDelay = `${index * 100}ms`;
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
      <header className="navbar navbar-expand-lg navbar-light bg-white border-bottom sticky-top py-3 shadow-sm">
        <div className="container">
          <a className="navbar-brand d-flex align-items-center gap-2 text-primary fw-bold" href="#">
            <span className="material-symbols-outlined fs-3" style={{ fontVariationSettings: "'FILL' 1" }}>medical_services</span>
            <span>MediCore Health</span>
          </a>
          <div className="collapse navbar-collapse justify-content-center">
            <ul className="navbar-nav gap-4">
              <li className="nav-item">
                <a className="nav-link text-secondary" href="#services">Services</a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-secondary" href="#">Doctors</a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-secondary" href="#">About</a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-secondary" href="#success-stories">Success Stories</a>
              </li>
            </ul>
          </div>
          <div className="d-flex align-items-center gap-3">
            <button className="btn btn-link text-secondary p-0"><span className="material-symbols-outlined">notifications</span></button>
            <button className="btn btn-link text-secondary p-0"><span className="material-symbols-outlined">help</span></button>
            <button className="btn btn-primary px-4 py-2 fw-bold">New Update</button>
          </div>
        </div>
      </header>

      <main>
        {/* Hero Section */}
        <section className="position-relative d-flex align-items-center overflow-hidden" style={{ minHeight: '85vh' }}>
          <div className="position-absolute top-0 bottom-0 start-0 w-100 z-0">
            <div className="position-absolute w-100 h-100" style={{ background: 'linear-gradient(to right, rgba(255,255,255,1) 0%, rgba(255,255,255,0.7) 50%, rgba(255,255,255,0) 100%)', zIndex: 1 }}></div>
            <img className="w-100 h-100 object-fit-cover" alt="Hero" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBEWnuJYKiItVG-pC-AhOUA32JyzMkBSfpJ3DV7vqB2mwYPJZqO3QKTm3BOmvrtOZuTX5VOT4-nTyGtGaFNfNrbR-XOrT9sBrWgACQutDZF_0GFvfNFasgM_1Yxp3aZ2sYa1O5A1nkpI8op_2joN8QqA3tToSceu0UzTRFBOkb6ONdn6oLAqEwRsNsGBWXmjvmz2Nac-qmxh4b9CdeuV2f2isUN4uBRaJEN-DS2QDxIYQLhsoIILmACzA" />
          </div>
          
          <div className="container position-relative" style={{ zIndex: 2 }}>
            <div className="row">
              <div className="col-lg-7">
                <div className="d-inline-flex align-items-center gap-2 px-3 py-1 rounded-pill bg-light text-dark border mb-4">
                  <span className="material-symbols-outlined text-success" style={{ fontSize: '18px', fontVariationSettings: "'FILL' 1" }}>verified</span>
                  <span className="small fw-bold tracking-wide">ISO 9001 CERTIFIED HEALTHCARE</span>
                </div>
                <h1 className="display-3 fw-bold text-dark mb-4 lh-sm">
                  Healthcare You <br /><span className="text-primary">Can Trust</span>
                </h1>
                <p className="lead text-secondary mb-5 pe-lg-5">
                  Experience world-class medical expertise combined with empathetic patient care. At MediCore, we prioritize your long-term wellness through innovation.
                </p>
                <div className="d-flex flex-wrap gap-3">
                  <a className="btn btn-primary btn-lg d-flex align-items-center gap-2 px-5 py-3 fw-bold rounded-3" href="#services">
                    Explore Services
                    <span className="material-symbols-outlined">arrow_forward</span>
                  </a>
                  <button className="btn btn-outline-primary btn-lg px-5 py-3 fw-bold rounded-3">
                    Learn More
                  </button>
                </div>
              </div>
            </div>
          </div>
          
          {/* Stats Floating Card */}
          <div className="d-none d-lg-block position-absolute end-0 me-5" style={{ bottom: '20%', zIndex: 2 }}>
            <div className="card shadow-lg border-0 rounded-4" style={{ width: '320px', background: 'rgba(255,255,255,0.9)', backdropFilter: 'blur(10px)' }}>
              <div className="card-body p-4 d-flex flex-column gap-4">
                <div className="d-flex align-items-center gap-3">
                  <div className="rounded-circle bg-primary bg-opacity-10 d-flex align-items-center justify-content-center text-primary" style={{ width: '48px', height: '48px' }}>
                    <span className="material-symbols-outlined">group</span>
                  </div>
                  <div>
                    <div className="h4 fw-bold mb-0">15k+</div>
                    <div className="small text-muted">Patients Annually</div>
                  </div>
                </div>
                <div className="d-flex align-items-center gap-3">
                  <div className="rounded-circle bg-success bg-opacity-10 d-flex align-items-center justify-content-center text-success" style={{ width: '48px', height: '48px' }}>
                    <span className="material-symbols-outlined">rewarded_ads</span>
                  </div>
                  <div>
                    <div className="h4 fw-bold mb-0">99%</div>
                    <div className="small text-muted">Satisfaction Rate</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Services Section (Bento Grid) */}
        <section className="py-5 bg-light" id="services">
          <div className="container py-5">
            <div className="text-center mb-5">
              <h2 className="display-6 fw-bold text-dark mb-3">Specialized Medical Care</h2>
              <p className="lead text-muted col-lg-8 mx-auto">Our multidisciplinary teams use advanced technology to provide comprehensive solutions across all major healthcare fields.</p>
            </div>
            
            <div className="row g-4">
              {/* Cardiology (Large) */}
              <div className="col-12 col-md-8">
                <div ref={addToRefs} className="card h-100 bg-primary bg-opacity-10 border-0 rounded-4 overflow-hidden position-relative p-4 p-lg-5">
                  <div className="position-relative" style={{ zIndex: 2 }}>
                    <span className="material-symbols-outlined text-primary display-4 mb-4">cardiology</span>
                    <h3 className="h2 fw-bold text-dark mb-3">Cardiology</h3>
                    <p className="text-secondary mb-4 fs-5 w-75">Heart health excellence with state-of-the-art diagnostic labs and minimally invasive surgical solutions.</p>
                    <a className="btn btn-link text-primary text-decoration-none p-0 fw-bold fs-5 d-flex align-items-center gap-2" href="#">
                      View Department <span className="material-symbols-outlined">east</span>
                    </a>
                  </div>
                  <div className="position-absolute end-0 bottom-0 opacity-25 me-n4 mb-n4" style={{ zIndex: 1 }}>
                    <span className="material-symbols-outlined text-primary" style={{ fontSize: '200px' }}>monitor_heart</span>
                  </div>
                </div>
              </div>
              
              <div className="col-12 col-md-4 d-flex flex-column gap-4">
                {/* Neurology */}
                <div ref={addToRefs} className="card h-100 border-0 shadow-sm rounded-4 p-4 d-flex flex-column justify-content-between">
                  <div>
                    <span className="material-symbols-outlined text-info display-5 mb-3">psychology</span>
                    <h3 className="h4 fw-bold mb-2">Neurology</h3>
                    <p className="text-muted small">Expert management of complex neurological disorders and brain health.</p>
                  </div>
                  <a className="mt-3 text-secondary text-decoration-none align-self-start" href="#">
                    <span className="material-symbols-outlined fs-3">arrow_circle_right</span>
                  </a>
                </div>
                
                {/* Pediatrics */}
                <div ref={addToRefs} className="card h-100 border-0 shadow-sm rounded-4 p-4 d-flex flex-column justify-content-between">
                  <div>
                    <span className="material-symbols-outlined text-danger display-5 mb-3">child_care</span>
                    <h3 className="h4 fw-bold mb-2">Pediatrics</h3>
                    <p className="text-muted small">Compassionate specialized care for our youngest patients from birth through adolescence.</p>
                  </div>
                  <a className="mt-3 text-secondary text-decoration-none align-self-start" href="#">
                    <span className="material-symbols-outlined fs-3">arrow_circle_right</span>
                  </a>
                </div>
              </div>

              {/* Additional Services */}
              <div className="col-12 col-md-3">
                <div ref={addToRefs} className="card h-100 border-0 shadow-sm rounded-4 p-4">
                  <span className="material-symbols-outlined text-primary display-6 mb-3">emergency</span>
                  <h4 className="h5 fw-bold mb-2">24/7 Emergency</h4>
                  <p className="text-muted small mb-0">Rapid response unit.</p>
                </div>
              </div>
              
              <div className="col-12 col-md-3">
                <div ref={addToRefs} className="card h-100 border-0 shadow-sm rounded-4 p-4">
                  <span className="material-symbols-outlined text-primary display-6 mb-3">biotech</span>
                  <h4 className="h5 fw-bold mb-2">Advanced Labs</h4>
                  <p className="text-muted small mb-0">High-precision diagnostics.</p>
                </div>
              </div>
              
              <div className="col-12 col-md-6">
                <div ref={addToRefs} className="card h-100 bg-secondary bg-opacity-10 border-0 rounded-4 p-4 p-lg-5 d-flex flex-row align-items-center justify-content-between">
                  <div>
                    <h3 className="h4 fw-bold text-dark mb-2">Looking for something else?</h3>
                    <p className="text-muted mb-0">Browse our directory of over 40 specialized clinics.</p>
                  </div>
                  <button className="btn btn-secondary fw-bold px-4 py-2 ms-3 rounded-3 text-nowrap">Full Directory</button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Success Stories Section */}
        <section className="py-5 bg-white overflow-hidden" id="success-stories">
          <div className="container py-5">
            <div className="d-flex flex-column flex-md-row align-items-md-end justify-content-between mb-5 gap-4">
              <div>
                <h2 className="display-6 fw-bold text-dark mb-2">Success Stories</h2>
                <p className="lead text-muted mb-0">Real journeys of recovery and hope from our patients.</p>
              </div>
              <div className="d-flex gap-2">
                <button className="btn btn-outline-secondary rounded-circle d-flex align-items-center justify-content-center" style={{ width: '48px', height: '48px' }}>
                  <span className="material-symbols-outlined">chevron_left</span>
                </button>
                <button className="btn btn-outline-secondary rounded-circle d-flex align-items-center justify-content-center" style={{ width: '48px', height: '48px' }}>
                  <span className="material-symbols-outlined">chevron_right</span>
                </button>
              </div>
            </div>
            
            <div className="row g-4">
              {/* Testimonial 1 */}
              <div className="col-12 col-md-4">
                <div ref={addToRefs} className="card h-100 border-0 bg-light rounded-4 p-4 p-lg-5 d-flex flex-column">
                  <div className="mb-4">
                    <span className="material-symbols-outlined text-primary display-4" style={{ fontVariationSettings: "'FILL' 1" }}>format_quote</span>
                  </div>
                  <p className="fs-5 text-dark mb-5 fst-italic flex-grow-1">"The cardiac team at MediCore didn't just save my life; they gave me back my future. The recovery plan was personalized and surprisingly easy to follow."</p>
                  <div className="d-flex align-items-center gap-3 mt-auto">
                    <img className="rounded-circle object-fit-cover shadow-sm" style={{ width: '56px', height: '56px' }} alt="Patient" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDHHUANWi0i-O2NditsVocXvRqIOY4Kma1ZrI_8r53CMVWtVEDvf21jpiPTalU4x0SJE3jO9ej5ep2A5S2H00WsA825p9401KlGm-tEZt_pmyDOo2iTZ6dmpKNSwyWDfwOaCoqMO-x_N8Z4Emu_5oAOkirB8-wEKxB8tM_n_ByfifCWaUwA8B_H_WEB9g0yVPD5-zz5uHgJ_GgbW9qPmYBH_UPraA7Hd9_ZfjzEBz4376vv4pY-_QwsRQ" />
                    <div>
                      <div className="fw-bold">Robert Henderson</div>
                      <div className="small text-muted">Cardiology Patient</div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Testimonial 2 */}
              <div className="col-12 col-md-4">
                <div ref={addToRefs} className="card h-100 border-0 bg-light rounded-4 p-4 p-lg-5 d-flex flex-column">
                  <div className="mb-4">
                    <span className="material-symbols-outlined text-primary display-4" style={{ fontVariationSettings: "'FILL' 1" }}>format_quote</span>
                  </div>
                  <p className="fs-5 text-dark mb-5 fst-italic flex-grow-1">"Finding specialized pediatric care for my daughter was our top priority. The doctors here treat her like their own, with so much patience and joy."</p>
                  <div className="d-flex align-items-center gap-3 mt-auto">
                    <img className="rounded-circle object-fit-cover shadow-sm" style={{ width: '56px', height: '56px' }} alt="Patient" src="https://lh3.googleusercontent.com/aida-public/AB6AXuD05Qrm-ChNDO6bs_Iz7Ynl-mElOy339wJkfAn_eh_KqbV6rbnIF24j-RSjTBKfRabtI2luKQHvqNff6F6JYVFFPMmYtCTleRKnkKwN7Hbr2Hexz5zWZ3nAU_TEx0je7lu5_kcLjhCS-qnrsXN2r2uMY8rmtHxadTgWB1zVb5u7BGiZgSjwILn5TwUlD2wb5A-ZPFHXXVEyHZ5YDXCq2taZs4BLIrnpIG4_upK75Rtij9zsW2twPzapiA" />
                    <div>
                      <div className="fw-bold">Sarah Jenkins</div>
                      <div className="small text-muted">Mother of Pediatrics Patient</div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Testimonial 3 */}
              <div className="col-12 col-md-4">
                <div ref={addToRefs} className="card h-100 border-0 bg-light rounded-4 p-4 p-lg-5 d-flex flex-column">
                  <div className="mb-4">
                    <span className="material-symbols-outlined text-primary display-4" style={{ fontVariationSettings: "'FILL' 1" }}>format_quote</span>
                  </div>
                  <p className="fs-5 text-dark mb-5 fst-italic flex-grow-1">"After years of chronic back pain, the neurology department finally identified the root cause. I am now 6 months pain-free and back to hiking."</p>
                  <div className="d-flex align-items-center gap-3 mt-auto">
                    <img className="rounded-circle object-fit-cover shadow-sm" style={{ width: '56px', height: '56px' }} alt="Patient" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDLMARPYBmIMGZXAvLbvSDIB9h78N6z2WhSe3_geHmNHwCm2ZN6M_BtpZ7ykopTLyPSXN3pzSaOjyKMtYR7lziuOHzoghq0qo7pW4hzww6qPND4nWeRf7_fIjHOHa-q448wuklbNUJAHcrD858wnCELX64TlTZIwOwulH5kU__evZ0C6FiJnOKgWiTmfJpAIMm1EzKtjvhrNzwQGdWwdG3baquUgpkYcI468Vhtw8-WPWmcWvODeCnbdA" />
                    <div>
                      <div className="fw-bold">Elena Rodriguez</div>
                      <div className="small text-muted">Neurology Patient</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-5 bg-light border-top">
          <div className="container py-5">
            <div className="row align-items-center g-5">
              <div className="col-lg-6">
                <h2 className="display-6 fw-bold text-dark mb-4">Get in Touch</h2>
                <p className="lead text-muted mb-5 pe-lg-4">We are here to help you 24/7. Whether you have questions about our services or need to locate a specific department, our team is ready.</p>
                <div className="d-flex flex-column gap-4">
                  <div className="d-flex align-items-start gap-4">
                    <div className="rounded-4 bg-white shadow-sm border d-flex align-items-center justify-content-center text-primary" style={{ width: '64px', height: '64px', flexShrink: 0 }}>
                      <span className="material-symbols-outlined fs-3">location_on</span>
                    </div>
                    <div>
                      <div className="fw-bold fs-5 mb-1">Main Campus</div>
                      <div className="text-muted">1200 Healthcare Way, Medical District<br />Chicago, IL 60611</div>
                    </div>
                  </div>
                  
                  <div className="d-flex align-items-start gap-4">
                    <div className="rounded-4 bg-white shadow-sm border d-flex align-items-center justify-content-center text-primary" style={{ width: '64px', height: '64px', flexShrink: 0 }}>
                      <span className="material-symbols-outlined fs-3">call</span>
                    </div>
                    <div>
                      <div className="fw-bold fs-5 mb-1">Phone Support</div>
                      <div className="text-muted">General: (555) 123-4567<br />Emergency: (555) 911-0000</div>
                    </div>
                  </div>
                  
                  <div className="d-flex align-items-start gap-4">
                    <div className="rounded-4 bg-white shadow-sm border d-flex align-items-center justify-content-center text-primary" style={{ width: '64px', height: '64px', flexShrink: 0 }}>
                      <span className="material-symbols-outlined fs-3">mail</span>
                    </div>
                    <div>
                      <div className="fw-bold fs-5 mb-1">Email Inquiries</div>
                      <div className="text-muted">contact@medicorehealth.com</div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="col-lg-6">
                <div className="card border-0 rounded-4 shadow-lg overflow-hidden position-relative" style={{ height: '500px' }}>
                  <img className="w-100 h-100 object-fit-cover" alt="Map" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBzWz9xmKpHNcBzqw_AEcg7BJiSmiesIV8ErLS5zJVl2puyFVxHMhs03iDkOz4o7HfWVkmGw9T6e4WFRxJ6eqEjFk9f4UJPXmtZ1aQmibuppZr1gJYuvFHPny1lh0XgHkwRb0F6ri1-hWsVFi_TUdCnnujtjr1fWCD6aJqiQ3rGRm28dXw9hcOy28hshQQEf3LVq4WswrWg58EZixOMdLtwbZQL8LwSYCKIMhPwfWjubZkWHQBYTJ6Lqw" />
                  <div className="position-absolute bottom-0 start-0 end-0 p-4 m-3 rounded-4 shadow-sm" style={{ background: 'rgba(255,255,255,0.95)', backdropFilter: 'blur(5px)' }}>
                    <div className="d-flex justify-content-between align-items-center">
                      <div>
                        <div className="fw-bold text-dark">MediCore Main Tower</div>
                        <div className="small text-muted">Free parking for patients</div>
                      </div>
                      <button className="btn btn-primary rounded-circle d-flex align-items-center justify-content-center shadow" style={{ width: '48px', height: '48px' }}>
                        <span className="material-symbols-outlined">directions</span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-dark text-white pt-5 pb-4">
        <div className="container mt-3">
          <div className="row align-items-center">
            <div className="col-md-4 text-center text-md-start mb-4 mb-md-0">
              <div className="d-flex align-items-center justify-content-center justify-content-md-start gap-2 mb-3">
                <span className="material-symbols-outlined text-primary fs-3" style={{ fontVariationSettings: "'FILL' 1" }}>medical_services</span>
                <span className="h4 fw-bold mb-0">MediCore Health</span>
              </div>
              <p className="text-white-50 small mb-0">© 2024 MediCore Healthcare Systems. All rights reserved.</p>
            </div>
            
            <div className="col-md-5 mb-4 mb-md-0">
              <ul className="list-inline text-center mb-0 d-flex flex-wrap justify-content-center gap-4">
                <li className="list-inline-item m-0"><a className="text-white-50 text-decoration-none hover-white" href="#">Privacy Policy</a></li>
                <li className="list-inline-item m-0"><a className="text-white-50 text-decoration-none hover-white" href="#">Terms of Service</a></li>
                <li className="list-inline-item m-0"><a className="text-white-50 text-decoration-none hover-white" href="#">Contact Support</a></li>
                <li className="list-inline-item m-0"><a className="text-white-50 text-decoration-none hover-white" href="#">Security</a></li>
              </ul>
            </div>
            
            <div className="col-md-3 text-center text-md-end">
              <div className="d-inline-flex gap-3">
                <button className="btn btn-outline-light rounded-circle d-flex align-items-center justify-content-center p-0" style={{ width: '40px', height: '40px' }}>
                  <span className="material-symbols-outlined fs-5">share</span>
                </button>
                <button className="btn btn-outline-light rounded-circle d-flex align-items-center justify-content-center p-0" style={{ width: '40px', height: '40px' }}>
                  <span className="material-symbols-outlined fs-5">language</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default MedicoreHealthLandingPage;
