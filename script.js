function verificar() {
  let data = new Date();
  let ano = data.getFullYear();
  let fano = document.querySelector("input#txtano");
  let res = document.querySelector("div#res");
  if (fano.value.length == 0 || Number(fano.value) > ano) {
    alert("[ERRO] Verifique os dados digitados e tente novamente");
  } else {
    let fsex = document.getElementsByName("radsex");
    let idade = ano - Number(fano.value);
    let gênero = "";
    let img = document.createElement("img");
    img.setAttribute("id", "foto");
    if (fsex[0].checked) {
      gênero = "um Homem";
      if (idade >= 0 && idade < 10) {
        //criança
        img.setAttribute("src", "HomemBebe.png");
      } else if (idade < 30) {
        //jovem
        img.setAttribute("src", "HomemCriança.png");
      } else if (idade < 50) {
        //adulto
        img.setAttribute("src", "HomemAdulto.png");
      } else {
        //idoso
        img.setAttribute("src", "HomemIdoso.png");
      }
    } else if (fsex[1].checked) {
      gênero = "uma Mulher";
      if (idade >= 0 && idade < 10) {
        img.setAttribute("src", "MulherBebe.png");
        //criança
      } else if (idade < 21) {
        img.setAttribute("src", "MulherCriança.png");
        //jovem
      } else if (idade < 50) {
        img.setAttribute("src", "MulherAdulta.png");
        //adulto
      }else {
        //idoso
        img.setAttribute('src', 'MulherIdosa.png');
      }
    }
    res.style.textAlign = `center`;
    res.innerHTML =  `Você é ${gênero} de ${idade} anos.`;
    res.appendChild(img);
  }
}
