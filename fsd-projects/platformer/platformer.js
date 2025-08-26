$(function () {
  // initialize canvas and context when able to
  canvas = document.getElementById("canvas");
  ctx = canvas.getContext("2d");
  window.addEventListener("load", loadJson);

  function setup() {
    if (firstTimeSetup) {
      halleImage = document.getElementById("player");
      projectileImage = document.getElementById("projectile");
      cannonImage = document.getElementById("cannon");
      $(document).on("keydown", handleKeyDown);
      $(document).on("keyup", handleKeyUp);
      firstTimeSetup = false;
      //start game
      setInterval(main, 1000 / frameRate);
    }

    // Create walls - do not delete or modify this code
    createPlatform(-50, -50, canvas.width + 100, 50); // top wall
    createPlatform(-50, canvas.height - 10, canvas.width + 100, 200, "navy"); // bottom wall
    createPlatform(-50, -50, 50, canvas.height + 500); // left wall
    createPlatform(canvas.width, -50, 50, canvas.height + 100); // right wall

    //////////////////////////////////
    // ONLY CHANGE BELOW THIS POINT //
    //////////////////////////////////

    // TODO 1 - Enable the Grid
     toggleGrid();


    // TODO 2 - Create Platforms
    createPlatform(125, 625, 10100, 1, "red");
    createPlatform(0, 525, 1250, 1, "blue");
    createPlatform(125, 425, 1500, 1, "red");
    createPlatform(0, 325, 1250, 1, "blue");
    createPlatform(125, 225, 15000, 1, "red");
    createPlatform(0, 125, 1250, 1, "light blue");
    




    // TODO 3 - Create Collectables
    createCollectable("diamond", 9, 215);
    createCollectable("diamond", 9, 425);
    createCollectable("diamond", 9, 625);


    
    // TODO 4 - Create Cannons
createCannon("top", 200, 600 );
createCannon("top", 400, 600 );
createCannon("top", 600, 600 );
createCannon("top", 800, 600 );
createCannon("top", 1000, 600 );
createCannon("top", 1200, 600 );





    
    
    //////////////////////////////////
    // ONLY CHANGE ABOVE THIS POINT //
    //////////////////////////////////
  }

  registerSetup(setup);
});
