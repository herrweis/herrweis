function shuffle(array) {
  var currentIndex = array.length, temporaryValue, randomIndex;
  while (0 !== currentIndex) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }
  return array;
}

function whatILove() {
  this.words = ['develop', 'program', 'create', 'play', 'explore', 'cook', 'eat'];
  shuffle(this.words);
  this.words.push('design');
  this.current = 0;
  this.el = document.getElementById('whatilove');
  window.setTimeout(this.changeWord.bind(this), 1000);
}

whatILove.prototype.changeWord = function() {
  if((this.current + 1) < this.words.length) {
    ++this.current;
  } else {
    this.current = 0;
  }
  // this.el.innerHTML = this.words[this.current];
  // window.setTimeout(this.changeWord.bind(this), 1000);

  this.el.classList.remove('end-change');
  this.el.classList.add('start-change');
  window.setTimeout(this.endChange.bind(this), 200);
}

whatILove.prototype.endChange = function() {
  this.el.innerHTML = this.words[this.current];
  this.el.classList.remove('start-change');
  this.el.classList.add('end-change');
  window.setTimeout(this.changeWord.bind(this), 1000);
}
var whatILove = new whatILove();
