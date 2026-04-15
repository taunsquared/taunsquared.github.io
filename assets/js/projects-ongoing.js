(function () {
  const ongoingHTML = `
    <section class="projects-ongoing-inject">
      <h2 id="ongoing-projects">Ongoing</h2>
      <div class="project-grid">

        <!-- project: philosophy & ethics -->
        <a href="/open-lab-notebook/opl/philosophy-ethics.html" class="project-card">
          <img src="/assets/images/opl/project-cards/headshot_2017Greece.jpg" alt="Danbee Kim, Heraklion, Greece. 2017." />
          <div class="project-card-overlay">
            <h3 class="project-card-title">philosophy & ethics</h3>
            <p class="project-card-desc">Ideas and references that shape my position and perspective as a scholar.</p>
          </div>
        </a>

        <!-- project: theoretical puzzle pieces -->
        <a href="/open-lab-notebook/opl/theory-pieces.html" class="project-card">
          <img src="/assets/images/opl/project-cards/20240928_Zion-canyoning.jpg" alt="Danbee rapelling down a waterfall exit of a canyon in Zion National Park. Southwest Utah, USA. Sept 2024." />
          <div class="project-card-overlay">
            <h3 class="project-card-title">theoretical puzzle pieces</h3>
            <p class="project-card-desc">Attempts to organize my ideas and theories about complex biological systems and resilience.</p>
          </div>
        </a>

      </div>
    </section>
  `;

    const target = document.getElementById('projects-ongoing-inject');
    if (target) target.outerHTML = ongoingHTML;
    if (typeof buildTOC === 'function') buildTOC();
})();
