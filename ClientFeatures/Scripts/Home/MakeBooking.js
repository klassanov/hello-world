function switchViews() {
    var hidden = $(".hidden");
    var visible = $(".visible");
    hidden.removeClass("hidden").addClass("visible");
    visible.removeClass("visible").addClass("hidden");
}

function processDate(dateString) {
    return new Date(parseInt(dateString.substr(6, dateString.length - 8))).toDateString();
}

function processResponse(appt) {
    $("#successName").text(appt.ClientName);
    $("#successDate").text(processDate(appt.Date));
    switchViews();
}

$(document).ready(function () {
    $("#backButton").click(function (e) {
        switchViews();
    });
});