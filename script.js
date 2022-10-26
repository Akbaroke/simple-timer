let jam = 0;
let menit = 0;
let detik = 0;

let pause = false;
setInterval(()=>{
  if(pause){
    setTimeout(()=>{
      if(detik < 10){
        $('#detik').html("0"+detik);
      }else{
        $('#detik').html(detik);
      }
      if(menit < 10){
        $('#menit').html("0"+menit);
      }else{
        $('#menit').html(menit);
      }
      if(jam < 10){
        $('#jam').html("0"+jam);
      }else{
        $('#jam').html(jam);
      }
    },0);
    detik++;
    if(detik == 60){
      detik = 0;
      menit++;
    }
    if(menit == 60){
      menit = 0;
      jam++;
    }
  }
}, 1000);


// tombol pause
$('#btn-pause').click(function (e) { 
  e.preventDefault();
  pause = false;
  $('#btn-play').css('display','block');
  $('#btn-pause').css('display','none');
  if(detik > 0 || menit > 0 || jam > 0){
    $('#btn-reset').css('display','block');
    $('#putar').css('animation-play-state','paused');
  }
});

// tombol play
$('#btn-play').click(function (e) { 
  e.preventDefault();
  $('#btn-play').css('display','none');
  $('#btn-pause').css('display','block');
  $('#btn-reset').css('display','none');
  $('#putar').css('animation-play-state','running');
  pause = true;
});

// tombol reset
$('#btn-reset').click(function (e) { 
  e.preventDefault();
  pause = false;
  jam = 0;
  menit = 0;
  detik = 0;
  $('#detik').html("00");
  $('#menit').html("00");
  $('#jam').html("00");
  $('#btn-reset').css('display','none');
  $('#putar').load(location.href + " #putar");
});