const HEADERS = [
	"You open your eyes and find yourself in a room whose walls are covered with <span class='hover-text' message='The abyss senses your gaze, and replies with a whisper: &quot;Ephemerals devastate eternity in all ways.&quot;'>ephemerals</span>.",

	"This is where everything began... What prompted your decision to return?"
];


const STORIES = [
	"<p>The instant you open your eyes, you regret your decision; you don't have the courage to close them again, because of the ominous atmosphere created by the sealed coffin in front of you.  You don't know why you're here, don't know why the coffin's here, and shockingly&#8212;ignorant about where you're at.  \"A haunted house...\" You murmur before feeling dazed at that prodigious instant of involuntary realization, as if within that nanosecond, someone forcibly injects that idea into your brain without you knowing who and how.  Scared by (yet curious about) the abnormality of this place, you attempt to focus elsewhere, then you see the four stone walls and the ceiling covered with ephemerals: pure white flowers blossoming, extending their roots along the sides of the walls, creating patterns indescribable yet mesmerizingly appealing.  As you gaze with interest, you notice a wooden door camouflaged in the orderly-disordered pattern of roots and flowers, and another wooden door (at the opposite side of the aforementioned one) distinctively attracting your attention as all roots of the ephemerals abruptly cease their full-scale invasion of the walls around its wooden frame.</p>",

	"<p>Upon your return, the ephemerals are at nowhere to be visible.  Their withered flowers and wrinkled roots occupy the floor, with shadowy shapes disturbing your consciousness.  The coffin remains at the edge of the room; as the only witness to the death of the ephemerals, its pose remains so stolid and unwavering, to the point that you suddenly come to a preposterous conclusion that it has been observing this vicious cycle since time immemorial and forever more.  But why?  It is just a coffin.  You decide to not think further.</p>"
];


const INTERACTION_INTRO = 
	"The threatening atmosphere is still present and it warns your brain to think faster in order to not stay here for too long; your next step is to...";


const INTERACTIONS_WITH_IMAGES = [
{
	imageName: "Coffin",
	lockSelfAfterClicked: true,
	storyAddition: "<p>Courageous as you are, you walk around the coffin and try to examine its detail bit by bit.  Suddenly, you hear something subtle, and you lean closer due to curiosity, while maintaining a distance that is safe in your opinion.  Then you know what you just heard: rapid heartbeats, irregular breaths, shrill weeps, and amplified laughters, echoing and converging together to form a desperately penetrating noise that one would rather suffocate in a vacuum for preventing a second occurrence of such an unpleasant encounter.  Apprehensive, you hastily step back from the coffin.  Simultaneously, a menacing strand of blue fire leaps out from the ground at the place where you were standing a moment ago.  With an angle aiming towards you, it fails to annihilate its target and, instead, hits the edge of the ceiling; what follows its contact with the stony surface is the formation of a hole through ruthless destruction.  After relieving yourself from that prodigiously close contact with death, you see something glowing through the opening, and understand that upstairs can be your next destination.  How?  You stare at the stone wall that is crafted deftly as if one designed it for rock climbing, and perceive a possibility.</p>",
	interactionAddition: "",
	buttonAddition: "Climb up and go through the hole created from the attack of the mysterious blue fire",
	portal: "",
	refreshUponReEntry: false
}
];


const RESPONSES_TO_BUTTONS = [ // include ALL buttons
{
	buttonName: "Touch the coffin",
	lockSelfAfterClicked: true,
	storyAddition: "",
	interactionAddition: "<p>You touch the coffin and nothing seems to happen; does that disappoint you or comfort you?</p>",
	buttonAddition: "Disappointment|Comfort",
	portal: "",
	refreshUponReEntry: false
},
{
	buttonName: "Go through the door covered with ephemerals",
	lockSelfAfterClicked: true,
	storyAddition: "",
	interactionAddition: "",
	buttonAddition: "",
	portal: "red_ant_nest.html",
	refreshUponReEntry: true
},
{
	buttonName: "Go through the door NOT covered with ephemerals",
	lockSelfAfterClicked: true,
	storyAddition: "",
	interactionAddition: "",
	buttonAddition: "",
	portal: "devil_kitchen.html",
	refreshUponReEntry: true
},
{
	buttonName: "Climb up and go through the hole created from the attack of the mysterious blue fire",
	lockSelfAfterClicked: true,
	storyAddition: "",
	interactionAddition: "",
	buttonAddition: "",
	portal: "clock_room.html",
	refreshUponReEntry: true
},
{
	buttonName: "Disappointment",
	lockSelfAfterClicked: true,
	storyAddition: "",
	interactionAddition: "<p>The Haunted House perceives your feeling; but it knows with lucidity that whatever is forthcoming would pull you out from your disappointment...</p>",
	buttonAddition: "",
	portal: "",
	refreshUponReEntry: false
},
{
	buttonName: "Comfort",
	lockSelfAfterClicked: true,
	storyAddition: "",
	interactionAddition: "<p>Comfort comes with a cost, and it will arrive before you are aware of it.</p>",
	buttonAddition: "",
	portal: "",
	refreshUponReEntry: false
}
];


const IMAGES = [ // include ALL images
{
	// this image of coffin originates from Identity V
	imgSrc: "../images/coffin.png",
	imgClass: "img-left",
	imgAlt: "Coffin",
	entryNumToDisplay: "0"
},
{
	// this image of ephemeral originates from Wikipedia
	imgSrc: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Trillium_grandiflorum_at_Backus_Woods.jpg/440px-Trillium_grandiflorum_at_Backus_Woods.jpg",
	imgClass: "img-right",
	imgAlt: "Emphemeral",
	entryNumToDisplay: "0"
}
];


const INITIAL_BUTTONS = 
	"Touch the coffin|Go through the door covered with ephemerals|Go through the door NOT covered with ephemerals";