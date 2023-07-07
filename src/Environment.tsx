import Machine from "./Machine";

interface EnvProps {
    balance: number;
    setBalance: React.Dispatch<React.SetStateAction<number>>;
    semi: number[][][];
    setSemi: React.Dispatch<React.SetStateAction<number[][][]>>;
    auto: number[][][];
    setAuto: React.Dispatch<React.SetStateAction<number[][][]>>;

    curLoc: number;
    setCurLoc: React.Dispatch<React.SetStateAction<number>>;
    locations: (string | number)[][];

    /* destructuring of machines: machines[location(0-5)][section(4 machines/section)][index in section(0-3)][index of state variable] */
    /* variable index: -> [<phase>(0), <isLaptop>(1), <wage>(2), <wage upgrades left>(3), <cooldown>(4), <cooldown upgrades left>(5), <semi vault>(6)]  */
    machines: (number | boolean)[][][][];
    setMachines: React.Dispatch<React.SetStateAction<(number | boolean)[][][][]>>;
}

function Environment ({ balance, setBalance, semi, setSemi, auto, setAuto, curLoc, setCurLoc, locations, machines, setMachines }: EnvProps) {
    
    const changeStage = (e: any) => {
        setCurLoc(e.target.value);
    }

    return (
        <>
            <h2>Location: </h2>
            <select onChange={changeStage}>
                { locations.map((v, i) => { return v[1] === 0 && <option key={i} value={i}>{v[0]}</option> }) }
            </select>
            <table>
                <tbody>
                        { 
                            machines[curLoc].map((machs, ind) => { 
                                return (<tr key={ind}>{ machs.map((_v, i) => { 
                                    return <td key={i}><Machine balance={balance} setBalance={setBalance}
                                                                semi={semi} setSemi={setSemi} auto={auto} setAuto={setAuto}
                                                                curLoc={curLoc} section={ind} index={i} 
                                                                machines={machines} setMachines={setMachines}/></td>
                                }) }</tr>)
                            })
                        }
                </tbody>
            </table>
        </>
    )
}

export default Environment;