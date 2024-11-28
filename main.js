const { app, BrowserWindow } = require('electron');
const path = require('path');


let loadingWindow;
let mainWindow;


function createLoadingWindow() {
  loadingWindow = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {},
    icon: path.join(__dirname, "images/app-icon.jpeg"),
  });

  loadingWindow.loadFile("./public/loading/loading.html");
}

function createWindow() {
  mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {},
    icon: path.join(__dirname, "images/app-icon.jpeg"),
  });

  mainWindow.loadURL('http://localhost:3000');

  mainWindow.on('ready-to-show', () => {
    loadingWindow.close();
    mainWindow.show();
  })

  mainWindow.on('closed', () => {
    mainWindow = null;
  });
}

app.on('ready', () => {
  createLoadingWindow();

  setTimeout(() => {
    createWindow();
  }, 3000);
});

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', () => {
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow();
  };
});
