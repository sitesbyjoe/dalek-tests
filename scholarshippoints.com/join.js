/**
 * win6.js - a test for the join form
 * 
 * @author jtaylor@edvisors.com
 * @date 2015-03-04
 * 
 */
var formHelper = require('../helpers/form-helpers');

module.exports = {
    'win6': function(test) {
    	test
        .open('http://www.scholarshippoints.com/join/')
        .waitForElement('form')    
        .assert.exists('form#join', 'Join Form Exists')
        .wait(1000)
        // fill in the first name
        .type('input[name="fname"]', 'Ronald')
        .wait(500)
        // fill in the last name
        .type('input[name="lname"]', 'McDonald')
        .wait(500)
        // fill in the email
        formHelper.generateRandomEdvisorsEmail(test)
        .wait(500)
        // fill in the password
        .type('input[name="password"]', 't35t1ng123')
        // open the dob fields and select values
        formHelper.fillInScholarshipPointsDOB(test)
        .wait(500)
        .click('select[name="grade_level"]')
        .click('select[name="grade_level"] option[value="College Freshman"]')
        .wait(500)
        // submit the form
        .click('input[value="Join ScholarshipPoints"]')
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