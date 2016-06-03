/**
 * tests for college ave forms and offers
 *
 * @author jtaylor@edvisors.com
 * @date 2015-01-13
 *
 */
 module.exports = {
    'College Ave Regular Apply Flow': function(test) {
        test
        .open('http://www.privatestudentloans.com/apply/')
        // wait for the school picker field to render
        .waitForElement('#school')
        // wait 2 seconds for javascripts etc to load
        .wait(2000)
        // now try another school
        .type('#school', 'babs')
        .wait(2000)
        // check that the dropdown loads
        .waitForElement('li[data-value="Babson College"]')
        .click('li[data-value="Babson College"]')
        .wait(2000)
        .assert.val('#school', 'Babson College', 'Babson College found')
        .submit('#form_schoolCode')
        .waitForElement('h1')
        .assert.text('h1').is('Private loan options for Babson College', 'h1 test is correct')
        .assert.exists('.offer-wrapper.collegeave', 'College Ave offer exists')
        // now we need to fill in the form
        .type('.college-ave-first-name', 'John')
        .type('.college-ave-last-name', 'Smith')
        .type('.college-ave-email', 'johnsmith@edvisors.com')
        .wait(2000)
        .submit('.college-ave-form')
        .wait(2000)
        .done();
    }
}