Meteor.publish('posts', function(){
	return Posts.find();
});

Meteor.publish('info', function(){
	return Info.find();
});