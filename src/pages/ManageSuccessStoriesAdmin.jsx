import React from 'react';

const ManageSuccessStoriesAdmin = () => {
    return (
        <div dangerouslySetInnerHTML={{ __html: `
<!-- Theme Config -->
<script id="tailwind-config">
        tailwind.config = {
            darkMode: "class",
            theme: {
                extend: {
                    "colors": {
                        "on-error-container": "#93000a",
                        "primary-fixed": "#d6e3ff",
                        "tertiary-container": "#5b6063",
                        "on-tertiary-fixed": "#171c1f",
                        "on-primary-container": "#c8daff",
                        "on-surface-variant": "#424752",
                        "on-primary-fixed": "#001b3d",
                        "inverse-primary": "#a9c7ff",
                        "outline": "#727783",
                        "surface-variant": "#d8e3fa",
                        "surface-dim": "#cfdaf1",
                        "on-secondary-container": "#006e75",
                        "secondary": "#006970",
                        "surface": "#f9f9ff",
                        "tertiary-fixed-dim": "#c3c7cb",
                        "surface-container-low": "#f0f3ff",
                        "surface-bright": "#f9f9ff",
                        "primary": "#00478d",
                        "on-surface": "#111c2c",
                        "on-tertiary": "#ffffff",
                        "on-secondary-fixed-variant": "#004f54",
                        "primary-container": "#005eb8",
                        "surface-container-high": "#dee8ff",
                        "error": "#ba1a1a",
                        "secondary-fixed-dim": "#5dd8e2",
                        "background": "#f9f9ff",
                        "on-tertiary-fixed-variant": "#43474b",
                        "surface-container-highest": "#d8e3fa",
                        "surface-container-lowest": "#ffffff",
                        "secondary-fixed": "#7df4ff",
                        "secondary-container": "#7af1fc",
                        "on-tertiary-container": "#d6dade",
                        "on-secondary-fixed": "#002022",
                        "error-container": "#ffdad6",
                        "on-secondary": "#ffffff",
                        "inverse-on-surface": "#ebf1ff",
                        "surface-container": "#e7eeff",
                        "outline-variant": "#c2c6d4",
                        "on-primary-fixed-variant": "#00468c",
                        "tertiary": "#43484c",
                        "primary-fixed-dim": "#a9c7ff",
                        "inverse-surface": "#263142",
                        "on-primary": "#ffffff",
                        "on-error": "#ffffff",
                        "tertiary-fixed": "#dfe3e7",
                        "surface-tint": "#005db6",
                        "on-background": "#111c2c"
                    },
                    "borderRadius": {
                        "DEFAULT": "0.25rem",
                        "lg": "0.5rem",
                        "xl": "0.75rem",
                        "full": "9999px"
                    },
                    "spacing": {
                        "margin-mobile": "16px",
                        "xl": "48px",
                        "sm": "8px",
                        "gutter": "24px",
                        "margin-desktop": "64px",
                        "lg": "24px",
                        "xs": "4px",
                        "md": "16px",
                        "unit": "4px"
                    }
                }
            }
        }
    </script>
<div class="flex min-h-screen overflow-hidden">
<!-- SideNavBar (Shared Component) -->
<aside class="hidden md:flex flex-col h-screen py-lg px-md bg-surface-container-low dark:bg-surface-container-lowest border-r border-outline-variant w-[280px] shrink-0 fixed top-0 left-0 z-30">
<div class="flex items-center gap-md mb-xl px-sm">
<div class="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
<span class="material-symbols-outlined text-on-primary">medical_services</span>
</div>
<div>
<h1 class="font-headline-md text-headline-md font-bold text-primary dark:text-primary-fixed leading-tight">Hospital Admin</h1>
<p class="text-label-sm font-label-sm text-on-surface-variant">Management Console</p>
</div>
</div>
<nav class="flex-1 flex flex-col gap-xs overflow-y-auto custom-scrollbar">
<!-- Navigation Tabs from JSON -->
<a class="flex items-center gap-md px-md py-sm font-label-md text-label-md text-on-surface-variant dark:text-surface-variant hover:bg-surface-variant dark:hover:bg-inverse-surface transition-all rounded-lg" href="#">
<span class="material-symbols-outlined">dashboard</span>
<span>Overview</span>
</a>
<a class="flex items-center gap-md px-md py-sm font-label-md text-label-md text-on-surface-variant dark:text-surface-variant hover:bg-surface-variant dark:hover:bg-inverse-surface transition-all rounded-lg" href="#">
<span class="material-symbols-outlined">web</span>
<span>Landing Page</span>
</a>
<a class="flex items-center gap-md px-md py-sm font-label-md text-label-md text-on-surface-variant dark:text-surface-variant hover:bg-surface-variant dark:hover:bg-inverse-surface transition-all rounded-lg" href="#">
<span class="material-symbols-outlined">medical_services</span>
<span>Services</span>
</a>
<a class="flex items-center gap-md px-md py-sm font-label-md text-label-md bg-secondary-container dark:bg-secondary text-on-secondary-container dark:text-on-secondary rounded-lg" href="#">
<span class="material-symbols-outlined">auto_awesome</span>
<span>Success Stories</span>
</a>
<a class="flex items-center gap-md px-md py-sm font-label-md text-label-md text-on-surface-variant dark:text-surface-variant hover:bg-surface-variant dark:hover:bg-inverse-surface transition-all rounded-lg" href="#">
<span class="material-symbols-outlined">group</span>
<span>Staff</span>
</a>
</nav>
<div class="mt-auto flex flex-col gap-xs border-t border-outline-variant pt-lg">
<a class="flex items-center gap-md px-md py-sm font-label-md text-label-md text-on-surface-variant dark:text-surface-variant hover:bg-surface-variant dark:hover:bg-inverse-surface transition-all rounded-lg" href="#">
<span class="material-symbols-outlined">contact_support</span>
<span>Support</span>
</a>
<a class="flex items-center gap-md px-md py-sm font-label-md text-label-md text-on-surface-variant dark:text-surface-variant hover:bg-surface-variant dark:hover:bg-inverse-surface transition-all rounded-lg" href="#">
<span class="material-symbols-outlined">logout</span>
<span>Logout</span>
</a>
</div>
</aside>
<!-- Main Canvas -->
<main class="flex-1 md:ml-[280px] min-h-screen flex flex-col relative">
<!-- TopNavBar (Shared Component) -->
<header class="sticky top-0 z-20 bg-surface dark:bg-inverse-surface border-b border-outline-variant dark:border-outline">
<div class="flex justify-between items-center w-full px-margin-mobile md:px-margin-desktop h-16 max-w-[1280px] mx-auto">
<div class="flex items-center gap-lg">
<span class="font-headline-md text-headline-md font-bold text-primary dark:text-primary-fixed md:hidden">MediCore</span>
<!-- Desktop Navigation Links from JSON -->
<nav class="hidden md:flex items-center gap-gutter">
<a class="font-label-md text-label-md text-on-surface-variant dark:text-surface-variant hover:text-primary dark:hover:text-primary-fixed transition-colors" href="#">Dashboard</a>
<a class="font-label-md text-label-md text-on-surface-variant dark:text-surface-variant hover:text-primary dark:hover:text-primary-fixed transition-colors" href="#">Content Manager</a>
<a class="font-label-md text-label-md text-on-surface-variant dark:text-surface-variant hover:text-primary dark:hover:text-primary-fixed transition-colors" href="#">Announcements</a>
<a class="font-label-md text-label-md text-primary dark:text-primary-fixed border-b-2 border-primary dark:border-primary-fixed pb-1" href="#">Settings</a>
</nav>
</div>
<div class="flex items-center gap-md">
<div class="hidden md:flex items-center gap-sm mr-md">
<button class="p-2 text-on-surface-variant hover:bg-surface-variant rounded-full transition-colors">
<span class="material-symbols-outlined">notifications</span>
</button>
<button class="p-2 text-on-surface-variant hover:bg-surface-variant rounded-full transition-colors">
<span class="material-symbols-outlined">help</span>
</button>
</div>
<button class="hidden lg:flex items-center gap-xs px-md py-sm bg-primary text-on-primary rounded-lg font-label-md text-label-md hover:opacity-90 active:scale-95 transition-all">
<span class="material-symbols-outlined text-[18px]">add</span>
                            New Update
                        </button>
<div class="w-10 h-10 rounded-full border-2 border-primary-container overflow-hidden">
<img class="w-full h-full object-cover" data-alt="A professional close-up portrait of a healthcare administrator in a bright, modern clinic office setting. The person has a friendly but authoritative expression. Soft daylight filters through large windows in the background, illuminating a sterile and efficient workspace with blue and white corporate medical tones." src="https://lh3.googleusercontent.com/aida-public/AB6AXuAh3FjAWyxHeQdKxbzvpd0ChJatY287sN4gOxkDETQJMjL_SdT6pqYmLsQfJMp32itZKRrB75hMn1mGl6Bt_XeoV5Z_-IbUThlPZevLSb7Q5VDCT4VJL-2k58K4yMcDRXZ94kgktUBTIZjhSrA1dQUvuz3W-0bWltuX-LBZsTYzRcA8zA9NbuvJxEohDSZOP5UZo_3Ys_78Y5o-7VKcbCcipbbZAZaBH2GDB1XEQ_lAlSdECoO_aRd45Q"/>
</div>
</div>
</div>
</header>
<!-- Page Content -->
<div class="p-margin-mobile md:p-margin-desktop max-w-[1280px] mx-auto w-full flex-1">
<!-- Page Header & Action -->
<div class="flex flex-col md:flex-row md:items-end justify-between gap-lg mb-xl">
<div>
<h2 class="font-headline-lg text-headline-lg text-on-surface mb-xs">Success Stories</h2>
<p class="font-body-md text-body-md text-on-surface-variant max-w-2xl">Manage and curate patient testimonials that build trust and showcase clinical excellence on your landing page.</p>
</div>
<button class="flex items-center justify-center gap-sm px-xl py-md bg-primary text-on-primary rounded-lg font-label-md text-label-md shadow-sm hover:shadow-md active:scale-[0.98] transition-all">
<span class="material-symbols-outlined">add_circle</span>
                        Add New Story
                    </button>
</div>
<!-- Filters & Search Bento Area -->
<div class="grid grid-cols-1 md:grid-cols-12 gap-gutter mb-lg">
<!-- Search -->
<div class="md:col-span-6 lg:col-span-8 relative">
<span class="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-outline">search</span>
<input class="w-full pl-12 pr-4 py-3 bg-surface-container-lowest border border-outline-variant rounded-xl focus:ring-2 focus:ring-primary focus:border-primary transition-all text-body-md outline-none" placeholder="Search by patient name or story title..." type="text"/>
</div>
<!-- Status Filter -->
<div class="md:col-span-3 lg:col-span-2">
<select class="w-full px-4 py-3 bg-surface-container-lowest border border-outline-variant rounded-xl focus:ring-2 focus:ring-primary focus:border-primary transition-all text-label-md font-label-md outline-none appearance-none cursor-pointer">
<option>All Statuses</option>
<option>Published</option>
<option>Draft</option>
</select>
</div>
<!-- Date Filter -->
<div class="md:col-span-3 lg:col-span-2">
<select class="w-full px-4 py-3 bg-surface-container-lowest border border-outline-variant rounded-xl focus:ring-2 focus:ring-primary focus:border-primary transition-all text-label-md font-label-md outline-none appearance-none cursor-pointer">
<option>Newest First</option>
<option>Oldest First</option>
</select>
</div>
</div>
<!-- Table Container -->
<div class="bg-surface-container-lowest border border-outline-variant rounded-xl overflow-hidden shadow-sm">
<div class="overflow-x-auto">
<table class="w-full border-collapse text-left">
<thead class="bg-surface-container-low border-b border-outline-variant">
<tr>
<th class="px-lg py-md text-label-sm font-label-sm text-on-surface-variant uppercase tracking-wider">Patient Name</th>
<th class="px-lg py-md text-label-sm font-label-sm text-on-surface-variant uppercase tracking-wider">Title</th>
<th class="px-lg py-md text-label-sm font-label-sm text-on-surface-variant uppercase tracking-wider">Date Added</th>
<th class="px-lg py-md text-label-sm font-label-sm text-on-surface-variant uppercase tracking-wider">Status</th>
<th class="px-lg py-md text-label-sm font-label-sm text-on-surface-variant uppercase tracking-wider text-right">Actions</th>
</tr>
</thead>
<tbody class="divide-y divide-outline-variant">
<!-- Row 1 -->
<tr class="hover:bg-surface-container-low transition-colors group">
<td class="px-lg py-lg">
<div class="flex items-center gap-md">
<div class="w-10 h-10 rounded-full overflow-hidden bg-surface-variant">
<img class="w-full h-full object-cover" data-alt="A warm, brightly lit profile photo of a mature patient smiling gently. The background is a soft-focus garden with lush greenery and natural sunlight, conveying a sense of health and recovery. The image is clean, high-resolution, and fits a professional medical success story profile." src="https://lh3.googleusercontent.com/aida-public/AB6AXuBU3wpUP4yntFEzQldefsZpPPN4I72vUpaHxzpA8hy0sq4rCy-E88YD4DYNJ5PIDBiXNw6ErMUkmA-A_XgkuTIa3USwY4RQi3alFgUMDTF0T1exBZtURXJ5AQiXMqxaUYr4wW2Vyj4XBisFFeRP98EwUIAlHejb7dFEzl4pLDdOYByTaom-hpHq8cQXLkziHtLgiwzs5IGBf9hJS3BPaFFfwgWkzbGUjDeutI0PQDhqv9vmnpb2Qw6qbQ"/>
</div>
<span class="font-label-md text-label-md text-on-surface">Sarah Johnson</span>
</div>
</td>
<td class="px-lg py-lg">
<span class="font-body-md text-body-md text-on-surface">A New Chapter in Cardiac Health</span>
</td>
<td class="px-lg py-lg text-body-sm text-on-surface-variant">Oct 12, 2023</td>
<td class="px-lg py-lg">
<span class="inline-flex items-center gap-xs px-sm py-1 bg-secondary-container text-on-secondary-container rounded-full text-label-sm font-label-sm">
<span class="w-2 h-2 rounded-full bg-secondary"></span>
                                            Published
                                        </span>
</td>
<td class="px-lg py-lg text-right">
<div class="flex items-center justify-end gap-sm">
<button class="p-2 text-on-surface-variant hover:text-primary hover:bg-primary-container/10 rounded-lg transition-all" title="Edit">
<span class="material-symbols-outlined">edit</span>
</button>
<button class="p-2 text-on-surface-variant hover:text-secondary hover:bg-secondary-container/10 rounded-lg transition-all" title="Toggle Visibility">
<span class="material-symbols-outlined">visibility</span>
</button>
<button class="p-2 text-on-surface-variant hover:text-error hover:bg-error-container/10 rounded-lg transition-all" title="Delete">
<span class="material-symbols-outlined">delete</span>
</button>
</div>
</td>
</tr>
<!-- Row 2 -->
<tr class="hover:bg-surface-container-low transition-colors group">
<td class="px-lg py-lg">
<div class="flex items-center gap-md">
<div class="w-10 h-10 rounded-full overflow-hidden bg-surface-variant">
<img class="w-full h-full object-cover" data-alt="A portrait of a young athletic patient in high-performance sportswear, standing confidently in a modern physical therapy gym. Bright, crisp studio lighting highlights their fit physique and energetic expression. The environment is clean and technologically advanced, mirroring a top-tier medical facility." src="https://lh3.googleusercontent.com/aida-public/AB6AXuC525A0IHvnc64fYlcIhNOdAgGhsAdma0j3IqTfg8oj3dGeOTk81nzQ4nUo58_Dua1NygkckmUpmL2O_frU6oJeWGgqG5IqV8Q8cO5ObxPpAfbiaJSDFUXN4wsw9oxtipcH0HmL9ZVlxtFHgJnilQhMhIizy1XeJIWU60L7Rw_XjY9Qun87vYrYEIbaAEy-5KhFixeARREF57jPbVNR_E1JWfNKnMe_f77BK6uuddhZWW_5ygKgvzQ7FQ"/>
</div>
<span class="font-label-md text-label-md text-on-surface">Mark Davies</span>
</div>
</td>
<td class="px-lg py-lg">
<span class="font-body-md text-body-md text-on-surface">Back on the Field: Post-ACL Surgery</span>
</td>
<td class="px-lg py-lg text-body-sm text-on-surface-variant">Nov 05, 2023</td>
<td class="px-lg py-lg">
<span class="inline-flex items-center gap-xs px-sm py-1 bg-surface-variant text-on-surface-variant rounded-full text-label-sm font-label-sm">
<span class="w-2 h-2 rounded-full bg-outline"></span>
                                            Draft
                                        </span>
</td>
<td class="px-lg py-lg text-right">
<div class="flex items-center justify-end gap-sm">
<button class="p-2 text-on-surface-variant hover:text-primary rounded-lg transition-all">
<span class="material-symbols-outlined">edit</span>
</button>
<button class="p-2 text-on-surface-variant hover:text-secondary rounded-lg transition-all">
<span class="material-symbols-outlined">visibility_off</span>
</button>
<button class="p-2 text-on-surface-variant hover:text-error rounded-lg transition-all">
<span class="material-symbols-outlined">delete</span>
</button>
</div>
</td>
</tr>
<!-- Row 3 -->
<tr class="hover:bg-surface-container-low transition-colors group">
<td class="px-lg py-lg">
<div class="flex items-center gap-md">
<div class="w-10 h-10 rounded-full overflow-hidden bg-surface-variant">
<img class="w-full h-full object-cover" data-alt="An elegant, professional headshot of a woman in her 40s in a corporate office setting with subtle clinical accents. She is smiling with confidence. The lighting is soft and even, highlighting a polished, modern aesthetic with a palette of cool blues and clean whites." src="https://lh3.googleusercontent.com/aida-public/AB6AXuBSEYvlxvSOFHoKi6q5-2te4xVSMKh7D-uK-FL82yhFtt-mqjDu-oqAKqb3Pt0OSX5yUNBHWTdb5CCibB5Lzy2MjzWfHwx6YkAYCotIpUHzBjkZ6haw2O7qe57kOBhVrtKiJy_urwVQvafhBO_MBYCW9K2jWEMh2mL9VZZ7voDXeUwVA2ktkYgFQbKGdr1lD5zScsO_euKwkzePFo5I_IoyZe2r15tlFv-mcWIFElPCkHxP6ZtwhRCqhQ"/>
</div>
<span class="font-label-md text-label-md text-on-surface">Elena Rodriguez</span>
</div>
</td>
<td class="px-lg py-lg">
<span class="font-body-md text-body-md text-on-surface">Managing Chronic Pain with MediCore</span>
</td>
<td class="px-lg py-lg text-body-sm text-on-surface-variant">Jan 14, 2024</td>
<td class="px-lg py-lg">
<span class="inline-flex items-center gap-xs px-sm py-1 bg-secondary-container text-on-secondary-container rounded-full text-label-sm font-label-sm">
<span class="w-2 h-2 rounded-full bg-secondary"></span>
                                            Published
                                        </span>
</td>
<td class="px-lg py-lg text-right">
<div class="flex items-center justify-end gap-sm">
<button class="p-2 text-on-surface-variant hover:text-primary rounded-lg transition-all">
<span class="material-symbols-outlined">edit</span>
</button>
<button class="p-2 text-on-surface-variant hover:text-secondary rounded-lg transition-all">
<span class="material-symbols-outlined">visibility</span>
</button>
<button class="p-2 text-on-surface-variant hover:text-error rounded-lg transition-all">
<span class="material-symbols-outlined">delete</span>
</button>
</div>
</td>
</tr>
</tbody>
</table>
</div>
<!-- Table Footer / Pagination -->
<div class="px-lg py-md bg-surface-container-lowest border-t border-outline-variant flex items-center justify-between">
<span class="text-body-sm text-on-surface-variant">Showing 3 of 24 stories</span>
<div class="flex items-center gap-xs">
<button class="p-2 border border-outline-variant rounded-lg text-on-surface-variant hover:bg-surface-container-low disabled:opacity-30" disabled="">
<span class="material-symbols-outlined">chevron_left</span>
</button>
<button class="px-4 py-2 bg-primary text-on-primary rounded-lg text-label-sm font-label-sm">1</button>
<button class="px-4 py-2 hover:bg-surface-container-low rounded-lg text-label-sm font-label-sm">2</button>
<button class="px-4 py-2 hover:bg-surface-container-low rounded-lg text-label-sm font-label-sm">3</button>
<button class="p-2 border border-outline-variant rounded-lg text-on-surface-variant hover:bg-surface-container-low">
<span class="material-symbols-outlined">chevron_right</span>
</button>
</div>
</div>
</div>
<!-- Empty State Suggestion / Tips -->
<div class="mt-xl p-lg bg-primary-container/10 border border-primary-container/20 rounded-xl flex items-start gap-lg">
<div class="w-12 h-12 bg-primary-container rounded-full flex items-center justify-center shrink-0">
<span class="material-symbols-outlined text-primary">lightbulb</span>
</div>
<div>
<h4 class="font-label-md text-label-md text-primary mb-1">Success Story Tip</h4>
<p class="text-body-sm text-on-surface-variant">High-quality patient stories with clear 'Before' and 'After' medical milestones increase user conversion by 40%. Ensure every published story has a verified patient photo and a signed consent form on file.</p>
</div>
</div>
</div>
<!-- Footer (Shared Component) -->
<footer class="mt-auto bg-surface-container-highest dark:bg-inverse-surface border-t border-outline-variant dark:border-outline">
<div class="flex flex-col md:flex-row justify-between items-center px-margin-mobile md:px-margin-desktop py-xl w-full max-w-[1280px] mx-auto gap-md">
<div class="flex flex-col md:items-start items-center">
<span class="font-label-md text-label-md font-bold text-on-surface dark:text-inverse-on-surface">MediCore Healthcare Systems</span>
<p class="font-body-sm text-body-sm text-on-surface-variant dark:text-surface-variant">© 2024 MediCore Healthcare Systems. All rights reserved.</p>
</div>
<div class="flex gap-gutter">
<a class="font-body-sm text-body-sm text-on-surface-variant dark:text-surface-variant hover:text-primary dark:hover:text-primary-fixed transition-opacity hover:opacity-90" href="#">Privacy Policy</a>
<a class="font-body-sm text-body-sm text-on-surface-variant dark:text-surface-variant hover:text-primary dark:hover:text-primary-fixed transition-opacity hover:opacity-90" href="#">Terms of Service</a>
<a class="font-body-sm text-body-sm text-on-surface-variant dark:text-surface-variant hover:text-primary dark:hover:text-primary-fixed transition-opacity hover:opacity-90" href="#">Contact Support</a>
</div>
</div>
</footer>
</main>
</div>
<!-- Micro-interactions Script -->
<script>
        document.addEventListener('DOMContentLoaded', () => {
            // Dropdown & Hover effects simulation
            const rows = document.querySelectorAll('tbody tr');
            rows.forEach(row => {
                row.addEventListener('click', (e) => {
                    if (e.target.closest('button')) return;
                    console.log('Row clicked for detail view');
                });
            });

            // Toggle visibility icons simulation
            const visibilityBtns = document.querySelectorAll('button[title="Toggle Visibility"]');
            visibilityBtns.forEach(btn => {
                btn.addEventListener('click', function() {
                    const icon = this.querySelector('.material-symbols-outlined');
                    if (icon.textContent === 'visibility') {
                        icon.textContent = 'visibility_off';
                        this.classList.replace('text-secondary', 'text-outline');
                    } else {
                        icon.textContent = 'visibility';
                        this.classList.replace('text-outline', 'text-secondary');
                    }
                });
            });
        });
    </script>
` }} />
    );
};

export default ManageSuccessStoriesAdmin;
