/* ── Shared navigation include ────────────────────────────────────────────
   Injects the site header and footer into every page that loads this script.
   Each page must have:
     <header class="site-header" id="site-header"></header>
     <footer class="site-footer" id="site-footer"></footer>

   Script tag attributes:

   data-root           (required)
     Path from this page to the site root.
       Root-level page:            data-root="./"
       One level deep:             data-root="../"
       Two levels deep:            data-root="../../"
       Three levels deep:          data-root="../../../"

   data-header-class   (optional)
     Extra class(es) added to the <header> element after injection.
     Use "transparent" on the landing page:
       data-header-class="transparent"

   data-footer-class   (optional)
     Extra class(es) added to the <footer> element and its .footer-col
     children after injection. Use "transparent landing-footer" on the
     landing page:
       data-footer-class="transparent landing-footer"

   data-mobile-menu    (optional, default: "inline")
     Controls the mobile hamburger menu style.
       "inline"  — nav slides open inside the header (all interior pages)
       "overlay" — fullscreen overlay appended to <body> (landing page,
                   needed when a backdrop-filter background would clip
                   an inline dropdown)
──────────────────────────────────────────────────────────────────────── */

(function () {
    const script     = document.currentScript;
    const root       = script?.dataset.root        ?? './';
    const mobileMode = script?.dataset.mobileMenu  ?? 'inline';
    
    // ── Helper: resolve a root-relative path ──────────────────────────────
    const r = path => root + path;
    
    // ── Determine active nav item ──────────────────────────────────────────
    const path = window.location.pathname;
    const active = {
	about:     path.includes('about'),
	notebook:  path.includes('open-lab-notebook') || path.includes('/opl/') || path.includes('/FirstVIRS/'),
	blog: path.includes('brainplay'),
    };
    const cls = key => active[key] ? ' class="active"' : '';
    
    // ── Header HTML ────────────────────────────────────────────────────────
    const headerHTML = `
    <a href="${r('index.html')}" class="logo">Dr. <span>단비</span> Tauntaun <span>Kim</span>, PhD</a>
    <nav>
      <a href="${r('about.html')}"${cls('about')}>about</a>

      <div class="nav-dropdown">
        <a href="${r('open-lab-notebook/index.html')}"${cls('notebook')}>open lab notebook</a>
        <div class="dropdown-menu">
          <a href="${r('open-lab-notebook/opl/philosophy-ethics.html')}">philosophy &amp; ethics</a>
          <a href="${r('open-lab-notebook/opl/theory-pieces.html')}">theoretical puzzle pieces</a>
          <a href="${r('FirstVIRS/index.html')}">The First VIRS</a>
          <a href="${r('open-lab-notebook/opl/surprising-minds.html')}">Surprising Minds</a>
          <a href="${r('open-lab-notebook/opl/cuttlefish.html')}">cuttlefish hunting behavior</a>  
        </div>
      </div>

      
      <a href="${r('brainplay/index.html')}"${cls('brainplay')}>brainplay</a>
    </nav>
    `;

    // ── Footer HTML ────────────────────────────────────────────────────────
    const footerHTML = `
    <div class="footer-inner">
      <div class="footer-col">
        <a href="${r('about.html')}">about</a>
        <a href="${r('open-lab-notebook/index.html')}">open lab notebook</a>
        <a href="${r('brainplay/index.html')}">brainplay</a>
      </div>
      <div class="footer-col">
        <a href="mailto:danbee@danbeekim.org"><i class="fa fa-envelope"></i> email</a>
        <a href="https://github.com/taunsquared"><i class="fa-brands fa-github"></i> github</a>
<a href="https://www.linkedin.com/in/danbeet2kim/"><i class="fa-brands fa-linkedin"></i> linkedin</a>
        <a href="/assets/files/cv/DanbeeKim_CV_2026.pdf"><i class="fa-solid fa-file-arrow-down"></i> CV</a>
      </div>
    </div>
    <div class="footer-bottom">
      <span>All content on this website, unless otherwise noted, is licensed under a <a href="http://creativecommons.org/licenses/by-nc-sa/4.0/">Creative Commons Attribution-NonCommercial-ShareAlike 4.0 International License</a>.</span>
    </div>
    `;

    // ── Inject header + footer ─────────────────────────────────────────────
    const headerEl = document.getElementById('site-header');
    const footerEl = document.getElementById('site-footer');
    if (headerEl) headerEl.innerHTML = headerHTML;
    if (footerEl) footerEl.innerHTML = footerHTML;
    
    // ── Optional extra class(es) on <header> ──────────────────────────────
    if (script?.dataset.headerClass) {
	headerEl?.classList.add(...script.dataset.headerClass.split(' '));
    }
    
    // ── Optional extra class(es) on <footer> and its .footer-col children ─
    if (script?.dataset.footerClass) {
	const classes = script.dataset.footerClass.split(' ');
	footerEl?.classList.add(...classes);
	footerEl?.querySelectorAll('.footer-col').forEach(col => col.classList.add(...classes));
    }
    
    // ── Shared DOM refs ────────────────────────────────────────────────────
    const header          = document.querySelector('.site-header');
    const nav             = header?.querySelector('nav');
    const navDropdown     = nav?.querySelector('.nav-dropdown');
    const dropdownTrigger = nav?.querySelector('.nav-dropdown > a');
    const dropdownMenu    = nav?.querySelector('.dropdown-menu');
    if (!header || !nav || !navDropdown) return;
    
    // ── Hamburger button (shared by both mobile menu modes) ────────────────
    const hamburger = document.createElement('button');
    hamburger.className = 'hamburger';
    hamburger.setAttribute('aria-label', 'Toggle menu');
    hamburger.innerHTML = '<span></span><span></span><span></span>';
    header.appendChild(hamburger);
    
    const isMobile = () => window.innerWidth <= 1088;
    
    // ── Mobile menu: OVERLAY mode (landing page) ───────────────────────────
    // Appended to <body> to avoid being clipped by the backdrop-filter bg.
    if (mobileMode === 'overlay') {
	const mobileMenu = document.createElement('div');
	mobileMenu.className = 'mobile-menu-overlay';
	mobileMenu.innerHTML = `
        <nav class="mobile-menu-nav">
          <a href="${r('about.html')}">about</a>
          <div class="mobile-menu-dropdown">
            <div class="mobile-menu-dropdown-header">
              <a href="${r('open-lab-notebook/index.html')}">open lab notebook</a>
              <button class="mobile-menu-dropdown-toggle" aria-label="Toggle submenu">+</button>
            </div>
            <div class="mobile-menu-submenu">
              ${dropdownMenu.innerHTML}
            </div>
          </div>
          <a href="${r('brainplay/index.html')}">brainplay</a>
        </nav>
        `;
	document.body.appendChild(mobileMenu);

	const submenu = mobileMenu.querySelector('.mobile-menu-submenu');
	const toggle  = mobileMenu.querySelector('.mobile-menu-dropdown-toggle');
	
	hamburger.addEventListener('click', () => {
	    hamburger.classList.toggle('open');
	    mobileMenu.classList.toggle('open');
	    if (!mobileMenu.classList.contains('open')) {
		submenu.classList.remove('open');
		toggle.textContent = '+';
	    }
	});

	dropdownTrigger?.addEventListener('click', e => {
	    if (isMobile()) {
		e.preventDefault();
		submenu.classList.toggle('open');
		toggle.textContent = submenu.classList.contains('open') ? '−' : '+';
	    }
	});
	
	toggle.addEventListener('click', () => {
	    submenu.classList.toggle('open');
	    toggle.textContent = submenu.classList.contains('open') ? '−' : '+';
	});
	
	mobileMenu.querySelectorAll('a').forEach(link => {
	    link.addEventListener('click', () => {
		hamburger.classList.remove('open');
		mobileMenu.classList.remove('open');
		submenu.classList.remove('open');
		toggle.textContent = '+';
	    });
	});
	
	// ── Mobile menu: INLINE mode (all other pages) ─────────────────────────
    } else {
	const mobileSubmenu = document.createElement('div');
	mobileSubmenu.className = 'mobile-submenu';
	mobileSubmenu.innerHTML = `
        <a href="${r('open-lab-notebook/index.html')}">→ open lab notebook (main page)</a>
        ${dropdownMenu.innerHTML}
        `;
	navDropdown.insertAdjacentElement('afterend', mobileSubmenu);

	hamburger.addEventListener('click', () => {
	    hamburger.classList.toggle('open');
	    nav.classList.toggle('open');
	    if (!nav.classList.contains('open')) mobileSubmenu.classList.remove('open');
	});
	
	dropdownTrigger?.addEventListener('click', e => {
	    if (isMobile()) {
		e.preventDefault();
		mobileSubmenu.classList.toggle('open');
	    }
	});
	
	nav.querySelectorAll('a:not(.nav-dropdown > a)').forEach(link => {
	    link.addEventListener('click', () => {
		if (isMobile()) {
		    hamburger.classList.remove('open');
		    nav.classList.remove('open');
		    mobileSubmenu.classList.remove('open');
		}
	    });
	});
    }
    
})();
