---
layout: archive
title: "Galleries"
permalink: /galleries/
author_profile: true
---


<div class="grid__wrapper">
  {% for post in site.galleries %}
    {% include archive-single.html type="grid" %}
  {% endfor %}
</div>
