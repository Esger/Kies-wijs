export class SortValueConverter {
	toView(array, config) {
		const factor = (config.direction || 'ascending') === 'ascending' ? 1 : -1;
		const factor2 = (config.direction2 || 'ascending') === 'ascending' ? 1 : -1;
		return array
			.slice(0)
			.sort(function (a, b) {
				const result = (a[config.propertyName] - b[config.propertyName]) * factor;
				const stringA = '' + a[config.propertyName2];
				const stringB = '' + b[config.propertyName2];
				const result2 = ('' + stringA).localeCompare(('' + stringB), 'nl') * factor2;
				const theResult = result || result2;
				return theResult;
			});
	}
}
