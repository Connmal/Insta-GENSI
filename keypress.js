$(document).ready(function(){
  $('#alterName').keypress(function(ev){
    //If user pressed Enter Key then trigger Submit click
    if(ev.keyCode==13)
    $('#alterSubmit').click();
  });
  $( "#rAtextInput" ).keypress(function() {
      $('#rAcheckText').prop('checked', true);
  });
  $( "#brtextInput" ).keypress(function() {
      $('#brcheckText').prop('checked', true);
  });
});
$(document).keypress(function(ev){
  //console.log($(".popop_box:visible"));
  //If user pressed Enter Key then trigger Submit click
  if(ev.keyCode==13 && currSlide != 2 &&  (currSlide < 6 || currSlide >= 10) && currSlide != 13 && currSlide != 14 && $(".popop_box:visible").length == 0)
  {
    if(document.getElementById("Next").disabled != true) $('#Next').click();
  }
});
