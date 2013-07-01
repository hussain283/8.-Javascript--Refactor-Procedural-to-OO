$(document).ready(function() {
  $('#roller button.add').on('click', function() {
    newDice.appendTo('.dice');
  });

  $('#roller button.roll').on('click', function() {
    $('.die').each(function(k, die) {
      newDice.roll();
      newDice.setValue(this);
    });
  });
});

newDice = new Dice(6);

function Dice(sides) {
  this.sides = sides;
  this.currentValue = 0;
};

Dice.prototype.roll = function() {
  this.currentValue =  Math.floor((Math.random()*this.sides + 1));
};

Dice.prototype.appendTo = function() {
  $('.dice').append('<div class="die">0</div>');
};

Dice.prototype.setValue = function(element) {
  $(element).text(this.currentValue);
};