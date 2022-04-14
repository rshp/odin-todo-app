const PubSub = require('pubsub-js');

var mySubscriber = function (msg, data) {
	console.log(msg, data);
};
var token = PubSub.subscribe('a.1', mySubscriber);
// PubSub.publish('a', 'test a');
// PubSub.publish('b', 'test b');
PubSub.publish('a.1', 'test a.1');
PubSub.publish('b.1', 'test b.1');
PubSub.publish('a.2', 'test a.2');
PubSub.publish('b.2', 'test b.2');
