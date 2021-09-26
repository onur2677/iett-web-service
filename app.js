const iettAPI = require('iett-api')
const express = require('express')
const cors = require('cors');
const app = express()
app.use(cors())
app.use(express.json())
const port = process.env.PORT || 3000

app.get('/:service', async(req, res) => {
    const args = req.query
    const { service } = req.params
    const params = {
        [args.key]: args.value
    }
    try {
        const result = await iettAPI(service, args.method, params)
        res.status(200).send({
            success: true,
            data: result,
            error: null
        })
    } catch (error) {
        res.status(500).send({
            success: false,
            data: null,
            error: error.message
        })
    }
})

app.listen(port, () => {
    console.log(`App listening at ${port}`)
})