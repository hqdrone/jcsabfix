(function($){
  jQuery.fn.jcsabfix = function(){
    var core = function(){
      var parentEl = $(this),
          parentElWidth = parentEl.width(),
          parentElClass = parentEl.attr('class'),
          el = parentEl.find(':first-child'),
          elWidth = Math.floor(el.outerWidth(true)),
          elClass = el.attr('class'),
          items = Math.floor(parentElWidth/elWidth),
          fixItem = '<div class="' + parentElClass.split(' ').join('-') + '-' + elClass + '-jcsabfix" style="height:0;overflow:hidden;visibility:hidden;"></div>';

      for (var i = 0; i < items - 1; i++) {
        if ( $('div[class="' + parentElClass.split(' ').join('-') + '-' + elClass + '-jcsabfix"').length < items - 1) {
          parentEl.append(fixItem)
        }
      }

      $('div[class="' + parentElClass.split(' ').join('-') + '-' + elClass + '-jcsabfix"').width(elWidth);
    };
    return this.each(core);
  };
})(jQuery);