import React from 'react';

const AnnouncementEditorMedicoreAdmin = () => {
    return (
        <div dangerouslySetInnerHTML={{ __html: `
<!-- SideNavBar (Shared Component Anchor) -->
<aside class="h-screen w-[280px] fixed left-0 top-0 bg-surface-container dark:bg-surface-container-high border-r border-outline-variant dark:border-outline flex flex-col p-md space-y-2 z-50">
<div class="px-md py-lg mb-md">
<h1 class="font-headline-md text-headline-md font-bold text-primary dark:text-primary-fixed">ClinicalCare</h1>
<p class="text-body-sm text-on-surface-variant opacity-70">Health System Management</p>
</div>
<nav class="flex-1 space-y-1">
<a class="flex items-center gap-md px-md py-sm text-on-surface-variant hover:bg-surface-variant/50 transition-all rounded-lg font-label-md text-label-md" href="#">
<span class="material-symbols-outlined">dashboard</span> Dashboard
            </a>
<a class="flex items-center gap-md px-md py-sm text-on-surface-variant hover:bg-surface-variant/50 transition-all rounded-lg font-label-md text-label-md" href="#">
<span class="material-symbols-outlined">group</span> Staff Management
            </a>
<a class="flex items-center gap-md px-md py-sm bg-primary-container dark:bg-primary text-on-primary-container dark:text-on-primary font-bold rounded-lg font-label-md text-label-md scale-98 active:scale-95 duration-200" href="#">
<span class="material-symbols-outlined">settings_applications</span> Content Configuration
            </a>
<a class="flex items-center gap-md px-md py-sm text-on-surface-variant hover:bg-surface-variant/50 transition-all rounded-lg font-label-md text-label-md" href="#">
<span class="material-symbols-outlined">personal_injury</span> Patient Records
            </a>
<a class="flex items-center gap-md px-md py-sm text-on-surface-variant hover:bg-surface-variant/50 transition-all rounded-lg font-label-md text-label-md" href="#">
<span class="material-symbols-outlined">settings</span> Settings
            </a>
</nav>
<button class="w-full bg-primary text-on-primary py-md rounded-xl font-label-md text-label-md flex items-center justify-center gap-sm mt-xl mb-md hover:opacity-90 transition-opacity">
<span class="material-symbols-outlined">add_circle</span> Add New Record
        </button>
<div class="pt-md border-t border-outline-variant/30 space-y-1">
<a class="flex items-center gap-md px-md py-sm text-on-surface-variant hover:bg-surface-variant/50 transition-all rounded-lg font-label-md text-label-md" href="#">
<span class="material-symbols-outlined">help</span> Support
            </a>
<a class="flex items-center gap-md px-md py-sm text-on-surface-variant hover:bg-surface-variant/50 transition-all rounded-lg font-label-md text-label-md" href="#">
<span class="material-symbols-outlined">logout</span> Logout
            </a>
</div>
</aside>
<!-- Main Content Area -->
<main class="ml-[280px] min-h-screen flex flex-col">
<!-- TopAppBar (Shared Component Anchor) -->
<header class="w-full sticky top-0 z-40 bg-surface/80 backdrop-blur-md border-b border-outline-variant flex justify-between items-center h-16 px-lg shadow-sm">
<div class="flex items-center gap-md">
<button class="hover:bg-surface-variant rounded-full p-2 transition-all">
<span class="material-symbols-outlined">menu</span>
</button>
<h2 class="font-headline-md text-headline-md text-primary">Content Configuration</h2>
</div>
<div class="flex items-center gap-lg">
<div class="flex items-center gap-sm">
<button class="hover:bg-surface-variant rounded-full p-2 transition-all relative">
<span class="material-symbols-outlined">notifications</span>
<span class="absolute top-2 right-2 w-2 h-2 bg-error rounded-full"></span>
</button>
<button class="hover:bg-surface-variant rounded-full p-2 transition-all">
<span class="material-symbols-outlined">settings</span>
</button>
</div>
<div class="flex items-center gap-md border-l border-outline-variant pl-lg">
<div class="text-right hidden md:block">
<p class="font-label-md text-label-md text-on-surface">Admin User</p>
<p class="text-[10px] uppercase tracking-wider text-on-surface-variant">System Administrator</p>
</div>
<img class="w-10 h-10 rounded-full border-2 border-primary-container" data-alt="A professional headshot of a middle-aged medical administrator wearing a clean white coat and a friendly expression. The background is a blurred high-tech medical facility with soft Clinical Blue and white tones. The lighting is bright and professional, creating an atmosphere of reliability and expertise in a modern light-mode interface." src="https://lh3.googleusercontent.com/aida-public/AB6AXuDiT8lLEnHxaLDJyEz7xw_gu5jVpJvp3oJbXZdW5qMqwPWh2nZctC0iXkA4zwp1eS2IH6kwi5N7VcwJ8dbE8RejKaVgIniwtitqOMY2jde87sUKPIX1Xt7n51U3YRcMtBsqE3IPR8u1PNytgbnQc0w4PBtXGiRxaxp8RQItFgqrlLN8WqonZtnVeJrXw4Cu61wZ0t5CNb2hVC0U_wkkLU5sGhZxaJt8P-yAjeAcOkdUctQCbHA7wapa-g"/>
</div>
</div>
</header>
<!-- Page Header -->
<section class="px-margin-desktop py-xl">
<div class="flex flex-col md:flex-row md:items-end justify-between gap-md mb-xl">
<div>
<nav class="flex items-center gap-xs text-on-surface-variant font-label-sm text-label-sm mb-sm">
<span>Content</span>
<span class="material-symbols-outlined text-[14px]">chevron_right</span>
<span class="text-primary font-bold">Announcements</span>
</nav>
<h3 class="font-headline-lg text-headline-lg text-on-surface tracking-tight">Create New Announcement</h3>
<p class="text-body-md text-on-surface-variant max-w-2xl mt-sm">Broadcast critical updates, policy changes, or system maintenance alerts to medical staff and patients across the ClinicalCare network.</p>
</div>
<div class="flex items-center gap-md">
<button class="px-lg py-md border border-outline text-on-surface-variant rounded-lg font-label-md text-label-md hover:bg-surface-variant/20 transition-all">Discard Draft</button>
<button class="px-lg py-md bg-primary text-on-primary rounded-lg font-label-md text-label-md shadow-sm hover:opacity-90 transition-all flex items-center gap-sm">
<span class="material-symbols-outlined text-[20px]">save</span> Save Announcement
                    </button>
</div>
</div>
<!-- Editor Grid -->
<form class="bento-grid">
<!-- Main Form Column -->
<div class="col-span-12 lg:col-span-8 space-y-gutter">
<!-- Basic Information Card -->
<div class="form-card rounded-xl p-lg">
<div class="flex items-center gap-sm mb-lg border-b border-outline-variant pb-md">
<span class="material-symbols-outlined text-primary">edit_note</span>
<h4 class="font-label-md text-label-md text-on-surface uppercase tracking-widest">General Information</h4>
</div>
<div class="space-y-lg">
<div class="group">
<label class="block font-label-sm text-label-sm text-on-surface-variant mb-xs">Announcement Title</label>
<input class="w-full bg-background border border-outline-variant rounded-lg px-md py-md text-body-md focus:ring-2 focus:ring-primary focus:border-primary transition-all outline-none" placeholder="e.g., Annual Staff Influenza Vaccination Drive 2024" type="text"/>
</div>
<div class="grid grid-cols-1 md:grid-cols-2 gap-lg">
<div>
<label class="block font-label-sm text-label-sm text-on-surface-variant mb-xs">Category</label>
<select class="w-full bg-background border border-outline-variant rounded-lg px-md py-md text-body-md focus:ring-2 focus:ring-primary focus:border-primary transition-all outline-none appearance-none">
<option>System Update</option>
<option>Clinical Alert</option>
<option>Administrative Policy</option>
<option>General News</option>
<option>Emergency Notification</option>
</select>
</div>
<div>
<label class="block font-label-sm text-label-sm text-on-surface-variant mb-xs">Target Audience</label>
<div class="flex flex-wrap gap-sm pt-xs">
<label class="inline-flex items-center gap-sm cursor-pointer">
<input checked="" class="rounded border-outline-variant text-primary focus:ring-primary" type="checkbox"/>
<span class="text-body-sm">Staff</span>
</label>
<label class="inline-flex items-center gap-sm cursor-pointer ml-md">
<input class="rounded border-outline-variant text-primary focus:ring-primary" type="checkbox"/>
<span class="text-body-sm">Patients</span>
</label>
</div>
</div>
</div>
</div>
</div>
<!-- Content Editor Card -->
<div class="form-card rounded-xl p-lg overflow-hidden">
<div class="flex items-center justify-between mb-lg border-b border-outline-variant pb-md">
<div class="flex items-center gap-sm">
<span class="material-symbols-outlined text-primary">article</span>
<h4 class="font-label-md text-label-md text-on-surface uppercase tracking-widest">Announcement Content</h4>
</div>
<div class="flex gap-xs">
<button class="p-xs hover:bg-surface-variant rounded transition-all" type="button"><span class="material-symbols-outlined text-[20px]">format_bold</span></button>
<button class="p-xs hover:bg-surface-variant rounded transition-all" type="button"><span class="material-symbols-outlined text-[20px]">format_italic</span></button>
<button class="p-xs hover:bg-surface-variant rounded transition-all" type="button"><span class="material-symbols-outlined text-[20px]">link</span></button>
<button class="p-xs hover:bg-surface-variant rounded transition-all border-l border-outline-variant ml-xs pl-xs" type="button"><span class="material-symbols-outlined text-[20px]">format_list_bulleted</span></button>
<button class="p-xs hover:bg-surface-variant rounded transition-all" type="button"><span class="material-symbols-outlined text-[20px]">image</span></button>
</div>
</div>
<textarea class="w-full bg-background border border-outline-variant rounded-lg px-md py-md text-body-md focus:ring-2 focus:ring-primary focus:border-primary transition-all outline-none min-h-[320px] resize-none" placeholder="Compose your announcement details here..."></textarea>
<div class="mt-md flex items-center justify-between">
<span class="text-body-sm text-on-surface-variant opacity-60">Estimated reading time: 2 mins</span>
<div class="flex gap-sm">
<button class="text-primary font-label-sm text-label-sm hover:underline" type="button">Preview Announcement</button>
</div>
</div>
</div>
</div>
<!-- Sidebar Form Column -->
<div class="col-span-12 lg:col-span-4 space-y-gutter">
<!-- Publishing Status Card -->
<div class="form-card rounded-xl p-lg bg-surface-container-low border-primary/10">
<div class="flex items-center gap-sm mb-lg">
<span class="material-symbols-outlined text-primary">publish</span>
<h4 class="font-label-md text-label-md text-on-surface uppercase tracking-widest">Publishing</h4>
</div>
<div class="space-y-lg">
<div>
<label class="block font-label-sm text-label-sm text-on-surface-variant mb-md">Publication Status</label>
<div class="grid grid-cols-1 gap-sm">
<label class="flex items-center justify-between p-md bg-white border border-outline-variant rounded-xl cursor-pointer hover:border-primary transition-all group">
<div class="flex items-center gap-md">
<span class="w-10 h-10 rounded-full bg-surface-variant flex items-center justify-center text-on-surface-variant group-hover:bg-primary/10 group-hover:text-primary transition-colors">
<span class="material-symbols-outlined">drafts</span>
</span>
<div>
<p class="font-label-md text-label-md">Save as Draft</p>
<p class="text-[10px] text-on-surface-variant">Private to admins only</p>
</div>
</div>
<input checked="" class="text-primary focus:ring-primary h-5 w-5" name="status" type="radio"/>
</label>
<label class="flex items-center justify-between p-md bg-white border border-outline-variant rounded-xl cursor-pointer hover:border-primary transition-all group">
<div class="flex items-center gap-md">
<span class="w-10 h-10 rounded-full bg-surface-variant flex items-center justify-center text-on-surface-variant group-hover:bg-primary/10 group-hover:text-primary transition-colors">
<span class="material-symbols-outlined">schedule</span>
</span>
<div>
<p class="font-label-md text-label-md">Schedule</p>
<p class="text-[10px] text-on-surface-variant">Publish at future time</p>
</div>
</div>
<input class="text-primary focus:ring-primary h-5 w-5" name="status" type="radio"/>
</label>
<label class="flex items-center justify-between p-md bg-white border border-outline-variant rounded-xl cursor-pointer hover:border-primary transition-all group">
<div class="flex items-center gap-md">
<span class="w-10 h-10 rounded-full bg-surface-variant flex items-center justify-center text-on-surface-variant group-hover:bg-primary/10 group-hover:text-primary transition-colors">
<span class="material-symbols-outlined">rocket_launch</span>
</span>
<div>
<p class="font-label-md text-label-md">Publish Now</p>
<p class="text-[10px] text-on-surface-variant">Immediate deployment</p>
</div>
</div>
<input class="text-primary focus:ring-primary h-5 w-5" name="status" type="radio"/>
</label>
</div>
</div>
<div class="pt-md border-t border-outline-variant/30">
<label class="block font-label-sm text-label-sm text-on-surface-variant mb-xs">Publication Date &amp; Time</label>
<div class="relative">
<input class="w-full bg-white border border-outline-variant rounded-lg px-md py-md text-body-md focus:ring-2 focus:ring-primary focus:border-primary outline-none" type="datetime-local"/>
</div>
</div>
<div class="flex items-center justify-between pt-md">
<span class="text-body-sm text-on-surface-variant">Notify via Email</span>
<div class="relative inline-block w-12 h-6 transition duration-200 ease-in-out">
<input class="absolute w-6 h-6 rounded-full bg-white border-4 border-outline-variant appearance-none cursor-pointer checked:translate-x-6 checked:bg-primary transition-all duration-200 ease-in-out" id="email-toggle" type="checkbox"/>
<label class="block overflow-hidden h-6 rounded-full bg-outline-variant/30 cursor-pointer" for="email-toggle"></label>
</div>
</div>
</div>
</div>
<!-- Visibility Settings Card -->
<div class="form-card rounded-xl p-lg">
<div class="flex items-center gap-sm mb-lg">
<span class="material-symbols-outlined text-primary">visibility</span>
<h4 class="font-label-md text-label-md text-on-surface uppercase tracking-widest">Visibility Controls</h4>
</div>
<div class="space-y-md">
<div class="flex items-center justify-between p-sm hover:bg-background rounded-lg transition-all cursor-pointer">
<div class="flex items-center gap-md">
<span class="material-symbols-outlined text-on-surface-variant">push_pin</span>
<span class="text-body-md">Pin to top of dashboard</span>
</div>
<input class="rounded border-outline-variant text-primary focus:ring-primary" type="checkbox"/>
</div>
<div class="flex items-center justify-between p-sm hover:bg-background rounded-lg transition-all cursor-pointer">
<div class="flex items-center gap-md">
<span class="material-symbols-outlined text-on-surface-variant">forum</span>
<span class="text-body-md">Enable comments</span>
</div>
<input checked="" class="rounded border-outline-variant text-primary focus:ring-primary" type="checkbox"/>
</div>
<div class="flex items-center justify-between p-sm hover:bg-background rounded-lg transition-all cursor-pointer">
<div class="flex items-center gap-md">
<span class="material-symbols-outlined text-on-surface-variant">timer</span>
<span class="text-body-md">Auto-archive after 30 days</span>
</div>
<input class="rounded border-outline-variant text-primary focus:ring-primary" type="checkbox"/>
</div>
</div>
</div>
</div>
</form>
</section>
<!-- Footer (Shared Component Anchor) -->
<footer class="w-full mt-auto bg-on-surface dark:bg-surface-container-lowest text-on-primary dark:text-on-surface flex flex-col md:flex-row justify-between items-center py-xl px-margin-desktop space-y-md md:space-y-0">
<div class="flex flex-col items-center md:items-start gap-xs">
<h2 class="font-headline-md text-headline-md font-bold text-on-primary dark:text-primary">ClinicalCare</h2>
<p class="font-body-sm text-body-sm opacity-80">© 2024 ClinicalCare Health Systems. All rights reserved.</p>
</div>
<div class="flex flex-wrap justify-center gap-lg">
<a class="font-body-sm text-body-sm opacity-80 hover:opacity-100 hover:text-secondary-fixed transition-opacity cursor-pointer" href="#">Privacy Policy</a>
<a class="font-body-sm text-body-sm opacity-80 hover:opacity-100 hover:text-secondary-fixed transition-opacity cursor-pointer" href="#">Terms of Service</a>
<a class="font-body-sm text-body-sm opacity-80 hover:opacity-100 hover:text-secondary-fixed transition-opacity cursor-pointer" href="#">Accessibility</a>
<a class="font-body-sm text-body-sm opacity-80 hover:opacity-100 hover:text-secondary-fixed transition-opacity cursor-pointer" href="#">Cookie Settings</a>
</div>
</footer>
</main>
<!-- Floating Feedback Notification (Micro-interaction) -->
<div class="fixed bottom-lg right-lg bg-inverse-surface text-inverse-on-surface px-lg py-md rounded-xl shadow-lg flex items-center gap-md transform translate-y-24 opacity-0 transition-all duration-300 z-50" id="toast">
<span class="material-symbols-outlined text-secondary-fixed">check_circle</span>
<p class="font-label-md text-label-md">Draft saved automatically at 14:32</p>
<button class="ml-lg" onclick="hideToast()"><span class="material-symbols-outlined text-[18px]">close</span></button>
</div>
<script>
        // Simple micro-interaction for the auto-save feedback
        function showToast() {
            const toast = document.getElementById('toast');
            toast.classList.remove('translate-y-24', 'opacity-0');
            toast.classList.add('translate-y-0', 'opacity-100');
            setTimeout(hideToast, 5000);
        }

        function hideToast() {
            const toast = document.getElementById('toast');
            toast.classList.add('translate-y-24', 'opacity-0');
            toast.classList.remove('translate-y-0', 'opacity-100');
        }

        // Trigger toast on load as a demo
        setTimeout(showToast, 2000);

        // Sidebar active state logic (from prompt)
        const currentPath = "Content Configuration";
        document.querySelectorAll('aside nav a').forEach(link => {
            if (link.textContent.trim().includes(currentPath)) {
                // Already styled in HTML for this specific landing demo
            }
        });
    </script>
` }} />
    );
};

export default AnnouncementEditorMedicoreAdmin;
