var previews = {
  'gifcap': {
    'title': 'GifCap',
    'img': '<h4>custom gifs</h4><img src="./img/gifcap.gif"><h4>antique style</h4><img src="./img/gifcap1.gif"><h4>app interface</h4><img src="./img/gifcap2.png">',
  },
  'bestsport': {
    'title': 'Best Sport Bracket',
    'img': '<h4>the bracket</h4><img src="./img/best-sport.jpg"><h4>matchup screen</h4><img src="./img/best-sport2.png"><h4>custom animated svgs</h4><img src="./img/best-sport-icons.gif"><h4>custom cursor</h4><img src="./img/best-sport-mouse.gif"><h4>content by ben</h4><img src="./img/best-sport1.jpg">'
  },
  'hildol': {
    'title': 'Hillary Clinton Paper Doll',
    'img': '<img src="./img/hil-paper-doll.gif">'
  },
};

function populateModal(item) {
  $('.main-content').html(previews[item].img);
};

$(document).ready(function() {

  $('.work').click(function() {
    $('#work').fadeIn();
    $('html,body').animate({
        scrollTop: $('#work').offset().top
      },
      'slow');
  });


    $('.btn-open-modal').on('click', function() {
      var target = $(this).data('target');
      $(target).addClass('in');
      populateModal($(this).attr('id'));
    });

    $('.modal').on('click', function(e) {
      //Check whether click on modal-content
      if (e.target !== this)
        return;

      $(this).removeClass('in');
    });

});
