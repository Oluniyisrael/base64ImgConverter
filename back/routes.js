const express = require('express');
const path = require('path');

const router = express.Router();

router.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../pages/index/index.html'));
});

router.get('/index.js', (req, res) => {
    res.sendFile(path.join(__dirname, '../pages/index/index.js'));
});
router.post('/ugh',(req,res)=>{
    const {base64Data} = req.body
    if (base64Data) {
        console.log(`Yup, data came to backend! Data:${base64Data}`)
        res.send('cool')
    }
    else{ console.log('Nope, error somewhere')}
})


router.use((req, res) => {
    res.status(404).send('404 Not Found');
});

module.exports = router;
