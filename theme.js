/*
============================================
; Title: javascript file for WEB330
; Author: Chris Harris
; Date: 21 March 2021
; css file for the course
;===========================================
*/


function setSelectedTheme(){//functions for setting the theme
    document.body.classList.value = localStorage.getItem("mode") || "light-theme"; 
}

function setDefaultTheme(){//functions for setting the theme
    const theme = localStorage.getItem("mode") || "light-theme";
    const iconMode = localStorage.getItem("iconMode") || "fa-toggle-off";
    const iconText = localStorage.getItem("iconText") || "Light Mode";

    document.body.classList.value = theme;
    document.getElementById("icon-mode").classList.add(iconMode);
    document,getElementById("icon-text").innerHTML = iconText;
}