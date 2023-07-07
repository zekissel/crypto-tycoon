import { useEffect, useState } from 'react'
import './App.css'
import m_arrays from './m_arrays';
import { loca, semiBoard, autoBoard } from './m_arrays';
import Environment from './Environment';
import Shop from './Shop';

function App() {

  const [balance, setBalance] = useState(100000);
  const [semi, setSemi] = useState(semiBoard);
  const [auto, setAuto] = useState(autoBoard);
  const [wage, setWage] = useState(0);

  const [curLoc, setCurLoc] = useState(0);
  const [locations, setLocations] = useState(loca);

  const [machines, setMachines] = useState(m_arrays);

  useEffect(() => {
    const interval = setInterval(() => {
      
      let sum = 0;
      for (let loc of auto) {
        for (let sec of loc) {
          for (let ind of sec) {
            sum += ind;
          }
        }
      }
      setBalance(balance + sum);

      let x = 0;
      const machs = [...machines];
      for (let loc of semi) {
        let y = 0;
        for (let sec of loc) {
          let z = 0;
          for (let ind of sec) {
            machs[x][y][z][6] = ind + Number(machs[x][y][z][6]);
            sum += ind;
            z += 1;
          }
          y += 1;
        }
        x += 1;
      }
      setMachines(machs);
      setWage(sum);

    }, 2000);
    return () => clearInterval(interval);
  }, [balance, semi, auto, machines]);

  return (
    <main>
      <h1>Crypto Tycoon</h1>

      <nav>
        <h2>Balance: {balance}</h2>
        <h4>crypto/sec: { wage / 2 }</h4>
        <Shop balance={balance} setBalance={setBalance} locations={locations} setLocations={setLocations}/>
      </nav>

      <Environment balance={balance} setBalance={setBalance}
                    semi={semi} setSemi={setSemi} auto={auto} setAuto={setAuto}
                    curLoc={curLoc} setCurLoc={setCurLoc} locations={locations}
                    machines={machines} setMachines={setMachines} />
    </main>
  )
}

export default App
