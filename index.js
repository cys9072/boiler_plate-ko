
// exprss 모듈 가지고 오기
const express = require('express')

// 새로운 express 펑션을 사용해서 app을 만듦
const app = express()

// 포트를 백서버로 두기
const port = 5000

// 몽구스를 이용해 어플리케이션과 몽고DB를 연결
const mongoose = require('mongoose')
mongoose.connect('mongodb+srv://choiyunseok:dbsc246810@boilerplate.bofwn.mongodb.net/myFirstDatabase?retryWrites=true&w=majority',{
  useNewUrlParser:true, useUnifiedTopology:true, useCreateIndex: true, useFindAndModify:false
}).then(()=> console.log('몽고 연걸됨'))
  .catch(err => console.log(err))
// 루트 / 디렉토리에 오면 헬로 월드를 출력
app.get('/', (req, res) => {
  res.send('서버 dd')
})


// 5000번 포트에서 앱을 실행 
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})

