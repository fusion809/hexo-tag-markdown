var fs   = require('fs'),
  path = require('path'),
  marked = require('markdown-it');
/**
 * Include markdown tag
 *
 * Syntax:
 *   {% include_markdown path/to/file %}
 */

var mdTagFun= function(args, content){
	var render = hexo.render,
	  	sourceDir = hexo.source_dir,
		arg = args.join(' ');

	arg += ".md";
	var local = path.join(sourceDir, arg);

	// Exit if the source file doesn't exist
	if (!fs.existsSync(local)) return local;

	var data = {};
	data.content = fs.readFileSync(local, 'utf8');

	return marked(data.content)
};
hexo.extend.tag.register('include_markdown', mdTagFun);
