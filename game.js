let player = {
  x: 10,
  y: 10,
  path: []
};

function create(game) {}

function update(game) {
  game.setDot(player.x, player.y, Color.Black);
  player.path.forEach(step =>
    game.setDot(step.x, step.y, Color.Blue));
}

function onKeyPress(direction) {
  player.path.push({ x: player.x, y: player.y });

  if (direction === Direction.Up && player.y > 0) {
    player.y--;
  }
  if (direction === Direction.Down && player.y < 23) {
    player.y++;
  }
  if (direction === Direction.Left && player.x > 0) {
    player.x--;
  }
  if (direction === Direction.Right && player.x < 23) {
    player.x++;
  }
}

let config = {
  create: create,
  update: update,
  onKeyPress: onKeyPress,
};

let game = new Game(config);
game.run();