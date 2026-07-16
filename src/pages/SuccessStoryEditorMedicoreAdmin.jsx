import React from 'react';

const SuccessStoryEditorMedicoreAdmin = () => {
    return (
        <div dangerouslySetInnerHTML={{ __html: `
<!-- Left Side Navigation (SideNavBar) -->
<aside class="h-screen w-[280px] fixed left-0 top-0 bg-surface-container border-r border-outline-variant flex flex-col p-md space-y-2 z-50">
<div class="px-md py-lg mb-xl">
<h1 class="font-headline-md text-headline-md font-bold text-primary">ClinicalCare</h1>
<p class="text-body-sm text-on-surface-variant opacity-70">Admin Panel</p>
</div>
<nav class="flex-1 space-y-1">
<a class="flex items-center space-x-3 px-md py-3 text-on-surface-variant hover:bg-surface-variant/50 transition-all rounded-lg" href="#">
<span class="material-symbols-outlined">dashboard</span>
<span class="font-label-md text-label-md">Dashboard</span>
</a>
<a class="flex items-center space-x-3 px-md py-3 text-on-surface-variant hover:bg-surface-variant/50 transition-all rounded-lg" href="#">
<span class="material-symbols-outlined">group</span>
<span class="font-label-md text-label-md">Staff Management</span>
</a>
<a class="flex items-center space-x-3 px-md py-3 bg-primary-container text-on-primary-container font-bold rounded-lg transition-all scale-98" href="#">
<span class="material-symbols-outlined">settings_applications</span>
<span class="font-label-md text-label-md">Content Configuration</span>
</a>
<a class="flex items-center space-x-3 px-md py-3 text-on-surface-variant hover:bg-surface-variant/50 transition-all rounded-lg" href="#">
<span class="material-symbols-outlined">personal_injury</span>
<span class="font-label-md text-label-md">Patient Records</span>
</a>
<a class="flex items-center space-x-3 px-md py-3 text-on-surface-variant hover:bg-surface-variant/50 transition-all rounded-lg" href="#">
<span class="material-symbols-outlined">settings</span>
<span class="font-label-md text-label-md">Settings</span>
</a>
</nav>
<div class="pt-md border-t border-outline-variant mt-auto">
<a class="flex items-center space-x-3 px-md py-3 text-on-surface-variant hover:bg-surface-variant/50 transition-all rounded-lg" href="#">
<span class="material-symbols-outlined">help</span>
<span class="font-label-md text-label-md">Support</span>
</a>
<a class="flex items-center space-x-3 px-md py-3 text-on-surface-variant hover:bg-surface-variant/50 transition-all rounded-lg" href="#">
<span class="material-symbols-outlined">logout</span>
<span class="font-label-md text-label-md">Logout</span>
</a>
</div>
</aside>
<!-- Main Content Area -->
<main class="ml-[280px] min-h-screen flex flex-col">
<!-- Top App Bar -->
<header class="flex justify-between items-center h-16 px-lg sticky top-0 z-40 bg-surface/80 backdrop-blur-md border-b border-outline-variant shadow-sm">
<div class="flex items-center space-x-4">
<button class="material-symbols-outlined text-primary p-2 hover:bg-surface-variant rounded-full transition-all">menu</button>
<h2 class="font-headline-md text-headline-md text-primary">System Overview</h2>
</div>
<div class="flex items-center space-x-4">
<div class="flex items-center space-x-1">
<button class="material-symbols-outlined text-on-surface-variant hover:bg-surface-variant p-2 rounded-full transition-all">notifications</button>
<button class="material-symbols-outlined text-on-surface-variant hover:bg-surface-variant p-2 rounded-full transition-all">settings</button>
</div>
<div class="h-8 w-8 rounded-full bg-primary-fixed flex items-center justify-center border border-outline-variant overflow-hidden">
<img class="w-full h-full object-cover" data-alt="A professional headshot of a female hospital administrator in a brightly lit modern office setting. She has a warm, confident expression and is wearing a sleek navy blue blazer. The background is softly blurred with a hint of Clinical Precision branding on a glass partition, emphasizing the clean corporate modernism aesthetic of the health system." src="https://lh3.googleusercontent.com/aida-public/AB6AXuBb7azh8ad1cegoOpdi4GXdDQQl_aucFOQCWNXX1WsSp311kJmFmOM3UHadP6wYPuHQ8M3fCx3Rghki-8RuS6f6a0PS0ni5kU85sH4ITRsosoo9crZADSYopFDVxCyjPlgWvGKCEmgOGpM0tfJJ060oVzGhlb5FhPdiPhmpa24HT1jV-CnEE3mviQGH137Tw0v61adX7mnc9ev465rO55JMyVH5UHSc09oJp1ErUJBbqqYhWcdL8QcRrg"/>
</div>
</div>
</header>
<!-- Page Content -->
<div class="p-xl max-w-7xl w-full mx-auto">
<div class="flex justify-between items-end mb-xl">
<div>
<nav class="flex text-body-sm text-on-surface-variant mb-2 space-x-2">
<span>Content Configuration</span>
<span>/</span>
<span class="text-primary font-medium">Patient Success Stories</span>
</nav>
<h3 class="font-headline-lg text-headline-lg text-on-surface">Manage Recovery Narrative</h3>
</div>
<div class="flex space-x-sm">
<button class="px-lg py-sm border-2 border-secondary text-secondary font-label-md text-label-md rounded-lg hover:bg-secondary-container transition-all flex items-center space-x-2" id="togglePreview">
<span class="material-symbols-outlined">visibility</span>
<span>Toggle Preview Mode</span>
</button>
<button class="px-lg py-sm bg-primary text-on-primary font-label-md text-label-md rounded-lg hover:opacity-90 transition-all flex items-center space-x-2 shadow-sm">
<span class="material-symbols-outlined">publish</span>
<span>Publish Story</span>
</button>
</div>
</div>
<div class="bento-grid">
<!-- Form Section -->
<section class="col-span-12 lg:col-span-7 space-y-lg transition-all duration-500" id="formContainer">
<!-- Narrative Details Card -->
<div class="bg-surface-container-lowest border border-outline-variant rounded-xl p-lg shadow-sm">
<h4 class="font-label-md text-label-md text-primary uppercase tracking-wider mb-lg">Story Details</h4>
<div class="space-y-md">
<div>
<label class="block font-label-sm text-label-sm text-on-surface-variant mb-xs">Patient Full Name (Display Only)</label>
<input class="w-full border border-outline-variant rounded-lg p-md text-body-md form-input-focus bg-surface" id="patientName" placeholder="e.g., Jonathan Miller" type="text"/>
</div>
<div class="grid grid-cols-2 gap-md">
<div>
<label class="block font-label-sm text-label-sm text-on-surface-variant mb-xs">Medical Department</label>
<select class="w-full border border-outline-variant rounded-lg p-md text-body-md form-input-focus bg-surface">
<option>Cardiology</option>
<option>Orthopedics</option>
<option>Neurology</option>
<option>Pediatrics</option>
<option>Emergency Medicine</option>
</select>
</div>
<div>
<label class="block font-label-sm text-label-sm text-on-surface-variant mb-xs">Recovery Duration</label>
<input class="w-full border border-outline-variant rounded-lg p-md text-body-md form-input-focus bg-surface" placeholder="e.g., 6 Months" type="text"/>
</div>
</div>
<div>
<label class="block font-label-sm text-label-sm text-on-surface-variant mb-xs">Narrative Title</label>
<input class="w-full border border-outline-variant rounded-lg p-md text-body-md font-bold form-input-focus bg-surface" id="storyTitle" placeholder="Enter a compelling headline..." type="text"/>
</div>
<div>
<label class="block font-label-sm text-label-sm text-on-surface-variant mb-xs">Success Narrative</label>
<textarea class="w-full border border-outline-variant rounded-lg p-md text-body-md form-input-focus bg-surface leading-relaxed" id="storyContent" placeholder="Write the patient's recovery journey here..." rows="6"></textarea>
</div>
</div>
</div>
<!-- Media Upload Card -->
<div class="bg-surface-container-lowest border border-outline-variant rounded-xl p-lg shadow-sm">
<h4 class="font-label-md text-label-md text-primary uppercase tracking-wider mb-lg">Hero Media</h4>
<div class="border-2 border-dashed border-outline-variant rounded-xl p-xl flex flex-col items-center justify-center bg-surface-container-low hover:bg-surface-variant/30 transition-all cursor-pointer group">
<span class="material-symbols-outlined text-outline text-5xl mb-md group-hover:text-primary transition-colors">cloud_upload</span>
<p class="font-label-md text-label-md text-on-surface">Click to upload story banner</p>
<p class="text-body-sm text-on-surface-variant mt-1">Recommended size: 1920x1080px (PNG, JPG)</p>
</div>
<div class="mt-md flex items-center space-x-md p-sm bg-surface-container rounded-lg">
<div class="w-16 h-16 rounded bg-outline-variant overflow-hidden">
<img class="w-full h-full object-cover" data-alt="A placeholder medical recovery image showing a blurred bright hospital corridor with a soft, peaceful morning sunlight filtering through large windows. The overall feel is sterile, professional, and optimistic, aligning with the Clinical Precision design system's focus on reliability and emotional calm." src="https://lh3.googleusercontent.com/aida-public/AB6AXuCoFDCPWAeNdq2Ejhn759y9hPx7ORjzpbcOcHlaKqMFWC7pLwI_vKdshNX38eYEcY5QPCRuBck2zc7C8o5vmIpCYsbtb_MEDRuyirXJDX9wB20q-XG9Dp2y8o8BIbFsk1l1Z2_CGVviONF1mQOr_DMK1p1bHwz_29cekWkkvUcGEj5BiJveHzKiCIg9pomv8Ujq9K1jLFpuPwcKTaXabW1CXiMFwtULErUt-cJEwkW7MYkXv1Fbkb8_6Q"/>
</div>
<div class="flex-1">
<p class="text-body-sm font-medium">banner_patient_v1.jpg</p>
<p class="text-label-sm text-on-surface-variant">2.4 MB • Uploaded 2m ago</p>
</div>
<button class="material-symbols-outlined text-error hover:bg-error-container p-2 rounded-full transition-all">delete</button>
</div>
</div>
<!-- Tags & Classification -->
<div class="bg-surface-container-lowest border border-outline-variant rounded-xl p-lg shadow-sm">
<h4 class="font-label-md text-label-md text-primary uppercase tracking-wider mb-lg">Metadata &amp; Tags</h4>
<div class="flex flex-wrap gap-sm">
<span class="inline-flex items-center px-md py-1 bg-secondary-container text-on-secondary-container rounded-full text-label-sm font-bold">
                                #RecoverySuccess <button class="ml-2 material-symbols-outlined text-sm">close</button>
</span>
<span class="inline-flex items-center px-md py-1 bg-secondary-container text-on-secondary-container rounded-full text-label-sm font-bold">
                                #Orthopedics <button class="ml-2 material-symbols-outlined text-sm">close</button>
</span>
<span class="inline-flex items-center px-md py-1 bg-secondary-container text-on-secondary-container rounded-full text-label-sm font-bold">
                                #CareTeam <button class="ml-2 material-symbols-outlined text-sm">close</button>
</span>
<button class="inline-flex items-center px-md py-1 border border-outline border-dashed rounded-full text-label-sm text-outline hover:border-primary hover:text-primary transition-all">
<span class="material-symbols-outlined text-sm mr-1">add</span> Add Tag
                            </button>
</div>
</div>
</section>
<!-- Preview Section -->
<aside class="col-span-12 lg:col-span-5 h-fit sticky top-24 transition-all duration-500" id="previewContainer">
<div class="bg-surface-container-highest border border-outline-variant rounded-xl overflow-hidden shadow-lg preview-pane">
<div class="h-12 bg-on-surface flex items-center px-md justify-between">
<div class="flex space-x-1.5">
<div class="w-3 h-3 rounded-full bg-error"></div>
<div class="w-3 h-3 rounded-full bg-secondary"></div>
<div class="w-3 h-3 rounded-full bg-outline"></div>
</div>
<span class="text-on-primary opacity-60 text-[10px] font-bold tracking-widest uppercase">Public Site Preview</span>
<div class="w-12"></div>
</div>
<!-- Preview Content Canvas -->
<div class="bg-white min-h-[600px] overflow-y-auto">
<!-- Public Site Header Mockup -->
<div class="p-md border-b border-surface-variant flex justify-between items-center">
<div class="font-bold text-primary text-sm">ClinicalCare</div>
<div class="material-symbols-outlined text-on-surface-variant text-sm">menu</div>
</div>
<!-- Dynamic Banner Preview -->
<div class="relative h-48 w-full bg-surface-dim overflow-hidden">
<img class="w-full h-full object-cover" data-alt="A high-quality clinical landscape photo depicting a modern patient rehabilitation room. The room is spacious, with high-tech equipment visible but not overwhelming. Warm natural sunlight pours through large glass windows overlooking a serene garden. The tone is clean, sterile, and deeply peaceful, embodying medical efficiency and patient comfort." id="previewBanner" src="https://lh3.googleusercontent.com/aida-public/AB6AXuB1DhPTsMORgGbLupgHlcGifRqMeVIcWN792xFso5jii25cJ1QIMiEvtUElLw86G2zQdNpfnAp8nVzLzGRJgXgJIo5bW_GHb3_QfsScx16K_l8Gui4JTftLCoCFtRWfTS0BiQakDhF76CCqfHid2qTvQOIxRxLAr9cyiApJAMbUcCZZr99MZS3QHFOxYLtDYRo2KJKOPHjygdlOncdTnBYmwevAbtQGYt6iyRnhZDtXA0QuYH9JFWAl6g"/>
<div class="absolute inset-0 bg-gradient-to-t from-on-surface/60 to-transparent"></div>
<div class="absolute bottom-4 left-4">
<span class="px-2 py-0.5 bg-secondary text-white text-[10px] font-bold rounded uppercase">Cardiology</span>
</div>
</div>
<!-- Dynamic Content Preview -->
<div class="p-lg">
<h2 class="font-headline-md text-headline-md text-on-surface mb-md" id="previewTitle">Title of the Success Narrative</h2>
<div class="flex items-center space-x-md mb-lg">
<div class="w-10 h-10 rounded-full bg-primary-fixed border border-outline-variant overflow-hidden">
<img class="w-full h-full object-cover" data-alt="A portrait photo of a smiling middle-aged male patient, looking healthy and vibrant. He is dressed in casual, comfortable clothing and stands in a sunlit clinical garden. The lighting is soft and golden, suggesting a positive recovery outcome. The style is professional and reassuring, aligning with healthcare success stories." src="https://lh3.googleusercontent.com/aida-public/AB6AXuBklnhT8HkvEqNyEAhUXkCNYSdjvOai5lhVEKb3Nxm5CB-oKH2sJ0cRErkWp8PUZyCs_12YFr4qUxLqkaHrqn38_yGDtBYhBs5WEXNJBiBWvSKSJJJoEHJKxP-_I0oNMqE08-GvODX_tQ2iZgTB6HfQjtDq3kkjqVlFG17Q_f3LTZfduhsZlm4HmOX8JcQMow0ZJ0UU7zL29BpR525QJ1lgL_k04P1xoHCwz326JZQchtNH_KeLpLfVfg"/>
</div>
<div>
<p class="text-body-sm font-bold text-on-surface" id="previewName">Patient Name</p>
<p class="text-[12px] text-on-surface-variant">ClinicalCare Success Story</p>
</div>
</div>
<div class="text-body-md text-on-surface-variant leading-relaxed space-y-md" id="previewText">
<p>The patient's journey will be displayed here as you type. Our layout ensures high readability and focuses on the emotional impact of the recovery process.</p>
</div>
<div class="mt-xl pt-lg border-t border-surface-variant">
<p class="text-label-sm font-bold text-primary uppercase mb-md">Care Team Involved</p>
<div class="flex -space-x-2">
<div class="w-8 h-8 rounded-full border-2 border-white bg-tertiary-fixed"></div>
<div class="w-8 h-8 rounded-full border-2 border-white bg-secondary-fixed"></div>
<div class="w-8 h-8 rounded-full border-2 border-white bg-primary-fixed"></div>
<div class="w-8 h-8 rounded-full border-2 border-white bg-surface-variant flex items-center justify-center text-[10px] font-bold text-on-surface-variant">+4</div>
</div>
</div>
</div>
</div>
</div>
<p class="mt-md text-center text-body-sm text-on-surface-variant italic">The preview updates in real-time as you edit the narrative.</p>
</aside>
</div>
</div>
<!-- Footer -->
<footer class="mt-auto bg-on-surface text-on-primary py-xl px-margin-desktop flex flex-col md:flex-row justify-between items-center">
<div>
<h2 class="font-headline-md text-headline-md font-bold text-primary mb-2">ClinicalCare</h2>
<p class="font-body-sm text-body-sm opacity-80">© 2024 ClinicalCare Health Systems. All rights reserved.</p>
</div>
<div class="flex flex-wrap justify-center gap-xl mt-md md:mt-0">
<a class="font-body-sm text-body-sm opacity-80 hover:opacity-100 hover:text-secondary-fixed transition-opacity" href="#">Privacy Policy</a>
<a class="font-body-sm text-body-sm opacity-80 hover:opacity-100 hover:text-secondary-fixed transition-opacity" href="#">Terms of Service</a>
<a class="font-body-sm text-body-sm opacity-80 hover:opacity-100 hover:text-secondary-fixed transition-opacity" href="#">Accessibility</a>
<a class="font-body-sm text-body-sm opacity-80 hover:opacity-100 hover:text-secondary-fixed transition-opacity" href="#">Cookie Settings</a>
</div>
</footer>
</main>
<script>
        // Real-time preview logic
        const patientInput = document.getElementById('patientName');
        const titleInput = document.getElementById('storyTitle');
        const contentInput = document.getElementById('storyContent');

        const previewName = document.getElementById('previewName');
        const previewTitle = document.getElementById('previewTitle');
        const previewText = document.getElementById('previewText');

        patientInput.addEventListener('input', (e) => {
            previewName.textContent = e.target.value || 'Patient Name';
        });

        titleInput.addEventListener('input', (e) => {
            previewTitle.textContent = e.target.value || 'Title of the Success Narrative';
        });

        contentInput.addEventListener('input', (e) => {
            if (e.target.value) {
                previewText.innerHTML = e.target.value.split('\n').map(p => \`<p>\${p}</p>\`).join('');
            } else {
                previewText.innerHTML = \`<p>The patient's journey will be displayed here as you type. Our layout ensures high readability and focuses on the emotional impact of the recovery process.</p>\`;
            }
        });

        // Toggle Preview Mode (Full screen vs Side-by-side)
        const toggleBtn = document.getElementById('togglePreview');
        const formContainer = document.getElementById('formContainer');
        const previewContainer = document.getElementById('previewContainer');
        let isPreviewExpanded = false;

        toggleBtn.addEventListener('click', () => {
            isPreviewExpanded = !isPreviewExpanded;
            if (isPreviewExpanded) {
                formContainer.classList.add('lg:col-span-4', 'opacity-50', 'pointer-events-none');
                previewContainer.classList.replace('lg:col-span-5', 'lg:col-span-8');
            } else {
                formContainer.classList.remove('lg:col-span-4', 'opacity-50', 'pointer-events-none');
                previewContainer.classList.replace('lg:col-span-8', 'lg:col-span-5');
            }
        });

        // Simple button active states
        document.querySelectorAll('button').forEach(btn => {
            btn.addEventListener('mousedown', () => btn.classList.add('scale-95'));
            btn.addEventListener('mouseup', () => btn.classList.remove('scale-95'));
            btn.addEventListener('mouseleave', () => btn.classList.remove('scale-95'));
        });
    </script>
` }} />
    );
};

export default SuccessStoryEditorMedicoreAdmin;
