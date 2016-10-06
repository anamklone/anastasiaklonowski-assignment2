(function($) {
  // $('#thisForm').submit();
  // $(document).on('submit', '#thisForm');
  $('#thisForm').on('submit', function(e) {
    e.preventDefault();
    console.log('nope');
    var $form = $(this).serialize();  // Takes the form information
    console.log($form);
  });
})(jQuery);