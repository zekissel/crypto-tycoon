import { useState } from "react";

interface UpgradeProps {
    
}

function Upgrade ({  }: UpgradeProps) {

    const [toggle, setToggle] = useState(false)
    const toggleUpgrades = () => { setToggle(!toggle) }

    return (
        <>
            <button onClick={toggleUpgrades}>Show Upgrades</button><br/>
            { toggle &&
                <>
                    <button>+ GPU</button>
                    <button>+ Fan</button>
                </>
            }
        </>
    )
}

export default Upgrade