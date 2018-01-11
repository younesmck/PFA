FlowRouter.route('/encadrant',{
    name:'ajout',
    action:function(){
        BlazeLayout.render('layout',{sidebar: 'sidebar', main:'encadrant', cart: 'cart'});
    }
});
FlowRouter.route('/ajout',{
    name:'ajout',
    action:function(){
        BlazeLayout.render('layout',{sidebar: 'sidebar', main:'home', cart: 'cart'});
    }
});
FlowRouter.route('/liste',{
    action:function(){
        BlazeLayout.render('layout',{sidebar: 'sidebar',main:'liste',cart: 'cart'});
    }
});
FlowRouter.route('/stage/:_id',{
    action:function(){
        BlazeLayout.render('layout',{sidebar: 'sidebar',main:'stage',cart: 'cart'});
    }
});
FlowRouter.route('/detail/:_id',{
    action:function(){
        BlazeLayout.render('layout',{sidebar: 'sidebar',main:'detail',cart: 'cart'});
    }
});
FlowRouter.route('/',{
    action:function(){
        BlazeLayout.render('layout',{sidebar: 'sidebar',main:'dashboard',cart: 'cart'});
    }
});
