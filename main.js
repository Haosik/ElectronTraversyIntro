const {app, BrowserWindow} = require('electron');
const path = require('path');
const url = require('url');

//init win (not to be closed by garbage collector)
let win;


function createWindow() {
    //create programm window with width, height and icon
    win = new BrowserWindow({width: 800, height: 600, icon: __dirname + '/img/electronintro-small.png'});

    //load index.html by default
    win.loadURL(url.format({
        pathname: path.join(__dirname, 'index.html'),
        protocol: 'file',
        slashes: true
    }));

    //open devtools
    // win.webContents.openDevTools();

    //kill win process when app is closed
    win.on('closed', () => {
        win = null
    });
}

//Run createWindow function that's described above
app.on('ready', createWindow);

//quit when all windows are closed
app.on('window-all-closed', () => {
    if(process.platform !== 'darwin') {
        app.quit();
    }
})