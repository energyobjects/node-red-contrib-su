var should = require("should");
var helper = require("node-red-test-helper");
var lowerNode = require("../suplane.js");

describe('suplane Node', function () {

	  afterEach(function () {
		      helper.unload();
		    });

	  it('should be loaded', function (done) {
		      var flow = [{ id: "n1", type: "suplane", name: "test name" }];
		      helper.load(lowerNode, flow, function () {
			            var n1 = helper.getNode("n1");
			            n1.should.have.property('name', 'test name');
			            done();
			          });
		    });

	  it('should make payload suplane', function (done) {
		      var flow = [{ id: "n1", type: "suplane", name: "test name",wires:[["n2"]] },
			          { id: "n2", type: "helper" }];
		      helper.load(lowerNode, flow, function () {
			            var n2 = helper.getNode("n2");
			            var n1 = helper.getNode("n1");
			            n2.on("input", function (msg) {
					            msg.should.have.property('payload', 'commands');
					            done();
					          });
			            n1.receive({ payload: "commands" });
			          });
		    });
});
