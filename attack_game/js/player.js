let player;

function Player(classType, health, mana, strength, agility, speed) {
  this.classType = classType;
  this.health = health;
  this.mana = mana;
  this.strength = strength;
  this.agility = agility;
  this.speed = speed;
}

let PlayerMoves = {
  calcAttack: function() {
    // who attack first
    let getplayerSpeed = player.speed;
    let getEnemySpeed = enemy.speed;

    // player attack
    let playerAtack = function() {
      let calcBaseDamage;
      if (player.mana > 0) {
        calcBaseDamage = (player.strength * player.mana) / 1000;
      } else {
        calcBaseDamage = (player.strength * player.agility) / 1000;
      }

      let offsetDamage = Math.floor(Math.random() * Math.floor(10));
      let calcOutputDamage = calcBaseDamage + offsetDamage;
      // number of hits
      let numberOfHits =
        Math.floor((Math.random() * Math.floor(player.agility / 10)) / 2) + 1;
      let attackValues = [calcOutputDamage, numberOfHits];
      return attackValues;
    };

    // enemy atatck
    let enemyAtack = function() {
      let calcBaseDamage;
      if (enemy.mana > 0) {
        calcBaseDamage = (enemy.strength * enemy.mana) / 1000;
      } else {
        calcBaseDamage = (enemy.strength * enemy.agility) / 1000;
      }

      let offsetDamage = Math.floor(Math.random() * Math.floor(10));
      let calcOutputDamage = calcBaseDamage + offsetDamage;
      // number of hits
      let numberOfHits =
        Math.floor((Math.random() * Math.floor(enemy.agility / 10)) / 2) + 1;
      let attackValues = [calcOutputDamage, numberOfHits];
      return attackValues;
    };
    let getplayerHealth = document.querySelector(".health-player");
    let getenemyHealth = document.querySelector(".health-enemy");

    // initiate attack
    if (getplayerSpeed >= getEnemySpeed) {
      let playerAttackValues = playerAtack();
      let totalDamage = playerAttackValues[0] * playerAttackValues[1];
      enemy.health = enemy.health - totalDamage;
      alert(
        "You hit " +
          playerAttackValues[0] +
          " Damage " +
          playerAttackValues[1] +
          " times. "
      );
      if (enemy.health <= 0) {
        alert("!!!YOU WIN!!! Refresh browser to play again");
        getplayerHealth.innerHTML = "Health: 0" + player.health + " .";
        getenemyHealth.innerHTML = "Health: 0";
      } else {
        getenemyHealth.innerHTML = "Health: 0" + enemy.health;
        // enemy attack
        let enemyAttackValues = enemyAtack();

        let totalDamage = enemyAttackValues[0] * enemyAttackValues[1];
        player.health = player.health - totalDamage;
        alert(
          " Enemy hit " +
            enemyAttackValues[0] +
            " Damage " +
            enemyAttackValues[1] +
            " times. "
        );
        if (player.health <= 0) {
          alert("!!!YOU LOSE !!! Refresh browser to play again");
          getplayerHealth.innerHTML = "Health: 0";
          getenemyHealth.innerHTML = "Health:" + enemy.health;
        } else {
          getplayerHealth.innerHTML = "Health:" + player.health;
        }
      }
    }

    // enemy turn if he is faster
    else if (getenemySpeed >= getplayerSpeed) {
      let enemyAttackValues = enemyAtack();
      let totalDamage = enemyrAttackValues[0] * enemyAttackValues[1];
      player.health = player.health - totalDamage;
      alert(
        "Enemy hit " +
          enemyAttackValues[0] +
          " Damage " +
          enemyAttackValues[1] +
          " times. "
      );
      if (player.health <= 0) {
        alert("!!!YOU LOOSE!!! Refresh browser to play again");
        getenemyHealth.innerHTML = "Health: 0" + enemy.health;
        getplayerHealth.innerHTML = "Health: 0";
      } else {
        getplayerHealth.innerHTML = "Health: 0" + player.health;
        // enemy attack
        let playerAttackValues = playerAtack();

        let totalDamage = playerAttackValues[0] * playerAttackValues[1];
        enemy.health = enemy.health - totalDamage;
        alert(
          " You hit " +
            playerAttackValues[0] +
            " Damage " +
            playerAttackValues[1] +
            " times. "
        );
        if (enemy.health <= 0) {
          alert("!!!YOU WIN!!! Refresh browser to play again");
          getenemyHealth.innerHTML = "Health: 0";
          getplayerHealth.innerHTML = "Health:" + player.health;
        } else {
          getenemyHealth.innerHTML = "Health:" + enemy.health;
        }
      }
    }
  }
};
