/**
 * cappex.js - a test for the cappex co-reg form (when on the activity wall)
 * 
 * @author jtaylor@edvisors.com
 * @date 2015-07-15
 * 
 */
var formHelper = require('../helpers/form-helpers');

module.exports = {
    'cappex': function(test) {
    	test
        // login to the site
        .open('https://www.scholarshippoints.com/login/')
        .waitForElement('form')
        .type('input[name="email"]', 'freddy@edvisors.com')
        .wait(500)
        .type('input[name="password"]', 'superfly')
        .wait(500)
        .submit('form')
        // wait for the activity wall to load
        .waitForElement('.activities')
        .assert.exists('div[data-form-path="cappex-coreg"]', 'Cappex Activity Exists')
        .wait(2000)
        // click the activity
        .click('div[data-form-path="cappex-coreg"] a')
        // wait for the form
        .waitForElement('#cappex-coreg-modal')
        .assert.exists('#cappex-coreg-modal', 'Cappex Form Loaded')
        .wait(500)
        // fill in the form
        .click('select[name="highSchoolGradMonth"]')
        .click('select[name="highSchoolGradMonth"] option[value="6"]')
        .wait(500)
        .click('select[name="highSchoolGradYear"]')
        .click('select[name="highSchoolGradYear"] option[value="2019"]')
        .wait(500)
        .click('select[name="highSchoolGpaUnweighted')
        .click('select[name="highSchoolGpaUnweighted"] option[value="3.0"]')
        .wait(500)
        // 3 schoolpickers
        // 1st schoolpicker
        .click('#school')
        .type('#school', 'babs')
        .wait(1000) // waiting for the dropdown to load
        .waitForElement('li[data-value="Babson College"]')
        .click('li[data-value="Babson College"]')
        .wait(500)
        .assert.val('#school', 'Babson College', 'Babson College found')
        // 2nd schoolpicker
        .click('#school2')
        .type('#school2', 'harvard')
        .wait(1000) // waiting for the dropdown to load
        .waitForElement('li[data-value="Harvard University"]')
        .click('li[data-value="Harvard University"]')
        .wait(500)
        .assert.val('#school2', 'Harvard University', 'Harvard University found')
        // 3rd schoolpicker
        .click('#school3')
        .type('#school3', 'yal')
        .wait(1000) // waiting for the dropdown to load
        .waitForElement('li[data-value="Yale University"]')
        .click('li[data-value="Yale University"]')
        .wait(500)
        .assert.val('#school3', 'Yale University', 'Yale University found')
        .wait(500)
        // select a major
        .click('select[name="collegeMajorIds"]')
        .click('select[name="collegeMajorIds"] option[value="1"]')
        .wait(500)
        // check the signup box
        .click('input[name="signup"]')
        .assert.selected('input[name="signup"]', 'Cappex Checkbox is checked')
        .wait(500)
        // submit the form
        .click('.cappex-questions .submit input[type="submit"]')
        .waitForElement('.cappex-success')
        .assert.exists('.cappex-success', 'Success screen loaded')
        // wait in case I want to check the inspector etc
        .wait(10000)
        .done();
    }
}