/*
*   Copyright (c) 2012 Martin Gr‰ﬂlin <mgraesslin@kde.org>
*
*   This program is free software; you can redistribute it and/or modify
*   it under the terms of the GNU Lesser General Public License as published by
*   the Free Software Foundation; either version 2.1 of the License, or
*   (at your option) any later version.
*
*   This program is distributed in the hope that it will be useful,
*   but WITHOUT ANY WARRANTY; without even the implied warranty of
*   MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
*   GNU General Public License for more details.
*
*   You should have received a copy of the GNU Lesser General Public License
*   along with this program; if not, write to the
*   Free Software Foundation, Inc.,
*   51 Franklin Street, Fifth Floor, Boston, MA  02110-1301  USA .
*/

/*
 * For more informations about the KWin Scripting please take a look at the below lines
 * Tutorial: http://techbase.kde.org/Development/Tutorials/KWin/Scripting
 * Api: http://techbase.kde.org/Development/Tutorials/KWin/Scripting/API_4.9
*/
/*global registerUserActionsMenu*/
registerUserActionsMenu(function (client) {
    "use strict";
    var opacity = Math.round(client.opacity * 100);
    return {
        text: "Window Opacity",
        items: [{
            text: "100 %",
            checkable: true,
            checked: opacity === 100,
            triggered: function () {
                client.opacity = 1.0;
            }
        }, {
            text: "75 %",
            checkable: true,
            checked: opacity === 75,
            triggered: function () {
                client.opacity = 0.75;
            }
        }, {
            text: "50 %",
            checkable: true,
            checked: opacity === 50,
            triggered: function () {
                client.opacity = 0.5;
            }
        }, {
            text: "25 %",
            checkable: true,
            checked: opacity === 25,
            triggered: function () {
                client.opacity = 0.25;
            }
        }, {
            text: "10 %",
            checkable: true,
            checked: opacity === 10,
            triggered: function () {
                client.opacity = 0.1;
            }
        }]
    };
});
