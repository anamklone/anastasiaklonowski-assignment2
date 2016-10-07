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
  });
})(jQuery);