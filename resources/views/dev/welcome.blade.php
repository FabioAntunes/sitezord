<!doctype html>
<html ng-app="sitezord">
<head>
    <meta charset="utf-8">
    <title>sitezord</title>
    <meta name="description" content="">
    <meta name="viewport" content="width=device-width">
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.4.0/css/font-awesome.min.css">
    <!-- Place favicon.ico and apple-touch-icon.png in the root directory -->
    <!-- build:css({.tmp/serve,src}) styles/vendor.css -->
    <!-- bower:css -->
    <link rel="stylesheet" href="/bower_components/toastr/toastr.css" />
    <link rel="stylesheet" href="/bower_components/animate.css/animate.css" />
    <!-- endbower -->
    <!-- endbuild -->

    <!-- build:css({.tmp/serve,src}) styles/app.css -->
    <!-- inject:css -->
    <!-- css files will be automatically insert here -->
    <!-- endinject -->
    <!-- endbuild -->
</head>
<body>
<!--[if lt IE 10]>
<p class="browsehappy">You are using an <strong>outdated</strong> browser. Please <a href="http://browsehappy.com/">upgrade your browser</a> to improve your experience.</p>
<![endif]-->

<div ui-view></div>

<!-- build:js(src) scripts/vendor.js -->
<!-- bower:js -->
<script src="/bower_components/jquery/dist/jquery.js"></script>
<script src="/bower_components/angular/angular.js"></script>
<script src="/bower_components/angular-animate/angular-animate.js"></script>
<script src="/bower_components/angular-cookies/angular-cookies.js"></script>
<script src="/bower_components/angular-touch/angular-touch.js"></script>
<script src="/bower_components/angular-ui-router/release/angular-ui-router.js"></script>
<script src="/bower_components/bootstrap-sass-official/assets/javascripts/bootstrap.js"></script>
<script src="/bower_components/angular-bootstrap/ui-bootstrap-tpls.js"></script>
<script src="/bower_components/malarkey/dist/malarkey.min.js"></script>
<script src="/bower_components/toastr/toastr.js"></script>
<script src="/bower_components/moment/moment.js"></script>
<!-- endbower -->
<!-- endbuild -->

<!-- build:js({.tmp/serve,.tmp/partials,src}) scripts/app.js -->
<!-- inject:js -->
<!-- js files will be automatically insert here -->
<!-- endinject -->
<!-- endbuild -->

</body>
</html>
