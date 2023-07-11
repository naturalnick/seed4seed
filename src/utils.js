export function titleCase(text) {
	return text
		.toLowerCase()
		.split(" ")
		.map(function (word) {
			return word.charAt(0).toUpperCase() + word.slice(1);
		})
		.join(" ");
}

export function formatDateAndTime(timestamp) {
	const today = new Date();
	const date = timestamp.toDate();
	if (date.toDateString() === today.toDateString()) return "Today";
	if (date.getDate() - today.getDate() === 1) return "Yesterday";

	const dateString = date.toLocaleDateString("en-US", {
		day: "numeric",
		month: "long",
	});
	return dateString;
}
