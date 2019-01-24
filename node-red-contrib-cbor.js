module.exports = function(RED) {
  var cb = require('cbor');
  var assert = require('assert');
  
  function CBORNode(config) {
    RED.nodes.createNode(this,config);
    var node = this;
    node.on('input', function(msg) {

      if(msg.payload.constructor.name == "Buffer"){
        //msg.payload = "CBOR decoding not yet implemented"
        msg.payload=cb.decode(new Buffer(msg.payload));        
      }else{
        msg.payload=cb.encode(msg.payload);        
      }
      node.send(msg);
    });
  }
  RED.nodes.registerType("CBOR",CBORNode);
}

