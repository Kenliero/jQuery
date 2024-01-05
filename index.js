$("h1").css("color", "red");

$("document").keydown(function(event) {
    //$("h1").text(event.key);
    $("h1").css("text", event.key);
});