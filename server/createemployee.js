var name = require('./employeename');
var skill = require('./employeeskill');
var sprint = require('./sprintnumber');

var employeeInfo = [];

var combineInfo = function() {
    employeeInfo[0] = name();
    employeeInfo[1] = skill();
    employeeInfo[2] = sprint();

    return employeeInfo;
}

module.exports = combineInfo;