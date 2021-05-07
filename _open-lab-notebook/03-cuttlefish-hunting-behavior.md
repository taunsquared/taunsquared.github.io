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

### Abstract

Cuttlefish are active carnivores that possess a wide repertoire of body patterns that can be changed instantly for many types of camouflage and communication. The forms and functions of many body patterns are well known from ethological studies in the field and laboratory; yet one aspect has not been reported in detail: the rapid and brief change in body coloration (“Tentacle Shot Pattern,” or TSP) that always occurs with the ejection of two ballistic tentacles to strike live moving prey (“Tentacles Go Ballistic,” or TGB, moment). We designed and tested a mechanical device that presented prey in a controlled manner, taking advantage of a key stimulus for feeding: motion of the prey. High-speed video recordings show a rapid transition into TSP starting 114 milliseconds before TGB (N=114). TSP is then suppressed as early as 470-500 milliseconds after TGB (p<0.05) in unsuccessful hunts, while persisting for at least 3 seconds after TGB in successful hunts. A granularity analysis revealed significant differences in the large-scale high contrast body patterning present in TSP compared to the camouflage body pattern deployed beforehand. TSP is thought to be a form of secondary defense called deimatic displaying, meant to briefly startle predators while cuttlefish are distracted by striking prey. The main deimatic patterns deployed by cuttlefish during this study are best characterized as Acute Conflict Mottle and Acute Disruptive Pattern. The data and methodology presented here open opportunities for quantifying the rapid neural responses in this visual sensorimotor set of behaviors.

Keywords: behavior, attack, predation, secondary defense, Cephalopod, body patterning, _Sepia officinalis_

### Graphical Abstract

{% include figure image_path="/assets/images/openLabNotebook/CuttleShuttle/Paper_CuttleShuttle_GraphicalAbstract_V4.jpg" alt="Graphical Abstract" caption="" %}

### Figures

Below are the latest drafts of the figures included in the academic paper I've written about this project, titled "An experimental method for evoking and characterizing dynamic color patterning of cuttlefish during prey capture" (in prep):

{% include figure image_path="/assets/images/openLabNotebook/CuttleShuttle/Paper_Diagram_CamouSignalingSequencesAssociatedWPreyCapture.jpg" alt="Camouflage and signaling sequences associated with prey capture by cuttlefish" caption="**Figure 1: Camouflage and signaling sequences associated with prey capture by cuttlefish.** Tentative framework for the sequence of body patterning during prey capture (see also [7]). This study focuses on the 3 seconds immediately before and after prey capture, circled in red in this diagram. *Illustration: Jennifer Deutscher.*" %}

{% include figure image_path="/assets/images/openLabNotebook/CuttleShuttle/Paper_CuttleShuttle_Sketchup_BW.jpg" alt="Experimental tank setup" caption="**Figure 2: Experimental tank setup.** An acrylic box (43 x 43 x 81 cm, open top) with “robotic prey” (shrimp piece on a plastic skewer moved by an Arduino-controlled servo motor) on the left, perched on top of the experimental tank wall, and “home base” on the right, where cuttlefish can hide during acclimation. An overhead camera (not shown) provided a top-down, monochrome recording of the setup, while an underwater camera (also not shown) recorded from another angle in color." %}

{% include figure image_path="/assets/images/openLabNotebook/CuttleShuttle/Paper_CuttleShuttle_GranularityAnalysis_noTitle.jpg" alt="Example screenshot of mantle body pattern after filtering for analysis" caption="**Figure 3: Example screenshot of mantle body pattern after filtering for analysis.** A screenshot of the mantle body pattern (+1000ms after TGB) is shown after filtering through the 4 frequency bands used by Process Cuttle Python (modified from [21]) to analyze the TSP." %}

{% include figure image_path="/assets/images/openLabNotebook/CuttleShuttle/CuttleShuttle_CatchVMiss_Ethogram_noTitle.jpg" alt="Ethogram of body pattern changes during hunting behavior in captive Sepia officinalis" caption="**Figure 4: Ethogram of body pattern changes during hunting behavior in captive Sepia officinalis** (exemplary screenshots from overhead video). The top row shows body pattern changes (TSP) during a successful attack, while the bottom row shows body pattern changes during an unsuccessful attack. All images are frames from manually cropped and aligned video clips of tentacle shots made by the same animal. Red boxes indicate ROI described in Methods section 'Video analyses – characterizing the TSP'." %}

{% include figure image_path="/assets/images/openLabNotebook/CuttleShuttle/Paper_CuttleShuttle_CatchVMiss_ShuffleTest_Granularity_noTitles.jpg" alt="Quantifying TSP dynamics with 'granularity' analysis" caption="**Figure 5:** Quantifying TSP dynamics with 'granularity' analysis. **A. Mean 'granularity' of body pattern during tentacle shots** in frequency band 2 (measured by Process Cuttle Python, modified from [21]), from 3 seconds before TGB to 3 seconds after TGB, normalized and pooled across all subjects. **B. A shuffle test (N=20,000 shuffles) of the difference of means (catch vs. miss)** show significance at 470ms after TGB. See Supp. Figs. for granularity analysis and shuffle test plots at all spatial frequencies analyzed in this study." %}

{% include figure image_path="/assets/images/openLabNotebook/CuttleShuttle/Paper_CuttleShuttle_CatchVMiss_Schematic.jpg" alt="Schematic of body pattern changes during prey capture, shown in 4 stages" caption="**Figure 6:** Schematic of body pattern changes during prey capture, shown in 4 stages. **1. TGB minus 1000 milliseconds:** Animal is typically transitioning from the positioning phase to the seizure phase of the hunt (see [8]), and tentacles are just beginning to show from within the arms. **2. TGB (Tentacles Go Ballistic):** This is the moment when tentacles are ballistically released towards the prey or food item. **3. TGB plus 400 milliseconds (Tentacle Shot Pattern appears):** By 400 milliseconds after TGB, the 'granularity' of the deployed body pattern has increased significantly as compared to the 'granularity' of the body pattern deployed during baseline (TGB minus 3000 milliseconds to TGB minus 2000 milliseconds). **4a. TGB plus 1000 milliseconds, Catch (TSP persists):** When the hunt is successful, the 'granularity' of the deployed body pattern remains high. **4b. TGB plus 1000 milliseconds, Miss (TSP disappears):** When the hunt is unsuccessful, the 'granularity' of the deployed body pattern returns to baseline. *Illustration: Danbee Kim.*" %}

### Tables

{% include figure image_path="/assets/images/openLabNotebook/CuttleShuttle/Paper_Table1.jpg" alt="Table 2: Accuracy of seizure via tentacle shots" caption="**Table 1:** Accuracy of seizure via tentacle shot while hunting robotic prey, for all animals throughout the entire experimental protocol." %}

{% include figure image_path="/assets/images/openLabNotebook/CuttleShuttle/Paper_Table2.jpg" alt="Table 2: Summary of TSP dynamics" caption="**Table 2:** Summary of TSP dynamics, showing mean timing of appearance of TSP, and timing of significant (p<0.05) divergence between successful and unsuccessful hunts." %}

### Supplemental Figures

{% include figure image_path="/assets/images/openLabNotebook/CuttleShuttle/PaperFig_ExpTank.jpg" alt="Supplemental Figure 1: The Experimental Tank" caption="**Fig. S1: The Experimental tank, showing the hunting box, with hardware setup controlling the robotic prey, inside the circular holding tank lined with LED lighting, with overhead Point Grey FlyCap2 camera.** Photo by D. Kim; figure generated in Adobe Illustrator by D. Kim." %}

{% include figure image_path="/assets/images/openLabNotebook/CuttleShuttle/PaperFig_HuntingBox.jpg" alt="Supplemental Figure 2: Overhead view of the hunting box." caption="**Fig. S2: Overhead view of hunting box inside the experimental tank.** This image is a screenshot from the session videos recorded by the overhead PointGrey FlyCap2 camera. Figure generated in Adobe Illustrator by D. Kim." %}

### Video Summary

{% include video provider="youtube" id="aLFmZGZHS_4" %}

### Research questions

In this experiment, cuttlefish must hunt for their food 4 days out of 7; their prey is a piece of shrimp at the end of an arduino-controlled skewer. We wanted to ask the following questions:

- Can cuttlefish hunt artificial prey? If so, how complex of an artificial prey can cuttlefish hunt?

- Does the cuttlefish display a reliable sequence of body patterns when it first notices the prey?

- Does the cuttlefish display a reliable sequence of body patterns when it catches its prey?

- What are the firing dynamics of cuttlefish tentacles?

## Want to get involved?

To contribute to this project, please visit the [Cuttle Shuttle project page](http://www.everymind.online/CuttleShuttle/) at [Every Mind Online](http://www.everymind.online/).

## Experimental Protocol

The most current draft of my [experimental protocol](/assets/files/ExperimentalProtocol_CuttleShuttle_20160620.pdf).

## Datasets

Videos of the experimental sessions can be found online here:

- <a href="https://www.youtube.com/playlist?list=PLM8kdf7qFeq8VYaXLOSwsgEJhm4q6g_CZ">Full video dataset of all six cuttlefish (low-res)</a>

- <a href="https://www.youtube.com/playlist?list=PLM8kdf7qFeq_aefMtjuaXoTNRXyrNvkWo">Clips of all catches</a>

- <a href="https://www.youtube.com/playlist?list=PLM8kdf7qFeq_zURYyS0C-CaGl4lEypVkm">Clips of all misses (tentacles were shot but attempt was not successful)</a>

- <a href="https://www.youtube.com/playlist?list=PLM8kdf7qFeq-ewYerw0KcYMe-xdBvc5CT">Cropped and Aligned clips used for analysis</a>

## Analysis

### Hunting Behaviour Ethogram

{% include video provider="youtube" id="CgWJwalk8c8" %}

Below are acrylic models I made to show the main phases of a cuttlefish hunt:

{% include figure image_path="/assets/images/openLabNotebook/CuttlefishHuntingBehaviour_1-AtRest.jpg" alt="Cuttlefish Hunting Behaviour: At Rest" caption="When a cuttlefish is 'at rest', or just hanging out, all of their arms lie flat over their mouth. Their eyes are usually on the sides of their head, in a position optimal for having a 360 degree view all around them. The body pattern on the cuttlefish's mantle, or back, is optimised to camouflage the cuttlefish and blend into its surroundings." %}

{% include figure image_path="/assets/images/openLabNotebook/CuttlefishHuntingBehaviour_2-Attention.jpg" alt="Cuttlefish Hunting Behaviour: Attention" caption="When a cuttlefish first notices food or prey, it will turn to face the food or prey, and often it will raise its two middle arms." %}

{% include figure image_path="/assets/images/openLabNotebook/CuttlefishHuntingBehaviour_3-Positioning.jpg" alt="Cuttlefish Hunting Behaviour: Positioning" caption="As stealth hunters, cuttlefish sneak closer to their prey or let their prey come closer to them, as the cuttlefish hide by camouflaging themselves or burrowing into sand on the ocean floor. The two middle arms often remain raised in front of their face. When the cuttlefish is about one body length away from its food or prey, the next four arms create a barrel to guide and aim their tentacles, the tips of which can become visible during this phase." %}

{% include figure image_path="/assets/images/openLabNotebook/CuttlefishHuntingBehaviour_4-TGB.jpg" alt="Cuttlefish Hunting Behaviour: Tentacles Go Ballistic" caption="When the cuttlefish is ready, it will throw its tentacles towards the food or prey, a moment that we call 'tentacles go ballistic' (TGB). The middle two arms are usually still raised, and the next four arms are still formed into a 'barrel' to aim the tentacles. During this phase, the bottom 2 arms spread out, as if to create a stabilizing tripod for the moment when tentacles go ballistic. The TGB moment also marks the appearance of the 'tentacle shot pattern', a unique, highly fractalated body pattern that appears only in this moment and not at any other time in the cuttlefish's behavioural repetoire." %}

### Video analysis

Further information about analysis work on the Cuttle Shuttle video dataset can be found [here](https://github.com/everymind/CuttleShuttle-Analysis).

## Posters

- [Champalimaud Research 2015 Retreat](/assets/images/openLabNotebook/DanbeeKim_poster_CCUretreat2015.jpg)

- [Champalimaud Research 2016 Retreat](/assets/files/DanbeeKim_CuttleShuttle_2016.pdf)

## Presentations and Videos

{% include video provider="youtube" id="TGo0AM7calI" %}

{% include video provider="youtube" id="CHrMDdK78Sk" %}

{% include video provider="youtube" id="3SStj5fYHjU" %}

{% include video provider="youtube" id="pAByIF0VAW8" %}
