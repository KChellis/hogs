$(function(){
  $("img").click(function(event) {

    var id = event.target.id;
    alert(id);
    if(id === "hedgehog"){
      $(".hedgehog").show();
    } else if (id === "warthog") {
      $(".warthog").show();
    } else {
      $(".kune").show();
    }
  });
});
