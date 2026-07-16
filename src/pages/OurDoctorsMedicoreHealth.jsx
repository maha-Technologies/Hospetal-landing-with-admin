import React from 'react';

const OurDoctorsMedicoreHealth = () => {
    return (
        <div dangerouslySetInnerHTML={{ __html: `
<!-- TopNavBar -->
<header class="w-full top-0 bg-surface border-b border-outline-variant z-50 sticky">
<nav class="flex justify-between items-center h-20 px-margin-desktop max-w-7xl mx-auto">
<div class="font-headline-md text-headline-md font-bold text-primary">ClinicalCare</div>
<div class="hidden md:flex space-x-xl items-center">
<a class="font-label-md text-label-md text-on-surface-variant hover:text-primary transition-colors cursor-pointer" href="#">Services</a>
<a class="font-label-md text-label-md text-primary border-b-2 border-primary font-bold pb-1 cursor-pointer" href="#">Find a Doctor</a>
<a class="font-label-md text-label-md text-on-surface-variant hover:text-primary transition-colors cursor-pointer" href="#">About Us</a>
<a class="font-label-md text-label-md text-on-surface-variant hover:text-primary transition-colors cursor-pointer" href="#">Contact</a>
</div>
<button class="bg-primary text-on-primary px-lg py-sm rounded-lg font-label-md text-label-md hover:opacity-90 active:scale-95 transition-all">Patient Portal</button>
</nav>
</header>
<main class="max-w-7xl mx-auto px-margin-desktop py-xl">
<!-- Hero Section -->
<section class="mb-xl">
<h1 class="font-display-lg text-display-lg text-on-surface mb-md">Our Specialists</h1>
<p class="font-body-lg text-body-lg text-on-surface-variant max-w-2xl">Connect with world-class medical professionals committed to providing precision care and clinical excellence.</p>
</section>
<!-- Search & Filter Bar -->
<section class="mb-xl">
<div class="glass-card p-md rounded-xl flex flex-col md:flex-row gap-md items-center shadow-sm">
<div class="relative flex-1 w-full">
<span class="material-symbols-outlined absolute left-md top-1/2 -translate-y-1/2 text-outline">search</span>
<input class="w-full pl-xl pr-md py-md bg-surface-container rounded-lg border-none focus:ring-2 focus:ring-primary font-body-md text-body-md" placeholder="Search by name, specialty, or condition..." type="text"/>
</div>
<div class="flex gap-sm w-full md:w-auto">
<select class="bg-surface-container border-none rounded-lg px-md py-md font-label-md text-label-md flex-1 md:w-48 focus:ring-2 focus:ring-primary">
<option>All Specialties</option>
<option>Cardiology</option>
<option>Neurology</option>
<option>Pediatrics</option>
</select>
<select class="bg-surface-container border-none rounded-lg px-md py-md font-label-md text-label-md flex-1 md:w-48 focus:ring-2 focus:ring-primary">
<option>Availability</option>
<option>Today</option>
<option>This Week</option>
</select>
<button class="bg-secondary-container text-on-secondary-container p-md rounded-lg hover:brightness-95 transition-all flex items-center justify-center">
<span class="material-symbols-outlined">tune</span>
</button>
</div>
</div>
</section>
<!-- Doctor Directory Bento Grid -->
<div class="bento-grid">
<!-- Doctor Card 1 -->
<div class="bento-item-sm bg-surface-container-lowest border border-outline-variant rounded-xl p-lg flex flex-col hover:shadow-lg transition-all group overflow-hidden">
<div class="relative mb-lg overflow-hidden rounded-lg h-64">
<img class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" data-alt="A professional headshot of a middle-aged female cardiologist with a warm, confident expression. She is wearing a crisp white medical coat and a stethoscope around her neck. The background is a clean, softly lit modern clinical corridor with blue and white tones. The lighting is high-key and professional, embodying a sense of reliability and expert medical care." src="https://lh3.googleusercontent.com/aida-public/AB6AXuCcexe6QDXW27N497OXaoR2xTcVZrsYqkA5koL_g-Ro657GsOngVv3q7vAT8xymRoA948WIMqZyxK0_MiYl6Tb-FkFcXK94OqW8cXznMwJnt3oKcUEBQrcT-dwkaFihK0FKMRhpytLHHcPyU4sZjB9H__0LKgf8pGwrupnlrjDJUb06B7eIfLCy0lCxUq0u1oN9NVpfh2LvAQ4kZyLofMlU2r3Eo940CnsSEcOASZk7AIOV1EVa6FC8Eg"/>
<div class="absolute top-md right-md">
<span class="bg-secondary-container text-on-secondary-container font-label-sm text-label-sm px-md py-xs rounded-full">Available Today</span>
</div>
</div>
<h3 class="font-headline-md text-headline-md text-primary mb-xs">Dr. Sarah Chen</h3>
<p class="font-label-md text-label-md text-secondary mb-md">Senior Cardiologist</p>
<p class="font-body-sm text-body-sm text-on-surface-variant flex-grow mb-lg">Specializing in non-invasive cardiac imaging and preventative heart health for over 15 years.</p>
<div class="flex items-center justify-between mt-auto">
<div class="flex items-center gap-xs">
<span class="material-symbols-outlined text-secondary" style="font-variation-settings: 'FILL' 1;">star</span>
<span class="font-label-md text-label-md">4.9 (120 reviews)</span>
</div>
<button class="text-primary font-label-md text-label-md flex items-center gap-xs group-hover:gap-sm transition-all">
                        View Profile <span class="material-symbols-outlined text-[18px]">arrow_forward</span>
</button>
</div>
</div>
<!-- Doctor Card 2 (Featured Wide) -->
<div class="bento-item-lg bg-primary-container text-on-primary-container rounded-xl p-xl flex flex-col md:flex-row gap-xl items-center relative overflow-hidden">
<div class="absolute top-0 right-0 p-xl opacity-10">
<span class="material-symbols-outlined text-[120px]">medical_services</span>
</div>
<div class="w-full md:w-1/3 aspect-square rounded-xl overflow-hidden shadow-xl">
<img class="w-full h-full object-cover" data-alt="A distinguished male neurologist in his late 40s, looking directly at the camera with a calm and intellectual demeanor. He is in a high-tech medical research environment with subtle glowing brain scans on monitors in the background. The aesthetic is extremely clean, minimalist, and clinical, utilizing a palette of clinical blues and stark whites. Professional studio lighting highlights his professional attire." src="https://lh3.googleusercontent.com/aida-public/AB6AXuBEhrKrW3MPBff4axnS_6n_l8jPsI0B8iveZIyhI4kgi-08cs0kTsDn-mbsSlS-VCz5n4xmWWvId6BvArW7DXzkjl9DtJe8NZmBqGVJD59DrEeQZeRmO9mSgBPqiH8VBuR_5rpubbj0yQvnwyaSXO6wdNPJ-hspE5R5K_tZLpMDELWugmDo2xe0NL-LBFje7tkf6ZOFEhrtkuBVm6817AG_jDJzKLBHiJ87ZrQ7ykmqJdPFAxw6fABJ5w"/>
</div>
<div class="flex-1 z-10">
<span class="bg-white/20 text-white font-label-sm text-label-sm px-md py-xs rounded-full inline-block mb-md">Featured Specialist</span>
<h2 class="font-display-lg text-headline-lg text-white mb-xs">Dr. James Wilson</h2>
<p class="font-headline-md text-label-md text-on-primary-container opacity-90 mb-md">Neurology &amp; Cognitive Research</p>
<p class="font-body-md text-body-md text-white/80 mb-xl max-w-lg">Award-winning researcher and clinician focused on neurodegenerative disorders and advanced neuro-diagnostics. Dr. Wilson leads our Center for Neurological Excellence.</p>
<div class="flex flex-wrap gap-md">
<button class="bg-white text-primary px-xl py-md rounded-lg font-label-md text-label-md hover:bg-surface transition-all">Book Appointment</button>
<button class="border border-white/30 text-white px-xl py-md rounded-lg font-label-md text-label-md hover:bg-white/10 transition-all">Full Biography</button>
</div>
</div>
</div>
<!-- Doctor Card 3 -->
<div class="bento-item-sm bg-surface-container-lowest border border-outline-variant rounded-xl p-lg flex flex-col hover:shadow-lg transition-all group overflow-hidden">
<div class="relative mb-lg overflow-hidden rounded-lg h-64">
<img class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" data-alt="A cheerful female pediatrician smiling broadly in a child-friendly medical office. She is wearing a light teal medical scrub and has colorful badges on her lanyard. The background features soft, warm lighting and subtle colorful accents on the walls to create a comforting atmosphere for children. High-quality digital photography with a shallow depth of field, focusing on her friendly and approachable face." src="https://lh3.googleusercontent.com/aida-public/AB6AXuB7gabNf6CDeL0E9pYXVAR3I3hIwzUUix3rWNkVebu0944CAxkyD370c5Ticf0xIfzD8OmXUzPlXfkLJT_tIqwACHrEY6MVbpTd9QFmErLslid33edBUk0QmlJZrHbVa55mSpOdF6ICI_pY48r-gOOHMpC1kOd1stomaqjWYBRfjCT3cFwYL0Zl-0b4VNOmVNfTkSi3C-FGmVPA6bpUSRoTdnVB4ZemJb90Qxgc8a483No5c4zSrRXqrA"/>
<div class="absolute top-md right-md">
<span class="bg-surface-variant text-on-surface-variant font-label-sm text-label-sm px-md py-xs rounded-full">Next: Tomorrow</span>
</div>
</div>
<h3 class="font-headline-md text-headline-md text-primary mb-xs">Dr. Elena Rodriguez</h3>
<p class="font-label-md text-label-md text-secondary mb-md">Pediatric Medicine</p>
<p class="font-body-sm text-body-sm text-on-surface-variant flex-grow mb-lg">Dedicated to compassionate care for children from infancy through adolescence with a holistic family approach.</p>
<div class="flex items-center justify-between mt-auto">
<div class="flex items-center gap-xs">
<span class="material-symbols-outlined text-secondary" style="font-variation-settings: 'FILL' 1;">star</span>
<span class="font-label-md text-label-md">5.0 (89 reviews)</span>
</div>
<button class="text-primary font-label-md text-label-md flex items-center gap-xs group-hover:gap-sm transition-all">
                        View Profile <span class="material-symbols-outlined text-[18px]">arrow_forward</span>
</button>
</div>
</div>
<!-- Doctor Card 4 -->
<div class="bento-item-md bg-surface-container-high/40 rounded-xl p-lg border border-outline-variant flex gap-lg">
<div class="w-32 h-32 rounded-lg overflow-hidden flex-shrink-0">
<img class="w-full h-full object-cover" data-alt="Close up headshot of a professional male orthopedic surgeon. He has a focused and serious expression, suggesting precision and expertise. He is wearing blue surgical scrubs. The background is slightly blurred showing medical equipment and a sterile operating room environment. The lighting is bright and clear, emphasizing the clean and high-tech medical setting of a modern hospital." src="https://lh3.googleusercontent.com/aida-public/AB6AXuAadGmsWGAh8sB1kzozBQbCzLaw5aoaBUpF9sN4JuYC4E5OpTZjZn5QncfWd7H4nk7k1G8SiIRNJSjAahtbfXtiAIIuJrP7vFPsqqtDSfnIQk7kdAUaxgYPwxg6BkEms9rDt3LPtRVguzvy6dqD6bexWSs8ubUxkaob9CF5WJimsh1iTUi95COEn1uhKIowOIAwpMjK8WkMm-uzN3o4J4soPAOUZIE0On2flcvKk4pUtXk7M1iuJAITDQ"/>
</div>
<div class="flex flex-col justify-center">
<h3 class="font-headline-md text-headline-md text-on-surface mb-xs">Dr. Marcus Thorne</h3>
<p class="font-label-md text-label-md text-secondary mb-sm">Orthopedic Surgeon</p>
<div class="flex gap-sm mb-md">
<span class="bg-white border border-outline-variant px-sm py-1 rounded-md text-[10px] font-bold text-on-surface-variant">JOINT REPLACEMENT</span>
<span class="bg-white border border-outline-variant px-sm py-1 rounded-md text-[10px] font-bold text-on-surface-variant">SPORTS MEDICINE</span>
</div>
<p class="font-body-sm text-body-sm text-on-surface-variant">Expert in minimally invasive robotic surgery and rehabilitative care for athletes.</p>
</div>
</div>
<!-- Doctor Card 5 -->
<div class="bento-item-md bg-surface-container-high/40 rounded-xl p-lg border border-outline-variant flex gap-lg">
<div class="w-32 h-32 rounded-lg overflow-hidden flex-shrink-0">
<img class="w-full h-full object-cover" data-alt="Headshot of a friendly female dermatologist with clear skin and a professional appearance. She is wearing a lab coat and a simple pearl necklace. The background is a minimalist clinic with soft natural light and a hint of a green plant. The overall look is healthy, serene, and sophisticated, aligning with a high-end medical skin care facility." src="https://lh3.googleusercontent.com/aida-public/AB6AXuBqLBQDEYW3MjsIlZy4zpWWFiWxMSjVk_rJ80VNggi5VRNi4Q4JjeYtZf01neQbuGqDPgyKsdfzmWrl54-nQTwhkuauhzWeNexNqPbkAcXNiDg82F0fPR7FR2dTJaog0wzAZYXAvadSK3hhNiAqZYgdwY25bkAG9nHNHiwbbdV_IzK3qX_1cyXC3mQRt0AjrLDAFX-nlkbElts1M2Zb68d7GO4OnqKjbTi6DkE4UurvCTKqnEgXsLak5w"/>
</div>
<div class="flex flex-col justify-center">
<h3 class="font-headline-md text-headline-md text-on-surface mb-xs">Dr. Sophie Laurent</h3>
<p class="font-label-md text-label-md text-secondary mb-sm">Dermatology &amp; Aesthetics</p>
<div class="flex gap-sm mb-md">
<span class="bg-white border border-outline-variant px-sm py-1 rounded-md text-[10px] font-bold text-on-surface-variant">COSMETIC</span>
<span class="bg-white border border-outline-variant px-sm py-1 rounded-md text-[10px] font-bold text-on-surface-variant">MEDICAL</span>
</div>
<p class="font-body-sm text-body-sm text-on-surface-variant">Providing comprehensive skin health management, from clinical screenings to advanced laser therapies.</p>
</div>
</div>
</div>
<!-- Appointment CTA Section -->
<section class="mt-xl bg-on-surface rounded-xl p-xl flex flex-col md:flex-row items-center justify-between gap-xl relative overflow-hidden">
<div class="absolute inset-0 opacity-10">

</div>
<div class="relative z-10">
<h2 class="font-display-lg text-headline-lg text-white mb-md">Can't find who you're looking for?</h2>
<p class="font-body-lg text-body-lg text-white/70 max-w-xl">Our patient coordinators are available 24/7 to help you find the right specialist for your specific needs.</p>
</div>
<div class="relative z-10 flex gap-md">
<button class="bg-primary-container text-on-primary-container px-xl py-md rounded-lg font-label-md text-label-md hover:brightness-110 transition-all flex items-center gap-sm">
<span class="material-symbols-outlined">call</span>
                    Talk to a Coordinator
                </button>
</div>
</section>
</main>
<!-- Footer -->
<footer class="w-full mt-auto bg-on-surface">
<div class="flex flex-col md:flex-row justify-between items-center py-xl px-margin-desktop space-y-md md:space-y-0 max-w-7xl mx-auto">
<div class="flex flex-col items-center md:items-start">
<div class="font-headline-md text-headline-md font-bold text-on-primary mb-xs">ClinicalCare</div>
<p class="font-body-sm text-body-sm text-on-primary opacity-60">© 2024 ClinicalCare Health Systems. All rights reserved.</p>
</div>
<div class="flex flex-wrap justify-center gap-xl">
<a class="font-body-sm text-body-sm text-on-primary opacity-80 hover:opacity-100 hover:text-secondary-fixed transition-all cursor-pointer" href="#">Privacy Policy</a>
<a class="font-body-sm text-body-sm text-on-primary opacity-80 hover:opacity-100 hover:text-secondary-fixed transition-all cursor-pointer" href="#">Terms of Service</a>
<a class="font-body-sm text-body-sm text-on-primary opacity-80 hover:opacity-100 hover:text-secondary-fixed transition-all cursor-pointer" href="#">Accessibility</a>
<a class="font-body-sm text-body-sm text-on-primary opacity-80 hover:opacity-100 hover:text-secondary-fixed transition-all cursor-pointer" href="#">Cookie Settings</a>
</div>
</div>
</footer>
<script>
        // Micro-interactions
        document.querySelectorAll('button, a').forEach(el => {
            el.addEventListener('mouseenter', () => {
                // Subtle interaction logic could go here
            });
        });

        // Search bar focus effect
        const searchInput = document.querySelector('input[type="text"]');
        if (searchInput) {
            searchInput.addEventListener('focus', () => {
                searchInput.parentElement.classList.add('ring-2', 'ring-primary');
            });
            searchInput.addEventListener('blur', () => {
                searchInput.parentElement.classList.remove('ring-2', 'ring-primary');
            });
        }
    </script>
` }} />
    );
};

export default OurDoctorsMedicoreHealth;
