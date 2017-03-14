$(document).ready(function(){

  //can't pick sounds out of an array... why?
  var one = new Howl({
    src: ['songs/01.mp3'],
  });
  var two = new Howl({
    src: ['songs/02.mp3'],
  });
  var three = new Howl({
    src: ['songs/03.mp3'],
  });
  var four = new Howl({
    src: ['songs/04.mp3'],
  });
  var five = new Howl({
    src: ['songs/05.mp3'],
  });
  var six = new Howl({
    src: ['songs/06.mp3'],
  });
  var seven = new Howl({
    src: ['songs/07.mp3'],
  });
  var eight = new Howl({
    src: ['songs/08.mp3'],
  });

  var startingPostion = function() {
    TweenLite.to($('#btn-01'), 5, {x: 0,  y: 0})
    TweenLite.to($('#btn-02'), 4, {x: 0,  y: 0})
    TweenLite.to($('#btn-03'), 3, {x: 0,  y: 0})
    TweenLite.to($('#btn-04'), 9, {x: 0, y: 0})
    TweenLite.to($('#btn-05'), 8, {x: 0,  y: 0})
    TweenLite.to($('#btn-06'), 6, {x: 0,  y: 0})
    TweenLite.to($('#btn-07'), 7, {x: 0, y: 0})
    TweenLite.to($('#btn-08'), 10, {x: 0, y: 0})
  }

  TweenLite.to($('#btn-01'), 5, {x: 250, y: 300, ease:Elastic.easeOut,  onComplete: startingPostion})
  TweenLite.to($('#btn-02'), 4, {x: 1000, y: 400, ease:Elastic.easeOut, onComplete: startingPostion})
  TweenLite.to($('#btn-03'), 3, {x: 50, y: 60, ease:Elastic.easeOut,  onComplete: startingPostion})
  TweenLite.to($('#btn-04'), 9, {x: 25, y: 330, ease:Elastic.easeOut, onComplete: startingPostion})
  TweenLite.to($('#btn-05'), 8, {x: 505, y: 0, ease:Elastic.easeOut,  onComplete: startingPostion})
  TweenLite.to($('#btn-06'), 6, {x: 420, y: 420, ease:Elastic.easeOut,  onComplete: startingPostion})
  TweenLite.to($('#btn-07'), 7, {x: 10, y: 200, ease:Elastic.easeOut, onComplete: startingPostion})
  TweenLite.to($('#btn-08'), 3, {x: -400, y: 100, ease:Elastic.easeOut, onComplete: startingPostion})

  //songs overplay eachother
  $('#btn-01').click(function(){
    one.stop();
    one.play();
  });
  $('#btn-02').click(function(){
    two.stop();
    two.play();
  });
  $('#btn-03').click(function(){
    three.stop();
    three.play();
  });
  $('#btn-04').click(function(){
    four.stop();
    four.play();
  });
  $('#btn-05').click(function(){
    five.stop();
    five.play();
  });
  $('#btn-06').click(function(){
    six.stop();
    six.play();
  });
  $('#btn-07').click(function(){
    seven.stop();
    seven.play();
  });
  $('#btn-08').click(function(){
    eight.stop();
    eight.play();
  });

  $('#play').click(function(){
    //switch statement may be the best option
    five.play()
  });
  $('#pause').click(function(){
    one.pause();
    two.pause();
    three.pause();
    four.pause();
    five.pause();
    six.pause();
    seven.pause();
    eight.pause();
  });
  $('#stop').click(function(){
    one.stop();
    two.stop();
    three.stop();
    four.stop();
    five.stop();
    six.stop();
    seven.stop();
    eight.stop();
  });
});

