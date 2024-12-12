/* about.js */

function createForm(e) {
    const form = document.createElement("form");
    /* Create the name input */
    const nameRow = document.createElement("div");
    nameRow.setAttribute("class", "form-row");
    const nameLabel = document.createElement("label");
    nameLabel.setAttribute("for", "full-name");
    nameLabel.textContent = `Name`;
    const nameInput = document.createElement("input");
    nameInput.setAttribute("type", "text");
    nameInput.setAttribute("id", "full-name");
    nameInput.setAttribute("name", "full-name");
    nameInput.setAttribute("placeholder", "John Smith");
    nameInput.required = true;
    nameRow.appendChild(nameLabel);
    nameRow.appendChild(nameInput);
    /* Create the mail input */
    const mailRow = document.createElement("div");
    mailRow.setAttribute("class", "form-row");
    const mailLabel = document.createElement("label");
    mailLabel.setAttribute("for", "email");
    mailLabel.textContent = `Email`;
    const mailInput = document.createElement("input");
    mailInput.setAttribute("type", "email");
    mailInput.setAttribute("id", "email");
    mailInput.setAttribute("name", "email");
    mailInput.setAttribute("placeholder", "john.smith@example.com");
    mailInput.required = true;
    mailRow.appendChild(mailLabel);
    mailRow.appendChild(mailInput);
    /* Create the phone number input */
    const phoneRow = document.createElement("div");
    phoneRow.setAttribute("class", "form-row");
    const phoneLabel = document.createElement("label");
    phoneLabel.setAttribute("for", "number");
    phoneLabel.textContent = `Phone`;
    const phoneInput = document.createElement("input");
    phoneInput.setAttribute("type", "tel");
    phoneInput.setAttribute("id", "number");
    phoneInput.setAttribute("name", "number");
    phoneInput.setAttribute("placeholder", "(123) 456-7890");
    phoneInput.required = true;
    phoneRow.appendChild(phoneLabel);
    phoneRow.appendChild(phoneInput);
    /* Create the textarea for eventual allergies */
    const textRow = document.createElement("div");
    textRow.setAttribute("class", "form-row");
    const textLabel = document.createElement("label");
    textLabel.setAttribute("for", "message");
    textLabel.textContent = `Message`
    const textInput = document.createElement("textarea");
    textInput.setAttribute("id", "message");
    textInput.setAttribute("name", "message");
    const instruction = document.createElement("div");
    instruction.setAttribute("class", "instructions");
    instruction.textContent = `Please let us know if you have any allergies or special dietary needs.`
    textRow.appendChild(textLabel);
    textRow.appendChild(textInput);
    /* Create a submit button */
    const buttonRow = document.createElement("div");
    buttonRow.setAttribute("class", "form-row");
    const submitBtn = document.createElement("button");
    submitBtn.textContent = `Reserve a table`;
    buttonRow.appendChild(submitBtn);
    form.appendChild(nameRow);
    form.appendChild(mailRow);
    form.appendChild(phoneRow);
    form.appendChild(textRow);
    form.appendChild(instruction);
    form.appendChild(buttonRow);
    e.appendChild(form);
}

function contact() {
    let address = `1987, Ness Street, Stone Malone.`
    let phone = `(123) 456-7890`
    let email = `contact@thehideout.com`

    /* getter methods */
    const getAddress = () => address;
    const getPhone = () => phone;
    const getEmail = () => email;

    return { getAddress, getPhone, getEmail };
}

function createContact(e) {
    const contactDiv = document.createElement("div");
    contactDiv.setAttribute("class", "contact");

    const info = contact();
    /* Add title */
    const title = document.createElement("h2");
    title.textContent = `Contact Information`;
    /* Add address row */
    const addressRow = document.createElement("div");
    addressRow.setAttribute("class", "contact-row");
    const addressIcon = document.createElement("div");
    addressIcon.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                            <title>map</title>
                            <path d="M15,19L9,16.89V5L15,7.11M20.5,3C20.44,3 20.39,3 20.34,3L15,5.1L9,3L3.36,4.9C3.15,
                            4.97 3,5.15 3,5.38V20.5A0.5,0.5 0 0,0 3.5,21C3.55,21 3.61,21 3.66,20.97L9,18.9L15,21L20.64,19.1C20.85,
                            19 21,18.85 21,18.62V3.5A0.5,0.5 0 0,0 20.5,3Z" />
                            </svg>`
    const address = document.createElement("p");
    address.textContent = info.getAddress();
    addressRow.appendChild(addressIcon);
    addressRow.appendChild(address);
    /* Add phone row */
    const phoneRow = document.createElement("div");
    phoneRow.setAttribute("class", "contact-row");
    const phoneIcon = document.createElement("div");
    phoneIcon.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                            <title>phone-classic</title>
                            <path d="M12,3C7.46,3 3.34,4.78 0.29,7.67C0.11,7.85 0,8.1 0,8.38C0,8.66 0.11,8.91 0.29,
                            9.09L2.77,11.57C2.95,11.75 3.2,11.86 3.5,11.86C3.75,11.86 4,11.75 4.18,11.58C4.97,10.84 5.87,
                            10.22 6.84,9.73C7.17,9.57 7.4,9.23 7.4,8.83V5.73C8.85,5.25 10.39,5 12,5C13.59,5 15.14,5.25 16.59,
                            5.72V8.82C16.59,9.21 16.82,9.56 17.15,9.72C18.13,10.21 19,10.84 19.82,11.57C20,11.75 20.25,11.85 20.5,
                            11.85C20.8,11.85 21.05,11.74 21.23,11.56L23.71,9.08C23.89,8.9 24,8.65 24,8.37C24,8.09 23.88,7.85 23.7,
                            7.67C20.65,4.78 16.53,3 12,3M9,7V10C9,10 3,15 3,18V22H21V18C21,15 15,10 15,10V7H13V9H11V7H9M12,12A4,4 0 0,
                            1 16,16A4,4 0 0,1 12,20A4,4 0 0,1 8,16A4,4 0 0,1 12,12M12,13.5A2.5,2.5 0 0,0 9.5,16A2.5,2.5 0 0,0 12,
                            18.5A2.5,2.5 0 0,0 14.5,16A2.5,2.5 0 0,0 12,13.5Z" />
                            </svg>`
    const phone = document.createElement("p");
    phone.textContent = info.getPhone();
    phoneRow.appendChild(phoneIcon);
    phoneRow.appendChild(phone);
    /* Add mail row */
    const mailRow = document.createElement("div");
    mailRow.setAttribute("class", "contact-row");
    const mailIcon = document.createElement("div");
    mailIcon.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                            <title>mailbox-open</title>
                            <path d="M8,4A5,5 0 0,0 3,9V18H1V20H21A2,2 0 0,0 23,18V9A5,5 0 0,0 18,4H8M8,6A3,3 0 0,1 11,9V18H5V9A3,3 0 0,
                            1 8,6M14,11H20V15H18V13H14V11Z" />
                            </svg>`
    const mail = document.createElement("p");
    mail.textContent = info.getEmail();
    mailRow.appendChild(mailIcon);
    mailRow.appendChild(mail);
    contactDiv.appendChild(title);
    contactDiv.appendChild(addressRow);
    contactDiv.appendChild(phoneRow);
    contactDiv.appendChild(mailRow);
    e.appendChild(contactDiv);
}

function createBusinessHour(e) {
    const hourDiv = document.createElement("div");
    hourDiv.setAttribute("class", "hour");

    const title = document.createElement("h2");
    title.textContent = `Business Hour`;
    const monFri = document.createElement("p");
    monFri.textContent = `Mon - Fri: 10:00 - 01:30`;
    const sat = document.createElement("p");
    sat.textContent = `Sat: 10:00 - 02:30`;
    const sun = document.createElement("p");
    sun.textContent = `Sun: 12:00 -01:30`;
    const closed = document.createElement("p");
    closed.textContent = `Tue: Closed`;

    hourDiv.appendChild(title);
    hourDiv.appendChild(monFri);
    hourDiv.appendChild(sat);
    hourDiv.appendChild(sun);
    hourDiv.appendChild(closed);
    e.appendChild(hourDiv);
}

export function about() {
    const contentDiv = document.querySelector("#content");
    const container = document.createElement("div");
    container.setAttribute("class", "container");
    contentDiv.appendChild(container);

    const about = document.createElement("div");
    about.setAttribute("class", "about");
    container.appendChild(about);

    /* Add a form for reserving a table */
    createForm(about);
    /* Add contact information */
    createContact(about);
    /* Add hour information */
    createBusinessHour(about);
}