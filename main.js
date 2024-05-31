function playSom (instrumento) {
  try{
  document.querySelector(`#som_${instrumento}`).play()
  } catch{
    console.log(`Elemento ou seletor ${instrumento} não é válido`)
  }
}

const teclas = document.querySelectorAll('.tecla');

teclas.forEach(teclasNome => {
  
  teclasNome.onclick = function() {
    const instrumento = teclasNome.classList[1]
    playSom(instrumento);
  }

  teclasNome.onkeydown = function(event){
    if (event.code === 'Enter' || event.code === 'Space') {
      teclasNome.classList.add('ativa');
    }
  }

  teclasNome.onkeyup = function(){
    teclasNome.classList.remove('ativa');
  }
})
