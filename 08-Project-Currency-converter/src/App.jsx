import { useState } from "react";
import { InputBox } from "./Components";
import { useCurrencyInfo } from "./Hooks";

function App() {
  const [amount, setAmount] = useState(0);
  const [from, setFrom] = useState("usd");
  const [to, setTo] = useState("inr");
  const [convertedAmount, setConvertedAmount] = useState(0);
  

  //using hooks
  const currencyInfo = useCurrencyInfo(from);
  

  //extracting all keys from the currencyInfo which is obtained by the custom hook
  const options = Object.keys(currencyInfo);

  const swap = () => {
    setFrom(to);
    setTo(from);
    setConvertedAmount(amount);
    setAmount(convertedAmount);
  };

  //convertbutton
  const convert = () => {
    setConvertedAmount(amount * currencyInfo[to]);
  };

  return (
    <div
      className="w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat"
      style={{
        backgroundImage: `url('https://images.pexels.com/photos/10144302/pexels-photo-10144302.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')`,
        // backgroundColor:"black"
      }}
    >
      <div className="w-full">
        <div className="w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30">
          <form id="mainform"
            onSubmit={(e) => {
              e.preventDefault();
              convert();
            }}
          >
            <div className="w-full mb-1">
              <InputBox
                label="From"
                amount={amount}
                currencyOptions={options}
                // onCurrencyChange={(currency) => setAmount(amount)}
                onCurrencyChange={(currency) => setAmount(currency)}
                selectCurrency={from}
                onAmountChange={(amount) => setAmount(amount)}
              />

            </div>

            <div className="relative w-full h-0.5">
              <button
                type="button"
                className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5"
                onClick={swap}
                
              >
                swap
              </button>

            </div>

            <div className="w-full mt-1 mb-4">
              <InputBox
                label="To"
                amount={convertedAmount}
                currencyOptions={options}
                onCurrencyChange={(currencyInfo) => setTo(amount)}
                selectCurrency={to}
                amountDisable
              />
            </div>

            <button
              type="submit"
              className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg"
            >
              Convert {from} to {to}
            </button>
          </form>
        </div>
      </div>
    </div>
   
  );
}

export default App;
