$("h1").css("color", "red");

/*
$("document").keydown(function(event) {
    //$("h1").text(event.key); // This one works for surem Angela example
    $("h1").css("text", event.key); // This is the one I made.
});
*/

$("document").on("mouseover", function() {
    $("h1").css("text", event.key); // This is the one I made.
})