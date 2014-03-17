<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    {asset name="Head"}

    <link href="//fonts.googleapis.com/css?family=Lato:300,400,700,300italic,400italic,700italic" rel="stylesheet" type="text/css">

    <!-- HTML5 Shim and Respond.js IE8 support of HTML5 elements and media queries -->
    <!-- WARNING: Respond.js doesn't work if you view the page via file:// -->
    <!--[if lt IE 9]>
      <script src="https://oss.maxcdn.com/libs/html5shiv/3.7.0/html5shiv.js"></script>
      <script src="https://oss.maxcdn.com/libs/respond.js/1.4.2/respond.min.js"></script>
    <![endif]-->
  </head>
  <body id="{$BodyID}" class="{$BodyClass}">

    <nav class="navbar navbar-default navbar-static-top" role="navigation">
      <div class="container-fluid">
        <div class="navbar-header">
          <a class="navbar-brand" href="{link path="home"}">{logo}</a>
        </div>
      </div>
    </nav>

    <div class="page-wrap">

      <nav class="page-toolbar" role="navigation">
        {module name="SiteNavModule" cssClass="nav"}
      </nav>

      <aside class="page-sidebar" role="complementary">
        {asset name="Panel"}
      </aside>

      <main class="page-content-outer" role="main">
        <div class="page-title-outer">
          <div class="page-title js-page-title">{$Title}</div>
        </div>
        <div class="page-content-inner">
          <div class="page-content">
            {asset name="Content"}
          </div>
        </div>
      </main>

    </div>

    {asset name="Foot"}
    {event name="AfterBody"}

  </body>
</html>
