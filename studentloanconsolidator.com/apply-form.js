/**
 * apply-form.js - a test for the SLC apply form
 * 
 * @author jtaylor@edvisors.com
 * @date 2015-07-16
 * 
 */
var formHelper = require('../helpers/form-helpers');

module.exports = {
    'apply': function(test) {
    	test
        .open('http://www.studentloanconsolidator.com/apply/')
        .waitForElement('form')
        .assert.exists('form', 'Apply form loaded')
        // first name
        .type('input[name="fname"]', 'Freddy')
        .wait(500)
        // last name
        .type('input[name="lname"]', 'Sdead')
        .wait(500)
        // email
        formHelper.generateRandomEdvisorsEmail(test)
        .sendKeys('body', '\uE004') // TAB key
        .wait(2000)
        // state
        .click('select[name="state"]')
        .click('select[name="state"] option[value="NV"]')
        .wait(500)
        // school picker
        formHelper.fillInSchoolPicker(test)
        .wait(500)
        // federal debt
        .click('select[name="federal_debt"]')
        .click('select[name="federal_debt"] option[value="$10,000-$20,000"]')
        .wait(500)
        // private debt
        .click('select[name="private_debt"]')
        .click('select[name="private_debt"] option[value="$10,000-$20,000"]')
        .wait(500)
        // citizenship
        .click('select[name="citizenship"]')
        .click('select[name="citizenship"] option[value="US Citizen"]')
        // have you defaulted
        .click('input#have_you_defaulted_yes')
        .wait(500)
        // submit the form
        .click('.submit')
        .click('.submit .button')
        .waitForElement('.continue')
        .assert.exists('.continue', 'Offer Wall loaded')
        // wait in case I want to check the inspector etc
        .wait(20000)
        .done();
    }
}