function buildTOC() {
  const tocList = document.querySelector('.toc-list');
  if (!tocList) return;

  const headings = document.querySelectorAll('.content h1[id], .content h2[id], .content h3[id]');
  if (!headings.length) return;

  tocList.innerHTML = Array.from(headings).map(h => {
    const level = h.tagName.toLowerCase();
    const id = h.id;
    const label = h.textContent.trim();
    return `<li><a href="#${id}" class="toc-${level}">${label}</a></li>`;
  }).join('');

  const tocLinks = tocList.querySelectorAll('a');

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const id = entry.target.id;
        tocLinks.forEach(a => {
          a.classList.toggle('active', a.getAttribute('href') === '#' + id);
        });
      }
    });
  }, { rootMargin: '0px 0px -70% 0px', threshold: 0 });

  headings.forEach(h => observer.observe(h));
}
