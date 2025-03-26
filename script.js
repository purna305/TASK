function toggleOptions(option) {
  document.querySelectorAll('.bundle-option').forEach((el, index) => {
      if (index + 1 === option) {
          el.classList.add('selected');
          el.querySelector('input[type="radio"]').checked = true;
          document.getElementById(`options-${option}`).classList.add('visible');
      } else {
          el.classList.remove('selected');
          el.querySelector('input[type="radio"]').checked = false;
          document.getElementById(`options-${index + 1}`).classList.remove('visible');
      }
  });
}
