import React from 'react';

const AdminCentralOverview = () => {
    return (
        <div dangerouslySetInnerHTML={{ __html: `
<!-- SideNavBar (Persistent Sidebar) -->
<aside class="hidden md:flex flex-col h-screen py-lg px-md bg-surface-container-low dark:bg-surface-container-lowest border-r border-outline-variant w-[280px] shrink-0">
<!-- Brand Header -->
<div class="flex items-center gap-md mb-xl px-sm">
<div class="w-10 h-10 bg-primary rounded-lg flex items-center justify-center text-on-primary">
<span class="material-symbols-outlined" style="font-variation-settings: 'FILL' 1;">medical_services</span>
</div>
<div>
<h1 class="font-headline-md text-headline-md font-bold text-primary dark:text-primary-fixed leading-tight">Hospital Admin</h1>
<p class="font-label-sm text-label-sm text-on-surface-variant">Management Console</p>
</div>
</div>
<!-- Navigation Tabs -->
<nav class="flex-1 space-y-xs overflow-y-auto">
<a class="flex items-center gap-md px-md py-sm bg-secondary-container dark:bg-secondary text-on-secondary-container dark:text-on-secondary rounded-lg font-label-md text-label-md transition-all active:scale-95 duration-150" href="#">
<span class="material-symbols-outlined">dashboard</span>
<span>Overview</span>
</a>
<a class="flex items-center gap-md px-md py-sm text-on-surface-variant dark:text-surface-variant hover:bg-surface-variant dark:hover:bg-inverse-surface rounded-lg font-label-md text-label-md transition-all active:scale-95 duration-150" href="#">
<span class="material-symbols-outlined">web</span>
<span>Landing Page</span>
</a>
<a class="flex items-center gap-md px-md py-sm text-on-surface-variant dark:text-surface-variant hover:bg-surface-variant dark:hover:bg-inverse-surface rounded-lg font-label-md text-label-md transition-all active:scale-95 duration-150" href="#">
<span class="material-symbols-outlined">medical_services</span>
<span>Services</span>
</a>
<a class="flex items-center gap-md px-md py-sm text-on-surface-variant dark:text-surface-variant hover:bg-surface-variant dark:hover:bg-inverse-surface rounded-lg font-label-md text-label-md transition-all active:scale-95 duration-150" href="#">
<span class="material-symbols-outlined">auto_awesome</span>
<span>Success Stories</span>
</a>
<a class="flex items-center gap-md px-md py-sm text-on-surface-variant dark:text-surface-variant hover:bg-surface-variant dark:hover:bg-inverse-surface rounded-lg font-label-md text-label-md transition-all active:scale-95 duration-150" href="#">
<span class="material-symbols-outlined">group</span>
<span>Staff</span>
</a>
<a class="flex items-center gap-md px-md py-sm text-on-surface-variant dark:text-surface-variant hover:bg-surface-variant dark:hover:bg-inverse-surface rounded-lg font-label-md text-label-md transition-all active:scale-95 duration-150" href="#">
<span class="material-symbols-outlined">settings</span>
<span>Settings</span>
</a>
</nav>
<!-- Footer Tabs -->
<div class="mt-auto pt-lg border-t border-outline-variant space-y-xs">
<a class="flex items-center gap-md px-md py-sm text-on-surface-variant dark:text-surface-variant hover:bg-surface-variant dark:hover:bg-inverse-surface rounded-lg font-label-md text-label-md transition-all active:scale-95 duration-150" href="#">
<span class="material-symbols-outlined">contact_support</span>
<span>Support</span>
</a>
<a class="flex items-center gap-md px-md py-sm text-on-surface-variant dark:text-surface-variant hover:bg-surface-variant dark:hover:bg-inverse-surface rounded-lg font-label-md text-label-md transition-all active:scale-95 duration-150" href="#">
<span class="material-symbols-outlined text-error">logout</span>
<span class="text-error">Logout</span>
</a>
</div>
</aside>
<!-- Main Content Area -->
<main class="flex-1 flex flex-col h-screen overflow-hidden">
<!-- TopNavBar -->
<header class="h-16 flex justify-between items-center w-full px-margin-desktop bg-surface dark:bg-inverse-surface border-b border-outline-variant dark:border-outline shrink-0">
<div class="flex items-center gap-xl h-full">
<h2 class="font-headline-md text-headline-md font-bold text-primary dark:text-primary-fixed">Dashboard</h2>
<nav class="hidden lg:flex items-center gap-lg h-full pt-2">
<a class="font-label-md text-label-md text-primary dark:text-primary-fixed border-b-2 border-primary dark:border-primary-fixed pb-4" href="#">Dashboard</a>
<a class="font-label-md text-label-md text-on-surface-variant dark:text-surface-variant hover:text-primary dark:hover:text-primary-fixed transition-colors pb-4" href="#">Content Manager</a>
<a class="font-label-md text-label-md text-on-surface-variant dark:text-surface-variant hover:text-primary dark:hover:text-primary-fixed transition-colors pb-4" href="#">Announcements</a>
<a class="font-label-md text-label-md text-on-surface-variant dark:text-surface-variant hover:text-primary dark:hover:text-primary-fixed transition-colors pb-4" href="#">Settings</a>
</nav>
</div>
<div class="flex items-center gap-md">
<button class="flex items-center justify-center p-sm rounded-full hover:bg-surface-variant transition-colors text-on-surface-variant">
<span class="material-symbols-outlined">notifications</span>
</button>
<button class="flex items-center justify-center p-sm rounded-full hover:bg-surface-variant transition-colors text-on-surface-variant">
<span class="material-symbols-outlined">help</span>
</button>
<div class="h-8 w-px bg-outline-variant mx-xs"></div>
<button class="px-md py-sm bg-primary text-on-primary font-label-md text-label-md rounded-lg shadow-sm hover:opacity-90 active:scale-95 transition-all">
                    New Update
                </button>
<div class="w-10 h-10 rounded-full border border-outline-variant overflow-hidden cursor-pointer active:opacity-80">
<img class="w-full h-full object-cover" data-alt="A professional headshot of a female healthcare administrator with a kind smile, wearing a modern blue clinical blazer, set against a bright, airy office background with soft bokeh. The lighting is crisp and sterile yet warm, matching a high-end corporate medical aesthetic." src="https://lh3.googleusercontent.com/aida-public/AB6AXuDKDjjwruTafMsjNUBk0yNkzdIqJKoCOjIvFPR2QfLJKBZ3pgIDgKQGj8E3jja778ta36GLbUhyYkrYWSgHsryOkLqxkWpVoJDOXT2ZpShVfvyXRyv_bU8XpMDK7tnMO1FEeLVQXGxUPgbswxMosJ9ZEyTW9bZbwB2Dnp6_TXRZ3AU6UET2DQELapd2-zUd8_-s81qlQJbNkL5z8BMZ4OuFuob0AE9cp7CZSzWfU0hhuMljrmlQQwOn7g"/>
</div>
</div>
</header>
<!-- Content Scroll Area -->
<div class="flex-1 overflow-y-auto p-margin-desktop bg-background">
<div class="max-w-[1280px] mx-auto space-y-lg">
<!-- Welcome Section -->
<section class="flex flex-col md:flex-row md:items-center justify-between gap-md mb-lg">
<div>
<h1 class="font-headline-lg text-headline-lg text-on-surface">Good morning, Admin</h1>
<p class="font-body-md text-body-md text-on-surface-variant">Here is a summary of MediCore Health operations today.</p>
</div>
<div class="flex items-center gap-sm">
<span class="font-label-sm text-label-sm text-on-surface-variant bg-surface-container-high px-md py-xs rounded-full">Last Login: 2 hours ago</span>
</div>
</section>
<!-- Stats Overview Bento Grid -->
<section class="grid grid-cols-1 md:grid-cols-3 gap-gutter">
<!-- Total Patients Card -->
<div class="bg-surface-container-lowest border border-outline-variant p-lg rounded-xl shadow-[0px_2px_4px_rgba(0,0,0,0.05)] hover:border-primary transition-colors cursor-default">
<div class="flex justify-between items-start mb-md">
<div class="p-sm bg-primary-fixed text-on-primary-fixed rounded-lg">
<span class="material-symbols-outlined">person</span>
</div>
<span class="text-secondary font-label-sm text-label-sm flex items-center gap-xs">
<span class="material-symbols-outlined text-[16px]">trending_up</span> +12%
                            </span>
</div>
<p class="font-label-md text-label-md text-on-surface-variant mb-xs">Total Patients</p>
<h2 class="font-display-lg text-display-lg text-primary">12,482</h2>
</div>
<!-- Active Services Card -->
<div class="bg-surface-container-lowest border border-outline-variant p-lg rounded-xl shadow-[0px_2px_4px_rgba(0,0,0,0.05)] hover:border-primary transition-colors cursor-default">
<div class="flex justify-between items-start mb-md">
<div class="p-sm bg-secondary-container text-on-secondary-container rounded-lg">
<span class="material-symbols-outlined">medical_services</span>
</div>
<span class="text-on-surface-variant font-label-sm text-label-sm">Steady</span>
</div>
<p class="font-label-md text-label-md text-on-surface-variant mb-xs">Active Services</p>
<h2 class="font-display-lg text-display-lg text-secondary">48</h2>
</div>
<!-- Active Announcements Card -->
<div class="bg-surface-container-lowest border border-outline-variant p-lg rounded-xl shadow-[0px_2px_4px_rgba(0,0,0,0.05)] hover:border-primary transition-colors cursor-default">
<div class="flex justify-between items-start mb-md">
<div class="p-sm bg-tertiary-fixed text-on-tertiary-fixed rounded-lg">
<span class="material-symbols-outlined">campaign</span>
</div>
<span class="text-error font-label-sm text-label-sm flex items-center gap-xs">
<span class="material-symbols-outlined text-[16px]">warning</span> 2 Priority
                            </span>
</div>
<p class="font-label-md text-label-md text-on-surface-variant mb-xs">Active Announcements</p>
<h2 class="font-display-lg text-display-lg text-tertiary">14</h2>
</div>
</section>
<!-- Complex Layout: Activity & Quick Actions -->
<div class="grid grid-cols-1 lg:grid-cols-12 gap-gutter">
<!-- At a Glance: Recent Activity -->
<section class="lg:col-span-8 bg-surface-container-lowest border border-outline-variant rounded-xl overflow-hidden shadow-[0px_2px_4px_rgba(0,0,0,0.05)]">
<div class="p-lg border-b border-outline-variant flex justify-between items-center">
<h3 class="font-headline-md text-headline-md text-on-surface">Recent Activity</h3>
<button class="text-primary font-label-md text-label-md hover:underline">View All</button>
</div>
<div class="overflow-x-auto">
<table class="w-full text-left">
<thead class="bg-surface-container-low">
<tr>
<th class="px-lg py-md font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider">Activity</th>
<th class="px-lg py-md font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider">Module</th>
<th class="px-lg py-md font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider">Time</th>
<th class="px-lg py-md font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider">Status</th>
</tr>
</thead>
<tbody class="divide-y divide-outline-variant">
<tr class="hover:bg-surface transition-colors cursor-pointer">
<td class="px-lg py-md">
<div class="flex items-center gap-md">
<div class="w-8 h-8 rounded-full bg-primary-fixed flex items-center justify-center text-on-primary-fixed">
<span class="material-symbols-outlined text-[18px]">edit</span>
</div>
<span class="font-body-md text-body-md text-on-surface">Updated Cardiology Service Page</span>
</div>
</td>
<td class="px-lg py-md font-body-sm text-body-sm text-on-surface-variant">Services</td>
<td class="px-lg py-md font-body-sm text-body-sm text-on-surface-variant">2 mins ago</td>
<td class="px-lg py-md">
<span class="px-sm py-xs bg-secondary-container text-on-secondary-container text-label-sm font-label-sm rounded-md">Live</span>
</td>
</tr>
<tr class="hover:bg-surface transition-colors cursor-pointer">
<td class="px-lg py-md">
<div class="flex items-center gap-md">
<div class="w-8 h-8 rounded-full bg-tertiary-fixed flex items-center justify-center text-on-tertiary-fixed">
<span class="material-symbols-outlined text-[18px]">add</span>
</div>
<span class="font-body-md text-body-md text-on-surface">New Success Story: Jane Doe</span>
</div>
</td>
<td class="px-lg py-md font-body-sm text-body-sm text-on-surface-variant">Stories</td>
<td class="px-lg py-md font-body-sm text-body-sm text-on-surface-variant">45 mins ago</td>
<td class="px-lg py-md">
<span class="px-sm py-xs bg-surface-variant text-on-surface-variant text-label-sm font-label-sm rounded-md">Draft</span>
</td>
</tr>
<tr class="hover:bg-surface transition-colors cursor-pointer">
<td class="px-lg py-md">
<div class="flex items-center gap-md">
<div class="w-8 h-8 rounded-full bg-error-container flex items-center justify-center text-on-error-container">
<span class="material-symbols-outlined text-[18px]">delete</span>
</div>
<span class="font-body-md text-body-md text-on-surface">Archived Old Announcement</span>
</div>
</td>
<td class="px-lg py-md font-body-sm text-body-sm text-on-surface-variant">News</td>
<td class="px-lg py-md font-body-sm text-body-sm text-on-surface-variant">3 hours ago</td>
<td class="px-lg py-md">
<span class="px-sm py-xs bg-outline-variant text-on-surface-variant text-label-sm font-label-sm rounded-md">Archived</span>
</td>
</tr>
</tbody>
</table>
</div>
</section>
<!-- Quick Links & System Health -->
<div class="lg:col-span-4 space-y-gutter">
<!-- Quick Links -->
<section class="bg-primary text-on-primary p-lg rounded-xl shadow-lg relative overflow-hidden">
<div class="relative z-10">
<h3 class="font-headline-md text-headline-md mb-lg">Content Actions</h3>
<div class="space-y-md">
<button class="w-full flex items-center justify-between p-md bg-on-primary/10 hover:bg-on-primary/20 rounded-lg transition-all active:scale-[0.98]">
<div class="flex items-center gap-md">
<span class="material-symbols-outlined">auto_stories</span>
<span class="font-label-md text-label-md">Manage Success Stories</span>
</div>
<span class="material-symbols-outlined">chevron_right</span>
</button>
<button class="w-full flex items-center justify-between p-md bg-on-primary/10 hover:bg-on-primary/20 rounded-lg transition-all active:scale-[0.98]">
<div class="flex items-center gap-md">
<span class="material-symbols-outlined">home_repair_service</span>
<span class="font-label-md text-label-md">Update Homepage Content</span>
</div>
<span class="material-symbols-outlined">chevron_right</span>
</button>
<button class="w-full flex items-center justify-between p-md bg-on-primary/10 hover:bg-on-primary/20 rounded-lg transition-all active:scale-[0.98]">
<div class="flex items-center gap-md">
<span class="material-symbols-outlined">mail</span>
<span class="font-label-md text-label-md">Broadcast Announcement</span>
</div>
<span class="material-symbols-outlined">chevron_right</span>
</button>
</div>
</div>
<!-- Subtle Abstract Pattern Background -->
<div class="absolute -bottom-10 -right-10 opacity-20 pointer-events-none">
<span class="material-symbols-outlined text-[160px]" style="font-variation-settings: 'FILL' 1;">medical_information</span>
</div>
</section>
<!-- System Status -->
<section class="bg-surface-container-lowest border border-outline-variant p-lg rounded-xl">
<h3 class="font-label-md text-label-md text-on-surface-variant mb-md">System Health</h3>
<div class="space-y-md">
<div class="flex justify-between items-center">
<span class="font-body-sm text-body-sm text-on-surface">Cloud Server</span>
<span class="flex items-center gap-xs text-secondary font-label-sm text-label-sm">
<span class="w-2 h-2 rounded-full bg-secondary"></span> Operational
                                    </span>
</div>
<div class="w-full bg-surface-container-high h-1 rounded-full overflow-hidden">
<div class="bg-secondary w-full h-full"></div>
</div>
<div class="flex justify-between items-center">
<span class="font-body-sm text-body-sm text-on-surface">Patient Database</span>
<span class="flex items-center gap-xs text-secondary font-label-sm text-label-sm">
<span class="w-2 h-2 rounded-full bg-secondary"></span> Operational
                                    </span>
</div>
<div class="w-full bg-surface-container-high h-1 rounded-full overflow-hidden">
<div class="bg-secondary w-[98%] h-full"></div>
</div>
</div>
</section>
</div>
</div>
</div>
</div>
<!-- Footer -->
<footer class="mt-auto border-t border-outline-variant bg-surface-container-highest dark:bg-inverse-surface">
<div class="flex flex-col md:flex-row justify-between items-center px-margin-desktop py-md w-full max-w-[1280px] mx-auto gap-md">
<div class="flex items-center gap-md">
<span class="font-label-md text-label-md font-bold text-on-surface dark:text-inverse-on-surface">MediCore Admin</span>
<p class="font-body-sm text-body-sm text-on-surface-variant dark:text-surface-variant">© 2024 MediCore Healthcare Systems. All rights reserved.</p>
</div>
<div class="flex gap-lg">
<a class="font-body-sm text-body-sm text-on-surface-variant dark:text-surface-variant hover:text-primary dark:hover:text-primary-fixed transition-opacity hover:opacity-90" href="#">Privacy Policy</a>
<a class="font-body-sm text-body-sm text-on-surface-variant dark:text-surface-variant hover:text-primary dark:hover:text-primary-fixed transition-opacity hover:opacity-90" href="#">Terms of Service</a>
<a class="font-body-sm text-body-sm text-on-surface-variant dark:text-surface-variant hover:text-primary dark:hover:text-primary-fixed transition-opacity hover:opacity-90" href="#">Contact Support</a>
</div>
</div>
</footer>
</main>
<!-- FAB for quick patients search (Task-focused context) -->
<button class="fixed bottom-lg right-lg md:hidden w-14 h-14 bg-primary text-on-primary rounded-full shadow-xl flex items-center justify-center hover:scale-105 active:scale-95 transition-all">
<span class="material-symbols-outlined">search</span>
</button>
<script>
        // Simple micro-interaction for sidebar tabs
        document.querySelectorAll('aside nav a').forEach(link => {
            link.addEventListener('click', (e) => {
                document.querySelectorAll('aside nav a').forEach(l => {
                    l.classList.remove('bg-secondary-container', 'dark:bg-secondary', 'text-on-secondary-container', 'dark:text-on-secondary');
                    l.classList.add('text-on-surface-variant', 'dark:text-surface-variant');
                });
                link.classList.remove('text-on-surface-variant', 'dark:text-surface-variant');
                link.classList.add('bg-secondary-container', 'dark:bg-secondary', 'text-on-secondary-container', 'dark:text-on-secondary');
            });
        });

        // Hover effect for stats cards to simulate data focus
        const cards = document.querySelectorAll('section.grid-cols-1 > div');
        cards.forEach(card => {
            card.addEventListener('mouseenter', () => {
                card.classList.add('transform', '-translate-y-1');
            });
            card.addEventListener('mouseleave', () => {
                card.classList.remove('transform', '-translate-y-1');
            });
        });
    </script>
` }} />
    );
};

export default AdminCentralOverview;
