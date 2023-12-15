import { useState } from 'react'
// import InputBox, { Card }  from './components'
import {useCurrencyInfo} from './Hooks'
import Card from './components/Card/Card';

function App() {
  return (
    <>
                {/* this is a prop */}
      <Card cardHeading={"hey Kartikesh"}/>
    </>
  )
  // const [amount, setAmount] = useState(1)
  // const [from , setFrom] = useState('usd')
  // const [to, setTo] = useState('inr')
  // const [convertedAmount , setConvertedAmount] = useState(0)

  // //using hook and getting data in the object form , from the custom hook we created 

  // const currencyData = useCurrencyInfo(from)

  // //extracting the options from the object we got 
  // const options = Object.keys(currencyData)

  // //swap function which changes the from to to and to to from 
  // const swap = ()=>{
  //   setFrom(to)
  //   setTo(from)
  //   setAmount(convertedAmount)
  //   setConvertedAmount(amount)
  // }

  // const convert = ()=>{
  //   setConvertedAmount(amount * currencyData[to])
  // }



  // return (
  //   <div
  //     className='w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat'
  //     style={
  //       {backgroundImage : `url("https://www.fabhotels.com/blog/wp-content/uploads/2018/09/Chinaman-Waterfall-.jpg")`}
  //     }
  //   >


  //     <div className='w-full'>

  //       <div className=' w-full max-w-md mx-auto border border-gray-50 rounded-lg p-5 backdrop-blur bg-white/30'>


  //         {/* then there is a form inside the div */}

  //         <form onSubmit={(e)=>{
  //           e.preventDefault();
  //           convert()
  //         }}
  //       >
  //         <div className='w-full mb-1'>
  //           <InputBox
  //             lable='From'
  //             amount={amount}
  //             currencyOptions={options}              
  //             onCurrencyChange={(currency)=>setAmount(amount)}
  //             selectCurrency={from}
  //             onAmountChange={(amount)=>setAmount(amount)}
  //           />
  //         </div>

  //           {/* div for swap button  */}
  //           <div className='relative w-full h-0.5'>
  //             <button
  //               type='button'
  //               className='absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5'
  //               onClick={swap}
  //             >Swap</button>

  //           </div>

  //           <div className='w-full mt-1 mb-4'>
  //             {/* again 2nd input box */}
  //             <InputBox
  //               lable="To"
  //               amount={convertedAmount}
  //               currencyOptions={options}
  //               onCurrencyChange={(currency) => setTo(currency)}
  //               selectCurrency={from}
  //             />
  //           </div>
  //           <button type='submit' className='w-full bg-blue-500 text-white px-4 py-3 rounded-lg'>
  //             convert {from.toUpperCase()} to {to.toUpperCase()}
  //           </button>
  //         </form>
  //       </div>

  //     </div>
  //   </div>
  // )
}

export default App;
