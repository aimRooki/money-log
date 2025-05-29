import { useState } from "react";

export const TestForm: React.FC = () => {
  const [amount, setAmount] = useState("");
  const [amounts, setAmounts] = useState<number[]>([]);

  const handleSubmit = () => {
    if (!amount) return;
    setAmounts([...amounts, parseFloat(amount)]);

    // 入力欄をクリア
    setAmount("");
  };

  return (
    <>
      <label>
        金額：
        <input
          type="number"
          value={amount}
          placeholder="金額"
          onChange={(e) => setAmount(e.target.value)}
        />
      </label>
      <br />
      <button onClick={handleSubmit}>登録</button>

      <br />
      <br />

      <ul>
        {amounts.map((amt, index) => (
          <li key={index}>金額：{amt}</li>
        ))}
      </ul>
    </>
  );
};
