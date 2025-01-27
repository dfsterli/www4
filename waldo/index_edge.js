/**
 * Adobe Edge: symbol definitions
 */
(function($, Edge, compId){
//images folder
var im='images/';

var fonts = {};


var resources = [
];
var symbols = {
"stage": {
   version: "1.0.0",
   minimumCompatibleVersion: "0.1.7",
   build: "1.0.0.185",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: false,
   resizeInstances: false,
   content: {
         dom: [
         {
            id:'AtTheBeach',
            type:'image',
            rect:['0','0px','1024px','768px','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"AtTheBeach.jpg",'0px','0px']
         },
         {
            id:'AtTheBeach2',
            type:'image',
            rect:['0','0','1024px','768px','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"AtTheBeach2.jpg",'0px','0px']
         },
         {
            id:'whereswaldo',
            type:'image',
            rect:['0','0','266px','205px','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"whereswaldo.png",'0px','0px']
         },
         {
            id:'play',
            type:'image',
            rect:['90px','266px','220px','125px','auto','auto'],
            cursor:['pointer'],
            fill:["rgba(0,0,0,0)",im+"play.png",'0px','0px']
         },
         {
            id:'left',
            display:'none',
            type:'image',
            rect:['0px','180px','50px','50px','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"left.png",'0px','0px']
         },
         {
            id:'right',
            display:'none',
            type:'image',
            rect:['350px','180px','50px','50px','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"right.png",'0px','0px']
         },
         {
            id:'playagain',
            display:'none',
            type:'image',
            rect:['125px','267px','150px','123px','auto','auto'],
            cursor:['pointer'],
            fill:["rgba(0,0,0,0)",im+"playagain.png",'0px','0px']
         },
         {
            id:'waldo',
            display:'none',
            type:'image',
            rect:['0','0','61px','100px','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"waldo.jpg",'0px','0px']
         }],
         symbolInstances: [

         ]
      },
   states: {
      "Base State": {
         "${_playagain}": [
            ["style", "top", '267px'],
            ["style", "cursor", 'pointer'],
            ["style", "left", '125px'],
            ["style", "display", 'none']
         ],
         "${_right}": [
            ["style", "top", '180px'],
            ["style", "left", '400px'],
            ["style", "display", 'none']
         ],
         "${_play}": [
            ["style", "top", '266.4px'],
            ["style", "cursor", 'pointer'],
            ["style", "left", '90px'],
            ["style", "display", 'block']
         ],
         "${_whereswaldo}": [
            ["style", "top", '0px'],
            ["style", "left", '0px'],
            ["style", "display", 'block']
         ],
         "${_AtTheBeach2}": [
            ["style", "display", 'block']
         ],
         "${_left}": [
            ["style", "top", '180px'],
            ["style", "left", '-50px'],
            ["style", "display", 'none']
         ],
         "${_waldo}": [
            ["style", "display", 'none'],
            ["style", "left", '475.8px'],
            ["style", "top", '241.17px']
         ],
         "${_Stage}": [
            ["color", "background-color", 'rgba(255,255,255,1)'],
            ["style", "width", '400px'],
            ["style", "height", '400px'],
            ["style", "overflow", 'hidden']
         ],
         "${_AtTheBeach}": [
            ["style", "top", '0px'],
            ["style", "left", '0px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 15000,
         autoPlay: true,
         timeline: [
            { id: "eid62", tween: [ "style", "${_waldo}", "left", '-147px', { fromValue: '475.8px'}], position: 3000, duration: 12000 },
            { id: "eid6", tween: [ "style", "${_whereswaldo}", "top", '-205px', { fromValue: '0px'}], position: 1000, duration: 1000 },
            { id: "eid65", tween: [ "style", "${_AtTheBeach2}", "display", 'block', { fromValue: 'block'}], position: 0, duration: 0 },
            { id: "eid66", tween: [ "style", "${_AtTheBeach2}", "display", 'none', { fromValue: 'block'}], position: 3000, duration: 0 },
            { id: "eid29", tween: [ "style", "${_left}", "left", '0px', { fromValue: '-50px'}], position: 2000, duration: 1000 },
            { id: "eid61", tween: [ "style", "${_waldo}", "top", '241.17px', { fromValue: '241.17px'}], position: 3000, duration: 0 },
            { id: "eid59", tween: [ "style", "${_waldo}", "top", '241.17px', { fromValue: '241.17px'}], position: 15000, duration: 0 },
            { id: "eid35", tween: [ "style", "${_AtTheBeach}", "left", '-623px', { fromValue: '0px'}], position: 3000, duration: 12000 },
            { id: "eid5", tween: [ "style", "${_whereswaldo}", "left", '-266px', { fromValue: '0px'}], position: 1000, duration: 1000 },
            { id: "eid9", tween: [ "style", "${_right}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
            { id: "eid14", tween: [ "style", "${_right}", "display", 'block', { fromValue: 'none'}], position: 2000, duration: 0 },
            { id: "eid67", tween: [ "style", "${_right}", "display", 'none', { fromValue: 'block'}], position: 15000, duration: 0 },
            { id: "eid36", tween: [ "style", "${_playagain}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
            { id: "eid63", tween: [ "style", "${_playagain}", "display", 'block', { fromValue: 'none'}], position: 15000, duration: 0 },
            { id: "eid7", tween: [ "style", "${_whereswaldo}", "display", 'none', { fromValue: 'block'}], position: 2000, duration: 0 },
            { id: "eid10", tween: [ "style", "${_left}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
            { id: "eid13", tween: [ "style", "${_left}", "display", 'block', { fromValue: 'none'}], position: 2000, duration: 0 },
            { id: "eid68", tween: [ "style", "${_left}", "display", 'none', { fromValue: 'block'}], position: 15000, duration: 0 },
            { id: "eid28", tween: [ "style", "${_right}", "left", '350px', { fromValue: '400px'}], position: 2000, duration: 1000 },
            { id: "eid1", tween: [ "style", "${_play}", "display", 'block', { fromValue: 'block'}], position: 0, duration: 0 },
            { id: "eid2", tween: [ "style", "${_play}", "display", 'none', { fromValue: 'block'}], position: 1000, duration: 0 },
            { id: "eid37", tween: [ "style", "${_waldo}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
            { id: "eid38", tween: [ "style", "${_waldo}", "display", 'block', { fromValue: 'none'}], position: 3000, duration: 0 }         ]
      }
   }
}
};


Edge.registerCompositionDefn(compId, symbols, fonts, resources);

/**
 * Adobe Edge DOM Ready Event Handler
 */
$(window).ready(function() {
     Edge.launchComposition(compId);
});
})(jQuery, AdobeEdge, "EDGE-798713150");
