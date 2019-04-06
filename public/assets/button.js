$(function(){
$(".devour-btn").on("submit", function(event) {
    var burger_id = $(this).children(".burger_id").val();
    console.log(burger_id);
    console.log(this);

    $.ajax({
        method: "PUT",
        url: "/burgers/" + burger_id
    }).then(function (data) {
            location.reload();
        });
    });
});