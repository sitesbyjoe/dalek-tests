/**
 * Suite of tests that check each of our fields that use briteverify to confirm they're working
 *
 * @author jtaylor@edvisors.com
 * @data 2015-01-13
 *
 */
module.exports = {
		'pslCitizensLenderFirstForm': function(test) {
			test
				.log.message('Email Field Test: PSL Citizens Lender First Form')
				.open('http://www.privatestudentloans.com/apply/lender/citizens')
				.waitForElement('.citizens-charter-email')
				.wait(1000)
				.setValue('.citizens-charter-email', 'joe@')
                .sendKeys('body', '\uE004') // TAB key
				.wait(2000) // wait for briteverify to respond
                // make sure we got an alert about the bad email
                .assert.dialogText('This email is invalid')
                // wait a second
                .wait(500)
                // accept the dialog box
                .accept()
                .wait(500)
                // check that the has-error class exists?
                .assert.exists('.has-error', 'has-error class was added to the dom')
                // now fix the email
                .type('.citizens-charter-email', 'edvisors.com')
                .wait(1000)
                // send a TAB key to cause the change() event to happen
                .sendKeys('body', '\uE004')
                // wait for briteverify to respond
				.wait(2000)
                // check the has-success class exists?
                .assert.exists('.has-success', 'has-success class was added to the dom');
				return test;
		},
        'pslCollegeAveLenderFirstForm': function(test) {
			test
				.log.message('Email Field Test: PSL College Ave Lender First Form')
				// open the citizens lender first apply page
				.open('http://www.privatestudentloans.com/apply/lender/college-ave/')
				// wait for the email field to render
				.waitForElement('.college-ave-email')
				// wait a second for javascripts etc to load
				.wait(1000)
				// now try a bad email
				.setValue('.college-ave-email', 'joe@')
                // send a TAB key to cause the change() event to happen
                .sendKeys('body', '\uE004')
                // wait for briteverify to respond
				.wait(2000)
                // make sure we got an alert about the bad email
                .assert.dialogText('This email is invalid')
                // wait a second
                .wait(1000)
                // accept the dialog box
                .accept()
                .wait(1000)
                // check that the has-error class exists?
                .assert.exists('.has-error', 'has-error class was added to the dom')
                // now fix the email
                .type('.college-ave-email', 'edvisors.com')
                .wait(1000)
                // send a TAB key to cause the change() event to happen
                .sendKeys('body', '\uE004')
                // wait for briteverify to respond
				.wait(2000)
                // check the has-success class exists?
                .assert.exists('.has-success', 'has-success class was added to the dom');
				return test;
		},
        'pslOfferWallCollegeAve': function(test) {
			test
				.log.message('Email Field Test: College Ave Form on PSL Offer Wall')
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
				// wait for the email field to render
				.waitForElement('.college-ave-email')
				// wait a second for javascripts etc to load
				.wait(1000)
				// now try a bad email
				.setValue('.college-ave-email', 'joe@')
                // send a TAB key to cause the change() event to happen
                .sendKeys('body', '\uE004')
                // wait for briteverify to respond
				.wait(2000)
                // make sure we got an alert about the bad email
                .assert.dialogText('This email is invalid')
                // wait a second
                .wait(1000)
                // accept the dialog box
                .accept()
                .wait(1000)
                // check that the has-error class exists?
                .assert.exists('.has-error', 'has-error class was added to the dom')
                // now fix the email
                .type('.college-ave-email', 'edvisors.com')
                .wait(1000)
                // send a TAB key to cause the change() event to happen
                .sendKeys('body', '\uE004')
                // wait for briteverify to respond
				.wait(2000)
                // check the has-success class exists?
                .assert.exists('.has-success', 'has-success class was added to the dom');
				return test;
		},
        'slcApplyForm': function(test) {
			test
				.log.message('Email Field Test: SLC Apply Form')
			     // open the apply page
                .open('http://www.studentloanconsolidator.com/apply/')
				// wait for the email field to render
				.waitForElement('.slc-email')
				// wait a second for javascripts etc to load
				.wait(1000)
				// now try a bad email
				.setValue('.slc-email', 'joe@')
                // send a TAB key to cause the change() event to happen
                .sendKeys('body', '\uE004')
                // wait for briteverify to respond
				.wait(2000)
                // make sure we got an alert about the bad email
                .assert.dialogText('This email is invalid')
                // wait a second
                .wait(1000)
                // accept the dialog box
                .accept()
                .wait(1000)
                // check that the has-error class exists?
                .assert.exists('.has-error', 'has-error class was added to the dom')
                // now fix the email
                .type('.slc-email', 'edvisors.com')
                .wait(1000)
                // send a TAB key to cause the change() event to happen
                .sendKeys('body', '\uE004')
                // wait for briteverify to respond
				.wait(2000)
                // check the has-success class exists?
                .assert.exists('.has-success', 'has-success class was added to the dom');
				return test;
		}
}