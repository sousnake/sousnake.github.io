$(function() {
function logClicks(a,t){clickLocations.push({x:a,y:t}),console.log("x location: "+a+"; y location: "+t)}function initializeMap(){function a(){var a=[];a.push(bio.contacts.location);for(var t in education.schools)a.push(education.schools[t].location);for(var e in work.jobs)a.push(work.jobs[e].location);return a}function t(a){var t=a.geometry.location.lat(),e=a.geometry.location.lng(),s=a.formatted_address,o=window.mapBounds,n=new google.maps.Marker({map:map,position:a.geometry.location,title:s}),i=new google.maps.InfoWindow({content:s});google.maps.event.addListener(n,"click",function(){i.open(map,n)}),o.extend(new google.maps.LatLng(t,e)),map.fitBounds(o),map.setCenter(o.getCenter())}function e(a,e){e==google.maps.places.PlacesServiceStatus.OK&&t(a[0])}function s(a){var t=new google.maps.places.PlacesService(map);for(var s in a){var o={query:a[s]};t.textSearch(o,e)}}var o,n={disableDefaultUI:!0};map=new google.maps.Map(document.querySelector("#map"),n),window.mapBounds=new google.maps.LatLngBounds,o=a(),s(o)}var HTMLheaderName='<h1 id="name">%data%</h1>',HTMLheaderRole="<span>%data%</span><hr/>",HTMLcontactGeneric='<li class="flex-item"><span class="orange-text">%contact%</span><span class="white-text">%data%</span></li>',HTMLmobile='<li class="flex-item"><span class="orange-text">mobile</span><span class="white-text">%data%</span></li>',HTMLemail='<li class="flex-item"><span class="orange-text">email</span><span class="white-text">%data%</span></li>',HTMLtwitter='<li class="flex-item"><span class="orange-text">twitter</span><span class="white-text">%data%</span></li>',HTMLgithub='<li class="flex-item"><span class="orange-text">github</span><span class="white-text">%data%</span></li>',HTMLblog='<li class="flex-item"><span class="orange-text">blog</span><span class="white-text">%data%</span></li>',HTMLlocation='<li class="flex-item"><span class="orange-text">location</span><span class="white-text">%data%</span></li>',HTMLbioPic='<img src="%data%" class="biopic">',HTMLWelcomeMsg='<span class="welcome-message">%data%</span>',HTMLskillsStart='<h3 id="skillsH3">Skills at a Glance:</h3><ul id="skills" class="flex-box"></ul>',HTMLskills='<li class="flex-item"><span class="white-text">%data%</span></li>',HTMLworkStart='<div class="work-entry"></div>',HTMLworkEmployer='<a href="#">%data%',HTMLworkTitle=" - %data%</a>",HTMLworkDates='<div class="date-text">%data%</div>',HTMLworkLocation='<div class="location-text">%data%</div>',HTMLworkDescription="<p><br>%data%</p>",HTMLprojectStart='<div class="project-entry"></div>',HTMLprojectTitle='<a href="#">%data%</a>',HTMLprojectDates='<div class="date-text">%data%</div>',HTMLprojectDescription="<p><br>%data%</p>",HTMLprojectImage='<img src="%data%" style="width:45%">',HTMLschoolStart='<div class="education-entry"></div>',HTMLschoolName='<a href="#">%data%',HTMLschoolDegree=" -- %data%</a>",HTMLschoolDates='<div class="date-text">%data%</div>',HTMLschoolLocation='<div class="location-text">%data%</div>',HTMLschoolMajor="<em><br>Major: %data%</em>",HTMLonlineClasses="<h3>Online Classes</h3>",HTMLonlineTitle='<a href="#">%data%',HTMLonlineSchool=" - %data%</a>",HTMLonlineDates='<div class="date-text">%data%</div><br>',HTMLonlineURL='<br><a href="#">%data%</a>',internationalizeButton="<button>Internationalize</button>",googleMap='<div id="map"></div>';$(document).ready(function(){$("button").click(function(){var a=$("#name").html()||"",t=inName(a)||function(){};$("#name").html(t)})}),clickLocations=[],$(document).click(function(a){logClicks(a.pageX,a.pageY)});var map;window.addEventListener("load",initializeMap),window.addEventListener("resize",function(a){map.fitBounds(mapBounds)});
var bio = {
	"name" : "Sourabh Maheshwari",
	"role" : "Software Engineer / Web Developer",
	"contacts" : {
		"mobile" : "+91 7568245457",
		"email" : "saurabhm@iitj.ac.in",
		"github" : "sousnake",
		"location" : "Bangaluru, India"	
	},
	"welcomeMessage" : "Hi everyone, I am Software Engineer with about 2 years of experience in field of Software Development. "+
						"Fascinated by web technologes, my current endeavor is to build dynamic and responsive websites to add to my "+
						"portfolio. I'm very passionate about programming and curious to know more about newer technologies."+
						"<br> My hobbies are playing computer games (CS 1.6, CS GO), listening music and doing card tricks.",
	"skills" : ["JAVA/J2EE", "C++", "Spring Framework", "Hibernate", "Mybatis", "HTML/CSS/JS", "AngularJS", "PHP", "DB2/SYBASE/MongoDB", "Android" ],
	"image" : "images/me2.jpg",
	display : function() {
		var formattedName = HTMLheaderName.replace("%data%",bio.name);
		var formattedRole = HTMLheaderRole.replace("%data%",bio.role);
		var formattedImage = HTMLbioPic.replace("%data%",bio.image);
		var formattedMessage = HTMLWelcomeMsg.replace("%data%",bio.welcomeMessage);

		$("#header").prepend(formattedRole).prepend(formattedName).append(formattedImage,formattedMessage);
		$("#header").append('<br><br><hr><br>');

		$("#header").append(HTMLskillsStart);

		for(skill in bio.skills) {
			var formattedSkills = HTMLskills.replace("%data%",bio.skills[skill]);
			$("#skills").append(formattedSkills);
		};

		
		var formattedMobile = HTMLmobile.replace("%data%",bio.contacts.mobile);
		var formattedEmail = HTMLemail.replace("%data%",bio.contacts.email);
		var formattedgithub = HTMLgithub.replace("%contact%","skype").replace("%data%",bio.contacts.github);
		var formattedlocation = HTMLlocation.replace("%contact%","skype").replace("%data%",bio.contacts.location);
		//$("#footerContacts").append(formattedMobile,formattedEmail,formattedSkype);
		$("#footerContacts").append(formattedMobile,formattedEmail,formattedgithub,formattedlocation);		
	}
}

var work = {
 	"jobs" : [
 		{
			"title" : "Senior Analyst",
			"employer" : "Morgan Stanley Advantages Services",
			"dates" : "August 2014 - Present",
			"location" : "Bangaluru",
			"description" : "Working as Java Developer on Distributed Side in Gain & Loss in Core Processing.<br>"+
				"Abstaction Layer : To reduce dependence on mainframe as part of the strategic initiatives at Morgan Stanley, Abstraction Layer is built. This is a distributed application whose processing power and speed would match that of the Mainframe. In the long run, this application would facilitate the move away from Mainframe based Tax Computation Engine to a distributed Gain-Loss system."+
				"<br>Recon Tool: Developed a reconciliation application which does a differential analysis using tokens. Java, JavaScript, AJAX, iBatis"+
				"were the technologies used. This tool was needed to reconciliate files from different sources and fix the breaks automatically.<br>"+
				"ProductSyncer: Redeveloped an existing ProductSyncer application to improve performance for handling bulk product request. It "+
				"was also configured to support sophisticated configurations for product update from different external source.",
			"url" : "http://www.morganstanley.com/about-us/global-offices/india"
		},
		{
			"title" : "Internship",
			"employer" : "Tata Consultancy Services",
			"dates" : "May 2013 - July-2013",
			"location" : "Bangaluru",
			"description" : "Implementing the Finite Automaton in Java. Is basically builds NFA from a given regular expressions and then constructs DFA from it."+
				"Applied the algorithms for converting FA to CFG, minimizing FA, NFA to DFA, combingin DFA and many others studied in Theory of Computation in a much practical manner on a working model.<br> Also implemented attribute "+ 
				"based encryption scheme in Java, building public key generators and access tree structures. This part was related"+ 
				"to number theory of random numbers and prime numbers. In ABE basically identity is not atomic but as a set of attributes, "+
				"e.g., roles, and messages encrypted with respect to subsets of attributes (key-policy ABE - KP-ABE) or policies defined over "+
				"a set of attributes (ciphertext-policy ABE - CP-ABE). The key is, that someone should only be able to decrypt a ciphertext if "+
				"the person holds a key for matching attributes (more below) where user keys are always issued by some trusted party.",
			"url" : "http://www.tcs.com/Pages/default.aspx"	
		}
	],
	display : function (){
		for(job in work.jobs){
			$('#workExperience').append(HTMLworkStart);
			var formattedJobTitle = HTMLworkTitle.replace('%data%',work.jobs[job]["title"]);
			var formattedJobEmployer = HTMLworkEmployer.replace('%data%',work.jobs[job]["employer"]);
			formattedJobEmployer = formattedJobEmployer.replace("#",work.jobs[job]["url"]);
			var formattedJobDates = HTMLworkDates.replace('%data%',work.jobs[job]["dates"]);
			var formattedJobLocation = HTMLworkLocation.replace('%data%',work.jobs[job]["location"]);
			var formattedJobDescription = HTMLworkDescription.replace('%data%',work.jobs[job]["description"]);
			$('.work-entry:last').append(formattedJobEmployer+formattedJobTitle+formattedJobDates+formattedJobLocation+formattedJobDescription);
		}
	}
}


var education  = {

	"schools" : [
		{
			"name" : "INDIAN INSTITUTE OF TECHNOLOGY JODHPUR",
			"location" :"Jodhpur",
			"degree" : "B. Tech",
			"majors" : ["Computer Science"],
			"dates" : "2010 - 2014",
			"url" : "http://www.iitj.ac.in/"
		},
		{
			"name" : "MAHESHWARI PUBLIC SCHOOL",
			"location" :"Jaipur",
			"degree" : "High School",
			"majors" : ["P.C.M."],
			"dates" : "2008 - 2010",
			"url" : "http://www.mpsjaipur.com/"
		}
	 ],
	"onlineCourses" : [
		{
			"title": "Developing Android Apps",
			"school" : "Udacity",
			"dates" : "Aug -2015",
			"url" : "https://www.udacity.com/course/developing-android-apps--ud853"
		},
		{
			"title": "Developing Scalable Apps in Java",
			"school" : "Udacity",
			"dates" : "Feb - 2016",
			"url" : "https://www.udacity.com/course/developing-scalable-apps-in-java--ud859"
		},
		{
			"title": "Algorithms Part 1",
			"school" : "Coursera",
			"dates" : "May - 2015",
			"url" : "https://www.coursera.org/course/algs4partI"
		},
		{
			"title": "Algorithms Part 2",
			"school" : "Coursera",
			"dates" : "Nov - 2015",
			"url" : "https://www.coursera.org/course/algs4partII"
		}
		,
		{
			"title": "Web Development",
			"school" : "Udacity",
			"dates" : "Dec - 2015",
			"url" : "https://www.udacity.com/course/web-development--cs253"
		}		
	],
	display : function() {
		for(school in education.schools) {
			$("#education").append(HTMLschoolStart);
			
			var formattedName = HTMLschoolName.replace("%data%",education.schools[school].name);
			formattedName = formattedName.replace("#",education.schools[school].url);
			var formattedDegree = HTMLschoolDegree.replace("%data%",education.schools[school].degree);
			var formattedDates = HTMLschoolDates.replace("%data%",education.schools[school].dates);
			var formattedLocation = HTMLschoolLocation.replace("%data%",education.schools[school].location);
			var formattedMajor = HTMLschoolMajor.replace("%data%",education.schools[school].majors);
			$(".education-entry:last").append(formattedName + formattedDegree,formattedDates,formattedLocation,formattedMajor);

		}

		$(".education-entry:last").append(HTMLonlineClasses);
		for(onlineCourse in education.onlineCourses) {
			var formattedTitle = HTMLonlineTitle.replace("%data%",education.onlineCourses[onlineCourse].title);
			var formattedSchool = HTMLonlineSchool.replace("%data%",education.onlineCourses[onlineCourse].school);
			var formattedDates = HTMLonlineDates.replace("%data%",education.onlineCourses[onlineCourse].dates);
			formattedTitle = formattedTitle.replace("#",education.onlineCourses[onlineCourse].url);
			$(".education-entry:last").append(formattedTitle+formattedSchool+formattedDates);
			//$(".education-entry:last").append(formattedDates);
	//
		}
	}
}

var projects = {
	"projects" : [
		{
			"title" : "Resume Uploading Portal",
			"dates" : "March - 2013",
			"description" : "This project is a SPC portal managing student resume. Students can register on site and upload their resume as "+
					"excel file with format specified on webpage or can fill it via form. Students can update their resume anytime as "+
					"well as upload their image. It uses phpexcel to retreive information from excel and update excel as well. Site maintains student "+
					"files in a dynamic folder created at time of uploading. JavaScript used for validation and CSS used for styles and php for backend."+
						" Also admin can login and can view students resume.",
			"url" : "https://github.com/sousnake/resume-uploading-portal",			
			"images" :  ["images/home.png","images/viewresume.png"]
		},
		{
			"title" : "Cab Booking Service",
			"dates" : "October - 2014",
			"description" : "The cab booking service is a service providing application which help user book available cabs.The cab provider "+ 
					"register his cars and maintain their details whereas users can also maintain their account and all services. The details"+ 
					"are maintained in database implemented by SQL. Also new car registration and new user registration can be done, "+
					"the current can be reset to nil. It also calculate the optimum path for reaching the destination and tell custmor "+
					"that the car is availible or not, and if it is availible how much time it will take and cost of serice." ,
			"url" : "https://github.com/sousnake/cab-booking-service",		
			"images" :  ["images/carregistration.png","images/city.png"]
		}
	],
	display : function(){
		for(project in projects.projects){
			$('#projects').append(HTMLprojectStart);
			var title = HTMLprojectTitle.replace('%data%',projects.projects[project]['title']);
			title = title.replace("#",projects.projects[project]["url"]);
			$('.project-entry:last').append(title);
			var dates = HTMLprojectDates.replace('%data%',projects.projects[project]['dates']);
			$('.project-entry:last').append(dates);
			var description = HTMLprojectDescription.replace('%data%',projects.projects[project]['description']);
			$('.project-entry:last').append(description);

			if(projects.projects[project].images.length > 0) {
				for(images in projects.projects[project].images){
					var images = HTMLprojectImage.replace('%data%',projects.projects[project]['images'][images]);
					$('.project-entry:last').append(images);
				}
			}
		}
	}
}

function inName(name){
	name = name.trim().split(" ");
	var newfirst = name[0].slice(0,1).toUpperCase() +name[0].slice(1).toLowerCase();
	return newfirst+" "+name[1].toUpperCase();
};

work.display();
projects.display();
education.display();
bio.display();

$('#mapDiv').append(googleMap);
})