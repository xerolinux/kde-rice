/*
Copyright 2018 <tren3f@gmail.com>

MIT License

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
*/

var displayWidth = workspace.displayWidth;
var displayHeight = workspace.displayHeight;

var showPanel = 1;

var decreasePanelSize = "panelById(panelIds[0]).height = 0";
var increasePanelSize = "panelById(panelIds[0]).height = 32";

var sizer = function(client) {
    if(client != null)
        if(client.width>=displayWidth && client.height>=displayHeight && showPanel)
        {
            showPanel = 0;
            callDBus("org.kde.plasmashell" , "/PlasmaShell" , "org.kde.PlasmaShell" , "evaluateScript" , decreasePanelSize);
        }
        else if(client.width<displayWidth && client.height<displayHeight && !showPanel)
        {
            showPanel = 1;
            callDBus("org.kde.plasmashell" , "/PlasmaShell" , "org.kde.PlasmaShell" , "evaluateScript" , increasePanelSize);
        }
}

workspace.clientAdded.connect(sizer);
workspace.clientRemoved.connect(sizer);
workspace.clientManaging.connect(sizer);
workspace.clientMinimized.connect(sizer);
workspace.clientUnminimized.connect(sizer);
workspace.clientRestored.connect(sizer);
workspace.clientMaximizeSet.connect(sizer);
workspace.killWindowCalled.connect(sizer);
workspace.clientActivated.connect(sizer);
workspace.clientFullScreenSet.connect(sizer);
workspace.currentDesktopChanged.connect(sizer);