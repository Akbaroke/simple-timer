let menit = 0;
let detik = 0;
let mDetik = 0;

let pause = false;
setInterval(()=>{
  if(pause){
    setTimeout(()=>{
      if(mDetik < 10){
        $('#mDetik').html("0"+mDetik);
      }else{
        $('#mDetik').html(mDetik);
      }
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
    },);
    mDetik++;
    if(mDetik == 99){
      mDetik = 0;
      detik++;
    }
    if(detik == 60){
      detik = 0;
      menit++;
    }
    if(menit == 60){
      menit = 0;
    }
  }
}, 10);


// tombol pause
$('#btn-pause').click(function (e) { 
  e.preventDefault();
  pause = false;
  $('#btn-lap').css('display','none');
  $('#btn-play').css('display','block');
  $('#btn-pause').css('display','none');
  if(mDetik > 0 || detik > 0 || menit > 0){
    $('#btn-reset').css('display','block');
    $('#putar').css('animation-play-state','paused');
  }
});

// tombol play
$('#btn-play').click(function (e) { 
  e.preventDefault();
  $('#btn-play').css('display','none');
  $('#btn-pause').css('display','block');
  $('#btn-lap').css('display','block');
  $('#btn-reset').css('display','none');
  $('#putar').css('animation-play-state','running');
  pause = true;
});

// tombol reset
$('#btn-reset').click(function (e) { 
  e.preventDefault();
  pause = false;
  menit = 0;
  detik = 0;
  mDetik = 0;
  $('#mDetik').html("00");
  $('#detik').html("00");
  $('#menit').html("00");
  $('#btn-reset').css('display','none');
  location.reload(true);
});


let nomer = 1;
// lap record
$('#btn-lap').click((e)=>{
  e.preventDefault();
  $('#lap-record').append(`
  <div>
  <p>`+nomer+`</p>
  <h3>`+$('#menit').text()+`:`+$('#detik').text()+`:`+$('#mDetik').text()+`</h3>
  </div>
  `)
  if(nomer === 1){
    $('.lingkaran-besar').css('bottom','-60px');
    $('#putar').css('top','-245px');
  }
  nomer++;
})