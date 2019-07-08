const { app } = require('./app');

const PORT = 3000;

app.listen(PORT, () => {
    console.log(`Server up and listening on port ${PORT}, in ${app.get('env')} mode.`);
    });
