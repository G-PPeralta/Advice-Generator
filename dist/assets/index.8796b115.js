import{r as d,a as u,j as a,R as f,b as p}from"./vendor.6fed4698.js";const m=function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const c of t.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&s(c)}).observe(document,{childList:!0,subtree:!0});function n(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerpolicy&&(t.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?t.credentials="include":e.crossorigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function s(e){if(e.ep)return;e.ep=!0;const t=n(e);fetch(e.href,t)}};m();function g(i){const[o,n]=d.exports.useState({advice:"",id:0});return d.exports.useEffect(()=>{u.get(i).then(s=>n(s.data.slip))},[]),{advice:o}}const r=a.exports.jsx,l=a.exports.jsxs,h=a.exports.Fragment,v=()=>{const{advice:i}=g("https://api.adviceslip.com/advice");return l("div",{className:"card-container",children:[l("h5",{className:"advice-number",children:["ADVICE #",i.id]}),i&&r("h2",{className:"advice",children:i.advice}),r("img",{src:"../images/pattern-divider-desktop.svg",alt:"patter-divider"}),r("br",{}),r("button",{className:"dice-btn",onClick:()=>window.location.reload(),children:r("img",{src:"../images/icon-dice.svg",alt:"dice icon"})})]})};function x(){return r(h,{children:r(v,{})})}f.render(r(p.StrictMode,{children:r(x,{})}),document.getElementById("root"));