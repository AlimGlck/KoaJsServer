const Koa = require('koa');
const Router = require('koa-router');

const app = new Koa();
const router = new Router();

router
        .get('/',(ctx,next) =>{
            ctx.body = `<h1> İndex Sayfasına Hoş Geldiniz</h1>`;
        })
        .get('/hakkimda',(ctx,next) =>{
            ctx.body = `<h1> Hakkımda Sayfasına Hoş Geldiniz</h1>`;
        })
        .get('/iletisim',(ctx,next) =>{
            ctx.body = `<h1> İletişim Sayfasına Hoş Geldiniz</h1>`;
        })
        
        

        app
        .use(router.routes())
        .use(router.allowedMethods())
        .listen(3000);
