
var lightbox = new PhotoSwipeLightbox({
  gallery: '.images',
  children: 'a',
  // dynamic import is not supported in UMD version
  pswpModule: PhotoSwipe 
});
lightbox.init();