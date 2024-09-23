let getElement = (id) => document.getElementById(id);

let getValue = (id) => parseFloat(document.getElementById(id).value);

let getInnerTextValue = (id) =>
  parseFloat(document.getElementById(id).innerText);

let setTextValue = (id, value) => (getElement(id).innerText = value);

let setInputValue = (id, value) => (getElement(id).value = value);

let mainBalance = getInnerTextValue("mainBalance");

function handleClickEvent(elementId, amountID, balanceId, type) {
  getElement(elementId).addEventListener("click", () => {
    let amount = getValue(amountID);
    let balance = getInnerTextValue(balanceId);
    if (isNaN(amount) || amount <= 0) {
      alert("Enter Valid number");
      setInputValue(amountID, "");
    } else {
      if (mainBalance < amount) {
        alert("insufficient balance");
        setInputValue(amountID, "");
        return;
      }
      balance += amount;
      mainBalance -= amount;
      setTextValue("mainBalance", mainBalance);
      setTextValue(balanceId, balance);
      setInputValue(amountID, "");
      insertHtml(amount, type);
      my_modal_5.showModal();
    }
  });
}

function insertHtml(amount, type) {
  let content =
    type !== "Quota"
      ? `Flood Relief in ${type}`
      : `Aid for Injured in the Quota Movement`;

  let element = getElement("historySection");
  let html = `<div class="">
              <div class="border rounded-lg p-10 space-y-3 mb-2">
                <h2 class="text-lg font-bold">${amount} Taka is Donated for ${content}, Bangladesh</h2>
                <p>Date : ${new Date()}</p>
              </div>
          </div>`;
  element.insertAdjacentHTML("beforeend", html);
}

function toggle(id) {
  if (id == "historyBtn") {
    getElement("historyBtn").addEventListener("click", () => {
      getElement("historyBtn").classList.add("bg-greenBg");
      getElement("donationBtn").classList.remove("bg-greenBg");
      getElement("donationSection").classList.add("hidden");
      getElement("historySection").classList.remove("hidden");
    });
  } else {
    getElement("donationBtn").addEventListener("click", () => {
      getElement("donationBtn").classList.add("bg-greenBg");
      getElement("historyBtn").classList.remove("bg-greenBg");
      getElement("donationSection").classList.remove("hidden");
      getElement("historySection").classList.add("hidden");
    });
  }
}
