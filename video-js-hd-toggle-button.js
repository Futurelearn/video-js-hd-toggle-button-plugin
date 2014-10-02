(function(window, document, vjs) {
  var hdSelected = false;
  var sdSrc;
  var hdSrc;
  var player;

  vjs.HdToggleButton = vjs.Button.extend({
      init: function(newPlayer, options){
        sdSrc = options.sdSrc;
        hdSrc = options.hdSrc;
        player = newPlayer;
        vjs.Button.call(this, player, options);
      }
  });

  vjs.HdToggleButton.prototype.buttonText = 'HD';

  vjs.HdToggleButton.prototype.buildCSSClass = function() {
    return 'vjs-hd-button ' + vjs.Button.prototype.buildCSSClass.call(this);
  }

  vjs.HdToggleButton.prototype.onClick = function() {
    hdSelected = !hdSelected;

    if (hdSelected) {
      player.src([{type: "video/mp4", src: hdSrc }]);
      this.addClass('vjs-hd-selected');
    } else {
      player.src([{type: "video/mp4", src: sdSrc }]);
      this.removeClass('vjs-hd-selected');
    }

    player.play();
  };

  vjs.plugin('HdToggleButton', function(options) {
    var button = new vjs.HdToggleButton(this, options);
    this.controlBar.addChild(button);
  });
})(window, document, vjs)
