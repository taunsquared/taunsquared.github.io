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

Taking care of the cuttlefish on a daily basis taught me a lot about their behaviour, especially their hunting behaviour. I tried out many different experimental setups to study their hunting behaviour more closely, and learned a lot about arduinos and cameras and how to film sea creatures before I came up with the final design of the Cuttle Shuttle experiment.

Many thanks to Kendra Buresch, Stephen Senft, Alex Schnell, Andrew Carvey, Arthur Petron, Troy McInerney, Kelsey Cramer, Corinne Cramer, Andrea Rummell, George Bell, Alan Kuzirian, Barbara Burbank, Lyda Harris, Dan Calzarette, and Roger T Hanlon for their support and assistance at Woods Hole during this project. Additional thanks to Adam Kampff and the Intelligent Systems lab for enabling and supporting this collaboration.

The behavior paradigm and quantification methods described below open up exciting opportunities to further study aspects of hunting behavior in freely behaving cuttlefish, both in the lab and in the wild. **If you are interested in collaborating on research along these lines, I'd love to chat!** Please email me at danbee [at] danbeekim.org or message me on twitter @taunbot.

The following write-up of the project is currently being distilled into an academic paper titled "An experimental method for evoking and characterizing dynamic color patterning of cuttlefish during prey capture" (in prep).

## Introduction

### Abstract

Cuttlefish are active carnivores that possess a wide repertoire of body patterns that can be changed within milliseconds for many types of camouflage and communication. The forms and functions of many body patterns are well known from ethological studies in the field and laboratory. Yet one aspect has not been reported in detail: the category of rapid, brief and high-contrast changes in body coloration (“Tentacle Shot Patterns,” or TSPs) that always occur with the ejection of two ballistic tentacles to strike live moving prey (“Tentacles Go Ballistic,” or TGB, moment). We designed and tested a mechanical device that presented prey in a controlled manner, taking advantage of a key stimulus for feeding: motion of the prey. High-speed video recordings show a rapid transition into TSPs starting 114 milliseconds before TGB (N=114). TSPs are then suppressed as early as 470-500 milliseconds after TGB (p<0.05) in unsuccessful hunts, while persisting for at least 3 seconds after TGB in successful hunts. A granularity analysis revealed significant differences in the large-scale high-contrast body patterning present in TSPs compared to the camouflage body pattern deployed beforehand. TSPs best fit the category of secondary defense called deimatic displaying, meant to briefly startle predators and interrupt their attack sequence while cuttlefish are distracted by striking prey. We characterize TSPs as a pattern category for which the main distinguishing feature is a high-contrast signaling pattern with aspects of Acute Conflict Mottle or Acute Disruptive Pattern. The data and methodology presented here open opportunities for quantifying the rapid neural responses in this visual sensorimotor set of behaviors.

Keywords: behavior, attack, predation, secondary defense, Cephalopod, body patterning, _Sepia officinalis_, deimatic

### Graphical Abstract

{% include figure image_path="/assets/images/openLabNotebook/CuttleShuttle/Paper_CuttleShuttle_GraphicalAbstract_highRes.jpg" alt="Graphical Abstract" caption="" %}

### Video Summary

{% include video provider="youtube" id="JcaiGIWkvUE" %}

## Figures and Tables

[View the latest drafts of the figures and tables](/open-lab-notebook/cuttlefish-hunting-behavior/figs-tables) included in the paper.

## Supplemental Materials

[View the supplemental materials](/open-lab-notebook/cuttlefish-hunting-behavior/supp-materials) of the paper.

## Posters

- [Champalimaud Research 2015 Retreat](/assets/images/openLabNotebook/DanbeeKim_poster_CCUretreat2015.jpg)

- [Champalimaud Research 2016 Retreat](/assets/files/DanbeeKim_CuttleShuttle_2016.pdf)

## Presentations and Videos

{% include video provider="youtube" id="Q2XCCKyhBG8" %}

{% include video provider="youtube" id="TGo0AM7calI" %}

{% include video provider="youtube" id="CHrMDdK78Sk" %}

{% include video provider="youtube" id="3SStj5fYHjU" %}

{% include video provider="youtube" id="CgWJwalk8c8" %}

{% include video provider="youtube" id="pAByIF0VAW8" %}

## Related Artwork

Below are acrylic models I made to show the main phases of a cuttlefish hunt:

{% include figure image_path="/assets/images/openLabNotebook/CuttlefishHuntingBehaviour_1-AtRest.jpg" alt="Cuttlefish Hunting Behaviour: At Rest" caption="When a cuttlefish is 'at rest', or just hanging out, all of their arms lie flat over their mouth. Their eyes are usually on the sides of their head, in a position optimal for having a 360 degree view all around them. The body pattern on the cuttlefish's mantle, or back, is optimised to camouflage the cuttlefish and blend into its surroundings." %}

{% include figure image_path="/assets/images/openLabNotebook/CuttlefishHuntingBehaviour_2-Attention.jpg" alt="Cuttlefish Hunting Behaviour: Attention" caption="When a cuttlefish first notices food or prey, it will turn to face the food or prey, and often it will raise its two middle arms." %}

{% include figure image_path="/assets/images/openLabNotebook/CuttlefishHuntingBehaviour_3-Positioning.jpg" alt="Cuttlefish Hunting Behaviour: Positioning" caption="As stealth hunters, cuttlefish sneak closer to their prey or let their prey come closer to them, as the cuttlefish hide by camouflaging themselves or burrowing into sand on the ocean floor. The two middle arms often remain raised in front of their face. When the cuttlefish is about one body length away from its food or prey, the next four arms create a barrel to guide and aim their tentacles, the tips of which can become visible during this phase." %}

{% include figure image_path="/assets/images/openLabNotebook/CuttlefishHuntingBehaviour_4-TGB.jpg" alt="Cuttlefish Hunting Behaviour: Tentacles Go Ballistic" caption="When the cuttlefish is ready, it will throw its tentacles towards the food or prey, a moment that we call 'tentacles go ballistic' (TGB). The middle two arms are usually still raised, and the next four arms are still formed into a 'barrel' to aim the tentacles. During this phase, the bottom 2 arms spread out, as if to create a stabilizing tripod for the moment when tentacles go ballistic. The TGB moment also marks the appearance of the 'tentacle shot pattern', a unique, highly fractalated body pattern that appears only in this moment and not at any other time in the cuttlefish's behavioural repetoire." %}

## References

1. Adamo SA, Ehgoetz K, Sangster C, Whitehorne I (2006) Signaling to the enemy? Body pattern expression and its response to external cues during hunting in the cuttlefish Sepia officinalis (Cephalopoda). The Biol Bull 210(3):192-200.
2. Holmes W (1940) The colour changes and colour patterns of Sepia officinalis L. Proceedings of the Zoological Society of London 110 (1-2): 17-35.
3. How MJ, Norman MD, Finn J, Chung WS, Marshall NJ (2017) Dynamic skin patterns in cephalopods. Front Physiol 19(8):393.
4. Langridge KV (2006) Symmetrical crypsis and asymmetrical signalling in the cuttlefish Sepia officinalis. Proceedings of the Royal Society B: Biological Sciences 273(1589):959-67.
5. Langridge KV, Broom M, Osorio D (2007) Selective signalling by cuttlefish to predators. Current Biology 17(24):R1044-5.
6. Shashar N, Rutledge P, Cronin T (1996) Polarization vision in cuttlefish in a concealed communication channel?. Journal of Experimental Biology 199(9):2077-84.
7. Hanlon RT, Messenger JB (2018) Cephalopod behaviour. Cambridge University Press.
8. Messenger JB (1968) The visual attack of the cuttlefish, Sepia officinalis. Animal Behaviour 16(2-3):342-57.
9. Sereni E (1930) The chromatophores of the cephalopods. The Biol Bull 59(3):247-68.
10. Thompson DW (1910) Aristotle: Historia animalium. The works of Aristotle translated into English, book IV. The Classical Review.
11. Cole PD, Adamo SA. Cuttlefish (Sepia officinalis: Cephalopoda) hunting behavior and associative learning (2005) Anim cogn 8(1):27-30.
12. Duval P, Chichery MP, Chichery R (1984) Prey capture by the cuttlefish (Sepia officinalis L): an experimental study of two strategies. Behavioural processes 9(1):13-21.
13. Feord RC, Sumner ME, Pusdekar S, Kalra L, Gonzalez-Bellido PT, Wardill TJ (2020) Cuttlefish use stereopsis to strike at prey. Sci Adv 6(2):eaay6036.
14. Zylinski S, Osorio D, Shohet AJ (2009) Cuttlefish camouflage: context-dependent body pattern use during motion. Proceedings of the Royal Society B: Biological Sciences 276(1675):3963-9.
15. Hanlon RT, Messenger JB (1988) Adaptive coloration in young cuttlefish (Sepia officinalis L.): the morphology and development of body patterns and their relation to behaviour. Philosophical Transactions of the Royal Society of London. B, Biological Sciences 320(1200):437-87.
16. Carreno Castilla A, Hernandez-Urcera J, Gouraguine A, Guerra Á, Cabanellas-Reboredo M (2020) Predation behaviour of the European squid Loligo vulgaris. J Ethol 38:311-22.
17. Gordon D, Pugh P, Cooke GM (2019) Social Media and citizen science provide valuable data for behavioural ecology research: Are cuttlefish using pursuit-deterrent signals during hunting?. bioRxiv: 760926.
18. Lopes G, Nogueira J, Dimitriadis G, Menendez JA, Paton JJ, Kampff AR (2017) A robust role for motor cortex. bioRxiv: 058917
19. Panetta D, Solomon M, Buresch K, Hanlon RT (2017) Small-scale rearing of cuttlefish (Sepia officinalis) for research purposes. Mar Freshw Behav Physiol 50(2):115-24.
20. Lopes G, Bonacchi N, Frazão J, Neto JP, Atallah BV, Soares S, Moreira L, Matias S, Itskov PM, Correia PA, Medina RE (2015) Bonsai: an event-based framework for processing and controlling data streams. Front Neuroinform 9:7.
21. Barbosa A, Mäthger LM, Buresch KC, Kelly J, Chubb C, Chiao CC, Hanlon RT (2008) Cuttlefish camouflage: the effects of substrate contrast and size in evoking uniform, mottle or disruptive body patterns. Vision Res 48(10):1242-53.
22. Packard A, Hochberg FG (1977) Skin patterning in Octopus and other genera. In Symp. Zool. Soc. Lond 38: 191-231.
23. Graving JM, Chae D, Naik H, Li L, Koger B, Costelloe BR, Couzin ID (2019) DeepPoseKit, a software toolkit for fast and robust animal pose estimation using deep learning. Elife 8:e47994.
24. Mathis A, Mamidanna P, Cury KM, Abe T, Murthy VN, Mathis MW, Bethge M (2018) DeepLabCut: markerless pose estimation of user-defined body parts with deep learning. Nat Neurosci 21(9):1281-9.
25. Nath T, Mathis A, Chen AC, Patel A, Bethge M, Mathis MW (2019) Using DeepLabCut for 3D markerless pose estimation across species and behaviors. Nat Protoc 14(7):2152-76.
26. Laan A, Gutnick T, Kuba MJ, Laurent G (2014) Behavioral analysis of cuttlefish traveling waves and its implications for neural control. Current Biology 24(15):1737-42.
27. Reiter S, Hülsdunk P, Woo T, Lauterbach MA, Eberle JS, Akay LA, Longo A, Meier-Credo J, Kretschmer F, Langer JD, Kaschube M (2018) Elucidating the control and development of skin patterning in cuttlefish. Nature 562(7727):361-6.
