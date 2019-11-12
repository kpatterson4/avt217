$(document).ready(function() {
  console.log('Hewwo');

  $( '.chocolate' ).click(function() {
    $('.numone').toggleClass('align-left')
  });

  $( '.potatoes' ).click(function() {
    $('.numtwo').toggleClass('big')
  });

  $( '.ramen' ).click(function() {
    $('.numthree').toggleClass('color')
  });
});
