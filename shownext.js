// ---------------------------------------------------------------------------------------
// showNext(): Prepares for next slide in survey. Hides previous slide and shows currSlide,
// performing whatever operations needed for preparing slide.
// A bit like the main() function
// ---------------------------------------------------------------------------------------

//Mix of Dutch and English, will annotate each call to show which document its being called.
function showNext() {


  if (currSlide == 1) {
    var d = new Date();
    startTime = d.getTime();

    // respondent ID
    answers.nomem = $('input[name=nomem]').val();

    document.getElementById("Next").style.position="absolute";
    document.getElementById("slide0").style.display = "none"; //Called from slides.js
    var ex = document.getElementById("code_input");
    ex.style.left = string_l + "px";
    ex.style.top = string_t;
    ex.style.display = "block";


    currSlide += 0.1;

  } else if (currSlide == 1.1) {
    if (($('input[name=code]:checked').val().length == 0) && !checked && !skipped) {
      promptNonresponse();
      checked = true;
    } else {
      // Collect data before going on
      if(!skipped) {
        answers.q15 = $('input[name=code]:checked').val();
        var d = new Date();
        answers.q15timeStamp = (d - startTime) / 1000;
      } else {
        answers.q15 = "skipped";
      }
      // Collect data before going on



      document.getElementById("code_input").style.display = "none";
      var ex = document.getElementById("gender_input");
      ex.style.left = string_l + "px";
      ex.style.top = string_t;
      ex.style.display = "block";

      checked = false;

      currSlide+= 0.1;
    }
    } else if (currSlide == 1.2) {
      if (($('input[name=gender]:checked').length == 0) && !checked && !skipped) {
        promptNonresponse();
        checked = true;
      } else {
        // Collect data before going on
        if(!skipped) {
          answers.q16 = $('input[name=gender]:checked').val();
          var d = new Date();
          answers.q16timeStamp = (d - startTime) / 1000;
        } else {
          answers.q16 = "skipped";
        }
        // Collect data before going on



        document.getElementById("gender_input").style.display = "none";
        var ex = document.getElementById("age_input");
        ex.style.left = string_l + "px";
        ex.style.top = string_t;
        ex.style.display = "block";

        checked = false;

        currSlide+= 0.1;
}
      } else if (currSlide == 1.3) {
        if (($('input[name=age]:checked').val().length == 0) && !checked && !skipped) {
          promptNonresponse();
          checked = true;
        } else {
          // Collect data before going on
          if(!skipped) {
            answers.q17 = $('input[name=age]:checked').val();
            var d = new Date();
            answers.q17timeStamp = (d - startTime) / 1000;
          } else {
            answers.q17 = "skipped";
          }
          // Collect data before going on



          document.getElementById("age_input").style.display = "none";
          var ex = document.getElementById("nation_input");
          ex.style.left = string_l + "px";
          ex.style.top = string_t;
          ex.style.display = "block";

          checked = false;

          currSlide+= 0.1;
        }

        } else if (currSlide == 1.4) {
          if (($('input[name=nation]:checked').length == 0) && !checked && !skipped) {
            promptNonresponse();
            checked = true;
          } else {
            // Collect data before going on
            if(!skipped) {
              answers.q18 = $('input[name=nation]:checked').val();
              var d = new Date();
              answers.q18timeStamp = (d - startTime) / 1000;
            } else {
              answers.q18 = "skipped";
            }
              document.getElementById("nation_input").style.display = "none";

              checked = false;

              currSlide+= 0.1;
            }

  } else if (currSlide == 1.5) {


    d3.selectAll(".node").attr("display", "block");
    d3.selectAll(".node").on('mousedown.drag', null);
    // Q3: The following questions are about people with whom you discuss important matters

    document.getElementById("slide3").style.display = "block";  //Called from slides.js
    document.getElementById("name_input").style.display = "inline-flex";
    document.getElementById("name_input").style.left = string_l + "px";

    for(i = 1;i <= 25;i++) {
      var d = new Date();
      var node = {name: i,
                  id: i,
                  timeStamp:(d - startTime) / 1000,
                  gender:"female",
                  xx:(bodyWidth/25)+(bodyWidth/26*(i-1)),
                  yy:((bodyWidth/25)+(bodyWidth/26)<125)?nodeLine+(i % 3)*40:nodeLine+(i % 2)*40,
                  x:(bodyWidth/25)+(bodyWidth/26*(i-1)),
                  y:((bodyWidth/25)+(bodyWidth/26)<125)?nodeLine+(i % 3)*40:nodeLine+(i % 2)*40};
      var focus = {id: i,
                   x:i*(bodyWidth/25)-(bodyWidth/25)/2,
                   y:((bodyWidth/25)+(bodyWidth/26)<125)?nodeLine+(i % 3)*40:nodeLine+(i % 2)*40};
      n = nodes.push(node);
      f = foci.push(focus);
    }

    setTimeout(function() {
      if(currSlide == 1.5) {
        alterPromptReminder();
      }
    },900000);

    restart();
    d3.selectAll(".node").attr("opacity", "0.4");

    currSlide += 0.5;
  } else if (currSlide == 2) {
    if (numAlters < 25 && checked == false) {
      checked = numAlters < 1 ? false : true;
      alterPromptNonresponse();
    } else {
      checked = false;

      //nodes.splice(numAlters+1,nodes.length-numAlters);
      nodes.forEach(function(d) {
        if (d.id > numAlters) {
          d.name = undefined;
          d.gender = undefined;
          answers["q19_" + d.id.toLocaleString(undefined,{minimumIntegerDigits: 2})] = d.name;
          var qd = new Date();
          answers["q19_" + d.id.toLocaleString(undefined,{minimumIntegerDigits: 2}) + "timeStamp"] = (qd - startTime) / 1000;
        }
      });
      resetFoci();

      document.getElementById("slide3").style.display = "none";  //Called from slides.js
      document.getElementById("name_input").style.display = "none";  //Called from index.php

      currSlide++;
    }

  } else if (currSlide == 3) {
    if (askedAbout > 0 && $('input[name=gA]:checked').length == 0 && !checked) {
      promptNonresponse();
      checked = true;
    } else {

      if (askedAbout > 0) {
        // Collect data before going on
        answers["q20_" + askedAbout.toLocaleString(undefined,{minimumIntegerDigits: 2})] = $('input[name=gA]:checked').val();

        document.getElementById("question1_" + askedAbout + "_window").style.display = "none";
        document.getElementById("backdrop1_" + askedAbout).style.display = "none";
        document.getElementById("question1_" + askedAbout).style.display = "none";
      } else {
        document.getElementById("genderalter").style.display = "block"; //Called from index.php
      }

      if (askedAbout == numAlters) {
        // Collect data before going on
        nodes.forEach(function(d) {
          if (d.id > numAlters) {
            answers["q20_" + d.id.toLocaleString(undefined,{minimumIntegerDigits: 2})] = undefined;
          }
        });
        var d = new Date();
        answers["q20timeStamp"] = (d - startTime) / 1000;

        askedAbout = 0;
        currSlide += 0.5;
        //skipped = true;
        showNext();
      } else {
        askedAbout++;

        checked = false;
        refreshRadio();

        d3.selectAll(".node").attr("opacity", function(d) { return d.index == askedAbout ? 1 : .4 });

        currNode = nodes[askedAbout];

        d3.select("svg").append("rect")
          .attr("class", "q_window")
          .attr("id", "question1_" + askedAbout + "_window")
          .attr("rx", 2)
          .attr("ry", 2)
          .attr("width", q_window_width)
          .attr("height", q_window_height)
          .attr("x", currNode.x - q_window_width / 2)
          .attr("y", currNode.y - q_window_height / 2);

        d3.select("svg").append("rect")
          .attr("class", "backdrop")
          .attr("id", "backdrop1_" + askedAbout)
          .attr("x", (currNode.x - 142 + 500 > bodyWidth) ? bodyWidth - 500 : Math.max(currNode.x - q_window_width / 2 - 110,0))
          .attr("y", currNode.y - 360)
          .attr("width", backdrop_width)
          .attr("height", 310);

        d3.select("svg").append("text")
          .attr("class", "slideText")
          .attr("id", "question1_" + askedAbout)
          .attr("x", (currNode.x - 142 + 500 > bodyWidth) ? bodyWidth - 490 : Math.max(currNode.x - q_window_width / 2 - 100,10))
          .attr("dy", currNode.y - 340)
          .text("What is the gender of " + nodes[askedAbout].name.toUpperCase() + "? If you're unsure how they identify, please provide your best guess.")
          .call(wrap, backdrop_width - 20);
// This part allows us to input the name they entered into the question line so it is customary for each alter.
        drawBox(currNode);
      }
    }

  } else if (currSlide == 3.5) {
    if (askedAbout > 0 && $('input[name=lA]:checked').length == 0 && !checked) {
      promptNonresponse();
      checked = true;
    } else {

      if (askedAbout > 0) {
        document.getElementById("question1_" + numAlters + "_window").style.display = "none";
        document.getElementById("backdrop1_" + numAlters).style.display = "none";
        document.getElementById("question1_" + numAlters).style.display = "none";

        document.getElementById("genderalter").style.display = "none";
        // Collect data before going on
        answers["q21_" + askedAbout.toLocaleString(undefined,{minimumIntegerDigits: 2})] = $('input[name=lA]:checked').val();

        document.getElementById("question1.5_" + askedAbout + "_window").style.display = "none";
        document.getElementById("backdrop1.5_" + askedAbout).style.display = "none";
        document.getElementById("question1.5_" + askedAbout).style.display = "none";
      } else {
        document.getElementById("leeftijdAlter").style.display = "block"; //Called from index.php this is calling the HTML for the age ticky boxes
      }

      if (askedAbout == numAlters) {
        // Collect data before going on
        nodes.forEach(function(d) {
          if (d.id > numAlters) {
            answers["q21_" + d.id.toLocaleString(undefined,{minimumIntegerDigits: 2})] = undefined;
          }
        });
        var d = new Date();
        answers["q21timeStamp"] = (d - startTime) / 1000;

        askedAbout = 0;
        currSlide += 0.5;
        //skipped = true;
        showNext();
      } else {
        askedAbout++;

        checked = false;
        refreshRadio();

        d3.selectAll(".node").attr("opacity", function(d) { return d.index == askedAbout ? 1 : .4 });

        currNode = nodes[askedAbout];

        d3.select("svg").append("rect")
          .attr("class", "q_window")
          .attr("id", "question1.5_" + askedAbout + "_window")
          .attr("rx", 2)
          .attr("ry", 2)
          .attr("width", q_window_width)
          .attr("height", q_window_height)
          .attr("x", currNode.x - q_window_width / 2)
          .attr("y", currNode.y - q_window_height / 2);

        d3.select("svg").append("rect")
          .attr("class", "backdrop")
          .attr("id", "backdrop1.5_" + askedAbout)
          .attr("x", (currNode.x - 142 + 500 > bodyWidth) ? bodyWidth - 500 : Math.max(currNode.x - q_window_width / 2 - 110,0))
          .attr("y", currNode.y - 360)
          .attr("width", backdrop_width)
          .attr("height", 310);

        d3.select("svg").append("text")
          .attr("class", "slideText")
          .attr("id", "question1.5_" + askedAbout)
          .attr("x", (currNode.x - 142 + 500 > bodyWidth) ? bodyWidth - 490 : Math.max(currNode.x - q_window_width / 2 - 100,10))
          .attr("dy", currNode.y - 340)
          .text("What is the age of " + nodes[askedAbout].name.toUpperCase() + "? It is no problem if you don't know exactly. Please provide your best estimate.")
          .call(wrap, backdrop_width - 20);

        drawBox(currNode);
      }
      // This part allows us to input the name they entered into the question line so it is customary for each alter.
    }
  } else if (currSlide == 4) {
    if (askedAbout > 0 && ($('input[name=rA]:checked').length == 0 || ($('input[name=rA]:checked').val() == 14 && $('input#rAtextInput').val() == "")) && !checked) {
      promptNonresponse();
      checked = true;
    } else {

      if (askedAbout == 0) {
        document.getElementById("question1.5_" + numAlters + "_window").style.display = "none";
        document.getElementById("backdrop1.5_" + numAlters).style.display = "none";
        document.getElementById("question1.5_" + numAlters).style.display = "none";

        document.getElementById("leeftijdAlter").style.display = "none";
        document.getElementById("relatieAlter").style.display = "block"; //This is called from index.php and asks the relationship the alter gholds to the participant
      } else {
        // Collect data before going on
        answers["q22_" + askedAbout.toLocaleString(undefined,{minimumIntegerDigits: 2})] = undefined;

        for(i = 0;i < $('input[name=rA]:checked').length; i++) {
          if (answers["q22_" + askedAbout.toLocaleString(undefined,{minimumIntegerDigits: 2})] == undefined) {
            answers["q22_" + askedAbout.toLocaleString(undefined,{minimumIntegerDigits: 2})] = $('input[name=rA]:checked')[i].value;
          } else {
            answers["q22_" + askedAbout.toLocaleString(undefined,{minimumIntegerDigits: 2})] += ", " + $('input[name=rA]:checked')[i].value;
          }
          if ($('input[name=rA]:checked')[i].value == 14) answers["q22_" + askedAbout.toLocaleString(undefined,{minimumIntegerDigits: 2})] += ":" + $('input#rAtextInput').val();
        }

        document.getElementById("question2_" + askedAbout + "_window").style.display = "none";
        document.getElementById("backdrop2_" + askedAbout).style.display = "none";
        document.getElementById("question2_" + askedAbout).style.display = "none";
      }

      if (askedAbout == numAlters) {
        // Collect data before going on
        nodes.forEach(function(d) {
          if (d.id > numAlters) {
            answers["q22_" + d.id.toLocaleString(undefined,{minimumIntegerDigits: 2})] = undefined;
          }
        });
        var d = new Date();
        answers["q22timeStamp"] = (d - startTime) / 1000;

        askedAbout = 0;
        currSlide += 1;
        //skipped = true;
        checked = false;
        showNext();
      } else {
        askedAbout++;

        checked = false;
        refreshRadio();

        d3.selectAll(".node").attr("opacity", function(d) { return d.index == askedAbout ? 1 : .4 });

        currNode = nodes[askedAbout];

        d3.select("svg").append("rect")
          .attr("class", "q_window")
          .attr("id", "question2_" + askedAbout + "_window")
          .attr("rx", 2)
          .attr("ry", 2)
          .attr("width", q_window_width)
          .attr("height", q_window_height)
          .attr("x", currNode.x - q_window_width / 2)
          .attr("y", currNode.y - q_window_height / 2);

        d3.select("svg").append("rect")
          .attr("class", "backdrop")
          .attr("id", "backdrop2_" + askedAbout)
          .attr("x", (currNode.x < center) ? currNode.x + 50 : currNode.x - 550)
          .attr("y", currNode.y - 350)
          .attr("width", backdrop_width)
          .attr("height", 480);

        d3.select("svg").append("text")
          .attr("class", "slideText")
          .attr("id", "question2_" + askedAbout)
          .attr("x", (currNode.x < center) ? currNode.x + 60 : currNode.x - 540)
          .attr("dy", currNode.y - 330)
          .text("What is your relationship to " + nodes[askedAbout].name.toUpperCase() + " or how do you know them? Entering multiple answers is possible!")
          .call(wrap, backdrop_width - 20);
// This part allows us to input the name they entered into the question line so it is customary for each alter.
        drawBox(currNode);
      }
    }
  } else if (currSlide == 5) {
    document.getElementById("relatieAlter").style.display = "none";
    document.getElementById("Next").style.left = "";
    document.getElementById("Next").style.top = "";

    document.getElementById("slide5").style.display = "block"; //this is caled from slides.js
    document.getElementById("fiveBar").style.display = "block"; //This is teling it how many bars to use (In the slides.js you can chose between 4,5 and 6 but could easily be altered to include more.)
    document.getElementById("labelBar1").style.display = "block"; //Contents of the bars. (labels)

    d3.selectAll(".node").attr("opacity", function(d) { return d.index == 0 ? .4 : 1 });
    clearColors();
    restart();

    d3.selectAll(".node").classed("fixed", function(d) { d.fixed = false});
    setTimeout(function() {
      d3.selectAll(".node").classed("fixed", function(d) { d.fixed = true});
    },1000);

    currSlide++;
  } else if (currSlide == 6) {
    // If user has not selected an option, alert with popup
    if (!altersInBoxes() && !checked) {
      promptNonresponse();
      checked = true;
    } else {
      // Collect data before going on
      saveAltersInBoxes(23);
      var d = new Date();
      answers.q23timeStamp = (d - startTime) / 1000;

      checked = false;

      document.getElementById("slide5").style.display = "none";
      document.getElementById("labelBar1").style.display = "none";

      // Q4: How close is your relationship with each person?

      document.getElementById("slide6").style.display = "block";
      document.getElementById("labelBar2").style.display = "block"; //Contents of the bars. (labels), assumes 'fivebar' (as above) until this is dismissed and another is called

      restart();

      d3.selectAll(".node").classed("fixed", function(d) { d.fixed = false});
      setTimeout(function() {
        d3.selectAll(".node").classed("fixed", function(d) { d.fixed = true});
      },1000);

      currSlide++;
    }
  } else if (currSlide == 7) {
    // If user has not selected an option, alert with popup
    if (!altersInBoxes() && !checked) {
      promptNonresponse();
      checked = true;
    } else {
      // Collect data before going on
      saveAltersInBoxes(24);
      var d = new Date();
      answers.q24timeStamp = (d - startTime) / 1000;

      checked = false;

      document.getElementById("slide6").style.display = "none"; //Called form slides.js
      document.getElementById("labelBar2").style.display = "none";

      // Q4: How close is your relationship with each person?

      document.getElementById("slide7").style.display = "block"; //Called form slides.js
      document.getElementById("labelBar3").style.display = "block";//Contents of the bars. (labels), assumes 'fivebar' (as above) until this is dismissed and another is called

      restart();

      d3.selectAll(".node").classed("fixed", function(d) { d.fixed = false});
      setTimeout(function() {
        d3.selectAll(".node").classed("fixed", function(d) { d.fixed = true});
        d3.selectAll(".link").attr("display", "none");
        d3.selectAll(".node").attr("opacity", function(d) { return d.index == 0 ? .4 : 1 });
      },1000);

      currSlide++;
    }
  } else if (currSlide == 8) {
    // If user has not selected an option, alert with popup
    if (!altersInBoxes() && !checked) {
      promptNonresponse();
      checked = true;
    } else {
      // Collect data before going on
      saveAltersInBoxes(25);
      var d = new Date();
      answers.q25timeStamp = (d - startTime) / 1000;

      checked = false;
      document.getElementById("slide7").style.display = "none";

      // Q4: How close is your relationship with each person?

      document.getElementById("slide8").style.display = "block"; //Calls from slides.js
      clearColors();
      restart();

      d3.selectAll(".node").classed("fixed", function(d) { d.fixed = false});
      setTimeout(function() {
        d3.selectAll(".node").classed("fixed", function(d) { d.fixed = true});
        d3.selectAll(".link").attr("display", "none");
        d3.selectAll(".node").attr("opacity", function(d) { return d.index == 0 ? .4 : 1 });
      },1000);

      currSlide++;
    }
  } else if (currSlide == 9) {
    // If user has not selected an option, alert with popup
    if (!altersInBoxes() && !checked) {
      promptNonresponse();
      checked = true;
    } else {
      // Collect data before going on
      saveAltersInBoxes(26);
      var d = new Date();
      answers.q26timeStamp = (d - startTime) / 1000;

      checked = false;

      document.getElementById("slide8").style.display = "none";
      document.getElementById("fiveBar").style.display = "none";
      document.getElementById("labelBar3").style.display = "none";

      // : Who of these are your friends?

      document.getElementById("slide15").style.display = "block"; //calls from slides.js
      d3.selectAll(".node").classed("fixed", function(d) { d.fixed = false});

      clearColors();

      currSlide+=0.2;
    }
  } else if (currSlide == 9.2) {
    if (!altered && !checked) {
      promptNonresponse();
      checked = true;
    } else {
      // Collect data before going on
      nodes.forEach(function(d) {
        if (d.id > 0) answers["q27_" + d.id.toLocaleString(undefined,{minimumIntegerDigits: 2})] = d.friends;
      });
      var d = new Date();
      answers.q27timeStamp = (d - startTime) / 1000;

      checked = false;
      altered = false;

      document.getElementById("slide15").style.display = "none";
      document.getElementById("slide9").style.display = "block"; //Calls from slides.js

      resetFoci();
      clearColors();

      currSlide+=0.3;

      /*setTimeout(function() {
        showNext();
      },1000);*/
    }
  } else if (currSlide == 9.5) {
    if (!altered && !checked) {
      promptNonresponse();
      checked = true;
    } else {
      // Collect data before going on
      nodes.forEach(function(d) {
        if (d.id > 0) answers["q28_" + d.id.toLocaleString(undefined,{minimumIntegerDigits: 2})] = d.kids;
      });
      var d = new Date();
      answers.q28timeStamp = (d - startTime) / 1000;

      checked = false;
      altered = false;

      document.getElementById("slide9").style.display = "none";
      document.getElementById("kinderenAlter").style.display = "block"; //These (kindren/leeftijkind) are the ticky boxes for whether the alter follow them on instagram or not.
      document.getElementById("leeftijdKindAlter").style.display = "block";

      resetFoci();

      currSlide+=0.5;

      setTimeout(function() {
        showNext();
      },1000);
    }
  } else if (currSlide == 10) {
    if (askedAbout > 0 && lastAskedAbout > 0 && askedAbout-1 <= numAlters && ($('input[name=kA]:checked').length == 0 || $('input[name=lkA]:checked').length == 0) && !checked) {
      promptNonresponse();
      checked = true;
    } else {
      if (lastAskedAbout > 0) {
        document.getElementById("question3_" + lastAskedAbout + "_window").style.display = "none";
        document.getElementById("backdrop3_" + lastAskedAbout).style.display = "none";
        document.getElementById("question3_" + lastAskedAbout).style.display = "none";
        document.getElementById("question4_" + lastAskedAbout).style.display = "none";
      }

      if (askedAbout > 0) {
        if(nodes[askedAbout].kids == "ja") {
          // Collect data before going on
          answers["q29_" + askedAbout.toLocaleString(undefined,{minimumIntegerDigits: 2})] = $('input[name=kA]:checked').val();
          answers["q30_" + askedAbout.toLocaleString(undefined,{minimumIntegerDigits: 2})] = $('input[name=lkA]:checked').val();
        } else {
          answers["q29_" + askedAbout.toLocaleString(undefined,{minimumIntegerDigits: 2})] = undefined;
          answers["q30_" + askedAbout.toLocaleString(undefined,{minimumIntegerDigits: 2})] = undefined;
        }
      }

      if (askedAbout == numAlters) {
        // Collect data before going on
        nodes.forEach(function(d) {
          if (d.id > numAlters) {
            answers["q29_" + d.id.toLocaleString(undefined,{minimumIntegerDigits: 2})] = undefined;
            answers["q30_" + d.id.toLocaleString(undefined,{minimumIntegerDigits: 2})] = undefined;
          }
        });

        var d = new Date();
        answers["q29_30timeStamp"] = (d - startTime) / 1000;

        document.getElementById("kinderenAlter").style.display = "none";
        document.getElementById("leeftijdKindAlter").style.display = "none";

        askedAbout = 0;
        lastAskedAbout = 0;
        currSlide += 6;

        //skipped = true;
        checked = false;
        showNext();
      } else {
        askedAbout++;

        if (nodes[askedAbout].kids != "ja") {
          answers["q29_" + askedAbout.toLocaleString(undefined,{minimumIntegerDigits: 2})] = undefined;
          answers["q30_" + askedAbout.toLocaleString(undefined,{minimumIntegerDigits: 2})] = undefined;

            showNext();
        } else {
          checked = false;
          refreshRadio();

          d3.selectAll(".node").attr("opacity", function(d) { return d.index == askedAbout ? 1 : .4 });

          lastAskedAbout = askedAbout;

          currNode = nodes[askedAbout];

          d3.select("svg").append("rect")
            .attr("class", "q_window")
            .attr("id", "question3_" + askedAbout + "_window")
            .attr("rx", 2)
            .attr("ry", 2)
            .attr("width", q_window_width)
            .attr("height", q_window_height)
            .attr("x", currNode.x - q_window_width / 2)
            .attr("y", currNode.y - q_window_height / 2);

          d3.select("svg").append("rect")
            .attr("class", "backdrop")
            .attr("id", "backdrop3_" + askedAbout)
            .attr("x", (currNode.x < center) ? currNode.x + 50 : currNode.x - 580)
            .attr("y", currNode.y - 350)
            .attr("width", backdrop_width + 30)
            .attr("height", 560);

          d3.select("svg").append("text")
            .attr("class", "slideText")
            .attr("id", "question3_" + askedAbout)
            .attr("x", (currNode.x < center) ? currNode.x + 60 : currNode.x - 570)
            .attr("dy", currNode.y - 330)
            .text("Does " + currNode.name.toUpperCase() + " follow you on Instagram?")
            .call(wrap, backdrop_width + 10);

          d3.select("svg").append("text")
            .attr("class", "slideText")
            .attr("id", "question4_" + askedAbout)
            .attr("x", (currNode.x < center) ? currNode.x + 60 : currNode.x - 570)
            .attr("dy", currNode.y - 70)
            .text("Do you follow " + currNode.name.toUpperCase() + " on Instagram?")
            .call(wrap, backdrop_width + 10);
// This part allows us to input the name they entered into the question line so it is customary for each alter.
          drawBox(currNode);
        }
      }
    }
  } else if (currSlide == 16) {
    document.getElementById("Next").style.left = "";
    document.getElementById("Next").style.top = "";

    // Q4: How close is your relationship with each person?


    d3.selectAll(".node").classed("fixed", function(d) { d.fixed = false});

    var n = numAlters,      // number of child nodes
        r = 235      // radius

    for (var i=1; i<=numAlters; i++) {
      var theta = (i / numAlters * Math.PI * 2) - 2;
      foci[i].ox = foci[i].x;
      if(numAlters < 18) {
        foci[i].x = center + r*Math.cos(theta);
      } else {
        foci[i].x = center + ((i % 2)?1.15*r:r)*Math.cos(theta);
      }
      foci[i].oy = foci[i].y;
      if(numAlters < 18) {
        foci[i].y = 500 + r*Math.sin(theta);
      } else {
        foci[i].y = 500 + ((i % 2)?1.15*r:r)*Math.sin(theta);
      }
    }

      /*foci[i].x = center + ((numAlters<20)?r:((i % 2)*0.8)*r)*Math.cos(theta);
      foci[i].oy = foci[i].y;
      foci[i].y = 500 + ((numAlters<20)?r:((i % 2)*0.8)*r)*Math.sin(theta);*/

    restart();
    clearColors();

document.getElementById("slide14").style.display = "block";

    currSlide++;
    setTimeout(function() {
      showNext();
    },1000);


  } else if (currSlide == 17) {


    // Q4: How close is your relationship with each person?



    if (askedAbout > 0) {
      answers["q36_" + askedAbout.toLocaleString(undefined,{minimumIntegerDigits: 2})] = undefined;
      for (i = 1; i <= numAlters; i++) {
        if(nodes[askedAbout][i] == 1) {
          if(answers["q36_" + askedAbout.toLocaleString(undefined,{minimumIntegerDigits: 2})] == undefined) {
            answers["q36_" + askedAbout.toLocaleString(undefined,{minimumIntegerDigits: 2})] = i;
          } else {
            answers["q36_" + askedAbout.toLocaleString(undefined,{minimumIntegerDigits: 2})] += ", " + i;
          }
        }
      }

      foci[askedAbout].x = foci[askedAbout].px
      foci[askedAbout].y = foci[askedAbout].py

      links.splice(0,links.length);
      d3.selectAll(".node").attr("opacity", function(d) { return d.index <= askedAbout ? 0 : 1 });
    }

    if (askedAbout+1 == numAlters) {
      // Collect data before going on
      nodes.forEach(function(d) {
        if (d.id > numAlters-1) {
          answers["q36_" + d.id.toLocaleString(undefined,{minimumIntegerDigits: 2})] = undefined;
        }
      });

      var d = new Date();
      answers["q36timeStamp"] = (d - startTime) / 1000;

      /*for (var i=1; i<=numAlters; i++) {
        foci[i].x = foci[i].ox;
        foci[i].y = foci[i].oy;
      }*/
      d3.selectAll(".node").attr("display", "none");
      d3.selectAll(".link").attr("display", "none");

     document.getElementById("slide14").style.display = "none";
      var ex = document.getElementById("loneliness1");
      ex.style.left = string_l + "px";
      ex.style.top = string_t;
      ex.style.display = "block";

      askedAbout = 0;
      currSlide += 1;
      checked = false;

      /*if (answers.q07 != "ja") {
        skipped = true;
        showNext();
      }*/
    } else {
      askedAbout++;

      currNode = nodes[askedAbout];

      $("#contactMet1").text("When it comes to " + currNode.name.toUpperCase());
      $("#contactMet2").text("With who does " + currNode.name.toUpperCase() + " have contact? By contact we mean all forms of contact, such as personal contact, contact via (mobile) telephone, mail, email, sms, and other ways of online and offline communication.");
      d3.selectAll("#contactMet2").call(wrap, textWidth);
      $("#contactMet3").attr("y", text_offset_top + lineHeight * ($('#slide14 .slideText tspan').length + $('#slide14 .slideText').length-1))
// This part allows us to input the name they entered into the question line so it is customary for each alter. (specifically for showing who knows who. Allowing participants to more easily and reliably show each of th ties)
      foci[askedAbout].px = foci[askedAbout].x
      foci[askedAbout].py = foci[askedAbout].y

      foci[askedAbout].x = center;
      foci[askedAbout].y = 500;

      restart();
    }
  } else if (currSlide == 18) {
    if (($('input[name=lo1]:checked').length == 0 || $('input[name=lo2]:checked').length == 0) && !checked && !skipped) {
      promptNonresponse();
      checked = true;
    } else {
      // Collect data before going on
      if(!skipped) {
        answers.q37a = $('input[name=lo1]:checked').val();
        answers.q37b = $('input[name=lo2]:checked').val();
        var d = new Date();
        answers.q37timeStamp = (d - startTime) / 1000;
      } else {
        answers.q37a = "skipped";
        answers.q37b = "skipped";
        var d = new Date();
        answers.q37timeStamp = (d - startTime) / 1000;
      }
      // Collect data before going on
      // Loneliness Questions signified by the 'lo(number)' Called from the index.php 2 questions per page


      document.getElementById("loneliness1").style.display = "none";
      var ex = document.getElementById("loneliness3");
      ex.style.left = string_l + "px";
      ex.style.top = string_t;
      ex.style.display = "block";

      checked = false;

      currSlide++;
    }
  } else if (currSlide == 19) {
    if (($('input[name=lo3]:checked').length == 0 || $('input[name=lo4]:checked').length == 0) && !checked && !skipped) {
      promptNonresponse();
      checked = true;
    } else {
      // Collect data before going on
      if(!skipped) {
        answers.q38a = $('input[name=lo3]:checked').val();
        answers.q38b = $('input[name=lo4]:checked').val();
        var d = new Date();
        answers.q38timeStamp = (d - startTime) / 1000;
      } else {
        answers.q38a = "skipped";
        answers.q38b = "skipped";
        var d = new Date();
        answers.q38timeStamp = (d - startTime) / 1000;
      }
      // Collect data before going on


      document.getElementById("loneliness3").style.display = "none";
      var ex = document.getElementById("loneliness5");
      ex.style.left = string_l + "px";
      ex.style.top = string_t;
      ex.style.display = "block";

      checked = false;

      currSlide++;
    }
  } else if (currSlide == 20) {
    if (($('input[name=lo5]:checked').length == 0 || $('input[name=lo6]:checked').length == 0) && !checked && !skipped) {
      promptNonresponse();
      checked = true;
    } else {
      // Collect data before going on
      if(!skipped) {
        answers.q39a = $('input[name=lo5]:checked').val();
        answers.q39b = $('input[name=lo6]:checked').val();
        var d = new Date();
        answers.q39timeStamp = (d - startTime) / 1000;
      } else {
        answers.q39a = "skipped";
        answers.q39b = "skipped";
        var d = new Date();
        answers.q39timeStamp = (d - startTime) / 1000;
      }
      // Collect data before going on


      document.getElementById("loneliness5").style.display = "none";
      var ex = document.getElementById("loneliness7");
      ex.style.left = string_l + "px";
      ex.style.top = string_t;
      ex.style.display = "block";

      checked = false;

      currSlide++;
    }
  } else if (currSlide == 21) {
    if (($('input[name=lo7]:checked').length == 0 || $('input[name=lo8]:checked').length == 0) && !checked && !skipped) {
      promptNonresponse();
      checked = true;
    } else {
      // Collect data before going on
      if(!skipped) {
        answers.q40a = $('input[name=lo7]:checked').val();
        answers.q40b = $('input[name=lo8]:checked').val();
        var d = new Date();
        answers.q40timeStamp = (d - startTime) / 1000;
      } else {
        answers.q40a = "skipped";
        answers.q40b = "skipped";
        var d = new Date();
        answers.q40timeStamp = (d - startTime) / 1000;
      }
      // Collect data before going on


      document.getElementById("loneliness7").style.display = "none";
      var ex = document.getElementById("loneliness9");
      ex.style.left = string_l + "px";
      ex.style.top = string_t;
      ex.style.display = "block";

      checked = false;

      currSlide++;
    }
  } else if (currSlide == 22) {
    if (($('input[name=lo9]:checked').length == 0 || $('input[name=lo10]:checked').length == 0) && !checked && !skipped) {
      promptNonresponse();
      checked = true;
    } else {
      // Collect data before going on
      if(!skipped) {
        answers.q41a = $('input[name=lo9]:checked').val();
        answers.q41b = $('input[name=lo10]:checked').val();
        var d = new Date();
        answers.q41timeStamp = (d - startTime) / 1000;
      } else {
        answers.q41a = "skipped";
        answers.q41b = "skipped";
        var d = new Date();
        answers.q41timeStamp = (d - startTime) / 1000;
      }
      // Collect data before going on


      document.getElementById("loneliness9").style.display = "none";
      var ex = document.getElementById("loneliness11");
      ex.style.left = string_l + "px";
      ex.style.top = string_t;
      ex.style.display = "block";

      checked = false;

      currSlide++;
    }
  } else if (currSlide == 23) {
    if (($('input[name=lo11]:checked').length == 0 || $('input[name=lo12]:checked').length == 0) && !checked && !skipped) {
      promptNonresponse();
      checked = true;
    } else {
      // Collect data before going on
      if(!skipped) {
        answers.q42a = $('input[name=lo11]:checked').val();
        answers.q42b = $('input[name=lo12]:checked').val();
        var d = new Date();
        answers.q42timeStamp = (d - startTime) / 1000;
      } else {
        answers.q42a = "skipped";
        answers.q42b = "skipped";
        var d = new Date();
        answers.q42timeStamp = (d - startTime) / 1000;
      }
      // Collect data before going on


      document.getElementById("loneliness11").style.display = "none";
      var ex = document.getElementById("loneliness13");
      ex.style.left = string_l + "px";
      ex.style.top = string_t;
      ex.style.display = "block";

      checked = false;

      currSlide++;
    }
  } else if (currSlide == 24) {
    if (($('input[name=lo13]:checked').length == 0 || $('input[name=lo14]:checked').length == 0) && !checked && !skipped) {
      promptNonresponse();
      checked = true;
    } else {
      // Collect data before going on
      if(!skipped) {
        answers.q43a = $('input[name=lo13]:checked').val();
        answers.q43b = $('input[name=lo14]:checked').val();
        var d = new Date();
        answers.q43timeStamp = (d - startTime) / 1000;
      } else {
        answers.q43a = "skipped";
        answers.q43b = "skipped";
        var d = new Date();
        answers.q43timeStamp = (d - startTime) / 1000;
      }
      // Collect data before going on


      document.getElementById("loneliness13").style.display = "none";
      var ex = document.getElementById("loneliness15");
      ex.style.left = string_l + "px";
      ex.style.top = string_t;
      ex.style.display = "block";

      checked = false;

      currSlide++;
    }
  } else if (currSlide == 25) {
    if (($('input[name=lo15]:checked').length == 0 || $('input[name=lo16]:checked').length == 0) && !checked && !skipped) {
      promptNonresponse();
      checked = true;
    } else {
      // Collect data before going on
      if(!skipped) {
        answers.q44a = $('input[name=lo15]:checked').val();
        answers.q44b = $('input[name=lo16]:checked').val();
        var d = new Date();
        answers.q44timeStamp = (d - startTime) / 1000;
      } else {
        answers.q44a = "skipped";
        answers.q44b = "skipped";
        var d = new Date();
        answers.q44timeStamp = (d - startTime) / 1000;
      }
      // Collect data before going on


      document.getElementById("loneliness15").style.display = "none";
      var ex = document.getElementById("loneliness17");
      ex.style.left = string_l + "px";
      ex.style.top = string_t;
      ex.style.display = "block";

      checked = false;

      currSlide++;
    }
  } else if (currSlide == 26) {
    if (($('input[name=lo17]:checked').length == 0 || $('input[name=lo18]:checked').length == 0) && !checked && !skipped) {
      promptNonresponse();
      checked = true;
    } else {
      // Collect data before going on
      if(!skipped) {
        answers.q45a = $('input[name=lo17]:checked').val();
        answers.q45b = $('input[name=lo18]:checked').val();
        var d = new Date();
        answers.q45timeStamp = (d - startTime) / 1000;
      } else {
        answers.q45a = "skipped";
        answers.q45b = "skipped";
        var d = new Date();
        answers.q45timeStamp = (d - startTime) / 1000;
      }
      // Collect data before going on


      document.getElementById("loneliness17").style.display = "none";
      var ex = document.getElementById("loneliness19");
      ex.style.left = string_l + "px";
      ex.style.top = string_t;
      ex.style.display = "block";

      checked = false;

      currSlide++;
    }
  } else if (currSlide == 27) {
    if (($('input[name=lo19]:checked').length == 0 || $('input[name=lo20]:checked').length == 0) && !checked && !skipped) {
      promptNonresponse();
      checked = true;
    } else {
      // Collect data before going on
      if(!skipped) {
        answers.q46a = $('input[name=lo19]:checked').val();
        answers.q46b = $('input[name=lo20]:checked').val();
        var d = new Date();
        answers.q46timeStamp = (d - startTime) / 1000;
      } else {
        answers.q46a = "skipped";
        answers.q46b = "skipped";
        var d = new Date();
        answers.q46timeStamp = (d - startTime) / 1000;
      }
      // Collect data before going on


      document.getElementById("loneliness19").style.display = "none";
      var ex = document.getElementById("insta1");
      ex.style.left = string_l + "px";
      ex.style.top = string_t;
      ex.style.display = "block";

      checked = false;

      currSlide++;
    }
  } else if (currSlide == 28) {
    if (($('input[name=in1]:checked').length == 0 || $('input[name=in2]:checked').length == 0) && !checked && !skipped) {
      promptNonresponse();
      checked = true;
    } else {
      // Collect data before going on
      if(!skipped) {
        answers.q47a = $('input[name=in1]:checked').val();
        answers.q47b = $('input[name=in2]:checked').val();
        var d = new Date();
        answers.q47timeStamp = (d - startTime) / 1000;
      } else {
        answers.q47a = "skipped";
        answers.q47b = "skipped";
        var d = new Date();
        answers.q47timeStamp = (d - startTime) / 1000;
      }
      // Collect data before going on
// Instagram Questions signified by the 'in(number)' Called from the index.php 2 questions per page

      document.getElementById("insta1").style.display = "none";
      var ex = document.getElementById("insta3");
      ex.style.left = string_l + "px";
      ex.style.top = string_t;
      ex.style.display = "block";

      checked = false;

      currSlide++;
    }
  } else if (currSlide == 29) {
    if (($('input[name=in3]:checked').length == 0 || $('input[name=in4]:checked').length == 0) && !checked && !skipped) {
      promptNonresponse();
      checked = true;
    } else {
      // Collect data before going on
      if(!skipped) {
        answers.q48a = $('input[name=in3]:checked').val();
        answers.q48b = $('input[name=in4]:checked').val();
        var d = new Date();
        answers.q48timeStamp = (d - startTime) / 1000;
      } else {
        answers.q48a = "skipped";
        answers.q48b = "skipped";
        var d = new Date();
        answers.q48timeStamp = (d - startTime) / 1000;
      }
      // Collect data before going on


      document.getElementById("insta3").style.display = "none";
      var ex = document.getElementById("insta5");
      ex.style.left = string_l + "px";
      ex.style.top = string_t;
      ex.style.display = "block";

      checked = false;

      currSlide++;
    }
  } else if (currSlide == 30) {
    if (($('input[name=in5]:checked').length == 0 || $('input[name=in6]:checked').length == 0) && !checked && !skipped) {
      promptNonresponse();
      checked = true;
    } else {
      // Collect data before going on
      if(!skipped) {
        answers.q49a = $('input[name=in5]:checked').val();
        answers.q49b = $('input[name=in6]:checked').val();
        var d = new Date();
        answers.q49timeStamp = (d - startTime) / 1000;
      } else {
        answers.q49a = "skipped";
        answers.q49b = "skipped";
        var d = new Date();
        answers.q49timeStamp = (d - startTime) / 1000;
      }
      // Collect data before going on


      document.getElementById("insta5").style.display = "none";
      var ex = document.getElementById("HADS1");
      ex.style.left = string_l + "px";
      ex.style.top = string_t;
      ex.style.display = "block";

      checked = false;

      currSlide++;
    }
  } else if (currSlide == 31) {
    if (($('input[name=ha1]:checked').length == 0 || $('input[name=ha2]:checked').length == 0) && !checked && !skipped) {
      promptNonresponse();
      checked = true;
    } else {
      // Collect data before going on
      if(!skipped) {
        answers.q50a = $('input[name=ha1]:checked').val();
        answers.q50b = $('input[name=ha2]:checked').val();
        var d = new Date();
        answers.q50timeStamp = (d - startTime) / 1000;
      } else {
        answers.q50a = "skipped";
        answers.q50b = "skipped";
        var d = new Date();
        answers.q50timeStamp = (d - startTime) / 1000;
      }
      // Collect data before going on
     // HADS Questions signified by the 'ha(number)' Called from the index.php 2 questions per page

      document.getElementById("HADS1").style.display = "none";
      var ex = document.getElementById("HADS3");
      ex.style.left = string_l + "px";
      ex.style.top = string_t;
      ex.style.display = "block";

      checked = false;

      currSlide++;
    }
  } else if (currSlide == 32) {
    if (($('input[name=ha3]:checked').length == 0 || $('input[name=ha4]:checked').length == 0) && !checked && !skipped) {
      promptNonresponse();
      checked = true;
    } else {
      // Collect data before going on
      if(!skipped) {
        answers.q51a = $('input[name=ha3]:checked').val();
        answers.q51b = $('input[name=ha4]:checked').val();
        var d = new Date();
        answers.q51timeStamp = (d - startTime) / 1000;
      } else {
        answers.q51a = "skipped";
        answers.q51b = "skipped";
        var d = new Date();
        answers.q51timeStamp = (d - startTime) / 1000;
      }
      // Collect data before going on


      document.getElementById("HADS3").style.display = "none";
      var ex = document.getElementById("HADS5");
      ex.style.left = string_l + "px";
      ex.style.top = string_t;
      ex.style.display = "block";

      checked = false;

      currSlide++;
    }
  } else if (currSlide == 33) {
    if (($('input[name=ha5]:checked').length == 0 || $('input[name=ha6]:checked').length == 0) && !checked && !skipped) {
      promptNonresponse();
      checked = true;
    } else {
      // Collect data before going on
      if(!skipped) {
        answers.q52a = $('input[name=ha5]:checked').val();
        answers.q52b = $('input[name=ha6]:checked').val();
        var d = new Date();
        answers.q52timeStamp = (d - startTime) / 1000;
      } else {
        answers.q52a = "skipped";
        answers.q52b = "skipped";
        var d = new Date();
        answers.q52timeStamp = (d - startTime) / 1000;
      }
      // Collect data before going on


      document.getElementById("HADS5").style.display = "none";
      var ex = document.getElementById("HADS7");
      ex.style.left = string_l + "px";
      ex.style.top = string_t;
      ex.style.display = "block";

      checked = false;

      currSlide++;
    }
  } else if (currSlide == 34) {
    if (($('input[name=ha7]:checked').length == 0 || $('input[name=ha8]:checked').length == 0) && !checked && !skipped) {
      promptNonresponse();
      checked = true;
    } else {
      // Collect data before going on
      if(!skipped) {
        answers.q53a = $('input[name=ha7]:checked').val();
        answers.q53b = $('input[name=ha8]:checked').val();
        var d = new Date();
        answers.q53timeStamp = (d - startTime) / 1000;
      } else {
        answers.q53a = "skipped";
        answers.q53b = "skipped";
        var d = new Date();
        answers.q53timeStamp = (d - startTime) / 1000;
      }
      // Collect data before going on


      document.getElementById("HADS7").style.display = "none";
      var ex = document.getElementById("HADS9");
      ex.style.left = string_l + "px";
      ex.style.top = string_t;
      ex.style.display = "block";

      checked = false;

      currSlide++;
    }
  } else if (currSlide == 35) {
    if (($('input[name=ha9]:checked').length == 0 || $('input[name=ha10]:checked').length == 0) && !checked && !skipped) {
      promptNonresponse();
      checked = true;
    } else {
      // Collect data before going on
      if(!skipped) {
        answers.q54a = $('input[name=ha9]:checked').val();
        answers.q54b = $('input[name=ha10]:checked').val();
        var d = new Date();
        answers.q54timeStamp = (d - startTime) / 1000;
      } else {
        answers.q54a = "skipped";
        answers.q54b = "skipped";
        var d = new Date();
        answers.q54timeStamp = (d - startTime) / 1000;
      }
      // Collect data before going on


      document.getElementById("HADS9").style.display = "none";
      var ex = document.getElementById("HADS11");
      ex.style.left = string_l + "px";
      ex.style.top = string_t;
      ex.style.display = "block";

      checked = false;

      currSlide++;
    }
  } else if (currSlide == 36) {
    if (($('input[name=ha11]:checked').length == 0 || $('input[name=ha12]:checked').length == 0) && !checked && !skipped) {
      promptNonresponse();
      checked = true;
    } else {
      // Collect data before going on
      if(!skipped) {
        answers.q55a = $('input[name=ha11]:checked').val();
        answers.q55b = $('input[name=ha12]:checked').val();
        var d = new Date();
        answers.q55timeStamp = (d - startTime) / 1000;
      } else {
        answers.q55a = "skipped";
        answers.q55b = "skipped";
        var d = new Date();
        answers.q55timeStamp = (d - startTime) / 1000;
      }
      // Collect data before going on


      document.getElementById("HADS11").style.display = "none";
      var ex = document.getElementById("HADS13");
      ex.style.left = string_l + "px";
      ex.style.top = string_t;
      ex.style.display = "block";

      checked = false;

      currSlide++;
    }
  } else if (currSlide == 37) {
    if (($('input[name=ha13]:checked').length == 0 || $('input[name=ha14]:checked').length == 0) && !checked && !skipped) {
      promptNonresponse();
      checked = true;
    } else {
      // Collect data before going on
      if(!skipped) {
        answers.q56a = $('input[name=ha13]:checked').val();
        answers.q56b = $('input[name=ha14]:checked').val();
        var d = new Date();
        answers.q56timeStamp = (d - startTime) / 1000;
      } else {
        answers.q56a = "skipped";
        answers.q56b = "skipped";
        var d = new Date();
        answers.q56timeStamp = (d - startTime) / 1000;
      }
      // Collect data before going on


      document.getElementById("HADS13").style.display = "none";
      var ex = document.getElementById("bronnen");
      ex.style.left = string_l + "px";
      ex.style.top = string_t;
      ex.style.display = "block";

      checked = false;

      currSlide++;
    }
  } else if (currSlide == 38) {
    if (($('input[name=br]:checked').val() == 5 && $('input#brtextInput').val() == "") || ($('input[name=br]:checked').length == 0) && !checked) {
      promptNonresponse();
      checked = true;
    } else {
      // Collect data before going on
      answers.q57 = $('input[name=br]:checked').val();
      if ($('input[name=br]:checked').val() == 5) answers.q57 += ":" + $('input#brtextInput').val();
      var d = new Date();
      answers.q57timeStamp = (d - startTime) / 1000;

      document.getElementById("bronnen").style.display = "none";
      var ex = document.getElementById("opmerkingen");
      ex.style.left = string_l + "px";
      ex.style.top = string_t;
      ex.style.display = "block";

    checked = false;
//Asking about how people reported their network, called from the index.php.
      currSlide++;
      showNext();
    }
  } else if (currSlide == 39) {
    answers.q58 = $('input#opmtextArea').val();
    document.getElementById("opmerkingen").style.display = "none";
    var ex = document.getElementById("afsluiting");
    ex.style.left = string_l + "px";
    ex.style.top = string_t;
    ex.style.display = "block";

    document.getElementById("NextDiv").style.display = "none";
    document.getElementById("submitForm").style.display = "block";

    currSlide++;
    showNext();
  } else if (currSlide == 40) {
    // Single array containing all answers
    var answer = [];
    for (var i in answers) {
      if (answers[i] == undefined) answers[i] = "nonresponse";
      answer.push(answers[i]);
    }

    console.log(answers);
    console.log(answer)

    //Post collected data to handler for recording server-side
    $.post("save_results.php", { a: answer });

    //Download CSV file client-side
    /*var csvString = answer.join(",");
    var a         = document.createElement('a');
    a.href        = 'data:attachment/csv;charset=utf-8;base64,' + window.btoa(csvString + "\n");
    a.target      = '_blank';
    a.download    = 'data.csv';

    document.body.appendChild(a);
    a.click();*/

    // Release window close-prevention
    unhook();
  }

  $('#Next').blur();
}
