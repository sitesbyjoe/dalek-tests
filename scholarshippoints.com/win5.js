/**
 * win6.js - a test for the new win6 form
 * 
 * @author jtaylor@edvisors.com
 * @date 2015-03-04
 * 
 */
var formHelper = require('../helpers/form-helpers');

module.exports = {
    'win5': function(test) {
    	test
        .open('https://www.scholarshippoints.com/win5/?st=1234')
        .waitForElement('form')    
        .assert.exists('form#win', 'Win5 Form Exists')
        .wait(500)
        // fill in the first name
        .type('input[name="fname"]', 'Ronald')
        .wait(300)
        // fill in the last name
        .type('input[name="lname"]', 'McDonald')
        .wait(300)
        // fill in the email
        formHelper.generateRandomEdvisorsEmail(test)
        .wait(500)
        // fill in the password
        .type('input[name="password"]', 't35t1ng123')
        // open the dob fields and select values
        formHelper.fillInScholarshipPointsDOB(test)
        .wait(500)
        // fill in the address
        .type('input[name="address"]', '10000 W Charleston Blvd')
        .wait(500)
        // zipcode
        .type('input[name="zip"]', '89135')
        // tab the field
        .sendKeys('body', '\uE004')
        .wait(500)
        // try clicking another field since this test is having trouble populating the hidden/
        .click('select[name="grade_level"]')
        .wait(300)
       
        // check the city/state?
        .assert.exists('input[name="city"]', 'city field exists')
        .assert.val('input[name="city"]', 'Las Vegas', 'City is populated')
        .assert.val('input[name="state"]', 'NV', 'State is populated')
        // select the grade level
        .click('select[name="grade_level"]')
        .click('select[name="grade_level"] option[value="High School Freshman"]')
        .wait(300)
        // submit the form
        .click('input[value="Submit for my Chance"]')
        // look for an element on the continue page
        // what next?
        .waitForElement('body')
        .assert.exists('body', 'The continue page has loaded.')
        .wait(120000)
        // kill the session
        .open('http://www.scholarshippoints.com/logout/')
        .done();
    }
}