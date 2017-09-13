// Business (or back-end) logic:

var quantity = $("#convertFrom").val();
var conversionFormula = 0.5
var converted = function(quantity, conversionFormula) {
return quantity * conversionFormula;

$(document).ready(function() {
  $("button#submit").click(function() {
      });

$("form#convertFrom").submit(function(event) {
   event.preventDefault();
   var result = converted;
$("#output").text(result);
 });
});
