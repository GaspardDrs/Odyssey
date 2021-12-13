require('dotenv').config();
const app = require('./src/app');
const { backPort } = require('./src/conf');

app.use('/', require('./src/routes'));

app.listen(backPort, (err) => {
    if (err) console.error(err);

    console.log(`Serveur is running on http://localhost:${backPort}`);
});
