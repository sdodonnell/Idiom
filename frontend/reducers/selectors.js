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
	let userId;
	if (!story) return null;
	Object.values(users).forEach( user => {
		if (user.id === story.userId) {
			userId = user.id;
		}
	});

	return userId
}

export const fetchUsersByComments = ({users}, {comments}) => {
	let commentAuthors = [];
	for (let id in comments) {
		commentAuthors.push(users[comments[id].userId])
	}
	if (commentAuthors.includes(undefined)) return null
	return commentAuthors
}