$(document).ready(function() {
  'use strict';

  var $screen = $('#screen');
  var show = '';
  var opKey;

  function display(e) {
    var $this = $(this);
    var $key = $(this).text();

    if ($key !== '=') {
      show += $key;
      $screen.text(show);
      return show;
    }
  };

  function calculate() {
    var opIndex = $.inArray(opKey, show);
    var num2 = parseInt(show.slice(opIndex + 1));
    var num1 = parseInt(show.slice(0, opIndex));

    if (opKey === 'x') {
      show = num1 * num2;
    } else if (opKey === '-') {
      show = num1 - num2;
    } else if (opKey == '+'){
      show = num1 + num2;
    } else if (opKey = $('.operator').eq(1).text()) {
      show = num1 / num2;
    }
    $screen.text(show);
  };

  function asmd() {
    if ($(this).text() !== '=') {
      opKey = $(this).text();
    }
  }

  $('.operator').on('click', asmd);
  $('#calc').on('click', calculate);
  $('span').on('click', display);
  $('#cancel').on('click', function() {
    document.location.reload();
  });
});
