module.exports = (app) => {
    // const postsRouter = require('./routes/posts');
    // const indexRouter = require('./routes/index');
    // app.use(postsRouter)
    // app.use(indexRouter)
    app.use('/posts',require('./routes/posts'))
    app.use('/',require('./routes/index'))
}