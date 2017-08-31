var awesomeThoughts = "I am Soon Joo and I am AWESOME!";
console.log(awesomeThoughts);

var bio = {
    "name": "Soon Joo Uh",
    "role": "Web Designer",
    "contacts": {
        "mobile": "626-696-9959",
        "email": "usj3026@gmail.com",
        "github": "SoonJooUh",
        "location": "Los Angeles, Ca",
        "residence": [
            "Seoul, South Korea", "Berlin, Germany", "Shenzhen, China"
                    ]
    },
        "welcomeMessage": "\"Great art picks up where nature ends\" - Marc Chagall",
        "skills": [
            "UX / UI", "Sketch / Photoshop", " HTML5 / CSS3", " JS / jQuery", " Git / Grunt"
                ],
        "biopic": "build/img/biopic-800.png"
};

bio.display = function() {
    var formattedName = HTMLheaderName.replace("%data%", bio.name);
    var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
    $("#header").prepend(formattedName + formattedRole);

    var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
    var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
    var formattedGithub = HTMLgithub.replace("%data%", bio.contacts.github);
    var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);
    $("#topContacts, #footerContacts").append(formattedMobile + formattedEmail + formattedGithub + formattedLocation);

    var formattedWelcomeMsg = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
    var formattedBiopic = HTMLbioPic.replace("%data%", bio.biopic);
    $("#header").append(formattedWelcomeMsg + formattedBiopic);

    $("#header").append(HTMLskillsStart);

    bio.skills.forEach(function(skill) {
        var formattedSkill = HTMLskills.replace("%data%", skill);
        $("#skills").append(formattedSkill);
    });
};

var work = {
    "jobs": [{
            "employer": "Offline DBA Sugarlips",
            "title": "Lead Fashion Designer",
            "location": "Los Angeles, Ca",
            "dates": "November 2011 - Current",
            "description": [
                "Collaborate on projects with independent online boutiques and also major retail departments stores like Urban Outfitter's, Macy's, Nordstroms, Dillard's. Create new designs from current trend reports from industry leading events like Fame and Magic show. Create and design new looks, trends and details for all upcoming seasons. Prepare seasonal mood boards to use as inspiration."
            ]
        }]
};

work.display = function() {
    work.jobs.forEach(function(job) {

        $("#workExperience").append(HTMLworkStart);

        var formattedEmployer = HTMLworkEmployer.replace("%data%", job.employer);
        var formattedTitle = HTMLworkTitle.replace("%data%", job.title);
        var formattedLocation = HTMLworkLocation.replace("%data%", job.location);
        var formattedDates = HTMLworkDates.replace("%data%", job.dates);
        var formattedDescription = HTMLworkDescription.replace("%data%", job.description);
        var formattedEmployerTitle = formattedEmployer + formattedTitle + formattedLocation + formattedDates + formattedDescription;
        $(".work-entry:last").append(formattedEmployerTitle);
        });
};

var projects = {
    "projects": [{
            "title": "User Personas / Wireframe Research - Campin\'",
            "dates": "2017",
            "description": "Career Foundry provided instruction for the UX process. I followed the guidelines to create diagrams featuring my unique style and approach.",
            "images": [
                "build/img/Michelle-800.jpg",
                "build/img/Joe-800.jpg",
                "build/img/Laura-800.jpg"
            ],
            "wireframe": ["img/Wireframes.jpg"]
        },
        {
            "title": "Portfolio Website/App Designs",
            "dates": "2017",
            "description": "This is a collection of some of my most recent designs. These samples are coursework from the Career Foundry Program. I can share .pdf files that contain low/high fidelity wireframes and completed designs upon request.",
            "images": [
                "build/img/Campin-coverpic-800.jpg",
                "build/img/HH-coverpic-800.jpg",
                "build/img/Clozet-coverpic-800.jpg",
                "build/img/Campin-webpic-800.png",
                "build/img/DM-webpic-800.png"
            ],
            "wireframe": ""
        },
        {
            "title": "Object-Oriented Programing",
            "dates": "2017",
            "description": "These programs were done as part of the Udacity Program. The files are located on my GitHub.",
            "images": [
                "build/img/seirpinski_triangle-800.png",
                "build/img/flower_power-800.png",
                "build/img/entertainment-800.png"
            ],
            "wireframe": ""
        }
    ]
};

projects.display = function() {
    projects.projects.forEach(function(project) {

        $("#projects").append(HTMLprojectStart);

        var formattedTitle = HTMLprojectTitle.replace("%data%", project.title);
        var formattedDates = HTMLprojectDates.replace("%data%", project.dates);
        var formattedDescription = HTMLprojectDescription.replace("%data%", project.description);
        $(".project-entry:last").append(formattedTitle + formattedDates + formattedDescription);

        if (project.images.length > 0) {
            project.images.forEach(function(image) {
                var formattedImage = HTMLprojectImage.replace("%data%", image);
                $(".project-entry:last").append(formattedImage);
            });
        };
        if (project.wireframe.length > 0) {
            project.wireframe.forEach(function(frame) {
                var formattedWireframe = HTMLprojectWireframe.replace("%data%", frame);
                $(".project-entry:last").append(formattedWireframe);
            });
        }
    });
};

var education = {
    "schools": [{
        "name": "Otis College of Art Design",
        "location": "Los Angeles, Ca",
        "degree": "B.F.A.",
        "majors": ["Fashion Design"],
        "dates": "2004-2008",
        "url": ["http://otis.edu/"]
    },
    {
        "name": "UCLA Extension",
        "location": "Los Angeles, Ca",
        "degree": "Certificate",
        "majors": ["Design Communication Art"],
        "dates": "2009-2010",
        "url": ["https://www.uclaextension.edu/"]
    }],
    "onlineCourses": [{
            "title": "Front-End Web Developer",
            "school": "Udacity",
            "dates": "2017",
            "url": "http:www.udacity.com"
        },
        {
            "title": "UI Design",
            "school": "CareerFoundry",
            "dates": "2017",
            "url": "http:www.careerfoundry.com"
        },
        {
            "title": "HTML5 Introduction",
            "school": "W3Cx",
            "dates": "2017",
            "url": "http:www.edx.org"
        },
        {
            "title": "CSS3 Introduction",
            "school": "W3Cx",
            "dates": "2017",
            "url": "http:www.edx.org"
        },
        {
            "title": "Introduction to HTML and JavaScript",
            "school": "Microsoft",
            "dates": "2017",
            "url": "http:www.edx.org"
        }
    ]
};

education.display = function() {
    education.schools.forEach(function(school) {

        $("#education").append(HTMLschoolStart);

        var formattedSchool = HTMLschoolName.replace("%data%", school.name).replace("#", school.url);
        var formattedDegree = HTMLschoolDegree.replace("%data%", school.degree);
        var formattedDates = HTMLschoolDates.replace("%data%", school.dates);
        var formattedLocation = HTMLschoolLocation.replace("%data%", school.location);
        var formattedMajor = HTMLschoolMajor.replace("%data%", school.majors);
        $(".education-entry:last").append(formattedSchool + formattedDegree + formattedDates + formattedLocation + formattedMajor);
    });

    $("#education").append(HTMLonlineClasses);
    education.onlineCourses.forEach(function(course) {
        $("#education").append(HTMLschoolStart);

        var formattedonlineTitle = HTMLonlineTitle.replace("%data%", course.title).replace("#", course.url);
        var formattedonlineSchool = HTMLonlineSchool.replace("%data%", course.school);
        var formattedonlineDates = HTMLonlineDates.replace("%data%", course.dates);
        var formattedonlineURL = HTMLonlineURL.replace("%data%", course.url).replace("#", course.url);
        $(".education-entry:last").append(formattedonlineTitle + formattedonlineSchool + formattedonlineDates + formattedonlineURL);
    });
};

function inName(name) {
    name = name.trim().split(" ");
    console.log(name);
    name[1] = name[1].toUpperCase();
    name[0] = name[0].slice(0,1).toUpperCase() + name[0].slice(1).toLowerCase();
    
    return name[0] + " "+ name[1];
} 

$("#mapDiv").append(googleMap);
$("#main").append(internationalizeButton);

bio.display();
work.display();
projects.display();
education.display();
