/** layuiAdmin.pro-v1.2.1 LPPL License By http://www.layui.com/admin/ */
 ;layui.define([],function(e){function s(e,s){return l(e||self.document.URL||self.location.href,s||t())}function t(){var e=document.getElementsByTagName("script");return e[e.length-1].src}function l(e,s){var t=s;return/^(\/|\\\\)/.test(s)?t=/^.+?\w(\/|\\\\)/.exec(e)[0]+s.replace(/^(\/|\\\\)/,""):/^[a-z]+:/i.test(s)||(e=e.split("#")[0].split("?")[0].replace(/[^\\\/]+$/,""),t=e+""+s),a(t)}function a(e){var s=/^[a-z]+:\/\//.exec(e)[0],t=null,l=[];for(e=e.replace(s,"").split("?")[0].split("#")[0],e=e.replace(/\\/g,"/").split(/\//),e[e.length-1]="";e.length;)".."===(t=e.shift())?l.pop():"."!==t&&l.push(t);return s+l.join("/")}var i=function(e){var s=document.cookie,t=s.indexOf(e);if(t!=-1){t=t+e.length+1;var l=s.indexOf(";",t);l==-1&&(l=s.length);var a=unescape(s.substring(t,l))}return a},r="",n=i(".AspNetCore.Culture"),o=/c=[a-z-]+\|uic=([a-z-]+)/i;if(n&&o.test(n)){var c=n.match(o);c[1].indexOf("en")!=-1?r="en":c[1].indexOf("zh")!=-1&&(r="zh-cn")}if(""==r){var d=(navigator.language||navigator.browserLanguage||navigator.userLanguage).toLowerCase();r=d.indexOf("en")!=-1?"en":"zh-cn"}var g=(window.UEDITOR_HOME_URL||s())+"layuiadmin/ueditor/";window.UEDITOR_CONFIG={UEDITOR_HOME_URL:g,serverUrl:g.replace("layuiadmin/ueditor/","")+"_Framework/",toolbars:[["fullscreen","source","|","undo","redo","|","selectall","cleardoc","|","bold","italic","underline","fontborder","strikethrough","superscript","subscript","removeformat","formatmatch","autotypeset","blockquote","pasteplain","|","forecolor","backcolor","insertorderedlist","insertunorderedlist","|","rowspacingtop","rowspacingbottom","lineheight","|","customstyle","paragraph","fontfamily","fontsize","|","directionalityltr","directionalityrtl","indent","|","justifyleft","justifycenter","justifyright","justifyjustify","|","touppercase","tolowercase","|","link","unlink","anchor","|","imagenone","imageleft","imageright","imagecenter","|","simpleupload","insertimage","emotion","scrawl","attachment","map","insertcode","pagebreak","template","background","|","horizontal","date","time","spechars","|","inserttable","deletetable","insertparagraphbeforetable","insertrow","deleterow","insertcol","deletecol","mergecells","mergeright","mergedown","splittocells","splittorows","splittocols","|","print","preview","searchreplace"]],lang:r,langPath:g+"lang/",xssFilterRules:!0,inputXssFilter:!0,outputXssFilter:!0,whitList:{a:["target","href","title","class","style"],abbr:["title","class","style"],address:["class","style"],area:["shape","coords","href","alt"],article:[],aside:[],audio:["autoplay","controls","loop","preload","src","class","style"],b:["class","style"],bdi:["dir"],bdo:["dir"],big:[],blockquote:["cite","class","style"],br:[],caption:["class","style"],center:[],cite:[],code:["class","style"],col:["align","valign","span","width","class","style"],colgroup:["align","valign","span","width","class","style"],dd:["class","style"],del:["datetime"],details:["open"],div:["class","style"],dl:["class","style"],dt:["class","style"],em:["class","style"],font:["color","size","face"],footer:[],h1:["class","style"],h2:["class","style"],h3:["class","style"],h4:["class","style"],h5:["class","style"],h6:["class","style"],header:[],hr:[],i:["class","style"],img:["src","alt","title","width","height","id","_src","loadingclass","class","data-latex"],ins:["datetime"],li:["class","style"],mark:[],nav:[],ol:["class","style"],p:["class","style"],pre:["class","style"],s:[],section:[],small:[],span:["class","style"],sub:["class","style"],sup:["class","style"],strong:["class","style"],table:["width","border","align","valign","class","style"],tbody:["align","valign","class","style"],td:["width","rowspan","colspan","align","valign","class","style"],tfoot:["align","valign","class","style"],th:["width","rowspan","colspan","align","valign","class","style"],thead:["align","valign","class","style"],tr:["rowspan","align","valign","class","style"],tt:[],u:[],ul:["class","style"],video:["autoplay","controls","loop","preload","src","height","width","class","style"]}},window.UE={getUEBasePath:s},layui.define("ueditor",function(e){e("ueditorconfig",window.UEDITOR_CONFIG)})});