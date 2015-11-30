$(function() {

  $(".thumbnail").on("click")function(event) {
    event.preventDefault();
    var elementThatWasClicked = $(this);
    console.remove(elementThatWasClicked);
  })

})