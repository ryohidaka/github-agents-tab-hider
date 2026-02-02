import "./style.css"; // WXT will automatically inject this CSS

export default defineContentScript({
	matches: ["*://github.com/*/*"],
	// Inject CSS as early as possible
	runAt: "document_start",

	main() {
		// No logic needed here as CSS handles the hiding.
		// You can leave this empty or use it for logging.
	},
});
