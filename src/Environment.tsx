import React, { useState } from "react";
import Machine from "./Machine";

interface EnvProps {
    curLoc: number;
    setCurLoc: React.Dispatch<React.SetStateAction<number>>;
    ownedLoc: boolean[];
    balance: number;
    setBalance: React.Dispatch<React.SetStateAction<number>>;
}

interface LocationProps {
    balance: number;
    setBalance: React.Dispatch<React.SetStateAction<number>>;
}

const stage = ['Mom\'s Basement', 'Studio Apartment', 'Mobile Home', 'Twin Condo', 'Log Cabin', 'Tudor Style', 'Victorian', 'Luxury Suite', 'Mountain Retreat'];

function Environment ({ curLoc, setCurLoc, ownedLoc, balance, setBalance }: EnvProps) {
    
    const changeStage = (e: any) => {
        const index = e.target.value;
        setCurLoc(index);
    }

    return (
        <>
            <h2>Location: </h2>
            <select onChange={changeStage}>
                { ownedLoc.map((v, i) => { return v && <option key={i} value={i}>{stage[i]}</option> }) }
            </select>
            { curLoc == 0 && <Basement balance={balance} setBalance={setBalance} /> }
            { curLoc == 1 && <Apartment balance={balance} setBalance={setBalance} /> }
        </>
    )
}

function Basement ({ balance, setBalance }: LocationProps) {

    const [machines, setMachines] = useState([[0, 0, 0], [0, 0 ,0], [0, 0, 0], [0, 0, 0]]);

    return (
        <table>
            <tbody>
                <tr>
                    { machines.map((v, i) => { return <td key={i}><Machine index={i} saves={machines} setSave={setMachines} balance={balance} setBalance={setBalance} /></td> }) }
                </tr>
            </tbody>
        </table>
    )
}

function Apartment ({ balance, setBalance }: LocationProps) {

    const [machines, setMachines] = useState([[0, 0, 0], [0, 0 ,0], [0, 0, 0], [0, 0, 0], [0, 0, 0], [0, 0 ,0], [0, 0, 0], [0, 0, 0]]);

    return (
        <table>
            <tbody>
                <tr>
                    { machines.map((v, i) => { return i < 4 && <td key={i}><Machine index={i} saves={machines} setSave={setMachines} balance={balance} setBalance={setBalance} /></td> })}
                </tr>
                <tr>
                    { machines.map((v, i) => { return i >= 4 && <td key={i}><Machine index={i} saves={machines} setSave={setMachines} balance={balance} setBalance={setBalance} /></td> })}
                </tr>
            </tbody>
        </table>
    )
}

export default Environment;