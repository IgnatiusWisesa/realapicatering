const nodemailer=require('nodemailer')

const transporter=nodemailer.createTransport({
    service:'gmail',
    auth:{
        user:'wisesa.dwi@gmail.com',
        pass:'emoltdlzdczcpeir'
    },
    tls:{
        rejectUnauthorized:false
    }
})

module.exports=transporter