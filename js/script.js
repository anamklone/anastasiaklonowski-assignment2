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
    var valid = true;
    if ($('input[name=firstName]').val() == null || $('input[name=firstName]').val() == '') {
      valid = false;
      $('label[for=firstName] + .alert').text('firstName field is not valid');
    }
    if ($('input[name=lastName]').val() == null || $('input[name=lastName]').val() == '') {
      valid = false;
      $('label[for=lastName] + .alert').text('lastName field is not valid');
    }
    if ($('input[name=email]').val() == null || $('input[name=email]').val() == '') {
      valid = false;
      $('label[for=email] + .alert').text('email field is not valid');
    }
    if ($('input[name=gender]:radio:checked').val() == null) {
      valid = false;
      $('label[for=gender] + .alert').text('gender field is not valid');
    }
    if ($('select[name=age]').val() == 'default') {
      valid = false;
      $('label[for=age] + .alert').text('age field is not valid');
    }
    if ($('textarea[name=feedback]').val() == '') {
      valid = false;
      $('textarea[name=feedback] + .alert').text('feedback field is not valid');
    }
    if (valid) {
      $('body').html('<h1 style="text-align:center">Thank you for your feedback!</h1>');
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
  $('input[name=gender]').click(function() {
    $('label[for=gender] + .alert').text('');
  });
  $('select[name=age]').click(function() {
    $('label[for=age] + .alert').text('');
  });
  $('textarea[name=feedback]').click(function() {
    $('textarea[name=feedback] + .alert').text('');
  });
})(jQuery);