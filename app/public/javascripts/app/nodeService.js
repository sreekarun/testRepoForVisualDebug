//Node Service

window.NodeService = (function(window, document, nodeService){

	function _getNodes(rootStr, whatToShow, filter){
		var root,
			treeWalker,
			nodeList= [];
		if(rootStr){
			root = document.querySelector(rootStr);
		}else{
			root = document.body;
		}

		treeWalker = document.createTreeWalker(root, whatToShow, filter);

		while(treeWalker.nextNode()){
			nodeList.push(_getNodeDetails(treeWalker.currentNode));
		}

		return nodeList;


	}

	function _getNodeDetails(Node){
		return {
			"nodeName" : Node.nodeName,
			"nodeType" : Node.nodeType,
			"nodeValue" : Node.nodeValue,
			"accessKey" : Node.accessKey,
			"childElementCount" : Node.childElementCount,
			/*"childNodes" : _getChildNodes(Node.childNodes), //http://stackoverflow.com/questions/7935689/what-is-the-difference-between-children-and-childnodes-in-javascript*/
			"className" : Node.className,
			"clientWidth" : Node.clientWidth,
			"clientHeight" : Node.clientHeight,
			"clientTop" : Node.clientTop,
			"clientLeft" : Node.clientLeft
		}
	}

	function _getChildNodes(childNodesCollection){
		var nodesList = [];


	}

	return {
		getCommentNodes : function(){
			return _getNodes('body', NodeFilter.SHOW_COMMENT);
		},
		getElementNodes : function(tagName, filter){
			return _getNodes(tagName, NodeFilter.SHOW_ELEMENT, filter );
		},
		getTextNodes : function(){

		},
		getChildNodesCount : function(){
			var count;
			return count;
		},
		getAllNodes : function(){
			return _getNodes();
		},
		getAllNodesCount : function(){

		}

	}

})(window, document)


