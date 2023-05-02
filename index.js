// Wait for the page to load before running the script
window.onload = () => {
	document.querySelectorAll("main").forEach((main) => {
		main.classList.add("fade-in");
	});

	let showMore = true;

	// Add event listener to the show more button
	document.getElementById("show-more").addEventListener("click", () => {
		if (showMore) {
			// Select all elements with the class name "hidden"
			const hiddenElements = document.querySelectorAll(".hidden");

			// Loop through the hidden elements and replace the "hidden" class with "show"
			hiddenElements.forEach((element) => {
				element.classList.replace("hidden", "show");
			});

			document.getElementById("show-more").innerHTML = "SHOW LESS";

			showMore = false;
		} else {
			// Select the first element with the class name "show" and replace the "show" class with "hidden"
			const shownElement = document.querySelectorAll(".show");
			if (shownElement) {
				shownElement.forEach((element) => {
					element.classList.replace("show", "hidden");
				});
			}

			document.getElementById("show-more").innerHTML =
				"VIEW FULL PROJECT";

			showMore = true;
		}
	});
};
