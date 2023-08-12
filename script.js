document.getElementById('registrationForm').addEventListener('submit', async function(event) {
    event.preventDefault();

    // Gather form data
    const formData = new FormData(event.target);
    const data = {};
    formData.forEach((value, key) => {
        data[key] = value;
    });

    // Send data as JSON to your API
    try {
        const response = await fetch(event.target.action, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        });

        const jsonResponse = await response.json();

        // Handle response here (e.g., show a success message or handle errors)
        alert(jsonResponse.message);
    } catch (error) {
        alert('There was an error submitting the form.');
        console.error(error);
    }
});
