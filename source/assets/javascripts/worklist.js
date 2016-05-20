function worklisting() {
  this.linkList = document.querySelectorAll('.worklisting li a');
  this.imageList = [];
  this.previewCanvas = document.getElementById('workpreview-canvas');

  for (var i = 0; i < this.linkList.length; i++) {
    var link = this.linkList[i],
        linkImage = new Image();
    linkImage.src = link.dataset.previewBg;
    linkImage.classList.add('bg');
    this.previewCanvas.appendChild(linkImage);
    this.imageList.push(linkImage);
    link.linkImage = linkImage;
    link.index = i;
    link.addEventListener('mouseenter', this.changeLink.bind(this), false);
    link.parentNode.parentNode.addEventListener('mouseleave', this.hideAllImages.bind(this), false);
  }
}

worklisting.prototype.changeLink = function(e) {
  this.hideAllImages();
  this.imageList[e.target.index].classList.add('show');
}

worklisting.prototype.hideAllImages = function() {
  for (var i = 0; i < this.imageList.length; i++) {
    this.imageList[i].classList.remove('show');
  }
}

worklisting = new worklisting();
