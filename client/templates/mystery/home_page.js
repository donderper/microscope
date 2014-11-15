Template.homePage.helpers({
// 	Info.update({_id: "aEJrT8CFCkMHBLhZc"},{userDescription: 'tall, dark and hairy',
// displayStart: false})
	displayStart: function(){
		return DisplayStart.findOne().displayStart;
	}
});