---
layout: archive
title: "Galleries"
permalink: /galleries/
author_profile: true
---


<div class="grid_wrapper">
    {% for image in site.static_files %}
        {% if image.path contains '_galleries/' %}
            <img src="{{ site.baseurl }}{{ image.path }}" alt="image" />
        {% endif %}
    {% endfor %}
</div>
