---
layout: archive
permalink: /tags/
title: "scribbles"
author_profile: true
---

Bits of this and that. Posts are grouped by tags below. 

{% include group-by-array collection=site.posts field="tags" %}

{% for tag in group_names %}
  {% assign posts = group_items[forloop.index0] %}
  <h2 id="{{ tag | slugify }}" class="archive__subtitle">{{ tag }}</h2>
  <div class="grid__wrapper">
    {% for post in posts %}
      {% include archive-single.html type="grid" %}
    {% endfor %}
  </div>
{% endfor %}
