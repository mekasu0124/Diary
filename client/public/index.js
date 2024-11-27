const { app, BrowserWindow } = require('electron');
const path = require('node:path');

let loadingWindow;
let mainWindow;

function createLoadingWindow() {
  loadingWindow = new BrowserWindow({
    width: 1200,
    height: 800,
    frame: false,
    alwaysOnTop: false,
    transparent: true,
    webPreferences: {},
    icon: path.join(__dirname, "images/app-icon.jpeg"),
  });

  loadingWindow.loadFile("./loading/loading.html");
};

function createMainWindow() {
  mainWindow = new BrowserWindow({
    width: 1200,
    height: 800,
    show: false,
    webPreferences: {},
    icon: path.join(__dirname, "images/app-icon.jpeg"),
  });

  mainWindow.loadURL('http://localhost:3000');

  mainWindow.on('ready-to-show', () => {
    loadingWindow.close();
    mainWindow.show();
  });
};

app.on('ready', () => {
  createLoadingWindow();

  setTimeout(() => {
    createMainWindow();
  }, 1000);
});

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  };
});
