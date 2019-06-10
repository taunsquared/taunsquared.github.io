---
title: "Cuttlefish Hunting Behavior"
permalink: /open-lab-notebook/cuttlefish-hunting-behavior/
excerpt: 
categories:
  - open-lab-notebook
tags:
  - cuttlefish
  - behavioral neuroscience
  - Woods Hole USA
header:
  teaser: /assets/images/openLabNotebook/Cuttles.png
---
{% include toc title="Cuttlefish Hunting Behavior" %}

From February 2014 to February 2015, I collaborated with the Marine Biology Lab at Woods Hole, USA, to study cuttlefish, an invertebrate marine animal related to octopus and squid, from the perspective of neuroscience. My primary goal was to learn about their behaviour, how to take care of them, and how to modify our lab's behaviour experiment setups for rats to work with cuttlefish. I took care of cuttlefish in all stages of their life cycle and even developed unique relationships with individuals. 

Before I started any experiments, I spent most of my days feeding the cuttlefish hatchlings and cleaning their home tubs:

{% include video provider="youtube" id="Q2XCCKyhBG8" %}

Taking care of the cuttlefish on a daily basis taught me a lot about their behaviour, especially their hunting behaviour. I tried out many different experimental setups to study their hunting behaviour more closely, and learned a lot about arduinos and cameras and how to film sea creatures before I came up with the final design of the Cuttle Shuttle experiment. 

Many thanks to Kendra Buresch, Stephen Senft, Alex Schnell, Andrew Carvey, Arthur Petron, Troy McInerney, Kelsey Cramer, Corinne Cramer, Andrea Rummell, George Bell, Alan Kuzirian, Barbara Burbank, Lyda Harris, Dan Calzarette, and Roger T Hanlon for their support and assistance at Woods Hole during this project. Additional thanks to Adam Kampff and the Intelligent Systems lab for enabling and supporting this collaboration.

## Introduction 

{% include video provider="youtube" id="TGo0AM7calI" %}

In this experiment, cuttlefish must hunt for their food 4 days out of 7; their prey is a piece of shrimp at the end of an arduino-controlled skewer. We wanted to ask the following questions:

* Can cuttlefish hunt artificial prey? If so, how complex of an artificial prey can cuttlefish hunt?

* Does the cuttlefish display a reliable sequence of body patterns when it first notices the prey?

* Does the cuttlefish display a reliable sequence of body patterns when it catches its prey?

* What are the firing dynamics of cuttlefish tentacles?

## Want to get involved?

To contribute to this project, please visit the [Cuttle Shuttle project page](http://www.everymind.online/CuttleShuttle/) at [Every Mind Online](http://www.everymind.online/).

## Experimental Protocol

The most current draft of my [experimental protocol](/assets/files/ExperimentalProtocol_CuttleShuttle_20160620.pdf).

## Datasets

Videos of the experimental sessions can be found online here: 

* <a href="https://www.youtube.com/playlist?list=PLM8kdf7qFeq8VYaXLOSwsgEJhm4q6g_CZ">Full video dataset of all six cuttlefish (low-res)</a>

* <a href="https://www.youtube.com/playlist?list=PLM8kdf7qFeq_aefMtjuaXoTNRXyrNvkWo">Clips of all catches</a>

* <a href="https://www.youtube.com/playlist?list=PLM8kdf7qFeq_zURYyS0C-CaGl4lEypVkm">Clips of all misses (tentacles were shot but attempt was not successful)</a>

* <a href="https://www.youtube.com/playlist?list=PLM8kdf7qFeq-ewYerw0KcYMe-xdBvc5CT">Cropped and Aligned clips used for analysis</a>

## Analysis

### Hunting Behaviour Ethogram

{% include video provider="youtube" id="CgWJwalk8c8" %}

Below are acrylic models I made to show the main phases of a cuttlefish hunt: 

{% include figure image_path="/assets/images/openLabNotebook/CuttlefishHuntingBehaviour_1-AtRest.jpg" alt="Cuttlefish Hunting Behaviour: At Rest" caption="When a cuttlefish is 'at rest', or just hanging out, all of their arms lie flat over their mouth. Their eyes are usually on the sides of their head, in a position optimal for having a 360 degree view all around them. The body pattern on the cuttlefish's mantle, or back, is optimised to camouflage the cuttlefish and blend into its surroundings." %}

{% include figure image_path="/assets/images/openLabNotebook/CuttlefishHuntingBehaviour_2-Attention.jpg" alt="Cuttlefish Hunting Behaviour: Attention" caption="When a cuttlefish first notices food or prey, it will turn to face the food or prey, and often it will raise its two middle arms." %}

{% include figure image_path="/assets/images/openLabNotebook/CuttlefishHuntingBehaviour_3-Positioning.jpg" alt="Cuttlefish Hunting Behaviour: Positioning" caption="As stealth hunters, cuttlefish sneak closer to their prey or let their prey come closer to them, as the cuttlefish hide by camouflaging themselves or burrowing into sand on the ocean floor. The two middle arms often remain raised in front of their face. When the cuttlefish is about one body length away from its food or prey, the next four arms create a barrel to guide and aim their tentacles, the tips of which can become visible during this phase." %}

{% include figure image_path="/assets/images/openLabNotebook/CuttlefishHuntingBehaviour_4-TGB.jpg" alt="Cuttlefish Hunting Behaviour: Tentacles Go Ballistic" caption="When the cuttlefish is ready, it will throw its tentacles towards the food or prey, a moment that we call 'tentacles go ballistic' (TGB). The middle two arms are usually still raised, and the next four arms are still formed into a 'barrel' to aim the tentacles. During this phase, the bottom 2 arms spread out, as if to create a stabilizing tripod for the moment when tentacles go ballistic. The TGB moment also marks the appearance of the 'tentacle shot pattern', a unique, highly fractalated body pattern that appears only in this moment and not at any other time in the cuttlefish's behavioural repetoire." %}

### Plots

Below are some initial plots that show the frequency of different hunting events during each cuttlefish's daily session in the Cuttle Shuttle hunting box: 

{% include figure image_path="/assets/images/openLabNotebook/L1-H2013-01EpS_20160906.png" alt="Hunting events by L1-H2013-01, aka Dora" caption="" %}

{% include figure image_path="/assets/images/openLabNotebook/L1-H2013-02EpS_20160906.png" alt="Hunting events by L1-H2013-02, aka Scar" caption="" %}

{% include figure image_path="/assets/images/openLabNotebook/L1-H2013-03EpS_20160906.png" alt="Hunting events by L1-H2013-03, aka Ender" caption="" %}

{% include figure image_path="/assets/images/openLabNotebook/L7-H2013-01EpS_20160906.png" alt="Hunting events by L7-H2013-01, aka Old Tom" caption="" %}

{% include figure image_path="/assets/images/openLabNotebook/L7-H2013-02EpS_20160906.png" alt="Hunting events by L7-H2013-02, aka Plato" caption="" %}

{% include figure image_path="/assets/images/openLabNotebook/L7-H2013-03EpS_20160906.png" alt="Hunting events by L7-H2013-03, aka Blaise" caption="" %}

### Video analysis

Further analysis work on the Cuttle Shuttle video dataset can be found [here](https://github.com/everymind/CuttleShuttle-Analysis). 

## Posters

* [Champalimaud Research 2015 Retreat](/assets/images/openLabNotebook/DanbeeKim_poster_CCUretreat2015.jpg)

* [Champalimaud Research 2016 Retreat](/assets/files/DanbeeKim_CuttleShuttle_2016.pdf)

## Presentations and Videos

{% include video provider="youtube" id="CHrMDdK78Sk" %}

{% include video provider="youtube" id="3SStj5fYHjU" %}

{% include video provider="youtube" id="pAByIF0VAW8" %}


