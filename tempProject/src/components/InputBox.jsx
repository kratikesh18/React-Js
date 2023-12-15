import React, { useId } from "react";

//this is the only textbox component not functioning done over here i guess
function InputBox({
  // having some state changing Properties which can be recived by app itself like
  lable,
  amount,
  currencyOptions = [],
  //some functons as well for setting states
  onCurrencyChange,
  onAmountChange,
  //selecting the currency from a list keeping the default one is USD
  selectCurrency = "usd",
}) {
  const amountInputId = useId()
  return (
    <div>
      <div>
        <label id={amountInputId} className="text-black/40 mb-2 inline-block">{lable}</label>
        
        <input
          type="number"
          id={amountInputId}
          className="outline-none w-full bg-transparent py-1.5"
          placeholder="Amount"
          value={amount}
          onChange={(e) => {
            onAmountChange(Number(e.target.value));
          }}
        />
      </div>
      <div className="w-1/2 flex flex-wrap justify-end text-right bg-white">
        <p className="text-black/40 mb-2 w-full">Currency Type</p>
        {/* another select tag  */}
        <select  className="rounded-md px-1 py-1 bg-gray-100 cursor-pointer outline-none"
        value={selectCurrency}
        onChange={(e)=>{onCurrencyChange(e.target.value)}}
        
        >

            {/* writing javascript */}
            {currencyOptions.map((currency)=>{
                <option key={currency} value={currency}> 
                {currency}
                </option>
            })}
        </select>
      </div>
    </div>
  );
}

export default InputBox;
