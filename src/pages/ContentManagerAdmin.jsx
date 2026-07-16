import React from 'react';

const ContentManagerAdmin = () => {
    return (
        <div dangerouslySetInnerHTML={{ __html: `
<div class="flex min-h-screen">
<!-- SideNavBar -->
<aside class="hidden md:flex flex-col h-screen py-lg px-md bg-surface-container-low border-r border-outline-variant w-[280px] fixed left-0 top-0 z-50">
<div class="flex items-center gap-md px-md mb-xl">
<div class="w-10 h-10 bg-primary flex items-center justify-center rounded-lg">
<span class="material-symbols-outlined text-on-primary" style="font-variation-settings: 'FILL' 1;">local_hospital</span>
</div>
<div>
<h1 class="font-headline-md text-headline-md font-bold text-primary">Hospital Admin</h1>
<p class="font-label-sm text-label-sm text-on-surface-variant">Management Console</p>
</div>
</div>
<nav class="flex-1 space-y-xs">
<a class="flex items-center gap-md px-md py-sm font-label-md text-label-md text-on-surface-variant hover:bg-surface-variant transition-all rounded-lg" href="#">
<span class="material-symbols-outlined">dashboard</span>
                    Overview
                </a>
<a class="flex items-center gap-md px-md py-sm font-label-md text-label-md bg-secondary-container text-on-secondary-container rounded-lg" href="#">
<span class="material-symbols-outlined" style="font-variation-settings: 'FILL' 1;">web</span>
                    Landing Page
                </a>
<a class="flex items-center gap-md px-md py-sm font-label-md text-label-md text-on-surface-variant hover:bg-surface-variant transition-all rounded-lg" href="#">
<span class="material-symbols-outlined">medical_services</span>
                    Services
                </a>
<a class="flex items-center gap-md px-md py-sm font-label-md text-label-md text-on-surface-variant hover:bg-surface-variant transition-all rounded-lg" href="#">
<span class="material-symbols-outlined">auto_awesome</span>
                    Success Stories
                </a>
<a class="flex items-center gap-md px-md py-sm font-label-md text-label-md text-on-surface-variant hover:bg-surface-variant transition-all rounded-lg" href="#">
<span class="material-symbols-outlined">group</span>
                    Staff
                </a>
</nav>
<div class="mt-auto space-y-xs">
<a class="flex items-center gap-md px-md py-sm font-label-md text-label-md text-on-surface-variant hover:bg-surface-variant transition-all rounded-lg" href="#">
<span class="material-symbols-outlined">contact_support</span>
                    Support
                </a>
<a class="flex items-center gap-md px-md py-sm font-label-md text-label-md text-on-surface-variant hover:bg-surface-variant transition-all rounded-lg" href="#">
<span class="material-symbols-outlined">logout</span>
                    Logout
                </a>
</div>
</aside>
<!-- Main Content Canvas -->
<main class="flex-1 md:ml-[280px] min-h-screen flex flex-col">
<!-- TopNavBar -->
<header class="sticky top-0 z-40 bg-surface border-b border-outline-variant w-full">
<div class="flex justify-between items-center w-full px-margin-desktop max-w-[1280px] mx-auto h-20">
<div class="flex items-center gap-xl">
<div class="flex items-center gap-md">
<span class="material-symbols-outlined text-primary">edit_note</span>
<span class="font-headline-md text-headline-md font-bold text-primary">MediCore Admin</span>
</div>
<nav class="hidden lg:flex items-center gap-lg">
<a class="font-label-md text-label-md text-on-surface-variant hover:text-primary transition-colors" href="#">Dashboard</a>
<a class="font-label-md text-label-md text-primary border-b-2 border-primary pb-1" href="#">Content Manager</a>
<a class="font-label-md text-label-md text-on-surface-variant hover:text-primary transition-colors" href="#">Announcements</a>
<a class="font-label-md text-label-md text-on-surface-variant hover:text-primary transition-colors" href="#">Settings</a>
</nav>
</div>
<div class="flex items-center gap-md">
<div class="relative hidden sm:block">
<span class="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-on-surface-variant">search</span>
<input class="pl-10 pr-4 py-2 bg-surface-container-low border border-outline-variant rounded-full text-body-sm focus:outline-none focus:border-primary w-64" placeholder="Search resources..." type="text"/>
</div>
<button class="flex items-center gap-xs px-md py-sm bg-primary text-on-primary rounded-full font-label-md text-label-md hover:shadow-lg transition-shadow">
<span class="material-symbols-outlined text-[18px]">add</span>
                            New Update
                        </button>
<div class="flex items-center gap-sm ml-sm">
<button class="p-2 text-on-surface-variant hover:bg-surface-variant rounded-full transition-colors"><span class="material-symbols-outlined">notifications</span></button>
<button class="p-2 text-on-surface-variant hover:bg-surface-variant rounded-full transition-colors"><span class="material-symbols-outlined">help</span></button>
<div class="w-10 h-10 rounded-full border border-outline-variant overflow-hidden cursor-pointer active:opacity-80">
<img class="w-full h-full object-cover" data-alt="A professional headshot of a female hospital administrator in her late 40s. She is wearing a modern navy blue blazer and white blouse, smiling warmly. The background is a blurred hospital administrative hallway with bright clean lighting and blue architectural accents, fitting the corporate modernist healthcare aesthetic." src="https://lh3.googleusercontent.com/aida-public/AB6AXuDxl3YPa8HxZoau3Vopz8Nmuhp5bBAHwczTYl9wnaiLx1bFjsQfwjpEwzil0qFwcgwKNpmIHBEOIMe8rqfcY17RAgzV7hMFX_NAoNY8IKTf6CxBP_ANS16k6l9MVAp-lWbjOHYiikEe_KLNc7CG2KHk7kCZ16Xcvo-uHoVtc_Ngjs1cWw9RyFtQRqPgRyeKNut9MU-8SS90yDyr9qVlYOCHHbEk8kNFnqPccjAizRKDfBduOhbNt75w4Q"/>
</div>
</div>
</div>
</div>
</header>
<!-- Breadcrumbs -->
<div class="w-full px-margin-desktop py-md max-w-[1280px] mx-auto">
<nav class="flex items-center text-label-sm font-label-sm text-on-surface-variant gap-xs">
<a class="hover:text-primary" href="#">Dashboard</a>
<span class="material-symbols-outlined text-[16px]">chevron_right</span>
<a class="hover:text-primary" href="#">Landing Page</a>
<span class="material-symbols-outlined text-[16px]">chevron_right</span>
<span class="text-on-surface">Hero Section & Staff</span>
</nav>
</div>
<!-- Content Area -->
<div class="w-full px-margin-desktop pb-xl max-w-[1280px] mx-auto space-y-gutter">
<div class="flex flex-col gap-sm">
<h2 class="font-headline-lg text-headline-lg text-on-surface">Landing Page Configuration</h2>
<p class="font-body-md text-body-md text-on-surface-variant max-w-2xl">Tailor the first impression for your patients. Update critical messaging, toggle module visibility, and manage the featured medical staff profiles.</p>
</div>
<!-- Bento Grid for Configuration -->
<div class="grid grid-cols-1 lg:grid-cols-12 gap-gutter">
<!-- Hero Section Config (Col 1-8) -->
<div class="lg:col-span-8 space-y-gutter">
<section class="bg-surface-container-lowest border border-outline-variant rounded-xl p-lg shadow-sm">
<div class="flex items-center justify-between mb-lg">
<div class="flex items-center gap-md">
<div class="w-10 h-10 bg-primary-container text-on-primary-container rounded-lg flex items-center justify-center">
<span class="material-symbols-outlined" style="font-variation-settings: 'FILL' 1;">campaign</span>
</div>
<div>
<h3 class="font-headline-md text-headline-md text-on-surface">Hero Content</h3>
<p class="font-body-sm text-body-sm text-on-surface-variant">Update the primary headline and call to action.</p>
</div>
</div>
<div class="flex items-center gap-sm">
<span class="text-label-sm font-label-sm text-on-surface-variant">Module Visibility</span>
<button class="relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none bg-secondary" role="switch">
<span class="translate-x-5 pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out"></span>
</button>
</div>
</div>
<div class="space-y-md">
<div class="flex flex-col gap-xs">
<label class="font-label-md text-label-md text-on-surface ml-1">Main Headline</label>
<input class="w-full px-md py-sm bg-surface border border-outline-variant rounded-lg text-body-md focus:ring-2 focus:ring-primary focus:border-primary transition-all" type="text" value="Empowering Your Health Journey with MediCore"/>
</div>
<div class="flex flex-col gap-xs">
<label class="font-label-md text-label-md text-on-surface ml-1">Sub-headline Description</label>
<textarea class="w-full px-md py-sm bg-surface border border-outline-variant rounded-lg text-body-md focus:ring-2 focus:ring-primary focus:border-primary transition-all" rows="3">Providing world-class medical care with a human touch. Explore our specialized services and find the right specialist for your needs today.</textarea>
</div>
<div class="grid grid-cols-1 md:grid-cols-2 gap-md">
<div class="flex flex-col gap-xs">
<label class="font-label-md text-label-md text-on-surface ml-1">Primary CTA Label</label>
<input class="w-full px-md py-sm bg-surface border border-outline-variant rounded-lg text-body-md focus:ring-2 focus:ring-primary focus:border-primary transition-all" type="text" value="Book Appointment"/>
</div>
<div class="flex flex-col gap-xs">
<label class="font-label-md text-label-md text-on-surface ml-1">Secondary CTA Label</label>
<input class="w-full px-md py-sm bg-surface border border-outline-variant rounded-lg text-body-md focus:ring-2 focus:ring-primary focus:border-primary transition-all" type="text" value="Learn More"/>
</div>
</div>
</div>
</section>
<!-- Our Doctors List (Dynamic Section) -->
<section class="bg-surface-container-lowest border border-outline-variant rounded-xl p-lg shadow-sm">
<div class="flex items-center justify-between mb-lg">
<div class="flex items-center gap-md">
<div class="w-10 h-10 bg-secondary-container text-on-secondary-container rounded-lg flex items-center justify-center">
<span class="material-symbols-outlined" style="font-variation-settings: 'FILL' 1;">group</span>
</div>
<div>
<h3 class="font-headline-md text-headline-md text-on-surface">Our Doctors</h3>
<p class="font-body-sm text-body-sm text-on-surface-variant">Featured specialists on the home page.</p>
</div>
</div>
<button class="px-md py-sm text-primary font-label-md text-label-md border border-primary rounded-lg hover:bg-primary-container hover:text-on-primary-container transition-all">
                                    + Add New Profile
                                </button>
</div>
<div class="overflow-x-auto">
<table class="w-full border-collapse">
<thead>
<tr class="border-b border-outline-variant text-left">
<th class="pb-md font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider">Physician</th>
<th class="pb-md font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider">Specialty</th>
<th class="pb-md font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider">Status</th>
<th class="pb-md font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider text-right">Actions</th>
</tr>
</thead>
<tbody class="divide-y divide-outline-variant">
<tr class="hover:bg-surface-container-low transition-colors group">
<td class="py-md">
<div class="flex items-center gap-md">
<div class="w-12 h-12 rounded-full overflow-hidden border border-outline-variant">
<img class="w-full h-full object-cover" data-alt="A portrait of a male cardiologist in his late 50s, wearing a white lab coat and a stethoscope. He has a kind, confident expression. The lighting is high-key and professional, with a soft blue and white background that reflects a sterile yet welcoming medical environment. Cinematic corporate style." src="https://lh3.googleusercontent.com/aida-public/AB6AXuA_KCPhJ6vvSCeUjfDJDKrsGXqekI-SKstFL7NCTSAvzwagTQxGoxDuFQs5R2XUGEeCRHgIrkzSZnICzDVUsSZJGtAh8_K9e1t71v79ckizEUAn51Ir8ZuJ4wRHFypjGETAbsa-jTzDo3D976KQunHDR1ZAv5VI_M-8HU-gwcq27o9OKA63lldJdagBlwpLvUJAPHhCpNQv6EHFfqBzPYORCQA6yUhquYvrHbNVPNrBsOpqkqBiP6U27g"/>
</div>
<div>
<p class="font-label-md text-label-md text-on-surface">Dr. James Wilson</p>
<p class="font-body-sm text-body-sm text-on-surface-variant">Chief of Cardiology</p>
</div>
</div>
</td>
<td class="py-md font-body-sm text-body-sm text-on-surface">Cardiology</td>
<td class="py-md">
<span class="inline-flex items-center px-2 py-0.5 rounded-full text-label-sm font-label-sm bg-secondary-container text-on-secondary-container">Featured</span>
</td>
<td class="py-md text-right">
<div class="flex justify-end gap-sm opacity-0 group-hover:opacity-100 transition-opacity">
<button class="p-2 text-on-surface-variant hover:text-primary rounded-full transition-colors"><span class="material-symbols-outlined">edit</span></button>
<button class="p-2 text-on-surface-variant hover:text-error rounded-full transition-colors"><span class="material-symbols-outlined">delete</span></button>
</div>
</td>
</tr>
<tr class="hover:bg-surface-container-low transition-colors group">
<td class="py-md">
<div class="flex items-center gap-md">
<div class="w-12 h-12 rounded-full overflow-hidden border border-outline-variant">
<img class="w-full h-full object-cover" data-alt="A professional portrait of a female neurologist in her early 30s. She is wearing modern medical scrubs and glasses, with a sharp, intelligent look. The setting is a brightly lit, high-tech diagnostic lab with minimalist furniture and cool blue tones. Clean, clinical corporate modernist style." src="https://lh3.googleusercontent.com/aida-public/AB6AXuDiUu4SPFH45Q19b2S5DIQToprixKAjDdGw796knuu8o7uSJLH5hpm5xJ4kW8m2MFsA91ToqY6lzod7lJOd3K2nHsOU5XdB-laYZ6zqPjpayhmdNTEjItAa6Hxil3nqU0QjJpy8Og_oHW59o7ZdEhT7jQuAyD5E-Q94iAjKA9wxQImRrcbJf3EgFWlvyjypl946AyUE90N6YZ3YSPb9PBD-wsWeH9XY3uYLq-P7o1sqlmLApP6tJRROig"/>
</div>
<div>
<p class="font-label-md text-label-md text-on-surface">Dr. Sarah Chen</p>
<p class="font-body-sm text-body-sm text-on-surface-variant">Neurological Surgery</p>
</div>
</div>
</td>
<td class="py-md font-body-sm text-body-sm text-on-surface">Neurology</td>
<td class="py-md">
<span class="inline-flex items-center px-2 py-0.5 rounded-full text-label-sm font-label-sm bg-tertiary-fixed text-on-tertiary-fixed-variant">Active</span>
</td>
<td class="py-md text-right">
<div class="flex justify-end gap-sm opacity-0 group-hover:opacity-100 transition-opacity">
<button class="p-2 text-on-surface-variant hover:text-primary rounded-full transition-colors"><span class="material-symbols-outlined">edit</span></button>
<button class="p-2 text-on-surface-variant hover:text-error rounded-full transition-colors"><span class="material-symbols-outlined">delete</span></button>
</div>
</td>
</tr>
</tbody>
</table>
</div>
</section>
</div>
<!-- Sidebar Modules (Col 9-12) -->
<div class="lg:col-span-4 space-y-gutter">
<!-- Module Toggles -->
<section class="bg-surface-container-lowest border border-outline-variant rounded-xl p-lg shadow-sm">
<h3 class="font-label-md text-label-md text-on-surface uppercase tracking-widest mb-lg">Module Toggles</h3>
<div class="space-y-md">
<div class="flex items-center justify-between">
<div class="flex items-center gap-sm">
<span class="material-symbols-outlined text-primary">analytics</span>
<span class="font-body-md text-body-md text-on-surface">Impact Metrics</span>
</div>
<button class="relative inline-flex h-5 w-9 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none bg-secondary" role="switch">
<span class="translate-x-4 pointer-events-none inline-block h-4 w-4 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out"></span>
</button>
</div>
<div class="flex items-center justify-between">
<div class="flex items-center gap-sm">
<span class="material-symbols-outlined text-primary">reviews</span>
<span class="font-body-md text-body-md text-on-surface">Patient Reviews</span>
</div>
<button class="relative inline-flex h-5 w-9 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none bg-outline-variant" role="switch">
<span class="translate-x-0 pointer-events-none inline-block h-4 w-4 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out"></span>
</button>
</div>
<div class="flex items-center justify-between">
<div class="flex items-center gap-sm">
<span class="material-symbols-outlined text-primary">calendar_month</span>
<span class="font-body-md text-body-md text-on-surface">Booking Widget</span>
</div>
<button class="relative inline-flex h-5 w-9 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none bg-secondary" role="switch">
<span class="translate-x-4 pointer-events-none inline-block h-4 w-4 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out"></span>
</button>
</div>
<div class="flex items-center justify-between">
<div class="flex items-center gap-sm">
<span class="material-symbols-outlined text-primary">newspaper</span>
<span class="font-body-md text-body-md text-on-surface">Latest News</span>
</div>
<button class="relative inline-flex h-5 w-9 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none bg-secondary" role="switch">
<span class="translate-x-4 pointer-events-none inline-block h-4 w-4 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out"></span>
</button>
</div>
</div>
</section>
<!-- Preview Card -->
<section class="bg-primary text-on-primary rounded-xl p-lg shadow-md relative overflow-hidden group">
<!-- Background Pattern -->
<div class="absolute inset-0 opacity-10 pointer-events-none">
<svg height="100%" preserveaspectratio="none" viewbox="0 0 100 100" width="100%">
<path d="M0 0 L100 100 M100 0 L0 100" stroke="currentColor" stroke-width="0.5"></path>
</svg>
</div>
<h3 class="font-label-md text-label-md uppercase tracking-widest mb-md opacity-80">Quick Preview</h3>
<div class="bg-white/10 rounded-lg p-md mb-md backdrop-blur-sm border border-white/20">
<div class="w-16 h-1 bg-white/40 rounded-full mb-xs"></div>
<div class="w-24 h-4 bg-white rounded-sm mb-sm"></div>
<div class="w-full h-2 bg-white/20 rounded-full mb-xs"></div>
<div class="w-2/3 h-2 bg-white/20 rounded-full"></div>
</div>
<p class="font-body-sm text-body-sm mb-lg">See how your changes look on the live website before publishing.</p>
<button class="w-full py-sm bg-white text-primary font-label-md text-label-md rounded-lg hover:bg-primary-fixed transition-colors flex items-center justify-center gap-sm">
<span class="material-symbols-outlined text-[20px]">open_in_new</span>
                                Live Preview
                            </button>
</section>
<!-- Help Widget -->
<div class="bg-surface-container-high rounded-xl p-lg border border-outline-variant flex items-start gap-md">
<span class="material-symbols-outlined text-primary text-[28px]">lightbulb</span>
<div>
<h4 class="font-label-md text-label-md text-on-surface">Pro Tip</h4>
<p class="font-body-sm text-body-sm text-on-surface-variant">Use high-resolution images for doctor profiles to build better trust with patient visitors.</p>
</div>
</div>
</div>
</div>
</div>
<!-- Footer -->
<footer class="mt-auto border-t border-outline-variant bg-surface-container-highest">
<div class="flex flex-col md:flex-row justify-between items-center px-margin-desktop py-xl w-full max-w-[1280px] mx-auto gap-md">
<div class="flex flex-col md:flex-row items-center gap-md">
<span class="font-label-md text-label-md font-bold text-on-surface">MediCore</span>
<p class="font-body-sm text-body-sm text-on-surface-variant">© 2024 MediCore Healthcare Systems. All rights reserved.</p>
</div>
<div class="flex items-center gap-lg">
<a class="font-body-sm text-body-sm text-on-surface-variant hover:text-primary transition-opacity hover:opacity-90" href="#">Privacy Policy</a>
<a class="font-body-sm text-body-sm text-on-surface-variant hover:text-primary transition-opacity hover:opacity-90" href="#">Terms of Service</a>
<a class="font-body-sm text-body-sm text-on-surface-variant hover:text-primary transition-opacity hover:opacity-90" href="#">Contact Support</a>
<a class="font-body-sm text-body-sm text-on-surface-variant hover:text-primary transition-opacity hover:opacity-90" href="#">Security</a>
</div>
</div>
</footer>
</main>
</div>
<!-- Floating Action Bar (Save Changes) -->
<div class="fixed bottom-8 left-1/2 -translate-x-1/2 z-50 transform translate-y-24 transition-transform duration-300 ease-out" id="save-bar">
<div class="bg-inverse-surface text-inverse-on-surface px-lg py-md rounded-full shadow-2xl flex items-center gap-xl min-w-[400px]">
<div class="flex items-center gap-md">
<div class="w-8 h-8 rounded-full bg-primary-fixed flex items-center justify-center">
<span class="material-symbols-outlined text-on-primary-fixed text-[18px]" style="font-variation-settings: 'FILL' 1;">info</span>
</div>
<span class="font-label-md text-label-md">Unsaved changes in Hero Content</span>
</div>
<div class="flex items-center gap-md ml-auto">
<button class="font-label-md text-label-md px-md py-sm hover:text-primary-fixed transition-colors" onclick="hideSaveBar()">Discard</button>
<button class="bg-primary px-lg py-sm rounded-full font-label-md text-label-md hover:bg-primary-container transition-all flex items-center gap-sm">
<span class="material-symbols-outlined text-[18px]">save</span>
                    Save Changes
                </button>
</div>
</div>
</div>
<script>
        // Micro-interactions for the admin UI
        const inputs = document.querySelectorAll('input, textarea');
        const saveBar = document.getElementById('save-bar');
        
        inputs.forEach(input => {
            input.addEventListener('input', () => {
                showSaveBar();
            });
        });

        function showSaveBar() {
            saveBar.classList.remove('translate-y-24');
            saveBar.classList.add('translate-y-0');
        }

        function hideSaveBar() {
            saveBar.classList.add('translate-y-24');
            saveBar.classList.remove('translate-y-0');
        }

        // Toggle simulation
        const toggles = document.querySelectorAll('[role="switch"]');
        toggles.forEach(toggle => {
            toggle.addEventListener('click', function() {
                const dot = this.querySelector('span');
                const isActive = this.classList.contains('bg-secondary');
                
                if (isActive) {
                    this.classList.remove('bg-secondary');
                    this.classList.add('bg-outline-variant');
                    dot.classList.remove('translate-x-5', 'translate-x-4');
                    dot.classList.add('translate-x-0');
                } else {
                    this.classList.add('bg-secondary');
                    this.classList.remove('bg-outline-variant');
                    dot.classList.remove('translate-x-0');
                    dot.classList.add(this.classList.contains('h-5') ? 'translate-x-4' : 'translate-x-5');
                }
                showSaveBar();
            });
        });

        // Search bar focus effect
        const searchInput = document.querySelector('input[type="text"][placeholder*="Search"]');
        searchInput.parentElement.addEventListener('focusin', () => {
            searchInput.parentElement.classList.add('ring-2', 'ring-primary/20');
        });
        searchInput.parentElement.addEventListener('focusout', () => {
            searchInput.parentElement.classList.remove('ring-2', 'ring-primary/20');
        });
    </script>
` }} />
    );
};

export default ContentManagerAdmin;
