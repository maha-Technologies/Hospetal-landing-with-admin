import React from 'react';

const ClinicalPrecision = () => {
  return (
    <div>
      {/* TopNavBar */}
      <header className="navbar navbar-expand-lg navbar-light bg-white border-bottom sticky-top py-3 shadow-sm">
        <div className="container">
          <a className="navbar-brand d-flex align-items-center gap-2 text-primary fw-bold" href="/">
            <span className="material-symbols-outlined fs-3" style={{ fontVariationSettings: "'FILL' 1" }}>medical_services</span>
            <span>MediCore Health</span>
          </a>
          <div className="collapse navbar-collapse justify-content-center">
            <ul className="navbar-nav gap-4">
              <li className="nav-item">
                <a className="nav-link text-secondary" href="/cardiology">Services</a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-secondary" href="/doctors">Doctors</a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-primary fw-bold border-bottom border-primary border-2 px-0" href="#">Technology</a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-secondary" href="#">About</a>
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
        <section className="position-relative bg-light overflow-hidden">
          <div className="container py-5">
            <div className="row align-items-center g-5 py-5">
              <div className="col-lg-6">
                <div className="d-inline-flex align-items-center gap-2 px-3 py-1 rounded-pill bg-success bg-opacity-10 text-success small fw-bold mb-4">
                  <span className="material-symbols-outlined fs-5" style={{ fontVariationSettings: "'FILL' 1" }}>precision_manufacturing</span>
                  <span className="tracking-wide">STATE-OF-THE-ART</span>
                </div>
                <h1 className="display-4 fw-bold text-dark mb-4 lh-sm">
                  Clinical Precision at Every Step
                </h1>
                <p className="lead text-secondary mb-5">
                  Discover how MediCore leverages next-generation medical technology, artificial intelligence, and robotic assistance to ensure unparalleled accuracy in diagnosis and treatment.
                </p>
                <button className="btn btn-primary btn-lg fw-bold px-5 py-3 rounded-3 shadow-sm hover-shadow">
                  Explore Facilities
                </button>
              </div>
              <div className="col-lg-6">
                <div className="rounded-4 overflow-hidden shadow-lg border border-4 border-white position-relative" style={{ height: '400px' }}>
                  <img className="w-100 h-100 object-fit-cover" alt="Advanced robotic surgery room" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBEWnuJYKiItVG-pC-AhOUA32JyzMkBSfpJ3DV7vqB2mwYPJZqO3QKTm3BOmvrtOZuTX5VOT4-nTyGtGaFNfNrbR-XOrT9sBrWgACQutDZF_0GFvfNFasgM_1Yxp3aZ2sYa1O5A1nkpI8op_2joN8QqA3tToSceu0UzTRFBOkb6ONdn6oLAqEwRsNsGBWXmjvmz2Nac-qmxh4b9CdeuV2f2isUN4uBRaJEN-DS2QDxIYQLhsoIILmACzA" />
                  <div className="position-absolute bottom-0 start-0 w-100 p-4 pt-5" style={{ background: 'linear-gradient(to top, rgba(0,0,0,0.8), transparent)' }}>
                    <div className="h4 fw-bold text-white mb-1">Robotic Surgery Wing</div>
                    <div className="text-white-50 small fw-bold">Minimally invasive, maximum precision.</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-5 bg-white">
          <div className="container py-5">
            <div className="text-center mb-5">
              <h2 className="display-6 fw-bold text-dark mb-3">Pioneering Healthcare Innovation</h2>
              <p className="lead text-muted col-lg-8 mx-auto">We continually invest in the latest advancements to offer our patients the safest, fastest, and most effective treatments available today.</p>
            </div>
            
            <div className="row g-4 pt-4">
              {/* Feature 1 */}
              <div className="col-lg-4">
                <div className="card h-100 bg-light border border-light rounded-4 p-4 p-lg-5 hover-shadow">
                  <div className="rounded-circle bg-primary bg-opacity-10 text-primary d-flex align-items-center justify-content-center mb-4" style={{ width: '64px', height: '64px' }}>
                    <span className="material-symbols-outlined fs-2">biotech</span>
                  </div>
                  <h3 className="h4 fw-bold text-dark mb-3">Advanced Diagnostics</h3>
                  <p className="text-secondary mb-0">Our high-resolution imaging centers and molecular labs enable early detection and precise targeting of conditions before they advance.</p>
                </div>
              </div>
              
              {/* Feature 2 */}
              <div className="col-lg-4">
                <div className="card h-100 bg-light border border-light rounded-4 p-4 p-lg-5 hover-shadow">
                  <div className="rounded-circle bg-info bg-opacity-10 text-info d-flex align-items-center justify-content-center mb-4" style={{ width: '64px', height: '64px' }}>
                    <span className="material-symbols-outlined fs-2">memory</span>
                  </div>
                  <h3 className="h4 fw-bold text-dark mb-3">AI-Assisted Analysis</h3>
                  <p className="text-secondary mb-0">By integrating artificial intelligence into our pathology and radiology workflows, we double-check findings and drastically reduce human error.</p>
                </div>
              </div>
              
              {/* Feature 3 */}
              <div className="col-lg-4">
                <div className="card h-100 bg-light border border-light rounded-4 p-4 p-lg-5 hover-shadow">
                  <div className="rounded-circle bg-danger bg-opacity-10 text-danger d-flex align-items-center justify-content-center mb-4" style={{ width: '64px', height: '64px' }}>
                    <span className="material-symbols-outlined fs-2">settings_accessibility</span>
                  </div>
                  <h3 className="h4 fw-bold text-dark mb-3">Robotic Prosthetics</h3>
                  <p className="text-secondary mb-0">Our orthopedic centers offer custom 3D-printed joints and robotic-assisted surgeries for faster recovery times and perfect alignment.</p>
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
            <div className="col-md-6 text-center text-md-start mb-4 mb-md-0">
              <div className="d-flex align-items-center justify-content-center justify-content-md-start gap-2 mb-3">
                <span className="material-symbols-outlined text-primary fs-3" style={{ fontVariationSettings: "'FILL' 1" }}>medical_services</span>
                <span className="h4 fw-bold mb-0">MediCore Health</span>
              </div>
              <p className="text-white-50 small mb-0">© 2024 MediCore Healthcare Systems. All rights reserved.</p>
            </div>
            
            <div className="col-md-6 text-center text-md-end">
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

export default ClinicalPrecision;
