var xmlns="http://www.w3.org/2000/svg", xlinkns ="http://www.w3.org/1999/xlink", select = function(s) {
      return document.querySelector(s);
    }, selectAll = function(s) {
      return document.querySelectorAll(s);
    }, 
container = select('.container'), 

moon = select('.moon'), 
raspberry = select('.raspberry'), 
outSplash2 = select('.outSplash2')

//varaibles
var day = 10
		light = day/3
		dark = 2*day/3
    changeTime = 0.00001
    ypositionTop = 5
		xpositionTop = 5
    positionBottom = 260;
 path = [{x:60, y:-60}, {x:200, y:-110}],
 path2 = [{x:200, y:-110}, {x:60, y:-60}, {x:0, y:260}];
var sunTl = new TimelineMax({repeat:-1})
    carsTl = new TimelineMax({repeat:-1})
    skyTl = new TimelineMax({repeat:-1})
		skyT2 = new TimelineMax({repeat:-1})
    cloudsTl = new TimelineMax({repeat:-1})
    street = new TimelineMax({repeat:-1})
sunTl .to(".moon", changeTime, {y:positionBottom, scaleY:0.9, scaleX:1, fill:"#F9E73F"})
			.to(".sun", changeTime, {y:positionBottom, scaleY:0.9, scaleX:1, fill:"#B85708"})
			.to(".sun", day/4, {bezier:{curviness: 1.3, values:path}, ease: Power1.easeOut, fill:"#F9E73F"})
			.to(".sun", day/4, {bezier:{curviness: 1.3, values:path2}, ease: Power1.easeIn, fill:"#B85708"})
			.to(".moon", day/4, {bezier:{curviness: 1.3, values:path}, ease: Power1.easeOut, fill:"#FFF"})
			.to(".moon", day/4, {bezier:{curviness: 1.3, values:path2}, ease: Power1.easeIn, fill:"#F9E73F"})

skyTl .to(".st0", changeTime, {fill:"#091730"}, "dayInit")
			.fromTo(".st0", light, {fill:"#091730"}, {fill:"#68C9BF"}, "dayStart")
      .fromTo(".st0", dark, {fill:"#68C9BF"}, {fill:"#091730"}, "dayEnd")
			.to(".st2", changeTime, {fill:"#000"}, "dayInit")
			.fromTo(".st2", light, {fill:"#000"}, {fill:"#209EAA"}, "dayStart")
      .fromTo(".st2", dark, {fill:"#209EAA"}, {fill:"#000"}, "dayEnd")
	
street .to(".st3", changeTime, {fill:"#111"}, "dayInit")
			.fromTo(".st3", light, {fill:"#111"}, {fill:"#A6CE39"}, "dayStart")
      .fromTo(".st3", dark, {fill:"#A6CE39"}, {fill:"#111"}, "dayEnd")
			.to(".st4", changeTime, {fill:"#333"}, "dayInit")
			.fromTo(".st4", light, {fill:"#333"}, {fill:"#FFFFFF"}, "dayStart")
      .fromTo(".st4", dark, {fill:"#FFFFFF"}, {fill:"#333"}, "dayEnd")
			.to(".st1", changeTime, {fill:"#222"}, "dayInit")
			.fromTo(".st1", light, {fill:"#222"}, {fill:"#F9E73F"}, "dayStart")
      .fromTo(".st1", dark, {fill:"#F9E73F"}, {fill:"#222"}, "dayEnd")
			.to(".st8", changeTime, {fill:"#F9E73F"}, "dayInit")
			.fromTo(".st8", light, {fill:"#F9E73F"}, {fill:"#0395CA"}, "dayStart")
      .fromTo(".st8", dark, {fill:"#0395CA"}, {fill:"#F9E73F"}, "dayEnd")
			.to(".st10", changeTime, {fill:"#555"}, "dayInit")
			.fromTo(".st10", light, {fill:"#555"}, {fill:"#FCF7F6"}, "dayStart")
      .fromTo(".st10", dark, {fill:"#FCF7F6"}, {fill:"#555"}, "dayEnd")
			.to(".st5", changeTime, {fill:"#333"}, "dayInit")
			.fromTo(".st5", light, {fill:"#333"}, {fill:"#C7E61A"}, "dayStart")
      .fromTo(".st5", dark, {fill:"#C7E61A"}, {fill:"#333"}, "dayEnd")
			.to(".st6", changeTime, {fill:"#555"}, "dayInit")
			.fromTo(".st6", light, {fill:"#555"}, {fill:"#B85708"}, "dayStart")
      .fromTo(".st6", dark, {fill:"#B85708"}, {fill:"#555"}, "dayEnd")

cloudsTl.fromTo(".nuage", day/3, {x:-700, ease: Power0.easeNone}, {x: 700, ease: Power0.easeNone});
