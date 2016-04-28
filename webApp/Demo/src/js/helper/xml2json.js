// from jquery
var parseXML = function (data) {
	var xml, tmp;
		try {
			if ( window.DOMParser ) { // Standard
				tmp = new DOMParser();
				xml = tmp.parseFromString( data , "text/xml" );
			} else { // IE
				xml = new ActiveXObject( "Microsoft.XMLDOM" );
				xml.async = "false";
				xml.loadXML( data );
			}
		} catch( e ) {
			xml = undefined;
		}
		if ( !xml || !xml.documentElement || xml.getElementsByTagName( "parsererror" ).length ) {
			jQuery.error( "Invalid XML: " + data );
		}
		return xml;
}


/*
 * 将xml对象或xml字符串转成json格式
 * 不保留xml节点的属性值
 */
var xml2json = function(xml){
	if (!xml) {
		return xml;
	}

	// 如果是字符串 先转换成xml对象
	if (typeof xml === "string") {
		xml = parseXML(xml).documentElement;
	}

	var root = {},
		child = xml.childNodes;

	if (child.childElementCount === 0) {
		root[xml.nodeName] = xml.textContent;
	} else {
		root[xml.nodeName] = xmlloop(xml);
	}
	return root;

}

/*
 * 	递归子节点
 */
var xmlloop = function(xml){
	var result = {},
		node, // 当前节点
		child;

	for (var i = 0; i < xml.childNodes.length; i++) {
		node = xml.childNodes[i];
		if (node.nodeType === 1) {
			if (node.childElementCount === 0) {
				child = node.textContent;
			} else {
				child = xmlloop(node);
			}
			// 判断当前节点名称是否已经存在
			if (result.hasOwnProperty(node.nodeName)) {

				if (!Array.isArray(result[node.nodeName])) {
					// 将result[node.nodeName] 转成数组
					result[node.nodeName] = [].concat(result[node.nodeName])
				}
				result[node.nodeName].push(child);

			} else {
				result[node.nodeName] = child;
			}
		}
	}
	return result;
}



module.exports = xml2json;
