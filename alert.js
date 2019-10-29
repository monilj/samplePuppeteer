const puppeteer= require('puppeteer');
let config ={
	launchOptions:{
		headless: false
	}
}

 
puppeteer.launch(config.launchOptions).then(async browser =>  {
  const page = await browser.newPage()
  await page.goto('https://www.google.com/')
  page.on('dialog', async dialog => {
    console.log(dialog.message())
    console.log("Alert dismiss")
    // await dialog.dismiss() 
  })
  //to run below snippet make sure you commented dialog.dismiss(). Otherwise it will throw an error saying alert box alread handle
  page.on('dialog', async dialog => {
    console.log("please accept dialog")
    console.log(dialog.accept())
    console.log(" dialog accepted")
  })
  
  console.log("message validation")
  await page.evaluate(() => alert('This message is inside an alert box'))
  await browser.close();
})  