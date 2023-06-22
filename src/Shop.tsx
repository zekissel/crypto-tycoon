import { useState } from "react"

interface ShopProps {
    balance: number;
    setBalance: React.Dispatch<React.SetStateAction<number>>;
    ownedLoc: boolean[];
    setOwned: React.Dispatch<React.SetStateAction<boolean[]>>;
}

function Properties ({ balance, setBalance, ownedLoc, setOwned }: ShopProps) {

    const buyProp = (e: any) => {
        let newOwned = [...ownedLoc];
        switch (e.target.id) {
            case '1': if (balance >= 2000) { setBalance(balance - 2000); newOwned[1] = true; } break;
            case '2': if (balance >= 5000) { setBalance(balance - 5000); newOwned[2] = true; } break;
            case '3': if (balance >= 10000) { setBalance(balance - 10000); newOwned[3] = true; } break;
            case '4': if (balance >= 20000) { setBalance(balance - 20000); newOwned[4] = true; } break;
            case '5': if (balance >= 50000) { setBalance(balance - 50000); newOwned[5] = true; } break;
            case '6': if (balance >= 100000) { setBalance(balance - 100000); newOwned[6] = true; } break;
            case '7': if (balance >= 500000) { setBalance(balance - 500000); newOwned[7] = true; } break;
            case '8': if (balance >= 1000000) { setBalance(balance - 1000000); newOwned[8] = true; } break;
        } setOwned(newOwned);
    }

    return (
        <>
            <h3>Properties for Sale: </h3>
            <ul>
                { !ownedLoc[1] && <li><button id='1' onClick={buyProp}>Studio Apartment - $2,000</button></li> }
                { !ownedLoc[2] && <li><button id='2' onClick={buyProp}>Mobile Home - $5,000</button></li> }
                { !ownedLoc[3] && <li><button id='3' onClick={buyProp}>Twin Condo - $10,000</button></li> }
                { !ownedLoc[4] && <li><button id='4' onClick={buyProp}>Log Cabin - $20,000</button></li> }
                { !ownedLoc[5] && <li><button id='5' onClick={buyProp}>Tudor Style - $50,000</button></li> }
                { !ownedLoc[6] && <li><button id='6' onClick={buyProp}>Victorian - $100,000</button></li> }
                { !ownedLoc[7] && <li><button id='7' onClick={buyProp}>Luxury Suite - $500,000</button></li> }
                { !ownedLoc[8] && <li><button id='8' onClick={buyProp}>Mountain Retreat - $1,000,000</button></li> }
            </ul>
        </>
    )
}

function Shop ({ balance, setBalance, ownedLoc, setOwned }: ShopProps) {

    const [toggle, setToggle] = useState(false);
    const toggleFun = () => {
        setToggle(!toggle);
    }

    return (
        <>
            <button onClick={toggleFun}>Shop</button>
            { toggle &&
                <Properties balance={balance} setBalance={setBalance} ownedLoc={ownedLoc} setOwned={setOwned}/>
            }
        </>
    )
}

export default Shop