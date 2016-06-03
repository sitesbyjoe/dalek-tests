/**
 * Scholarship Points tests
 *
 * @author jtaylor@edvisors.com
 * @date 2015-01-15
 *
 */
module.exports = {
    'joinForm': function(test) {
        test
            .open('http://www.scholarshippoints.com/join/')
            .waitForElement('.content')    
            .assert.exists('form.join', 'Join Form exists')
            .wait(2000)
            // fill in the first name
            .type('input[name="fname"]', 'Ronald')
            .wait(1000)
            // fill in the last name
            .type('input[name="lname"]', 'McDonald')
            .wait(1000)
            // fill in the email
            .execute(function() {
                var randString = Math.random().toString(36).substring(7);
                $('input[name="email"]').val(randString + '@edvisors.com');
            })
            .wait(1000)
            // fill in the password
            .type('input[name="password"]', 't35t1ng123')
            // open the dob fields and select values
            .click('select[name="dob_month"]')
            .click('select[name="dob_month"] option[value="1"]')
            .wait(1000)
            .click('select[name="dob_day"]')
            .click('select[name="dob_day"] option[value="1"]')
            .wait(1000)
            .click('select[name="dob_year"]')
            .click('select[name="dob_year"] option[value="1992"]')
            .wait(1000)
            // select the grade level
            .click('select[name="grade_level"]')
            .click('select[name="grade_level"] option[value="College Freshman"]')
            // checkbox? its already checked
            // submit the form
            .submit('#join')
            // look for an element on the continue page
            // what next?
            .waitForElement('.continue-page-offers')
            .assert.exists('.continue-page-offers', 'The continue page offers element exists.')
            .wait(1000)
            // kill the session
            .open('http://www.scholarshippoints.com/logout/');
        	return test;
    },
    'winForm': function(test) {
        test
            .open('http://www.scholarshippoints.com/win/')
            .waitForElement('.content')    
            .assert.exists('form#win', 'Win form exists')
            .wait(2000)
            // fill in the first name
            .type('input[name="fname"]', 'Ronald')
            .wait(1000)
            // fill in the last name
            .type('input[name="lname"]', 'McDonald')
            .wait(1000)
            // fill in the email
            .execute(function() {
                var randString = Math.random().toString(36).substring(7);
                $('input[name="email"]').val(randString + '@edvisors.com');
            })
            .wait(1000)
            // fill in the password
            .type('input[name="password"]', 't35t1ng123')
            // open the dob fields and select values
            .click('select[name="dob_month"]')
            .click('select[name="dob_month"] option[value="1"]')
            .wait(1000)
            .click('select[name="dob_day"]')
            .click('select[name="dob_day"] option[value="1"]')
            .wait(1000)
            .click('select[name="dob_year"]')
            .click('select[name="dob_year"] option[value="1992"]')
            .wait(1000)
            // address, zip, state and city
            .type('input[name="address"]', '10000 W Charleston Blvd')
            .wait(500)
            .type('input[name="zip"]', '89135')
            // send a TAB key to cause the change() event to happen
            .sendKeys('body', '\uE004')
            .wait(2000)
            // filling in the zip should populate the state and city, does it?
            .assert.val('select[name="state"]', 'NV', 'State is auto-populated')
            .assert.val('input[name="city"]', 'Las Vegas', 'City is auto-populated')
            .wait(500)
            // now try another school
            .type('#school', 'babs')
			.wait(2000)
            // school picker
            .click('li[data-value="Babson College"]')
            .wait(500)
            .assert.val('#school', 'Babson College', 'Babson College found')
            // select the grade level
            .click('select[name="grade_level"]')
            .click('select[name="grade_level"] option[value="College Freshman"]')
            // select a major
            .click('select[name="major"]')
            .click('select[name="major"] option[value="13"]')
            // checkbox? its already checked
            // submit the form
            .submit('#win')
            // look for an element on the continue page
            // what next?
            .waitForElement('.continue-page-offers')
            .assert.exists('.continue-page-offers', 'The continue page offers element exists.')
            .wait(1000)
            // kill the session
            .open('http://www.scholarshippoints.com/logout/');
        	return test;
    },
    'widget': function(test) {
        test
            .open('http://www.howtogetin.com/scholarships/win.php')
            .waitForElement('iframe#sp-widget')
        	.assert.exists('iframe#sp-widget', 'iframe has loaded.')
        	.toFrame('#sp-widget')
        	.assert.exists('#join', 'join form found on widget')
        	.wait(1000)
        	.type('input[name="fname"]', 'John')
        	.wait(500)
        	.type('input[name="lname"]', 'Smitheroo')
        	.wait(2000);
        	// random email
        	formHelper.generateRandomEdvisorsEmail(test)
        	.type('input[name="password"]', 'testing123')
        	.wait(500);
        	formHelper.fillInScholarshipPointsDOB(test)
        	.wait(500)
        	// were clicking this button to force the blur event on the email field so it validates
        	.click('input[type="submit"]')
        	.wait(2000) // wait for briteverify to respond if we're using it
        	.submit('.registration.join')
        	.waitForElement('.continue-page-offers')
            .assert.exists('.continue-page-offers', 'The continue page offers element exists.')
            .wait(1000)
            // kill the session
            .open('http://www.scholarshippoints.com/logout/');
        	return test;;
    }
}