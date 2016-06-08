$(document).ready(function() {
  $('#triangle').click(function(){
    $('#quiz').slideDown();
    $('#triangle').hide();
    $('#signIn').show();
    event.preventDefault();
  });
});