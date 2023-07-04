import React from "react";
import Machine from "./Machine";

interface EnvProps {
    curLoc: number;
    setCurLoc: React.Dispatch<React.SetStateAction<number>>;
    ownedLoc: boolean[];
    balance: number;
    setBalance: React.Dispatch<React.SetStateAction<number>>;
    m0: number[][];
    s0: React.Dispatch<React.SetStateAction<number[][]>>;
    m1: number[][];
    s1: React.Dispatch<React.SetStateAction<number[][]>>;
}

interface LocationProps {
    balance: number;
    setBalance: React.Dispatch<React.SetStateAction<number>>;
    machines: number[][];
    setMachines: React.Dispatch<React.SetStateAction<number[][]>>;
}

const stage = ['Mom\'s Basement', 'Studio Apartment', 'Mobile Home', 'Twin Condo', 'Log Cabin', 'Tudor Style', 'Victorian', 'Luxury Suite', 'Mountain Retreat'];

function Environment ({ curLoc, setCurLoc, ownedLoc, balance, setBalance, m0, s0, m1, s1 }: EnvProps) {
    
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
            { curLoc == 0 && <Basement balance={balance} setBalance={setBalance} machines={m0} setMachines={s0} /> }
            { curLoc == 1 && <Apartment balance={balance} setBalance={setBalance} machines={m1} setMachines={s1} /> }
        </>
    )
}

function Basement ({ balance, setBalance, machines, setMachines }: LocationProps) {

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

function Apartment ({ balance, setBalance, machines, setMachines }: LocationProps) {

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