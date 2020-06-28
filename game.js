function create(game) {}

function update(game) {}

function onKeyPress(direction) {}

let config = {
  create: create,
  update: update,
  onKeyPress: onKeyPress,
};

let game = new Game(config);
game.run();