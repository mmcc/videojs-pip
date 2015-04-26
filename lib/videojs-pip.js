/*! videojs-pip - v0.0.0 - 2015-4-22
 * Copyright (c) 2015 Matthew McClure
 * Licensed under the Apache-2.0 license. */
(function(window, videojs) {
  'use strict';

  var defaults = {
    option: true,
    width: '200px',
    height: '150px',
    src: {
      src: 'http://download.wavetlan.com/SVV/Media/HTTP/H264/Talkinghead_Media/H264_test3_Talkingheadclipped_mp4_480x360.mp4',
      type: 'video/mp4'
    }
  };

  /**
   * Initialize the plugin.
   * @param options (optional) {object} configuration for the plugin
   */
  var pip = function(options) {
    var settings = videojs.util.mergeOptions(defaults, options);
    var player = this;

    var el = createPipEl(player.id());
    player.el().appendChild(el);
    var pipPlayer = videojs(el, settings);

    addEventListeners(player, pipPlayer);

    pipPlayer.src(settings.src);

    return pipPlayer;
  };

  var createPipEl = function(id) {
    var el = document.createElement('video');
    el.id = id +'-vjs-pip';
    el.preload = 'auto';
    el.className = 'vjs-pip';

    return el;
  };

  function addEventListeners(player, pipPlayer) {
    player.on('play', function() { pipPlayer.play(); });
    player.on('pause', function() { pipPlayer.pause(); });
    player.on('dispose', function() { pipPlayer.dispose(); });
  }

  // register the plugin
  videojs.plugin('pip', pip);
})(window, window.videojs);
