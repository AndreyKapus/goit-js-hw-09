!function(){var t=document.querySelector("button[data-start]"),e=document.querySelector("button[data-stop]"),d=document.querySelector("body");t.addEventListener("click",(function n(){timerId=setInterval((function(){d.style.backgroundColor="#".concat(Math.floor(16777215*Math.random()).toString(16))}),1e3),n&&(t.disabled=!0,e.disabled=!1)}));e.disabled=!0;e.addEventListener("click",(function d(){clearInterval(timerId),d&&(t.disabled=!1,e.disabled=!0)}))}();
//# sourceMappingURL=01-color-switcher.4cdbf78c.js.map
