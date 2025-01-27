/***********************
* Adobe Edge Animate Composition Actions
*
* Edit this file with caution, being careful to preserve 
* function signatures and comments starting with 'Edge' to maintain the 
* ability to interact with these actions from within Adobe Edge Animate
*
***********************/
(function($, Edge, compId){
var Composition = Edge.Composition, Symbol = Edge.Symbol; // aliases for commonly used Edge classes

   //Edge symbol: 'stage'
   (function(symbolName) {
      
      
      Symbol.bindElementAction(compId, symbolName, "${_play}", "click", function(sym, e) {
         // play the timeline from the given position (ms or label)
         sym.play(1000);
         

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 3000, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 15000, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_right}", "mouseover", function(sym, e) {
         // play the timeline from the given position (ms or label)
         sym.play();
         
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_AtTheBeach}", "mouseover", function(sym, e) {
         sym.stop();
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_left}", "mouseover", function(sym, e) {
         sym.playReverse();
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_waldo}", "click", function(sym, e) {
         // stop the timeline at the given position (ms or label)
         sym.stop(15000);
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_playagain}", "click", function(sym, e) {
         // stop the timeline at the given position (ms or label)
         sym.stop(3000);
         

      });
      //Edge binding end

   })("stage");
   //Edge symbol end:'stage'

})(jQuery, AdobeEdge, "EDGE-798713150");