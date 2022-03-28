const { post } = require('./api');

const router = require('express').Router();

router.get('/',async(req,res)=>{
    try{
        const postData = await post.findAll({
            include:[
                {
                    model: User ,
                    attributes: ['username']

                }
            ]
        });

        const posts = postData.map((post)=>({ plain:true }));

    }

})