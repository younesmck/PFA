FlowRouter.route('/ajout',{
    name:'ajout',
    action:function(){
        FlowLayout.render('layout',{sidebar: 'sidebar', main:'home', cart: 'cart'});
    }
});
FlowRouter.route('/liste',{
    action:function(){
        FlowLayout.render('layout',{sidebar: 'sidebar',main:'liste',cart: 'cart'});
    }
});
FlowRouter.route('/stage/:_id',{
    action:function(){
        FlowLayout.render('layout',{sidebar: 'sidebar',main:'stage',cart: 'cart'});
    }
});
FlowRouter.route('/detail/:_id',{
    action:function(){
        FlowLayout.render('layout',{sidebar: 'sidebar',main:'detail',cart: 'cart'});
    }
});
