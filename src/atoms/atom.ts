import { atom, useAtom } from "jotai";
import { atomWithStorage } from 'jotai/utils'

//Crete the atoms
export const userAtom = atomWithStorage('user', '');