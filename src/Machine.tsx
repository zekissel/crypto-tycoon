import { useState } from "react";

interface MachineProps {
    index: number;
    saves: number[][];
    setSave: React.Dispatch<React.SetStateAction<number[][]>>;

    balance: number;
    setBalance: React.Dispatch<React.SetStateAction<number>>;
}

interface UIProps {
    wage: number;
    cooldown: number;
    balance: number;
    setBalance: React.Dispatch<React.SetStateAction<number>>;
}

function MachineUI ({cooldown, wage, balance, setBalance}: UIProps) {

    const manMine = (e: any) => {
        setBalance(balance + wage);
        const btn = (e.target as HTMLButtonElement);
        btn.disabled = true;
        setTimeout(() => {
            btn.disabled = false;
        }, cooldown)
    }

    return (
        <>
            <button onClick={manMine}>Mine</button>
            <h4>Wage: {wage} | Cooldown: {cooldown / 1000.00} s</h4>
            <button>Options (upgrade, move sell)</button>
        </>
    )
}

function Machine ({ index, saves, setSave, balance, setBalance }: MachineProps) {

    const [wage, setWage] = useState(10);
    const [cool, setCool] = useState(2500);


    const buyMachine = () => {
        const newSave: number[][] = [...saves];
        newSave[index][0] = 1;
        setSave(newSave);
    }

    return (
        <>
            { saves[index][0] == 0 && <button onClick={buyMachine}>+</button> }
            { saves[index][0] > 0 && <MachineUI wage={wage} cooldown={cool} balance={balance} setBalance={setBalance} />}
        </>
    )
}

export default Machine