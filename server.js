const express = require("express");
const serveStatic = require("serve-static");
const path = require("path");
const router = express.Router();
const nodemailer = require("nodemailer");
const cors = require('cors');

const app = express();

app.use(
  cors({
    method: ['GET', 'POST'],
    credentials: true,
  })
)

//here we are configuring dist to serve app files
app.use("/", serveStatic(path.join(__dirname, "/build")));

// this * route is to serve project on different page routes except root `/`
app.get(/.*/, (req, res) => {
  res.sendFile(path.join(__dirname, "/build/index.html"));
});

function corsCheck(req, callback) {
  let corsOptions;
  const acceptList = [
    'http://localhost:3000'
  ];
  if (acceptList.indexOf(req.header('Origin')) !== -1) {
    corsOptions = { origin: true };
  } else {
    corsOptions = { origin: false };
  }
  callback(null, corsOptions);
}

app.post("/api/nodemailerTest", cors(corsCheck), (req, res, next) => {
  res.setHeader("Access-Control-Allow-Headers", "Content-Type, Accept");
	res.send("1432");
	// console.log(req)
  console.log(typeof req);

	console.log(process.env.EMAIL_SYSTEM_RECEIVER_EMAIL_ADDRESS)

  let transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.EMAIL_SYSTEM_RECEIVER_EMAIL_ADDRESS,  // gmail 계정 아이디를 입력
      pass: process.env.EMAIL_SYSTEM_RECEIVER_EMAIL_PASSWORD          // gmail 계정의 비밀번호를 입력
    }
  });

  let mailOptions = {
    from: process.env.EMAIL_SYSTEM_RECEIVER_EMAIL_ADDRESS,    // 발송 메일 주소 (위에서 작성한 gmail 계정 아이디)
		to: process.env.EMAIL_SYSTEM_RECEIVER_EMAIL_ADDRESS,                     // 수신 메일 주소
		// to: 'jaeleeps@jaranda.kr',
    subject: 'Sending Email using Node.js',   // 제목
    text: 'That was easy!'  // 내용
  };

  transporter.sendMail(mailOptions, function(error, info){
    if (error) {
      console.log(error);
    }
    else {
      console.log('Email sent: ' + info.response);
    }
  });

  // res.redirect("/contact");
});

const port = process.env.PORT || 3001;
app.listen(port);
console.log(`app is listening on port: ${port}`);
