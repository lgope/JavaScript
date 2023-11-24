const getYoutubeEmbedUrl = (url) => {
	const youtubeVideoId = url.match(
		/^.*(?:(?:youtu\.be\/|v\/|vi\/|u\/\w\/|embed\/)|(?:(?:watch)?\?v(?:i)?=|\&v(?:i)?=))([^#\&\?]*).*/,
	);

	return `https://www.youtube.com/embed/${youtubeVideoId[1]}`;
};
