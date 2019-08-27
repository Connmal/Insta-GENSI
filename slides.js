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
  document.getElementById("Next").style.display="none";
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
    .text("This is a survey about how instagram relates to social network characteristics changes in first year university undergraduates.")
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
  .text("Please state 25 names of people who are 18 or older and with whom you have been in contact in the past year. This contact can consist of personal contact, but also contact via telephone, internet or e-mail. You know these people and these people also know you by name or face (think of friends, family, acquaintances, etc.). You could contact these people when you should. State the name of your partner if you have one.")
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
  .text("For the research it is important that you actually name 25 people!")
  .call(wrap, textWidth);
var textheight = $('#slide3 .slideText tspan').length + $('#slide3 .slideText').length;
slide3.append("text")
  .attr("class", "slideText")
  .attr("id", "first_friend_text")
  .attr("x", center - (textWidth / 2))
  .attr("y", text_offset_top + lineHeight * textheight)
  .text("If you have a hard time filling the list with 25 names, you can choose to view the contact list of your (mobile) phone, email, or Facebook.")
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

var slide4 = d3.select("svg").append("g")
  .attr("id", "slide4");
slide4.append("rect")
  .style("fill", "white")
  .attr("class", "slide")
  .attr("x", 0)
  .attr("y", 0)
  .attr("width", bodyWidth)
  .attr("height", bodyHeight);
slide4.append("text")
  .attr("class", "slideText")
  .attr("x", center - (textWidth / 2))
  .attr("y", text_offset_top)
  .text("Which of these people identify as male?")
  .call(wrap, textWidth);
slide4.append("text")
  .attr("class", "slideText")
  .attr("x", center - (textWidth / 2))
  .attr("y", text_offset_top + lineHeight * ($('#slide4 .slideText tspan').length + $('#slide4 .slideText').length-1))
  .text("Click on the person's name if they identify as a male, the circle will change colour. If you have clicked the wrong person by mistake, you can correct this by clicking on the person again. At the end of the survey, there will be a chance to add an information that is missed. Please note down on some paper if there are any individuals who identify neither as male or female in the people you reported. Please record these notes in the slide at the end.")
  .call(wrap, textWidth);
slide4.style("display", "none");

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
  .text("Drag the cricles with your mouse to the different answers at the bottom on the screen, the circles will change colour when they are placed in a box.")
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
  .text("To the best of your knowledge, what is the highest level of education that htese people have completed?")
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
  .text("How often do you have personal contact with these people??")
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
  .text("Drag the cricles with your mouse to the different answers at the bottom on the screen, the circles will change colour when they are placed in a box.")
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
  .text("Drag the cricles with your mouse to the different answers at the bottom on the screen, the circles will change colour when they are placed in a box.")
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
  .text("Which of these people do you consider to be a friend??")
  .call(wrap, textWidth);
slide15.append("text")
  .attr("class", "slideText")
  .attr("x", center - (textWidth / 2))
  .attr("y", text_offset_top + lineHeight * ($('#slide15 .slideText tspan').length + $('#slide15 .slideText').length-1))
  .text("Click on the person's name if you consider them to be a friend - the circle will change color. If you have clicked the wrong person by mistake, you can restore this choice by clicking the name of this person again.")
  .call(wrap, textWidth);
slide15.style("display", "none");
