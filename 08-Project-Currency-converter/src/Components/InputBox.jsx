import React, { useId } from "react";

function InputBox({
    label,
    amount,
    onAmountChange,
    onCurrencyChange,
    currencyOptions = [],
    selectCurrency = "usd",
    amountDisable = false,  
    currencyDisable = false,
    className = "",
}) {
    const amountInputId = useId();

    return (
        // div containing left section and rightsection
        <div className={`bg-white p-3 rounded-lg text-sm flex ${className} `}>
            {/* div containing 2 elements lable and textbox  */}
            <div className="w-1/2">
                <label
                    htmlFor={amountInputId}
                    className="text-black/40 mb-2 inline-block"
                >
                    {label}
                </label>

                <input
                    className="outline-none w-full bg-transparent py-1.5"
                    type="number"
                    placeholder="Amount"
                    id={amountInputId}
                    value={amount}
                    disabled={amountDisable}
                    onChange={(e) =>
                        onAmountChange && onAmountChange(Number.parseInt(e.target.value))
                    }
                />
            </div>

            <div className="w-1/2 flex flex-wrap justify-end text-right">
                <p className="text-black/40 mb-2 w-full">
                    Currency Type
                </p>

                <select
                    className="rounded-lg px-1 py-1 bg-gray-100 cursor-pointer outline-none"
                    value={selectCurrency}
                    onChange={(e) => onCurrencyChange && onCurrencyChange(e.target.value)}
                    disabled={currencyDisable}
                >
                    {currencyOptions.map((currency) => (
                        <option key={currency} value={currency}>
                            {currency}
                        </option>
                    ))}
                </select>
            </div>
        </div>
    );
}

export default InputBox;

//  //this is the component taking 2 arguments 1 is lable and 2nd one is for classes
// function InputBox(
//         //THIS ARE THE PROPS OF HE COMPONENT
//     {
//     label,
//     //taking more arguments here depending upon the useCase
//     amount,
//     onAmountChange,
//     onCurrencyChange,
//     currencyOptions = [],      //data filled by json data and looped through the array so thats why
//     selectCurrency,
//     amountDisabled = false,
//     currencyDisabled =false,

//     className = "", //default is empty
// }) {

//     const amountInputId = useId();
//     return (                                                    //inputted classnames can be here
//         <div className={`bg-white p-3 rounded-lg text-sm flex ${className}`}>
//                     {/* two divs one is for the lable and amount and 2nd one is for changing the currency type which containing dropdown list*/}
//             <div className="w-1/2">
//                 <label htmlFor={amountInputId} className="text-black/40 mb-2 inline-block">
//                     {label}
//                 </label>
//                 <input
//                     id={amountInputId}
//                     className="outline-none w-full bg-transparent py-1.5"
//                     type="number"
//                     placeholder="Amount"
//                     disabled = {amountDisabled}
//                     value={amount}
//                     onChange={(e)=>onAmountChange && onAmountChange(Number.parseInt(e.target.value))}
//                 />
//             </div>

//             <div className="w-1/2 flex flex-wrap justify-end text-right">
//                 <p className="text-black/40 mb-2 w-full">Currency Type</p>
//                 <select
//                     className="rounded-lg px-1 py-1 bg-gray-100 cursor-pointer outline-none"
//                     value={selectCurrency}
//                     onChange={(e)=>{onCurrencyChange && onCurrencyChange(e.target.value)}}
//                     disabled= {currencyDisabled}
//                 >

//                     {/* iteating over the recived currencyOptions lists */}
//                     {/* we can write js in the curly braces  */}
//                     {currencyOptions.map((currencyName)=>(
//                         <option key={currencyName} value={currencyName}>
//                             {currencyName}
//                         </option>
//                     ))}

//                 </select>
//             </div>
//         </div>

//     );
// }

// export default InputBox;
