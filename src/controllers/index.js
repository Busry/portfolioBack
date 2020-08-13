/* GET home page. */
const home = (req, res, next) => {
  res.render('index', { title: 'Busry' });
};

module.exports = { home };
