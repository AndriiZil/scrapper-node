const puppeteer = require('puppeteer');
const uuid = require('uuid');
const nodemailer = require('../service/node-mailer-service');
const cron = require('node-cron');
const Service = require('../../models/Service');

class ParserService {
  /**
   * Parse Site
   * @returns {Promise<void>}
   */
  async parse() {
    try {
      const browser = await puppeteer.launch();
      const page = await browser.newPage();

      // Check services every one hour
      cron.schedule('0 0 1 * * *', async () => {
        const services = await Service.find();
        uuid();

        for (let { title, _id } of services) {
          try {
            await page.goto(`http://${title}`);
            // Change resource status
            await Service.findOneAndUpdate({ _id }, { status: 'success' });
            await browser.close();

            console.log('The page was closed.');
          } catch (error) {
            console.log(error);
            await Service.findOneAndUpdate({ _id }, { status: 'failed' });
            await nodemailer.sendEmail("andrii.zilnyk@gmail.com");
          }
        }
      });

    } catch (error) {
      console.log(error);
    }
  }

}

module.exports = new ParserService();