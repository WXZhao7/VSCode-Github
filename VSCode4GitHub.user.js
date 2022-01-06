// ==UserScript==
// @namespace    https://vscode.dev/github/WXZhao7/VSCode-Github
// @name         VSCode-Github
// @version      0.1
// @description  view repositories in VSCode web
// @author       WXZhao
// @match        https://github.com/*/*
// @icon         https://code.visualstudio.com/favicon.ico
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    var VSCodeWeb = document.createElement("li");
    VSCodeWeb.innerHTML ='Code';
    VSCodeWeb.className='open-on-sourcegraph btn btn-sm tooltipped tooltipped-s';
    var li=document.getElementsByClassName('pagehead-actions flex-shrink-0 d-none d-md-inline').item(0).getElementsByTagName('li')[0]
    document.getElementsByClassName('pagehead-actions flex-shrink-0 d-none d-md-inline').item(0).insertBefore(VSCodeWeb,li)
    VSCodeWeb.onclick=function()
    {
        var href=top.liation.href.replace('github.com','vscode.dev/github')
        top.liation.href=href;
    }
})();