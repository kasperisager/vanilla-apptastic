<?php if (!defined("APPLICATION")) exit();

// Development mode
// ----------------------------------------
// require "assets.php";

// Initialize themehooks
// ----------------------------------------
class ApptasticThemeHooks implements Gdn_IPlugin {
	
	public function Setup() {
		return TRUE;
	}

	public function OnDisable() {
		return TRUE;
	}

}