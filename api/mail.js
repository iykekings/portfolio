const sgMail = require('@sendgrid/mail');
sgMail.setApiKey(process.env.send_grid);
const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

function check(n, m, e) {
  if (n.length && m.length && re.test(e)) return true;
  return false;
}

module.exports = async function (req, res) {
  const { name, email, message } = JSON.parse(req.body || "{}");
  const msg = {
    to: "offer-info@ikeze.dev",
    from: { email, name },
    subject: `${name} wants to connect`,
    text: 'Sent from Portfolio contact form',
    html: `<p>${message}</p>`,
  };

  if (check(name, message, email)) {
    try {
      const send = await sgMail.send(msg);
      res.status(200).json({ message: send })

    } catch (error) {
      res.status(401).json({ error: "It is not you, it us. Give us another chance" })
    }
  }
  else {
    res.status(401).json({ error: "Ensure your email is valid and that you have filled all fields" });
  }
}