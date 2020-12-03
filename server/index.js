const express = require('express')
const app = express()
const port = 4000

app.get('/forms/user', (req, res) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.send({
    name: {
      type: "text",
      label: "Name"
    },
    email: {
      type: "email",
      label: "Email"
    },
    role: {
      type: "select",
      label: "Role",
      options: [
        {
          label: "Admin",
          value: "admin"
        },
        {
          label: "User",
          value: "user"
        }
      ]
    }
  })
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})