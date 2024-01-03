import { useState } from "react";
import "./App.css";
import Input from "./components/Input";
import useCurencyInfo from "./hooks/useCurencyInfo";

function App() {
  const [amount, setAmount] = useState(0);
  const [convertedAmount, setConvertedAmount] = useState(0);
  const [from, setFrom] = useState("usd");
  const [to, setTo] = useState("inr");

  const allCurency = useCurencyInfo(from);
  console.log(allCurency);
  const converter = () => {
    setConvertedAmount(amount * Number(allCurency[to]));
  };

  const currencies = Object.keys(allCurency);
  console.log(currencies);
  const swap = () => {
    setFrom(to);
    setTo(from);
    setAmount(convertedAmount);
    setConvertedAmount(amount);
  };
  return (
    <>
      <div
        className="w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat"
        style={{
          backgroundImage: `url('https://openexchangerates.org/assets/img/showcase/ddw-currency-converter.png')`,
        }}
      >
        <div className="w-full">
          <div className="w-full max-w-md mx-auto border border-grey-60 rounded-lg p-5 backdrop-blur-sm bg-white/30 ">
            <form
              onSubmit={(e) => {
                e.preventDefault();
                converter();
              }}
            >
              <div className="w-full mb-1">
                <Input
                  key={from}
                  label={"From"}
                  amount={amount}
                  onCurrencyChange={(value) => setFrom(value)}
                  onAmountChange={(value) => setAmount(value)}
                  currencyOptions={currencies}
                  selectCurrency={from}
                />
              </div>
              <div className="relative w-full h-0.5">
                <button
                  onClick={swap}
                  type="button"
                  className="absolute left-1/2-translate-x-1/2-translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5"
                >
                  swap
                </button>
              </div>
              <div className="w-full mt-1 mb-4">
                <Input
                  key={to}
                  label={"To"}
                  amount={convertedAmount}
                  onCurrencyChange={(value) => setTo(value)}
                  amountDisable
                  currencyOptions={currencies}
                  selectCurrency={to}
                />
              </div>
              <button
                onClick={converter}
                type="submit"
                className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg"
              >
                Convert {from.toUpperCase()} to {to.toUpperCase()}
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
