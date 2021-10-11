class player {
  
    constructor(x, y, width, height,) {
      var options = {
        isStatic: true
      }
      
      this.x = x;
      this.y = y;
      this.width = width;
      this.height = height;
      this.player_image = loadImage("./assets/player.png");
      this.base_base =  loadImage("./assets/base.png");
      this.background =  loadImage("./assets/background.png");
      
    }
}
backgroundImg = loadImage("./assets/background.png");
baseimage = loadImage("./assets/base.png");
playerimage = loadImage("./assets/player.png");