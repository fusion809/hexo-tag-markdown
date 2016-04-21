# hexo-tag-markdown
This repository contains an attempt to allow the insertion of Liquid-like tags (of the form `{% include_markdown %}`) into Hexo blogs, in order to include content from other markdown files in markdown posts.

See [here](https://github.com/fusion809/hexo-site/blob/240c8f27b7bf31349d15fff3a1d05c061b40a4b1/source/_posts/free-operating-systems.md#footnotes) for an example of this plugin being used on an Hexo site, unsuccessfully as of commit aace790 of this repository. Namely this use generates errors of the form:

```bash
FATAL Something's wrong. Maybe you can find the solution here: http://hexo.io/docs/troubleshooting.html
Template render error: (unknown path) [Line 61, Column 2]
  unknown block tag: include_markdown                                                                                                                                                                 
    at Object.exports.prettifyError (/home/fusion809/GitHub/mine/hexo-site/node_modules/hexo/node_modules/nunjucks/src/lib.js:34:15)                                                                  
    at Obj.extend.render (/home/fusion809/GitHub/mine/hexo-site/node_modules/hexo/node_modules/nunjucks/src/environment.js:468:27)                                                                    
    at Obj.extend.renderString (/home/fusion809/GitHub/mine/hexo-site/node_modules/hexo/node_modules/nunjucks/src/environment.js:326:21)                                                              
    at /home/fusion809/GitHub/mine/hexo-site/node_modules/hexo/lib/extend/tag.js:66:9                                                                                                                 
    at Promise._execute (/home/fusion809/GitHub/mine/hexo-site/node_modules/hexo/node_modules/bluebird/js/release/debuggability.js:272:9)                                                             
    at Promise._resolveFromExecutor (/home/fusion809/GitHub/mine/hexo-site/node_modules/hexo/node_modules/bluebird/js/release/promise.js:473:18)                                                      
    at new Promise (/home/fusion809/GitHub/mine/hexo-site/node_modules/hexo/node_modules/bluebird/js/release/promise.js:77:14)                                                                        
    at Tag.render (/home/fusion809/GitHub/mine/hexo-site/node_modules/hexo/lib/extend/tag.js:64:10)                                                                                                   
    at Object.tagFilter [as onRenderEnd] (/home/fusion809/GitHub/mine/hexo-site/node_modules/hexo/lib/hexo/post.js:253:16)                                                                            
    at /home/fusion809/GitHub/mine/hexo-site/node_modules/hexo/lib/hexo/render.js:63:19                                                                                                               
    at tryCatcher (/home/fusion809/GitHub/mine/hexo-site/node_modules/hexo/node_modules/bluebird/js/release/util.js:16:23)                                                                            
    at Promise._settlePromiseFromHandler (/home/fusion809/GitHub/mine/hexo-site/node_modules/hexo/node_modules/bluebird/js/release/promise.js:502:31)                                                 
    at Promise._settlePromise (/home/fusion809/GitHub/mine/hexo-site/node_modules/hexo/node_modules/bluebird/js/release/promise.js:559:18)                                                            
    at Promise._settlePromise0 (/home/fusion809/GitHub/mine/hexo-site/node_modules/hexo/node_modules/bluebird/js/release/promise.js:604:10)                                                           
    at Promise._settlePromises (/home/fusion809/GitHub/mine/hexo-site/node_modules/hexo/node_modules/bluebird/js/release/promise.js:683:18)                                                           
    at Async._drainQueue (/home/fusion809/GitHub/mine/hexo-site/node_modules/hexo/node_modules/bluebird/js/release/async.js:138:16)                                                                   
    at Async._drainQueues (/home/fusion809/GitHub/mine/hexo-site/node_modules/hexo/node_modules/bluebird/js/release/async.js:148:10)                                                                  
    at Immediate.Async.drainQueues [as _onImmediate] (/home/fusion809/GitHub/mine/hexo-site/node_modules/hexo/node_modules/bluebird/js/release/async.js:17:14)                                        
    at tryOnImmediate (timers.js:534:15)                                                                                                                                                              
    at processImmediate [as _immediateCallback] (timers.js:514:5)                                                                                                                                     
FATAL (unknown path) [Line 61, Column 2]
  unknown block tag: include_markdown
Template render error: (unknown path) [Line 61, Column 2]
  unknown block tag: include_markdown                                                                                                                                                                 
    at Object.exports.prettifyError (/home/fusion809/GitHub/mine/hexo-site/node_modules/hexo/node_modules/nunjucks/src/lib.js:34:15)                                                                  
    at Obj.extend.render (/home/fusion809/GitHub/mine/hexo-site/node_modules/hexo/node_modules/nunjucks/src/environment.js:468:27)                                                                    
    at Obj.extend.renderString (/home/fusion809/GitHub/mine/hexo-site/node_modules/hexo/node_modules/nunjucks/src/environment.js:326:21)                                                              
    at /home/fusion809/GitHub/mine/hexo-site/node_modules/hexo/lib/extend/tag.js:66:9                                                                                                                 
    at Promise._execute (/home/fusion809/GitHub/mine/hexo-site/node_modules/hexo/node_modules/bluebird/js/release/debuggability.js:272:9)                                                             
    at Promise._resolveFromExecutor (/home/fusion809/GitHub/mine/hexo-site/node_modules/hexo/node_modules/bluebird/js/release/promise.js:473:18)                                                      
    at new Promise (/home/fusion809/GitHub/mine/hexo-site/node_modules/hexo/node_modules/bluebird/js/release/promise.js:77:14)                                                                        
    at Tag.render (/home/fusion809/GitHub/mine/hexo-site/node_modules/hexo/lib/extend/tag.js:64:10)                                                                                                   
    at Object.tagFilter [as onRenderEnd] (/home/fusion809/GitHub/mine/hexo-site/node_modules/hexo/lib/hexo/post.js:253:16)                                                                            
    at /home/fusion809/GitHub/mine/hexo-site/node_modules/hexo/lib/hexo/render.js:63:19                                                                                                               
    at tryCatcher (/home/fusion809/GitHub/mine/hexo-site/node_modules/hexo/node_modules/bluebird/js/release/util.js:16:23)                                                                            
    at Promise._settlePromiseFromHandler (/home/fusion809/GitHub/mine/hexo-site/node_modules/hexo/node_modules/bluebird/js/release/promise.js:502:31)                                                 
    at Promise._settlePromise (/home/fusion809/GitHub/mine/hexo-site/node_modules/hexo/node_modules/bluebird/js/release/promise.js:559:18)                                                            
    at Promise._settlePromise0 (/home/fusion809/GitHub/mine/hexo-site/node_modules/hexo/node_modules/bluebird/js/release/promise.js:604:10)                                                           
    at Promise._settlePromises (/home/fusion809/GitHub/mine/hexo-site/node_modules/hexo/node_modules/bluebird/js/release/promise.js:683:18)                                                           
    at Async._drainQueue (/home/fusion809/GitHub/mine/hexo-site/node_modules/hexo/node_modules/bluebird/js/release/async.js:138:16)                                                                   
    at Async._drainQueues (/home/fusion809/GitHub/mine/hexo-site/node_modules/hexo/node_modules/bluebird/js/release/async.js:148:10)                                                                  
    at Immediate.Async.drainQueues [as _onImmediate] (/home/fusion809/GitHub/mine/hexo-site/node_modules/hexo/node_modules/bluebird/js/release/async.js:17:14)                                        
    at tryOnImmediate (timers.js:534:15)                                                                                                                                                              
    at processImmediate [as _immediateCallback] (timers.js:514:5)
```

from running `hexo server -p 5000` from the root directory of said Hexo site. 
