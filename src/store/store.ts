import { makeAutoObservable } from "mobx"
import { PanelSliceState } from "../model/types"
import { panels } from "./slices/panels-slice"

export class Store {

    public panels: PanelSliceState | null = null

    constructor(panels: PanelSliceState) {
        makeAutoObservable(this)
        this.panels = panels
    }
}


export const store = new Store(panels)
