---
layout: archive
title: "Galleries"
permalink: /galleries/
author_profile: true
---


<div class="grid__wrapper">
  {% for page in site.galleries %}
    {% include archive-single.html type="grid" %}
  {% endfor %}
</div>
