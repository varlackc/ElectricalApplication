/************************************************************************************************************
 *  Calculation Section
 *
 *  This program performs the needed front end calculations
 ************************************************************************************************************/

// Declare variables
var Resistance = 0;
var Voltage = 0;
var Amperage = 0;
var Power = 0;
var Energy = 0;
var Temperature = 0;
var Frequency = 0; 
var pi = 3.14159265359;

//Ohms Law V = IR

//given resistance and voltage find amperage -- V/R = I
var ResistanceVoltageFindAmperage = function (resistance, voltage) {
    var Amperage = voltage / resistance;
    return Amperage;
};

//given amperage and resistance find voltage. -- V = IR
var AmperageResistanceFindVoltage = function (amperage, resistance) {
    var voltage = amperage * resistance;
    return voltage;
};

//given amperage and voltage find resistance -- V/I = R
var AmperageVoltageFindResistance = function (amperage, voltage) {
    var resistance = voltage / amperage;
    return resistance;
};

//calculate power
//Given voltage and amperage find Power P = VI
var VoltageAmperageFindPower = function (voltage, amperage) {
    var power = voltage * amperage;
    return power;
};

//amparage given power an voltage P/V = I
var PowerVoltageFindAmperage = function (power, voltage) {
    var amperage = power / voltage;
    return amperage;
};

//voltage given power and amperage V = P/I

//Quadratic Formula

//Distance Formula

//2D Distance

//3D distance

//Pythagorean Identity -- X^2 + Y^2 = Z^2

//Trigonometric Identities

//law of sine

//Kirchoff Rules

//Statics

//Kinematics

//Circuit Analysis