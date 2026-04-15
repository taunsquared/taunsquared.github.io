(function () {
  const archiveHTML = `
    <section class="projects-archive-inject">
      <h2 id="projects-archive">Archive</h2>
      <div class="project-grid">

        <!-- project: PhD thesis -->
        <a href="https://drive.proton.me/urls/ZDZPPBR7W0#51AncSjolucN" class="project-card">
          <img src="/assets/images/opl/project-cards/DK_thesis_FrontCover.jpg" alt="Front cover of PhD thesis." />
          <div class="project-card-overlay">
            <h3 class="project-card-title">PhD Thesis</h3>
            <p class="project-card-desc"><em>On the Aims and Methods of Field Neuroscience: Non-invasive techniques for studying nervous systems in natural settings</em>. Publicly defended and passed with zero corrections on December 17, 2020.</p>
          </div>
        </a>

        <!-- project: The First VIRS --> 
        <a href="/FirstVIRS/index.html" class="project-card">
          <img src="/assets/images/opl/project-cards/TheFirstVIRS_book-title.jpg" alt="Cover illustration for The First VIRS, by Gideon Gerlt. Published Dec 2020." />
          <div class="project-card-overlay">
            <h3 class="project-card-title">The First VIRS</h3>
            <p class="project-card-desc">A graphic novel about two teens who wield a powerful matrilineal heritage of science and spirituality. Based on my PhD research.</p>
          </div>
        </a>

        <!-- project: graphic novel thesis call for artists -->
        <a href="/open-lab-notebook/opl/FirstVIRS/FirstVIRS-call-for-artists.html" class="project-card">
          <img src="/assets/images/opl/project-cards/JuliaZimmerman_Neuron.jpeg" alt="Illustration by Julia Zimmerman. A typical neuron is stylized and re-imagined as a gothic horror creature, with an axon terminal made of many hands, and dendrites made of multiple people. August 2018." />
          <div class="project-card-overlay">
            <h3 class="project-card-title">call for artists</h3>
            <p class="project-card-desc">Finding visual artists to illustrate The First VIRS, a graphic novel based on my PhD research.</p>
          </div>
        </a>

        <!-- project: surprising minds -->
        <a href="/open-lab-notebook/opl/surprising-minds.html" class="project-card">
          <img src="/assets/images/opl/project-cards/SurprisingMinds_exhibit.jpg" alt="The Surprising Minds exhibit, Summer 2018. The exhibit operated in the main arcade of Brighton Sea Life Centre from July 2017 until November 2018. Brighton, UK." />
          <div class="project-card-overlay">
            <h3 class="project-card-title">surprising minds</h3>
            <p class="project-card-desc">An interactive aquarium exhibit that collected neuroscience data from over 24,000 visitors.</p>
          </div>
        </a>

        <!-- project: every mind online -->
	<a href="/open-lab-notebook/opl/every-mind-online.html" class="project-card">
	  <img src="/assets/images/opl/project-cards/SurprisingMindsOnYoutube.jpg" alt="Danbee is holding a UV-blocking umbrella while wearing an eye-tracking headset connected to a tablet in their hands. Regent's Park, London, UK. Summer 2018." />
	  <div class="project-card-overlay">
	    <h3 class="project-card-title">every mind online</h3>
	    <p class="project-card-desc">My first attempt at creating a collaborative open neuroscience research community, with the goal of getting more brains involved in the study of brains.</p>
	  </div>
	</a>

        <!-- project: movement control -->
	<a href="/open-lab-notebook/opl/movement-control.html" class="project-card">
	  <img src="/assets/images/opl/project-cards/20170820_headstand_AppalachianMtns.jpg" alt="Danbee does a handstand in a meadow, somewhere in the Appalachian Mountains. Aug 2017." />
	  <div class="project-card-overlay">
	    <h3 class="project-card-title">movement control</h3>
	    <p class="project-card-desc">A mini-project exploring the ability to adjust a movement to fit into different timescales. Participants were volunteers from the UCL Capoeira Club. Data collection: Fall 2015.</p>
	  </div>
	</a>

        <!-- project: cuttlefish -->
	<a href="/open-lab-notebook/opl/cuttlefish.html" class="project-card">
	  <img src="/assets/images/opl/project-cards/Cuttles.png" alt="Cuttlefish in a tank, Marine Biology Lab, Woods Hole, Massachusetts. 2014." />
	  <div class="project-card-overlay">
	    <h3 class="project-card-title">cuttlefish hunting behavior</h3>
	    <p class="project-card-desc">A collaboration with Roger Hanlon and the Marine Biology Lab at Woods Hole, Massachusetts, USA. Data collection: Feb 2014 to Feb 2015.</p>
	  </div>
	</a>

        <!-- project: aronauts -->
	<a href="/open-lab-notebook/opl/aronauts.html" class="project-card">
	  <img src="/assets/images/opl/project-cards/Crick_MusicSymposium_17_small1074.png" alt="Aronauts performing at the Crick Live Music Symposium" />
	  <div class="project-card-overlay">
	    <h3 class="project-card-title">Aronauts</h3>
	    <p class="project-card-desc">A collection of science songs written about and inspired by my PhD research.</p>
	  </div>
	</a>

        <!-- project: phd thesis proposal -->
	<a href="/open-lab-notebook/opl/phd-thesis-proposal.html" class="project-card">
	  <img src="/assets/images/opl/project-cards/KampffLab_Dec2013.jpg" alt="Kampff Lab, Champalimaud Center for the Unknown, Lisboa. Dec 2013." />
	  <div class="project-card-overlay">
	    <h3 class="project-card-title">PhD thesis proposal</h3>
	    <p class="project-card-desc">The first official version of what I thought my PhD would be about.</p>
	  </div>
	</a>

      </div>
    </section>
  `;

    // Find the element where you want the archive injected, then insert before it
    const target = document.getElementById('projects-archive-inject');
    if (target) target.outerHTML = archiveHTML;
    if (typeof buildTOC === 'function') buildTOC();
})();
