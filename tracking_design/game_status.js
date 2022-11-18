/* setting the variables for game status */

// for recording endings (String)
if (!localStorage.isEndingOneReached)
	localStorage.isEndingOneReached = "false";
if (!localStorage.isEndingOneReached)
	localStorage.isEndingTwoReached = "false";
if (!localStorage.isEndingOneReached)
	localStorage.isEndingThreeReached = "false";
if (!localStorage.isEndingOneReached)
	localStorage.isEndingFourReached = "false";
if (!localStorage.isEndingOneReached)
	localStorage.isEndingFiveReached = "false";

	
// these tracking variables below will be reset upon the start of a new game, and might change during the course of the game (String)
if (!localStorage.hasKey)
	localStorage.hasKey = "false"; // for trivials from the developer in the backroom of dream merchant laboratory
if (!localStorage.hasTouchedCoffin)
	localStorage.hasTouchedCoffin = "false"; // for ending#1 & #5, locked when the user touches the coffin
if (!localStorage.hasTouchedEphemerals)
	localStorage.hasTouchedEphemerals = "false"; // for ending#1, will change the concluding paragraph
if (!localStorage.hasTouchedChest)
	localStorage.hasTouchedChest = "false"; // for ending#2, destinated to reach if the chest monster is touched; true only when it is touched
if (!localStorage.hasTouchedPotions)
	localStorage.hasTouchedPotions = "false"; // for ending#3, destinated to reach if 3 or more potions are touched; true only when 3 or more is touched
if (!localStorage.hasTouchedEternalFire)
	localStorage.hasTouchedEternalFire = "false"; // for locking ending#5
if (!localStorage.hasTouchedStoveFire)
	localStorage.hasTouchedStoveFire = "false";
if (!localStorage.hasAnsweredRedAntQ1)
	localStorage.hasAnsweredRedAntQ1 = "false";
if (!localStorage.hasAnsweredRedAntQ2)
	localStorage.hasAnsweredRedAntQ2 = "false";


// using String, use parseInt to increment later
if (!localStorage.startPageEntryNum)
	localStorage.startPageEntryNum = "0";
if (!localStorage.redAntNestEntryNum)
	localStorage.redAntNestEntryNum = "0";
if (!localStorage.devilKitchenEntryNum)
	localStorage.devilKitchenEntryNum = "0";
if (!localStorage.chestRoomEntryNum)
	localStorage.chestRoomEntryNum = "0";
if (!localStorage.spiderNestEntryNum)
	localStorage.spiderNestEntryNum = "0";
if (!localStorage.hallwayEntryNum)
	localStorage.hallwayEntryNum = "0";
if (!localStorage.burialChamberEntryNum)
	localStorage.burialChamberEntryNum = "0";
if (!localStorage.theaterEntryNum)
	localStorage.theaterEntryNum = "0";
if (!localStorage.clockRoomEntryNum)
	localStorage.clockRoomEntryNum = "0";
if (!localStorage.dreamMerchantLaboratoryEntryNum)
	localStorage.dreamMerchantLaboratoryEntryNum = "0";
if (!localStorage.dreamMerchantLaboratoryBackRoomEntryNum)
	localStorage.dreamMerchantLaboratoryBackRoomEntryNum = "0";
if (!localStorage.ending1EntryNum)
	localStorage.ending1EntryNum = "0";
if (!localStorage.ending2EntryNum)
	localStorage.ending2EntryNum = "0";


// buttons saved when revealed
if (!localStorage.startPageButtons || localStorage.startPageEntryNum === "0")
	localStorage.startPageButtons = "";
if (!localStorage.redAntNestButtons || localStorage.redAntNestEntryNum === "0")
	localStorage.redAntNestButtons = "";
if (!localStorage.devilKitchenButtons || localStorage.devilKitchenEntryNum === "0")
	localStorage.devilKitchenButtons = "";
if (!localStorage.chestRoomButtons || localStorage.chestRoomEntryNum === "0")
	localStorage.chestRoomButtons = "";
if (!localStorage.spiderNestButtons || localStorage.spiderNestEntryNum === "0")
	localStorage.spiderNestButtons = "";
if (!localStorage.hallwayButtons || localStorage.hallwayEntryNum === "0")
	localStorage.hallwayButtons = "";
if (!localStorage.burialChamberButtons || localStorage.burialChamberEntryNum === "0")
	localStorage.burialChamberButtons = "";
if (!localStorage.theaterButtons || localStorage.theaterEntryNum === "0")
	localStorage.theaterButtons = "";
if (!localStorage.clockRoomButtons || localStorage.clockRoomEntryNum === "0")
	localStorage.clockRoomButtons = "";
if (!localStorage.dreamMerchantLaboratoryButtons || localStorage.dreamMerchantLaboratoryEntryNum === "0")
	localStorage.dreamMerchantLaboratoryButtons = "";
if (!localStorage.dreamMerchantLaboratoryBackRoomButtons || localStorage.dreamMerchantLaboratoryBackRoomEntryNum === "0")
	localStorage.dreamMerchantLaboratoryBackRoomButtons = "";


if (!localStorage.itemsToBeLocked) // a running record of buttons(innerHTML)/images(alt) that should be disabled from clicking upon re-entry of a location, separated by "|"
	localStorage.itemsToBeLocked = "";


if (!localStorage.previousLocation)
	localStorage.previousLocation = "";