/************************************************************************************************************
 *  Calculation Section
 *
 *  This program performs the needed front end calculations
 *  
 *  Each of the calculations are separated by cathegory
 *  Some of the cathegories include, mathematics, physics, etc. 
 *  
 *  Such calculations will be used to find the given values. 
 ************************************************************************************************************/

// Declare variables
var Resistance = 0; // this indicates the resistance of an electrical or electronic component
var Voltage = 0; // Voltage of an electrical or electronic component
var Amperage = 0; // Amperage of an electrical or electronic component
var Power = 0;
var Energy = 0;
var Temperature = 0;
var Frequency = 0; 
var pi = 3.14159265359;

// Ohms Law V = IR
// given resistance and voltage find amperage -- V/R = I
// Inputs: Resistance and voltage
var ResistanceVoltageFindAmperage = function (resistance, voltage) {
    var Amperage = voltage / resistance;
    return Amperage;
};

// given amperage and resistance find voltage. -- V = IR
// Inputs: Amperage and Resistance
var AmperageResistanceFindVoltage = function (amperage, resistance) {
    var voltage = amperage * resistance;
    return voltage;
};

// given amperage and voltage find resistance -- V/I = R
//Input: Amperage and Voltage
var AmperageVoltageFindResistance = function (amperage, voltage) {
    var resistance = voltage / amperage;
    return resistance;
};

//calculate power
//Given voltage and amperage find Power P = VI
// Input: Voltage and Amperage
var VoltageAmperageFindPower = function (voltage, amperage) {
    var power = voltage * amperage;
    return power;
};

//amparage given power an voltage P/V = I
// Input: Power and Voltage
var PowerVoltageFindAmperage = function (power, voltage) {
    var amperage = power / voltage;
    return amperage;
};

//voltage given power and amperage V = P/I
// Input: Power and Amperage
var PowerAmperageFindVoltage = function (power, amperage) {
    var voltage = power / amperage;
    return voltage;
};

//Quadratic Formula

//Distance Formula
//2D Distance
// Input: (x1 and y1) (x2 and y2)
var DistanceFormula2D = function (x1, y1, x2, y2) {
    var distance = sqrt((x2 - x1)*(x2 - x1) + (y2 - y1)*(y2 - y1));
    return distance;
};

//3D distance
// Inputs: (x1, y1 and z1) (x2, y2, and z2)
var DistanceFormula3D = function (x1, y1, z1, x2, y2, z2) {
    var distance = sqrt((x2 - x1) * (x2 - x1) + (y2 - y1) * (y2 - y1) + (z2 - z1) * (z2 - z1));
    return distance;
};


//Pythagorean Identity -- X^2 + Y^2 = Z^2 where x, Y and Z are rational numbers
var FindHypothenuse = function (x, y) {
    var hypothenuse = sqrt(x*x + y*y);
    return hypothenuse;
};

//Trigonometric Identities
var TrigonometricIdentity1 = function () {
    var identity = 0;
    return identity;
};

//law of sine where a, b and c are sides, and alpha, beta and gama are angles
var LawOfSine = function (a, b, c, alpha, beta, gama) {
    var result = 0;
    return result;
};

//law of cosine c^2 = a^2 + b^2 - 2ab cos(C)
var LawOfCosine = function (a, b, c) {
    var result = 0;
    return result;
};

//Kirchoff Rules 
var KirchoffRule = function () {
    var result = 0;
    return result;
};

//Statics
//Mean
// Input: Value Array
var Mean = function (ArrayValue) {
    var ArraySize = ArrayValue.Length(); 
    var Sum = 0;
    //add all of the elements
    for (var i = 0; i < ArraySize; i++) {
        Sum += ArrayValue[i];
    }
    //Calculate Mean
    var result = Sum / ArraySize;
    return result;
};
//Median
var Median = function (ArrayValue) {
    var ArraySize = ArrayValue.Length();
    //Calculate Median
    var result = 0;
    return result;
};
//Mode
var Mode = function (ArrayValue) {
    var result = 0;
    //calculate Mode
    return result;
};

//Standard Deviation
// Input: Value Array
var StandardDeviation = function (ArrayValue) {
    var result = 0;
    return result;
};

//Kinematics
//find final velocity Vf = V0 + (A)*(T)
var VelocityFinalGivenV0AT = function (V0, A, T) {
    var result = V0 + A*T;
    return result;
};

//find final position
//find acceleration
//find total energy of the system
// find momentum

//distance d = v*t
var DistanceGivenVT = function (V, T) {
    var result = V*T;
    return result;
};

//Circuit Analysis
