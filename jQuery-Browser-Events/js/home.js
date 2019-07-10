$(document).ready(function () {
    // Only Main content shown when page is loaded
    $("#akronInfoDiv").hide();
    $("#minneapolisInfoDiv").hide();
    $("#louisvilleInfoDiv").hide();
});

// Info must be shown or hidden when clicking the buttons
$("#mainButton").on("click", function () {
    $("#akronInfoDiv").hide();
    $("#mainInfoDiv").show();
    $("#minneapolisInfoDiv").hide();
    $("#louisvilleInfoDiv").hide();
})

$("#akronButton").on("click", function () {
    $("#akronInfoDiv").show();
    $("#akronWeather").hide();
    $("#mainInfoDiv").hide();
    $("#minneapolisInfoDiv").hide();
    $("#louisvilleInfoDiv").hide();
});

$("#minneapolisButton").on("click", function () {
    $("#akronInfoDiv").hide();
    $("#minneapolisWeather").hide();
    $("#mainInfoDiv").hide();
    $("#minneapolisInfoDiv").show();
    $("#louisvilleInfoDiv").hide();
});

$("#louisvilleButton").on("click", function () {
    $("#akronInfoDiv").hide();
    $("#louisvilleWeather").hide();
    $("#mainInfoDiv").hide();
    $("#minneapolisInfoDiv").hide();
    $("#louisvilleInfoDiv").show();
});

