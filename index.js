// import uuid package
import { v4 as uuidv4 } from 'uuid';
// import validator from validator package
import validator from 'validator';
// import append file package
import { appendFileSync } from 'node:fs';


function generateUniqueID(fname, lname) {
    // empty variable to store unique id
    var newUniqueID = "";

    // add lower case of first name first letter
    newUniqueID = newUniqueID + fname[0].toLowerCase();
    // add last name in lower case
    newUniqueID = newUniqueID + lname.toLowerCase();
    // generate unique alphanumeric string and add length 8 susbtring of it to unique id
    newUniqueID = newUniqueID + uuidv4().substring(0, 8);

    // return unique id
    return newUniqueID;
}


function addAccount(input) {
// fname, lname, email, age
    console.log("array length: ", input.length);
    // input array must have four elements
    if (input.length < 4) {
        console.log("failed at condition 1 - input has less than four fields");
        return false;
    // first name, last name, and email must not be empty strings
    } else if (input[0] == "" || input[1] == "" || input[2] == "") {
        console.log("failed at condition 2 - empty first name, last name, or email");
        return false;
    // email must be valid 
    } else if (validator.isEmail(input[2]) == false) {
        console.log("failed at condition 3 - invalid email");
        return false;
    // age must at least be 18
    } else if (input[3] < 18) {
        console.log("failed at condition 3 - age less than 18");
        return false;
    }

    // all conditions are true, save data as a new line in users.txt
    let newUserInfo =  input[0] + "," + input[1] + "," + input[2] + "," + input[3] + "," + generateUniqueID(input[0], input[1]) + "\n"

    appendFileSync('./users.txt', newUserInfo, 'utf8');

    return true;
}


export default{generateUniqueID, addAccount}