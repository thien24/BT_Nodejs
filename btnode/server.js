import express from 'express';
import indexRouter from './routes/index.js';

const port = 3000

const app = express();

app.set('view engine', 'ejs');
app.set('views', './views');


app.use('/', indexRouter)

app.listen(port, (req, res)=>{
    console.log(`Server dang chay o cong http://localhost:${port}`)
})