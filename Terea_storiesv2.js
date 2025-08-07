(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [];


(lib.AnMovieClip = function(){
	this.actionFrames = [];
	this.ignorePause = false;
	this.gotoAndPlay = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndPlay.call(this,positionOrLabel);
	}
	this.play = function(){
		cjs.MovieClip.prototype.play.call(this);
	}
	this.gotoAndStop = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndStop.call(this,positionOrLabel);
	}
	this.stop = function(){
		cjs.MovieClip.prototype.stop.call(this);
	}
}).prototype = p = new cjs.MovieClip();
// symbols:



(lib.bermint_txt = function() {
	this.initialize(img.bermint_txt);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,468,154);


(lib.BGterea = function() {
	this.initialize(img.BGterea);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,959);


(lib.curiouslatin = function() {
	this.initialize(img.curiouslatin);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,253,77);


(lib.ed02 = function() {
	this.initialize(img.ed02);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1997,428);


(lib.ed03pngcopy = function() {
	this.initialize(img.ed03pngcopy);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1997,428);


(lib.Findmore = function() {
	this.initialize(img.Findmore);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,224,74);


(lib.headline_invis = function() {
	this.initialize(img.headline_invis);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,308,260);


(lib.NEW = function() {
	this.initialize(img.NEW);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,160,80);


(lib.perint_txt = function() {
	this.initialize(img.perint_txt);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,417,153);


(lib.warning = function() {
	this.initialize(img.warning);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,107);// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop, this.reversed));
	clone.gotoAndStop(this.currentFrame);
	clone.paused = this.paused;
	clone.framerate = this.framerate;
	return clone;
}

function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
	var prototype = cjs.extend(symbol, cjs.MovieClip);
	prototype.clone = mc_symbol_clone;
	prototype.nominalBounds = nominalBounds;
	prototype.frameBounds = frameBounds;
	return prototype;
	}


(lib.warning_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.warning();
	this.instance.setTransform(-160,-26.75,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.warning_1, new cjs.Rectangle(-160,-26.7,320,53.5), null);


(lib.stageBtn = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.149)").s().p("A6KNcIAA63MA0VAAAIAAa3g");
	this.shape.setTransform(0,0.025);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.stageBtn, new cjs.Rectangle(-167.5,-85.9,335,171.9), null);


(lib.perint_txt_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.perint_txt();
	this.instance.setTransform(-104,-38,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-104,-38,208.5,76.5);


(lib._new = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.NEW();
	this.instance.setTransform(-80,-40);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib._new, new cjs.Rectangle(-80,-40,160,80), null);


(lib.mc_time2 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_99 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(99).call(this.frame_99).wait(1));

	// Layer_3 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AnVAjQgMAAgJgKQgIgKAAgPIAAAAQAAgOAIgKQAJgKAMAAIOrAAQAMAAAIAKQAJAKAAAOIAAAAQAAAPgJAKQgIAKgMAAg");
	mask.setTransform(0,-0.025);

	// Layer_2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AnVAjQgMAAgJgKQgIgKAAgPIAAAAQAAgOAIgKQAJgKAMAAIOrAAQAMAAAIAKQAJAKAAAOIAAAAQAAAPgJAKQgIAKgMAAg");
	this.shape.setTransform(-103.95,-0.025);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AnVAjQgMAAgIgKQgJgKAAgPIAAAAQAAgOAJgKQAIgKAMAAIOqAAQANAAAIAKQAJAKAAAOIAAAAQAAAPgJAKQgIAKgNAAg");
	this.shape_1.setTransform(-102.9,-0.025);
	this.shape_1._off = true;

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AnUAjQgNAAgJgKQgIgKAAgPIAAAAQAAgOAIgKQAJgKANAAIOpAAQANAAAIAKQAJAKAAAOIAAAAQAAAPgJAKQgIAKgNAAg");
	this.shape_2.setTransform(-101.85,-0.025);
	this.shape_2._off = true;

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AnUAjQgNAAgJgKQgIgKAAgPIAAAAQAAgOAIgKQAJgKANAAIOqAAQAMAAAIAKQAJAKAAAOIAAAAQAAAPgJAKQgIAKgMAAg");
	this.shape_3.setTransform(-23.1,-0.025);

	var maskedShapeInstanceList = [this.shape,this.shape_1,this.shape_2,this.shape_3];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_3,p:{x:-23.1}}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_3,p:{x:-10.5}}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_3,p:{x:-4.2}}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape}]},1).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.shape).to({_off:true},1).wait(2).to({_off:false,x:-100.8},0).to({_off:true},1).wait(2).to({_off:false,x:-97.65},0).to({_off:true},1).wait(2).to({_off:false,x:-94.5},0).to({_off:true},1).wait(2).to({_off:false,x:-91.35},0).to({_off:true},1).wait(2).to({_off:false,x:-88.2},0).to({_off:true},1).wait(2).to({_off:false,x:-85.05},0).to({_off:true},1).wait(2).to({_off:false,x:-81.9},0).to({_off:true},1).wait(2).to({_off:false,x:-78.75},0).to({_off:true},1).wait(2).to({_off:false,x:-75.6},0).to({_off:true},1).wait(2).to({_off:false,x:-72.45},0).to({_off:true},1).wait(2).to({_off:false,x:-69.3},0).to({_off:true},1).wait(2).to({_off:false,x:-66.15},0).to({_off:true},1).wait(2).to({_off:false,x:-63},0).to({_off:true},1).wait(2).to({_off:false,x:-59.85},0).to({_off:true},1).wait(2).to({_off:false,x:-56.7},0).to({_off:true},1).wait(2).to({_off:false,x:-53.55},0).to({_off:true},1).wait(2).to({_off:false,x:-50.4},0).to({_off:true},1).wait(2).to({_off:false,x:-47.25},0).to({_off:true},1).wait(2).to({_off:false,x:-44.1},0).to({_off:true},1).wait(2).to({_off:false,x:-40.95},0).to({_off:true},1).wait(2).to({_off:false,x:-37.8},0).to({_off:true},1).wait(2).to({_off:false,x:-34.65},0).to({_off:true},1).wait(2).to({_off:false,x:-31.5},0).to({_off:true},1).wait(2).to({_off:false,x:-28.35},0).to({_off:true},1).wait(2).to({_off:false,x:-25.2},0).to({_off:true},1).wait(2).to({_off:false,x:-22.05},0).to({_off:true},1).wait(2).to({_off:false,x:-18.9},0).to({_off:true},1).wait(2).to({_off:false,x:-15.75},0).to({_off:true},1).wait(2).to({_off:false,x:-12.6},0).to({_off:true},1).wait(2).to({_off:false,x:-9.45},0).to({_off:true},1).wait(2).to({_off:false,x:-6.3},0).to({_off:true},1).wait(2).to({_off:false,x:-3.15},0).to({_off:true},1).wait(2).to({_off:false,x:0},0).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1).to({_off:false},0).to({_off:true},1).wait(2).to({_off:false,x:-99.75},0).to({_off:true},1).wait(2).to({_off:false,x:-96.6},0).to({_off:true},1).wait(2).to({_off:false,x:-93.45},0).to({_off:true},1).wait(2).to({_off:false,x:-90.3},0).to({_off:true},1).wait(2).to({_off:false,x:-87.15},0).to({_off:true},1).wait(2).to({_off:false,x:-84},0).to({_off:true},1).wait(2).to({_off:false,x:-80.85},0).to({_off:true},1).wait(2).to({_off:false,x:-77.7},0).to({_off:true},1).wait(2).to({_off:false,x:-74.55},0).to({_off:true},1).wait(2).to({_off:false,x:-71.4},0).to({_off:true},1).wait(2).to({_off:false,x:-68.25},0).to({_off:true},1).wait(2).to({_off:false,x:-65.1},0).to({_off:true},1).wait(2).to({_off:false,x:-61.95},0).to({_off:true},1).wait(2).to({_off:false,x:-58.8},0).to({_off:true},1).wait(2).to({_off:false,x:-55.65},0).to({_off:true},1).wait(2).to({_off:false,x:-52.5},0).to({_off:true},1).wait(2).to({_off:false,x:-49.35},0).to({_off:true},1).wait(2).to({_off:false,x:-46.2},0).to({_off:true},1).wait(2).to({_off:false,x:-43.05},0).to({_off:true},1).wait(2).to({_off:false,x:-39.9},0).to({_off:true},1).wait(2).to({_off:false,x:-36.75},0).to({_off:true},1).wait(2).to({_off:false,x:-33.6},0).to({_off:true},1).wait(2).to({_off:false,x:-30.45},0).to({_off:true},1).wait(2).to({_off:false,x:-27.3},0).to({_off:true},1).wait(2).to({_off:false,x:-24.15},0).to({_off:true},1).wait(2).to({_off:false,x:-21},0).to({_off:true},1).wait(2).to({_off:false,x:-17.85},0).to({_off:true},1).wait(2).to({_off:false,x:-14.7},0).to({_off:true},1).wait(2).to({_off:false,x:-11.55},0).to({_off:true},1).wait(2).to({_off:false,x:-8.4},0).to({_off:true},1).wait(2).to({_off:false,x:-5.25},0).to({_off:true},1).wait(2).to({_off:false,x:-2.1},0).to({_off:true},1).wait(2));
	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(2).to({_off:false},0).to({_off:true},1).wait(2).to({_off:false,x:-98.7},0).to({_off:true},1).wait(2).to({_off:false,x:-95.55},0).to({_off:true},1).wait(2).to({_off:false,x:-92.4},0).to({_off:true},1).wait(2).to({_off:false,x:-89.25},0).to({_off:true},1).wait(2).to({_off:false,x:-86.1},0).to({_off:true},1).wait(2).to({_off:false,x:-82.95},0).to({_off:true},1).wait(2).to({_off:false,x:-79.8},0).to({_off:true},1).wait(2).to({_off:false,x:-76.65},0).to({_off:true},1).wait(2).to({_off:false,x:-73.5},0).to({_off:true},1).wait(2).to({_off:false,x:-70.35},0).to({_off:true},1).wait(2).to({_off:false,x:-67.2},0).to({_off:true},1).wait(2).to({_off:false,x:-64.05},0).to({_off:true},1).wait(2).to({_off:false,x:-60.9},0).to({_off:true},1).wait(2).to({_off:false,x:-57.75},0).to({_off:true},1).wait(2).to({_off:false,x:-54.6},0).to({_off:true},1).wait(2).to({_off:false,x:-51.45},0).to({_off:true},1).wait(2).to({_off:false,x:-48.3},0).to({_off:true},1).wait(2).to({_off:false,x:-45.15},0).to({_off:true},1).wait(2).to({_off:false,x:-42},0).to({_off:true},1).wait(2).to({_off:false,x:-38.85},0).to({_off:true},1).wait(2).to({_off:false,x:-35.7},0).to({_off:true},1).wait(2).to({_off:false,x:-32.55},0).to({_off:true},1).wait(2).to({_off:false,x:-29.4},0).to({_off:true},1).wait(2).to({_off:false,x:-26.25},0).to({_off:true},1).wait(5).to({_off:false,x:-19.95},0).to({_off:true},1).wait(2).to({_off:false,x:-16.8},0).to({_off:true},1).wait(2).to({_off:false,x:-13.65},0).to({_off:true},1).wait(5).to({_off:false,x:-7.35},0).to({_off:true},1).wait(5).to({_off:false,x:-1.05},0).to({_off:true},1).wait(1));

	// Layer_1
	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("rgba(255,255,255,0.2)").s().p("AnVAjQgMAAgJgKQgIgKAAgPIAAAAQAAgOAIgKQAJgKAMAAIOrAAQAMAAAIAKQAJAKAAAOIAAAAQAAAPgJAKQgIAKgMAAg");
	this.shape_4.setTransform(0,-0.025);

	this.timeline.addTween(cjs.Tween.get(this.shape_4).wait(100));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-49.9,-3.5,99.8,7);


(lib.headline = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.headline_invis();
	this.instance.setTransform(-154,-130);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.headline, new cjs.Rectangle(-154,-130,308,260), null);


(lib.e03 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.ed03pngcopy();
	this.instance.setTransform(-46.2,61.25,0.0751,0.0751,-65.0119);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.e03, new cjs.Rectangle(-46.2,-74.6,92.5,149.5), null);


(lib.e02 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.ed02();
	this.instance.setTransform(-46.2,61.2,0.0751,0.0751,-65.0084);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.e02, new cjs.Rectangle(-46.2,-74.7,92.5,149.5), null);


(lib.curious = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.Findmore();
	this.instance.setTransform(14,-27,0.546,0.546);

	this.instance_1 = new lib.curiouslatin();
	this.instance_1.setTransform(-141,-27,0.546,0.546);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.curious, new cjs.Rectangle(-141,-27,277.3,42.1), null);


(lib.bgg = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.BGterea();
	this.instance.setTransform(-196.3,-294.1,0.6134,0.6134);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.bgg, new cjs.Rectangle(-196.3,-294.1,392.6,588.3), null);


(lib.bermint_txt_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.bermint_txt();
	this.instance.setTransform(-117,-39,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-117,-39,234,77);


(lib.terea_slide = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {bermint:0,perint:20};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_19 = function() {
		this.stop();
		this.lp_bermint.addEventListener("click", function() {
		    setTimeout(function() {  //Bypass popup blockers
		        window.open("https://www.iqos.com/id/id/shop/iqos-terea-emerald-edition-paket-10.html", "_blank");
		    }, 100);
		}.bind(this));
		
		this.lp_bermint.alpha = 0.05;
	}
	this.frame_39 = function() {
		this.stop();
		this.lp_perint.addEventListener("click", function() {
		    setTimeout(function() {  //Bypass popup blockers
		        window.open("https://www.iqos.com/id/id/shop/iqos-terea-black-purple-paket-10.html", "_blank");
		    }, 100);
		}.bind(this));
		
		this.lp_perint.alpha = 0.05;
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(19).call(this.frame_19).wait(20).call(this.frame_39).wait(1));

	// Layer_10
	this.lp_bermint = new lib.stageBtn();
	this.lp_bermint.name = "lp_bermint";
	this.lp_bermint.setTransform(0.2,142.15,0.9554,0.5831,0,0,0,0.2,0.6);

	this.lp_perint = new lib.stageBtn();
	this.lp_perint.name = "lp_perint";
	this.lp_perint.setTransform(0.2,142.15,0.9554,0.5831,0,0,0,0.2,0.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.lp_bermint}]},19).to({state:[]},1).to({state:[{t:this.lp_perint}]},19).wait(1));

	// Layer_8
	this.instance = new lib.e02();
	this.instance.setTransform(-0.85,-25.95,0.9351,0.9338);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({regX:0.2,regY:0.1,scaleX:0.5576,scaleY:0.5568,x:70.5,y:-25.15},19).wait(10).to({regX:-0.1,regY:-0.1,scaleX:0.935,scaleY:0.9344,x:-1.45,y:-23.35},10).wait(1));

	// Layer_6
	this.instance_1 = new lib.e03();
	this.instance_1.setTransform(-86.7,-23.35,0.5569,0.5564,0,0,0,-0.2,-0.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(9).to({regX:0,regY:0,scaleX:0.9342,scaleY:0.9335,x:-0.85,y:-23.25},10).wait(1).to({regX:-0.2,regY:-0.1,scaleX:0.5569,scaleY:0.5564,x:-86.7,y:-23.35},19).wait(1));

	// Layer_9
	this.instance_2 = new lib.perint_txt_1("synched",0);
	this.instance_2.setTransform(-104.65,-70.15,0.4882,0.4882,0,0,0,0,-0.1);
	this.instance_2.alpha = 0;
	this.instance_2._off = true;

	this.instance_3 = new lib.bermint_txt_1("synched",0);
	this.instance_3.setTransform(100.95,44.1,0.4746,0.4746,0,0,0,0.1,0);
	this.instance_3.alpha = 0;
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(14).to({_off:false},0).to({regX:-0.1,regY:-0.2,scaleX:0.5786,scaleY:0.5786,x:-87.1,y:-66.75,alpha:1},5).to({_off:true},1).wait(20));
	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(34).to({_off:false},0).to({regY:-0.1,scaleX:0.5757,scaleY:0.5757,x:82.35,alpha:1},5).wait(1));

	// Layer_5
	this.instance_4 = new lib.mc_time2();
	this.instance_4.setTransform(-52,-277.75,1,1,0,0,0,-52,-0.1);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AnUAjQgNAAgJgKQgIgKAAgPIAAAAQAAgOAIgKQAJgKANAAIOpAAQANAAAIAKQAJAKAAAOIAAAAQAAAPgJAKQgIAKgNAAg");
	this.shape.setTransform(-103.55,-277.675);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(255,255,255,0.2)").s().p("AnUAjQgNAAgIgKQgJgKAAgPIAAAAQAAgOAJgKQAIgKANAAIOpAAQANAAAIAKQAJAKAAAOIAAAAQAAAPgJAKQgIAKgNAAg");
	this.shape_1.setTransform(103.55,-277.675);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AAwAjQgMAAgJgKQgIgKAAgPIAAAAQAAgOAIgKQAJgKAMAAIOrAAQANAAAIAKQAJAKAAAOIAAAAQAAAPgJAKQgIAKgNAAgAvaAjQgNAAgIgKQgJgKAAgPIAAAAQAAgOAJgKQAIgKANAAIOrAAQAMAAAIAKQAJAKAAAOIAAAAQAAAPgJAKQgIAKgMAAg");
	this.shape_2.setTransform(-51.775,-277.675);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape},{t:this.instance_4}]}).to({state:[{t:this.shape_2}]},20).wait(20));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-160,-281.2,320.1,473.2);


(lib.newbg = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.bgg();

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:1.0446,scaleY:1.0446},59).to({scaleX:1,scaleY:1},80).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-205,-307.2,410.1,614.5);


// stage content:
(lib.Terea_storiesv2 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	this.actionFrames = [0,49];
	// timeline functions:
	this.frame_0 = function() {
		this.nxtBtn.alpha = 0.05;
		this.prvBtn.alpha = 0.05;
		
		// Frame list untuk gallery
		this.frameList = [0, 20];
		this.currentIndex = 0;
		
		// Set frame awal
		this.slides.gotoAndPlay(this.frameList[this.currentIndex]);
		
		// Flag & ticker reference
		let reverseTicker = null;
		
		// Fungsi play backward
		const playBackwardTo = (targetFrame) => {
		    if (reverseTicker) createjs.Ticker.removeEventListener("tick", reverseTicker);
		    reverseTicker = () => {
		        if (this.slides.currentFrame > targetFrame) {
		            this.slides.gotoAndStop(this.slides.currentFrame - 1);
		        } else {
		            createjs.Ticker.removeEventListener("tick", reverseTicker);
		        }
		    };
		    createjs.Ticker.addEventListener("tick", reverseTicker);
		};
		
		// Tombol Next (normal)
		this.nxtBtn.addEventListener("click", () => {
		    this.currentIndex = (this.currentIndex + 1) % this.frameList.length;
		    this.slides.gotoAndPlay(this.frameList[this.currentIndex]);
		});
		
		// Tombol Previous (play backward)
		this.prvBtn.addEventListener("click", () => {
		    let prevIndex = (this.currentIndex - 1 + this.frameList.length) % this.frameList.length;
		    let targetFrame = this.frameList[prevIndex];
		    playBackwardTo(targetFrame);
		    this.currentIndex = prevIndex;
		});
	}
	this.frame_49 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(49).call(this.frame_49).wait(1));

	// Layer_2
	this.instance = new lib.warning_1();
	this.instance.setTransform(160,453.25);
	this.instance.compositeOperation = "hard-light";

	this.instance_1 = new lib._new();
	this.instance_1.setTransform(40,43.95,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(50));

	// Layer_6
	this.nxtBtn = new lib.stageBtn();
	this.nxtBtn.name = "nxtBtn";
	this.nxtBtn.setTransform(240.05,188.85,0.4777,2.1841,0,0,0,0.1,0.5);

	this.prvBtn = new lib.stageBtn();
	this.prvBtn.name = "prvBtn";
	this.prvBtn.setTransform(80.05,188.85,0.4777,2.1841,0,0,0,0.2,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.prvBtn},{t:this.nxtBtn}]}).wait(50));

	// Layer_5
	this.instance_2 = new lib.curious();
	this.instance_2.setTransform(162.35,403.75,0.7157,0.7157);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(50));

	// Layer_3
	this.instance_3 = new lib.headline();
	this.instance_3.setTransform(80,130.7,0.4575,0.4575,0,0,0,0.4,0.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(50));

	// Layer_4
	this.slides = new lib.terea_slide();
	this.slides.name = "slides";
	this.slides.setTransform(160,288.4);

	this.timeline.addTween(cjs.Tween.get(this.slides).wait(50));

	// Layer_1
	this.instance_4 = new lib.newbg();
	this.instance_4.setTransform(160.3,241.6,0.8966,0.8966);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(50));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(144.3,217.9,192,287.5);
// library properties:
lib.properties = {
	id: '7EAF8F31844F4A469F9DFC5AE21425EB',
	width: 320,
	height: 480,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/bermint_txt.png", id:"bermint_txt"},
		{src:"images/BGterea.png", id:"BGterea"},
		{src:"images/curiouslatin.png", id:"curiouslatin"},
		{src:"images/ed02.png", id:"ed02"},
		{src:"images/ed03pngcopy.png", id:"ed03pngcopy"},
		{src:"images/Findmore.png", id:"Findmore"},
		{src:"images/headline_invis.png", id:"headline_invis"},
		{src:"images/NEW.png", id:"NEW"},
		{src:"images/perint_txt.png", id:"perint_txt"},
		{src:"images/warning.png", id:"warning"}
	],
	preloads: []
};



// bootstrap callback support:

(lib.Stage = function(canvas) {
	createjs.Stage.call(this, canvas);
}).prototype = p = new createjs.Stage();

p.setAutoPlay = function(autoPlay) {
	this.tickEnabled = autoPlay;
}
p.play = function() { this.tickEnabled = true; this.getChildAt(0).gotoAndPlay(this.getTimelinePosition()) }
p.stop = function(ms) { if(ms) this.seek(ms); this.tickEnabled = false; }
p.seek = function(ms) { this.tickEnabled = true; this.getChildAt(0).gotoAndStop(lib.properties.fps * ms / 1000); }
p.getDuration = function() { return this.getChildAt(0).totalFrames / lib.properties.fps * 1000; }

p.getTimelinePosition = function() { return this.getChildAt(0).currentFrame / lib.properties.fps * 1000; }

an.bootcompsLoaded = an.bootcompsLoaded || [];
if(!an.bootstrapListeners) {
	an.bootstrapListeners=[];
}

an.bootstrapCallback=function(fnCallback) {
	an.bootstrapListeners.push(fnCallback);
	if(an.bootcompsLoaded.length > 0) {
		for(var i=0; i<an.bootcompsLoaded.length; ++i) {
			fnCallback(an.bootcompsLoaded[i]);
		}
	}
};

an.compositions = an.compositions || {};
an.compositions['7EAF8F31844F4A469F9DFC5AE21425EB'] = {
	getStage: function() { return exportRoot.stage; },
	getLibrary: function() { return lib; },
	getSpriteSheet: function() { return ss; },
	getImages: function() { return img; }
};

an.compositionLoaded = function(id) {
	an.bootcompsLoaded.push(id);
	for(var j=0; j<an.bootstrapListeners.length; j++) {
		an.bootstrapListeners[j](id);
	}
}

an.getComposition = function(id) {
	return an.compositions[id];
}


an.makeResponsive = function(isResp, respDim, isScale, scaleType, domContainers) {		
	var lastW, lastH, lastS=1;		
	window.addEventListener('resize', resizeCanvas);		
	resizeCanvas();		
	function resizeCanvas() {			
		var w = lib.properties.width, h = lib.properties.height;			
		var iw = window.innerWidth, ih=window.innerHeight;			
		var pRatio = window.devicePixelRatio || 1, xRatio=iw/w, yRatio=ih/h, sRatio=1;			
		if(isResp) {                
			if((respDim=='width'&&lastW==iw) || (respDim=='height'&&lastH==ih)) {                    
				sRatio = lastS;                
			}				
			else if(!isScale) {					
				if(iw<w || ih<h)						
					sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==1) {					
				sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==2) {					
				sRatio = Math.max(xRatio, yRatio);				
			}			
		}
		domContainers[0].width = w * pRatio * sRatio;			
		domContainers[0].height = h * pRatio * sRatio;
		domContainers.forEach(function(container) {				
			container.style.width = w * sRatio + 'px';				
			container.style.height = h * sRatio + 'px';			
		});
		stage.scaleX = pRatio*sRatio;			
		stage.scaleY = pRatio*sRatio;
		lastW = iw; lastH = ih; lastS = sRatio;            
		stage.tickOnUpdate = false;            
		stage.update();            
		stage.tickOnUpdate = true;		
	}
}
an.handleSoundStreamOnTick = function(event) {
	if(!event.paused){
		var stageChild = stage.getChildAt(0);
		if(!stageChild.paused || stageChild.ignorePause){
			stageChild.syncStreamSounds();
		}
	}
}
an.handleFilterCache = function(event) {
	if(!event.paused){
		var target = event.target;
		if(target){
			if(target.filterCacheList){
				for(var index = 0; index < target.filterCacheList.length ; index++){
					var cacheInst = target.filterCacheList[index];
					if((cacheInst.startFrame <= target.currentFrame) && (target.currentFrame <= cacheInst.endFrame)){
						cacheInst.instance.cache(cacheInst.x, cacheInst.y, cacheInst.w, cacheInst.h);
					}
				}
			}
		}
	}
}


})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;