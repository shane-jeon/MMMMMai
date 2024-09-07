document.getElementById('searchButton').addEventListener('click', async function () {
	const word = document.getElementById('wordInput').value;
	const resultSection = document.getElementById('resultSection');
	const definition = document.getElementById('definition');
	const photo = document.getElementById('photo');
	const lottieContainer = document.getElementById('lottie-container');

	if (word.trim() === '') {
		alert('Please enter an ingredient');
		return;
	}

	// Hide the result and image during loading
	resultSection.style.display = 'none';
	photo.style.display = 'none';

	// Show the Lottie animation while generating
	lottieContainer.style.display = 'block';

	// Initialize the Lottie animation
	const animation = lottie.loadAnimation({
		container: lottieContainer, // The container to render the animation
		renderer: 'svg',
		loop: true,
		autoplay: true,
		path: 'loadanimation.json', // Path to the animation file (same directory)
	});

	// Fetch the recipe text
	const response = await fetch('/api/etymology', {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
		},
		body: JSON.stringify({ word }),
	});

	definition.innerText = ''; // Clear previous recipe text
	const reader = response.body.pipeThrough(new TextDecoderStream()).getReader();
	while (true) {
		const { value, done } = await reader.read();
		if (done) {
			console.log('Stream done');
			break;
		}
		definition.innerText += value; // Append the new text
	}

	// Hide the Lottie animation and show the result
	animation.destroy(); // Stop the animation
	lottieContainer.style.display = 'none'; // Hide the Lottie container
	resultSection.style.display = 'block'; // Show the result section

	// Fetch the generated image based on the new recipe text
	const imageResponse = await fetch('/generated_image?q=' + encodeURIComponent(definition.innerText));
	const imageBlob = await imageResponse.blob(); // Get the image data as a blob
	const imageUrl = URL.createObjectURL(imageBlob); // Create an object URL for the image

	// Set the image source and display the image
	photo.src = imageUrl;
	photo.style.display = 'block'; // Show the image
});
