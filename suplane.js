module.exports = function(RED) {
    function SUPLANENode(config) {
        RED.nodes.createNode(this,config);
        this.npl = config.npl;
        this.nt = config.nt;
        var node = this;
        node.on('input', function(msg) {
            msg.payload.commands = msg.payload.commands || [];
            msg.payload.commands.push('suplane npl=' + node.npl + ' nt=' + node.nt);
            node.send(msg);
        });
    }
    
	RED.nodes.registerType("suplane",SUPLANENode);
}
