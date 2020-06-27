function keyPressed() {
  jogo.keyPressed(key);
}

function setup() {
  createCanvas(windowWidth, windowHeight);

  frameRate(40);
  somDoJogo.loop();

  jogo = new Jogo();
  telaInicial =  new TelaInicial();
    
  jogo.setup();

  cenas = {
    jogo,
    telaInicial
  };
  
  botaoGerenciador = new BotaoGerenciador('Iniciar', width/2, height/2);
  
}

function draw() {
  cenas[cenaAtual].draw();
}