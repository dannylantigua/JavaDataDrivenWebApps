$(document).ready(function () {
    
    // Center all H1 elements
    $("H1").css('text-align', 'center');

    // Center all H2 elements
    $("H2").css('text-align', 'center');

    // Replace class myBannerHeading with page-header
    $(".myBannerHeading").addClass("page-header");
    $(".page-header").removeClass("myBannerHeading");

    // Change text from THe Squad to Yellow Team
    $("#yellowHeading").text('Yellow Team');

    // Add color to the lists
    $("#orangeTeamList").css('background-color', 'orange');
    $("#blueTeamList").css('background-color', 'blue');
    $("#redTeamList").css('background-color', 'red');
    $("#yellowTeamList").css('background-color', 'yellow');

    // Adding members to Yellow Team
    $("#yellowTeamList").html('<li>Joseph Banks</li> <li>Simon Jones</li>');

    // Hide element HIDE ME
    $("#oops").hide();

    // Remove footer
    $("#footerPlaceholder").remove();

    // Add Custom footer
    $("#footer").append('p')
            .css({'font-family': 'Courier', 'font-size' : '24px', 'text-align': 'center'})
            .text("Danny Lantigua. Email: lantiguagrullon@gmail.com");
});