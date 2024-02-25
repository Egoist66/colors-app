import chroma from "chroma-js";
import {makeAutoObservable } from "mobx";
import { ReactNode } from "react";
import { data } from "../../api/data";

export type PanelsData = Array<{text: string, color: string, blocked: boolean, openIcon: ReactNode, closeIcon: ReactNode, id: string}>

export class PanelSlice {

   public panelsData: PanelsData = []
   public colors: string[] | undefined = []
   public colorsHash: string = ''

    constructor(panelsData: PanelsData = []){
        makeAutoObservable(this)

        this.panelsData = panelsData
        this.colors = this.generatePanelColors(false)
     
     
        
    }

   
    public setPanelData(data: PanelsData){
        this.panelsData = [...this.panelsData, ...data]
    }

    public generatePanelColorHash(colors: string[]){
        
        this.colorsHash = colors.map(col => col.substring(1)).join("-")
        document.location.hash = this.colorsHash
    
    
    }

    public loadColorsFromHash(){
        if(document.location.hash.length > 1){
            return [...document.location.hash.substring(1).split('-').map(color => '#' + color)]
        }

       
    }

    public generatePanelColors(isInitial: boolean){
        
        const hexCodes = "0123456789ABCDEF";
        let colors: string[] | undefined = isInitial ? this.loadColorsFromHash(): []

        for (let i = 0; i < data.length; i++) {
            let color = "#";
            for (let j = 0; j < data.length; j++) {
                if(isInitial){
                    console.log(color);
                    
                    color = colors![i]
                }
                else {
                    color +=  hexCodes[Math.floor(Math.random() * hexCodes.length)];
                }

           
                
            }
            
            if(!isInitial){
                colors?.push(color)
            }
            
            if(this.panelsData.length){
                this.panelsData[i].color = this.panelsData[i].blocked ? this.panelsData[i].color : color
                this.generatePanelColorHash(colors!)
                this.colors = [...colors!]
            }
            
          
            
        }

        

        return colors

     
    }

    convertPanelColors(color: string){
        try {
            const lum = chroma(color).luminance()
            return lum > 0.5 ? 'black': 'white'
        }
        catch(e){
            console.log(e)
            return 'black'
        }
    }

    blockCurrentPanelColor = (id: string) => {
        
        this.panelsData = this.panelsData.map(c => c.id === id ? {...c, blocked: !c.blocked}: c)

        
    }


}



export const panels = new PanelSlice(data)
