/**
 * tests for sallie mae flows
 * 
 * @author jtaylor@edvisors.com
 * @date 2015-01-13
 *
 */
 module.exports = {
    'Sallie Mae Apply Page Test': function(test) {
        test
        // open the apply page
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
        .assert.exists('.offer-wrapper.salliemae', 'Sallie Mae offer exists')
        .assert.exists('img[onload="track_apply_to_salliemae1_GAImpression();"]', 'Sallie Mae impression pixel exists')
        .click('a[href="track_apply_to_salliemae1_GAClick();"]')
        .wait(2000)
        .done();
    },
    'Sallie Mae Apply1 Page Test': function(test) {
        test
        // open the apply page
        .open('http://www.privatestudentloans.com/apply1/')
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
        .assert.exists('.offer-wrapper.salliemae', 'Sallie Mae offer exists')
        .assert.exists('img[onload="track_apply_to_salliemae1_GAImpression();"]', 'Sallie Mae impression pixel exists')
        .click('a[href="track_apply_to_salliemae1_GAClick();"]')
        .wait(2000)
        .done();
    },
    'Sallie Mae Lender First Flow': function(test) {
        test
        // open the lender first flow for sallie mae
        .open('http://www.privatestudentloans.com/apply/lender/sallie-mae')
        .waitForElement('#school')
        // wait 2 seconds for javascripts etc to load
        .wait(2000)
        // now try another school
        .type('#school', 'babs')
        .wait(2000)
        // check that the dropdown loads
        .waitForElement('li[data-value="Babson College"]')
        .click('li[data-value="Babson College"]')
        //.wait(2000)
        .assert.val('#school', 'Babson College', 'Babson College found')
        .submit('form')
        .waitForElement('.panel')
        .assert.exists('.panel', 'the panel is showing')
        .assert.title().is('Now Forwarding you to the Lender', 'lender redirect page is displayed')
        .wait(5000)
        .waitForElement('body')
        .assert.title().is('OpenNet', 'made it to sallie mae page')
        .done();
    }
}