import { useState, useEffect } from "react";

interface MachineProps {
    index: number;
    saves: number[][];
    setSave: React.Dispatch<React.SetStateAction<number[][]>>;

    balance: number;
    setBalance: React.Dispatch<React.SetStateAction<number>>;
}

interface PurchaseProps {
    index: number;
    saves: number[][];
    setSave: React.Dispatch<React.SetStateAction<number[][]>>;

    balance: number;
    setBalance: React.Dispatch<React.SetStateAction<number>>;
    toggle: () => void;
}

interface UIProps {
    mode: number;
    type: number;
    wage: number;
    cooldown: number;
    balance: number;
    setBalance: React.Dispatch<React.SetStateAction<number>>;
}

interface AutoProps {
    wage: number;
    cool: number;
    balance: number;
    setBalance: React.Dispatch<React.SetStateAction<number>>;
    toggle: () => void;
}

function AutoMine ({wage, cool, balance, setBalance, toggle}: AutoProps) {
  
    useEffect(() => {

        const interval = setInterval(() => {
            setBalance(balance + wage);
        }, cool);
  
        return () => clearInterval(interval);
    }, [balance, wage]);
  
    return <button onClick={toggle}>Stop</button>;
}

function MachineUI ({mode, type, cooldown, wage, balance, setBalance}: UIProps) {

    const [mining, setMining] = useState(false);
    const toggleMine = () => {
        setMining(!mining);
    }

    const manMine = (e: any) => {
        const btn = (e.target as HTMLButtonElement);
        btn.disabled = true;
        setTimeout(() => {
            btn.disabled = false;
        }, cooldown)
        setBalance(balance + wage);
    }

    return (
        <>
            { type == 1 && <h3>Laptop</h3> } { type == 2 && <h3>Desktop</h3> }
            { mode == 1 && <button onClick={manMine}>Mine</button> }
            { mode == 2 && !mining && <button onClick={toggleMine}>Execute</button> }
            { mode == 2 && mining && <AutoMine wage={wage} cool={cooldown} balance={balance} setBalance={setBalance} toggle={toggleMine}/> }
            <h4>Wage: {wage} | Cooldown: {cooldown / 1000.00} s</h4>
            <button>Options (upgrade, move sell)</button>
        </>
    )
}

function PurchaseOptions ({ index, saves, setSave, balance, setBalance, toggle }: PurchaseProps) {

    const buyLaptop = () => {
        if (balance >= 500) {
            const newSave: number[][] = [...saves];
            newSave[index][0] = 1;
            newSave[index][1] = 10;
            newSave[index][2] = 2500;
            newSave[index][3] = 1;
            setSave(newSave);
            setBalance(balance - 500);
        }
    }

    const buyDesktop = () => {
        if (balance >= 1500) {
            const newSave: number[][] = [...saves];
            newSave[index][0] = 1;
            newSave[index][1] = 25;
            newSave[index][2] = 1500;
            newSave[index][3] = 2;
            setSave(newSave);
            setBalance(balance - 1500);
        }
    }

    return (
        <>
            <button onClick={buyLaptop}>Laptop $500</button>
            <button onClick={buyDesktop}>Desktop $1500</button>
            <button onClick={toggle}>&lt;</button>
        </>
    )
}

function Machine ({ index, saves, setSave, balance, setBalance }: MachineProps) {

    const [options, setOptions] = useState(false);
    const toggleOptions = () => { setOptions(!options) }

    return (
        <>
            { saves[index][0] == 0 && !options && <button onClick={toggleOptions}>+</button> }
            { saves[index][0] == 0 && options && <PurchaseOptions index={index} saves={saves} setSave={setSave}
                                                                     balance={balance} setBalance={setBalance} toggle={toggleOptions} /> }
            { saves[index][0] > 0 && <MachineUI mode={saves[index][0]} type={saves[index][3]} wage={saves[index][1]} cooldown={saves[index][2]} balance={balance} setBalance={setBalance} />}
        </>
    )
}

export default Machine