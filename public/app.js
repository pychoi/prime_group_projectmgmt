var companyNamesArray = ["Fighting Mongoose", "Sleepy Dolphins", "Restive Cats", "Nervous Dinosaurs", "Sad Llamas", "Heroic Mosquitos", "Proud Sheeps", "Das Schildkrote"];
var frontEnd = 0;
var backEnd = 0;
var logic = 0;

$(document).ready(function(){
    $("#assignStaff").hide();

    $("#generateButton").on('click', function(){
        //append the company name
        $("#companyName").empty();
        $("#companyName").append(generateCompanyName());

        //append scrum point
        $(".scrum-point").empty();
        frontEnd = randomNumber(10, 60);
        $("#FE").children().last().append(frontEnd);
        backEnd = randomNumber(10, 60);
        $("#BE").children().last().append(backEnd);
        logic = randomNumber(10, 60);
        $("#logic").children().last().append(logic);

        $("#assignStaff").show();

    });

    $("#assignStaff").on('click', function(){
        callAjax();
    });


});

function randomNumber(min, max){
    return Math.floor(Math.random() * (1 + max - min) + min);
}

function generateCompanyName() {
    var index = randomNumber(0, companyNamesArray.length-1);
    var randomName = companyNamesArray[index];
    return randomName;
}

function callAjax() {
    $.ajax({
        type: "GET",
        url: "/people",
        success: function(data){
            console.log(data);
        }
    });
}

//This function will determine whether the weeks to completion could be calculated
function projectComplete() {
    //fill a counter for each job (FE, BE, logic) to 1 each at least
}