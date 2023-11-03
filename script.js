// let tom=document.getElementById("menu");
// // let cloneElm=tom.cloneNode(true);
// let cloneElm=tom.cloneNode();

// console.log(cloneElm);

                            // 2===>> 2 TIMES COPY KE LIYE 

let tom=document.getElementById("menu");
let cloneElm=tom.cloneNode(true);
document.body.appendChild(cloneElm);

console.log(cloneElm);

