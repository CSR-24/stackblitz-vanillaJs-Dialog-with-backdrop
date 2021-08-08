function confirmBtnClickHandler() {
  displayBackdrop(false);
  displayDialog(false);
}

function cancelBtnClickHandler() {
  displayBackdrop(false);
  displayDialog(false);
}

const displayBackdrop = display => {
  const backdrop = document.getElementById('backdropMain');
  if (backdrop) {
    if (display) {
      backdrop.classList.remove('hide');
    } else {
      backdrop.classList.add('hide');
    }
  }
};

const displayDialog = display => {
  const dialog = document.getElementById('dialogContainer');
  if (dialog) {
    if (display) {
      dialog.classList.remove('hide');
    } else {
      dialog.classList.add('hide');
    }
  }
};

function btnClickHandler() {
  displayBackdrop(true);
  displayDialog(true);
}
