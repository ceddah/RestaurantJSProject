export default function contactTab() {
    const contact = document.createElement('div');
    contact.setAttribute('id', 'contact');

    const contactTitleContainer = document.createElement('div');
    contactTitleContainer.classList.add('contact-title');
    const contactTitleEl = document.createElement('h1');
    contactTitleEl.classList.add('title');
    contactTitleEl.textContent = 'Contact Us';
    contactTitleContainer.appendChild(contactTitleEl);
    contact.appendChild(contactTitleContainer);

    const form = document.createElement('form');
    form.innerHTML = `
        <h3>Send Us A Message</h3>
        <div class="form-control">
            <label for="subject">Subject:</label>
            <input type="text" id="subject" required autocomplete="off">
        </div>

        <div class="form-control">
            <label for="email">Email:</label>
            <input type="email" id="email" required autocomplete="off">
        </div>

        <div class="form-control">
            <label for="message">Message:</label>
            <textarea id="message" cols="30" rows="10" required autocomplete="off"></textarea>
        </div>

        <button type="submit">Send Message</button>
    `;
    contact.appendChild(form);
    
    return contact;
}