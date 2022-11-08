const formulario = document.querySelector(".formulario");
const copy = document.querySelector(".copy");
const resultDiv = document.querySelector(".formulario__result");
copy.addEventListener("click",() =>{
    if(resultDiv.textContent == ""){
        return;
    }
    window.navigator.clipboard.writeText(resultDiv.textContent);
    alert("Se copio al portapapeles")
});

formulario.addEventListener("submit",(e)=>{
    e.preventDefault();
    const length = document.querySelector("#length").value;
    const uppercase = document.querySelector("#uppercase").checked;
    const lowercase = document.querySelector("#lowercase").checked;
    const numbers = document.querySelector("#numbers").checked;
    const symbols = document.querySelector("#symbols").checked;
    
    if(length == ""){
        alert("Debes añadir una longitud");
        return;
    }

    resultDiv.textContent = generarPassword(length,uppercase,lowercase,numbers,symbols);
});


function generarPassword(length,uppercase,lowercase,numbers,symbols){
    if(!uppercase && !lowercase && !numbers && !symbols){
        alert("Debes seleccionar al menos una condicion");
        return;
    }
    let resultText = "";
    const obj = {
        uppercase: "ABCDEFGHIJKLMNÑOPQRSTUVWXYZ",
        lowercase: "abcdefghijklmnñopqrstuvwxyz",
        numbers : "1234567890",
        symbols: '!@#$%^&*(){}[]=<>/,.',
    };
    const arr = [["uppercase",uppercase],["lowercase",lowercase],["numbers",numbers],["symbols",symbols]].filter(e => e[1]);
    let counter = 0;
    for(let i = 0; i < length; i++){
        //Forma 1
        if(counter == arr.length){
            counter = 0;
        }
        const random = Math.floor(Math.random() * obj[arr[counter][0]].length);
        resultText += obj[arr[counter][0]][random];
        counter++;
        //Forma 2

        // console.log(random);
        // const random = Math.floor(Math.random() * obj[randomArr].length);
        // arr.forEach(e =>{
        //     const actual = e[0];
        //     const random = Math.floor(Math.random() * obj[actual].length);
        //     const random2 = Math.floor(Math.random() * obj[actual].length)
        //     resultText += obj[actual][random];
        // })
    }
    return resultText;
};