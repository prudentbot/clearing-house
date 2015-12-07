Template.user.helpers({
  userArticles:function(){
    //todo: change to be more selective.
    console.log(Template.currentData())
    return Articles.find({username:Template.currentData().username});
  }
});
