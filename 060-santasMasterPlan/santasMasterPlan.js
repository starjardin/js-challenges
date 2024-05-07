function getAttendees(peopleInvited, responses) {
	const declined = responses
		.filter((e) => e.response === "declined")
		.map((e) => e.name);
	return peopleInvited.filter((p) => !declined.includes(p));
}
