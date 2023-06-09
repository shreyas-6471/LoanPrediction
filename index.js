const express=require('express');
//const err=["vgg","lll"]
const cookieParser=require('cookie-parser');
const app=express();
//flash = require('express-flash')
const expressLayouts=require('express-ejs-layouts');
//const db=require('./config/mongoose');
//const session=require('express-session');
//const passport=require('passport');
//const passportLocal=require('./config/passport_local_startegy');
//const MongoStore=require('connect-mongo')(session);
//const sassMiddleWare=require('node-sass-middleware');
//const flash=require('connect-flash');
//const customMware=require('./config/middleware');
const port=8001;
/*app.use(
    session({
      secret: 'secret',
      resave: true,
      saveUninitialized: true
    })
  );*/
  //app.use(flash());
/*app.use(sassMiddleWare({
    src:'./assets/scss',
    dest:'./assets/css',
    debug:true,
    outputStyle:'extended',
    prefix:'/css'

}));*/
app.use(express.urlencoded());
app.use(cookieParser());
// Use routes
app.use(express.static('./assets'));
app.use(expressLayouts);
app.use('/uploads',express.static(__dirname+'/uploads'));
app.set('view engine','ejs');
app.set('views','./views');
/*app.use((session({
secret:'shreyas',
saveUninitialized:false,
resave: false,
cookie:{
    maxAge:(1000*60*100)
},
store: new MongoStore(
    {
        mongooseConnection:db,
        autoRemove:'disabled'
},
function(err)
{
    console.log(err || 'connect-mongodb setup ok');
}
)
})));*/
//app.use(passport.initialize());
//app.use(passport.session());
//app.use(passport.setAuthenticateduser);
//app.use(flash());
//app.use(customMware.setFlash);
app.use('/',require('./routes'));
app.listen(port,function(err)
{
    if(err)
    {
        console.log('Error in running server');
    }
    else
    {
        console.log('Server is running on'+port);
    }
})