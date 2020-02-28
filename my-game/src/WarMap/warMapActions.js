import {warMapOnLoad} from "./warMapTypes";
import {makeSimpleActions} from "../helpers";


export const warMapAction = (payload) => makeSimpleActions(warMapOnLoad, payload)
