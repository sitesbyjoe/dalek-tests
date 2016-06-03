/**
 * win6.js - a test for the new win6 form
 * 
 * @author jtaylor@edvisors.com
 * @date 2015-03-04
 * 
 */
var formHelper = require('../helpers/form-helpers');

module.exports = {
    'win6': function(test) {
    	test
        .open('http://www.scholarshippoints.com/win6/')
        .waitForElement('form')    
        .assert.exists('form#win', 'Win6 Form Exists')
        .wait(2000)
        // fill in the first name
        .type('input[name="fname"]', 'Ronald')
        .wait(1000)
        // fill in the last name
        .type('input[name="lname"]', 'McDonald')
        .wait(1000)
        // fill in the email
        formHelper.generateRandomEdvisorsEmail(test)
        .wait(1000)
        // fill in the password
        .type('input[name="password"]', 't35t1ng123')
        // open the dob fields and select values
        formHelper.fillInScholarshipPointsDOB(test)
        .wait(1000)
        // fill in the address
        .type('input[name="address"]', '10000 W Charleston Blvd')
        .wait(1000)
        // zipcode
        .type('input[name="zip"]', '89135')
        // tab the field
        .sendKeys('body', '\uE004')
        .wait(1000)
        // try clicking another field since this test is having trouble populating the hidden/
        .click('select[name="grade_level"]')
        .wait(1000)
       
        // check the city/state?
        .assert.exists('input[name="city"]', 'city field exists')
        .assert.val('input[name="city"]', 'Las Vegas', 'City is populated')
        .assert.val('input[name="state"]', 'NV', 'State is populated')
        // select the grade level
        .click('select[name="grade_level"]')
        .click('select[name="grade_level"] option[value="College Freshman"]')
        // wait for other fields to popup
        .wait(500)
        .click('select[name="major"]')
        .click('select[name="major"] option[value="85"]')
        // fill in the schoolpicker
        formHelper.fillInSchoolPicker(test)
        .wait(1000)
        // go to step 2
        .click('.next-step')
        .wait(2000)
        // military interest
        .click('select[name="military_interest]')
        .click('select[name="military_interest"] option[value="1"]')
        .wait(500)
        // background
        .click('select[name="ethnicity"]')
        .click('select[name="ethnicity"] option[value="Asian"]')
        .wait(500)
        // gpa
        .click('select[name="gpa"]')
        .click('select[name="gpa"] option[value="3.5"]')
        .wait(500)
        // SAT Score
        .type('input[name="sat_total"]', '1000')
        .wait(500)
        // ACT Score
        .type('input[name="act_total"]', '30')
        .wait(500)
        // Education Level completed
        .click('select[name="education_level"]')
        .click('select[name="education_level"] option[value="GED"]')
        .wait(500)
        // Grad Date
        .click('select[name="graduation_date"]')
        .click('select[name="graduation_date"] option[value="Summer 2018"]')
        .wait(500)
        // Student Debt
        .click('select[name="total_student_college_debt"]')
        .click('select[name="total_student_college_debt"] option[value="0-5000"]')
        .wait(500)
        // Grad School
        .click('select[name="interested_in_grad_school"]')
        .click('select[name="interested_in_grad_school"] option[value="Not Sure"]')
        .wait(500)
        // submit the form
        .click('input[value="Submit for my Chance"]')
        // look for an element on the continue page
        // what next?
        .waitForElement('body')
        .assert.exists('body', 'The continue page has loaded.')
        .wait(60000)
        // kill the session
        .open('http://www.scholarshippoints.com/logout/')
        .done();
    }
}