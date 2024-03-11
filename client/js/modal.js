import { Modal } from "bootstrap";

const MODAL_OPTIONS = {
  keyboard: false,
  focus: false,
};

const modalMenu = new Modal("#modalMenu", MODAL_OPTIONS);

modalMenu.show();
