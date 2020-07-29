import {parse, ParseResult} from 'papaparse';

export default <T>(input: string): Promise<ParseResult<T>> =>
	new Promise((resolve, reject) => {
		parse<T>(input, {
			header: true,
			download: true,
			dynamicTyping: true,
			complete: resolve,
			error: reject
		});
	});
