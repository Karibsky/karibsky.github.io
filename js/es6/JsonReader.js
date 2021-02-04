export default class JsonReader {
	static async getJsonFromUrl(url) {
		try {
			return Promise.resolve($.ajax({
				url,
				dataType: 'json',
				async: true
			}));
		} 
		catch (error) {
			console.error(error);
		}
	}
}