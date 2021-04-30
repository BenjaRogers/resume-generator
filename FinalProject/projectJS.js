function generateResume(){
    var mailformat = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

    //Declare all variables for user input
    var name = document.getElementById("name").value;
    var city = document.getElementById("city").value;
    var state = document.getElementById("state").value;
    var zip = document.getElementById("zip").value;
    var phone = document.getElementById("phone").value;
    var email = document.getElementById("email").value;
    var socialMedia = document.getElementById("socialMedia").value;
    var portfolio = document.getElementById("portfolio").value;

    var coding = document.getElementById("coding").value;
    var workEthic = document.getElementById("workEthic").value;
    var writing = document.getElementById("writing").value;

    var webdev = document.getElementById("webdev").value;
    var backend = document.getElementById("backend").value;

    var institution = document.getElementById("institution").value;
    var instLocation = document.getElementById("instLocation").value;
    var instDegree = document.getElementById("instDegree").value;
    var instMajor = document.getElementById("instMajor").value;
    var education = document.getElementById("education").value;

    var work1Company = document.getElementById("work1Company").value;
    var work1Loc = document.getElementById("work1Loc").value;
    var work1Job = document.getElementById("work1Job").value;
    var work1DateStart = document.getElementById("work1DateStart").value;
    var work1DateEnd = document.getElementById("work1DateEnd").value;
    var work1 = document.getElementById("work1").value;

    var work2Company = document.getElementById("work2Company").value;
    var work2Loc = document.getElementById("work2Loc").value;
    var work2Job = document.getElementById("work2Job").value;
    var work2DateStart = document.getElementById("work2DateStart").value;
    var work2DateEnd = document.getElementById("work2DateEnd").value;
    var work2 = document.getElementById("work2").value;

    var work3Company = document.getElementById("work3Company").value;
    var work3Loc = document.getElementById("work3Loc").value;
    var work3Job = document.getElementById("work3Job").value;
    var work3DateStart = document.getElementById("work3DateStart").value;
    var work3DateEnd = document.getElementById("work3DateEnd").value;
    var work3 = document.getElementById("work3").value;

    var references = document.getElementById("references").value;
    if (email.match(mailformat)){
            // Create text for new window
    var resumeText = ("<html>\n<head>\n<title>Welcome</title>\n<link rel=\"stylesheet\" href=\"resume.css\">\n</head>\n<body>\n");
    //Header
    resumeText += ("<h1 id=\"name\">" + name + "</h1>\n");
    resumeText += ("<p class=\"info\">" + city +"," + state + " " + zip + " | " + phone + " | "+ email + "</p>\n");
    resumeText += ("<p class=\"info\">" + socialMedia + "|" + portfolio + "</p>\n");
    

    //Skills
    resumeText += ("<div id=\"Skills\">\n");
    resumeText += ("<h1>" + "Skills" + "</h1>\n");
    resumeText += ("<hr> \n");
    resumeText += ("<div id=\"left\"><strong>Coding Skills:</strong></div>\n");
    resumeText += ("<div id=\"right\">" + coding + "</div>\n");

    resumeText += ("<div id=\"left\"><strong>Work Ethic:</strong></div>\n");
    resumeText += ("<div id=\"right\">" + workEthic + "</div>\n");

    resumeText += ("<div id=\"left\"><strong>Writing:</strong></div>");
    resumeText += ("<div id=\"right\">" + writing + "</div>\n</div>");

    //Technical Skills
    resumeText += ("<div id=\"techSkills\">\n");
    resumeText += ("<h1>" + "Technical Skills" + "</h1>\n");
    resumeText += ("<hr> \n");

    resumeText += ("<div id=\"left\"><strong>Web Development:</strong></div>\n");
    resumeText += ("<div id=\"right\">" + webdev + "</div>\n");

    resumeText += ("<div id=\"left\"><strong>Back End Development:</strong></div>\n");
    resumeText += ("<div id=\"right\">" + backend + "</div> </div> \n");

    //Education
    resumeText += ("<div id=\"education\">\n");
    resumeText += ("<h1>" + "Education" + "</h1> \n");
    resumeText += ("<hr> \n");
    resumeText += ("<p>" + institution + " | " + instLocation + "</p> \n");
    resumeText += ("<p><strong>" + instDegree + ", " + instMajor + "</strong><p> \n");
    resumeText += ("<p>" + education + "</p> \n </div> \n");

    //Work experience
    resumeText += ("<div id=\"work\">\n");
    resumeText += ("<h1>" + "Work Experience" + "</h1> \n");
    resumeText += ("<hr> \n");
    resumeText += ("<h2> <strong>" + work1Job + "</strong> </h2> \n");
    resumeText += ("<p>" + work1Company + " | " + work1Loc + "</p> \n");
    resumeText += ("<p>" + work1DateStart + " | " + work1DateEnd + "</p> \n");
    resumeText += ("<p>" + work1 + "</p> \n" );

    resumeText += ("<h2> <strong>" + work2Job + "</strong> </h2> \n");
    resumeText += ("<p>" + work2Company + " | " + work2Loc + "</p> \n");
    resumeText += ("<p>" + work2DateStart + " | " + work2DateEnd + "</p> \n");
    resumeText += ("<p>" + work2 + "</p> \n" );

    resumeText += ("<h2> <strong>" + work3Job + "</strong> </h2> \n");
    resumeText += ("<p>" + work3Company + " | " + work3Loc + "</p> \n");
    resumeText += ("<p>" + work3DateStart + " | " + work3DateEnd + "</p> \n");
    resumeText += ("<p>" + work3 + "</p> \n" );

    //References
    resumeText += ("<h1> References </h1>\n");
    resumeText += ("<hr> \n");
    resumeText += ("<p>" + references + "</p>\n");
    resumeText += ("</body>\n</html>");

    //Create new window
    resumeWindow = window.open('about:blank','myPop','height=600, width=600');
    
    //write all text to new window
    resumeWindow.document.write(resumeText)
}else{
    alert("Enter a valid email address.")
}
    }

