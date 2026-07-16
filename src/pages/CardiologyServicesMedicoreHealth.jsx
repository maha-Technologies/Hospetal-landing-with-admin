import React, { useEffect, useRef } from 'react';

const CardiologyServicesMedicoreHealth = () => {
  const cardsRef = useRef([]);

  useEffect(() => {
    // Simple observer for bento cards entry animation
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.style.opacity = 1;
          entry.target.style.transform = 'translateY(0)';
        }
      });
    }, { threshold: 0.1 });

    cardsRef.current.forEach((card, index) => {
      if (card) {
        card.style.transition = 'all 0.7s ease-out';
        card.style.opacity = 0;
        card.style.transform = 'translateY(40px)';
        card.style.transitionDelay = `${index * 100}ms`;
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
      <header className="navbar navbar-expand-lg navbar-light bg-white border-bottom sticky-top py-3 shadow-sm">
        <div className="container">
          <a className="navbar-brand d-flex align-items-center gap-2 text-primary fw-bold" href="/">
            <span className="material-symbols-outlined fs-3" style={{ fontVariationSettings: "'FILL' 1" }}>medical_services</span>
            <span>ClinicalCare</span>
          </a>
          <div className="collapse navbar-collapse justify-content-center">
            <ul className="navbar-nav gap-4">
              <li className="nav-item">
                <a className="nav-link text-primary fw-bold border-bottom border-primary border-2 px-0" href="#">Services</a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-secondary" href="/doctors">Find a Doctor</a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-secondary" href="#">About Us</a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-secondary" href="#">Contact</a>
              </li>
            </ul>
          </div>
          <div className="d-flex align-items-center">
            <button className="btn btn-primary px-4 py-2 fw-bold rounded-pill shadow-sm hover-shadow">
              Patient Portal
            </button>
          </div>
        </div>
      </header>
      
      <main className="flex-grow-1">
        {/* Hero Section */}
        <section className="position-relative overflow-hidden py-5 bg-light">
          <div className="container position-relative z-2 py-5">
            <div className="row align-items-center g-5">
              <div className="col-lg-6">
                <div className="d-inline-flex align-items-center px-3 py-1 rounded-pill bg-primary bg-opacity-10 text-primary small fw-bold mb-4">
                  Cardiovascular Medicine
                </div>
                <h1 className="display-4 fw-bold text-dark mb-4 lh-sm">
                  Excellence in Heart and Vascular Care
                </h1>
                <p className="lead text-secondary mb-5">
                  Combining world-class expertise with cutting-edge technology to deliver comprehensive cardiac services, from preventative screening to complex surgical interventions.
                </p>
                <div className="d-flex gap-3">
                  <button className="btn btn-primary btn-lg fw-bold px-4 py-3 rounded-3 shadow-sm hover-shadow">Book Appointment</button>
                  <button className="btn btn-outline-secondary btn-lg fw-bold px-4 py-3 rounded-3">View Research</button>
                </div>
              </div>
              <div className="col-lg-6 position-relative">
                <div className="rounded-4 overflow-hidden shadow-lg border border-light bg-white p-2">
                  <img className="w-100 rounded-3 object-fit-cover" style={{ height: '400px' }} alt="Cardiology examination room" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCTXk2i3URrxc1Sm4anFv6jYsQ0nKkDuZQ484SQpc3c7yik50Vi1GmyWyBhzfPxw8zRNINfiQEG6hUVgcZjT3GWmss2_DoeTaKBSFl7lRjg14Ko7SEYA_WnJ5b_-AMniYKv6e_f2zAmL3xHQ1dUk52FVm-7BVwTiKDemZ4lkLxQ5Md1S2ZojUjLYo0kHVCkedaHYrPJor2fHaBdTBqnwEem9j99vWTZz7XNhWlbqexlajrsPz56QvXIzQ" />
                </div>
                {/* Stats Floating Card */}
                <div className="position-absolute bottom-0 start-0 translate-middle-x ms-5 mb-n4 bg-white p-4 rounded-4 shadow-lg border border-light">
                  <div className="text-primary h2 fw-bold mb-1">15,000+</div>
                  <div className="text-muted small fw-bold">Successful Procedures Annually</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Treatments Bento Grid */}
        <section className="py-5 bg-white">
          <div className="container py-5">
            <div className="d-flex flex-column flex-md-row justify-content-between align-items-md-end mb-5 gap-4">
              <div className="col-lg-8">
                <h2 className="display-6 fw-bold text-dark mb-3">Specialized Treatments</h2>
                <p className="lead text-muted mb-0">Our department is equipped with the latest diagnostic and therapeutic technologies to address all aspects of heart health.</p>
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
              {/* Interventional Cardiology */}
              <div className="col-lg-8">
                <div ref={addToRefs} className="card h-100 bg-light border-0 rounded-4 p-4 p-lg-5 hover-shadow">
                  <span className="material-symbols-outlined text-primary display-4 mb-4" style={{ fontVariationSettings: "'FILL' 1" }}>monitor_heart</span>
                  <h3 className="h3 fw-bold text-dark mb-3">Interventional Cardiology</h3>
                  <p className="text-secondary mb-5 fs-5">Advanced catheter-based treatments for structural heart disease, utilizing minimally invasive techniques to ensure faster recovery times and better patient outcomes.</p>
                  
                  <div className="row g-3 text-primary fw-bold">
                    <div className="col-sm-6 d-flex align-items-center gap-2">
                      <span className="material-symbols-outlined fs-5">check_circle</span> Coronary Angioplasty
                    </div>
                    <div className="col-sm-6 d-flex align-items-center gap-2">
                      <span className="material-symbols-outlined fs-5">check_circle</span> Transcatheter Aortic Valve Replacement (TAVR)
                    </div>
                    <div className="col-sm-6 d-flex align-items-center gap-2">
                      <span className="material-symbols-outlined fs-5">check_circle</span> Mitral Valve Repair
                    </div>
                    <div className="col-sm-6 d-flex align-items-center gap-2">
                      <span className="material-symbols-outlined fs-5">check_circle</span> Atrial Septal Defect Closure
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Emergency */}
              <div className="col-lg-4">
                <div ref={addToRefs} className="card h-100 bg-primary text-white border-0 rounded-4 p-4 p-lg-5 shadow-lg d-flex flex-column hover-shadow">
                  <span className="material-symbols-outlined display-4 mb-4">emergency</span>
                  <h3 className="h3 fw-bold mb-3">24/7 Cardiac ER</h3>
                  <p className="opacity-75 mb-4 flex-grow-1">Immediate, life-saving interventions for heart attacks and acute cardiac crises with a door-to-balloon time significantly under national averages.</p>
                  <button className="btn btn-light text-primary fw-bold py-3 w-100 mt-auto rounded-3">Emergency Protocol</button>
                </div>
              </div>
              
              {/* Small Cards */}
              <div className="col-md-4">
                <div ref={addToRefs} className="card h-100 bg-white shadow-sm border border-light rounded-4 p-4 hover-shadow">
                  <h3 className="h5 fw-bold text-dark mb-3">Electrophysiology</h3>
                  <p className="text-muted small mb-4">Comprehensive diagnosis and management of heart rhythm disorders.</p>
                  <a className="mt-auto text-primary text-decoration-none fw-bold d-flex align-items-center gap-2" href="#">
                    Learn More <span className="material-symbols-outlined fs-5">arrow_forward</span>
                  </a>
                </div>
              </div>
              
              <div className="col-md-4">
                <div ref={addToRefs} className="card h-100 bg-white shadow-sm border border-light rounded-4 p-4 hover-shadow">
                  <h3 className="h5 fw-bold text-dark mb-3">Preventative Care</h3>
                  <p className="text-muted small mb-4">Personalized risk assessments and lifestyle management programs.</p>
                  <a className="mt-auto text-primary text-decoration-none fw-bold d-flex align-items-center gap-2" href="#">
                    Learn More <span className="material-symbols-outlined fs-5">arrow_forward</span>
                  </a>
                </div>
              </div>
              
              <div className="col-md-4">
                <div ref={addToRefs} className="card h-100 bg-white shadow-sm border border-light rounded-4 p-4 hover-shadow">
                  <h3 className="h5 fw-bold text-dark mb-3">Heart Failure</h3>
                  <p className="text-muted small mb-4">Specialized monitoring and chronic disease management.</p>
                  <a className="mt-auto text-primary text-decoration-none fw-bold d-flex align-items-center gap-2" href="#">
                    Learn More <span className="material-symbols-outlined fs-5">arrow_forward</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Lead Physician Profile */}
        <section className="py-5 bg-light">
          <div className="container py-5">
            <div className="row align-items-center g-5">
              <div className="col-lg-5 position-relative">
                <div className="rounded-4 overflow-hidden border border-light shadow-lg">
                  <img className="w-100 object-fit-cover hover-shadow" style={{ height: '600px', filter: 'grayscale(100%)', transition: 'filter 0.5s ease' }} onMouseOver={e => e.currentTarget.style.filter = 'grayscale(0%)'} onMouseOut={e => e.currentTarget.style.filter = 'grayscale(100%)'} alt="Dr. Elena Vance" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBV_FXuaTYyPQcjRVLX89sjvOL2oVH9z3sfXiykper2LkghxUJvuLCVB1vIh2fH2-3892peYO38JaWtcOqyz2KnOM_o0O-Le6sxkIli2YEwAgH8wmwHhouoMzIOM0F09rhhZ6PYNo4XsV2Xn8aO7-v6I5KBNoHRV_Hm3TiGIAuXUFlFc3ZUMrLzgtH6ae2gS8a-tFNZvS73tlyH5oFJgnFTgpanl-eJ2dsk7rV0BOvbrpm_OsooHNHIRQ" />
                </div>
                <div className="position-absolute bottom-0 end-0 translate-middle-y me-n3 bg-dark text-white px-4 py-3 rounded-3 shadow-lg fw-bold">
                  Chief of Cardiology
                </div>
              </div>
              <div className="col-lg-7">
                <h2 className="display-6 fw-bold text-dark mb-4">Meet Dr. Elena Vance, MD, FACC</h2>
                <p className="fs-4 text-primary fw-bold fst-italic mb-4">"Our mission is to treat every heart as if it were our own family's."</p>
                <p className="text-secondary mb-5">
                  Dr. Vance has over 20 years of experience in interventional cardiology. She graduated from the Johns Hopkins School of Medicine and completed her fellowship at the Mayo Clinic. Her research on valve replacement technology has been published in numerous medical journals, and she leads a team of 45 specialized cardiac professionals at ClinicalCare.
                </p>
                
                <div className="row g-4 mb-5">
                  <div className="col-sm-6">
                    <div className="bg-white p-4 rounded-3 border border-light shadow-sm h-100">
                      <div className="small text-muted text-uppercase fw-bold mb-2">Education</div>
                      <div className="fw-bold text-dark fs-5">Johns Hopkins MD</div>
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="bg-white p-4 rounded-3 border border-light shadow-sm h-100">
                      <div className="small text-muted text-uppercase fw-bold mb-2">Specialization</div>
                      <div className="fw-bold text-dark fs-5">Interventional Cardiology</div>
                    </div>
                  </div>
                </div>
                
                <button className="btn btn-primary btn-lg fw-bold px-5 py-3 rounded-3 shadow-sm hover-shadow">Schedule Consultation with Dr. Vance</button>
              </div>
            </div>
          </div>
        </section>

        {/* Contact & Map Section */}
        <section className="py-5 bg-white">
          <div className="container py-5">
            <div className="row g-5">
              <div className="col-lg-6 d-flex flex-column gap-5">
                <h2 className="display-6 fw-bold text-dark">Get in Touch</h2>
                
                <div className="d-flex flex-column gap-4">
                  <div className="d-flex gap-4">
                    <span className="material-symbols-outlined text-primary fs-2" style={{ fontVariationSettings: "'FILL' 1" }}>location_on</span>
                    <div>
                      <h4 className="h5 fw-bold text-dark mb-1">Clinic Location</h4>
                      <p className="text-secondary mb-0">North Wing, Level 4<br />800 Medical Center Plaza, Seattle, WA 98104</p>
                    </div>
                  </div>
                  <div className="d-flex gap-4">
                    <span className="material-symbols-outlined text-primary fs-2" style={{ fontVariationSettings: "'FILL' 1" }}>call</span>
                    <div>
                      <h4 className="h5 fw-bold text-dark mb-1">Direct Line</h4>
                      <p className="text-secondary mb-0">(206) 555-0128</p>
                    </div>
                  </div>
                  <div className="d-flex gap-4">
                    <span className="material-symbols-outlined text-primary fs-2" style={{ fontVariationSettings: "'FILL' 1" }}>schedule</span>
                    <div>
                      <h4 className="h5 fw-bold text-dark mb-1">Hours</h4>
                      <p className="text-secondary mb-0">Mon – Fri: 8:00 AM – 6:00 PM<br />Sat: 9:00 AM – 1:00 PM (Urgent Care Only)</p>
                    </div>
                  </div>
                </div>
                
                <div className="p-4 p-lg-5 bg-light rounded-4 border border-light mt-2">
                  <h4 className="h5 fw-bold text-dark mb-4">Patient Inquiry</h4>
                  <form>
                    <div className="mb-3">
                      <input className="form-control form-control-lg bg-white border-0 shadow-sm" placeholder="Full Name" type="text" />
                    </div>
                    <div className="mb-3">
                      <input className="form-control form-control-lg bg-white border-0 shadow-sm" placeholder="Email Address" type="email" />
                    </div>
                    <div className="mb-4">
                      <textarea className="form-control form-control-lg bg-white border-0 shadow-sm" placeholder="How can we help?" rows="3"></textarea>
                    </div>
                    <button className="btn btn-primary btn-lg w-100 fw-bold rounded-3">Send Message</button>
                  </form>
                </div>
              </div>
              
              <div className="col-lg-6">
                <div className="h-100 min-vh-50 rounded-4 overflow-hidden border border-light shadow-sm position-relative">
                  <div className="position-absolute w-100 h-100 bg-light z-0">
                    <div className="w-100 h-100" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuBvT1F-Pg6u58DzVIdcHtJDCynIFApnBUjET4jQDlZSb_fzmv8oTAQSF45oU2DK2cWABGX_9mprfo-92R28eltfWRXa3Lb9j0d2Ry3dL0GJ6BjDnAOAptnjj9rCSAp2H7UFLiL5vs7b0gaGPlvtn-JOQqjRguls5yFwPWWfi30owvO-ascxSLcrq0bgAPISXFtnTppDIft1yR9SuRdpeJ3sAnqHzM8UqLvympDpJqOhrTTDFmvAWD8NqA')", backgroundSize: 'cover', backgroundPosition: 'center', opacity: 0.8 }}></div>
                  </div>
                  <div className="position-absolute top-50 start-50 translate-middle text-center z-1">
                    <span className="material-symbols-outlined text-danger" style={{ fontSize: '64px', fontVariationSettings: "'FILL' 1", filter: 'drop-shadow(0px 4px 4px rgba(0,0,0,0.25))' }}>location_on</span>
                    <div className="bg-white px-3 py-2 rounded-3 shadow-lg fw-bold text-dark mt-2 text-nowrap">Cardiology Dept.</div>
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
                <span className="h4 fw-bold mb-0">ClinicalCare</span>
              </div>
              <p className="text-white-50 small mb-0">© 2024 ClinicalCare Health Systems. All rights reserved.</p>
            </div>
            
            <div className="col-md-8 text-center text-md-end">
              <ul className="list-inline mb-0">
                <li className="list-inline-item mx-3"><a className="text-white-50 text-decoration-none hover-white" href="#">Privacy Policy</a></li>
                <li className="list-inline-item mx-3"><a className="text-white-50 text-decoration-none hover-white" href="#">Terms of Service</a></li>
                <li className="list-inline-item mx-3"><a className="text-white-50 text-decoration-none hover-white" href="#">Accessibility</a></li>
                <li className="list-inline-item mx-3"><a className="text-white-50 text-decoration-none hover-white" href="#">Cookie Settings</a></li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default CardiologyServicesMedicoreHealth;
