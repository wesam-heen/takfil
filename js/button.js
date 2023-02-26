// for select text by click button
const button1 = document.getElementById("button1");
const button2 = document.getElementById("button2");
const button3 = document.getElementById("button3");
const button4 = document.getElementById("button4");
const button5 = document.getElementById("button5");
const button6 = document.getElementById("button6");
const button7 = document.getElementById("button7");
const button8 = document.getElementById("button8");
const output = document.getElementById("output");

button1.addEventListener("click", () => {
  output.innerHTML = ` <p>Certificate Attestation Services</p>
  <p>Commercial invoice attestation services</p>
  <p>Family statement attestation services</p>
  <p>Marriage contract attestation services</p>
  <p style="color: #888">From Ministry of Foreign Affairs UAE</p>`;
});

button2.addEventListener("click", () => {
  output.innerHTML = `
  <p>Establishing Companies in Free Zone</p>
  <p>Processing bank accounts</p>
  <p>Providing a citizen's sponsor and service agent</p>
  <p>Issuance of commercial licenses</p>
  <p>Renewal of commercial licenses</p>
  <p style="color: #888">All Ministry of Labour Services</p>
  <p style="color: #888">All transactions in the Ministry of Immigration and Citizenship</p>
  <p></p>
  
  `;
});

button3.addEventListener("click", () => {
  output.innerHTML = `
  <p>Printing Medical Examination</p>
  <p>Emirati Id Printing</p>
  <p>Printing Articles of Association </p>
  <p>Printing Civil Business Contracts</p>
  <p>Printing Immigration and Nationality Transactions</p>
  <p>Printing Labour and Workers Transactions</p>
  
  `;
});
button4.addEventListener("click", () => {
  output.innerHTML = `
  <p>VAT</p>
  <p>Trademark Registration</p>
  <p>Products Registration</p>
  <p>Amnesty Services</p>
  `;
});
button5.addEventListener("click", () => {
  output.innerHTML = `
  We specialize in completing transactions and procedures for businessmen and companies to facilitate documents clearance for our customers
All procedures related to companies and businessmen government or private
Our services include renewal of commercial licenses, renewal of residencies, and opening of files in government institutions, follow-up of transactions of the Ministry of Labour, Immigration and Passports, as well as all investment consultations in all economic fields, through the best team in this field

  `;
});

let buttons = document.querySelectorAll(".our-services .buttons button");

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    buttons.forEach((button) => {
      button.classList.remove("active");
    });
    button.classList.add("active");
  });
});
