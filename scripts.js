handleClickEvent(
  "noakhaliOnClick",
  "noakhaliDonation",
  "noakhaliBalance",
  "Noakhali"
);
handleClickEvent("feniOnClick", "feniDonation", "feniBalance", "Feni");
handleClickEvent("quotaOnClick", "quotaDonation", "quotaBalance", "Quota");

toggle("historyBtn");
toggle("donationBtn");

getElement("blog").addEventListener("click", ()=>window.location.href = "blog.html")