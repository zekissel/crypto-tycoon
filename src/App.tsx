import { useEffect, useState } from 'react'
import './App.css'
import m_arrays from './m_arrays';
import { loca, semiBoard } from './m_arrays';
import Environment from './Environment';
import Shop from './Shop';

function App() {

  const [balance, setBalance] = useState(10000);
  const [per2sec, setPer2] = useState(0);
  const [semi, setSemi] = useState(semiBoard);

  const [curLoc, setCurLoc] = useState(0);
  const [locations, setLocations] = useState(loca);

  const [machines, setMachines] = useState(m_arrays);

  useEffect(() => {
    const interval = setInterval(() => {
      setBalance(balance + per2sec);

      let x = 0;
      const machs = [...machines];
      for (let loc of semi) {
        let y = 0;
        
        for (let sec of loc) {
          let z = 0;
          
          for (let ind of sec) {
            
            machs[x][y][z][6] = ind + Number(machs[x][y][z][6]);
            z += 1;
          }
          y += 1;
        }
        x += 1;
      }
      setMachines(machs);

    }, 2000);
    return () => clearInterval(interval);
  }, [balance, per2sec, machines]);

  return (
    <main>
      <h1>Crypto Tycoon</h1>

      <nav>
        <h2>Balance: {balance}</h2>
        <Shop balance={balance} setBalance={setBalance} locations={locations} setLocations={setLocations}/>
      </nav>

      <Environment balance={balance} setBalance={setBalance}
                    per2sec={per2sec} setPer2={setPer2} semi={semi} setSemi={setSemi}
                    curLoc={curLoc} setCurLoc={setCurLoc} locations={locations}
                    machines={machines} setMachines={setMachines} />
    </main>
  )
}

export default App
