import{R as e,M as t,H as n,C as a,G as r,L as l,B as c,I as o,r as i,u as s,a as f,S as m,b as u,c as p,d as b,l as E,e as d,f as y,g as h,h as g,i as C,W as v,j as w,k as P}from"./vendor.4eb7b56d.js";!function(){const e=document.createElement("link").relList;if(!(e&&e.supports&&e.supports("modulepreload"))){for(const e of document.querySelectorAll('link[rel="modulepreload"]'))t(e);new MutationObserver((e=>{for(const n of e)if("childList"===n.type)for(const e of n.addedNodes)"LINK"===e.tagName&&"modulepreload"===e.rel&&t(e)})).observe(document,{childList:!0,subtree:!0})}function t(e){if(e.ep)return;e.ep=!0;const t=function(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerpolicy&&(t.referrerPolicy=e.referrerpolicy),"use-credentials"===e.crossorigin?t.credentials="include":"anonymous"===e.crossorigin?t.credentials="omit":t.credentials="same-origin",t}(e);fetch(e.href,t)}}();function k({setPath:a}){return e.createElement(t,{fixed:"top",widths:1,inverted:!0,size:"massive",onClick:()=>a("")},e.createElement(t.Item,null,e.createElement(n,{as:"h1",inverted:!0,content:"(Tu Marca)"})))}function T({setPath:t,only:a}){return e.createElement(r.Column,{only:a,color:"grey",width:8},e.createElement(n,{as:"h1",inverted:!0,content:"¿Cómo se juega?"}),e.createElement(l,{as:"ol"},e.createElement(l.Item,{as:"li"},"Elegí una provincia"),e.createElement("p",null),e.createElement(l.Item,{as:"li"},"Ajustá los porcentajes para cada partido"),e.createElement("p",null),e.createElement(l.Item,{as:"li"},"Elegí cuántas fichas querés comprar"),e.createElement(l.Item,null,e.createElement(c,{primary:!0,onClick:()=>t(["elecciones","betting"]),style:{marginTop:"1em"},content:"Apostá ahora y ganá!"}))))}function A({setPath:t}){return e.createElement(r.Column,{width:8,style:{display:"flex",alignItems:"center"}},e.createElement(o,{src:"/GaliProde/assets/betting.29498be8.jpg"}),e.createElement(c,{color:"red",style:{position:"absolute",width:"40%",marginLeft:"29%",heigth:"15%",marginTop:"30%"},onClick:()=>t(["elecciones","betting"]),content:"Apostar Ahora!"}))}function S(){return e.createElement(r.Row,{columns:1,style:{marginTop:"1.3em"}},e.createElement(r.Column,{color:"green"},"TODO: Video explicativo"))}function B({setPath:t}){return e.createElement(a,{style:{marginTop:"5em",textAlign:"center"}},e.createElement(n,{style:{fontFamily:"Anton",fontSize:"3.5em",marginTop:"1.8em",marginBottom:"0.7em"}},"¡POZO $",1936753,"!"),e.createElement(r,{rows:2,stackable:!0,style:{marginLeft:"2em",marginRight:"2em"}},e.createElement(r.Row,{columns:2},e.createElement(T,{setPath:t,only:"computer tablet"}),e.createElement(A,{setPath:t}),e.createElement(T,{setPath:t,only:"mobile"})),e.createElement(S,null)))}const x="0x5BA1a2556946d1610a3b19f27CB4Ad4A5F99D40C",F={"Buenos Aires":["juntos","todos","izquierda"]};function I({party:t,y:a,pct:l,setPct:c}){const[o,s]=i.exports.useState(!1),[u,p]=i.exports.useState(l);!function(){const[e,t]=i.exports.useState(0)}();const b=e=>{c(a,parseFloat(e),s),p(e)},E=e.createElement(m,{value:u,valueLabelDisplay:"auto",onChange:(e,t)=>b(t)});return e.createElement(e.Fragment,null,e.createElement(r.Row,{style:{marginTop:"1.5em"}},e.createElement(r.Column,{computer:3,mobile:7,color:"grey"},e.createElement(n,{as:"h2",content:t})),e.createElement(r.Column,{computer:5,mobile:9,color:"grey"},e.createElement(f,{label:{basic:!0,content:"%"},labelPosition:"right",size:"mini",type:"number",error:o,value:u,onChange:(e,t)=>b(t.value)})),e.createElement(r.Column,{only:"computer",width:8,color:"green"},E)),e.createElement(r.Row,{only:"tablet mobile",color:"green",columns:1},e.createElement(r.Column,{width:16},E)))}function M({province:t,bets:l,setBets:o,setPath:i}){s();const f=F[t],m=(e,t,n)=>{if(0<=t&&t<=100){n(!1);const a=l;a[e]=t,o(a)}else n(!0)};return e.createElement(a,{style:{textAlign:"center",marginTop:"6em"}},e.createElement(n,{as:"h1",content:"Elegí tus apuestas"}),e.createElement(r,{divided:"vertically"},f.map(((t,n)=>e.createElement(I,{key:n,party:t,y:n,pct:l[n],setPct:m})))),e.createElement(c,{primary:!0,size:"huge",onClick:()=>i(["elecciones","submit"]),content:"Preparar Apuesta",style:{marginTop:"2.5em"}}))}var R=[{inputs:[{internalType:"uint256",name:"parties",type:"uint256"},{internalType:"uint256",name:"minPrice",type:"uint256"}],stateMutability:"nonpayable",type:"constructor"},{inputs:[],name:"Manager",outputs:[{internalType:"address payable",name:"",type:"address"}],stateMutability:"view",type:"function"},{inputs:[],name:"MinPrice",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[],name:"TotalPool",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"uint256[]",name:"votes",type:"uint256[]"}],name:"placeBet",outputs:[],stateMutability:"payable",type:"function"}],z="0x6080604052600060015534801561001557600080fd5b506040516104d13803806104d1833981810160405281019061003791906100dd565b336000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508060028190555060005b828110156100c0576003600090806001815401808255809150506001900390600052602060002001600090919091909150558080600101915050610081565b50505061013a565b6000815190506100d781610123565b92915050565b600080604083850312156100f057600080fd5b60006100fe858286016100c8565b925050602061010f858286016100c8565b9150509250929050565b6000819050919050565b61012c81610119565b811461013757600080fd5b50565b610388806101496000396000f3fe60806040526004361061003f5760003560e01c80634e30b0ac1461004457806378357e531461006f5780637bd486b31461009a578063f72ea9dc146100c5575b600080fd5b34801561005057600080fd5b506100596100e1565b60405161006691906102ea565b60405180910390f35b34801561007b57600080fd5b506100846100e7565b60405161009191906102af565b60405180910390f35b3480156100a657600080fd5b506100af61010b565b6040516100bc91906102ea565b60405180910390f35b6100df60048036038101906100da919061020c565b610111565b005b60025481565b60008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b60015481565b600380549050828290501461015b576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610152906102ca565b60405180910390fd5b3460016000828254019250508190555060005b828290508110156101bd5782828281811061018557fe5b905060200201356003828154811061019957fe5b9060005260206000200160008282540192505081905550808060010191505061016e565b505050565b60008083601f8401126101d457600080fd5b8235905067ffffffffffffffff8111156101ed57600080fd5b60208301915083602082028301111561020557600080fd5b9250929050565b6000806020838503121561021f57600080fd5b600083013567ffffffffffffffff81111561023957600080fd5b610245858286016101c2565b92509250509250929050565b61025a81610316565b82525050565b600061026d600d83610305565b91507f496e76616c696420766f746573000000000000000000000000000000000000006000830152602082019050919050565b6102a981610348565b82525050565b60006020820190506102c46000830184610251565b92915050565b600060208201905081810360008301526102e381610260565b9050919050565b60006020820190506102ff60008301846102a0565b92915050565b600082825260208201905092915050565b600061032182610328565b9050919050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b600081905091905056fea2646970667358221220ed5d5a3080a83d12886df7e8e83f41479fd48a591d4608f4c7cd3e521bdaf43d64736f6c63430007030033";const L=new u({supportedChainIds:[1,3,4,5,42,97,1337]});function j(e,t=x){return new p(t,R,e.getSigner())}function O(e,t,n=(()=>{}),a=x){const r=j(t);(function(e,t,n=x){const a=j(t,n);if("bettor"==e[0])return a.getBettor();if("started"==e[0])return a.Started();if("done"==e[0])return a.Done();if("game"==e[0])return a.getGame(e[1]);if("price"==e[0])return a.MinPrice();if("totalPool"==e[0])return a.TotalPool();console.error("getFromContract invalid arguments",e)})(["price"],t,a).then((t=>{r.placeBet(e,{value:t}).then(n).catch((e=>console.error("submitBets placeBet",a,e)))})).catch((e=>console.error("submitBets getPrice",a,e)))}function D({party:t,pct:a}){const l=e.createElement(m,{value:a,disabled:!0});return e.createElement(e.Fragment,null,e.createElement(r.Row,{style:{marginTop:"1.5em"}},e.createElement(r.Column,{computer:3,mobile:7,color:"grey"},e.createElement(n,{as:"h2",content:t})),e.createElement(r.Column,{computer:5,mobile:9,color:"grey"},e.createElement(n,{inverted:!0,as:"h3"},a,"%")),e.createElement(r.Column,{only:"computer",width:8,color:"green"},l)),e.createElement(r.Row,{only:"tablet mobile",color:"green",columns:1},e.createElement(r.Column,{width:16},l)))}function N({fichas:t,setFichas:n,only:a}){const o=e=>{const a=t+e;a>0&&n(a)};return e.createElement(r.Column,{only:a},e.createElement(l,{horizontal:!0},e.createElement(l.Item,null,e.createElement(c,{secondary:!0,content:"-",onClick:()=>o(-1)})),e.createElement(l.Item,null,e.createElement(l.Header,{as:"h2",content:"#Fichas"}),e.createElement(l.Description,{content:t})),e.createElement(l.Item,null,e.createElement(c,{secondary:!0,content:"+",onClick:()=>o(1)}))))}function G({onClickSubmit:t}){return e.createElement(r.Column,null,e.createElement(c,{primary:!0,size:"huge",onClick:t,content:"Confirmar Apuesta",style:{marginTop:"1em"}}))}function H({province:t,bets:l,fichas:o,setFichas:i,setPath:f}){const m=F[t],{activate:u,active:p,library:b}=s();p||u(L);return e.createElement(a,{style:{textAlign:"center",marginTop:"6em"}},e.createElement(n,{as:"h1",content:"Confirmá tus apuestas"}),e.createElement(r,{stackable:!0},e.createElement(r.Row,{columns:2},e.createElement(N,{fichas:o,setFichas:i,only:"computer tablet"}),e.createElement(G,{onClickSubmit:()=>{console.log("onSubmitBets bets",l),O(l,b,(()=>f(["elecciones","receipt"])))}}),e.createElement(N,{fichas:o,setFichas:i,only:"mobile"}))),e.createElement(r,{divided:"vertically"},m.map(((t,n)=>e.createElement(D,{key:n,party:t,pct:l[n]})))),e.createElement(d,{size:"tiny",open:!p},e.createElement(d.Header,{content:"Active la Crypto-Billetera"}),e.createElement(d.Content,null,e.createElement("p",null,"Necesita activar la Crypto-Billetera para apostar"),e.createElement("p",null,"Por ahora solo usamos MetaMask, ¡pero hay más en camino!"),e.createElement("p",null,"Si no te salió otro popup ",e.createElement(c,{secondary:!0,onClick:()=>u(L),content:"¡Clickeame!"})))))}function q({party:t,pct:a}){const l=e.createElement(m,{value:a,disabled:!0});return e.createElement(e.Fragment,null,e.createElement(r.Row,{style:{marginTop:"1.5em"}},e.createElement(r.Column,{computer:3,mobile:7,color:"grey"},e.createElement(n,{as:"h2",content:t})),e.createElement(r.Column,{computer:5,mobile:9,color:"grey"},e.createElement(n,{inverted:!0,as:"h3"},a,"%")),e.createElement(r.Column,{only:"computer",width:8,color:"green"},l)),e.createElement(r.Row,{only:"tablet mobile",color:"green",columns:1},e.createElement(r.Column,{width:16},l)))}function W({fichas:t}){return e.createElement(r.Column,null,e.createElement(n,{as:"h3"},"Se guardaró tu apuesta por ",t," fichas"))}function $({setPath:t}){return e.createElement(r.Column,null,e.createElement(c,{primary:!0,onClick:()=>t([""]),content:"Seguir Apostando",style:{marginTop:"1em"}}))}function K({province:t,bets:l,fichas:c,setPath:o}){const i=F[t];return e.createElement(a,{style:{textAlign:"center",marginTop:"6em"}},e.createElement(n,{as:"h1",content:"¡Mucha suerte!"}),e.createElement(r,{stackable:!0},e.createElement(r.Row,{columns:2},e.createElement(W,{fichas:c}),e.createElement($,{setPath:o}))),e.createElement(r,{divided:"vertically"},i.map(((t,n)=>e.createElement(q,{key:n,party:t,pct:l[n]})))))}function V({setPath:t}){const{account:r,activate:o,active:i,library:f}=s();return i||o(L),e.createElement(a,{style:{textAlign:"center",marginTop:"6em"}},e.createElement(n,{as:"h1",content:"Retirar Premios"}),e.createElement(l,null,e.createElement(l.Item,null,e.createElement(n,{as:"h2",content:"Ganaste"}),e.createElement(n,{style:{fontFamily:"Anton",fontSize:"2.5em"},content:"$X"}),e.createElement(n,{as:"h2",content:"en premios"})),e.createElement(l.Item,null,e.createElement(n,{as:"h3"},e.createElement("p",null,"lo enviaremos a"),r)),e.createElement(l.Item,null,e.createElement(c,{primary:!0,content:"Retirar"}))),e.createElement(d,{size:"tiny",open:!i},e.createElement(d.Header,{content:"Active la Crypto-Billetera"}),e.createElement(d.Content,null,e.createElement("p",null,"Necesita activar la Crypto-Billetera para apostar"),e.createElement("p",null,"Por ahora solo usamos MetaMask, ¡pero hay más en camino!"),e.createElement("p",null,"Si no te salió otro popup ",e.createElement(c,{secondary:!0,onClick:()=>o(L),content:"¡Clickeame!"})))))}function X({path:t,setPath:n,province:r}){s();const l=F[r],[c,o]=i.exports.useState(Array(l.length).fill(Math.floor(100/l.length))),[f,m]=i.exports.useState(1);i.exports.useState({bettor:void 0,started:!1,done:!1});const u=["betting","submit","receipt","claimPrize"],p=["Prepará tus apuestas","Confirmalas","Recibo","¡Retirá tus premios!"],b=u.indexOf(t[1]);return e.createElement(e.Fragment,null,e.createElement(a,null,0==b?e.createElement(M,{province:r,bets:c,setBets:o,setPath:n}):1==b?e.createElement(H,{province:r,bets:c,fichas:f,setFichas:m,setPath:n}):2==b?e.createElement(K,{province:r,fichas:f,bets:c,setPath:n}):3==b?e.createElement(V,{setPath:n}):e.createElement(a,null)),e.createElement(y,{sx:{width:"100%",marginTop:"3em"}},e.createElement(h,{activeStep:b,alternativeLabel:!0},u.map(((t,n)=>e.createElement(g,{key:t},e.createElement(C,null,p[n])))))))}function Z(){s(),window.web3React=s(),window.injectedConnector=L;const[t,n]=i.exports.useState([""]);return e.createElement(e.Fragment,null,e.createElement(k,{setPath:n}),e.createElement(a,{fluid:!0},"elecciones"==t[0]?e.createElement(X,{path:t,setPath:n,province:"Buenos Aires"}):e.createElement(B,{setPath:n})))}function J(){return e.createElement(e.Fragment,null,e.createElement(v,{getLibrary:e=>{const t=new w(e);return t.pollingInterval=12e3,t}},e.createElement(Z,null)))}window.submitBets=O,window.createContract=async function(e,t,n){const a=new b(R,z,n.getSigner());return await a.deploy(F[e].length,E.toWei(String(t),"ether"))},P.render(e.createElement(J,null),document.getElementById("root"));
