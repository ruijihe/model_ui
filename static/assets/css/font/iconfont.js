(function () {
  function ready(callback) {
    if (document.readyState != 'loading') callback();
    else if (document.addEventListener) document.addEventListener('DOMContentLoaded', callback);
    else document.attachEvent('onreadystatechange', function () {
      if (document.readyState == 'complete') callback();
    });
  }

  function injectStyle(id, styleText) {
    var svgNode = document.getElementById(id);

    if (!svgNode) {
      var head = document.head || document.getElementsByTagName('head')[0];
      var styleNode = document.createElement('style');
      styleNode.id = id
      styleNode.innerHTML = styleText;
      head.appendChild(styleNode);
    }
  }

  function injectSvg(id, svgText) {
    var svgNode = document.getElementById(id);

    if (!svgNode) {
      svgNode = document.createElement('div');
      svgNode.style.height = 0;
      svgNode.style.width = 0;
      svgNode.style.position = 'absolute';
      svgNode.style.overflow = 'hidden';
      svgNode.setAttribute('aria-hidden', 'true');
      svgNode.id = id;

      if (document.body.firstChild) {
        document.body.insertBefore(svgNode, document.body.firstChild);
      } else {
        document.body.appendChild(svgNode);
      }
    }

    svgNode.innerHTML = svgText;
  }

  ready(function () {
    var styleId = '_CD_STYLE';
    var svgId = '_CD_ICON_x1DWk9J11QjGnMm';
    var styleText = '.svg-icon { display: inline-block; width: 1em; height: 1em; fill: currentColor; vertical-align: -0.1em; font-size:16px; }';

    injectStyle(styleId, styleText);
    injectSvg(svgId, svgText);
  });
})()