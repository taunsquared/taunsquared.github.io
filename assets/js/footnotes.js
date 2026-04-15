/* ── Footnote auto-numbering ─────────────────────────────────────────────
   Scans the page in DOM order for every .fn-ref[data-fn] marker, matches
   each to its <li data-fn-id> entry in .footnotes-list, then:
     • numbers both ends (marker text + badge in the list)
     • sets href / id so anchor links work
     • shows a body-level tooltip (so it can contain HTML including links)
       positioned with JS — avoids all CSS containment / overflow / flex issues
     • appends a ↩ back-link to each footnote entry

   To add a footnote:
     In text:   <a class="fn-ref" data-fn="my-slug"></a>
     In list:   <li data-fn-id="my-slug">Footnote text, <a href="…">with links</a>.</li>
   Order in the list doesn't matter; numbering follows reading order in text.

   Include on any page that uses footnotes:
     <script src="../footnotes.js"></script>   (one level deep)
     <script src="../../footnotes.js"></script> (two levels deep)
──────────────────────────────────────────────────────────────────────── */

(function () {
    const refs   = Array.from(document.querySelectorAll('.fn-ref[data-fn]'));
    const items  = document.querySelectorAll('.footnotes-list li[data-fn-id]');
    const bySlug = {};
    items.forEach(li => { bySlug[li.dataset.fnId] = li; });
    
    // ── Single shared tooltip element, appended to <body> ───────────────────
    // Keeping it outside .fn-ref means it is never constrained by the inline-
    // flex parent, any overflow:hidden ancestor, or z-index stacking contexts.
    const tooltip = document.createElement('div');
    tooltip.className = 'fn-tooltip';
    tooltip.setAttribute('role', 'tooltip');
    tooltip.setAttribute('aria-hidden', 'true');
    document.body.appendChild(tooltip);
    
    // Caret (decorative triangle) inside the tooltip div
    const caret = document.createElement('span');
    caret.className = 'fn-tooltip-caret';
    caret.setAttribute('aria-hidden', 'true');
    tooltip.appendChild(caret);
    
    const tooltipBody = document.createElement('div');
    tooltipBody.className = 'fn-tooltip-body';
    tooltip.appendChild(tooltipBody);
    
    // ── Position helper ──────────────────────────────────────────────────────
    const GAP = 10; // px between ref and tooltip
    
    function positionTooltip(ref) {
	const r     = ref.getBoundingClientRect();
	const tw    = tooltip.offsetWidth;
	const th    = tooltip.offsetHeight;
	const scrollY = window.scrollY || document.documentElement.scrollTop;
	const scrollX = window.scrollX || document.documentElement.scrollLeft;
	const vw    = document.documentElement.clientWidth;
	
	// Horizontally centre over the ref, clamped to viewport edges
	let left = scrollX + r.left + r.width / 2 - tw / 2;
	left = Math.max(8, Math.min(left, scrollX + vw - tw - 8));
	
	// Prefer above; flip below if not enough room
	let top = scrollY + r.top - th - GAP;
	if (top < scrollY + 8) {
	    top = scrollY + r.bottom + GAP;
	    tooltip.classList.add('fn-tooltip--below');
	} else {
	    tooltip.classList.remove('fn-tooltip--below');
	}
	
	tooltip.style.left = `${left}px`;
	tooltip.style.top  = `${top}px`;
	
	// Align caret under/over the ref centre
	const caretX = scrollX + r.left + r.width / 2 - left;
	caret.style.left = `${caretX}px`;
    }
    
    // ── Show / hide ──────────────────────────────────────────────────────────
    let activeRef = null;
    let hideTimer = null;
    
    function showTooltip(ref) {
	clearTimeout(hideTimer);
	const li = bySlug[ref.dataset.fn];
	if (!li) return;
	
	tooltipBody.innerHTML = li.querySelector('.fn-body')?.innerHTML.trim() ?? '';
	
	// Links inside tooltip: let them navigate normally
	tooltipBody.querySelectorAll('a').forEach(a => {
	    a.addEventListener('click', e => e.stopPropagation());
	});
	
	tooltip.classList.add('fn-tooltip--visible');
	tooltip.setAttribute('aria-hidden', 'false');
	activeRef = ref;
	positionTooltip(ref);
    }
    
    function hideTooltip(immediate) {
	if (immediate) {
	    tooltip.classList.remove('fn-tooltip--visible', 'fn-tooltip--below');
	    tooltip.setAttribute('aria-hidden', 'true');
	    activeRef = null;
	} else {
	    // Small grace period so the cursor can move onto the tooltip
	    hideTimer = setTimeout(() => {
		tooltip.classList.remove('fn-tooltip--visible', 'fn-tooltip--below');
		tooltip.setAttribute('aria-hidden', 'true');
		activeRef = null;
	    }, 150);
	}
    }
    
    // ── Wire up each footnote ref ────────────────────────────────────────────
    refs.forEach((ref, i) => {
	const n    = i + 1;
	const slug = ref.dataset.fn;
	const li   = bySlug[slug];
	
	if (!li) {
	    console.warn(`footnotes.js: no footnote found for data-fn="${slug}"`);
	    return;
	}
	
	const refId = `fn-ref-${slug}`;
	const fnId  = `fn-${slug}`;
	
	// Wire up the marker
	ref.textContent = n;
	ref.id          = refId;
	ref.href        = `#${fnId}`;
	ref.setAttribute('aria-label', `Footnote ${n}`);
	
	// Wire up the list item
	li.id = fnId;
	
	// Inject the number badge if not already there
	if (!li.querySelector('.fn-num')) {
	    const badge = document.createElement('span');
	    badge.className = 'fn-num';
	    badge.setAttribute('aria-hidden', 'true');
	    li.prepend(badge);
	}
	li.querySelector('.fn-num').textContent = n;
	
	// Wrap all content nodes (text + inline elements like <a>) in a single
	// .fn-body span so they form one flex item inside the <li display:flex>.
	// Without this, any <a> tags become direct flex children and break layout.
	if (!li.querySelector('.fn-body')) {
	    const body = document.createElement('span');
	    body.className = 'fn-body';
	    const toWrap = Array.from(li.childNodes).filter(
		node => !(node.classList?.contains('fn-num') || node.classList?.contains('fn-back'))
	    );
	    toWrap.forEach(node => body.appendChild(node));
	    li.querySelector('.fn-num').insertAdjacentElement('afterend', body);
	}
	
	// Inject / update the back-link
	let back = li.querySelector('.fn-back');
	if (!back) {
	    back = document.createElement('a');
	    back.className   = 'fn-back';
	    back.textContent = '↩';
	    li.appendChild(back);
	}
	back.href = `#${refId}`;
	back.setAttribute('aria-label', `Return to reference ${n}`);
	
	// Desktop: hover / focus
	ref.addEventListener('mouseenter', () => showTooltip(ref));
	ref.addEventListener('mouseleave', () => hideTooltip(false));
	ref.addEventListener('focus',      () => showTooltip(ref));
	ref.addEventListener('blur',       () => hideTooltip(false));
    });
    
    // Keep tooltip open while the cursor is over it
    tooltip.addEventListener('mouseenter', () => clearTimeout(hideTimer));
    tooltip.addEventListener('mouseleave', () => hideTooltip(false));
    
    // ── Touch: first tap shows tooltip, second tap follows the link ──────────
    document.addEventListener('click', e => {
	const ref = e.target.closest('.fn-ref');
	if (ref) {
	    if (e.target.closest('.fn-tooltip')) return; // let tooltip links through
	    
	    if (activeRef === ref) {
		// Second tap on same ref — dismiss and follow anchor
		hideTooltip(true);
	    } else {
		e.preventDefault();
		showTooltip(ref);
	    }
	} else if (!e.target.closest('.fn-tooltip')) {
	    hideTooltip(true);
	}
    });
    
    // Reposition if the page scrolls or resizes while tooltip is open
    window.addEventListener('scroll', () => { if (activeRef) positionTooltip(activeRef); }, { passive: true });
    window.addEventListener('resize', () => { if (activeRef) positionTooltip(activeRef); });
    
    // ── Flash-highlight the footnote when jumping to it via anchor ───────────
    const highlightTarget = () => {
	document.querySelectorAll('.footnotes-list li.fn-highlight').forEach(li => li.classList.remove('fn-highlight'));
	const hash = window.location.hash.slice(1);
	if (hash.startsWith('fn-') && !hash.includes('ref')) {
	    const target = document.getElementById(hash);
	    if (target) {
		target.classList.add('fn-highlight');
		setTimeout(() => target.classList.remove('fn-highlight'), 2000);
	    }
	}
    };
    window.addEventListener('hashchange', highlightTarget);
    highlightTarget();
})();
