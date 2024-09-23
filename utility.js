let getElement = (id) => document.getElementById(id);

let getValue = (id) => parseFloat(document.getElementById(id).value);

let getInnerTextValue = (id) =>
  parseFloat(document.getElementById(id).innerText);

let setTextValue = (id, value) => (getElement(id).innerText = value);

let setInputValue = (id, value) => (getElement(id).value = value);

let mainBalance = getInnerTextValue("mainBalance");

function handleClickEvent(elementId, amountID, balanceId) {
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
      my_modal_5.showModal();
    }
  });
}
