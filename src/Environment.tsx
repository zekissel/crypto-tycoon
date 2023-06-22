import React from "react";

interface EnvProps {
    curLoc: number;
    setCurLoc: React.Dispatch<React.SetStateAction<number>>;
    ownedLoc: boolean[];
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
            { curLoc == 0 && <Basement /> }
            { curLoc == 1 && <Apartment /> }
        </>
    )
}

function Basement () {

    return (
        <table>
            <tbody>
                <tr>
                    <td>1</td>
                    <td></td>
                    <td></td>
                    <td></td>
                </tr>
            </tbody>
        </table>
    )
}

function Apartment () {

    return (
        <table>
            <tbody>
                <tr>
                    <td>2</td>
                    <td></td>
                    <td></td>
                    <td></td>
                </tr>
                <tr>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                </tr>
            </tbody>
        </table>
    )
}

export default Environment;