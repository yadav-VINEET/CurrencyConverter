import { useState } from 'react'
import './App.css'
import InputBox from './components/InputBox'
import useCurrencyInfo from './hooks/useCurrencyInfo'

function App() {

  const [amount,setAmount] = useState(0)
  const [convertedAmount,setConvertedAmount] = useState(0)
  const [from,setFrom] = useState("USD")
  const [to,setTo] = useState("INR")
  const currencyInfo = useCurrencyInfo(from)

  const options = Object.keys(currencyInfo)

  const swap = () => {
    setFrom(to)
    setTo(from)
    setConvertedAmount(amount)
    setAmount(convertedAmount) 
  }

  const convert = () => {
    setConvertedAmount(amount*currencyInfo[to])
    console.log(convertedAmount)
  }

  return (
    <div
        className="w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat"
        style={{
            backgroundImage: `url('https://img.freepik.com/free-vector/collection-virtual-foreign-currency-symbol-background-with-empty-frame_1017-52490.jpg?t=st=1724574096~exp=1724577696~hmac=ae831052b43e10456ff4174c99430c789989c5829c9bcc6ee61dc79742fc3c85&w=740')`,
        }}
    >
        <div className="w-full">
            <div className="w-full max-w-lg mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30">
                <form
                    onSubmit={(e) => {
                        e.preventDefault();
                        convert()
                    }}
                >
                    <div className="w-full mb-1">
                        <InputBox
                            label="From"
                            amount={amount}
                            currencyOptions={options}
                            onCurrencyChange={(currency)=> {setAmount(amount)}}
                            onCurrencyChange={(currency)=> {setFrom(currency)}}
                            onAmountChange={(amount)=> {setAmount(amount)}}
                            selectCurrency={from}
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
                            onCurrencyChange={(currency)=> setTo(currency)}
                            selectCurrency={to}
                            amountDisable
                        />
                    </div>
                    <button type="submit" className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg">
                        Convert {from} to {to}
                    </button>
                </form>
            </div>
        </div>
    </div>
);
}

export default App
