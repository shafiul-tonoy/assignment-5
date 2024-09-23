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
              <div class="border rounded-lg p-10 space-y-3">
                <h2 class="text-lg font-bold">${amount} Taka is Donated for ${content}, Bangladesh</h2>
                <p>Date : Tue Sep 17 2024 08:39:11 GMT +0600 (Bangladesh Standard Time)</p>
              </div>
          </div>`;
  element.insertAdjacentHTML("beforeend", html);
}
