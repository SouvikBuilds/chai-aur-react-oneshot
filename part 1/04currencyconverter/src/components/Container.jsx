import React, { useState, useEffect } from "react";
import apiKey from "./apiKey";

const Container = () => {
  const currencies = [
    { code: "USD", name: "United States Dollar" },
    { code: "EUR", name: "Euro" },
    { code: "INR", name: "Indian Rupee" },
    { code: "GBP", name: "British Pound Sterling" },
    { code: "JPY", name: "Japanese Yen" },
    { code: "CNY", name: "Chinese Yuan" },
    { code: "AUD", name: "Australian Dollar" },
    { code: "CAD", name: "Canadian Dollar" },
    { code: "CHF", name: "Swiss Franc" },
    { code: "SGD", name: "Singapore Dollar" },
    { code: "NZD", name: "New Zealand Dollar" },
    { code: "ZAR", name: "South African Rand" },
    { code: "RUB", name: "Russian Ruble" },
    { code: "AED", name: "UAE Dirham" },
    { code: "SAR", name: "Saudi Riyal" },
    { code: "HKD", name: "Hong Kong Dollar" },
    { code: "KRW", name: "South Korean Won" },
    { code: "BRL", name: "Brazilian Real" },
    { code: "MXN", name: "Mexican Peso" },
    { code: "THB", name: "Thai Baht" },
    { code: "TRY", name: "Turkish Lira" },
    { code: "SEK", name: "Swedish Krona" },
    { code: "NOK", name: "Norwegian Krone" },
    { code: "DKK", name: "Danish Krone" },
    { code: "PLN", name: "Polish Zloty" },
    { code: "MYR", name: "Malaysian Ringgit" },
    { code: "IDR", name: "Indonesian Rupiah" },
    { code: "PKR", name: "Pakistani Rupee" },
    { code: "BDT", name: "Bangladeshi Taka" },
    { code: "EGP", name: "Egyptian Pound" },
  ];
  const [fromCurrency, setFromCurrency] = useState("USD");
  const [toCurrency, setToCurrency] = useState("INR");
  const [amount, setAmount] = useState(1);
  const [currencyData, setCurrencyData] = useState(null);
  const [isSwapped, setIsSwapped] = useState(false);

  const convertCurrency = async () => {
    if (!fromCurrency || !toCurrency || !amount) {
      alert("Please Enter The Details First");
      return;
    }
    // const apiKey = "e3b5823bccc571ccf87088b0";
    const apiUrl = `https://v6.exchangerate-api.com/v6/${apiKey}/latest/${fromCurrency}`;
    const response = await fetch(apiUrl);

    if (!response.ok) {
      alert("Something Went Wrong");
      return;
    }
    const data = await response.json();
    setCurrencyData(data);
  };
  const handleSwap = () => {
    setIsSwapped(true);
    setFromInput(toCurrency);
    setToInput(fromCurrency);
  };

  useEffect(() => {
    convertCurrency();
  }, [fromCurrency, amount, toCurrency, isSwapped]);
  return (
    <div
      className="min-h-screen w-full bg-cover bg-center bg-no-repeat bg-fixed flex items-center justify-center p-4 text-white rounded-lg shadow-lg"
      style={{
        backgroundImage:
          "url(https://media.istockphoto.com/id/539236471/photo/wheel-of-currency.jpg?s=612x612&w=0&k=20&c=0k-P5xuqCbamAkWG1f2h9KdvkiYwHRfEnyY-glGOEwU=)",
      }}
    >
      <div className="container bg-black rounded-lg shadow-lg text-center flex flex-col justify-center items-center p-6 w-full max-w-[600px] mx-auto">
        <div className="heading">
          <h1 className="text-3xl sm:text-4xl text-white font-semibold text-center animate-bounce">
            Currency Converter
          </h1>
        </div>
        <div className="flex flex-col gap-2 items-start justify-center mt-[50px] w-full">
          <label
            htmlFor="fromInput"
            className="text-xl text-white font-semibold"
          >
            From
          </label>
          <div className="flex flex-col sm:flex-row gap-2 items-center w-full">
            <input
              type="text"
              value={fromCurrency}
              name=""
              id="fromInput"
              className="px-4 py-2 rounded-lg shadow-lg w-full sm:w-[300px] border border-white"
              readOnly
            />
            <select
              onChange={(e) => setFromCurrency(e.target.value)}
              className="px-4 py-2 rounded-lg shadow-lg w-full sm:w-[200px] bg-[#333] text-white"
            >
              {currencies.map((cur) => (
                <option key={cur.code} value={cur.code}>
                  {cur.name} ({cur.code})
                </option>
              ))}
            </select>
          </div>
        </div>

        <div className="amount flex flex-col justify-center items-start gap-2 mt-[20px] w-full">
          <label
            htmlFor="inputAmount"
            className="text-xl text-white font-semibold"
          >
            Amount
          </label>
          <input
            type="number"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            name=""
            id="inputAmount"
            placeholder="Enter Amount Here"
            className="px-5 py-2 rounded-lg shadow-lg w-full border border-white"
          />
        </div>

        <div className="flex flex-col gap-2 items-start justify-center mt-[20px] w-full">
          <label htmlFor="toInput" className="text-xl text-white font-semibold">
            To
          </label>
          <div className="flex flex-col sm:flex-row gap-2 items-center w-full">
            <input
              type="text"
              value={toCurrency}
              name=""
              id="toInput"
              className="px-4 py-2 rounded-lg shadow-lg w-full sm:w-[300px] border border-white"
              readOnly
            />
            <select
              onChange={(e) => setToCurrency(e.target.value)}
              value={"INR" && toCurrency}
              className="px-4 py-2 rounded-lg shadow-lg w-full sm:w-[200px] bg-[#333] text-white"
            >
              {currencies.map((cur) => (
                <option key={cur.code} value={cur.code}>
                  {cur.name} ({cur.code})
                </option>
              ))}
            </select>
          </div>
        </div>

        <div className="swipeButton mt-[20px]">
          <button
            onClick={handleSwap}
            type="button"
            className="px-5 py-2 rounded-lg shadow-lg bg-[#333] active:bg-black duration-300 text-white text-center"
          >
            Swap
          </button>
        </div>

        <div className="result mt-[20px] px-4">
          {currencyData && (
            <h2 className="text-lg sm:text-xl text-center font-semibold text-white break-words">
              {amount} {fromCurrency} ={" "}
              {amount * currencyData.conversion_rates[toCurrency]} {toCurrency}
            </h2>
          )}
        </div>
      </div>
    </div>
  );
};

export default Container;
