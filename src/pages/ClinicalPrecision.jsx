import React from 'react';

const ClinicalPrecision = () => {
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
            <a className="font-label-md text-label-md text-on-surface-variant hover:text-primary transition-colors" href="/cardiology_services_medicore_health">Services</a>
            <a className="font-label-md text-label-md text-on-surface-variant hover:text-primary transition-colors" href="#">Doctors</a>
            <a className="font-label-md text-label-md text-primary border-b-2 border-primary font-bold pb-1" href="#">Technology</a>
            <a className="font-label-md text-label-md text-on-surface-variant hover:text-primary transition-colors" href="#">About</a>
          </div>
          <div className="flex items-center gap-4">
            <button className="material-symbols-outlined text-on-surface-variant hover:text-primary transition-colors cursor-pointer">notifications</button>
            <button className="material-symbols-outlined text-on-surface-variant hover:text-primary transition-colors cursor-pointer">help</button>
            <button className="bg-primary text-on-primary px-6 py-2 rounded-lg font-label-md hover:bg-primary-container transition-all active:scale-95">
              Patient Portal
            </button>
          </div>
        </nav>
      </header>

      <main className="pt-20">
        {/* Hero Section */}
        <section className="relative min-h-[60vh] flex items-center overflow-hidden px-margin-mobile md:px-margin-desktop bg-surface-container-low">
          <div className="max-w-[1280px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center w-full z-10 py-16">
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary-container text-on-secondary-container mb-2">
                <span className="material-symbols-outlined text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>precision_manufacturing</span>
                <span className="text-label-sm font-label-sm">STATE-OF-THE-ART</span>
              </div>
              <h1 className="font-display-lg text-display-lg text-on-surface leading-tight">
                Clinical Precision at Every Step
              </h1>
              <p className="font-body-lg text-body-lg text-on-surface-variant max-w-lg">
                Discover how MediCore leverages next-generation medical technology, artificial intelligence, and robotic assistance to ensure unparalleled accuracy in diagnosis and treatment.
              </p>
              <div className="flex gap-4 pt-4">
                <button className="bg-primary text-on-primary px-8 py-3 rounded-xl font-label-md text-lg hover:shadow-lg transition-all active:scale-95">
                  Explore Facilities
                </button>
              </div>
            </div>
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-white aspect-[4/3]">
              <img className="w-full h-full object-cover" alt="Advanced robotic surgery room" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBEWnuJYKiItVG-pC-AhOUA32JyzMkBSfpJ3DV7vqB2mwYPJZqO3QKTm3BOmvrtOZuTX5VOT4-nTyGtGaFNfNrbR-XOrT9sBrWgACQutDZF_0GFvfNFasgM_1Yxp3aZ2sYa1O5A1nkpI8op_2joN8QqA3tToSceu0UzTRFBOkb6ONdn6oLAqEwRsNsGBWXmjvmz2Nac-qmxh4b9CdeuV2f2isUN4uBRaJEN-DS2QDxIYQLhsoIILmACzA" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              <div className="absolute bottom-6 left-6 text-white">
                <div className="font-headline-md font-bold">Robotic Surgery Wing</div>
                <div className="font-body-sm opacity-90">Minimally invasive, maximum precision.</div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-24 bg-surface px-margin-mobile md:px-margin-desktop">
          <div className="max-w-[1280px] mx-auto text-center mb-16">
            <h2 className="font-headline-lg text-headline-lg text-on-surface mb-4">Pioneering Healthcare Innovation</h2>
            <p className="text-on-surface-variant max-w-2xl mx-auto">We continually invest in the latest advancements to offer our patients the safest, fastest, and most effective treatments available today.</p>
          </div>
          
          <div className="max-w-[1280px] mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="bg-surface-container rounded-[2rem] p-8 border border-outline-variant hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 rounded-full bg-primary-container text-on-primary-container flex items-center justify-center mb-6">
                <span className="material-symbols-outlined text-3xl">biotech</span>
              </div>
              <h3 className="font-headline-md text-headline-md mb-4 text-on-surface">Advanced Diagnostics</h3>
              <p className="text-body-md text-on-surface-variant">Our high-resolution imaging centers and molecular labs enable early detection and precise targeting of conditions before they advance.</p>
            </div>
            
            {/* Feature 2 */}
            <div className="bg-surface-container rounded-[2rem] p-8 border border-outline-variant hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 rounded-full bg-secondary-container text-on-secondary-container flex items-center justify-center mb-6">
                <span className="material-symbols-outlined text-3xl">memory</span>
              </div>
              <h3 className="font-headline-md text-headline-md mb-4 text-on-surface">AI-Assisted Analysis</h3>
              <p className="text-body-md text-on-surface-variant">By integrating artificial intelligence into our pathology and radiology workflows, we double-check findings and drastically reduce human error.</p>
            </div>
            
            {/* Feature 3 */}
            <div className="bg-surface-container rounded-[2rem] p-8 border border-outline-variant hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 rounded-full bg-tertiary-container text-on-tertiary-container flex items-center justify-center mb-6">
                <span className="material-symbols-outlined text-3xl">settings_accessibility</span>
              </div>
              <h3 className="font-headline-md text-headline-md mb-4 text-on-surface">Robotic Prosthetics</h3>
              <p className="text-body-md text-on-surface-variant">Our orthopedic centers offer custom 3D-printed joints and robotic-assisted surgeries for faster recovery times and perfect alignment.</p>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-surface-container-highest border-t border-outline-variant">
        <div className="flex flex-col md:flex-row justify-between items-center px-margin-desktop py-12 w-full max-w-[1280px] mx-auto">
          <div className="mb-8 md:mb-0">
            <div className="flex items-center gap-2 mb-4">
              <span className="material-symbols-outlined text-primary" style={{ fontVariationSettings: "'FILL' 1" }}>medical_services</span>
              <span className="font-label-md text-label-md font-bold text-on-surface">MediCore Health</span>
            </div>
            <p className="font-body-sm text-body-sm text-on-surface-variant">© 2024 MediCore Healthcare Systems. All rights reserved.</p>
          </div>
          <div className="flex gap-4">
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

export default ClinicalPrecision;
