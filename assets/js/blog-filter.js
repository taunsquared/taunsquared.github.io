/**
 * blog-filter.js
 * ===================
 * Reads tags from post items on the page, populates the sidebar tag list,
 * and filters the post list when a tag is clicked.
 *
 * Depends on:
 *   - #tag-filter-list   — the <ul> in the sidebar
 *   - .post-item         — each post <li>, with a data-tags="tag1,tag2" attribute
 *
 * Usage: add this to brainplay/index.html before </body>:
 *   <script src="/assets/js/blog-filter.js"></script>
 */

(function () {

  // ── Wait for DOM ────────────────────────────────────────────────────────────

  document.addEventListener("DOMContentLoaded", () => {

    const tagList  = document.getElementById("tag-filter-list");
    const postItems = Array.from(document.querySelectorAll(".post-item"));

    if (!tagList || postItems.length === 0) return;

    // ── Collect all unique tags from posts, sorted alphabetically ─────────────

    const allTags = Array.from(
      new Set(
        postItems.flatMap(item =>
          (item.dataset.tags || "")
            .split(",")
            .map(t => t.trim())
            .filter(Boolean)
        )
      )
    ).sort((a, b) => a.localeCompare(b, undefined, { sensitivity: "base" }));

    // ── Inject tag links into sidebar (after the "all posts" item) ────────────

    allTags.forEach(tag => {
      const li = document.createElement("li");
      const a  = document.createElement("a");
      a.href          = "#";
      a.className     = "toc-h2";
      a.dataset.tag   = tag;
      a.textContent   = tag;
      li.appendChild(a);
      tagList.appendChild(li);
    });

    // ── Filter logic ──────────────────────────────────────────────────────────

    function filterByTag(selectedTag) {
      postItems.forEach(item => {
        const tags = (item.dataset.tags || "").split(",").map(t => t.trim());
        const visible = selectedTag === "all" || tags.includes(selectedTag);
        item.style.display = visible ? "" : "none";
      });
    }

    // ── Click handler ─────────────────────────────────────────────────────────

    tagList.addEventListener("click", e => {
      const link = e.target.closest("a[data-tag]");
      if (!link) return;
      e.preventDefault();

      // Update active state
      tagList.querySelectorAll("a[data-tag]").forEach(a => a.classList.remove("active"));
      link.classList.add("active");

      filterByTag(link.dataset.tag);
    });

  });

})();
