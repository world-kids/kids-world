const User = require("../database/itemmodel");


var getQuizzByCategory=(req,res)=>{
    User.Admin.find({category:req.body.category})
    .then((result) => {
        res.send(result);
    })
    .catch((err) => {
      res.send(err);
    });
}
var addQuizzByCategory=(req,res)=>{
    var adminData = {
        question:req.body.question,
        firstAnswer:req.body.firstAnswer,
        secondAnswer:req.body.secondAnswer,
        thirdAnswer:req.body.thirdAnswer,
        forthAnswer:req.body.forthAnswer,
        category:req.body.category,
        
        
    };
    // sendConfirmation(userData.email, userData.firstName, userData.lastName);
    User.Admin.create(adminData, (err, data) => {
        if (err) {
            res.send("error");
        } else {
            res.send(data);
        }
    });

}


var updates = (req, res) => {
    User.User.findByIdAndUpdate({})
    .then((result) => {
        res.send(result);
    })
    .catch((err) => {
      res.send(err);
    });
};
var addKids = function (req, res) {
    var userData = {
        email: req.body.email,
        password: req.body.password,
        username: req.body.username
        
    };
    // sendConfirmation(userData.email, userData.firstName, userData.lastName);
    User.User.create(userData, (err, data) => {
        if (err) {
            res.send("error");
        } else {
            res.send(data);
        }
    });
};
var getKid = function (req, res) {
    User.User.findOne({ email: req.body.email }, (err, user) => {
        if (!user) res.send("user not found");
        user.comparePassword(req.body.password, (err, isMatch) => {
            if (isMatch) {
                res.send(user);
            } else {
                res.send("bad password");
            }
        });
    });
};

module.exports = { addKids, updates, getKid,addQuizzByCategory,getQuizzByCategory };

















// var getKid = (req, res) => {
    //   User.find({})
    //     .then((users) => {
        //       res.status(200).send(users);
        //     })
        //     .catch((err) => {
            //       res.status(500).send(err);
            //     });
            // };
            
            // var addKids = (req, res) => {
                //   User.insertMany({
                    //     email: req.body.email,
                    //     password: req.body.password,
                    //     username: req.body.username
                    
                    //   })
                    //     .then((user) => {
                        //       res.send(user);
            //     })
            //     .catch((err) => {
                //       res.send(err);
                //     });
                // };