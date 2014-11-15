// Meteor.publish('posts', function(){
// 	return Posts.find();
// });

// Meteor.publish('info', function(){
// 	return Info.find();
// });
//Meteor.call('')
Meteor.startup(function() {

    return Meteor.methods({

      removeAllInfo: function() {

        return Info.remove({});

      },

      getInfo: function() {
        var ipAddresses = Info.find().fetch();
        console.log( ipAddresses );
      },

      getClientIP: function(){
      	var ip = "0.0.0.0";
      	if(Meteor.isServer){
	      		ip = this.connection.clientAddress;
	      }
	    // if(Info.find({ipAddress: ip}) == false){
	      // console.log("what is going on")

        //couldn't think of a better way to do this
        //remove all instances existing
        //insert one, prevents all possibility of
        // duplicates
        Info.remove({ipAddress: ip});
        Info.insert({ipAddress: ip, receiverIP: "", giverIP: ""});
      // }
  		// console.log("am i even here",ip)
      // console.log("this is my ipaddress",ip)
      return ip;
  		}

    });

  });


