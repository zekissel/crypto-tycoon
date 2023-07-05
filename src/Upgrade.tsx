import { useState } from "react";

interface UpgradeProps {
    index: number;
    save: number[][];
    setSave: React.Dispatch<React.SetStateAction<number[][]>>;

    balance: number;
    setBalance: React.Dispatch<React.SetStateAction<number>>;
}

function Upgrade ({ index, save, setSave, balance, setBalance}: UpgradeProps) {

    const [toggle, setToggle] = useState(false);
    const toggleUpgrades = () => { setToggle(!toggle) }

    const buyGPU = () => {
        if (balance )
    }

    const buyFan = () => {
        
    }

    return (
        <>
            <button onClick={toggleUpgrades}>Show Upgrades</button><br/>
            { toggle &&
                <>
                    <button>eGPU</button>
                    <button>GPU</button>
                    <button>Cooling fans</button>
                </>
            }
        </>
    )
}

export default Upgrade