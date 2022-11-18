function initialize(location)
{
	currentLocation = location; // make the parameter globally accessible

	entryNum = 0;
	logEntry(location);

	headerOutput = document.getElementById("header");
	storyOutput = document.getElementById("story");
	interactionOutput = document.getElementById("interaction");
	buttonOutput = document.getElementById("button-holder");

	header = "";
	story = ""; // new content appended AFTER the original
	interaction = ""; // new content appended BEFORE the original
	buttonsToAppend = ""; // update constantly
	nextDestination = ""; // update constantly

	updateInfoUponEntry();

	displayImages();
	display();
}

function display() // universal front end
{
	headerOutput.innerHTML = header;
	storyOutput.innerHTML = story;
	interactionOutput.innerHTML = interaction;
	updateButtons();
	if (nextDestination.length > 0) // not empty string
	{
		lockAllClickableItems();
		addPortal();
	}
}

function displayImages() // setAttribute is soooooo useful
{
	for (let i = 0; i < IMAGES.length; i++)
	{
		if (shouldImageBeDisplayed(i))
		{
			let image = document.createElement("img");
			image.setAttribute("src", IMAGES[i].imgSrc);
			image.setAttribute("class", IMAGES[i].imgClass);
			image.setAttribute("alt", IMAGES[i].imgAlt);
			if (entryNum > 1 && localStorage.itemsToBeLocked.includes(currentLocation + ":" + image.alt))
				image.setAttribute("onclick", "");
			else
				image.setAttribute("onclick", "reactToImage(this);");
			storyOutput.parentNode.insertBefore(image, storyOutput);
		}
	}
}

function updateButtons() // front end, helper of display
{
	if (buttonsToAppend.length > 0)
	{
		let buttons = buttonsToAppend.split("|");
		for (let i = 0; i < buttons.length; i++)
		{
			let button = document.createElement("button");
			button.innerHTML = buttons[i];
			if (entryNum > 1 && localStorage.itemsToBeLocked.includes(currentLocation + ":" + button.innerHTML))
			{
				button.setAttribute("onclick", ""); // double security OR for span if applicable
				button.disabled = true;
			}
			else
			{
				button.setAttribute("onclick", "reactToButton(this);")
			}
			buttonOutput.appendChild(button);
		}
		buttonsToAppend = "";
	}
}

function addPortal() // front end, helper of display
{
	var anchor = document.createElement("a");
	anchor.href = nextDestination;
	if (entryNum !== 0)
		anchor.innerHTML = generateRandomAnchorText();
	else
		anchor.innerHTML = "You have decided to restart; fortuntely such a behavior is allowed for a game.";
	storyOutput.appendChild(anchor);
	localStorage.previousLocation = currentLocation; // the player would be required to click the anchor element, so we can set the localStorage variable for previousLocation right here
}

let lockAllClickableItems = () => // both front end and back end? helper of display
{
	var images = document.getElementsByTagName("img");
	var buttons = document.getElementsByTagName("button");
	var greaterLen = (images.length > buttons.length) ? images.length : buttons.length;
	for (let i = 0; i < greaterLen; i++)
	{
		if (i < images.length)
			images[i].setAttribute("onclick", "");
		if (i < buttons.length)
		{
			buttons[i].setAttribute("onclick", "");
			buttons[i].disabled = true;
		}
	}
}

/* After this line, all methods are responsible back end manipulations */

function logEntry(location) // back end, for localStorage of entryNum
{
	var temp = 0;
	switch (location)
	{
		case "start_page":
			temp = parseInt(localStorage.startPageEntryNum) + 1;
			localStorage.startPageEntryNum = temp + "";
			entryNum = parseInt(localStorage.startPageEntryNum);
			break;
		case "red_ant_nest":
			temp = parseInt(localStorage.redAntNestEntryNum) + 1;
			localStorage.redAntNestEntryNum = temp + "";
			entryNum = parseInt(localStorage.redAntNestEntryNum);
			break;
		case "devil_kitchen":
			temp = parseInt(localStorage.devilKitchenEntryNum) + 1;
			localStorage.devilKitchenEntryNum = temp + "";
			entryNum = parseInt(localStorage.devilKitchenEntryNum);
			break;
		case "clock_room":
			temp = parseInt(localStorage.clockRoomEntryNum) + 1;
			localStorage.clockRoomEntryNum = temp + "";
			entryNum = parseInt(localStorage.clockRoomEntryNum);
			break;
		case "spider_nest":
			temp = parseInt(localStorage.spiderNestEntryNum) + 1;
			localStorage.spiderNestEntryNum = temp + "";
			entryNum = parseInt(localStorage.spiderNestEntryNum);
			break;
		case "chest_room":
			temp = parseInt(localStorage.chestRoomEntryNum) + 1;
			localStorage.chestRoomEntryNum = temp + "";
			entryNum = parseInt(localStorage.chestRoomEntryNum);
			break;
		case "hallway":
			temp = parseInt(localStorage.hallwayEntryNum) + 1;
			localStorage.hallwayEntryNum = temp + "";
			entryNum = parseInt(localStorage.hallwayEntryNum);
			break;
		case "burial_chamber":
			temp = parseInt(localStorage.burialChamberEntryNum) + 1;
			localStorage.burialChamberEntryNum = temp + "";
			entryNum = parseInt(localStorage.burialChamberEntryNum);
			break;
		case "theater":
			temp = parseInt(localStorage.theaterEntryNum) + 1;
			localStorage.theaterEntryNum = temp + "";
			entryNum = parseInt(localStorage.theaterEntryNum);
			break;
		case "dream_merchant_laboratory":
			temp = parseInt(localStorage.dreamMerchantLaboratoryEntryNum) + 1;
			localStorage.dreamMerchantLaboratoryEntryNum = temp + "";
			entryNum = parseInt(localStorage.dreamMerchantLaboratoryEntryNum);
			break;
		case "ending_1":
			temp = parseInt(localStorage.ending1EntryNum) + 1;
			localStorage.ending1EntryNum = temp + "";
			entryNum = parseInt(localStorage.ending1EntryNum);
			break;
		case "ending_2":
			temp = parseInt(localStorage.ending2EntryNum) + 1;
			localStorage.ending2EntryNum = temp + "";
			entryNum = parseInt(localStorage.ending2EntryNum);
			break;
		default:
			console.log("Location does not exist.");
	}
}

function updateTextDataButtons() // back end, for localStorage of buttons
{ // used when buttons to be displayed upon entry increase in number
	switch (currentLocation)
	{
		case "start_page":
			localStorage.startPageButtons += "|" + buttonsToAppend;
			break;
		case "red_ant_nest":
			localStorage.redAntNestButtons += "|" + buttonsToAppend;
			break;
		case "devil_kitchen":
			localStorage.devilKitchenButtons += "|" + buttonsToAppend;
			break;
		case "clock_room":
			localStorage.clockRoomButtons += "|" + buttonsToAppend;
			break;
		case "spider_nest":
			localStorage.spiderNestButtons += "|" + buttonsToAppend;
			break;
		case "chest_room":
			localStorage.chestRoomButtons += "|" + buttonsToAppend;
			break;
		case "hallway":
			localStorage.hallwayButtons += "|" + buttonsToAppend;
			break;
		case "burial_chamber":
			localStorage.burialChamberButtons += "|" + buttonsToAppend;
			break;
		case "theater":
			localStorage.theaterButtons += "|" + buttonsToAppend;
			break;
		case "dream_merchant_laboratory":
			localStorage.dreamMerchantLaboratoryButtons += "|" + buttonsToAppend;
			break;
		default:
			console.log("Location does not exist.");
	}
}

function updateInfoUponEntry() // back end, for initialize
{
	var index = entryNum - 1;
	if (index >= HEADERS.length)
		index = HEADERS.length - 1;
	header = HEADERS[index];
	story = STORIES[index];
	interaction = INTERACTION_INTRO;
	buttonsToAppend = findLocalStorageButtons();
}

function reactToButton(buttonClicked) // takes in a button element as argument
{
	for (let i = 0; i < RESPONSES_TO_BUTTONS.length; i++)
	{
		let current = RESPONSES_TO_BUTTONS[i].buttonName;
		if (current.localeCompare(buttonClicked.innerHTML) === 0) // if buttonName matches the innerHTML of the button
		{
			if (RESPONSES_TO_BUTTONS[i].lockSelfAfterClicked)
				buttonClicked.disabled = true;
			story += RESPONSES_TO_BUTTONS[i].storyAddition;
			interaction = RESPONSES_TO_BUTTONS[i].interactionAddition + interaction;
			buttonsToAppend = RESPONSES_TO_BUTTONS[i].buttonAddition;
			if (buttonsToAppend.length > 0)
				updateTextDataButtons();
			if ("".localeCompare(RESPONSES_TO_BUTTONS[i].portal) !== 0) // if portal is NOT empty string
				nextDestination = RESPONSES_TO_BUTTONS[i].portal;
			if (!RESPONSES_TO_BUTTONS[i].refreshUponReEntry)
				localStorage.itemsToBeLocked += currentLocation + ":" + buttonClicked.innerHTML + "|";
			break;
		}
	}
	display();
}

function reactToImage(imageClicked) // takes in an img element as argument
{
	for (let i = 0; i < INTERACTIONS_WITH_IMAGES.length; i++)
	{
		let current = INTERACTIONS_WITH_IMAGES[i].imageName;
		if (current.localeCompare(imageClicked.alt) === 0) // if buttonContent matches the innerHTML of the button
		{
			if (INTERACTIONS_WITH_IMAGES[i].lockSelfAfterClicked)
				imageClicked.setAttribute("onclick", "");
			story += INTERACTIONS_WITH_IMAGES[i].storyAddition;
			interaction = INTERACTIONS_WITH_IMAGES[i].interactionAddition + interaction;
			buttonsToAppend = INTERACTIONS_WITH_IMAGES[i].buttonAddition;
			if (buttonsToAppend.length > 0) // if there are buttons to append
				updateTextDataButtons();
			if ("".localeCompare(INTERACTIONS_WITH_IMAGES[i].portal) !== 0) // if portal is NOT empty string
				nextDestination = RESPONSES_TO_BUTTONS[i].portal;
			if (!INTERACTIONS_WITH_IMAGES[i].refreshUponReEntry) // 
				localStorage.itemsToBeLocked += currentLocation + ":" + imageClicked.alt + "|";
			break;
		}
	}
	display();
}

function findLocalStorageButtons()
{
	switch (currentLocation)
	{
		case "start_page":
			if (entryNum === 1)
				localStorage.startPageButtons = INITIAL_BUTTONS;
			return localStorage.startPageButtons;
		case "red_ant_nest":
			if (entryNum === 1)
				localStorage.redAntNestButtons = INITIAL_BUTTONS;
			return localStorage.redAntNestButtons;
		case "devil_kitchen":
			if (entryNum === 1)
				localStorage.devilKitchenButtons = INITIAL_BUTTONS;
			return localStorage.devilKitchenButtons;
		case "clock_room":
			if (entryNum === 1)
				localStorage.clockRoomButtons = INITIAL_BUTTONS;
			return localStorage.clockRoomButtons;
		case "spider_nest":
			if (entryNum === 1)
				localStorage.spiderNestButtons = INITIAL_BUTTONS;
			return localStorage.spiderNestButtons;
		case "chest_room":
			if (entryNum === 1)
				localStorage.chestRoomButtons = INITIAL_BUTTONS;
			return localStorage.chestRoomButtons;
		case "hallway":
			if (entryNum === 1)
				localStorage.hallwayButtons = INITIAL_BUTTONS;
			return localStorage.hallwayButtons;
		case "burial_chamber":
			if (entryNum === 1)
				localStorage.burialChamberButtons = INITIAL_BUTTONS;
			return localStorage.burialChamberButtons;
		case "theater":
			if (entryNum === 1)
				localStorage.theaterButtons = INITIAL_BUTTONS;
			return localStorage.theaterButtons;
		case "dream_merchant_laboratory":
			if (entryNum === 1)
				localStorage.dreamMerchantLaboratoryButtons = INITIAL_BUTTONS;
			return localStorage.dreamMerchantLaboratoryButtons;
		default:
			return "";
	}
}

let shouldImageBeDisplayed = (imageIndex) => // the imageIndex is associated with IMAGES array
{
	let numAsStr = IMAGES[imageIndex].entryNumToDisplay;
	if (numAsStr === "0")
	{
		return true;
	}
	else
	{
		if (numAsStr.includes("" + entryNum))
		{
			return true;
		}
		else
		{
			if (numAsStr.includes("~"))
			{
				let index = numAsStr.search("~");
				// the index before "index" is the specified entry number we want
				let extractedEntryNum = numAsStr.substring(index-1, index);
				if (entryNum >= parseInt(extractedEntryNum))
				{
					return true;
				}
				else
				{
					return false;
				}
			}
		}
	}
}


function restart()
{
	entryNum = 0;

	// binary values (yes/no), reset all to false after one complete exploration
	localStorage.hasKey = "false"; // for trivials from the developer in the backroom of dream merchant laboratory
	localStorage.hasTouchedCoffin = "false"; // for ending#1 & #5, locked when the user touches the coffin
	localStorage.hasTouchedEphemerals = "false"; // for ending#1, will change the concluding paragraph
	localStorage.hasTouchedChest = "false"; // for ending#2, destinated to reach if the chest monster is touched; true only when it is touched
	localStorage.hasTouchedPotions = "false"; // for ending#3, destinated to reach if 3 or more potions are touched; true only when 3 or more is touched
	localStorage.hasTouchedEternalFire = "false"; // for locking ending#5
	localStorage.hasTouchedStoveFire = "false";

	// tracking number of entry for a specific location, reset all to zero after one complete exploration
	localStorage.startPageEntryNum = "0";
	localStorage.redAntNestEntryNum = "0";
	localStorage.devilKitchenEntryNum = "0";
	localStorage.chestRoomEntryNum = "0";
	localStorage.spiderNestEntryNum = "0";
	localStorage.hallwayEntryNum = "0";
	localStorage.burialChamberEntryNum = "0";
	localStorage.theaterEntryNum = "0";
	localStorage.clockRoomEntryNum = "0";
	localStorage.dreamMerchantLaboratoryEntryNum = "0";
	localStorage.dreamMerchantLaboratoryBackRoomEntryNum = "0";
	localStorage.ending1EntryNum = "0";
	localStorage.ending2EntryNum = "0";

	// buttons are refreshed along with the entryNum

	localStorage.itemsToBeLocked = "";

	localStorage.previousLocation = "";

	nextDestination = "start_page.html";

	display();
}