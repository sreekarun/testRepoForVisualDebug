//app.js
window.onload = onLoad;
var nodes,
	divNodes,
	commentNodes;

function onLoad(){
	nodes = NodeService.getAllNodes();
	commentNodes = NodeService.getCommentNodes();
	console.log(commentNodes, 'commentNodes')
	divNodes = NodeService.getElementNodes('body',{
    		acceptNode : function(node){ return node.nodeName === "DIV"; }
    	});
	console.log('divNodes',divNodes)
}