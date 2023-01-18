let tg = window.Telegram.WebApp;

tg.expand();

//Инициализация переменных

let main_menu_fiat = document.getElementById("main_menu_fiat");
let main_menu_crypto = document.getElementById("main_menu_crypto");
let main_menu_refill = document.getElementById("main_menu_refill");

let fiat_buy = document.getElementById("fiat_buy");
let refill_amount_type = document.getElementById("refill_amount_type");
let fiat_cash_card = document.getElementById("fiat_cash_card");
let crypto_cash_card = document.getElementById("crypto_cash_card");
let refill_cash_card = document.getElementById("refill_cash_card");

let fiat_send = document.getElementById("fiat_send");
let crypto_send = document.getElementById("crypto_send");
let refill_send = document.getElementById("refill_send"); 

let fiat_order = document.getElementById("fiat_order");
let crypto_order = document.getElementById("crypto_order");
let refill_order = document.getElementById("refill_order");

//Выбор нужной формы

main_menu_fiat.addEventListener("click", function(){
	document.getElementById("main_menu_fiat").classList.add("invisible");
	document.getElementById("main_menu_crypto").classList.add("invisible");
	document.getElementById("main_menu_refill").classList.add("invisible");

	document.getElementById("fiat_order").classList.remove("invisible");
});

main_menu_crypto.addEventListener("click", function(){
	document.getElementById("main_menu_fiat").classList.add("invisible");
	document.getElementById("main_menu_crypto").classList.add("invisible");
	document.getElementById("main_menu_refill").classList.add("invisible");

	document.getElementById("crypto_order").classList.remove("invisible");
});


main_menu_refill.addEventListener("click", function(){
	document.getElementById("main_menu_fiat").classList.add("invisible");
	document.getElementById("main_menu_crypto").classList.add("invisible");
	document.getElementById("main_menu_refill").classList.add("invisible");

	document.getElementById("refill_order").classList.remove("invisible");
});

//Дополнение формы по значения внутри селекта

fiat_cash_card.addEventListener("change", function() {
  if (this.value == "cash") {
   document.getElementById("fiat_bank").classList.add("invisible");
			document.getElementById("fiat_city").classList.remove("invisible");
  } 
  else if (this.value == "card"){
   document.getElementById("fiat_city").classList.add("invisible");
			document.getElementById("fiat_bank").classList.remove("invisible");
  }
  else {
  	document.getElementById("fiat_city").classList.add("invisible");
			document.getElementById("fiat_bank").classList.add("invisible");
  }
});

crypto_cash_card.addEventListener("change", function() {
  if (this.value == "cash") {
   document.getElementById("crypto_bank").classList.add("invisible");
			document.getElementById("crypto_city").classList.remove("invisible");
  } 
  else if (this.value == "card"){
   document.getElementById("crypto_city").classList.add("invisible");
			document.getElementById("crypto_bank").classList.remove("invisible");
  }
  else {
  	document.getElementById("crypto_bank").classList.add("invisible");
			document.getElementById("crypto_city").classList.add("invisible");
  }
});

refill_cash_card.addEventListener("change", function() {
  if (this.value == "cash") {
   document.getElementById("refill_bank").classList.add("invisible");
			document.getElementById("refill_city").classList.remove("invisible");
  } 
  else if (this.value == "card"){
   document.getElementById("refill_city").classList.add("invisible");
			document.getElementById("refill_bank").classList.remove("invisible");
  }
  else {
  	document.getElementById("refill_bank").classList.add("invisible");
			document.getElementById("refill_city").classList.add("invisible");
  }
});

fiat_buy.addEventListener("change", function() {
  if (this.value == "Другая") {
   document.getElementById("fiat_buy_another").classList.remove("invisible");
  }
  else {
			document.getElementById("fiat_buy_another").classList.add("invisible");
  }
});

refill_amount_type.addEventListener("change", function() {
  if (this.value == "Другое") {
   console.log(document.getElementById("refill_amount_type_another"))
   document.getElementById("refill_amount_type_another").classList.remove("invisible");
  }
  else {
			document.getElementById("refill_amount_type_another").classList.add("invisible");
  }
});

//Обработка форм


fiat_send.addEventListener("click", function() {
	 
	const fiat_buy = fiat_order.querySelector('[name="fiat_buy"]'),
		fiat_buy_another = fiat_order.querySelector('[name="fiat_buy_another"]'),
		fiat_sell = fiat_order.querySelector('[name="fiat_sell"]'),
		fiat_amount = fiat_order.querySelector('[name="fiat_amount"]'),
		fiat_cash_card = fiat_order.querySelector('[name="fiat_cash_card"]'),
		fiat_bank = fiat_order.querySelector('[name="fiat_bank"]'),
		fiat_city = fiat_order.querySelector('[name="fiat_city"]'),
		fiat_name = fiat_order.querySelector('[name="fiat_name"]'),
		fiat_phone = fiat_order.querySelector('[name="fiat_phone"]');

 const fiat_values = {
 	order_type: 'fiat_order',
 	name: fiat_name.value,
 	id: '',
 	from: fiat_buy.value,
 	from_another: fiat_buy_another.value,
 	to: fiat_sell.value,
 	amount: fiat_amount.value,
 	from_type: fiat_cash_card.value,
 	from_bank: fiat_bank.value,
 	from_city: fiat_city.value, 
 	phone: fiat_phone.value
 };
 
  console.log(fiat_values);

});


crypto_send.addEventListener("click", function() {
	 
	const crypto_buy = crypto_order.querySelector('[name="crypto_buy"]'),
		crypto_sell = crypto_order.querySelector('[name="crypto_sell"]'),
		crypto_amount = crypto_order.querySelector('[name="crypto_amount"]'),
		crypto_cash_card = crypto_order.querySelector('[name="crypto_cash_card"]'),
		crypto_bank = crypto_order.querySelector('[name="crypto_bank"]'),
		crypto_city = crypto_order.querySelector('[name="crypto_city"]'),
		crypto_name = crypto_order.querySelector('[name="crypto_name"]'),
		crypto_phone = crypto_order.querySelector('[name="crypto_phone"]');

 const crypto_values = {
 	order_type: 'crypto_order',
 	name: crypto_name.value,
 	id: '',
 	from: crypto_buy.value,
 	to: crypto_sell.value,
 	amount: crypto_amount.value,
 	from_type: crypto_cash_card.value,
 	from_bank: crypto_bank.value,
 	from_city: crypto_city.value, 
 	phone: crypto_phone.value
 };
 
  console.log(crypto_values);

});


refill_send.addEventListener("click", function() {
	 
	const refill_country = refill_order.querySelector('[name="refill_country"]'),
		refill_fiat_type = refill_order.querySelector('[name="refill_fiat_type"]'),
		refill_cash_card = refill_order.querySelector('[name="refill_cash_card"]'),
		refill_bank = refill_order.querySelector('[name="refill_bank"]'),
		refill_city = refill_order.querySelector('[name="refill_city"]'),
		refill_amount = refill_order.querySelector('[name="refill_amount"]'),
		refill_amount_type = refill_order.querySelector('[name="refill_amount_type"]'),
		refill_amount_type_another = refill_order.querySelector('[name="refill_amount_type_another"]'),
		refill_bank_type = refill_order.querySelector('[name="refill_bank_type"]'),
		refill_name = refill_order.querySelector('[name="refill_name"]');
		refill_phone = refill_order.querySelector('[name="refill_phone"]');

 const refill_values = {
 	order_type: 'refill_order',
 	name: refill_name.value,
 	id: '',
 	amount: refill_amount.value,
 	amount_type: refill_amount_type.value,
 	amount_type_another: refill_amount_type_another.value,
 	to_bank: refill_bank_type.value,
 	from_country: refill_country.value,
 	fiat_type: refill_fiat_type.value,
 	from_type: refill_cash_card.value,
 	from_bank: refill_bank.value,
 	from_city: refill_city.value, 
 	phone: fiat_phone.value
 };
 
  console.log(refill_values);

});


//crypto_order.addEventListener('submit', retrieveCryptoFormValue);
//refill_order.addEventListener('submit', retrieveRefillFormValue);


/*btn1.addEventListener("click", function(){
	if (tg.MainButton.isVisible){
		tg.MainButton.hide();
	}
	else {
		tg.MainButton.setText("Вы выбрали товар 1!");
		item = "1";
		tg.MainButton.show();
	}
});

Telegram.WebApp.onEvent("mainButtonClicked", function(){
	tg.sendData(item);
});*/


