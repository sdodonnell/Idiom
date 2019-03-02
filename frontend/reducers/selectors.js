export const fetchStoriesByUser = ({stories}, userId) => {
    let result = [];
	for (let id in stories) {
		if (stories[id].userId === userId) {
			result.push(stories[id]);
		}
	}
	return result;
};
