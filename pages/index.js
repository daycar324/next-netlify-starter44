import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
<head>
<base target="_self">
<meta name="viewport" content="width=device-width, initial-scale=1.0"/>
<link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/css/materialize.min.css">
<script type = "text/javascript"
src = "https://code.jquery.com/jquery-2.1.1.min.js"></script> 
<script src="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/js/materialize.min.js"></script>

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
<p> Enter the approriate student's date of birth, grade level and doses below to get immunization compliance status by vaccine
<br> Calcutions below are based on School District of Philadelphia Immunization Rules.</p> 



<div class="row">
<div class="col s6">
<label><h5><b>Date of Birth</b></h5></label> 
<input type="date"  id="bday" name="birthday">   
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
<hr>

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
