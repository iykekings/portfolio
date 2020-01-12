const sgMail = require('@sendgrid/mail');
// sgMail.setApiKey(process.env.send_grid);
const msg = {
  to: 'offer-someone@ikeze.dev',
  from: 'test@example.com',
  subject: 'Sending with Twilio SendGrid is Fun',
  text: 'and easy to do anywhere, even with Node.js',
  html: '<strong>and easy to do anywhere, even with Node.js</strong>',
};
module.exports = function (_req, _res) {
  // return sgMail.send(msg);
}