export const fetchStoriesByUser = ({stories}, userId) => {
    let result = [];
	for (let id in stories) {
		if (stories[id].userId === userId) {
			result.push(stories[id]);
		}
	}
	return result;
};

export const fetchUserByStory = (story, users) => {
	let fullname;
	Object.values(users).forEach( user => {
		if (user.id === story.userId) {
			fullname = user.fullname;
		}
	});

	return fullname
}
