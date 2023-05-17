
//Programamos la función //traerDatos()
function traerDatos(){
    //definimos una constatnte para que recoja el contenido del nuevo objeto de este método. 
    const xhttp = new XMLHttpRequest();
    //llamamos al metodo open para acceder al archivo JSON que contiene los datos. 
    xhttp.open('GET', 'http://localhost/HI3/datos.json',true);
    xhttp.send();
    xhttp.onreadystatechange = function(){
        //esta linea recoge las respuestas del servidor. 
        
        if ( this.readyState == 4 && this.status == 200){
           //almacenamos en una variable "datos" la respuesta del archivo JSOn. 
            let datos=JSON.parse(this.responseText);
            console.log(datos);
           
            let  res = document.getElementById('resp');
            res.innerHTML ='';
            //creamos un bucle for 
            //definimos la variable puntero item, del total de elementos de datos.
            for (let item of datos){
                res.innerHTML +=`
                    <tr>
                        <td>${item.CODPROV}</td>
                        <td>${item.NOMBRE_PROVINCIA}</td>
                        <td>${item.CODAUTON}</td>
                        <td>${item.COMUNIDAD_CIUDAD_AUTONOMA}</td>
                        <td>${item.CAPITAL_PROVINCIA}</td>
                    </tr>
                `
             }
        }


    }

}

