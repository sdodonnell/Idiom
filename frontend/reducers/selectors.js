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

export const selectRandomFourStories = (stories) => {
	let randomStories = []
	let keys = Object.keys(stories)
	for (let i = 0; i < 4; i++) {
		let keyIndex = Math.floor(Math.random() * keys.length);
		let key = keys[keyIndex];
		randomStories.push(stories[key]);
		keys.splice(keyIndex, 1)
	}
	return randomStories
}

export const selectPopularStories = ({stories}) => {
	const sortedStories = Object.values(stories).sort( (a, b) => a.numLikes - b.numLikes)
	return sortedStories.slice(0, 4)
}

export const selectBookmarkedStories = (state) => {
	const bookmarkedStories = [];
	const bookmarks = state.entities.bookmarks
	for (let id in bookmarks) {
		if (bookmarks[id] === state.session.id) {
			bookmarkedStories.push(bookmarks[id])
		}
	}
	return bookmarkedStories
}