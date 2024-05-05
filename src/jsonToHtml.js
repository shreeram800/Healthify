export function jsonToHtml(jsonData) {
         let table = $("<div>");
         let cols = Object.keys(jsonData[0]);
         let thead = $("<h2>");
         let tr = $("<h3>");
         
         cols.map(function(col) {
            let th = $("<h2>").text(col); 
            tr.append(th);
         });
         thead.append(tr); 
         table.append(thead);
         
         jsonData.map(function(item) {
            let tr = $("<h3>");
    
            let vals = Object.values(item);
            
            vals.map(function(val) {
               let td = $("<h4>").text(val);
               tr.append(td);
            });
            table.append(tr);
         });
         return table;
      }