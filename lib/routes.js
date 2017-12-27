FlowRouter.route('/test',{
    action:function(){
        FlowLayout.render('layout',{sidebar: 'sidebar', main:'home', cart: 'cart'});
    }
});
FlowRouter.route('/modifier',{
    action:function(){
        FlowLayout.render('layout',{sidebar: 'sidebar',main:'modifier',cart: 'cart'});
    }
})