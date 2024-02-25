import { FC, ReactNode, memo, useEffect, useState } from "react";

type PanelProps = {
  open: ReactNode;
  titleColor: "black" | "white";
  blocked: boolean;
  blockCurrentColor: (id: string) => void;
  copyText: (text: string) => void
  id: string;
  close: ReactNode;
  randomColor: string;
};

export const Panel: FC<PanelProps> = memo((props) => {
  const {
    open,
    blockCurrentColor,
    id,
    titleColor,
    copyText,
    blocked,
    close,
    randomColor,
  } = props;
 

  const [blockedColor, setBlockColor] = useState<string>("");

  useEffect(() => {
       
    if(blocked){
        setBlockColor(randomColor);
    }

    if(!blocked){
        setBlockColor('');
    }
    
  }, [blocked]);





  return (
    <div
      style={{
        backgroundColor: blockedColor || randomColor,
        transition: "0.3s all ease",
      }}
      className="col"
    >
      <h2 onClick={() => copyText(blockedColor || randomColor)} style={{ color: blocked ? 'black' : titleColor }}>
        {blockedColor || randomColor}
      </h2>
      <button
        
        onClick={() => blockCurrentColor(id)}
        style={{ color: titleColor }}
      >
        {blocked ? close : open}
      </button>
    </div>
  );
})
