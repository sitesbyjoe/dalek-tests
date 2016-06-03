/**
 * functions for form fill-ins will go here to avoid duplication
 *
 * @author jtaylor@edvisors.com
 * @date 2015-01-28
 *
 */

module.exports = {

  fillInSchoolPicker: function(test) {
	test
	.waitForElement('#school')
	.wait(1000)
	.type('#school', 'babs')
	.wait(1000) // waiting for the dropdown to load
	.waitForElement('li[data-value="Babson College"]')
	.click('li[data-value="Babson College"]')
	.wait(500)
	.assert.val('#school', 'Babson College', 'Babson College found');
	return test;
  },
  
  generateRandomEdvisorsEmail: function(test) {
	  test
	  .execute(function() {
          var randString = Math.random().toString(36).substring(7);
          $('input[name="email"]').val(randString + '@edvisors.com');
      })
	  return test;
  },
  
  fillInScholarshipPointsDOB: function(test) {
	  test
      .click('select[name="dob_month"]')
      .click('select[name="dob_month"] option[value="1"]')
      .wait(500)
      .click('select[name="dob_day"]')
      .click('select[name="dob_day"] option[value="1"]')
      .wait(500)
      .click('select[name="dob_year"]')
      .click('select[name="dob_year"] option[value="1998"]')
      .wait(500);
      //.sendKeys('body', '\uE004');
	  return test;
  },
    
    fillInEmail: function(test) {
        test
        .setValue('input[name="email"]', 'joe@edv')
        .sendKeys('body', '\uE004') // TAB key
        .wait(2000) // wait for briteverify to respond
        // check the has-success class exists?
        .assert.exists('.has-error', 'has-error class was added to the dom')
        // wait a second
        .wait(500)
        // accept the dialog box
        .accept()
        .wait(500)
        // check that the has-error class exists?
        .assert.exists('.has-error', 'has-error class was added to the dom')
        // now fix the email
        .type('input[name="email"]', 'isors.com')
        .wait(1000)
        // send a TAB key to cause the change() event to happen
        .sendKeys('body', '\uE004')
        // wait for briteverify to respond
        .wait(2000)
        // check the has-success class exists?
        .assert.exists('.has-success', 'has-success class was added to the dom');
        return test;
    }

        

};