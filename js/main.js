$(document).ready(function () {
    hideInfo();
    });


function copy() {
    navigator.clipboard.writeText("uwmpr#1309");
    $(".info").show(400)

}
function hideInfo() {
    $(".info").hide(0)
}