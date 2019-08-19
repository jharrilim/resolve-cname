const { resolveCname } = require('dns');

module.exports = (req, res) => {
    resolveCname(
        (req.body && req.body.hostname) || (req.query && req.query.hostname),
        (err, addresses) => {
            if (err) {
                res.status(404).send({ error: 'Could not resolve CNAME.' });
            } else {
                res.json(addresses);
            }
        }
    );
};
