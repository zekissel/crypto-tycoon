import { useState } from "react";
import { Phase } from "./m_arrays";

interface MachineProps {
    balance: number;
    setBalance: React.Dispatch<React.SetStateAction<number>>;
    auto: number[][][];
    setAuto: React.Dispatch<React.SetStateAction<number[][][]>>;
    semi: number[][][];
    setSemi: React.Dispatch<React.SetStateAction<number[][][]>>;

    curLoc: number;
    section: number;
    index: number;
    machines: (number | boolean)[][][][];
    setMachines: React.Dispatch<React.SetStateAction<(number | boolean)[][][][]>>;
}

interface SemiProps {
    balance: number;
    setBalance: React.Dispatch<React.SetStateAction<number>>;
    semi: number[][][];
    setSemi: React.Dispatch<React.SetStateAction<number[][][]>>;

    curLoc: number;
    section: number;
    index: number;
    machines: (number | boolean)[][][][];
    setMachines: React.Dispatch<React.SetStateAction<(number | boolean)[][][][]>>;
}

interface AutoProps {
    auto: number[][][];
    setAuto: React.Dispatch<React.SetStateAction<number[][][]>>;

    curLoc: number;
    section: number;
    index: number;
    machines: (number | boolean)[][][][];
}

function Auto ({ auto, setAuto, curLoc, section, index, machines }: AutoProps) {

    const toggleMine = () => {
        let factor: number = Math.round((Number(machines[curLoc][section][index][2]) * 2000 / Number(machines[curLoc][section][index][4])));
        if (auto[curLoc][section][index] === 0) { 
            const newAuto = [...auto];
            newAuto[curLoc][section][index] = factor;
            setAuto(newAuto);
        } else {
            const newAuto = [...auto];
            newAuto[curLoc][section][index] = 0;
            setAuto(newAuto);
        }
    }

    return (
        <>
            <button onClick={toggleMine}>{ auto[curLoc][section][index] !== 0 ? "Stop Mining" : "Auto Mine" }</button>
        </>
    )
}

function Semi ({ balance, setBalance, semi, setSemi, curLoc, section, index, machines, setMachines }: SemiProps) {

    const [wage, setWage] = useState(Number(machines[curLoc][section][index][6]));
    const toggleMine = () => {
        let factor: number = Math.round((Number(machines[curLoc][section][index][2]) * 2000 / Number(machines[curLoc][section][index][4])));
        if (wage === 0) { 
            const newSemi = [...semi];
            newSemi[curLoc][section][index] = factor;
            setSemi(newSemi);
            setWage(factor); 
        } else { 
            collect();
            const newSemi = [...semi];
            newSemi[curLoc][section][index] = 0;
            setSemi(newSemi);
            setWage(0); 
        }
    }

    const collect = () => {
        const machs = [...machines];
        setBalance(balance + Number(machines[curLoc][section][index][6]))
        machs[curLoc][section][index][6] = 0;
        setMachines(machs);
    }

    return (
        <>
            <button onClick={toggleMine}>{ wage !== 0 ? "Stop Mining" : "Semi Mine" }</button>
            { wage !== 0 && <button onClick={collect}>Collect - { machines[curLoc][section][index][6] }</button> }
        </>
    )
}

function MachineUI ({ balance, setBalance, semi, setSemi, auto, setAuto, curLoc, section, index, machines, setMachines }: MachineProps) {

    const cap: number = machines[curLoc][section][index][1] ? 5 : 10;
    const buyMod = (e: any) => {
        let val = Number(e.target.value);
        let cost = (cap - Number(machines[curLoc][section][index][val + 1])) * 2 ** 10;
        if (Number(machines[curLoc][section][index][val + 1]) > 0 && balance >= cost) {
            let nerf: boolean = Number(machines[curLoc][section][index][val + 1]) > 5;
            let machs = [...machines];
            machs[curLoc][section][index][val + 1] = Number(machs[curLoc][section][index][val + 1]) - 1;
            switch(val) {
                case 2: machs[curLoc][section][index][val] = Math.round(Number(machs[curLoc][section][index][val]) * (nerf ? 1.5 : 2)); break;
                case 4: machs[curLoc][section][index][val] = Number(machs[curLoc][section][index][val]) - 150; break;
                default: break;
            }
            setMachines(machs);
            setBalance(balance - cost);
        }
    }

    let gen: string = "Manual";
    let cost: number = 250;
    switch (machines[curLoc][section][index][0]) {
        case Phase.Semi: gen = "Semi"; cost = 2500; break;
        case Phase.Auto: gen = "Auto"; cost = 0; break;
        default: break;
    }
    const nextGen = () => {
        if (balance >= cost) {
            const machs = [...machines];
            switch (Number(machines[curLoc][section][index][0])) {
                case Phase.Manual: machs[curLoc][section][index][0] = Phase.Semi; break;
                case Phase.Semi: 
                    machs[curLoc][section][index][0] = Phase.Auto;
                    cost -= Number(machs[curLoc][section][index][6]);
                    const newSemi = [...semi];
                    newSemi[curLoc][section][index] = 0;
                    setSemi(newSemi);
                    break;
                default: break;
            }
            setMachines(machs);
            setBalance(balance - cost);
        }
    }

    const manual = (e: any) => {
        const btn = (e.target as HTMLButtonElement);
        btn.disabled = true;
        setTimeout(() => {
            btn.disabled = false;
        }, Number(machines[curLoc][section][index][4]))
        setBalance(balance + Number(machines[curLoc][section][index][2]));
    }

    let price = machines[curLoc][section][index][1] ? 500 : 3000;
    price += ((Number(machines[curLoc][section][index][2]) * 2) + (2000 - Number(machines[curLoc][section][index][4])));
    switch (machines[curLoc][section][index][0]) {
        case Phase.Semi: price += 100; break;
        case Phase.Auto: price += 1000; break;
    }
    const [confirm, setConfirm] = useState(false);
    const confirmSell = () => setConfirm(!confirm);

    const sellMachine = () => {
        const machs = [...machines];
        if (machines[curLoc][section][index][0] == Phase.Semi) {
            const newSemi = [...semi];
            newSemi[curLoc][section][index] = 0;
            setSemi(newSemi);
        }
        if (machines[curLoc][section][index][0] == Phase.Auto) {
            const newAuto = [...auto];
            newAuto[curLoc][section][index] = 0;
            setAuto(newAuto);
        }
        machs[curLoc][section][index][0] = Phase.None;
        machs[curLoc][section][index][1] = true;
        machs[curLoc][section][index][2] = 10;
        machs[curLoc][section][index][3] = 5;
        machs[curLoc][section][index][4] = 2000;
        machs[curLoc][section][index][5] = 5;
        machs[curLoc][section][index][6] = 0;
        setBalance(price + balance);
        setMachines(machs);
    }

    return (
        <>
            { machines[curLoc][section][index][1] ? <h3>Laptop</h3> : <h3>Desktop</h3> }

            { machines[curLoc][section][index][0] === Phase.Manual && <button onClick={manual}>Mine</button> }
            { machines[curLoc][section][index][0] === Phase.Semi &&
                <Semi balance={balance} setBalance={setBalance}
                semi={semi} setSemi={setSemi}
                curLoc={curLoc} section={section} index={index} 
                machines={machines} setMachines={setMachines}/> 
            }
            { machines[curLoc][section][index][0] === Phase.Auto &&
                <Auto auto={auto} setAuto={setAuto}
                curLoc={curLoc} section={section} index={index} 
                machines={machines} /> 
            }

            <h5>Gen: { gen } | { cost !== 0 && <button onClick={nextGen}>Upgrade -${ cost }</button> }</h5>

            <h5>Wage: { machines[curLoc][section][index][2] } { Number(machines[curLoc][section][index][3]) > 0 && <button value={2} onClick={buyMod}>+{ machines[curLoc][section][index][1] ? "eGPU" : "GPU" } (-${ ((cap + 1) - Number(machines[curLoc][section][index][3])) * 2 ** 10 })</button> } | { cap - Number(machines[curLoc][section][index][3]) } / { cap } { machines[curLoc][section][index][1] ? "eGPUs" : "GPUs" }</h5>
            <h5>Cooldown: { Number(machines[curLoc][section][index][4]) / 1000.0}s { Number(machines[curLoc][section][index][5]) > 0 && <button value={4} onClick={buyMod}>+Fan (-${ ((cap + 1) - Number(machines[curLoc][section][index][5])) * 2 ** 10 })</button> } | { cap - Number(machines[curLoc][section][index][5]) } / { cap } Fans</h5>

            <h5><button onClick={confirmSell}>Sell (+{ price })</button>{ confirm && <button onClick={sellMachine}>Confirm</button> }</h5>

        </>
    )
}

function Machine ({ balance, setBalance, semi, setSemi, auto, setAuto, curLoc, section, index, machines, setMachines }: MachineProps) {

    const buyMachine = (e: any) => {
        let target: number = Number(e.target.value);
        if (balance >= target) {
            const mach = [...machines];
            mach[curLoc][section][index][0] = Phase.Manual;
            if (target === 5000) { /* adjust identifier, wage, cooldown, and upgrades for Desktops */
                mach[curLoc][section][index][1] = false;
                mach[curLoc][section][index][2] = 15;
                mach[curLoc][section][index][3] = 10;
                mach[curLoc][section][index][5] = 10;
            }
            setMachines(mach);
            setBalance(balance - target);
        }
    }

    return (
        <>
            { machines[curLoc][section][index][0] === Phase.None && 
            <>
                <h3>Purchase Machine:</h3>
                <button value={1000} onClick={buyMachine}>Laptop (1000)</button> 
                <button value={5000} onClick={buyMachine}>Desktop (5000)</button>
            </>
            }
            { machines[curLoc][section][index][0] !== Phase.None && 
                <MachineUI balance={balance} setBalance={setBalance}
                    semi={semi} setSemi={setSemi}
                    auto={auto} setAuto={setAuto}
                    curLoc={curLoc} section={section} index={index} 
                    machines={machines} setMachines={setMachines}/> 
            } 
        </>
    )
}

export default Machine