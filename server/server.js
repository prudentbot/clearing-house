if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
    	var intro = {id: 0,
    							 title: "Intro to Clearing House",
    							 body: "Welcome to Clearing House!\
    							 				This is the app that let's you create pages for things\
    							 				and vote on those pages. If you are just getting started, good!"}


    Articles.insert({id: intro.id,
    								 title: intro.title,
    								 body: intro.body,
    								 createdAt: new Date()});
  });

}