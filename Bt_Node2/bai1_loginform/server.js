const express = require('express');
const fs = require('fs');
const app = express();
const port = 3000;

app.use(express.urlencoded({ extended: true }));

function checkLogin(username, password) {
  const [storedUsername, storedPassword] = fs.readFileSync('user.txt', 'utf-8').trim().split(',');
  return username === storedUsername && password === storedPassword;
}

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/src/views/index.html');
});

app.post('/login', (req, res) => {
  const { username, password } = req.body; 
  if (checkLogin(username, password)) {
    res.send(`<h3>Đăng nhập thành công</h3>`);
  } else {
    res.send('<h3>Sai email hoặc mật khẩu.</h3>');
  }
});

app.listen(port, () => console.log(`Server chạy tại http://localhost:${port}`));
