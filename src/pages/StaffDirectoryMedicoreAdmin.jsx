import React from 'react';

const StaffDirectoryMedicoreAdmin = () => {
    return (
        <div dangerouslySetInnerHTML={{ __html: `
<!-- SideNavBar (Shared Component) -->
<aside class="fixed left-0 top-0 h-screen w-[280px] bg-surface-container-low dark:bg-inverse-surface border-r border-outline-variant z-50 flex flex-col py-lg px-md gap-sm">
<div class="px-md mb-xl flex items-center gap-md">
<div class="w-10 h-10 rounded-lg bg-primary-container flex items-center justify-center text-on-primary-container">
<span class="material-symbols-outlined">health_metrics</span>
</div>
<div>
<h1 class="font-headline-md text-headline-md font-bold text-primary">City General</h1>
<p class="text-label-sm font-label-sm text-on-surface-variant">Staff Management</p>
</div>
</div>
<nav class="flex-1 flex flex-col gap-xs">
<a class="flex items-center gap-md px-md py-sm text-on-surface-variant hover:bg-surface-container-high rounded-lg transition-all cursor-pointer" href="#">
<span class="material-symbols-outlined" data-icon="dashboard">dashboard</span>
<span class="font-label-md text-label-md">Dashboard</span>
</a>
<!-- Active State Mapping: Staff Directory -->
<a class="flex items-center gap-md px-md py-sm bg-primary-container text-on-primary-container font-bold rounded-lg transition-all cursor-pointer" href="#">
<span class="material-symbols-outlined" data-icon="groups">groups</span>
<span class="font-label-md text-label-md">Staff Directory</span>
</a>
<a class="flex items-center gap-md px-md py-sm text-on-surface-variant hover:bg-surface-container-high rounded-lg transition-all cursor-pointer" href="#">
<span class="material-symbols-outlined" data-icon="calendar_month">calendar_month</span>
<span class="font-label-md text-label-md">Department Schedules</span>
</a>
<a class="flex items-center gap-md px-md py-sm text-on-surface-variant hover:bg-surface-container-high rounded-lg transition-all cursor-pointer" href="#">
<span class="material-symbols-outlined" data-icon="verified_user">verified_user</span>
<span class="font-label-md text-label-md">Compliance</span>
</a>
<a class="flex items-center gap-md px-md py-sm text-on-surface-variant hover:bg-surface-container-high rounded-lg transition-all cursor-pointer" href="#">
<span class="material-symbols-outlined" data-icon="analytics">analytics</span>
<span class="font-label-md text-label-md">Reporting</span>
</a>
</nav>
<button class="mx-md mb-lg py-sm px-md bg-primary text-on-primary rounded-xl font-label-md text-label-md flex items-center justify-center gap-sm hover:opacity-90 transition-opacity">
<span class="material-symbols-outlined">add</span>
            Add New Staff
        </button>
<div class="mt-auto border-t border-outline-variant pt-lg flex flex-col gap-xs">
<a class="flex items-center gap-md px-md py-sm text-on-surface-variant hover:bg-surface-container-high rounded-lg transition-all cursor-pointer" href="#">
<span class="material-symbols-outlined" data-icon="support_agent">support_agent</span>
<span class="font-label-md text-label-md">Support</span>
</a>
<a class="flex items-center gap-md px-md py-sm text-on-surface-variant hover:bg-surface-container-high rounded-lg transition-all cursor-pointer" href="#">
<span class="material-symbols-outlined" data-icon="logout">logout</span>
<span class="font-label-md text-label-md">Sign Out</span>
</a>
</div>
</aside>
<!-- Main Content Area -->
<main class="flex-1 ml-[280px] min-h-screen flex flex-col">
<!-- TopNavBar (Shared Component) -->
<header class="w-full h-16 sticky top-0 bg-surface-container-lowest border-b border-outline-variant shadow-sm z-40 flex justify-between items-center px-lg">
<div class="flex items-center gap-lg flex-1">
<h2 class="font-headline-md text-headline-md font-bold text-primary">HealthAdmin Console</h2>
<div class="relative w-full max-w-md">
<span class="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-outline">search</span>
<input class="w-full pl-10 pr-4 py-2 bg-surface-container-low rounded-full border-none focus:ring-2 focus:ring-primary text-body-sm font-body-sm" placeholder="Global search..." type="text"/>
</div>
</div>
<div class="flex items-center gap-md">
<button class="p-2 rounded-full hover:bg-surface-container transition-colors text-on-surface-variant relative">
<span class="material-symbols-outlined">notifications</span>
<span class="absolute top-2 right-2 w-2 h-2 bg-error rounded-full"></span>
</button>
<button class="p-2 rounded-full hover:bg-surface-container transition-colors text-on-surface-variant">
<span class="material-symbols-outlined">settings</span>
</button>
<button class="p-2 rounded-full hover:bg-surface-container transition-colors text-on-surface-variant">
<span class="material-symbols-outlined">help</span>
</button>
<div class="h-8 w-[1px] bg-outline-variant mx-sm"></div>
<div class="flex items-center gap-sm cursor-pointer hover:bg-surface-container p-1 pr-3 rounded-full transition-colors">
<img class="w-8 h-8 rounded-full border border-outline-variant object-cover" data-alt="Close-up professional studio portrait of a senior hospital administrator wearing a crisp white medical coat with a stethoscope around their neck, set against a soft blue clinical gradient background. The lighting is bright and professional, conveying authority and calm in a modern healthcare setting." src="https://lh3.googleusercontent.com/aida-public/AB6AXuA45aVrwEfjZv0wRXhIElhAKNVaxORgzBpuawFSx7f9THikwLHaLFIZqh9eDDFJtLRqSxQhLDWMEqm_nx4N09nDFqDcKGFwfEZa6rJyjUP4hkcfjGlsiBdRCkHka5RrsHO0BciZX3W5tGALK7_qCcxzkPu3DmwNT_Fgcdbfw209sJpsEswT4p0eL_4dUdrrFV-5fuwngSFAh0hMxkhIm_OD1wL2i3LE7btaTvqapHiFFrSIWzbOmwBKBg"/>
<span class="font-label-md text-label-md text-on-surface">Admin</span>
</div>
</div>
</header>
<!-- Dashboard Content -->
<section class="p-xl bg-background">
<!-- Header Section -->
<div class="flex flex-col md:flex-row justify-between items-start md:items-end gap-md mb-xl">
<div>
<h3 class="font-headline-lg text-headline-lg text-on-surface">Staff Directory</h3>
<p class="text-body-md font-body-md text-on-surface-variant mt-1">Manage, search, and update credentials for all healthcare providers at City General.</p>
</div>
<div class="flex gap-sm">
<button class="px-md py-sm bg-surface-container-high text-primary rounded-xl font-label-md text-label-md border border-outline-variant flex items-center gap-sm hover:bg-surface-container-highest transition-colors">
<span class="material-symbols-outlined text-[20px]">file_download</span>
                        Export List
                    </button>
<button class="px-lg py-sm bg-primary text-on-primary rounded-xl font-label-md text-label-md flex items-center gap-sm shadow-sm hover:bg-primary-container transition-colors">
<span class="material-symbols-outlined">add</span>
                        Add New Staff
                    </button>
</div>
</div>
<!-- Filters & Stats Grid -->
<div class="grid grid-cols-1 md:grid-cols-4 gap-lg mb-lg">
<div class="bg-surface-container-lowest p-lg rounded-xl border border-outline-variant shadow-sm">
<p class="text-label-sm font-label-sm text-on-surface-variant mb-2">Total Staff</p>
<div class="flex items-center justify-between">
<span class="font-headline-md text-headline-md text-on-surface">1,248</span>
<span class="text-secondary text-label-sm font-label-sm flex items-center gap-1">+12 this month</span>
</div>
</div>
<div class="bg-surface-container-lowest p-lg rounded-xl border border-outline-variant shadow-sm">
<p class="text-label-sm font-label-sm text-on-surface-variant mb-2">On Shift Now</p>
<div class="flex items-center justify-between">
<span class="font-headline-md text-headline-md text-on-surface">432</span>
<span class="bg-secondary-container text-on-secondary-container px-2 py-0.5 rounded-full text-[10px] font-bold">ACTIVE</span>
</div>
</div>
<div class="bg-surface-container-lowest p-lg rounded-xl border border-outline-variant shadow-sm">
<p class="text-label-sm font-label-sm text-on-surface-variant mb-2">On Call</p>
<div class="flex items-center justify-between">
<span class="font-headline-md text-headline-md text-on-surface">86</span>
<span class="text-on-surface-variant text-label-sm font-label-sm">System Ready</span>
</div>
</div>
<div class="bg-surface-container-lowest p-lg rounded-xl border border-outline-variant shadow-sm">
<p class="text-label-sm font-label-sm text-on-surface-variant mb-2">Credential Alerts</p>
<div class="flex items-center justify-between">
<span class="font-headline-md text-headline-md text-error">9</span>
<span class="text-error text-label-sm font-label-sm underline cursor-pointer">Review Now</span>
</div>
</div>
</div>
<!-- Table Controls -->
<div class="bg-surface-container-lowest border border-outline-variant rounded-t-xl p-md flex flex-wrap gap-md items-center justify-between">
<div class="flex items-center gap-md flex-1">
<div class="relative w-full max-w-sm">
<span class="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-outline text-[20px]">search</span>
<input class="w-full pl-10 pr-4 py-2 border border-outline rounded-lg text-body-sm font-body-sm focus:ring-1 focus:ring-primary focus:border-primary" placeholder="Search by name, ID, or department..." type="text"/>
</div>
<div class="flex items-center gap-sm">
<select class="bg-surface-container-low border-none rounded-lg text-label-md font-label-md text-on-surface-variant py-2 pl-3 pr-8 focus:ring-1 focus:ring-primary">
<option>All Departments</option>
<option>Cardiology</option>
<option>Pediatrics</option>
<option>Neurology</option>
<option>Surgery</option>
</select>
<select class="bg-surface-container-low border-none rounded-lg text-label-md font-label-md text-on-surface-variant py-2 pl-3 pr-8 focus:ring-1 focus:ring-primary">
<option>All Statuses</option>
<option>On Shift</option>
<option>Off Duty</option>
<option>On Call</option>
</select>
</div>
</div>
<div class="flex items-center gap-md">
<span class="text-label-sm font-label-sm text-on-surface-variant">Showing 1-10 of 1,248</span>
<div class="flex border border-outline-variant rounded-lg overflow-hidden">
<button class="p-2 bg-surface-container-low hover:bg-surface-container text-on-surface-variant border-r border-outline-variant"><span class="material-symbols-outlined text-[18px]">chevron_left</span></button>
<button class="p-2 bg-surface-container-lowest hover:bg-surface-container text-on-surface-variant"><span class="material-symbols-outlined text-[18px]">chevron_right</span></button>
</div>
</div>
</div>
<!-- Table Container -->
<div class="bg-surface-container-lowest border border-t-0 border-outline-variant rounded-b-xl overflow-hidden shadow-sm">
<table class="w-full text-left border-collapse">
<thead class="bg-surface-container-low border-b border-outline-variant">
<tr>
<th class="px-lg py-md text-label-sm font-label-sm text-on-surface-variant uppercase tracking-wider">Provider Name</th>
<th class="px-lg py-md text-label-sm font-label-sm text-on-surface-variant uppercase tracking-wider">Department</th>
<th class="px-lg py-md text-label-sm font-label-sm text-on-surface-variant uppercase tracking-wider">Shift Status</th>
<th class="px-lg py-md text-label-sm font-label-sm text-on-surface-variant uppercase tracking-wider">Contact</th>
<th class="px-lg py-md text-label-sm font-label-sm text-on-surface-variant uppercase tracking-wider text-right">Actions</th>
</tr>
</thead>
<tbody class="divide-y divide-outline-variant">
<!-- Row 1 -->
<tr class="hover:bg-surface-container-low transition-colors group">
<td class="px-lg py-md">
<div class="flex items-center gap-md">
<img class="w-10 h-10 rounded-full object-cover" data-alt="A professional headshot of a female cardiologist in her 40s with a warm, approachable smile. She has dark hair tied back and is wearing a sleek, modern medical navy scrub top. The background is a blurred high-tech hospital corridor with soft blue and white lighting, emphasizing a clean and clinical professional environment." src="https://lh3.googleusercontent.com/aida-public/AB6AXuCgbMnirhKxAd258xoHJf9Ydv3ARFCvj8F3MUgYOfjdjqvq48nuFFspqOkMDg8CdL5XfK_Qaye4a3CvNJBoKjKnC0-Xk9zZ5E3lZcpJKRFmnMs8ErcHYQ4DDDs0QkHy00bt6s8CUq3Ib5ETJSaFg0SKU19pIi8K8Mj1jgm2VvYjosq1PSPcWD-jOxlpFB_hDTCMrt3aK53yqJaMegrSB-NpYB2OIQctbtA0Pd1PR-_JgHPQFefWyiyCow"/>
<div>
<p class="font-label-md text-label-md text-on-surface">Dr. Sarah Jenkins</p>
<p class="text-body-sm font-body-sm text-on-surface-variant">ID: 8849221</p>
</div>
</div>
</td>
<td class="px-lg py-md">
<span class="font-body-sm font-body-sm text-on-surface">Cardiology</span>
</td>
<td class="px-lg py-md">
<div class="flex items-center gap-2 px-3 py-1 bg-secondary-container text-on-secondary-container rounded-full w-fit">
<span class="w-2 h-2 rounded-full bg-secondary"></span>
<span class="text-label-sm font-label-sm">On Shift</span>
</div>
</td>
<td class="px-lg py-md">
<p class="text-body-sm font-body-sm text-on-surface">s.jenkins@citygen.org</p>
<p class="text-label-sm font-label-sm text-on-surface-variant">+1 (555) 012-3456</p>
</td>
<td class="px-lg py-md text-right">
<div class="flex items-center justify-end gap-sm opacity-0 group-hover:opacity-100 transition-opacity">
<button class="text-primary hover:underline font-label-md text-label-md">Edit Credentials</button>
<button class="p-2 rounded-full hover:bg-surface-container text-on-surface-variant">
<span class="material-symbols-outlined">more_vert</span>
</button>
</div>
</td>
</tr>
<!-- Row 2 -->
<tr class="hover:bg-surface-container-low transition-colors group">
<td class="px-lg py-md">
<div class="flex items-center gap-md">
<img class="w-10 h-10 rounded-full object-cover" data-alt="A focused headshot of a male pediatric surgeon in his 30s. He is wearing light green surgical scrubs and has a calm, confident expression. The lighting is soft and natural, coming from a large window in a modern pediatric ward filled with gentle pastel colors in the background, creating a comforting and professional clinical atmosphere." src="https://lh3.googleusercontent.com/aida-public/AB6AXuBhDX32rJHeLg6cdDV-hQbWz4WC63KaRptU1rQuDG6Cauu5Fam914x3-4kaSZsxJnemzqkAcHEVtnU0FyJN9za2yDRgMOOoNTZOI4RdLzv4JF1pcm68rNlrhArMow69YBO3qjxrXqaIKjJoQci-JOy17XRazsO0toskzM790hmWBLKLSCkiW4tlZ62HZDZ4QameoQT3sLRWw6MSLIiFdI3_-jKSpuaD8iA37a3Ebalz-WCQQioccjQQNg"/>
<div>
<p class="font-label-md text-label-md text-on-surface">Dr. Michael Chen</p>
<p class="text-body-sm font-body-sm text-on-surface-variant">ID: 8849305</p>
</div>
</div>
</td>
<td class="px-lg py-md">
<span class="font-body-sm font-body-sm text-on-surface">Pediatrics</span>
</td>
<td class="px-lg py-md">
<div class="flex items-center gap-2 px-3 py-1 bg-surface-container-high text-on-surface-variant rounded-full w-fit">
<span class="w-2 h-2 rounded-full bg-outline"></span>
<span class="text-label-sm font-label-sm">Off Duty</span>
</div>
</td>
<td class="px-lg py-md">
<p class="text-body-sm font-body-sm text-on-surface">m.chen@citygen.org</p>
<p class="text-label-sm font-label-sm text-on-surface-variant">+1 (555) 012-7890</p>
</td>
<td class="px-lg py-md text-right">
<div class="flex items-center justify-end gap-sm opacity-0 group-hover:opacity-100 transition-opacity">
<button class="text-primary hover:underline font-label-md text-label-md">Edit Credentials</button>
<button class="p-2 rounded-full hover:bg-surface-container text-on-surface-variant">
<span class="material-symbols-outlined">more_vert</span>
</button>
</div>
</td>
</tr>
<!-- Row 3 -->
<tr class="hover:bg-surface-container-low transition-colors group">
<td class="px-lg py-md">
<div class="flex items-center gap-md">
<img class="w-10 h-10 rounded-full object-cover" data-alt="Close-up portrait of a female neurologist in her 50s with silver-streaked hair and a thoughtful, expert expression. She is wearing a dark grey blazer over clinical attire. The background features a blurred, sterile laboratory environment with subtle blue glowing monitors, emphasizing advanced medical technology and precision expertise in a corporate modern hospital setting." src="https://lh3.googleusercontent.com/aida-public/AB6AXuCLLg2i8WDzv6Fc5VLA6o5JS1FDJeSltWnU5kG0W3MbNwQ0Hlx5vfTMISV_GudwnSR0H6HIrGXTHNp6qcFdiq4ppgRm8fp6kNGlB71PVmyx6imPSpzzK6iMVzYtl57wIVrBL14L1azzhAHKxdTFoXKhEdWPkmjnDefguBxl5yPOjAUCq_0MnKNF1LYszpPcCLXsxLhs4LwZDnbdGJfP6QaV4XNSsrte_3T4QYp_d8JROq9F1qOCOI9mUg"/>
<div>
<p class="font-label-md text-label-md text-on-surface">Dr. Elena Rodriguez</p>
<p class="text-body-sm font-body-sm text-on-surface-variant">ID: 8849118</p>
</div>
</div>
</td>
<td class="px-lg py-md">
<span class="font-body-sm font-body-sm text-on-surface">Neurology</span>
</td>
<td class="px-lg py-md">
<div class="flex items-center gap-2 px-3 py-1 bg-primary-fixed text-on-primary-fixed-variant rounded-full w-fit">
<span class="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
<span class="text-label-sm font-label-sm font-bold">On Call</span>
</div>
</td>
<td class="px-lg py-md">
<p class="text-body-sm font-body-sm text-on-surface">e.rodriguez@citygen.org</p>
<p class="text-label-sm font-label-sm text-on-surface-variant">+1 (555) 012-1122</p>
</td>
<td class="px-lg py-md text-right">
<div class="flex items-center justify-end gap-sm opacity-0 group-hover:opacity-100 transition-opacity">
<button class="text-primary hover:underline font-label-md text-label-md">Edit Credentials</button>
<button class="p-2 rounded-full hover:bg-surface-container text-on-surface-variant">
<span class="material-symbols-outlined">more_vert</span>
</button>
</div>
</td>
</tr>
<!-- Row 4 -->
<tr class="hover:bg-surface-container-low transition-colors group">
<td class="px-lg py-md">
<div class="flex items-center gap-md">
<img class="w-10 h-10 rounded-full object-cover" data-alt="A portrait of a male nurse practitioner in his early 30s with a friendly and reliable demeanor. He wears blue medical scrubs and has a digital tablet in his hand. The background is a bright, modern patient consultation room with clean white surfaces and soft natural lighting, reflecting a warm yet professional and efficient healthcare environment." src="https://lh3.googleusercontent.com/aida-public/AB6AXuAaFW_BXTbK5vd5tIoXXt0oiDurX8ZaIcws1fzVKBr-JSAvxc0fDGUQX58G-QAEUeHmsiaVioEHOMn9JFw0mKuFg24CBY2fIywbF3RO40NYeO6xQsd8FcQz3U6izafKDb_WfEgFcO8L4-Y9tEgOAJbB-KNAgjpmM0OjfCTzbvdvBrZku7_G7xDApPqiPmd80yVUAAlkN3Mr2LVwfPwIzipywORequtVl9-M54glp51oJKIc37a1euyjDw"/>
<div>
<p class="font-label-md text-label-md text-on-surface">NP James Wilson</p>
<p class="text-body-sm font-body-sm text-on-surface-variant">ID: 8849550</p>
</div>
</div>
</td>
<td class="px-lg py-md">
<span class="font-body-sm font-body-sm text-on-surface">General Medicine</span>
</td>
<td class="px-lg py-md">
<div class="flex items-center gap-2 px-3 py-1 bg-secondary-container text-on-secondary-container rounded-full w-fit">
<span class="w-2 h-2 rounded-full bg-secondary"></span>
<span class="text-label-sm font-label-sm">On Shift</span>
</div>
</td>
<td class="px-lg py-md">
<p class="text-body-sm font-body-sm text-on-surface">j.wilson@citygen.org</p>
<p class="text-label-sm font-label-sm text-on-surface-variant">+1 (555) 012-9988</p>
</td>
<td class="px-lg py-md text-right">
<div class="flex items-center justify-end gap-sm opacity-0 group-hover:opacity-100 transition-opacity">
<button class="text-primary hover:underline font-label-md text-label-md">Edit Credentials</button>
<button class="p-2 rounded-full hover:bg-surface-container text-on-surface-variant">
<span class="material-symbols-outlined">more_vert</span>
</button>
</div>
</td>
</tr>
<!-- Row 5 (Warning State) -->
<tr class="hover:bg-surface-container-low transition-colors group">
<td class="px-lg py-md">
<div class="flex items-center gap-md">
<img class="w-10 h-10 rounded-full object-cover" data-alt="A professional portrait of a female surgical resident in her late 20s. She has a determined, professional expression and is wearing hospital scrubs. The background is a clean, minimalist hospital setting with cool-toned white and blue lighting. The style is crisp and corporate, portraying a dedicated medical professional in a modern healthcare infrastructure." src="https://lh3.googleusercontent.com/aida-public/AB6AXuC8gfJppl2ZHud-q54JbJ20hIaxrrwIkzVjGtGq6wklx74Y6_zSwzFz787KWcql4RLM6NAe92TA3x1fYHq6lDzuGxByiQMJtJ9HzP25NznMjTAWe2ySnzODRz4ppy_HClmw4-ZIQ7ZKyvryobUNCrY6YC9BA4HcymoaCgcpucx1cIqJN9W_OM-CR4SE94R3_bzXXZvLxU9KMwx0sFwAJhxK739snAF1c1N3tMjX-V7wqJB9-lR_TXpHHw"/>
<div>
<div class="flex items-center gap-sm">
<p class="font-label-md text-label-md text-on-surface">Dr. Lisa Markson</p>
<span class="material-symbols-outlined text-error text-[16px]" title="Credentials Expiring">warning</span>
</div>
<p class="text-body-sm font-body-sm text-on-surface-variant">ID: 8849401</p>
</div>
</div>
</td>
<td class="px-lg py-md">
<span class="font-body-sm font-body-sm text-on-surface">Surgery</span>
</td>
<td class="px-lg py-md">
<div class="flex items-center gap-2 px-3 py-1 bg-surface-container-high text-on-surface-variant rounded-full w-fit">
<span class="w-2 h-2 rounded-full bg-outline"></span>
<span class="text-label-sm font-label-sm">Off Duty</span>
</div>
</td>
<td class="px-lg py-md">
<p class="text-body-sm font-body-sm text-on-surface">l.markson@citygen.org</p>
<p class="text-label-sm font-label-sm text-on-surface-variant">+1 (555) 012-4433</p>
</td>
<td class="px-lg py-md text-right">
<div class="flex items-center justify-end gap-sm opacity-0 group-hover:opacity-100 transition-opacity">
<button class="text-error font-bold hover:underline font-label-md text-label-md">Renew Credentials</button>
<button class="p-2 rounded-full hover:bg-surface-container text-on-surface-variant">
<span class="material-symbols-outlined">more_vert</span>
</button>
</div>
</td>
</tr>
</tbody>
</table>
<!-- Bottom Pagination -->
<div class="px-lg py-md bg-surface-container-low flex items-center justify-between">
<div class="flex items-center gap-sm">
<span class="text-label-sm font-label-sm text-on-surface-variant">Rows per page:</span>
<select class="bg-transparent border-none text-label-sm font-label-sm text-on-surface cursor-pointer focus:ring-0">
<option>10</option>
<option>25</option>
<option>50</option>
</select>
</div>
<div class="flex items-center gap-xl">
<span class="text-label-sm font-label-sm text-on-surface-variant">1-10 of 1,248</span>
<div class="flex items-center gap-md">
<button class="text-on-surface-variant hover:text-primary transition-colors cursor-not-allowed opacity-50">
<span class="material-symbols-outlined">first_page</span>
</button>
<button class="text-on-surface-variant hover:text-primary transition-colors cursor-not-allowed opacity-50">
<span class="material-symbols-outlined">chevron_left</span>
</button>
<button class="text-on-surface-variant hover:text-primary transition-colors">
<span class="material-symbols-outlined">chevron_right</span>
</button>
<button class="text-on-surface-variant hover:text-primary transition-colors">
<span class="material-symbols-outlined">last_page</span>
</button>
</div>
</div>
</div>
</div>
</section>
<!-- Footer Footer (Optional, subtle branding) -->
<footer class="mt-auto px-xl py-lg flex justify-between items-center text-label-sm font-label-sm text-outline border-t border-outline-variant/30">
<p>© 2024 MediCore Admin Systems. Confidential Clinical Data.</p>
<div class="flex gap-lg">
<a class="hover:text-primary transition-colors" href="#">Privacy Policy</a>
<a class="hover:text-primary transition-colors" href="#">System Status</a>
</div>
</footer>
</main>
<script>
        // Micro-interactions for table rows and buttons
        document.querySelectorAll('tr').forEach(row => {
            row.addEventListener('mouseenter', () => {
                row.classList.add('shadow-inner');
            });
            row.addEventListener('mouseleave', () => {
                row.classList.remove('shadow-inner');
            });
        });

        // Search highlight logic placeholder
        const searchInput = document.querySelector('input[type="text"]');
        searchInput.addEventListener('input', (e) => {
            // Future logic for filtering table rows based on input
            console.log('Searching for:', e.target.value);
        });
    </script>
` }} />
    );
};

export default StaffDirectoryMedicoreAdmin;
