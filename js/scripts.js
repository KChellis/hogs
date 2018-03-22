$(function(){
  $("img").click(function(event) {
    var id = event.target.id;
    if(id === "hedgehog"){
      $(".hedgehog").toggle();
    } else if (id === "warthog") {
      $(".warthog").toggle();
    } else {
      $(".kune").toggle();
    }
  });
});
