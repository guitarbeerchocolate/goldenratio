(function( $ ){
  $.fn.goldenratio = function()
  {
    
  },
  $.fn.setGRwidth = function()
  {
    $(this).width($(this).height()*1.6180);
  },
  $.fn.setGRheight = function()
  {
    $(this).height($(this).width()/1.6180);
  },
  $.fn.splitWidthToGR = function()
  { 
    var parentWidth = parseInt($(this).width());
    var secondDivWidth = parentWidth-(parentWidth/1.6180);
    
    var firstDivWidth = parseInt(parentWidth-secondDivWidth);
    
    var $firstDiv = $('<div class="splitWidthFirst"/>');
    var $secondDiv = $('<div class="splitWidthSecond"/>');
    $secondDiv.width(secondDivWidth);
    $firstDiv.width(firstDivWidth);

    $(this).append($firstDiv);
    $(this).append($secondDiv);
  },
  $.fn.splitHeightToGR = function()
  {
    $(this).height($(this).width()/1.6180);
  }
})( jQuery );