function Cube(options) {

  this.nunOfFace = 6;
  this.styles = [];
  this.isDrag = false;
  this.currentPoint;
  this.currentAngle; 
  this.upAngle;
  this.perspective = 'perspective(800px) ';
  this.rotateTween = null;
  this.width = 300;
  this.height = 250;
  this.isVertical = false;
  this.autoRotate = true;
  this.autoRotateDelay = 5;
  this.autoRotateTime = 2;
  this.autoRotateLeft = true;
  this.autoRotateTop = true;
  this.loop = 0;
  this.curLoop = 0;
  this.links;
  this.isDrag = false;
  this.currentPoint = null;
  this.rotateTween = null;
  this.isTest = false;
  
  this.cube = document.getElementById(options.banner);
  this.faces = this.cube.querySelectorAll('.face');
  
  this.parse(options);
  this.init();
  this.addEvents();

 };
 
Cube.prototype.parse = function(options) {
    this.width = options.width;
    this.height = options.height;
	this.isTest = options.isTest;
    this.zIndex = options.zIndex;
    this.isVertical = options.vertical;
    this.autoRotate = options.autoRotate;
    this.autoRotateDelay = options.autoRotateDelay;
    this.autoRotateTime = options.autoRotateTime;
    this.autoRotateLeft = options.autoRotateLeft;
    this.autoRotateTop = options.autoRotateTop;
	this.loop = options.loop;
    this.links = options.faces;
	this.completeFunc = options.completeFunc;
  }

Cube.prototype.init = function() {
    
    var transform;
    this.styles = [];
    for (var i = 0; i < this.nunOfFace; i++) {
      transform = i < 4 ? 'rotateY(' + i * 90 + 'deg)' : 'rotateX(' + Math.pow(-1, i) * 90 + 'deg)';
      
	  if (i == 2) {
        transform = this.isVertical ? 'rotateX(180deg) rotateY(0deg)' : 'rotateX(0deg) rotateY(180deg)';
      }
	  
	  if (this.isTest) {
		transform = transform + ' translateZ(' + (i < 4 ? this.width / 2 : this.height / 2) + 'px)';
	  } else {      
		transform = transform + ' translateZ(' + (this.height / 2) + 'px)';
	  }
	  
      this.faces[i].style.marginLeft = -this.width / 2 + 'px';
      
	  if (this.isTest) {
		this.faces[i].style.marginTop = -(i < 4 ? this.height / 2 : this.width / 2) + 'px';
	  } else {
		this.faces[i].style.marginTop = -(this.height/ 2) + 'px';
	  }
		
	  if (this.isTest) {
		this.faces[i].style.width = this.width + 'px';
	  } else {
		if (i == 1 || i == 3) {	
			this.faces[i].style.width = this.height + 'px';
		} else {
			this.faces[i].style.width = this.width + 'px';
		}
	  }
      
	  if (this.isTest) {
		this.faces[i].style.height = (i < 4 ? this.height : this.width) + 'px';
      } else {
		this.faces[i].style.height = this.height + 'px';
	  }
	  
      this.faces[i].style.transform = this.faces[i].style.webkitTransform = this.perspective + transform;
      this.styles.push(transform);
    }
	
	for (var i = 0; i < this.links.length; i ++) {
      this.setFaceData(this.links[i]);
    }
  }

Cube.prototype.setFaceData = function(objFace) {
  
    var face = objFace.face;
		
	var divFace = this.cube.querySelectorAll('.' + face)[0];
    divFace.setAttribute('data-clickTag', objFace.clickTag);
    divFace.setAttribute('data-type', objFace.type);

    var banner;
    if (objFace.type.toLowerCase() == 'banner') {
      banner = document.createElement('iframe');
    }
    else if (objFace.type.toLowerCase() == 'video') {
      banner = document.createElement('video');
    } 
    else {
      banner = document.createElement('img');
    }  
    banner.setAttribute('src', objFace.link);
    banner.setAttribute('width', parseInt(divFace.style.width));
    banner.setAttribute('height', parseInt(divFace.style.height));
    divFace.insertBefore(banner, divFace.childNodes[0]);
  }

Cube.prototype.resetFaces = function() {
    var transform;
    for (var i = 0; i < this.nunOfFace; i++) {
      transform = this.faces[i].style.transform || this.faces[i].style.webkitTransform;
      this.styles[i] = transform.replace(perspective, '');
    }    
  }

Cube.prototype.updateFaces = function(angle) {
    var transform;
    for (var i = 0; i < this.nunOfFace; i++) {
      transform = (this.isVertical ? 'rotateX(' + angle + 'deg)' : 'rotateY(' + angle + 'deg)') + this.styles[i];
      this.faces[i].style.transform = this.faces[i].style.webkitTransform = this.perspective + transform;
    }
  }

Cube.prototype.addEvents = function() {
	var that = this;
	
	this.cube.addEventListener('touchstart', function(evt){
      that.isDrag = true;

      var touch = evt.targetTouches[0];
      that.currentPoint = {'x': touch.clientX, 'y': touch.clientY};

      window.addEventListener('touchmove', function (evt) {
		that.onTouchMoveHandler(evt);
	  }, false);
    }, false);
      
    this.cube.addEventListener('mousedown', function (evt) {
      if (that.rotateTween) {
        that.rotateTween.kill();
        that.rotateTween = null;
      }
	  
      that.isDrag = true;
      that.currentPoint = {'x': evt.clientX, 'y': evt.clientY};

      window.addEventListener('mousemove', function (evt) {
		that.onMouseMoveHandler(evt);
	  }, false);
    }, false);
	
    this.cube.addEventListener('click', function (evt) {
		that.onClickCubeHandler(evt.clientX, evt.clientY, evt.target);
    }, false);

    window.addEventListener('mouseup', function(evt) {
		that.onMouseUpHandler(evt);	
	}, false);
    window.addEventListener('touchend', function(evt) {
		that.onTouchEndHandler(evt);
	}, false);
  }

Cube.prototype.onMouseUpHandler = function(evt) {
	var that = this;
    window.removeEventListener('mousemove', function(evt) {
		that.onMouseMoveHandler(evt);
	}, false);
    this.onUpHandler(evt.clientX, evt.clientY);
  }

Cube.prototype.onTouchEndHandler = function(evt) {
    var that = this;
	window.removeEventListener('touchmove', function(evt) {
		that.onTouchMoveHandler(evt)
	}, false);
    var touch = evt.changedTouches[0];
    this.onUpHandler(touch.clientX, touch.clientY);
  }

Cube.prototype.onUpHandler = function(x, y) {
	var that = this;
    if (this.currentPoint.x == x && this.currentPoint.y == y) {
      isDrag = false;
      return;
    }

    if (isDrag && currentAngle != upAngle) {
      var obj = { angle: currentAngle };
      TweenMax.to(obj, 0.3, {
        angle: upAngle,
        onUpdate: function () {
          that.updateFaces(obj.angle);
        },
        onComplete: function () {
          that.resetFaces();
        }
      });
    }
    isDrag = false;
  }

Cube.prototype.onMouseMoveHandler = function(evt) {
    this.onMoveHandler(evt.clientX, evt.clientY);
  };

Cube.prototype.onTouchMoveHandler = function(evt) {
    var touch = evt.targetTouches[0];
    //this.onMoveHandler(touch.clientX, touch.clientY);
  };

Cube.prototype.onMoveHandler = function(x, y) {
    var nextPoint = {
      'x': x - this.currentPoint.x,
      'y': y - this.currentPoint.y
    };
    var angle = {
      'x': -nextPoint.y / 2,
      'y': nextPoint.x / 2
    };
    this.updateFaces(this.isVertical ? angle.x : angle.y);
    currentAngle = this.isVertical ? angle.x : angle.y;
    var piece = currentAngle % 90;
    if (Math.abs(piece) >= 45) {
      upAngle = piece > 0 ? currentAngle + 90 - piece : currentAngle - 90 - piece;
    } else {
      upAngle = currentAngle - piece;
    }
  };

Cube.prototype.onClickCubeHandler = function(x, y, target) {
    if (this.currentPoint.x == x && this.currentPoint.y == y) {

		var face = target;
      
		while(face) {
			face = target.parentElement;
			if (face.className.indexOf('face') != -1) {
          
			  var clickTag = face.getAttribute('data-clickTag');
			  var type = face.getAttribute('data-type');
			  
			  if (type.toLowerCase() == 'video') {
				var video;
				var children = face.children;

				for(var i = 0; i < children.length; i++){
				  if (children[i].tagName.toLowerCase() == "video") {
					  video = children[i];
					  break;
				  }
				} 

				if (video) {
				  
				  var isPlay = face.getAttribute('data-play');
				  if (isPlay == 1) {
				  if (clickTag) {
					  face.setAttribute('data-play', 0);
					  window.open(clickTag, '_blank');
					  video.pause();
					}
				  } else {
					face.setAttribute('data-play', 1);
					video.play();                
				  }
				  break;
				}
			  }


			  if (clickTag) {
				window.open(clickTag, '_blank');
			  }

			  break;
			}
		}
    }
  };

Cube.prototype.rotate = function(fromAngle) {
	var that = this;
	this.curLoop ++;
    var obj = { angle: fromAngle };

    var toAngle = fromAngle;

    if (!this.isVertical) {
      toAngle = this.autoRotateLeft ? toAngle + 90 : toAngle - 90;
    } else {
      toAngle = this.autoRotateTop ? toAngle - 90 : toAngle + 90;
    }

    rotateTween = TweenMax.to(obj, this.autoRotateTime, {
      delay: this.autoRotateDelay,
      angle: toAngle,
      onUpdate: function () {
        that.updateFaces(obj.angle);
      },
      onComplete: function () {
		if (that.curLoop < that.loop) {
			that.rotate(toAngle);
		} else {
			if (that.completeFunc) {
				that.completeFunc.apply(this, null);
			}
		}
      }
    });
  }

Cube.prototype.play = function() {
	if (this.autoRotate) {
		this.rotate(0);
	}
}

  
