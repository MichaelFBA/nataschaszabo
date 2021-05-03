

var pswpElement = document.querySelectorAll('.pswp')[0];
var items = [];
document.querySelectorAll('.imagesWrapper div').forEach(function (e) {
  var size = e.getAttribute('data-size').split('x');
  var src = e.getAttribute('style').split('\'');
  items.push({
    src: src[1],
    w: parseInt(size[0], 10),
    h: parseInt(size[1], 10)
  });

  e.addEventListener('click', function (item) {
    var index = item.target.getAttribute('data-index');
    // Initializes and opens PhotoSwipe
    var options = {
      index: parseInt(index, 10),
      bgOpacity: 0.9,
      history: false,
      zoomEl: false,
      loop: false
    };
    var gallery = new PhotoSwipe(
      pswpElement,
      PhotoSwipeUI_Default,
      items,
      options
    );
    gallery.init();
  });
});

