import { useState } from 'react'
import './App.css'
import Environment from './Environment';
import Shop from './Shop';

function App() {

  const [balance, setBalance] = useState(5000);
  const [curLoc, setCurLoc] = useState(0);
  const [ownedLoc, setOwned] = useState([true, false, false, false, false, false, false, false, false]);

  const [machines0, setMachines0] = useState([[0, 0, 0, 0], [0, 0 ,0, 0], [0, 0, 0, 0], [0, 0, 0, 0]]);
  const [machines1, setMachines1] = useState([[0, 0, 0, 0], [0, 0 ,0, 0], [0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0], [0, 0 ,0, 0], [0, 0, 0, 0], [0, 0, 0, 0]]);


  return (
    <main>
      <h1>Crypto Tycoon</h1>

      <nav>
        <h2>Balance: {balance}</h2>
        <Shop balance={balance} setBalance={setBalance} ownedLoc={ownedLoc} setOwned={setOwned}/>
      </nav>

      <Environment curLoc={curLoc} setCurLoc={setCurLoc} ownedLoc={ownedLoc} balance={balance} setBalance={setBalance} 
                    m0={machines0} s0={setMachines0} m1={machines1} s1={setMachines1} />
    </main>
  )
}

export default App
