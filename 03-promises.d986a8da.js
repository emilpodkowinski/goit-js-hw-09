!function(){function t(t,n){return new Promise((function(e,o){setTimeout((function(){Math.random()>.5?e({position:t,delay:n}):o({position:t,delay:n})}),n)}))}document.getElementById("form").addEventListener("submit",(function(n){n.preventDefault();for(var e=new FormData(n.target),o=parseInt(e.get("delay"),10),a=parseInt(e.get("step"),10),i=parseInt(e.get("amount"),10),c=0;c<i;c++)t(c+1,o+c*a).then((function(t){var n=t.position,e=t.delay;console.log("✅ Fulfilled promise ".concat(n," in ").concat(e,"ms"))})).catch((function(t){var n=t.position,e=t.delay;console.log("❌ Rejected promise ".concat(n," in ").concat(e,"ms"))}))}))}();
//# sourceMappingURL=03-promises.d986a8da.js.map