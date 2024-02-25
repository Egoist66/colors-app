import { FC, useEffect } from "react";
import { Panels } from "./Panels/Panels";
import { store } from "../store/store";


export const App: FC = () => {
  
  const {panels} = store

  useEffect(() => {
    
      panels?.generatePanelColors(false)
  }, [])

  return (
    <>
      <Panels />
    </>
  );
};
