const router = require('express').Router();
const { Post } = require('../models');
const withAuth = require('../utils/auth');

// GET all posts for dashboard
router.get('/', withAuth, (req, res) => {
    Post.findAll({
        where: {
            user_id: req.session.user_id,
        },
    })
    .then(dbPostData => {
        // serialize data before passing to template
        const posts = dbPostData.map(post => post.get({ plain: true }));
        res.render('dashboard', { posts, loggedIn: true });
    }
    )
    .catch(err => {
        console.log(err);
        res.redirect('login');
    });
});

// GET one post for dashboard

router.get('/edit/:id', withAuth, (req, res) => {
    Post.findByPk(req.params.id)
    .then(dbPostData => {
        if(dbPostData) {
            const post = dbPostData.get({ plain: true });
            res.render('edit-post', { post, loggedIn: true });
        } else {
            res.status(404).end();
        }
    })
    .catch(err => {
        res.status
    });
});

    

