var companyNamesArray = ["Fighting Mongoose", "Sleepy Dolphins", "Restive Cats", "Nervous Dinosaurs", "Sad Llamas", "Heroic Mosquitos", "Proud Sheeps", "Das Schildkrote"];
// scrum points
var frontEnd = 0;
var backEnd = 0;
var logic = 0;

var FEcounter = 0;
var BEcounter = 0;
var logicCounter = 0;
var FETotalSprint = 0;
var BETotalSprint = 0;
var logicTotalSprint = 0;



$(document).ready(function(){
    $("#staffButton").hide();

    $("#generateButton").on('click', function(){
        //append the company name
        $("#companyName").empty();
        $("#companyName").append("<h1 class='page-header'>" + generateCompanyName() + "</h1>");

        //append scrum point
        $(".scrum-point").empty();
        $(".job-title").children().empty();
        frontEnd = randomNumber(10, 60);
        $("#FE").children("h2").append("Front End");
        $("#FE").children().last().append(frontEnd);
        backEnd = randomNumber(10, 60);
        $("#BE").children("h2").append("Back End");
        $("#BE").children().last().append(backEnd);
        logic = randomNumber(10, 60);
        $("#logic").children("h2").append("Logic");
        $("#logic").children().last().append(logic);

        $("#weeksToComplete").empty();
        $("#projectTeam").empty();

        $("#staffButton").removeClass();
        $("#staffButton").addClass("assignStaff btn btn-success");
        $("#staffButton").show();

        FEcounter = 0;
        BEcounter = 0;
        logicCounter = 0;
        FETotalSprint = 0;
        BETotalSprint = 0;
        logicTotalSprint = 0;


    });

    $(".assignStaff").on('click', function(){
        callAjax();


    });

    $("#projectWrapper").on('click', ".additionalEmployee", function(){
        callAjax2();
        replaceCalcWeeks();
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
        success: function (data){
            //console.log(data);
            projectComplete(data);
        }
    });
}

//This function will determine whether the weeks to completion could be calculated
function projectComplete(data) {
    //fill a counter for each job (FE, BE, logic) to 1 each at least
    //callAjax();

    if (FEcounter == 0 || BEcounter == 0 || logicCounter == 0) {
        callAjax();
        //console.log(data);

        if (data.skill == "Front End") {
            FEcounter++;
            FETotalSprint += Number(data.sprint);
            $("#projectTeam").append("<div class='teaminfo well col-md-3'><p>Name: " + data.name + "</p>" +
                "<p>Role: " + data.skill + "</p>" +
                "<p>Sprint: " + data.sprint + "</p></div>");
            //console.log("This is FE counter: ", FEcounter, FETotalSprint);
        } else if (data.skill == "Back End") {
            BEcounter++;
            BETotalSprint += Number(data.sprint);
            $("#projectTeam").append("<div class='teaminfo well col-md-3'><p>Name: " + data.name + "</p>" +
                "<p>Role: " + data.skill + "</p>" +
                "<p>Sprint: " + data.sprint + "</p></div>");
            //console.log("This is BE counter: ", BEcounter, BETotalSprint);
        } else if (data.skill == "Logic") {
            logicCounter++;
            logicTotalSprint += Number(data.sprint);
            $("#projectTeam").append("<div class='teaminfo well col-md-3'><p>Name: " + data.name + "</p>" +
                "<p>Role: " + data.skill + "</p>" +
                "<p>Sprint: " + data.sprint + "</p></div>");
            //console.log("This is logic counter: ", logicCounter, logicTotalSprint);
        }
    } else {
        console.log("IF statement DONE");
        //append employee info

        //calculate weeks to completion
        calcWeeks();

        //addClass to button, create click listener
        $("#staffButton").removeClass();
        $("#staffButton").addClass("additionalEmployee btn btn-danger");
    }

}

function calcWeeks() {

    var FEWeeks = frontEnd / FETotalSprint;
    var BEWeeks = backEnd / BETotalSprint;
    var logicWeeks = logic / logicTotalSprint;

    var weeks = Math.ceil(Math.max(FEWeeks, BEWeeks, logicWeeks));
    //console.log(FEWeeks, BEWeeks, logicWeeks, Math.ceil(weeks));

    $("#weeksToComplete").append("<h3>The project will take " + weeks + " week(s) to complete</h3>");

}

function callAjax2() {
    $.ajax({
        type: "GET",
        url: "/people",
        success: function (data){
            console.log(data);
            additionalEmployee(data);
        }
    });
}

function additionalEmployee(data){
    if (data.skill == "Front End") {
        FEcounter++;
        FETotalSprint += Number(data.sprint);
        $("#projectTeam").append("<div class='teaminfo well col-md-3'><p>Name: " + data.name + "</p>" +
            "<p>Role: " + data.skill + "</p>" +
            "<p>Sprint: " + data.sprint + "</p></div>");
        //console.log("This is FE counter: ", FEcounter, FETotalSprint);
    } else if (data.skill == "Back End") {
        BEcounter++;
        BETotalSprint += Number(data.sprint);
        $("#projectTeam").append("<div class='teaminfo well col-md-3'><p>Name: " + data.name + "</p>" +
            "<p>Role: " + data.skill + "</p>" +
            "<p>Sprint: " + data.sprint + "</p></div>");
        //console.log("This is BE counter: ", BEcounter, BETotalSprint);
    } else if (data.skill == "Logic") {
        logicCounter++;
        logicTotalSprint += Number(data.sprint);
        $("#projectTeam").append("<div class='teaminfo well col-md-3'><p>Name: " + data.name + "</p>" +
            "<p>Role: " + data.skill + "</p>" +
            "<p>Sprint: " + data.sprint + "</p></div>");
        //console.log("This is logic counter: ", logicCounter, logicTotalSprint);
    }
}

function replaceCalcWeeks() {
    var FEWeeks = frontEnd / FETotalSprint;
    var BEWeeks = backEnd / BETotalSprint;
    var logicWeeks = logic / logicTotalSprint;

    var weeks = Math.ceil(Math.max(FEWeeks, BEWeeks, logicWeeks));
    //console.log(FEWeeks, BEWeeks, logicWeeks, Math.ceil(weeks));

    $("#weeksToComplete").empty();
    $("#weeksToComplete").replace("<h3>The project will take " + weeks + " week(s) to complete</h3>");
}