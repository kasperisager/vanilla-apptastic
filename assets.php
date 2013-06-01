<?php if (!defined("APPLICATION")) exit();

// Composer autoload
// ----------------------------------------

require "vendor/autoload.php";

// Manage filters
// ----------------------------------------

use Assetic\Asset\AssetCollection;
use Assetic\Asset\FileAsset;
use Assetic\Asset\GlobAsset;
use Assetic\Filter\LessphpFilter;
use Assetic\Filter\GoogleClosure;

// Manage stylesheets
// ----------------------------------------

$css = new AssetCollection(array(

	new FileAsset(__DIR__."/src/less/custom.less",
		array(
			new LessphpFilter()
		)
	)
	
));

$css = $css->dump();
file_put_contents(__DIR__."/src/sass/sentry/_sentry.scss", $css);

// Manage Javascript
// ----------------------------------------

$js = new AssetCollection(array(
	
	new FileAsset(__DIR__."/src/javascript/custom.js",
	array(
			//new GoogleClosure\CompilerApiFilter()
		)
	),
	
	new GlobAsset(__DIR__."/src/javascript/apptastic/_*.js",
		array(
			//new GoogleClosure\CompilerApiFilter()
		)
	),

	new GlobAsset(__DIR__."/src/javascript/plugins/*.js",
		array(
			//new GoogleClosure\CompilerApiFilter()
		)
	),

	new GlobAsset(__DIR__."/src/javascript/bootstrap/*.js",
		array(
			//new GoogleClosure\CompilerApiFilter()
		)
	)
	
));

$js = $js->dump();
file_put_contents(__DIR__."/js/custom.js", $js);