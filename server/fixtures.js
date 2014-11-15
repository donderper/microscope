if (Posts.find().count() === 0) { Posts.insert({
    title: 'Introducing Telescope',
    url: 'http://sachagreif.com/introducing-telescope/'
  });
  Posts.insert({
    title: 'Meteor',
    url: 'http://meteor.com'
});
  Posts.insert({
    title: 'The Meteor Book',
    url: 'http://themeteorbook.com'
}); }

if (DisplayStart.find().count() === 0){ DisplayStart.insert({
		displayStart: 'false'
	});
}
if (HasGameStarted.find().count() === 0){ HasGameStarted.insert({
		hasGameStarted: 'false'
	});
}