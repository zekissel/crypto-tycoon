import { useState } from 'react'
import './App.css'
import Environment from './Environment';
import Shop from './Shop';

function App() {

  const [balance, setBalance] = useState(5000);
  const [curLoc, setCurLoc] = useState(0);
  const [ownedLoc, setOwned] = useState([true, false, false, false, false, false, false, false, false]);

  return (
    <main>
      <h1>Crypto Tycoon</h1>

      <nav>
        <h2>Balance: {balance}</h2>
        <Shop balance={balance} setBalance={setBalance} ownedLoc={ownedLoc} setOwned={setOwned}/>
      </nav>

      <Environment curLoc={curLoc} setCurLoc={setCurLoc} ownedLoc={ownedLoc} balance={balance} setBalance={setBalance}/>
    </main>
  )
}

export default App
