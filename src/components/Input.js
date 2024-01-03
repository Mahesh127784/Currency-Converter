import React, { useId } from "react";

function Input({
  label,
  amount,
  onAmountChange,
  onCurrencyChange,
  currencyOptions = [],
  selectCurrency = "usd",
  amountDisable = false,
  currencyDisable = false,
  classname = "",
}) {
  const uniqueId = useId();
  return (
    <div className={`bg-white p-3 rounded-lg text-sm flex ${classname}`}>
      <div className="w-1/2">
        <label htmlFor={uniqueId} className="text-black/40 mb-2 inline-block">
          {label}
        </label>
        <input
          id={uniqueId}
          type="number"
          className="outline-none w-full bg-transparent py-1.5"
          placeholder="Amount"
          disabled={amountDisable}
          value={amount}
          onChange={(e) =>
            onAmountChange && onAmountChange(Number(e.target.value))
          }
        />
      </div>

      <div className="flex-wrap w-1/2 flex justify-end text-right">
        <p className="text-black/40 mb-2 w-full"></p>
        <select
          value={selectCurrency}
          onChange={(e) => onCurrencyChange && onCurrencyChange(e.target.value)}
          disabled={currencyDisable}
          className="rounded-lg px-1 py-1 bg-grey-100 curser-pointer outline-none "
        >
          {currencyOptions.map((currenc, index) => (
            <option key={index} value={currenc}>
              {currenc}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}

export default Input;
