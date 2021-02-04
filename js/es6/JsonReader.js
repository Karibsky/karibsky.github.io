export default class JsonReader {
	static async getJsonFromUrlAsync(url) {
		try {
			let result = await $.ajax({
				url,
				dataType: 'json',
				async: true,
			});

			return result;
		}
		catch (error) {
			console.error(error);
		}
	}
}