var ghpages = require('gh-pages');

const options = {
    src:[
        'index.html',
        'bundle.js'
    ]
};

ghpages.publish(__dirname, options, function(err) {
    console.log('Published!');
});