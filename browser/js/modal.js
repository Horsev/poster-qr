(() => {
  const modalOptions = {
    keyboard: false,
    focus: false,
  };

  const { Modal } = window.bootstrap;

  const getModalById = (id) => document.getElementById(id);

  const createModalObject = (modal, options) => new Modal(modal, options);

  const showModal = (modal) => modal.show();

  document.addEventListener("DOMContentLoaded", () => {
    const modalId = "modalMenu";

    const modalElement = getModalById(modalId);

    const modal = createModalObject(modalElement, modalOptions);

    return showModal(modal);
  });
})();
