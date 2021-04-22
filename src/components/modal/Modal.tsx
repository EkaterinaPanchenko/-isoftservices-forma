import { FC } from "react";
import { observer } from "mobx-react-lite";
import { useDataStore } from "../../store/context";
import "./modal.scss";

export const Modal: FC = observer(() => {
  const { fullname, clearFullname } = useDataStore();

  return (
    <div className={`modal ${fullname ? "modal--opened" : ""}`}>
      <div className="modal__container">
        <div className="modal__close">
          <button
            type="button"
            className="modal__close-button"
            onClick={clearFullname}
          >
            ×
          </button>
        </div>
        <div className="modal__content">
          <p className="modal__content-description">
            Здравствуйте, {fullname}!
          </p>
        </div>
      </div>
      <div className="modal__overlay" />
    </div>
  );
});
