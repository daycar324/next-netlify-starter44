import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
<head>
    <meta charSet="utf-8" />
    <meta name="viewport" content="width=device-width" />
    <title>Next.js Starter!</title>
    <link rel="icon" href="/favicon.ico" />
    <meta name="next-head-count" content="4" />
    <link rel="preload" href="/_next/static/css/921ec2eac5cd9779.css" as="style" crossorigin="" />
    <link rel="stylesheet" href="/_next/static/css/921ec2eac5cd9779.css" crossorigin="" data-n-g="" />
    <link rel="preload" href="/_next/static/css/cb165e32f86afbae.css" as="style" crossorigin="" />
    <link rel="stylesheet" href="/_next/static/css/cb165e32f86afbae.css" crossorigin="" data-n-p="" /><noscript
        data-n-css=""></noscript>
    <script defer="" crossorigin="" nomodule="" src="/_next/static/chunks/polyfills-c67a75d1b6f99dc8.js"></script>
    <script src="/_next/static/chunks/webpack-fd8027ecb5121007.js" defer="" crossorigin=""></script>
    <script src="/_next/static/chunks/framework-bbecb7d54330d002.js" defer="" crossorigin=""></script>
    <script src="/_next/static/chunks/main-35dd51a4ebea5223.js" defer="" crossorigin=""></script>
    <script src="/_next/static/chunks/pages/_app-ba0fcf773e94f4d3.js" defer="" crossorigin=""></script>
    <script src="/_next/static/chunks/pages/index-976dd2d78ffa8952.js" defer="" crossorigin=""></script>
    <script src="/_next/static/dq6XpnKMJfk_ujrGOGRtQ/_buildManifest.js" defer="" crossorigin=""></script>
    <script src="/_next/static/dq6XpnKMJfk_ujrGOGRtQ/_ssgManifest.js" defer="" crossorigin=""></script>
</head>
<main>

<nav>
<div class="nav-wrapper blue darken-2">
<a href="#" class="brand-logo blue darken-2">Logo</a>
<ul id="nav-mobile" class="right hide-on-med-and-down blue darken-2">
<li><a href="<?= ScriptApp.getService().getUrl();?>" class="waves-effect waves-light btn">Home <i class="material-icons right">home</i></a></li>
<li><a href="<?= ScriptApp.getService().getUrl();?>?v=about" class="waves-effect waves-light btn">About <i class="material-icons right">domain</i></a></li>
<li><a href="<?= ScriptApp.getService().getUrl();?>?v=form" class="waves-effect waves-light btn">More... <i class="material-icons right">healing</i></a></li>
<label class="label-icon" for="search"><i class="material-icons">search</i></label>
</ul>
</div>
</nav>



<div class="container">
<h2> Immunization Compliance Calculator</h2>
<p> Enter the appropriate student's date of birth, grade level and doses below to get immunization compliance status by vaccine
Calculations below are based on School District of Philadelphia Immunization Rules.</p> 



<div class="row">
<div class="col s6">
<label><h5><b>Date of Birth</b></h5></label> 
<input type="date"  id="bday" name="birthday"/>   
</div>

<div class="col s6">
<label><h5><b>Grade Level</b></h5></label>
<select class="browser-default" id="gradeLevel" required>
<option value="" disabled selected>Select Student Grade</option>
<option>0</option>                
<option>1</option>
<option>2</option>
<option>3</option>
<option>4</option>
<option>5</option>                
<option>6</option>
<option>7</option>
<option>8</option>
<option>9</option>
<option>10</option>                
<option>11</option>
<option>12</option>
</select>
</div>
</div>




<h4>Simple Accordion</h4>
<ul class = "collapsible" data-collapsible = "accordion">
<li>
<div class = "collapsible-header">
<i class = "material-icons">filter_drama</i> <b>Hep B</b> </div>
<div class = "collapsible-body">

<div class="row">

<div class="form-group name1 col-md-3">
<p class="solid" id="result"></p>
<p class="solid" id="interval"></p>            
</div>

</div>

<div class="row">

<div class="input-field col s3"> 

<label>Dose 1: </label><input type="date" placeholder="Enter dose 1 date" id="dose1" value="" />
</div>

<div class="input-field col s3"> 

<label>Dose 2: </label><input type="date" placeholder="Enter dose 2 date" id="dose2" value="" />
</div>

<div class="input-field col s3"> 

<label>Dose 3: </label><input type="date" placeholder="Enter dose 3 date" id="dose3" value="" />
</div>

<div class="input-field col s3"> 

<label>Dose 4: </label><input type="date" placeholder="Enter dose 4 date" id="dose4" value="" />
</div>
<hr />
</div>




</div>
</li>

<li>
<div class = "collapsible-header">
<i class = "material-icons">place</i>Second Section</div>
<div class = "collapsible-body"><p>This is second section.</p></div>
</li>

<li>
<div class = "collapsible-header">
<i class = "material-icons">whatshot</i>Third Section</div>
<div class = "collapsible-body"><p>This is third section.</p></div>
</li>
</ul>


<div class="row"> 
<button  id="btn" class="btn waves-effect waves-light blue darken-2" type="submit" name="action">Get Hep B Compliance Status
  </button>
<button onclick="hepB()">Get Hep B Compliance Status</button> 
</div> 

</div>






</main>



      <Footer />
    </div>
  )
}
