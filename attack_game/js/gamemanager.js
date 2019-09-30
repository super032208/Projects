let GameManager = {
  setGameStart: function(classType) {
    this.resetPlayer(classType);
    this.setPrepFight();
  },
  resetPlayer: function(classType) {
    switch (classType) {
      case "mario":
        player = new Player(classType, 100, 0, 200, 100, 100);
        break;
      case "pika":
        player = new Player(classType, 100, 0, 100, 80, 100);
        break;
      case "robot":
        player = new Player(classType, 100, 50, 200, 50, 100);
        break;
      case "zelda":
        player = new Player(classType, 100, 0, 50, 200, 100);
        break;
    }
    let getInterface = document.querySelector(".interface");
    getInterface.innerHTML =
      '<img src="img/players/' +
      classType.toLowerCase() +
      '.png" alt="' +
      player.playerType +
      '" class="img-avatar"><div><h3>' +
      player.playerType +
      '</h3><p class="health-enemy">Health: ' +
      // " </h3></div> <p class="health-player"> Health: " +
      player.health +
      "</p><p> Mana: " +
      player.mana +
      "</p><p> Strength: " +
      player.strength +
      "</p><p> Agility: " +
      player.agility +
      "</p><p> Speed: " +
      player.speed +
      "</p></div>";
  },
  setPrepFight: function() {
    let getHeader = document.querySelector(".header");
    let getActions = document.querySelector(".actions");
    let getArena = document.querySelector(".arena");
    getHeader.innerHTML = "<p> Task: Find an Enemy!</p>";
    getActions.innerHTML =
      '<a href="#" class="btn-prefight" onclick="GameManager.setFight()">Search For an Enemy! </a>';
    getArena.style.visibility = "visible";
  },
  setFight: function() {
    let getHeader = document.querySelector(".header");
    let getActions = document.querySelector(".actions");
    let getEnemy = document.querySelector(".enemy");

    // create a enemy
    let enemy00 = new Enemy("Trolls", 100, 0, 50, 100, 100);
    let enemy01 = new Enemy("Bully", 100, 0, 50, 80, 80);

    let chooseRamdomEnemy = Math.floor(Math.random() * Math.floor(2));

    switch (chooseRamdomEnemy) {
      case 0:
        enemy = enemy00;
        break;
      case 1:
        enemy = enemy01;
        break;
    }
    getHeader.innerHTML = "<p> Task: Choose your Move </p>";
    getActions.innerHTML =
      '<a href="#" class="btn-prefight" onclick="PlayerMoves.calcAttack()">Attack! </a>';

    getEnemy.innerHTML =
      '<img src="/images/player_2/' +
      enemy.enemyType.toLowerCase() +
      '.png" alt="' +
      enemy.enemyType +
      '" class="img-avatar"><div><h3>' +
      enemy.enemyType +
      '</h3><p class="health-enemy">Health: ' +
      enemy.health +
      "</p><p>Mana: " +
      enemy.mana +
      "</p><p>Strength: " +
      enemy.strength +
      "</p><p>Agility: " +
      enemy.agility +
      "</p><p>Speed: " +
      enemy.speed +
      "</p></div>";
  }
};
