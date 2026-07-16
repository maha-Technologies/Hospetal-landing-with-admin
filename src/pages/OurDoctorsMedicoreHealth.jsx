import React from 'react';

const OurDoctorsMedicoreHealth = () => {
    return (
        <div>
            {/* TopNavBar */}
            <header className="navbar navbar-expand-lg navbar-light bg-white border-bottom sticky-top py-3">
                <div className="container">
                    <a className="navbar-brand text-primary fw-bold fs-4" href="#">ClinicalCare</a>
                    <div className="collapse navbar-collapse justify-content-center">
                        <ul className="navbar-nav gap-4">
                            <li className="nav-item">
                                <a className="nav-link text-secondary" href="#">Services</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link text-primary border-bottom border-primary border-2 fw-bold" href="#">Find a Doctor</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link text-secondary" href="#">About Us</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link text-secondary" href="#">Contact</a>
                            </li>
                        </ul>
                    </div>
                    <button className="btn btn-primary px-4 py-2 rounded-3">Patient Portal</button>
                </div>
            </header>
            
            <main className="container py-5">
                {/* Hero Section */}
                <section className="mb-5 text-center text-md-start">
                    <h1 className="display-5 text-dark fw-bold mb-3">Our Specialists</h1>
                    <p className="lead text-muted col-md-8 mx-auto mx-md-0">Connect with world-class medical professionals committed to providing precision care and clinical excellence.</p>
                </section>
                
                {/* Search & Filter Bar */}
                <section className="mb-5">
                    <div className="card shadow-sm border-0 rounded-4">
                        <div className="card-body p-4 d-flex flex-column flex-md-row gap-3 align-items-center">
                            <div className="position-relative flex-grow-1 w-100">
                                <span className="material-symbols-outlined position-absolute top-50 translate-middle-y ms-3 text-muted">search</span>
                                <input className="form-control form-control-lg bg-light border-0 ps-5 rounded-3" placeholder="Search by name, specialty, or condition..." type="text"/>
                            </div>
                            <div className="d-flex gap-2 w-100 w-md-auto">
                                <select className="form-select bg-light border-0 rounded-3">
                                    <option>All Specialties</option>
                                    <option>Cardiology</option>
                                    <option>Neurology</option>
                                    <option>Pediatrics</option>
                                </select>
                                <select className="form-select bg-light border-0 rounded-3">
                                    <option>Availability</option>
                                    <option>Today</option>
                                    <option>This Week</option>
                                </select>
                                <button className="btn btn-secondary rounded-3 d-flex align-items-center justify-content-center px-3">
                                    <span className="material-symbols-outlined">tune</span>
                                </button>
                            </div>
                        </div>
                    </div>
                </section>
                
                {/* Doctor Directory Bento Grid */}
                <div className="row g-4">
                    {/* Doctor Card 1 */}
                    <div className="col-12 col-md-4">
                        <div className="card h-100 border rounded-4 shadow-sm hover-shadow transition">
                            <div className="position-relative p-3 pb-0">
                                <img className="card-img-top rounded-3 object-fit-cover" style={{height: '250px'}} alt="Dr. Sarah Chen" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCcexe6QDXW27N497OXaoR2xTcVZrsYqkA5koL_g-Ro657GsOngVv3q7vAT8xymRoA948WIMqZyxK0_MiYl6Tb-FkFcXK94OqW8cXznMwJnt3oKcUEBQrcT-dwkaFihK0FKMRhpytLHHcPyU4sZjB9H__0LKgf8pGwrupnlrjDJUb06B7eIfLCy0lCxUq0u1oN9NVpfh2LvAQ4kZyLofMlU2r3Eo940CnsSEcOASZk7AIOV1EVa6FC8Eg"/>
                                <span className="position-absolute top-0 end-0 mt-4 me-4 badge bg-success rounded-pill px-3 py-2">Available Today</span>
                            </div>
                            <div className="card-body d-flex flex-column">
                                <h3 className="h5 text-primary fw-bold mb-1">Dr. Sarah Chen</h3>
                                <p className="text-secondary small fw-bold mb-3">Senior Cardiologist</p>
                                <p className="card-text text-muted small flex-grow-1 mb-4">Specializing in non-invasive cardiac imaging and preventative heart health for over 15 years.</p>
                                <div className="d-flex justify-content-between align-items-center mt-auto">
                                    <div className="d-flex align-items-center gap-1">
                                        <span className="material-symbols-outlined text-warning fs-6" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                                        <span className="small fw-bold">4.9 (120 reviews)</span>
                                    </div>
                                    <button className="btn btn-link text-primary text-decoration-none p-0 d-flex align-items-center gap-1 small fw-bold">
                                        View Profile <span className="material-symbols-outlined fs-6">arrow_forward</span>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    {/* Doctor Card 2 (Featured Wide) */}
                    <div className="col-12 col-md-8">
                        <div className="card bg-primary text-white h-100 rounded-4 overflow-hidden border-0 shadow">
                            <div className="row g-0 h-100 position-relative">
                                <div className="position-absolute top-0 end-0 p-4 opacity-10">
                                    <span className="material-symbols-outlined" style={{fontSize: '120px'}}>medical_services</span>
                                </div>
                                <div className="col-md-5 p-4 pe-md-0">
                                    <img className="img-fluid rounded-4 h-100 w-100 object-fit-cover shadow" alt="Dr. James Wilson" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBEhrKrW3MPBff4axnS_6n_l8jPsI0B8iveZIyhI4kgi-08cs0kTsDn-mbsSlS-VCz5n4xmWWvId6BvArW7DXzkjl9DtJe8NZmBqGVJD59DrEeQZeRmO9mSgBPqiH8VBuR_5rpubbj0yQvnwyaSXO6wdNPJ-hspE5R5K_tZLpMDELWugmDo2xe0NL-LBFje7tkf6ZOFEhrtkuBVm6817AG_jDJzKLBHiJ87ZrQ7ykmqJdPFAxw6fABJ5w"/>
                                </div>
                                <div className="col-md-7">
                                    <div className="card-body p-4 p-md-5 d-flex flex-column h-100 justify-content-center z-1 position-relative">
                                        <div><span className="badge bg-light text-primary rounded-pill mb-3">Featured Specialist</span></div>
                                        <h2 className="display-6 fw-bold mb-2">Dr. James Wilson</h2>
                                        <p className="h6 text-light mb-3 opacity-75">Neurology &amp; Cognitive Research</p>
                                        <p className="card-text text-light opacity-75 mb-4">Award-winning researcher and clinician focused on neurodegenerative disorders and advanced neuro-diagnostics. Dr. Wilson leads our Center for Neurological Excellence.</p>
                                        <div className="d-flex gap-3 mt-auto">
                                            <button className="btn btn-light text-primary fw-bold px-4 py-2">Book Appointment</button>
                                            <button className="btn btn-outline-light fw-bold px-4 py-2">Full Biography</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    {/* Doctor Card 3 */}
                    <div className="col-12 col-md-4">
                        <div className="card h-100 border rounded-4 shadow-sm hover-shadow transition">
                            <div className="position-relative p-3 pb-0">
                                <img className="card-img-top rounded-3 object-fit-cover" style={{height: '250px'}} alt="Dr. Elena Rodriguez" src="https://lh3.googleusercontent.com/aida-public/AB6AXuB7gabNf6CDeL0E9pYXVAR3I3hIwzUUix3rWNkVebu0944CAxkyD370c5Ticf0xIfzD8OmXUzPlXfkLJT_tIqwACHrEY6MVbpTd9QFmErLslid33edBUk0QmlJZrHbVa55mSpOdF6ICI_pY48r-gOOHMpC1kOd1stomaqjWYBRfjCT3cFwYL0Zl-0b4VNOmVNfTkSi3C-FGmVPA6bpUSRoTdnVB4ZemJb90Qxgc8a483No5c4zSrRXqrA"/>
                                <span className="position-absolute top-0 end-0 mt-4 me-4 badge bg-secondary rounded-pill px-3 py-2">Next: Tomorrow</span>
                            </div>
                            <div className="card-body d-flex flex-column">
                                <h3 className="h5 text-primary fw-bold mb-1">Dr. Elena Rodriguez</h3>
                                <p className="text-secondary small fw-bold mb-3">Pediatric Medicine</p>
                                <p className="card-text text-muted small flex-grow-1 mb-4">Dedicated to compassionate care for children from infancy through adolescence with a holistic family approach.</p>
                                <div className="d-flex justify-content-between align-items-center mt-auto">
                                    <div className="d-flex align-items-center gap-1">
                                        <span className="material-symbols-outlined text-warning fs-6" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                                        <span className="small fw-bold">5.0 (89 reviews)</span>
                                    </div>
                                    <button className="btn btn-link text-primary text-decoration-none p-0 d-flex align-items-center gap-1 small fw-bold">
                                        View Profile <span className="material-symbols-outlined fs-6">arrow_forward</span>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    {/* Doctor Card 4 */}
                    <div className="col-12 col-md-4">
                        <div className="card h-100 border bg-light rounded-4">
                            <div className="card-body p-4 d-flex gap-4 align-items-center">
                                <img className="rounded-3 object-fit-cover" style={{width: '100px', height: '100px'}} alt="Dr. Marcus Thorne" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAadGmsWGAh8sB1kzozBQbCzLaw5aoaBUpF9sN4JuYC4E5OpTZjZn5QncfWd7H4nk7k1G8SiIRNJSjAahtbfXtiAIIuJrP7vFPsqqtDSfnIQk7kdAUaxgYPwxg6BkEms9rDt3LPtRVguzvy6dqD6bexWSs8ubUxkaob9CF5WJimsh1iTUi95COEn1uhKIowOIAwpMjK8WkMm-uzN3o4J4soPAOUZIE0On2flcvKk4pUtXk7M1iuJAITDQ"/>
                                <div>
                                    <h3 className="h6 text-dark fw-bold mb-1">Dr. Marcus Thorne</h3>
                                    <p className="text-secondary small mb-2">Orthopedic Surgeon</p>
                                    <div className="d-flex gap-2 mb-2 flex-wrap">
                                        <span className="badge border text-secondary bg-white">JOINT REPLACEMENT</span>
                                    </div>
                                    <p className="card-text text-muted small mb-0" style={{fontSize: '12px'}}>Expert in robotic surgery and rehabilitative care.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    {/* Doctor Card 5 */}
                    <div className="col-12 col-md-4">
                        <div className="card h-100 border bg-light rounded-4">
                            <div className="card-body p-4 d-flex gap-4 align-items-center">
                                <img className="rounded-3 object-fit-cover" style={{width: '100px', height: '100px'}} alt="Dr. Sophie Laurent" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBqLBQDEYW3MjsIlZy4zpWWFiWxMSjVk_rJ80VNggi5VRNi4Q4JjeYtZf01neQbuGqDPgyKsdfzmWrl54-nQTwhkuauhzWeNexNqPbkAcXNiDg82F0fPR7FR2dTJaog0wzAZYXAvadSK3hhNiAqZYgdwY25bkAG9nHNHiwbbdV_IzK3qX_1cyXC3mQRt0AjrLDAFX-nlkbElts1M2Zb68d7GO4OnqKjbTi6DkE4UurvCTKqnEgXsLak5w"/>
                                <div>
                                    <h3 className="h6 text-dark fw-bold mb-1">Dr. Sophie Laurent</h3>
                                    <p className="text-secondary small mb-2">Dermatology &amp; Aesthetics</p>
                                    <div className="d-flex gap-2 mb-2 flex-wrap">
                                        <span className="badge border text-secondary bg-white">COSMETIC</span>
                                        <span className="badge border text-secondary bg-white">MEDICAL</span>
                                    </div>
                                    <p className="card-text text-muted small mb-0" style={{fontSize: '12px'}}>Comprehensive skin health management and advanced laser therapies.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                
                {/* Appointment CTA Section */}
                <section className="mt-5 bg-dark rounded-4 p-4 p-md-5 d-flex flex-column flex-md-row align-items-center justify-content-between position-relative overflow-hidden">
                    <div className="position-relative z-1 text-center text-md-start mb-4 mb-md-0">
                        <h2 className="h2 text-white fw-bold mb-2">Can't find who you're looking for?</h2>
                        <p className="text-white-50 mb-0 col-md-10">Our patient coordinators are available 24/7 to help you find the right specialist for your specific needs.</p>
                    </div>
                    <div className="position-relative z-1">
                        <button className="btn btn-primary btn-lg d-flex align-items-center gap-2 fw-bold px-4">
                            <span className="material-symbols-outlined">call</span>
                            Talk to a Coordinator
                        </button>
                    </div>
                </section>
            </main>
            
            {/* Footer */}
            <footer className="bg-dark text-white-50 mt-auto py-5">
                <div className="container d-flex flex-column flex-md-row justify-content-between align-items-center gap-4">
                    <div className="text-center text-md-start">
                        <div className="fs-4 text-white fw-bold mb-2">ClinicalCare</div>
                        <p className="small mb-0">© 2024 ClinicalCare Health Systems. All rights reserved.</p>
                    </div>
                    <ul className="list-inline mb-0 d-flex flex-wrap justify-content-center gap-4">
                        <li className="list-inline-item m-0"><a className="text-white-50 text-decoration-none small hover-white" href="#">Privacy Policy</a></li>
                        <li className="list-inline-item m-0"><a className="text-white-50 text-decoration-none small hover-white" href="#">Terms of Service</a></li>
                        <li className="list-inline-item m-0"><a className="text-white-50 text-decoration-none small hover-white" href="#">Accessibility</a></li>
                        <li className="list-inline-item m-0"><a className="text-white-50 text-decoration-none small hover-white" href="#">Cookie Settings</a></li>
                    </ul>
                </div>
            </footer>
        </div>
    );
};

export default OurDoctorsMedicoreHealth;
