const portalTexts = [
	"What awaits you...a riveting grand adventure or pending tragic finale?",
	"There is no regret upon a decision in all ways, you must proceed...",
	"Take your next step...towards abyss, or exit?  No one knows..."
];

function generateRandomAnchorText()
{
	var randomNum = parseInt(Math.random() * portalTexts.length);
	return portalTexts[randomNum];
}