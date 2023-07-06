// LOCATION
// [<stage name>, <cost to unlock (0 = unlocked)>, <slots>]
export const loca = [
    ['Mom\'s Basement', 0],
    ['Mobile Home', 20000],
    ['Studio Apartment', 40000],
    ['Split Entry', 100000],
    ['Victorian', 250000],
    ['Mountain Retreat', 800000]
];

export const semiBoard = [
    [[0, 0, 0, 0]],
    [[0, 0, 0, 0], [0, 0, 0, 0]],
    [[0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0]],
    [[0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0]],
    [[0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0]],
    [[0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0]],
];

export const autoBoard = [
    [[0, 0, 0, 0]],
    [[0, 0, 0, 0], [0, 0, 0, 0]],
    [[0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0]],
    [[0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0]],
    [[0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0]],
    [[0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0]],
];

// MACHINES
export enum Phase {
    None,
    Manual,
    Semi,
    Auto
}
// [<phase>, <isLaptop>, <wage>, <wage upgrades left>, <cooldown>, <cooldown upgrades left>]
const mach0 = [[[Phase.None, true, 10, 5, 2000, 5, 0], [Phase.None, true, 10, 5, 2000, 5, 0], [Phase.None, true, 10, 5, 2000, 5, 0], [Phase.None, true, 10, 5, 2000, 5, 0]]];
const mach1 = [
    [[Phase.None, true, 10, 5, 2000, 5, 0], [Phase.None, true, 10, 5, 2000, 5, 0], [Phase.None, true, 10, 5, 2000, 5, 0], [Phase.None, true, 10, 5, 2000, 5, 0]],
    [[Phase.None, true, 10, 5, 2000, 5, 0], [Phase.None, true, 10, 5, 2000, 5, 0], [Phase.None, true, 10, 5, 2000, 5, 0], [Phase.None, true, 10, 5, 2000, 5, 0]],
];
const mach2 = [
    [[Phase.None, true, 10, 5, 2000, 5, 0], [Phase.None, true, 10, 5, 2000, 5, 0], [Phase.None, true, 10, 5, 2000, 5, 0], [Phase.None, true, 10, 5, 2000, 5, 0]],
    [[Phase.None, true, 10, 5, 2000, 5, 0], [Phase.None, true, 10, 5, 2000, 5, 0], [Phase.None, true, 10, 5, 2000, 5, 0], [Phase.None, true, 10, 5, 2000, 5, 0]],
    [[Phase.None, true, 10, 5, 2000, 5, 0], [Phase.None, true, 10, 5, 2000, 5, 0], [Phase.None, true, 10, 5, 2000, 5, 0], [Phase.None, true, 10, 5, 2000, 5, 0]],
];
const mach3 = [
    [[Phase.None, true, 10, 5, 2000, 5, 0], [Phase.None, true, 10, 5, 2000, 5, 0], [Phase.None, true, 10, 5, 2000, 5, 0], [Phase.None, true, 10, 5, 2000, 5, 0]],
    [[Phase.None, true, 10, 5, 2000, 5, 0], [Phase.None, true, 10, 5, 2000, 5, 0], [Phase.None, true, 10, 5, 2000, 5, 0], [Phase.None, true, 10, 5, 2000, 5, 0]],
    [[Phase.None, true, 10, 5, 2000, 5, 0], [Phase.None, true, 10, 5, 2000, 5, 0], [Phase.None, true, 10, 5, 2000, 5, 0], [Phase.None, true, 10, 5, 2000, 5, 0]],
    [[Phase.None, true, 10, 5, 2000, 5, 0], [Phase.None, true, 10, 5, 2000, 5, 0], [Phase.None, true, 10, 5, 2000, 5, 0], [Phase.None, true, 10, 5, 2000, 5, 0]],
];
const mach4 = [
    [[Phase.None, true, 10, 5, 2000, 5, 0], [Phase.None, true, 10, 5, 2000, 5, 0], [Phase.None, true, 10, 5, 2000, 5, 0], [Phase.None, true, 10, 5, 2000, 5, 0]],
    [[Phase.None, true, 10, 5, 2000, 5, 0], [Phase.None, true, 10, 5, 2000, 5, 0], [Phase.None, true, 10, 5, 2000, 5, 0], [Phase.None, true, 10, 5, 2000, 5, 0]],
    [[Phase.None, true, 10, 5, 2000, 5, 0], [Phase.None, true, 10, 5, 2000, 5, 0], [Phase.None, true, 10, 5, 2000, 5, 0], [Phase.None, true, 10, 5, 2000, 5, 0]],
    [[Phase.None, true, 10, 5, 2000, 5, 0], [Phase.None, true, 10, 5, 2000, 5, 0], [Phase.None, true, 10, 5, 2000, 5, 0], [Phase.None, true, 10, 5, 2000, 5, 0]],
    [[Phase.None, true, 10, 5, 2000, 5, 0], [Phase.None, true, 10, 5, 2000, 5, 0], [Phase.None, true, 10, 5, 2000, 5, 0], [Phase.None, true, 10, 5, 2000, 5, 0]],
    [[Phase.None, true, 10, 5, 2000, 5, 0], [Phase.None, true, 10, 5, 2000, 5, 0], [Phase.None, true, 10, 5, 2000, 5, 0], [Phase.None, true, 10, 5, 2000, 5, 0]],
];
const mach5 = [
    [[Phase.None, true, 10, 5, 2000, 5, 0], [Phase.None, true, 10, 5, 2000, 5, 0], [Phase.None, true, 10, 5, 2000, 5, 0], [Phase.None, true, 10, 5, 2000, 5, 0]],
    [[Phase.None, true, 10, 5, 2000, 5, 0], [Phase.None, true, 10, 5, 2000, 5, 0], [Phase.None, true, 10, 5, 2000, 5, 0], [Phase.None, true, 10, 5, 2000, 5, 0]],
    [[Phase.None, true, 10, 5, 2000, 5, 0], [Phase.None, true, 10, 5, 2000, 5, 0], [Phase.None, true, 10, 5, 2000, 5, 0], [Phase.None, true, 10, 5, 2000, 5, 0]],
    [[Phase.None, true, 10, 5, 2000, 5, 0], [Phase.None, true, 10, 5, 2000, 5, 0], [Phase.None, true, 10, 5, 2000, 5, 0], [Phase.None, true, 10, 5, 2000, 5, 0]],
    [[Phase.None, true, 10, 5, 2000, 5, 0], [Phase.None, true, 10, 5, 2000, 5, 0], [Phase.None, true, 10, 5, 2000, 5, 0], [Phase.None, true, 10, 5, 2000, 5, 0]],
    [[Phase.None, true, 10, 5, 2000, 5, 0], [Phase.None, true, 10, 5, 2000, 5, 0], [Phase.None, true, 10, 5, 2000, 5, 0], [Phase.None, true, 10, 5, 2000, 5, 0]],
    [[Phase.None, true, 10, 5, 2000, 5, 0], [Phase.None, true, 10, 5, 2000, 5, 0], [Phase.None, true, 10, 5, 2000, 5, 0], [Phase.None, true, 10, 5, 2000, 5, 0]],
    [[Phase.None, true, 10, 5, 2000, 5, 0], [Phase.None, true, 10, 5, 2000, 5, 0], [Phase.None, true, 10, 5, 2000, 5, 0], [Phase.None, true, 10, 5, 2000, 5, 0]],
];

const m_arrays = [mach0, mach1, mach2, mach3, mach4, mach5];
export default m_arrays;