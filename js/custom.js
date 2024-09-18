// SubMenu 
$(document).ready(function() {
    $('.Open-Submenu').click(function(e) {
        e.preventDefault();
        var $this = $(this);
        if ($this.next().hasClass('showSub')) {
            // $this.text("+");
            $this.next().toggle();
        } else {
            $this.next().toggle();
            // $this.text("-");
        }
        var $subMenu = $(this).next(".dropdown-menu");
        $subMenu.toggleClass('showSub');
    });
});

// Windown Scroll Add Class in Header
$(window).scroll(function() {    
    var scroll = $(window).scrollTop();
    if (scroll >= 160) {
        $("header.site-header").addClass("customised-header");
    } else {
        $("header.site-header").removeClass("customised-header");
    }
});

// Sliders (SLICK)
$(document).ready(function() {
    // Home Main Slider
    $('.HomeSlider').slick({
        dots: false,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1
    });
    // Announcement Slider
    $('.announcementSlider').slick({
        centerPadding: "0",
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [
            {
              breakpoint: 991,
              settings: {
                slidesToShow: 2
              }
            },
            {
              breakpoint: 575,
              settings: {
                slidesToShow: 1
              }
            }
        ]
    });
    // Events Slider
    $('.eventsSlider').slick({
        centerPadding: "0",
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [
            {
              breakpoint: 991,
              settings: {
                slidesToShow: 2
              }
            },
            {
              breakpoint: 575,
              settings: {
                slidesToShow: 1
              }
            }
        ]
    });
});

// load about us text from text file
var txtFile = new XMLHttpRequest();
txtFile.open("GET", "site-content/homepage/about-us.txt", true);
txtFile.onreadystatechange = function() {
  if (txtFile.readyState === 4) {  // Makes sure the document is ready to parse.
    if (txtFile.status === 200) {  // Makes sure it's found the file.
      allText = txtFile.responseText; 
      //lines = txtFile.responseText.split("\n"); // Will separate each line into an array
      var customTextElement = document.getElementById('abouttext');
customTextElement.innerHTML = txtFile.responseText;
    }
  }
}
txtFile.send(null);

// load ms program text from text file
var mstxtFile = new XMLHttpRequest();
mstxtFile.open("GET", "site-content/programs/ms-program.txt", true);
mstxtFile.onreadystatechange = function() {
  if (mstxtFile.readyState === 4) {  // Makes sure the document is ready to parse.
    if (mstxtFile.status === 200) {  // Makes sure it's found the file.
      allText = mstxtFile.responseText; 
      //lines = mstxtFile.responseText.split("\n"); // Will separate each line into an array
      var customTextElement = document.getElementById('msprogramtext');
customTextElement.innerHTML = mstxtFile.responseText;
    }
  }
}
mstxtFile.send(null);

// load phd program text from text file
var phdtxtFile = new XMLHttpRequest();
phdtxtFile.open("GET", "site-content/programs/phd-program.txt", true);
phdtxtFile.onreadystatechange = function() {
  if (phdtxtFile.readyState === 4) {  // Makes sure the document is ready to parse.
    if (phdtxtFile.status === 200) {  // Makes sure it's found the file.
      allText = phdtxtFile.responseText; 
      //lines = phdtxtFile.responseText.split("\n"); // Will separate each line into an array
      var customTextElement = document.getElementById('phdprogramtext');
customTextElement.innerHTML = phdtxtFile.responseText;
    }
  }
}
phdtxtFile.send(null);

// load research_content from html file
var researchtxtFile = new XMLHttpRequest();
researchtxtFile.open("GET", "site-content/research/research_content.html", true);
researchtxtFile.onreadystatechange = function() {
  if (researchtxtFile.readyState === 4) {  // Makes sure the document is ready to parse.
    if (researchtxtFile.status === 200) {  // Makes sure it's found the file.
      allText = researchtxtFile.responseText; 
      //lines = researchtxtFile.responseText.split("\n"); // Will separate each line into an array
      var customTextElement = document.getElementById('researchtext');
customTextElement.innerHTML = researchtxtFile.responseText;
    }
  }
}
researchtxtFile.send(null);

// load software_content from html file
var softwaretxtFile = new XMLHttpRequest();
softwaretxtFile.open("GET", "site-content/software/software_content.html", true);
softwaretxtFile.onreadystatechange = function() {
  if (softwaretxtFile.readyState === 4) {  // Makes sure the document is ready to parse.
    if (softwaretxtFile.status === 200) {  // Makes sure it's found the file.
      allText = softwaretxtFile.responseText; 
      //lines = softwaretxtFile.responseText.split("\n"); // Will separate each line into an array
      var customTextElement = document.getElementById('softwaretext');
customTextElement.innerHTML = softwaretxtFile.responseText;
    }
  }
}
softwaretxtFile.send(null);


// announcement_1
var announcement_1 = new XMLHttpRequest();
announcement_1.open("GET", "site-content/homepage/announcements/announcement_1.txt", true);
announcement_1.onreadystatechange = function() {
  if (announcement_1.readyState === 4) {  // Makes sure the document is ready to parse.
    if (announcement_1.status === 200) {  // Makes sure it's found the file.
      allText = announcement_1.responseText; 
      //lines = announcement_1.responseText.split("\n"); // Will separate each line into an array
      var customTextElement = document.getElementById('announcement_1');
customTextElement.innerHTML = announcement_1.responseText;
    }
  }
}
announcement_1.send(null);

// announcement_2
var announcement_2 = new XMLHttpRequest();
announcement_2.open("GET", "site-content/homepage/announcements/announcement_2.txt", true);
announcement_2.onreadystatechange = function() {
  if (announcement_2.readyState === 4) {  // Makes sure the document is ready to parse.
    if (announcement_2.status === 200) {  // Makes sure it's found the file.
      allText = announcement_2.responseText; 
      //lines = announcement_2.responseText.split("\n"); // Will separate each line into an array
      var customTextElement = document.getElementById('announcement_2');
customTextElement.innerHTML = announcement_2.responseText;
    }
  }
}
announcement_2.send(null);

// announcement_3
var announcement_3 = new XMLHttpRequest();
announcement_3.open("GET", "site-content/homepage/announcements/announcement_3.txt", true);
announcement_3.onreadystatechange = function() {
  if (announcement_3.readyState === 4) {  // Makes sure the document is ready to parse.
    if (announcement_3.status === 200) {  // Makes sure it's found the file.
      allText = announcement_3.responseText; 
      //lines = announcement_3.responseText.split("\n"); // Will separate each line into an array
      var customTextElement = document.getElementById('announcement_3');
customTextElement.innerHTML = announcement_3.responseText;
    }
  }
}
announcement_3.send(null);

// announcement_4
var announcement_4 = new XMLHttpRequest();
announcement_4.open("GET", "site-content/homepage/announcements/announcement_4.txt", true);
announcement_4.onreadystatechange = function() {
  if (announcement_4.readyState === 4) {  // Makes sure the document is ready to parse.
    if (announcement_4.status === 200) {  // Makes sure it's found the file.
      allText = announcement_4.responseText; 
      //lines = announcement_4.responseText.split("\n"); // Will separate each line into an array
      var customTextElement = document.getElementById('announcement_4');
customTextElement.innerHTML = announcement_4.responseText;
    }
  }
}
announcement_4.send(null);

// announcement_5
var announcement_5 = new XMLHttpRequest();
announcement_5.open("GET", "site-content/homepage/announcements/announcement_5.txt", true);
announcement_5.onreadystatechange = function() {
  if (announcement_5.readyState === 4) {  // Makes sure the document is ready to parse.
    if (announcement_5.status === 200) {  // Makes sure it's found the file.
      allText = announcement_5.responseText; 
      //lines = announcement_5.responseText.split("\n"); // Will separate each line into an array
      var customTextElement = document.getElementById('announcement_5');
customTextElement.innerHTML = announcement_5.responseText;
    }
  }
}
announcement_5.send(null);

// announcement_6
var announcement_6 = new XMLHttpRequest();
announcement_6.open("GET", "site-content/homepage/announcements/announcement_6.txt", true);
announcement_6.onreadystatechange = function() {
  if (announcement_6.readyState === 4) {  // Makes sure the document is ready to parse.
    if (announcement_6.status === 200) {  // Makes sure it's found the file.
      allText = announcement_6.responseText; 
      //lines = announcement_6.responseText.split("\n"); // Will separate each line into an array
      var customTextElement = document.getElementById('announcement_6');
customTextElement.innerHTML = announcement_6.responseText;
    }
  }
}
announcement_6.send(null);

// event_1
var event_1 = new XMLHttpRequest();
event_1.open("GET", "site-content/homepage/events/events_1.txt", true);
event_1.onreadystatechange = function() {
  if (event_1.readyState === 4) {  // Makes sure the document is ready to parse.
    if (event_1.status === 200) {  // Makes sure it's found the file.
      allText = event_1.responseText; 
      //lines = event_1.responseText.split("\n"); // Will separate each line into an array
      var customTextElement = document.getElementById('event_1');
customTextElement.innerHTML = event_1.responseText;
    }
  }
}
event_1.send(null);

// event_2
var event_2 = new XMLHttpRequest();
event_2.open("GET", "site-content/homepage/events/events_2.txt", true);
event_2.onreadystatechange = function() {
  if (event_2.readyState === 4) {  // Makes sure the document is ready to parse.
    if (event_2.status === 200) {  // Makes sure it's found the file.
      allText = event_2.responseText; 
      //lines = event_2.responseText.split("\n"); // Will separate each line into an array
      var customTextElement = document.getElementById('event_2');
customTextElement.innerHTML = event_2.responseText;
    }
  }
}
event_2.send(null);

// event_3
var event_3 = new XMLHttpRequest();
event_3.open("GET", "site-content/homepage/events/events_3.txt", true);
event_3.onreadystatechange = function() {
  if (event_3.readyState === 4) {  // Makes sure the document is ready to parse.
    if (event_3.status === 200) {  // Makes sure it's found the file.
      allText = event_3.responseText; 
      //lines = event_3.responseText.split("\n"); // Will separate each line into an array
      var customTextElement = document.getElementById('event_3');
customTextElement.innerHTML = event_3.responseText;
    }
  }
}
event_3.send(null);

// event_4
var event_4 = new XMLHttpRequest();
event_4.open("GET", "site-content/homepage/events/events_4.txt", true);
event_4.onreadystatechange = function() {
  if (event_4.readyState === 4) {  // Makes sure the document is ready to parse.
    if (event_4.status === 200) {  // Makes sure it's found the file.
      allText = event_4.responseText; 
      //lines = event_4.responseText.split("\n"); // Will separate each line into an array
      var customTextElement = document.getElementById('event_4');
customTextElement.innerHTML = event_4.responseText;
    }
  }
}
event_4.send(null);

// event_5
var event_5 = new XMLHttpRequest();
event_5.open("GET", "site-content/homepage/events/events_5.txt", true);
event_5.onreadystatechange = function() {
  if (event_5.readyState === 4) {  // Makes sure the document is ready to parse.
    if (event_5.status === 200) {  // Makes sure it's found the file.
      allText = event_5.responseText; 
      //lines = event_5.responseText.split("\n"); // Will separate each line into an array
      var customTextElement = document.getElementById('event_5');
customTextElement.innerHTML = event_5.responseText;
    }
  }
}
event_5.send(null);

// event_6
var event_6 = new XMLHttpRequest();
event_6.open("GET", "site-content/homepage/events/events_6.txt", true);
event_6.onreadystatechange = function() {
  if (event_6.readyState === 4) {  // Makes sure the document is ready to parse.
    if (event_6.status === 200) {  // Makes sure it's found the file.
      allText = event_6.responseText; 
      //lines = event_6.responseText.split("\n"); // Will separate each line into an array
      var customTextElement = document.getElementById('event_6');
customTextElement.innerHTML = event_6.responseText;
    }
  }
}
event_6.send(null);

// student
// var stafftxtFile = new XMLHttpRequest();
// stafftxtFile.open("GET", "site-content/people/students/students_details.csv", true);
// stafftxtFile.onreadystatechange = function() {
//   if (stafftxtFile.readyState === 4) {  // Makes sure the document is ready to parse.
//     if (stafftxtFile.status === 200) {  // Makes sure it's found the file.
//       allText = stafftxtFile.responseText; 
//       //lines = txtFile.responseText.split("\n"); // Will separate each line into an array
//       var customTextElement = document.getElementById('StaffContentStudent');
//       // customTextElement.innerHTML = stafftxtFile.responseText;
//       data = $.csv.toArrays(stafftxtFile.responseText);
//       generateHtmlTable(data);
//     }
//   }
// }
// stafftxtFile.send(null);

// student
var studenttxtFile = new XMLHttpRequest();
studenttxtFile.open("GET", "site-content/people/students/students_details.csv", true);
studenttxtFile.onreadystatechange = function() {
  if (studenttxtFile.readyState === 4) {  // Makes sure the document is ready to parse.
    if (studenttxtFile.status === 200) {  // Makes sure it's found the file.
      allText = studenttxtFile.responseText; 
      //lines = txtFile.responseText.split("\n"); // Will separate each line into an array
      var customTextElement = document.getElementById('StaffContentStudent');
      // customTextElement.innerHTML = studenttxtFile.responseText;
      data = $.csv.toArrays(studenttxtFile.responseText);
      generateHtmlTableStudent(data);
    }
  }
}
studenttxtFile.send(null);



// student - function
function generateHtmlTableStudent(data) {
  console.log("data", data);
  var html = '<div class="getdata">';

    if(typeof(data[0]) === 'undefined') {
      return null;
    } else {
      $.map(data, function( res, index ) {
        var ImageSRC = new RegExp('/' + window.location.host + '/');
        var test = !ImageSRC.test(res[4]);
        html += '<div class="items col-md-4">';
        html += '<div class="image">';
        if(test === true) {
          html += '<img src=site-content/people/students/' + res[4] + '>';
        } else {
          html += '<img src=content/' + res[4] + '>';
        }
        html += '</div>';
        html += '<div class="content">';
        html += '<h2>' + res[0] + '</h2>';
        html += '<h4> Advisor: ' + res[2] + '</h4>';
        html += '<div class="email">';
        html += '<span><strong>Email:</strong><a href="mailto:'+ res[1] + '">'+ res[1] + '</a></span>';
        html += '</div>';
        html += '<div class="linkedin">';
        html += '<a href='+ res[3] + ' target="_blank">Portfolio</a>';
        html += '</div>';
        html += '</div>';
        html += '</div>';
      });
      
      html += '</div>';
      $('#StaffContentStudent').append(html);
    }
}	


// alumni
var alumnitxtFile = new XMLHttpRequest();
alumnitxtFile.open("GET", "site-content/people/alumni/alumni_details.csv", true);
alumnitxtFile.onreadystatechange = function() {
  if (alumnitxtFile.readyState === 4) {  // Makes sure the document is ready to parse.
    if (alumnitxtFile.status === 200) {  // Makes sure it's found the file.
      allText = alumnitxtFile.responseText; 
      //lines = txtFile.responseText.split("\n"); // Will separate each line into an array
      var customTextElement = document.getElementById('StaffContentAlumni');
      // customTextElement.innerHTML = alumnitxtFile.responseText;
      data = $.csv.toArrays(alumnitxtFile.responseText);
      generateHtmlTableAlumni(data);
    }
  }
}
alumnitxtFile.send(null);



// alumni - function
function generateHtmlTableAlumni(data) {
  console.log("data", data);
  var html = '<div class="getdata">';

    if(typeof(data[0]) === 'undefined') {
      return null;
    } else {
      $.map(data, function( res, index ) {
        var ImageSRC = new RegExp('/' + window.location.host + '/');
        var test = !ImageSRC.test(res[4]);
        html += '<div class="items col-md-4">';
        html += '<div class="image">';
        if(test === true) {
          html += '<img src=site-content/people/alumni/' + res[4] + '>';
        } else {
          html += '<img src=content/' + res[4] + '>';
        }
        html += '</div>';
        html += '<div class="content">';
        html += '<h2>' + res[0] + '</h2>';
        html += '<h4> Graduated: ' + res[5] + '</h4>';
        html += '<h4> Advisor: ' + res[2] + '</h4>';
        html += '<div class="email">';
        html += '<span><strong>Email:</strong><a href="mailto:'+ res[1] + '">'+ res[1] + '</a></span>';
        html += '</div>';
        html += '<div class="linkedin">';
        html += '<a href='+ res[3] + ' target="_blank">Portfolio</a>';
        html += '</div>';
        html += '</div>';
        html += '</div>';
      });
      
      html += '</div>';
      $('#StaffContentAlumni').append(html);
    }
}	

// Faculty
var facultytxtFile = new XMLHttpRequest();
facultytxtFile.open("GET", "site-content/people/faculty/faculty_details.csv", true);
facultytxtFile.onreadystatechange = function() {
  if (facultytxtFile.readyState === 4) {  // Makes sure the document is ready to parse.
    if (facultytxtFile.status === 200) {  // Makes sure it's found the file.
      allText = facultytxtFile.responseText; 
      //lines = txtFile.responseText.split("\n"); // Will separate each line into an array
      var customTextElement = document.getElementById('StaffContentFaculty');
      // customTextElement.innerHTML = facultytxtFile.responseText;
      data = $.csv.toArrays(facultytxtFile.responseText);
      generateHtmlTableFaculty(data);
    }
  }
}
facultytxtFile.send(null);


// Faculty - function
function generateHtmlTableFaculty(data) {
  console.log("data", data);
  var html = '<div class="getdata">';

    if(typeof(data[0]) === 'undefined') {
      return null;
    } else {
      $.map(data, function( res, index ) {
        var ImageSRC = new RegExp('/' + window.location.host + '/');
        var test = !ImageSRC.test(res[4]);
        html += '<div class="items col-md-4">';
        html += '<div class="image">';
        if(test === true) {
          html += '<img src=site-content/people/faculty/' + res[4] + '>';
        } else {
          html += '<img src=content/' + res[4] + '>';
        }
        html += '</div>';
        html += '<div class="content">';
        html += '<h2>' + res[0] + '</h2>';
        html += '<h4> ' + res[2] + '</h4>';
        html += '<div class="email">';
        html += '<span><strong>Email:</strong><a href="mailto:'+ res[1] + '">'+ res[1] + '</a></span>';
        html += '</div>';
        html += '<div class="linkedin">';
        html += '<a href='+ res[3] + ' target="_blank">Portfolio</a>';
        html += '</div>';
        html += '</div>';
        html += '</div>';
      });
      
      html += '</div>';
      $('#StaffContentFaculty').append(html);
    }
}	


