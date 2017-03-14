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
    sound.play();
  });
  $('#pause').click(function(){
    sound.pause();
  });
  $('#stop').click(function(){
    //switch statement may be the way to go
  });
});

