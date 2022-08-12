//--------------------------------
// Declaration of slides and boxes
//--------------------------------

// Slide 0

// Catch Internet Explorer users; incompatible browser
if (isIE()) {
  var slide0 = d3.select("svg").append("g")
    .attr("id", "slide0");
  slide0.append("rect")
    .style("fill", "white")
    .attr("x", 0)
    .attr("y", 0)
    .attr("width", bodyWidth)
    .attr("height", bodyHeight);
  slide0.append("text")
    .attr("class", "lead")
    .text("Your browser is not supported.")
    .attr("x", center - 170)
    .attr("y", title_offset_top);
  slide0.append("text")
    .attr("class", "slideText")
    .attr("x", center - textWidth / 2)
    .attr("y", text_offset_top + title_offset_top + lineHeight)
    .text("Please us a different browser for this survey.")
    .call(wrap, textWidth);

} else {
  var slide0 = d3.select("svg").append("g")
    .attr("id", "slide0");
  slide0.append("rect")
    .style("fill", "white")
    .attr("x", 0)
    .attr("y", 0)
    .attr("width", bodyWidth)
    .attr("height", bodyHeight);
  slide0.append("text")
    .attr("class", "lead")
    .text("")
    .attr("x", center - 170)
    .attr("y", title_offset_top);
  slide0.append("text")
    .attr("class", "slideText")
    .attr("x", center - textWidth / 2)
    .attr("y", text_offset_top + title_offset_top + lineHeight)
    .text("This is a survey about how instagram relates to your social network characteristics.")
    .call(wrap, textWidth);
  slide0.append("text")
    .attr("class", "slideText")
    .attr("x", center - textWidth / 2)
    .attr("y", text_offset_top + title_offset_top + lineHeight * ($('#slide0 .slideText tspan').length + $('#slide0 .slideText').length))
    .text("It is not possible to move back to an earlier question.")
    .call(wrap, textWidth);
  slide0.append("text")
    .attr("class", "slideText")
    .attr("x", center - textWidth / 2)
    .attr("y", text_offset_top + title_offset_top + lineHeight * ($('#slide0 .slideText tspan').length + $('#slide0 .slideText').length))
    .text("Completing the survey takes 30 minutes. Please read the questions carefully and not to leave the page before all questions are answered.")
    .call(wrap, textWidth);
  slide0.append("text")
    .attr("class", "slideText")
    .attr("x", center - textWidth / 2)
    .attr("y", text_offset_top + title_offset_top + lineHeight * ($('#slide0 .slideText tspan').length + $('#slide0 .slideText').length))
    .text("As already mentioned, you cannot return to your previous answers, so check your answers carefully before moving on to the next question. If you have entered a wrong answer, you can probably write it on a piece of paper. At the end of the questionnaire you will still have the opportunity to report what you have entered incorrectly by mistake.")
    .call(wrap, textWidth);
}
var slide_1 = d3.select("svg").append("g")
  .attr("id", "slide1")
slide_1.append("rect")
  .style("fill", "white")
  .attr("x", 0)
  .attr("y", 0)
  .attr("width", bodyWidth)
  .attr("height", bodyHeight);
slide_1.append("text")
  .attr("class", "slideText")
  .attr("x", center - textWidth / 2)
  .attr("y", text_offset_top + title_offset_top + lineHeight)
  .text("Please read the following slide before continuing. Clicking 'Continue' demonstrates you have read and understood the information below.")
  .call(wrap, textWidth);
slide_1.append("text")
  .attr("class", "slideText")
  .attr("x", center - textWidth / 2)
  .attr("y", text_offset_top + title_offset_top + lineHeight * 4)
  .text("PARTICIPANT INFORMATION.")
  .call(wrap, textWidth);
slide_1.append("text")
  .attr("class", "slideText")
  .attr("x", center - textWidth / 2)
  .attr("y", text_offset_top + title_offset_top + lineHeight * 8)
  .text("You are being invited to take part in this research study.  Before you decide it is important for you to read this slide so you understand why the study is being carried out and what it will involve.")
  .call(wrap, textWidth);
slide_1.append("text")
  .attr("class", "slideText")
  .attr("x", center - textWidth / 3)
  .attr("y", text_offset_top + title_offset_top + lineHeight * 12)
  .text("What is the purpose of this study?")
  .call(wrap, textWidth);
slide_1.append("text")
  .attr("class", "slideText")
  .attr("x", center - textWidth / 2)
  .attr("y", text_offset_top + title_offset_top + lineHeight * 16)
  .text("The aim of this research is to understand how Instagram affects offline personal social networks and person well-being.")
  .call(wrap, textWidth);
slide_1.append("text")
  .attr("class", "slideText")
  .attr("x", center - textWidth / 3)
  .attr("y", text_offset_top + title_offset_top + lineHeight * 20)
  .text("Why have I been invited?")
 .call(wrap, textWidth);
slide_1.append("text")
  .attr("class", "slideText")
  .attr("x", center - textWidth / 2)
  .attr("y", text_offset_top + title_offset_top + lineHeight * 24)
  .text("It is important that we assess as many people as possible and you have indicated that you are interested in taking part in this study, and that you are an adult aged 18 or over, use Instagram regularly and have a reasonable understanding of English.")
  .call(wrap, textWidth);
slide_1.append("text")
  .attr("class", "slideText")
  .attr("x", center - textWidth / 3)
  .attr("y", text_offset_top + title_offset_top + lineHeight * 28)
  .text("Do I have to take apart?")
 .call(wrap, textWidth);
slide_1.append("text")
 .attr("class", "slideText")
 .attr("x", center - textWidth / 2)
 .attr("y", text_offset_top + title_offset_top + lineHeight * 32)
 .text("No. It is up to you whether you would like to take part in the study.  I am giving you this information to help you make that decision. If you do decide to take part, remember that you can stop being involved in the study whenever you choose, without telling me why.  You are completely free to decide whether to take part, or to take part and then leave the study before completion.  If you no longer want to take part, simply close your browser.")
 .call(wrap, textWidth);
slide_1.append("text")
 .attr("class", "slideText")
 .attr("x", center - textWidth / 3)
 .attr("y", text_offset_top + title_offset_top + lineHeight * 40)
 .text("What will happen if I take part?")
 .call(wrap, textWidth);
slide_1.append("text")
.attr("class", "slideText")
.attr("x", center - textWidth / 2)
.attr("y", text_offset_top + title_offset_top + lineHeight * 44)
.text("You will be asked complete a survey that will last 30-45 minutes which consists of questions about your social network and your perceived emotional closeness to network members. You will be asked information pertaining to your Instagram use as well as people you follow in regard to their relation to your offline social network. And then finally you will be asked to rate yourself on several statements related to your social relationships (ed., on the importance of friendships), Instagram use, and emotions you experience (e.g., low mood). For taking part you will receive £5 per hour as part of the Prolific monetary renumeration.")
.call(wrap, textWidth);
slide_1.append("text")
.attr("class", "slideText")
.attr("x", center - textWidth / 3)
.attr("y", text_offset_top + title_offset_top + lineHeight * 54)
.text("What are the possible disadvantages of taking part?")
.call(wrap, textWidth);
slide_1.append("text")
.attr("class", "slideText")
.attr("x", center - textWidth / 2)
.attr("y", text_offset_top + title_offset_top + lineHeight * 58)
.text("Considering the nature of this research, participants may find questions about social relationships and emotions, disconcerting and may feel uncomfortable answering such questions. However, the research will not gather and personal information about you such as your name, your email address or your IP. Any information given about your social network members and Instagram data will be anonymised during analysis and into randomly generated number codes. However, in the unlikely event that you feel uncomfortable about answering some of fields in this survey you are able to stop the survey at any time (simply close the browser). If you have completed the research already but have changed your mind on whether you wish to have your information used, you may use the code in which you inputted at the beginning of this survey to email the interviewer or a researcher on the team (emails below) so you can withdraw your information.")
.call(wrap, textWidth);
slide_1.append("text")
.attr("class", "slideText")
.attr("x", center - textWidth / 3)
.attr("y", text_offset_top + title_offset_top + lineHeight * 68)
.text("Will my taking part in this study be kept confidential and anonymous?")
.call(wrap, textWidth);
slide_1.append("text")
.attr("class", "slideText")
.attr("x", center - textWidth / 2)
.attr("y", text_offset_top + title_offset_top + lineHeight * 72)
.text("Yes.  Your name will not be written on any of the data we collect; the written information you provide will be related to your participant number you are given along with this information sheet. Your name or the names you input in the social networks you describe will not appear in any reports or documents resulting from this study. The data collected from you in this study will be confidential.  Anonymised data from this study will be posted on the open science framework (http://osf.io) in line with current scientific practice.  ")
.call(wrap, textWidth);
slide_1.append("text")
.attr("class", "slideText")
.attr("x", center - textWidth / 3)
.attr("y", text_offset_top + title_offset_top + lineHeight * 78)
.text("How will my data be stored, and how long will it be stored for?")
.call(wrap, textWidth);
slide_1.append("text")
.attr("class", "slideText")
.attr("x", center - textWidth / 2)
.attr("y", text_offset_top + title_offset_top + lineHeight * 82)
.text("All data from the survey will be stored on the University U drive, which is password protected.  All data will be stored in accordance with University guidelines and the Data Protection Act (2018).  No personally identifiable data will be stored. After removing the information on your network, the data will also be made available on the open science framework (http://osf.io) however all this data will be anonymous. Should you not want your anonymized data to become public, then please do not take part.")
.call(wrap, textWidth);
slide_1.append("text")
.attr("class", "slideText")
.attr("x", center - textWidth / 3)
.attr("y", text_offset_top + title_offset_top + lineHeight * 90)
.text("What categories of personal data will be collected and processed in this study?")
.call(wrap, textWidth);
slide_1.append("text")
.attr("class", "slideText")
.attr("x", center - textWidth / 2)
.attr("y", text_offset_top + title_offset_top + lineHeight * 94)
.text("This research will collect basic demographic variables (Gender, age etc.) You will also provide data surrounding your Instagram use, and information about your social network members (first names/initials/nicknames).")
.call(wrap, textWidth);
slide_1.append("text")
.attr("class", "slideText")
.attr("x", center - textWidth / 3)
.attr("y", text_offset_top + title_offset_top + lineHeight * 98)
.text("What is the legal basis for processing personal data?")
.call(wrap, textWidth);
slide_1.append("text")
.attr("class", "slideText")
.attr("x", center - textWidth / 2)
.attr("y", text_offset_top + title_offset_top + lineHeight * 102)
.text("All data collected in this study are processed in line with GDPR Article 6(1) e: processing is necessary for the performance of a task carried out in the public interest.")
.call(wrap, textWidth);
slide_1.append("text")
.attr("class", "slideText")
.attr("x", center - textWidth / 3)
.attr("y", text_offset_top + title_offset_top + lineHeight * 106)
.text("Who are the recipients or categories of recipients of personal data, if any?")
.call(wrap, textWidth);
slide_1.append("text")
.attr("class", "slideText")
.attr("x", center - textWidth / 2)
.attr("y", text_offset_top + title_offset_top + lineHeight * 110)
.text("The researchers Connor Malcolm, Dr Samuel Roberts and Dr. Thomas Pollet at Northumbria university and Liverpool John Moores University . No other researchers will be involved in the handling of the raw data.")
.call(wrap, textWidth);
slide_1.append("text")
.attr("class", "slideText")
.attr("x", center - textWidth / 3)
.attr("y", text_offset_top + title_offset_top + lineHeight * 114)
.text("What will happen to the results of the study and could personal data collected be used in future research?")
.call(wrap, textWidth);
slide_1.append("text")
.attr("class", "slideText")
.attr("x", center - textWidth / 2)
.attr("y", text_offset_top + title_offset_top + lineHeight * 118)
.text("The general findings might be reported in a scientific journal or presented at a research conference, however the data will be anonymized, and you will not be personally identifiable. We can provide you with a summary of the findings from the study if you email the researcher at the address listed below. Anonymized data will be posted on the open science framework in order to comply with the norm of transparency in research. Researchers and academics will have access to this research data through the open science framework (http://osf.io). Should you not want your anonymized data to be shared, then please do not take part.")
.call(wrap, textWidth);
slide_1.append("text")
.attr("class", "slideText")
.attr("x", center - textWidth / 3)
.attr("y", text_offset_top + title_offset_top + lineHeight * 126)
.text("Who is Organizing and Funding the Study?")
.call(wrap, textWidth);
slide_1.append("text")
.attr("class", "slideText")
.attr("x", center - textWidth / 2)
.attr("y", text_offset_top + title_offset_top + lineHeight * 130)
.text("Northumbria University health and Life Sciences department. Instagram research grant.")
.call(wrap, textWidth);
slide_1.append("text")
.attr("class", "slideText")
.attr("x", center - textWidth / 3)
.attr("y", text_offset_top + title_offset_top + lineHeight * 134)
.text("Who has reviewed this study?")
.call(wrap, textWidth);
slide_1.append("text")
.attr("class", "slideText")
.attr("x", center - textWidth / 2)
.attr("y", text_offset_top + title_offset_top + lineHeight * 138)
.text("The Faculty of Health and Life Sciences Research Ethics Committee at Northumbria University have reviewed the study in order to safeguard your interests and have granted approval to conduct the study.")
.call(wrap, textWidth);
slide_1.append("text")
.attr("class", "slideText")
.attr("x", center - textWidth / 3)
.attr("y", text_offset_top + title_offset_top + lineHeight * 142)
.text("What are my rights as a participant in this study?")
.call(wrap, textWidth);
slide_1.append("text")
.attr("class", "slideText")
.attr("x", center - textWidth / 2)
.attr("y", text_offset_top + title_offset_top + lineHeight * 146)
.text("1.	You have the rights to the right to be informed, the right of access, the right to rectification, the right to erasure, the right to restrict processing, the right to data portability, the right to object and rights in relation to automated decision making and profiling. You have a right of access to a copy of the information comprised in your personal data (to do so you should submit a Subject Access Request); you have a right in certain circumstances to have inaccurate personal data rectified; and a right to object to decisions being taken by automated means. If dissatisfied with the University’s processing of personal data, you have the right to complain to the Information Commissioner’s Office. ")
.call(wrap, textWidth);
slide_1.append("text")
.attr("class", "slideText")
.attr("x", center - textWidth / 3)
.attr("y", text_offset_top + title_offset_top + lineHeight * 156)
.text("Contact for further information")
.call(wrap, textWidth);
slide_1.append("text")
.attr("class", "slideText")
.attr("x", center - textWidth / 2)
.attr("y", text_offset_top + title_offset_top + lineHeight * 158)
.text("Researcher email: connor.malcolm@northumbria.ac.uk.")
.call(wrap, textWidth);
slide_1.append("text")
.attr("class", "slideText")
.attr("x", center - textWidth / 2)
.attr("y", text_offset_top + title_offset_top + lineHeight * 160)
.text("Supervisor email: thomas.pollet@northumbria.ac.uk.")
.call(wrap, textWidth);
slide_1.append("text")
.attr("class", "slideText")
.attr("x", center - textWidth / 2)
.attr("y", text_offset_top + title_offset_top + lineHeight * 162)
.text("Name and contact details of the Data Protection Officer at Northumbria University: Duncan James (dp.officer@northumbria.ac.uk).")
.call(wrap, textWidth);
slide_1.style("display", "none");

var slide_2 = d3.select("svg").append("g")
  .attr("id", "slide2");
slide_2.append("rect")
  .style("fill", "white")
  .attr("x", 0)
  .attr("y", 0)
  .attr("width", bodyWidth )
  .attr("height", bodyHeight);
slide_2.append("text")
  .attr("class", "slideText")
  .attr("x", center - textWidth / 2)
  .attr("y", text_offset_top + title_offset_top + lineHeight)
  .text("If you would like to take part in this study, please read the statement below and click ‘Continue’")
  .call(wrap, textWidth);
slide_2.append("text")
  .attr("class", "slideText")
  .attr("x", center - textWidth / 2)
  .attr("y", text_offset_top + title_offset_top + lineHeight * 4)
  .text("I understand the nature of the study, and what is required from me. I understand that after I participate I will receive a debrief providing me with information about the study and contact details for the researcher.  I understand I am free to withdraw from the study at any time, without having to give a reason for withdrawing, and without prejudice. I agree to provide information to the investigator and understand that my contribution will remain confidential. I also consent to the retention of this data under the condition that any subsequent use also be restricted to research projects that have gained ethical approval from Northumbria University.")
  .call(wrap, textWidth);
  slide_2.style("display", "none");


// Slide 3

var slide3 = d3.select("svg").append("g")
  .attr("id", "slide3");
slide3.append("rect")
  .style("fill", "white")
  .attr("class", "slide")
  .attr("x", 0)
  .attr("y", 0)
  .attr("width", bodyWidth)
  .attr("height", bodyHeight);
slide3.append("text")
  .attr("class", "slideText")
  .attr("x", center - (textWidth / 2))
  .attr("y", text_offset_top)
  .text("Please state up to 25 names of people with whom you have been in contact in the past month. This contact can consist of personal contact, but also contact via telephone, internet or e-mail. You know these people and these people also know you by name or face (think of friends, family, acquaintances, etc.). You could contact these people when you should.")
  .call(wrap, textWidth);
slide3.append("text")
  .attr("class", "slideText")
  .attr("x", center - (textWidth / 2))
  .attr("y", text_offset_top + lineHeight * ($('#slide3 .slideText tspan').length + $('#slide3 .slideText').length-1))
  .text("The names do not have to be accurate; you can also name nicknames. It is important that you recognize the name if you encounter this name in a subsequent question.")
  .call(wrap, textWidth);
slide3.append("text")
  .attr("class", "slideText")
  .attr("id", "one_at_a_time")
  .attr("x", center - (textWidth / 2))
  .attr("y", text_offset_top + lineHeight * ($('#slide3 .slideText tspan').length + $('#slide3 .slideText').length-1))
  .text("You can input up to 25 people.")
  .call(wrap, textWidth);
var textheight = $('#slide3 .slideText tspan').length + $('#slide3 .slideText').length;
slide3.append("text")
  .attr("class", "slideText")
  .attr("id", "first_friend_text")
  .attr("x", center - (textWidth / 2))
  .attr("y", text_offset_top + lineHeight * textheight)
  .text("You can choose to view the contact list of your (mobile) phone, email, or Facebook if this helps.")
  .call(wrap, textWidth)
  .attr("display", "none");
slide3.append("text")
  .attr("class", "slideText")
  .attr("id", "second_friend_text")
  .attr("x", center - (textWidth / 2))
  .attr("y", text_offset_top + lineHeight * textheight)
  .style("stroke", "none")
  .style("fill", "red")
  .text("Is there another person with whom you discuss important matters? Please enter his or her name or initials.")
  .call(wrap, textWidth)
  .attr("display", "none");
slide3.append("text")
  .attr("class", "slideText")
  .attr("id", "final_friend_text")
  .attr("x", center - (textWidth / 2))
  .attr("y", text_offset_top + lineHeight * textheight)
  .style("stroke", "none")
  .style("fill", "red")
  .text("Thank you for entering these names. click on \"Continue\".")
  .call(wrap, textWidth)
  .attr("display", "none");
slide3.style("display", "none");

// Slide 4
// Slide 5

var slide5 = d3.select("svg").append("g")
  .attr("id", "slide5");
slide5.append("rect")
  .style("fill", "white")
  .attr("class", "slide")
  .attr("x", 0)
  .attr("y", 0)
  .attr("width", bodyWidth)
  .attr("height", bodyHeight);
slide5.append("text")
  .attr("class", "slideText")
  .attr("x", center - (textWidth / 2))
  .attr("y", text_offset_top)
  .text("How close is your relationship to each person?")
  .call(wrap, textWidth);
slide5.append("text")
  .attr("class", "slideText")
  .attr("x", center - (textWidth / 2))
  .attr("y", text_offset_top + lineHeight * ($('#slide5 .slideText tspan').length + $('#slide5 .slideText').length-1))
  .text("Drag the circles with your mouse to the different answers at the bottom on the screen, the circles will change colour when they are placed in a box.")
  .call(wrap, textWidth);
slide5.style("display", "none");

// Slide 6

var slide6 = d3.select("svg").append("g")
  .attr("id", "slide6");
slide6.append("rect")
  .style("fill", "white")
  .attr("class", "slide")
  .attr("x", 0)
  .attr("y", 0)
  .attr("width", bodyWidth)
  .attr("height", bodyHeight);
slide6.append("text")
  .attr("class", "slideText")
  .attr("x", center - (textWidth / 2))
  .attr("y", text_offset_top)
  .text("To the best of your knowledge, what is the highest level of education that these people have completed?")
  .call(wrap, textWidth);
slide6.append("text")
  .attr("class", "slideText")
  .attr("x", center - (textWidth / 2))
  .attr("y", text_offset_top + lineHeight * ($('#slide6 .slideText tspan').length + $('#slide6 .slideText').length-1))
  .text("It's not a problem if you don't know exactly - please provide your best estimate. If you really don't know about some people, you don't have to drag that person to a box. The circles will change color when they end up in a box.")
  .call(wrap, textWidth);
slide6.style("display", "none");

// Slide 7

var slide7 = d3.select("svg").append("g")
  .attr("id", "slide7")
slide7.append("rect")
  .style("fill", "white")
  .attr("class", "slide")
  .attr("x", 0)
  .attr("y", 0)
  .attr("width", bodyWidth)
  .attr("height", bodyHeight);
slide7.append("text")
  .attr("class", "slideText")
  .attr("x", center - (textWidth / 2))
  .attr("y", text_offset_top)
  .text("How often do you have personal contact with these people?")
  .call(wrap, textWidth);
slide7.append("text")
  .attr("class", "slideText")
  .attr("x", center - (textWidth / 2))
  .attr("y", text_offset_top + lineHeight * ($('#slide7 .slideText tspan').length + $('#slide7 .slideText').length-1))
  .text("By personal contact we mean contact in real life, so in person. We do NOT mean contact here via, for example, the telephone or social media.")
  .call(wrap, textWidth);
slide7.append("text")
  .attr("class", "slideText")
  .attr("x", center - (textWidth / 2))
  .attr("y", text_offset_top + lineHeight * ($('#slide7 .slideText tspan').length + $('#slide7 .slideText').length-1))
  .text("Drag the circles with your mouse to the different answers at the bottom on the screen, the circles will change colour when they are placed in a box.")
  .call(wrap, textWidth);
slide7.style("display", "none");

// Slide 8

var slide8 = d3.select("svg").append("g")
  .attr("id", "slide8")
slide8.append("rect")
  .style("fill", "white")
  .attr("class", "slide")
  .attr("x", 0)
  .attr("y", 0)
  .attr("width", bodyWidth)
  .attr("height", bodyHeight);
slide8.append("text")
  .attr("class", "slideText")
  .attr("x", center - (textWidth / 2))
  .attr("y", text_offset_top)
  .text("How often do you contact these people in other ways than personally, for example via (mobile) telephone, mail, email, chat, sms, and other ways of online and offline communication.")
  .call(wrap, textWidth);
slide8.append("text")
  .attr("class", "slideText")
  .attr("x", center - (textWidth / 2))
  .attr("y", text_offset_top + lineHeight * ($('#slide8 .slideText tspan').length + $('#slide8 .slideText').length-1))
  .text("Drag the circles with your mouse to the different answers at the bottom on the screen, the circles will change colour when they are placed in a box.")
  .call(wrap, textWidth);
slide8.style("display", "none");

// Slide 9

var slide9 = d3.select("svg").append("g")
  .attr("id", "slide9")
slide9.append("rect")
  .style("fill", "white")
  .attr("class", "slide")
  .attr("x", 0)
  .attr("y", 0)
  .attr("width", bodyWidth)
  .attr("height", bodyHeight);
slide9.append("text")
  .attr("class", "slideText")
  .attr("x", center - (textWidth / 2))
  .attr("y", text_offset_top)
  .text("Which of these individuals use Instagram?")
  .call(wrap, textWidth);
slide9.append("text")
  .attr("class", "slideText")
  .attr("x", center - (textWidth / 2))
  .attr("y", text_offset_top + lineHeight * ($('#slide9 .slideText tspan').length + $('#slide9 .slideText').length-1))
  .text("Click on the person's name if they use Instagram, the circle will change color. If you have clicked the wrong person by mistake, you can restore this choice by clicking the name of this person again.")
  .call(wrap, textWidth);
slide9.style("display", "none");



var slide14 = d3.select("svg").append("g")
  .attr("id", "slide14")
slide14.append("rect")
  .style("fill", "white")
  .attr("class", "slide")
  .attr("x", 0)
  .attr("y", 0)
  .attr("width", bodyWidth)
  .attr("height", bodyHeight);
slide14.append("text")
  .attr("class", "slideText")
  .attr("x", center - (textWidth / 2))
  .attr("y", text_offset_top)
  .text("Now we ask you about the mutual contact of the people you just mentioned. These are quite a few questions, but you will see that you go through them quickly. You are almost at the end of the questionnaire.")
  .call(wrap, textWidth);
slide14.append("text")
  .attr("class", "slideText")
  .attr("id", "contactMet1")
  .attr("x", center - (textWidth / 2))
  .attr("y", text_offset_top + lineHeight * ($('#slide14 .slideText tspan').length + $('#slide14 .slideText').length-1))
  .text("When it comes too...")
  .call(wrap, textWidth);
slide14.append("text")
  .attr("class", "slideText")
  .attr("id", "contactMet2")
  .attr("x", center - (textWidth / 2))
  .attr("y", text_offset_top + lineHeight * ($('#slide14 .slideText tspan').length + $('#slide14 .slideText').length-1))
  .text("Who is in contact with, by contact we mean all forms of contact, such as personal contact, contact via (mobile) telephone, mail, email, sms, and other ways of online and offline communication.")
  .call(wrap, textWidth);
slide14.append("text")
  .attr("class", "slideText")
  .attr("id", "contactMet3")
  .attr("x", center - (textWidth / 2))
  .attr("y", text_offset_top + lineHeight * ($('#slide14 .slideText tspan').length + $('#slide14 .slideText').length-1))
  .text("Select the people who are in contact with each other by clicking on the circle with the mouse. A line will be created that indicates that the people are in contact with each other. Press the circle again to make the line disappear again, if the people are not in contact with each other.")
  .call(wrap, textWidth);
slide14.style("display", "none");

// Slide 15

var slide15 = d3.select("svg").append("g")
  .attr("id", "slide15")
slide15.append("rect")
  .style("fill", "white")
  .attr("class", "slide")
  .attr("x", 0)
  .attr("y", 0)
  .attr("width", bodyWidth)
  .attr("height", bodyHeight);
slide15.append("text")
  .attr("class", "slideText")
  .attr("x", center - (textWidth / 2))
  .attr("y", text_offset_top)
  .text("Which of these people do you consider to be a friend?")
  .call(wrap, textWidth);
slide15.append("text")
  .attr("class", "slideText")
  .attr("x", center - (textWidth / 2))
  .attr("y", text_offset_top + lineHeight * ($('#slide15 .slideText tspan').length + $('#slide15 .slideText').length-1))
  .text("Click on the person's name if you consider them to be a friend - the circle will change color. If you have clicked the wrong person by mistake, you can restore this choice by clicking the name of this person again.")
  .call(wrap, textWidth);
slide15.style("display", "none");

//Slide 16

var slide16 = d3.select("svg").append("g")
  .attr("id", "slide16");
slide16.append("rect")
  .style("fill", "white")
  .attr("class", "slide")
  .attr("x", 0)
  .attr("y", 0)
  .attr("width", bodyWidth)
  .attr("height", bodyHeight);
slide16.append("text")
  .attr("class", "slideText numfri")
  .attr("x", center - (textWidth / 2))
  .attr("y", text_offset_top)
  .text("Participant Debreif")
  .call(wrap, textWidth);
slide16.append("text")
    .attr("class", "slideText")
    .attr("x", center - textWidth / 3)
    .attr("y", text_offset_top + title_offset_top + lineHeight * 1)
    .text("Please press the 'CLICK HERE!' link, to make sure you will receive payment for your participation")
    .call(wrap, textWidth);
slide16.append("text")
  .attr("class", "slideText")
  .attr("x", center - textWidth / 3)
  .attr("y", text_offset_top + title_offset_top + lineHeight * 4)
  .text("What was the purpose of the project?")
  .call(wrap, textWidth);
slide16.append("text")
  .attr("class", "slideText")
  .attr("x", center - textWidth / 2)
  .attr("y", text_offset_top + title_offset_top + lineHeight * 8)
  .text("This project aimed to explain how Instagram use influences offline personal social networks and personal well-being. The study considered loneliness, and a non-diagnostic survey measure relating to anxiety and depression and how they relate to your social network and Instagram use. In the unlikely event that this questionnaire affected your mood state, and should you feel the desire to talk to someone, then please contact the Samaritans.")
  .call(wrap, textWidth);
slide16.append("text")
  .attr("class", "slideText")
  .attr("x", center - textWidth / 3)
  .attr("y", text_offset_top + title_offset_top + lineHeight * 16)
  .text("How will I find out about the results?")
  .call(wrap, textWidth);
slide16.append("text")
  .attr("class", "slideText")
  .attr("x", center - textWidth / 2)
  .attr("y", text_offset_top + title_offset_top + lineHeight * 20)
  .text("After approximately 1-2 months, once the data analysis has been completed the researchers Connor Malcolm  (connor.malcolm@northumbria.ac.uk)) will email you a general summary of the results of this research, upon email request.")
  .call(wrap, textWidth);
slide16.append("text")
  .attr("class", "slideText")
  .attr("x", center - textWidth / 3)
  .attr("y", text_offset_top + title_offset_top + lineHeight * 24)
  .text("If I change my mind and wish to withdraw the information I have provided, how do I do this?")
  .call(wrap, textWidth);
slide16.append("text")
  .attr("class", "slideText")
  .attr("x", center - textWidth / 2)
  .attr("y", text_offset_top + title_offset_top + lineHeight * 28)
  .text("If you wish to withdraw your data then email the investigator (connor.malcolm@northumbria .ac.uk) or their supervisor (thomas.pollet@northumbria.ac.uk) within 1 week of taking part and give them the code word (that you input on the survey) After this time it might not be possible to withdraw your data as it could already have been processed and analysed.")
  .call(wrap, textWidth);
slide16.append("text")
  .attr("class", "slideText")
  .attr("x", center - textWidth / 2)
  .attr("y", text_offset_top + title_offset_top + lineHeight * 34)
  .text("The data collected in this study may also be published in scientific journals or presented at conferences.  Information and data gathered during this research study will only be available to the research team identified in the information sheet. Should the research be presented or published in any form, all data will be anonymous (i.e. your personal information or data will not be identifiable). It will be hosted on the open science framework, Should you not want this, then please contact the researchers and request removal of your data. Note however, that at no point will your personal information or data be revealed. ")
  .call(wrap, textWidth);
slide16.append("text")
  .attr("class", "slideText")
  .attr("x", center - textWidth / 2)
  .attr("y", text_offset_top + title_offset_top + lineHeight * 42)
  .text("All information and data gathered during this research will be stored in line with the Data Protection Act and GDPR. The anonymised data might be stored indefinitely in order to comply with good scientific practice. Should you not want this, then please contact the researchers and request removal of your data. Note however, that at no point will your personal information or data be revealed. ")
  .call(wrap, textWidth);
slide16.append("text")
  .attr("class", "slideText")
  .attr("x", center - textWidth / 2)
  .attr("y", text_offset_top + title_offset_top + lineHeight * 50)
  .text("If you wish to receive feedback about the findings of this research study, then please contact the researcher at connor.malcolm@northumbria.ac.uk.")
  .call(wrap, textWidth);
slide16.append("text")
  .attr("class", "slideText")
  .attr("x", center - textWidth / 2)
  .attr("y", text_offset_top + title_offset_top + lineHeight * 54)
  .text("This study and its protocol have received full ethical approval from Faculty of Health and Life Sciences Research Ethics Committee. If you require confirmation of this, or if you have any concerns or worries concerning this research, or if you wish to register a complaint, please contact the Chair of this Committee, santosh.vijaykumar@northumbria.ac.uk stating the title of the research project and the name of the researcher.")
  .call(wrap, textWidth);
slide16.style("display", "none");
slide16.append("text")
  .attr("class", "slideText")
  .attr("x", center - textWidth / 2)
  .attr("y", text_offset_top + title_offset_top + lineHeight * 64)
  .text("Thank you for participating in this survey. You may now close the browser.")
  .call(wrap, textWidth);
slide16.style("display", "none");
