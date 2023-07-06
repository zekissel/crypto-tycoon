import { useState } from "react"

interface ShopProps {
    balance: number;
    setBalance: React.Dispatch<React.SetStateAction<number>>;

    locations: (string | number)[][];
    setLocations: React.Dispatch<React.SetStateAction<(string | number)[][]>>;
}

function Shop ({ balance, setBalance, locations, setLocations }: ShopProps) {

    const [visible, setVisible] = useState(false);
    const toggleShop = () => setVisible(!visible);

    const buyProperty = (e: any) => {
        let cost: number = Number(locations[e.target.value][1]);
        if (balance >= cost) {
            setBalance(balance - cost);
            let newLoc = [...locations];
            newLoc[e.target.value][1] = 0;
            setLocations(newLoc);
        }
    }

    return (
        <>
            { !visible && <button onClick={toggleShop}>Shop</button> }
            { visible && 
                <>
                <button onClick={toggleShop}>Hide Shop</button> 
                <ul>
                    { locations.map((v, i) => {
                        return v[1] !== 0 && <li key={i}><button value={i} onClick={buyProperty}>{ v[0] } - ${ v[1] }</button></li>
                    }) }
                </ul>
                </>
            }
        </>
    )
}

export default Shop