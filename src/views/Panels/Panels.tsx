import { FC } from "react";
import { store } from "../../store/store";
import { Panel } from "./Panel";
import { observer } from "mobx-react";

import style from "./panels.module.scss";
import { Portal } from "../../features/Portal";
import { useCopy } from "../../hooks/useCopy";

export const Panels: FC = observer(() => {
  const { panels} = store;
  const {copyText} = useCopy()

  return (
    <>
      {panels?.panelsData.length ? (
        <Portal>
          <div className={style.portalBtnWrapper}>
            <button
              onClick={() => panels?.generatePanelColors(false)}
              className={style.getRandomBtn}
            >
              Randomize
            </button>
          </div>
        </Portal>
      ) : null}

      {panels?.panelsData.length ? (
        panels.panelsData.map((p) => (
          <Panel
            randomColor={p.color}
            copyText={copyText}
            id={p?.id}
            blockCurrentColor={panels.blockCurrentPanelColor}
            blocked={p?.blocked}
            key={p?.id}
            open={p.openIcon}
            close={p.closeIcon}
            titleColor={panels.convertPanelColors(p.color)}
          />
        ))
      ) : (
        <div className={style.nodata}>Данных нет</div>
      )}
    </>
  );
});
