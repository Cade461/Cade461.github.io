var runLevels = function (window) {
  window.opspark = window.opspark || {};

  var draw = window.opspark.draw;
  var createjs = window.createjs;
  let currentLevel = 0;

  window.opspark.runLevelInGame = function (game) {
    // some useful constants
    var groundY = game.groundY;

    // this data will allow us to define all of the
    // behavior of our game
    var levelData = window.opspark.levelData;

    // set this to true or false depending on if you want to see hitzones
    game.setDebugMode(true);

    // TODOs 5 through 11 go here
    // BEGIN EDITING YOUR CODE HERE
    
    
function createEnemy(x,y){
    var enemy = game.createGameItem("enemy", 25);
    var redSquare = draw.rect(50, 50, "red");
    redSquare.x = -25;
    redSquare.y = -25;
    enemy.addChild(redSquare);
    enemy.x = x;
    enemy.y = groundY - y;
    game.addGameItem(enemy);
    enemy.velocityX = -1
    enemy.rotationalVelocity = 1;
    enemy.onPlayerCollision = function (){
      game.changeIntegtiy(-10);
    }
    enemy.onProjectileCollsion = function (){
      game.increaseScore(250);
      enemy.fadeout();
    }
}

    var hitZoneSize = 25;
    var damageFromObstacle = 10;
    var sawBladeHitZone = game.createObstacle(hitZoneSize, damageFromObstacle);
    sawBladeHitZone.x = 400 ;
    sawBladeHitZone.y = groundY - 50;
    game.addGameItem(sawBladeHitZone);
    var obstacleImage = draw.bitmap("img/sawblade.png");
    sawBladeHitZone.addChild(obstacleImage);
    obstacleImage.x = -25;
    obstacleImage.y = -25;
    sawBladeHitZone.rotationalVelocity = 10;
    sawBladeHitZone.velocityX = -3;
    sawBladeHitZone.onPlayerCollision = function(){
      game.changeIntegtiy(-10)
    } 
    sawBladeHitZone.onProjectileCollsion = function(){
      game.increaseScore(2000);
      sawBladeHitZone.fadeout();
        }


createEnemy(400,  50);
createEnemy(1300,  50);
createEnemy(2000,  50);

function createReward(x,y){
  var reward = game.createGameItem("reward", 50);
  var elixir = draw.bitmap("img/elixir.png");
  elixir.x = -25;
  elixir.y = -25;
  reward.addChild(elixir)
  elixir.ScaleX = 0.5;
  elixir.ScaleY = 0.5;
  reward.x = x;
  reward.y = groundY - y
  reward.velocityX = -0.5;
  game.addGameItem(reward);

  reward.onPlayerCollision = function (){
    game.changeIntegtiy(10)
    game.increaseScore(500)
    reward.fadeout();
  }
  reward.onProjectileCollsion = function () {
    reward.fadeout();

  }
}

createReward(500, 600)
    

    function startLevel() {
      // TODO 13 goes below here



      //////////////////////////////////////////////
      // DO NOT EDIT CODE BELOW HERE
      //////////////////////////////////////////////
      if (++currentLevel === levelData.length) {
        startLevel = () => {
          console.log("Congratulations!");
        };
      }
    }
    startLevel();
  };
};

// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if (
  typeof process !== "undefined" &&
  typeof process.versions.node !== "undefined"
) {
  // here, export any references you need for tests //
  module.exports = runLevels;
}
