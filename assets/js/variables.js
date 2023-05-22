// NAZWA SPÓŁKI
const companyNodeList = document.querySelectorAll(".company-name");
companyNodeList.forEach((item) => {
  item.innerText =
    "APP AND ROLL sp z o.o, Marszałkowska 58, 00-545 Warszawa, Полша, данъчен идентификационен номер NIP: 7010348607";
});

//EMAIL
const emailNodeList = document.querySelectorAll(".company-email");
emailNodeList.forEach((item) => {
  item.innerText = "contactcz@appandroll.com";
});

// DOMENA
const domainNodeList = document.querySelectorAll(".domain-name");
domainNodeList.forEach((item) => {
  item.innerText = "catch-discounts-4-health.com";
});

//CENA
const priceNodeList = document.querySelectorAll(".product-price");
priceNodeList.forEach((item) => {
  item.innerText = "130 BGN";
});
