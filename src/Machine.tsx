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
    index: number;
    save: number[][];
    setSave: React.Dispatch<React.SetStateAction<number[][]>>;
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

interface SemiProps {
    save: number[][];
    index: number;
    balance: number;
    setBalance: React.Dispatch<React.SetStateAction<number>>;
}

function AutoMine ({wage, cool, balance, setBalance, toggle}: AutoProps) {
  
    useEffect(() => {

        const interval = setInterval(() => {
            setBalance(balance + wage);
        }, cool);
  
        return () => clearInterval(interval);
    }, [balance, wage, cool]);
  
    return <button onClick={toggle}>Stop</button>;
}

function SemiMine ({ balance, setBalance, save, index }: SemiProps) {

    const [load, setLoad] = useState(0);

    useEffect(() => {

        const interval = setInterval(() => {
            if (load < 5000) setLoad(load + save[index][1]);
        }, save[index][2]);
        return () => clearInterval(interval);
    });


    const collect = () => {
        setBalance(balance + load);
        setLoad(0);
    }

    return (
        <>
            <button onClick={collect}>Collect - {load}</button>
        </>
    )
}

function MachineUI ({ index, save, setSave, balance, setBalance}: UIProps) {

    const [mining, setMining] = useState(false);
    const toggleMine = () => {
        setMining(!mining);
    }

    const manMine = (e: any) => {
        const btn = (e.target as HTMLButtonElement);
        btn.disabled = true;
        setTimeout(() => {
            btn.disabled = false;
        }, save[index][2])
        setBalance(balance + save[index][1]);
    }

    return (
        <>
            { save[index][3] == 1 && <h3>Laptop</h3> } { save[index][3] == 2 && <h3>Desktop</h3> }
            { save[index][0] == 1 && <button onClick={manMine}>Mine</button> }
            { save[index][0] == 2 && <SemiMine save={save} index={index} balance={balance} setBalance={setBalance}/> }
            <h4>Wage: {save[index][1]} | Cooldown: {save[index][2] / 1000.00} s</h4>
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
            newSave[index][0] = 2;
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
            { saves[index][0] > 0 && <MachineUI index={index} save={saves} setSave={setSave} balance={balance} setBalance={setBalance} />}
        </>
    )
}

export default Machine