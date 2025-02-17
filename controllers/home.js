exports.redirectToHome = (req, res) => {
    res.redirect('/home'); 
};

exports.renderHome = (req, res) => {
    res.render('index', { pageTitle: 'NoteBoard' }); 
};