var app = require('express')(),
    bodyParser = require('body-parser'),
    anotherTool = require('./lib/anotherTool'),
    tool = require('./lib/tool.js');

app.use(bodyParser.urlencoded({
    extended: false
}));

// 将要处理的逻辑交给具体的包来执行
app.use('/api', require('./lib/routers/api'));
app.use('/user', require('./lib/routers/userRouter'));

app.use('/*', function(req, res, next) {
    res.status(404).send('Not Found.');
});

app.listen(3000, function() {
    tool.printLine();
    tool.printDate();
    tool.printLine();
    console.log('lesson 6 demo.');
    tool.printLine();
    anotherTool.iPhone();
    anotherTool.dofy();
});
