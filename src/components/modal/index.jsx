import { useTranslation } from "react-i18next";
import "./modal.scss";
import CloseIcon from "assets/icons/close.png";

const Modal = ({ children, onClose=()=>{}}) => {
  const {t} = useTranslation()
  return (
    <div
      id="modal_wrapper"
      onClick={(e) => {
        if (e.target.id === "modal_wrapper")
          onClose();
      }}
      className={"Modal_wrapper"}
    >
      <div className={"Modal"}>
        <div className={"Icon_wrapper"}>
          <div onClick={onClose}>
            <img src={CloseIcon} alt="" />
          </div>
        </div>
        {children}
      </div>
    </div>
  );
};

export default Modal;
