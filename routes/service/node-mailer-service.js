const nodemailer = require("nodemailer");

class NodeMailerService {

  async sendEmail(email) {
    const transporter = await this.createTransporter();
    await this.send(transporter, {
      from: 'asdlvcom@email.com',
      to: email,
      subject: 'Server is unavailable',
      html: `<h3>Error Parsing Server.</h3>
              <p>The Server is unavailable.</p>
              `
    });

    return 'success';
  }

  /**
   * Create Transporter
   * @returns {Promise<void>}
   */
  async createTransporter() {
    // At first setup local env
    const transporter = await nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.APP_EMAIL,
        pass: process.env.APP_EMAIL_PASSWORD
      }
    });

    return transporter;
  }

  /**
   * Send Email
   * @param {Object} transporter
   * @param {Object} mailOptions
   * @returns {Promise<void>}
   */
  async send(transporter, mailOptions) {
    await transporter.sendMail(mailOptions, (err, info) => {
      if (err) { return console.log(err); }
      return info;
    });

    console.log('Email was sent.');
    await transporter.close();
  }

}

module.exports = new NodeMailerService();