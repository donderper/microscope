Router.configure({
	layoutTemplate: 'layout',
	loadingTemplate: 'loading',
	notFoundTemplate: 'notFound',
	//the only reason we're using waitOn here
	//is to be able to display the loading template
	//if the data hasn't been loaded into the db yet.
	//I'd like to know how else to subscribe to something
	//with the route function, also how does it know
	//that the uppercase Info is how I will access the collection?
	waitOn: function() {
		return [ Meteor.subscribe('posts'), 
		Meteor.subscribe('info') ];
	}
});

Router.route('/', {name: 'postsList'});
Router.route('/posts/:_id',{
	name: 'postPage',
	data: function() {
		return Posts.findOne(this.params._id);
	}
});
Router.route('/infotest',{
	//this is the name that will be used to find a matching template
	name : 'infoTest',
	data: function(){
		return Info.findOne();
	}
});
/*
//set up a html template called mystery_game.html
//use spacebars {{nameOfKey}} method to display
//specific parts of the data, with different
//ways to display each relevant piece.
//still curious how to access data
//like how does the mongoDB collection Posts
//get populated? we have to subscribe to the
//server collection posts, but then what.
//it's assigned using the server name to a client side
//collection
//Posts = new Mongo.Collection('posts');
Router.route('/henrytest',{
	name: 'mysteryGame',
	data: function() {
	return userInfo.findOne();
	}
});
*/

Router.onBeforeAction('dataNotFound',{only: 'postPage'});