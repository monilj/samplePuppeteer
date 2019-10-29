const puppeteer = require('puppeteer')
let config= {
	launchOptions: {
		headless:false
	}
}
const signInPage= {
	signInButton : 'a[id="gb_70"]'
}
const loginEmailPage= {
	email : 'input[id="identifierId"]',
	next: 'div[class="ZFr60d CeoRYc"]'


}
const loginPasswordPage= {
	password : '[name="password"]'
}



puppeteer.launch(config.launchOptions).then(async browser =>{
	const page = await browser.newPage(); 
	console.log('Navigating to Google...');
	await page.goto('https://www.google.com');
	await page.waitFor(signInPage.signInButton);
	await page.click(signInPage.signInButton);
	await page.waitFor(loginEmailPage.email);
	console.log('Enter username...');
	await page.type(loginEmailPage.email,"monilnigdi@gmail.com");
	console.log('Enter password...');
	await page.click(loginEmailPage.next);
	await page.waitFor(loginPasswordPage.password)
	console.log('got password element');

	
	await page.type(loginPasswordPage.password,"1234455");
	await page.click(loginEmailPage.next);

	// await browser.close();
})

	