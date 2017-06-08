---
layout: archive
permalink: /scribbles/
title: "scribbles"
author_profile: true
---

I want to write more, draw more, take more photos. For now, I'll try to post something here at least once a week. 

{% capture written_year %}'None'{% endcapture %}
{% for post in site.scribbles %}
  {% capture year %}{{ post.date | date: '%Y' }}{% endcapture %}
  {% if year != written_year %}
    <h2 id="{{ year | slugify }}">{{ year }}</h2>
    {% capture written_year %}{{ year }}{% endcapture %}
  {% endif %}
  {% include archive-single.html %}
{% endfor %}
