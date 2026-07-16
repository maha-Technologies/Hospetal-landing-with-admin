import React from 'react';

const MedicoreHealthLandingPage = () => {
    return (
        <div dangerouslySetInnerHTML={{ __html: `
<!-- TopNavBar -->
<header class="fixed top-0 left-0 w-full z-50 bg-surface/80 backdrop-blur-md border-b border-outline-variant">
<nav class="flex justify-between items-center w-full px-margin-desktop max-w-[1280px] mx-auto h-20">
<div class="flex items-center gap-2">
<span class="material-symbols-outlined text-primary text-3xl" style="font-variation-settings: 'FILL' 1;">medical_services</span>
<span class="font-headline-md text-headline-md font-bold text-primary">MediCore Health</span>
</div>
<div class="hidden md:flex items-center space-x-8">
<a class="font-label-md text-label-md text-on-surface-variant hover:text-primary transition-colors" href="#services">Services</a>
<a class="font-label-md text-label-md text-on-surface-variant hover:text-primary transition-colors" href="#">Doctors</a>
<a class="font-label-md text-label-md text-on-surface-variant hover:text-primary transition-colors" href="#">About</a>
<a class="font-label-md text-label-md text-on-surface-variant hover:text-primary transition-colors" href="#success-stories">Success Stories</a>
</div>
<div class="flex items-center gap-4">
<button class="material-symbols-outlined text-on-surface-variant hover:text-primary transition-colors cursor-pointer">notifications</button>
<button class="material-symbols-outlined text-on-surface-variant hover:text-primary transition-colors cursor-pointer">help</button>
<button class="bg-primary text-on-primary px-6 py-2 rounded-lg font-label-md hover:bg-primary-container transition-all active:scale-95">
                    New Update
                </button>
</div>
</nav>
</header>
<main class="pt-20">
<!-- Hero Section -->
<section class="relative min-h-[85vh] flex items-center overflow-hidden px-margin-mobile md:px-margin-desktop">
<div class="absolute inset-0 z-0">
<div class="absolute inset-0 bg-gradient-to-r from-surface via-surface/60 to-transparent z-10"></div>
<img class="w-full h-full object-cover" data-alt="A clean, professional wide shot of a modern hospital corridor with high ceilings, glass walls, and bright natural lighting. The scene features a healthcare professional walking calmly in the distance, embodying a sense of clinical efficiency and high-tech medical care. The color palette is dominated by soft whites, clinical blues, and neutral grays for a sterile and sophisticated look." src="https://lh3.googleusercontent.com/aida-public/AB6AXuBEWnuJYKiItVG-pC-AhOUA32JyzMkBSfpJ3DV7vqB2mwYPJZqO3QKTm3BOmvrtOZuTX5VOT4-nTyGtGaFNfNrbR-XOrT9sBrWgACQutDZF_0GFvfNFasgM_1Yxp3aZ2sYa1O5A1nkpI8op_2joN8QqA3tToSceu0UzTRFBOkb6ONdn6oLAqEwRsNsGBWXmjvmz2Nac-qmxh4b9CdeuV2f2isUN4uBRaJEN-DS2QDxIYQLhsoIILmACzA"/>
</div>
<div class="relative z-20 max-w-2xl">
<div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary-container text-on-secondary-container mb-6 animate-fade-in">
<span class="material-symbols-outlined text-sm" style="font-variation-settings: 'FILL' 1;">verified</span>
<span class="text-label-sm font-label-sm">ISO 9001 CERTIFIED HEALTHCARE</span>
</div>
<h1 class="font-display-lg text-display-lg text-on-surface mb-6 leading-tight">
                    Healthcare You <br/><span class="text-primary">Can Trust</span>
</h1>
<p class="font-body-lg text-body-lg text-on-surface-variant mb-10 max-w-lg">
                    Experience world-class medical expertise combined with empathetic patient care. At MediCore, we prioritize your long-term wellness through innovation.
                </p>
<div class="flex flex-wrap gap-4">
<a class="bg-primary text-on-primary px-10 py-4 rounded-xl font-label-md text-lg hover:shadow-lg hover:shadow-primary/20 transition-all active:scale-95 flex items-center gap-2" href="#services">
                        Explore Services
                        <span class="material-symbols-outlined">arrow_forward</span>
</a>
<button class="border-2 border-primary text-primary px-10 py-4 rounded-xl font-label-md text-lg hover:bg-primary-fixed transition-all">
                        Learn More
                    </button>
</div>
</div>
<!-- Stats Floating Card -->
<div class="hidden lg:block absolute right-margin-desktop bottom-1/4 glass-effect p-8 rounded-3xl w-80 shadow-2xl">
<div class="flex flex-col gap-6">
<div class="flex items-center gap-4">
<div class="w-12 h-12 rounded-full bg-primary-container flex items-center justify-center text-on-primary-container">
<span class="material-symbols-outlined">group</span>
</div>
<div>
<div class="text-headline-md font-bold">15k+</div>
<div class="text-body-sm text-on-surface-variant">Patients Annually</div>
</div>
</div>
<div class="flex items-center gap-4">
<div class="w-12 h-12 rounded-full bg-secondary-container flex items-center justify-center text-on-secondary-container">
<span class="material-symbols-outlined">rewarded_ads</span>
</div>
<div>
<div class="text-headline-md font-bold">99%</div>
<div class="text-body-sm text-on-surface-variant">Satisfaction Rate</div>
</div>
</div>
</div>
</div>
</section>
<!-- Services Section (Bento Grid) -->
<section class="py-24 bg-surface-container-lowest px-margin-mobile md:px-margin-desktop" id="services">
<div class="max-w-[1280px] mx-auto">
<div class="text-center mb-16">
<h2 class="font-headline-lg text-headline-lg text-on-surface mb-4">Specialized Medical Care</h2>
<p class="text-on-surface-variant max-w-2xl mx-auto">Our multidisciplinary teams use advanced technology to provide comprehensive solutions across all major healthcare fields.</p>
</div>
<div class="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-gutter">
<!-- Cardiology (Large) -->
<div class="md:col-span-2 bento-card bg-primary-container/10 border border-primary/10 rounded-3xl p-8 relative overflow-hidden group">
<span class="material-symbols-outlined text-primary text-5xl mb-6">cardiology</span>
<h3 class="font-headline-md text-headline-md mb-2">Cardiology</h3>
<p class="text-on-surface-variant mb-6 max-w-sm">Heart health excellence with state-of-the-art diagnostic labs and minimally invasive surgical solutions.</p>
<a class="inline-flex items-center text-primary font-label-md gap-2 group-hover:gap-4 transition-all" href="#">
                            View Department <span class="material-symbols-outlined">east</span>
</a>
<div class="absolute -right-4 -bottom-4 opacity-5 group-hover:opacity-10 transition-opacity">
<span class="material-symbols-outlined text-[180px]">monitor_heart</span>
</div>
</div>
<!-- Neurology -->
<div class="bento-card bg-surface border border-outline-variant rounded-3xl p-8 flex flex-col justify-between">
<div>
<span class="material-symbols-outlined text-secondary text-4xl mb-6">psychology</span>
<h3 class="font-headline-md text-headline-md mb-2">Neurology</h3>
<p class="text-body-sm text-on-surface-variant">Expert management of complex neurological disorders and brain health.</p>
</div>
<a class="mt-8 material-symbols-outlined text-on-surface-variant hover:text-primary" href="#">arrow_circle_right</a>
</div>
<!-- Pediatrics -->
<div class="bento-card bg-surface border border-outline-variant rounded-3xl p-8 flex flex-col justify-between">
<div>
<span class="material-symbols-outlined text-on-error-container text-4xl mb-6">child_care</span>
<h3 class="font-headline-md text-headline-md mb-2">Pediatrics</h3>
<p class="text-body-sm text-on-surface-variant">Compassionate specialized care for our youngest patients from birth through adolescence.</p>
</div>
<a class="mt-8 material-symbols-outlined text-on-surface-variant hover:text-primary" href="#">arrow_circle_right</a>
</div>
<!-- Additional Services -->
<div class="bento-card bg-surface border border-outline-variant rounded-3xl p-8">
<span class="material-symbols-outlined text-primary text-3xl mb-4">emergency</span>
<h4 class="font-label-md text-label-md mb-2">24/7 Emergency</h4>
<p class="text-body-sm text-on-surface-variant">Rapid response unit.</p>
</div>
<div class="bento-card bg-surface border border-outline-variant rounded-3xl p-8">
<span class="material-symbols-outlined text-primary text-3xl mb-4">biotech</span>
<h4 class="font-label-md text-label-md mb-2">Advanced Labs</h4>
<p class="text-body-sm text-on-surface-variant">High-precision diagnostics.</p>
</div>
<div class="bento-card bg-secondary-container text-on-secondary-container rounded-3xl p-8 md:col-span-2 flex items-center justify-between">
<div>
<h3 class="font-headline-md text-headline-md mb-2">Looking for something else?</h3>
<p class="font-body-sm opacity-90">Browse our directory of over 40 specialized clinics.</p>
</div>
<button class="bg-on-secondary-container text-secondary-container px-6 py-3 rounded-xl font-label-md">Full Directory</button>
</div>
</div>
</div>
</section>
<!-- Success Stories Section -->
<section class="py-24 bg-surface px-margin-mobile md:px-margin-desktop overflow-hidden" id="success-stories">
<div class="max-w-[1280px] mx-auto">
<div class="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
<div>
<h2 class="font-headline-lg text-headline-lg text-on-surface mb-2">Success Stories</h2>
<p class="text-on-surface-variant">Real journeys of recovery and hope from our patients.</p>
</div>
<div class="flex gap-2">
<button class="w-12 h-12 rounded-full border border-outline-variant flex items-center justify-center hover:bg-surface-variant transition-colors">
<span class="material-symbols-outlined">chevron_left</span>
</button>
<button class="w-12 h-12 rounded-full border border-outline-variant flex items-center justify-center hover:bg-surface-variant transition-colors">
<span class="material-symbols-outlined">chevron_right</span>
</button>
</div>
</div>
<div class="grid grid-cols-1 md:grid-cols-3 gap-8">
<!-- Testimonial 1 -->
<div class="bg-surface-container rounded-[2rem] p-8 flex flex-col h-full">
<div class="mb-8">
<span class="material-symbols-outlined text-primary text-4xl" style="font-variation-settings: 'FILL' 1;">format_quote</span>
</div>
<p class="font-body-lg text-body-lg text-on-surface mb-8 italic">"The cardiac team at MediCore didn't just save my life; they gave me back my future. The recovery plan was personalized and surprisingly easy to follow."</p>
<div class="mt-auto flex items-center gap-4">
<img class="w-14 h-14 rounded-full object-cover grayscale hover:grayscale-0 transition-all duration-500" data-alt="A portrait of a healthy middle-aged man smiling warmly against a soft-focus garden background. He looks vibrant and active, wearing casual athletic wear to suggest a successful recovery. The lighting is golden-hour soft, conveying a sense of renewed vitality and hope in a clean healthcare context." src="https://lh3.googleusercontent.com/aida-public/AB6AXuDHHUANWi0i-O2NditsVocXvRqIOY4Kma1ZrI_8r53CMVWtVEDvf21jpiPTalU4x0SJE3jO9ej5ep2A5S2H00WsA825p9401KlGm-tEZt_pmyDOo2iTZ6dmpKNSwyWDfwOaCoqMO-x_N8Z4Emu_5oAOkirB8-wEKxB8tM_n_ByfifCWaUwA8B_H_WEB9g0yVPD5-zz5uHgJ_GgbW9qPmYBH_UPraA7Hd9_ZfjzEBz4376vv4pY-_QwsRQ"/>
<div>
<div class="font-label-md text-label-md">Robert Henderson</div>
<div class="text-body-sm text-on-surface-variant">Cardiology Patient</div>
</div>
</div>
</div>
<!-- Testimonial 2 -->
<div class="bg-surface-container rounded-[2rem] p-8 flex flex-col h-full">
<div class="mb-8">
<span class="material-symbols-outlined text-primary text-4xl" style="font-variation-settings: 'FILL' 1;">format_quote</span>
</div>
<p class="font-body-lg text-body-lg text-on-surface mb-8 italic">"Finding specialized pediatric care for my daughter was our top priority. The doctors here treat her like their own, with so much patience and joy."</p>
<div class="mt-auto flex items-center gap-4">
<img class="w-14 h-14 rounded-full object-cover grayscale hover:grayscale-0 transition-all duration-500" data-alt="A close-up portrait of a young mother smiling brightly while holding her toddler. They are both looking towards the camera with genuine happiness, set against a bright, airy medical office with soft pastel accents. The image feels warm, trustworthy, and clinical-clean, emphasizing a successful pediatric care outcome." src="https://lh3.googleusercontent.com/aida-public/AB6AXuD05Qrm-ChNDO6bs_Iz7Ynl-mElOy339wJkfAn_eh_KqbV6rbnIF24j-RSjTBKfRabtI2luKQHvqNff6F6JYVFFPMmYtCTleRKnkKwN7Hbr2Hexz5zWZ3nAU_TEx0je7lu5_kcLjhCS-qnrsXN2r2uMY8rmtHxadTgWB1zVb5u7BGiZgSjwILn5TwUlD2wb5A-ZPFHXXVEyHZ5YDXCq2taZs4BLIrnpIG4_upK75Rtij9zsW2twPzapiA"/>
<div>
<div class="font-label-md text-label-md">Sarah Jenkins</div>
<div class="text-body-sm text-on-surface-variant">Mother of Pediatrics Patient</div>
</div>
</div>
</div>
<!-- Testimonial 3 -->
<div class="bg-surface-container rounded-[2rem] p-8 flex flex-col h-full">
<div class="mb-8">
<span class="material-symbols-outlined text-primary text-4xl" style="font-variation-settings: 'FILL' 1;">format_quote</span>
</div>
<p class="font-body-lg text-body-lg text-on-surface mb-8 italic">"After years of chronic back pain, the neurology department finally identified the root cause. I am now 6 months pain-free and back to hiking."</p>
<div class="mt-auto flex items-center gap-4">
<img class="w-14 h-14 rounded-full object-cover grayscale hover:grayscale-0 transition-all duration-500" data-alt="A portrait of an elderly woman in hiking gear standing on a scenic trail overlooking a valley. She looks strong and determined, with a peaceful smile. The image is crisp and professional, using a natural light palette with subtle clinical blue tones in the sky to align with the MediCore brand aesthetic." src="https://lh3.googleusercontent.com/aida-public/AB6AXuDLMARPYBmIMGZXAvLbvSDIB9h78N6z2WhSe3_geHmNHwCm2ZN6M_BtpZ7ykopTLyPSXN3pzSaOjyKMtYR7lziuOHzoghq0qo7pW4hzww6qPND4nWeRf7_fIjHOHa-q448wuklbNUJAHcrD858wnCELX64TlTZIwOwulH5kU__evZ0C6FiJnOKgWiTmfJpAIMm1EzKtjvhrNzwQGdWwdG3baquUgpkYcI468Vhtw8-WPWmcWvODeCnbdA"/>
<div>
<div class="font-label-md text-label-md">Elena Rodriguez</div>
<div class="text-body-sm text-on-surface-variant">Neurology Patient</div>
</div>
</div>
</div>
</div>
</div>
</section>
<!-- Contact Section -->
<section class="py-24 px-margin-mobile md:px-margin-desktop bg-surface-container-low">
<div class="max-w-[1280px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
<div>
<h2 class="font-headline-lg text-headline-lg text-on-surface mb-6">Get in Touch</h2>
<p class="text-body-lg text-on-surface-variant mb-10">We are here to help you 24/7. Whether you have questions about our services or need to locate a specific department, our team is ready.</p>
<div class="space-y-8">
<div class="flex items-start gap-6">
<div class="w-12 h-12 rounded-2xl bg-white flex items-center justify-center shadow-sm border border-outline-variant">
<span class="material-symbols-outlined text-primary">location_on</span>
</div>
<div>
<div class="font-label-md text-label-md">Main Campus</div>
<div class="text-on-surface-variant">1200 Healthcare Way, Medical District<br/>Chicago, IL 60611</div>
</div>
</div>
<div class="flex items-start gap-6">
<div class="w-12 h-12 rounded-2xl bg-white flex items-center justify-center shadow-sm border border-outline-variant">
<span class="material-symbols-outlined text-primary">call</span>
</div>
<div>
<div class="font-label-md text-label-md">Phone Support</div>
<div class="text-on-surface-variant">General: (555) 123-4567<br/>Emergency: (555) 911-0000</div>
</div>
</div>
<div class="flex items-start gap-6">
<div class="w-12 h-12 rounded-2xl bg-white flex items-center justify-center shadow-sm border border-outline-variant">
<span class="material-symbols-outlined text-primary">mail</span>
</div>
<div>
<div class="font-label-md text-label-md">Email Inquiries</div>
<div class="text-on-surface-variant">contact@medicorehealth.com</div>
</div>
</div>
</div>
</div>
<div class="h-[500px] rounded-[2.5rem] overflow-hidden shadow-2xl border-4 border-white relative group">
<img class="w-full h-full object-cover" data-alt="A stylized, high-contrast digital map of the Chicago Medical District area. The map uses a sophisticated dark blue and slate gray palette with the MediCore Health location clearly highlighted with a glowing pulse effect. The visual style is modern, minimalist, and authoritative, matching a high-end corporate healthcare aesthetic." data-location="Chicago" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBzWz9xmKpHNcBzqw_AEcg7BJiSmiesIV8ErLS5zJVl2puyFVxHMhs03iDkOz4o7HfWVkmGw9T6e4WFRxJ6eqEjFk9f4UJPXmtZ1aQmibuppZr1gJYuvFHPny1lh0XgHkwRb0F6ri1-hWsVFi_TUdCnnujtjr1fWCD6aJqiQ3rGRm28dXw9hcOy28hshQQEf3LVq4WswrWg58EZixOMdLtwbZQL8LwSYCKIMhPwfWjubZkWHQBYTJ6Lqw"/>
<div class="absolute inset-0 bg-primary/10 group-hover:bg-transparent transition-colors duration-500"></div>
<div class="absolute bottom-6 left-6 right-6 glass-effect p-6 rounded-2xl">
<div class="flex justify-between items-center">
<div>
<div class="font-label-md">MediCore Main Tower</div>
<div class="text-body-sm opacity-80">Free parking for patients</div>
</div>
<button class="bg-primary text-white p-3 rounded-full hover:scale-110 transition-transform">
<span class="material-symbols-outlined">directions</span>
</button>
</div>
</div>
</div>
</div>
</section>
</main>
<!-- Footer -->
<footer class="bg-surface-container-highest border-t border-outline-variant">
<div class="flex flex-col md:flex-row justify-between items-center px-margin-desktop py-xl w-full max-w-[1280px] mx-auto">
<div class="mb-8 md:mb-0">
<div class="flex items-center gap-2 mb-4">
<span class="material-symbols-outlined text-primary" style="font-variation-settings: 'FILL' 1;">medical_services</span>
<span class="font-label-md text-label-md font-bold text-on-surface">MediCore Health</span>
</div>
<p class="font-body-sm text-body-sm text-on-surface-variant">© 2024 MediCore Healthcare Systems. All rights reserved.</p>
</div>
<div class="flex flex-wrap justify-center gap-x-12 gap-y-4">
<a class="font-body-sm text-body-sm text-on-surface-variant hover:text-primary transition-opacity hover:opacity-90" href="#">Privacy Policy</a>
<a class="font-body-sm text-body-sm text-on-surface-variant hover:text-primary transition-opacity hover:opacity-90" href="#">Terms of Service</a>
<a class="font-body-sm text-body-sm text-on-surface-variant hover:text-primary transition-opacity hover:opacity-90" href="#">Contact Support</a>
<a class="font-body-sm text-body-sm text-on-surface-variant hover:text-primary transition-opacity hover:opacity-90" href="#">Security</a>
</div>
<div class="mt-8 md:mt-0 flex gap-4">
<button class="w-10 h-10 rounded-full bg-surface flex items-center justify-center hover:bg-primary hover:text-white transition-all">
<span class="material-symbols-outlined text-xl">share</span>
</button>
<button class="w-10 h-10 rounded-full bg-surface flex items-center justify-center hover:bg-primary hover:text-white transition-all">
<span class="material-symbols-outlined text-xl">language</span>
</button>
</div>
</div>
</footer>
<script>
        // Simple scroll animations and interactions
        document.addEventListener('DOMContentLoaded', () => {
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

            // Applying staggered reveal to cards
            document.querySelectorAll('.bento-card, .bg-surface-container').forEach((el, index) => {
                el.classList.add('transition-all', 'duration-700', 'opacity-0', 'translate-y-10');
                el.style.transitionDelay = \`\${index * 100}ms\`;
                observer.observe(el);
            });
        });
    </script>
` }} />
    );
};

export default MedicoreHealthLandingPage;
