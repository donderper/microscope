Template.postItem.helpers({
	domain: function(){
		var a = document.createElement('a');
		a.href = this.url;
		return a.hostname;
	},
// 	Info.update({_id: "aEJrT8CFCkMHBLhZc"},{userDescription: 'tall, dark and hairy',
// displayStart: false})
	displayStart: function(){
		return DisplayStart.findOne().displayStart;
	}
});