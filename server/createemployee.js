var name = require('./employeename');
var skill = require('./employeeskill');
var sprint = require('./sprintnumber');

var employeeInfo = {};

var combineInfo = function() {
    employeeInfo.name = name();
    employeeInfo.skill = skill();
    employeeInfo.sprint = sprint();

    return employeeInfo;
}

module.exports = combineInfo;