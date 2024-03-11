import { Modal } from "bootstrap";

const modalMenuOptions = {
  keyboard: false,
  focus: false,
};

const modalMenu = new Modal("#modalMenu", modalMenuOptions);

modalMenu.show();
