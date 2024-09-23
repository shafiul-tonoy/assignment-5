let getElement = (id) => document.getElementById(id);

let getValue = (id) => parseFloat(document.getElementById(id).value);

let getInnerTextValue = (id) =>  parseFloat(document.getElementById(id).innerText);

let setValue = (id, value, para = "") =>
  (getElement(id).innerContent = value + para);

function handleClickEvent(elementId, amountID ,balanceId) {
  getElement(elementId).addEventListener("click",()=>{
    let amount = getValue(amountID); 
    let balance = getInnerTextValue(balanceId);   

    console.log(amount, balance);
    
  });
}