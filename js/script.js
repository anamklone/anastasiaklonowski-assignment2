(function($) {
  $('input[name=gender]:radio').click(function() {
    var value = $('input[name=gender]:radio:checked').val();
    if (value == 'other') {
      $('#textBox').removeAttr('disabled');
    } else {
      $('#textBox').attr('disabled', 'true');
    }
  });
  $('#thisForm').on('submit', function(e) {
    e.preventDefault();
    if ($('input[name=firstName]').val() == null || $('input[name=firstName]').val() == "") {
      $('label[for=firstName] + .alert').text('firstName field is not valid');
    }
    if ($('input[name=lastName]').val() == null || $('input[name=lastName]').val() == "") {
      $('label[for=lastName] + .alert').text('lastName field is not valid');
    }
    if ($('input[name=email]').val() == null || $('input[name=email]').val() == "" || $('input[name=email]').val().indexOf("@") != -1) {
      $('label[for=email] + .alert').text('email field is not valid');
    }
  });
  $('input[name=firstName]').click(function() {
    $('label[for=firstName] + .alert').text('');
  });
  $('input[name=lastName]').click(function() {
    $('label[for=lastName] + .alert').text('');
  });
  $('input[name=email]').click(function() {
    $('label[for=email] + .alert').text('');
  });
})(jQuery);