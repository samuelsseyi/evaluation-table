
const addition = ()=> {
  let rowInput = parseInt(document.getElementById("row").value)
  let columnInput = parseInt(document.getElementById("column").value)

  if ( document.getElementById("row").value == "" || document.getElementById("column").value == "") {
    window.alert("Inputs Cannot Be Empty")
  } else if (document.getElementById("row").value <= 0 || document.getElementById("column").value <= 0){
      window.alert(" Error : One Or More Inputs Is Less Than One")
  } else { var table = "<table>"
            for (let i=1; i<=rowInput; i++){
              table += "<tr>"
              for (let j=1; j<=columnInput; j++){
                let add = i + j;
                table += `<td>${i} + ${j} = ${add}</td>`;  
              }
              table += "</tr>"
            }

            table += "</table>"
            document.getElementById("theTable").innerHTML = table;
  }

  
  document.getElementById("row").value = "" 
  document.getElementById("column").value = ""
}


const multiplication = ()=> {
  let rowInput = parseInt(document.getElementById("row").value)
  let columnInput = parseInt(document.getElementById("column").value)

  if ( document.getElementById("row").value == "" || document.getElementById("column").value == "") {
    window.alert("Inputs Cannot Be Empty")
  } else if (document.getElementById("row").value <= 0 || document.getElementById("column").value <= 0){
      window.alert(" Error : One Or More Inputs Is Less Than One")
  } else { var table = "<table>"
            for (let i=1; i<=rowInput; i++){
              table += "<tr>"
              for (let j=1; j<=columnInput; j++){
                let mul = i * j ;
                table += `<td>${i} * ${j} = ${mul}</td>`;  
              }
              table += "</tr>"
            }

            table += "</table>"
            document.getElementById("theTable").innerHTML = table;
  }

  
  document.getElementById("row").value = "" 
  document.getElementById("column").value = ""
}




const subtraction = ()=> {
  let rowInput = parseInt(document.getElementById("row").value)
  let columnInput = parseInt(document.getElementById("column").value)

  if ( document.getElementById("row").value == "" || document.getElementById("column").value == "") {
    window.alert("Inputs Cannot Be Empty")
  } else if (document.getElementById("row").value <= 0 || document.getElementById("column").value <= 0){
      window.alert(" Error : One Or More Inputs Is Less Than One")
  } else { var table = "<table>"
            for (let i=1; i<=rowInput; i++){
              table += "<tr>"
              for (let j=1; j<=columnInput; j++){
                let sub = i - j ;
                table += `<td>${i} - ${j} = ${sub}</td>`;  
              }
              table += "</tr>"
            }

            table += "</table>"
            document.getElementById("theTable").innerHTML = table;
  }

  
  document.getElementById("row").value = "" 
  document.getElementById("column").value = ""
}







const division = ()=> {
  let rowInput = parseInt(document.getElementById("row").value)
  let columnInput = parseInt(document.getElementById("column").value)

  if ( document.getElementById("row").value == "" || document.getElementById("column").value == "") {
    window.alert("Inputs Cannot Be Empty")
  } else if (document.getElementById("row").value <= 0 || document.getElementById("column").value <= 0){
      window.alert(" Error : One Or More Inputs Is Less Than One")
  } else { var table = "<table>"
            for (let i=1; i<=rowInput; i++){
              table += "<tr>"
              for (let j=1; j<=columnInput; j++){
                let div = Math.round(i / j) ;
                table += `<td>${i} / ${j} = ${div}</td>`;  
              }
              table += "</tr>"
            }

            table += "</table>"
            document.getElementById("theTable").innerHTML = table;
  }

  
  document.getElementById("row").value = "" 
  document.getElementById("column").value = ""
}
