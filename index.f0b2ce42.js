function t(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=Array(e);r<e;r++)n[r]=t[r];return n}function e(e){return function(e){if(Array.isArray(e))return t(e)}(e)||function(t){if("undefined"!=typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}(e)||function(e,r){if(e){if("string"==typeof e)return t(e,void 0);var n=Object.prototype.toString.call(e).slice(8,-1);if("Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return t(e,void 0)}}(e)||function(){throw TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var r=e(document.querySelector("thead").querySelectorAll("th")),n=e(document.querySelector("tbody").rows);addEventListener("click",function(t){if(r.includes(t.target)){var o=function(t,r){var n=e(r);switch(t){case"Name":n.sort(function(t,e){return t.cells[0].textContent.localeCompare(e.cells[0].textContent)});break;case"Position":n.sort(function(t,e){return t.cells[1].textContent.localeCompare(e.cells[1].textContent)});break;case"Age":n.sort(function(t,e){return t.cells[2].textContent.localeCompare(e.cells[2].textContent)});break;case"Salary":n.sort(function(t,e){return t.cells[3].textContent.slice(1).replace(",","")-e.cells[3].textContent.slice(1).replace(",","")})}return n}(t.target.textContent,n),c=document.querySelector("tbody"),l=document.createElement("tbody");o.forEach(function(t){return l.append(t)}),c.replaceWith(l)}});
//# sourceMappingURL=index.f0b2ce42.js.map
