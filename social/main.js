const electron=require('electron');
const url=require('url');
const path=require('path');
const {app,BrowserWindow,Menu}=electron;
let mainWindow;
app.on('ready',function(){
    mainWindow=new BrowserWindow({});
    mainWindow.loadURL(url.format({
        pathname: path.join(__dirname, 'mainWindow.html'),
        protocol: 'file:',
        slashes:true
    }));
    mainWindow.on('closed', function(){
        app.quit();
    });
    // Build menu from template
  const mainMenu = Menu.buildFromTemplate(mainMenuTemplate);
  // Insert menu
  Menu.setApplicationMenu(mainMenu);
    win.openDevTools();
});
const mainMenuTemplate =  [
    // Each object is a dropdown
    {
  label:'File'
    }];