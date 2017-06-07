---
layout: archive
permalink: /scribbles/
title: "Scribbles"
author_profile: true
---

I want to write more, draw more, and take more photos. For now, I'll try to post something here at least once a week. 

{% capture written_year %}'None'{% endcapture %}
{% for post in site.scribbles %}
  {% capture year %}{{ post.date | date: '%Y' }}{% endcapture %}
  {% if year != written_year %}
    <h2 id="{{ year | slugify }}" class="archive__subtitle">{{ year }}</h2>
    {% capture written_year %}{{ year }}{% endcapture %}
  {% endif %}
  {% include archive-single.html %}
{% endfor %}
