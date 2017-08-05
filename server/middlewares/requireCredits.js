module.exports = (req, res, next) => {
	console.log(req.user);
	if (req.user.credits < 1)
		return res.status(403).send({ message: 'Not enough credits!' });
	next();
};
