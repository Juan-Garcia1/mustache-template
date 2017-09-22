$(document).ready(function() {
  var $ul = $('ul');
  var $template = $('#playlist-template').html();
  var tracks = '';

  var qotsa = [
    {
      track:1,
      name: 'turnin on the screw',
      duration: '05:20',
      price: 1.29
    },
    {
      track:2,
      name: 'sick, sick, sick',
      duration: '03:34',
      price: 1.29
    },
    {
      track:3,
      name: 'i\'m designer',
      duration: '04:04',
      price:1.29
    },
    {
      track:4,
      name: 'into the hollow',
      duration: '03:42',
      price: 1.29
    },
    {
      track:5,
      name: 'misfit love',
      duration: '05:39',
      price: 1.29
    },
    {
      track:6,
      name: 'battery acid',
      duration: '04:06',
      price: 1.29
    },
    {
      track:7,
      name: 'make it wit chu',
      duration: '04:50',
      price: 1.29
    },
    {
      track:8,
      name: '3s & 7s',
      duration: '03:34',
      price: 1.29
    },
    {
      track:9,
      name: 'suture up your future',
      duration: '04:37',
      price: 1.29
    },
    {
      track:10,
      name: 'river in the road',
      duration: '03:19',
      price: 1.29
    },
    {
      track:11,
      name: 'run, pig, run',
      duration: '04:39',
      price: 1.29
    },
  ];

  function addSong(song) {
    tracks += Mustache.render($template, song);
    $ul.html(tracks);
  }

  // GET TOTAL PRICE OF ALBUM
  const total_hrs = qotsa.reduce(function(sum, total) {
      return +((sum + total.price).toFixed(2));
  }, 0);
  $('#total-price').html(`Total $${total_hrs}`);

  //LOOP THROUGH THE ARRAY & STORE IN UL
  qotsa.forEach(function(song){
    addSong(song);
  });

 //WHEN HOVER, CHANGE THE TRACK NUMBER TO A PLAY BUTTON
  var $div = $('ul').children();
  $div.each(function() {
    var $trackNumber = $(this).find('.track').text();

    $(this).hover(function() {
      $(this).find('.track').text('').addClass('fa fa-play').css('color', 'white');
    }, function() {
      $(this).find('.track').text($trackNumber).removeClass('fa fa-play fa-pause').css('color', 'gray');
    });
  });

  //TOGGLE PLAY/PAUSE BUTTON
  var $span = $div.find('span');
  $span.on('click', function() {
    if ($(this).hasClass('fa fa-play')) {
      $(this).removeClass('fa fa-play').addClass('fa fa-pause');
    } else if ($(this).hasClass('fa fa-pause')) {
      $(this).removeClass('fa fa-pause').addClass('fa fa-play');
    }
  });

});
