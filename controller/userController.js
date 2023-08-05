const { User } = require('../model/user');
const addUser =async (req, res) => {
    let {username, password} = req.body;
    let user  = new User({username, password})
    user.save().then(rs => {
        return res.json({ status: true,result:"Thêm thành công người dùng", data: rs })
    });
}
const login = async (req,res)=>{
    let {username,password}= req.body;
    let user =await User.findOne({username:username}).lean()
    if(user){
       if(password == user.password){
        return res.json({status: true,result:"Đăng nhập thành công", data: user})
       } else{
        return res.json({status: false, result :"Đăng nhập thất bại"})
       }
    }else{
        return res.json({status:false, result: "Tài khoản không tồn tại"})
    }
}
exports.addUser = addUser;
exports.login = login;