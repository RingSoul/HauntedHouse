const HEADERS = [
    "Behind the door covered with ephemerals, a dense pack of red ants present you with an astonishing scene.",

    "The familar smell of blood greets you upon your entry; then you understand that the red ants are still consuming the pig.",

    "The smell of blood can no longer be perceived, but you see something else, something excessively absurd.",

    "You decide to revisit the red ants.  Seemingly unaware of your entry, they continues to iterate their movements around the little gold fish in an orderly fashion, as if they are worshipping it through a ceremonious ritual."
];


const STORIES = [
    "<p>As you open and pass through the door covered with ephemerals, you fail to notice the falling of a petal above your head that is guided by a blow of wind from an obscure origin; it gently touches your back, attempting to attach to you for eternity, but eventually unable to overcome the obstacle provided by both the exacerbating wind and your motion.  But your attention is elsewhere: an enormous pig surrounded by a crowd of sizable red ants.  The red ants are consuming the pig's flesh bit by bit, and near the locations where the layers of fat are the thinnest, blood begins to involuntarily reveal its existence and slowly flow down the surface of the pig's skin.  The pig makes no attempt to resist the atrocity.  Its facial expression remains so sluggish with its eyes staying so calm, as if it indifferently accepts this as its finale: an ebullient dinner for the red ants.  Observing such a bloody and vicious scene results in your bewilderment, which prevents you from immediately perceiving the three wooden doors across from you, all of which are labeled differently (120, 107, 41X) and surrounded by distinct groups of red ants, as if they're commanded to guard the doors from the contact of outsiders.</p>",

    "<p>The pig, whose bones are now partially visible, lies helplessly in the shallow pool of its own blood.  The red ants are still enjoying their feast and guarding the three wooden doors.  As their consumption of the pig continues, you notice that they deliberately prevent eating its tail; you cannot tell if this pattern you concluded is fallacious.  Though, the mere exposure effect allows you to react less intensely to their atrocity, and permits you to realize the details (uncaught during your previous entry) on the wooden doors: The door numbered 120 has a circle inscribed on its center, and around the circle which contains nothing inside, different mythological creatures are looming outside its boundary as if they want to but cannot invade as they please; the door labeled 107 has a stickman figure carved onto it, and above the stickman figure's head are one symbolic moon and two symbolic suns; the door illogically labeled 41X has no mysteriously engraved art on it, but merely contains the trace of 9 bullet shots and 6 knife stabs.</p>",

    "<p>The pig has vanished utterly, as if it never existed; no vestige of its meat, bone, and blood remains perceivable through smell or sight, and you certainly have no desire to ponder if the red ants has devoured its entirety, althought somehow you know with no doubt that they did not eat the pig tail.  A little gold fish replaces the pig at the location where it was being ingested.  The red ants, to your surprise, show no sign of aggression towards the gold fish.  While it motionlessly lies there with no water supporting its survival, the red ants circle around the gold fish perpetually; their movements are mesmerizingly organized, contrary to the chaotic scene when they were consuming the pig.  You are confused about what you see until you hear a whisper that sends a chill down your spine.  \"They are dancing, celebrating the legacy left behind by a man whose death was first discovered by wandering vultures instead of the ones he never loved.\"  The voice from an obscure origin states, with a perceivable tone of sarcasm in the later half of the claim.  A sense of despair strikes you as you find no way to know the origin of the voice or the man mentioned in the whisper.</p>",

    "<p>You begin to hear sounds, sounds that are neither from the red ants nor the gold fish; unlike the simple whisper that you heard last time from the mysterious origin, these voices are all mixed together yet intelligible in terms of the information they express.  You can hear butterflies flapping their wings and, out of nowhere, suddenly recognize that their color is yellow; they flap their wings for the suppressed and the separated, singing their epitaph until time no longer intertwines with solitude.  You can hear the haste flooding of the river with no bridge.  You can hear the ominous silence under the surface of the pond, for it has witnessed three consecutive tragedies and now wonders what is forthcoming, not knowing that it has forced a living entity to swallow everything she never told people for eternity.  A stream of information hastily races through your mind; you receive everything, understand everything, but your delirium intensifies as you process everything, and the red ants are no longer solely red ants: You want to become a part of them and permit yourself to drown in deindividualization.  Perceiving that your mind has wandered too far, you forcibly exit the pensive state that the Haunted House intentionally lured you into, and reality begins to reconstruct itself; simultaneously, a subtle sigh re-proves the presence of a vicious bystander.</p>"
];


const INTERACTION_INTRO = 
    "You are aware of the red ants' potential to inflict harm on you; your refusal to possibily suffer the same tragic finale as the pig stimulates your brain to consider the logical next step, which is...";

const INTERACTIONS_WITH_IMAGES = [
{
	imageName: "Red Ant",
	lockSelfAfterClicked: true,
    storyAddition: "<p>Your daring action to approach the red ants successfully draws their attention.  While others continue on their tasks, some of them turn to you and robotically ask, \"Does <span class='hover-text' onclick='reactToButton(this)'>Remedios the Beauty</span> view the world with simplicity or lucidity?\"</p>",
	interactionAddition: "",
	buttonAddition: "Answer the red ants and say \"Simplicity\"|Answer the red ants and say \"Lucidity\"|Tell the red ants that you would answer them later",
	portal: "",
	refreshUponReEntry: true
},
{
    imageName: "Pig",
    lockSelfAfterClicked: false,
    storyAddition: "",
    interactionAddition: "<p>You are smart enough to not disrupt the feast.  You don't want to get in contact with the bitten meat and dark-red blood either.</p>",
    buttonAddition: "",
    portal: "",
    refreshUponReEntry: true
},
{
	imageName: "Gold Fish",
    lockSelfAfterClicked: false,
    storyAddition: "",
    interactionAddition: "<p>The red ants seem to immensely value the gold fish.  You are smart enough to not disrupt the ritual, in avoidance of the same tragic fate as the pig.</p>",
    buttonAddition: "",
    portal: "",
    refreshUponReEntry: true
}
];


const RESPONSES_TO_BUTTONS = [ // include ALL buttons
{
	buttonName: "Go back to the room that had the ephemerals and the coffin",
	lockSelfAfterClicked: true,
	storyAddition: "",
	interactionAddition: "",
	buttonAddition: "",
	portal: "start_page.html",
	refreshUponReEntry: true
},
{
    // special, not actually a button but a span
    buttonName: "Remedios the Beauty",
	lockSelfAfterClicked: true,
	storyAddition: "<p>Curiosity thrives within you, and you are attracted to the name.  The stolid bystander observes meticulously as you fall into the well-decorated trap.  You begin to smell a lethal odor, with its origin sacred but solitary, distant yet solitary.  You begin to cry reluctantly, as you see the mirage of a woman who understood everything with the greatest lucidity of all time, yet devastating everything with her precious simplicity and natural innocence.  As you grow more and more solitary, you suddenly begin to levitate; simultaneously, in the vision you see, that woman floats as well, departing from the foreign land miles under her feet and directing her body towards where she regards as home.  You're different.  You don't know your destination; but deep in your consciousness, you know for sure that whatever upcoming would define your finale.</p>",
	interactionAddition: "",
	buttonAddition: "",
	portal: "ending3.html",
	refreshUponReEntry: true
},
{
    buttonName: "Answer the red ants and say \"Simplicity\"",
	lockSelfAfterClicked: true,
	storyAddition: "<p>The red ants absorb your answer thoroughly.  You cannot tell if your perception is delusional, but you abruptly sense an unwelcoming atmosphere that originates directly from the Haunted House.  You additionally notice one of the red ants, who stands out from the pack with its exasperated glare directed towards you.  Then you involuntarily quiver as it suddenly speaks in an enigmatic tone, \"Your false answer shall be punished.\"  The red ants unite and converge into a giant red hand that forcibily push you into the room named 41X.</p>",
	interactionAddition: "",
	buttonAddition: "",
	portal: "ending_2.html",
	refreshUponReEntry: false
},
{
    buttonName: "Answer the red ants and say \"Lucidity\"",
	lockSelfAfterClicked: true,
	storyAddition: "<p>The red ants absorb your answer thoroughly.  You cannot tell if your observation is delusional, but you notice that, in the prodigious instant when you voiced your answer, all the red ants paused for an ephemeral moment, as if a feeling of bewilderment struck them.  Then one of them, out of your astonishment, says, \"Your answer shall be rewarded, and you shall be permitted into the room where the limit of the function (120 sin x) / (x) as x approaches 0 exists.\"</p>",
	interactionAddition: "",
	buttonAddition: "Go through the door labeled 120",
	portal: "ending_1.html",
	refreshUponReEntry: false
},
{
    buttonName: "Tell the red ants that you would answer them later",
	lockSelfAfterClicked: false,
	storyAddition: "",
	interactionAddition: "<p>The red ants choose to stay where they are, unconcerned to your hesitation to answer their question, as if your answer does not matter to them.  But as you nervously observe their unanimous and unsettling reaction, you realize their behaviors are better characterized as robots: performing their duties perpetually, and solely listening for the answers they anticipate or need.</p>",
	buttonAddition: "",
	portal: "",
	refreshUponReEntry: false
}
];


const IMAGES = [ // include ALL images
{
	// this image of red ant originates from Youtube @japinthegap (https://www.youtube.com/watch?v=mKelk-bEoBI)
	imgSrc: "../images/red_ant.png",
	imgClass: "left-creature",
	imgAlt: "Red Ant",
    entryNumToDisplay: "0"
},
{
    // this image of red ant originates from Youtube @japinthegap (https://www.youtube.com/watch?v=mKelk-bEoBI)
	imgSrc: "../images/red_ant.png",
	imgClass: "right-creature",
	imgAlt: "Red Ant",
    entryNumToDisplay: "0"
},
{
	// this image of pig originates from NPR
	imgSrc: "https://media.npr.org/assets/img/2015/05/04/pig-tales_9780393240245-1-_wide-ff64be1d4945228dd4bf7f4a10cbc7b08ff9ada5-s1100-c50.jpg",
	imgClass: "left-creature",
	imgAlt: "Pig",
    entryNumToDisplay: "1|2"
},
{
    imgSrc: "http://ourmarinespecies.com/wp-content/uploads/2019/06/goldfish_1.jpeg",
    imgClass: "left-creature",
    imgAlt: "Gold Fish",
    entryNumToDisplay: "3~"
},
{
    // this image of red ant originates from Youtube @japinthegap (https://www.youtube.com/watch?v=mKelk-bEoBI)
	imgSrc: "../images/red_ant.png",
	imgClass: "right-creature",
	imgAlt: "Red Ant",
    entryNumToDisplay: "0"
},
{
    // this image of red ant originates from Youtube @japinthegap (https://www.youtube.com/watch?v=mKelk-bEoBI)
	imgSrc: "../images/red_ant.png",
	imgClass: "left-creature",
	imgAlt: "Red Ant",
    entryNumToDisplay: "0"
},
{
    // this image of red ant originates from Youtube @japinthegap (https://www.youtube.com/watch?v=mKelk-bEoBI)
	imgSrc: "../images/red_ant.png",
	imgClass: "right-creature",
	imgAlt: "Red Ant",
    entryNumToDisplay: "0"
}
];


const INITIAL_BUTTONS = 
	"Go back to the room that had the coffin and ephemerals";