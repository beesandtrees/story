_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[20],{R4kx:function(n,e,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/components/story/random-link",function(){return t("gOpK")}])},gOpK:function(n,e,t){"use strict";t.r(e);var c=t("nKUr"),s=t("MX0m"),i=t.n(s),o=t("q1tI"),l=t.n(o);e.default=function(n){var e=n.links,t=n.setScene,s=Object(o.useState)({scene:null,link_text:null}),r=s[0],u=s[1];return Object(o.useEffect)((function(){if(null===r.scene){console.log(r);var n=e[Math.floor(Math.random()*e.length)];u({scene:n?n.id:0,link_text:n?n.link_text:"Start Over"})}}),[e,r,u]),Object(c.jsxs)(l.a.Fragment,{children:[Object(c.jsx)("button",{onClick:function(){return t(r.scene||0)},className:"jsx-3357050268",children:r.link_text}),Object(c.jsx)(i.a,{id:"3357050268",children:["h1.jsx-3357050268{font-size:24px;}"]})]})}}},[["R4kx",0,1,2]]]);