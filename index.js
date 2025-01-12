document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the form from submitting the traditional way

    // Get form values
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.get ElementById('message').value;

    // Display a response message
    const responseDiv = document.getElementById('form-response');
    responseDiv.innerHTML = `<p>Thank you, ${name}! Your message has been sent.</p>`;

    // Clear the form
    document.getElementById('contact-form').reset();
});
``` ### Explanation

This code provides a basic structure for an interactive portfolio website tailored for a research consultant. The HTML file (`index.html`) contains the layout and content, the CSS file (`styles.css`) styles the website, and the JavaScript file (`script.js`) adds interactivity to the contact form.

### Features

- **Responsive Navigation**: The navigation bar allows users to jump to different sections of the page.
- **About Section**: A brief introduction to the consultant's background and mission.
- **Portfolio Section**: Displays projects with titles and descriptions.
- **Contact Form**: Users can submit their name, email, and a message. Upon submission, a thank-you message is displayed without refreshing the page.
- **Styling**: Basic styling is applied to enhance the visual appeal of the website.

### Next Steps

You can expand this portfolio by:

- Adding more projects to the portfolio section.
- Including images or links to project reports.
- Enhancing the design with more advanced CSS or frameworks like Bootstrap.
- Implementing backend functionality to handle form submissions if needed.

This foundational code can be customized further to meet specific needs and preferences. ### File Structure
