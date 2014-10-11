# API
<a name="module_gulp-dust-compile-render"></a>
#gulp-dust-compile-render
A gulp task to compile and render dust templates based on a provided context object.

**Params**

- context `Object` - Context object containing properties referenced in dust templates.
- opts `Object` - Task configuration options  
  - \[partialsGlob\] `string` - A glob pattern for the dust templates to be loaded as partials that can be referenced in dust templates  
  - \[preserveWhitespace\] `boolean` - Preserve whitespace in output  
  - \[ignoreUndefinedTags\] `boolean` - Ignore dust tags undefined in the context object.

**Returns**: `readable-stream/transform`  
**Example**  
 Given the dust file:

```js
//jshint ignore:start
var author = "{author}";
var name = "{name}";
var description = "{description}";
var version = "{version}";
```

When you pass the dust file to a `new GulpDustCompileRender()` using 'package.json' as context, and pipe it to a given destination.
NOTE: the context object will be set upon instantiating the function.  In the example below `new GulpDustCompileRender(context)` is compiled before the gulp pipe executes. If you change the context itself during the gulp pipe it will not be seen by `GulpDustCompileRender`.  To workaround this behaviour you can pass an object as the context and add/change properties of the object post instantiating the function but prior to executing the gulp pipe.

```js
var GulpDustCompileRender = require('gulp-dust-compile-render');
var context = JSON.parse(fs.readFileSync('package.json'));
gulp.src('local.dust')
.pipe(new GulpDustCompileRender(context))
.pipe(fs.createWriteStream('output.js'));
```

Then you'll get a compiled and rendered dust file:

```js
//jshint ignore:start
var author = "John Barry";
var name = "gulp-dust-compile-render";
var description = "A gulp task to compile and render dust templates based on a provided context object.";
var version = "0.0.0";
```



*documented by [jsdoc-to-markdown](https://github.com/75lb/jsdoc-to-markdown)*.