final int screenWidth = 200;
final int screenHeight = 200;

void initialize() {
  addScreen("mylevel", new MyLevel(screenWidth, screenHeight));
}

class MyLevel extends Level {
  MyLevel(float levelWidth, float levelHeight) {
    super(levelWidth, levelHeight);
    addScreenLayer("my level layer", new MyLevelLayer(this));
  }
}

class MyLevelLayer extends LevelLayer {
  MyLevelLayer(Level owner) {
    super(owner);
    color bueishColor = color(0,130,255);
    setBackgroundColor(blueishColor);
  }
}
