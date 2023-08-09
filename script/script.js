function esconderNingunmensaje() {
    // Muestra el mensaje ejecutado y oculta el mensaje "Ningún mensaje ejecutado"
    document.getElementById("execute").style.display = "block";
    document.getElementById("info").style.display = "none";
  }
  
  function MostrarMensaje(mensaje) {
    // Muestra el mensaje proporcionado en el campo de texto "textoEjecutado"
    let texto = document.getElementById("textExecute");
    texto.value = mensaje;
  }
  
  function copyText() {
    // Copia el texto del campo de texto "textoEjecutado" al portapapeles
    texto = document.getElementById("textExecute");
    texto.select();
    document.execCommand("copy");
  }
  
  function btn__encriptar() {
    // Encripta el texto ingresado utilizando un esquema de reemplazo de caracteres
  
    let texto = document.getElementById("text__in").value;
    let textoEncriptado = texto
      .replace(/a/g, "ai")
      .replace(/e/g, "enter")
      .replace(/im/g, "imes")
      .replace(/o/g, "ober")
      .replace(/u/g, "ufat");
  
      if (texto.length == 0) {
        document.getElementById("execute").style.display = "none";
        document.getElementById("info").style.display = "flex"; 
      }
  
      MostrarMensaje(textoEncriptado);
      
  }
  
  function btn__desencriptar() {
    // Desencripta el texto ingresado utilizando un esquema de reemplazo de caracteres inverso
    let textoEncriptado = document.getElementById("text__in").value;
    let textoDesencriptado = textoEncriptado
      .replace(/ai/g, "a")
      .replace(/enter/g, "e")
      .replace(/imes/g, "i")
      .replace(/ober/g, "o")
      .replace(/ufat/g, "u");
      
      MostrarMensaje(textoDesencriptado);
  
      
  
      if (textoEncriptado.length == 0) {
        document.getElementById("execute").style.display = "none";
        document.getElementById("info").style.display = "flex"; 
      }
  }