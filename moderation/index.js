const express = require('express')
const bodyParser = require('body-parser')
const axios = require('axios')

const app = express()
app.use(bodyParser.json())

app.post('/events', async (req, res) => {
  const { type, data } = req.body

  if(type === 'Comment_Created') {
    const status = data.content.toLowerCase().includes('orange') ? 'rejected' : 'approved'

    await axios.post('http://event-bus-srv:4005/events', {
      type: 'Comment_Moderated',
      data: {
        id: data.id,
        postId: data.postId,
        status,
        content: data.content
      }
    })
  }

  res.send({})
})

app.listen(4003, () => {
  console.log('Listening on 4003')
})