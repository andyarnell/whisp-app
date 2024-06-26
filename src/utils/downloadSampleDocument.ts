export const downloadSampleDocument = (filePath: string) => {
	console.log('Downloading sample document...');

	// Create a new anchor element
	const element = document.createElement('a');

	element.setAttribute('href', filePath);

	// Set the download attribute to a specific filename or leave it empty to use the original filename
	element.setAttribute('download', '');

	// Append the anchor to the body
	document.body.appendChild(element);

	// Programmatically click the anchor to trigger the download
	element.click();

	// Remove the anchor from the body once the download is initiated
	document.body.removeChild(element);
};

