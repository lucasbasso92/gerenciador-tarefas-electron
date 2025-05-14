 // importa modulos app e BrowserWindow do Electron
const { app, BrowserWindow } = require('electron');


function createWindow () {
  // Cria uma nova janela de navegação
  const window = new BrowserWindow({
    width: 800, // largura da janela
    height: 600, // altura da janela

  
});

// Carrega o arquivo index.html na janela
  window.loadFile('src/pages/index.html');
}

app.whenReady().then( () => {
    createWindow(); // chama a função de criar a janela 
   
})
