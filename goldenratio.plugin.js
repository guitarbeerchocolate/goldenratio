$.fn.setGoldenRectangle = function()
{
  var gr = parseInt(this.height() * 1.6180);
  this.width(gr);
  return gr;
}

$.fn.splitHoriz = function()
{
  this.setGoldenRectangle();
  this.children().eq(0).css('float','left');
  this.children().eq(1).css('float','left');
  this.children().eq(0).height(this.height());
  this.children().eq(0).width(this.height());
  this.children().eq(1).height(this.height());
  this.children().eq(1).width(parseInt(this.width() - this.children().eq(0).width()));
}