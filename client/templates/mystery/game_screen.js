Template.gameScreen.helpers({
// 	Info.update({_id: "aEJrT8CFCkMHBLhZc"},{userDescription: 'tall, dark and hairy',
// displayStart: false})
	gameHasStarted: function(){
		return HasGameStarted.findOne().displayStart;
	}
});