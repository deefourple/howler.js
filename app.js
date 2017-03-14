$(document).ready(function(){
 var sound = new Howl({
  src: ['./showerbeers.mp3'],
    onend: function() {
    console.log('finished');
    }
  });
  $('#btn').click(function(){
    console.log("Track: Showerbeer!")
    sound.play();
  });
});

