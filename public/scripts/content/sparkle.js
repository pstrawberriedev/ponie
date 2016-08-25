/*
  Sparkle
*/

console.log('--> sparkle.js');

var Ponie = Ponie || {};

(function ($, app) {

  var circle1 = new mojs.Shape({
    fill:           'none',
    radius:         20,
    strokeWidth:    { 35 : 0 },
    scale:          { 0: 1 },
    angle:          { 'rand(-35, -70)': 0 },
    duration:       500,
    left: 0,        top: 0,
    easing: 'cubic.out',
    stroke:         'deeppink'
  });

  var circle2 = new mojs.Shape({
    fill:           'none',
    radius:         25,
    scale:          { 0: 1 },
    angle:          { 'rand(-35, -70)': 0 },
    duration:       500,
    left: 0,        top: 0,
    easing: 'cubic.out',
    radius:         { 0 : 15 },
    strokeWidth:    { 30: 0 },
    stroke:         'black',
    delay:          'rand(75, 150)'
  });

  var burst1 = new mojs.Burst({
    left: 0, top: 0,
    radius:   { 4: 32 },
    angle:    45,
    count:    14,
    children: {
      radius:       2.5,
      fill:         'deeppink',
      scale:        { 1: 0, easing: 'quad.in' },
      pathScale:    [ .8, null ],
      degreeShift:  [ 0, 13 ],
      duration:     [ 400, 600 ],
      easing:       'quint.out'
    }
  });
  
  var burst2 = new mojs.Burst({
  left: 0, top: 0,
  radius:   { 4: 32 },
  angle:    45,
  count:    14,
  children: {
    radius:       2.5,
    fill:         [
      { '#9EC9F5' : '#9ED8C6' },
      { '#91D3F7' : '#9AE4CF' },
      
      { '#DC93CF' : '#E3D36B' },
      { '#CF8EEF' : '#CBEB98' },
      
      { '#87E9C6' : '#1FCC93' },
      { '#A7ECD0' : '#9AE4CF' },
      
      { '#87E9C6' : '#A635D9' },
      { '#D58EB3' : '#E0B6F5' },
      
      { '#F48BA2' : '#CF8EEF' },
      { '#91D3F7' : '#A635D9' },

      { '#CF8EEF' : '#CBEB98' },
      { '#87E9C6' : '#A635D9' },
    ],
    scale:        { 1: 0, easing: 'quad.in' },
    pathScale:    [ .8, null ],
    degreeShift:  [ 13, null ],
    duration:     [ 400, 600 ],
    easing:       'quint.out',
  }
});
  
  document.addEventListener( 'click', function (e) {

     var coords = {x: e.pageX, y: e.pageY};
    
     circle1
      .tune(coords)
      .replay();

    circle2
      .tune(coords)
      .replay();
    
    burst1
      .tune(coords)
      .replay();
    
    burst2
      .tune(coords)
      .replay();
    
  });
  
  
  
}(jQuery, Ponie));