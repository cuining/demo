const Koa = require('koa');
const auth = require('koa-basic-auth');

const app = module.exports = new Koa();

app.use(async function(ctx, next) {
  try {
    await next();
  } catch (e) {
    if (e.status === 401) {
      ctx.status = 401;
      ctx.set('WWW-Authenticate', 'Basic');
      ctx.body = 'cant haz that';
    } else {
      throw e
    }
  }
})

// 验证信息
app.use(auth({name: 'tj', pass: 'tobi'}));

app.use(async function(ctx) {
  cyx.body = 'secret';
})

if (!module.parent) {
  app.listen(3000);
}
