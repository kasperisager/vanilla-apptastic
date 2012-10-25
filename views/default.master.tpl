<!DOCTYPE html>
<html lang="en" class="no-js">
<head>
	{asset name="Head"}
</head>
<body id="{$BodyID}" class="{$BodyClass}">
	
	<noscript>
		
		<table height="100%" width="100%">
			<tbody><tr>
				<td align="center" valign="middle" style="vertical-align: middle;">
					<h1 id="l10n_title">Whooooops!</h1>
					<div class="sorry" style="width:300px;">
						<p id="l10n_line_1">
							Looks like you've disabled Javascript in your browser.
						</p>
						<p id="l10n_line_2">
							<a href="https://support.google.com/adsense/bin/answer.py?hl=en&answer=12654">
								Please enable it again!
							</a>
						</p>
					</div>
				</td>
			</tr>
		</tbody></table>
	
	</noscript>
	
	<div id="Frame">
		<header id="header">
			<div class="navbar">
				<div class="navbar-inner">
					<div class="container">
						<a class="brand" href="/">{logo}</a>
						{searchbox}
						<ul class="nav">
							<!-- {dashboard_link} -->
							{discussions_link}
							{activity_link}
							<!-- {inbox_link} -->
							{custom_menu}
							<!-- {profile_link}
							{signinout_link}  -->
						</ul>
						<ul class="nav pull-right">
							{if $User.SignedIn}
							<li class="MeBoxWrap">
								{module name="MeModule"}
							</li>
							<li>
								{link path="signinout"}
							</li>
							</li>
							{/if}
							{if !$User.SignedIn}
							<li>
								<a href="{link path="/entry/register"}"> 
									<i class="icon-edit"></i> Sign up
								</a>
							</li>
							<li>
								<a href="{link path="/entry/signin"}">Have an account? 
									<i class="icon-share-alt"></i> Sign in
								</a>
							</li>
							{/if}
						</ul>
					</div>
				</div>
			</div>
		</header>
		<section id="page-header" class="toolbar">
			<!--<a href="/account/projects/new/" class="btn pull-right btn-primary">Create a new project</a>-->
			<ul class="breadcrumb">
				{breadcrumbs}
			</ul>
		</section>
		<section id="content" class=" with-left-sidebar">
			<div class="container">
				<div class="content">
					<div id="messages"></div>
					<div class="main">
						<section class="body">
							{asset name="Content"}
						</section>
					</div>
					<div class="sidebar">
						{asset name="Panel"}
					</div>
				</div>
			</div>
		</section>
		<footer>
			<div class="container">
				Apptastic [<a>Work title</a>] | A super sleek and modern interface for <a href="http://vanillaforums.org/">Vanilla Forums</a> | Made by <a href="http://github.com/kasperisager">Kasper K. Isager</a>
				{asset name="Foot"}
			</div>
		</footer>
	</div>
	{event name="AfterBody"}
</body>
</html>