import MenuService from "../../service/menu-service/MenuService";
import PopupView from "./PopupView";

export default function addPopupSample(ms: MenuService) {
    const popup = ms.addGroup("Popup Sample");
    popup.addLink("Popup", PopupView);
}
