document.addEventListener("DOMContentLoaded", function () {
  const modoDestacado = document.getElementById("modoDestacado");
  const modoEspacado = document.getElementById("modoEspacado");
  const protanomalia = document.getElementById("protanomalia");
  const deuteranomalia = document.getElementById("deuteranomalia");
  const tritanopia = document.getElementById("tritanopia");


  // Carregar configurações salvas
  chrome.storage.sync.get([
    "modoDestacado", "modoEspacado", 
    "protanomalia", "deuteranomalia", "tritanopia"
  ], function (data) {
    modoDestacado.checked = data.modoDestacado || false;
    modoEspacado.checked = data.modoEspacado || false;
    protanomalia.checked = data.protanomalia || false;
    deuteranomalia.checked = data.deuteranomalia || false;
    tritanopia.checked = data.tritanopia || false;
  });

  // Função para salvar e aplicar preferências
  function atualizarPreferencias() {
    console.log("Preferências atualizadas!");
  
    chrome.storage.sync.set({
      modoDestacado: modoDestacado.checked,
      modoEspacado: modoEspacado.checked,
      protanomalia: protanomalia.checked,
      deuteranomalia: deuteranomalia.checked,
      tritanopia: tritanopia.checked
    }, function () {
      chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
        chrome.tabs.sendMessage(tabs[0].id, { action: "atualizarEstilo" });
      });
    });
  }

  // Listener para detectar alterações nos checkboxes e salvar preferências
  modoDestacado.addEventListener("change", function () {
    console.log("Modo Destacado alterado");
    atualizarPreferencias();
  });
  modoEspacado.addEventListener("change", function () {
    console.log("Modo Espacado alterado");
    atualizarPreferencias();
  });
  protanomalia.addEventListener("change", function () {
    console.log("Protanomalia alterada");
    atualizarPreferencias();
  });
  deuteranomalia.addEventListener("change", function () {
    console.log("Deuteranomalia alterada");
    atualizarPreferencias();
  });
  tritanopia.addEventListener("change", function () {
    console.log("Tritanopia alterada");
    atualizarPreferencias();
  });
});

