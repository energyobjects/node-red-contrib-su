module.exports = function(RED) {
    function SUSYNLVNode(config) {
        RED.nodes.createNode(this,config);
        this.nt = config.nt;
        var node = this;
        node.on('input', function(msg) {
            msg.payload.commands = msg.payload.commands || [];
            msg.payload.commands.push('susynlv nt=' + node.nt);
            node.send(msg);
        });
    }
    
	RED.nodes.registerType("susynlv",SUSYNLVNode);
}
