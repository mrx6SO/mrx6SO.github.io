$(document).ready(function() {
// Global Vars

  // imgflip meme ID Object
  var imgFlipZodaicIDs = {
    taurus: ["172511443", "137057825", "28000573", "179631944", "41083216"],
    aries: ["8349350", "19602839", "215994578", "75214965", "120854739"],
    leo: ["5496396", "86037", "4685281", "11705221", "17642278"],
    pisces: ["111729424", "150370859", "219156202", "83413494", "19030307"],
    libra: ["152851849", "94647445", "146210232", "167296642", "81230624"],
    sagittarius: ["100944", "40347832", "28321910", "78729922", "67900687"],
    virgo: ["58771928", "106285530", "147102980", "45608887", "201158633"],
    capricorn: ["193629024", "30205003", "39479736", "220132156", "19827973"],
    cancer: ["150982856", "29497357", "182088735", "63796042", "2124726"],
    aquarius: ["41517375", "7215045", "39250905", "116559912", "225058219"],
    scorpio: ["7924237", "212319446", "37010978", "196659352", "165367496"],
    gemini: ["117402", "39048906", "96149579", "27090065", "98679591"]
  };

  // Giphy Zodiac Attribute Array
  $(".zodbutton").on("click", function() {
    var zodiacValue = this.id;
    if (zodiacValue === "leo") {
      var leo = ["leo", "Lion", "Bold", "confident", "bright", "creative", "charming", "egotistical", "proud", "dramatic", "arrogant"];
      var searchWord = leo[Math.floor(Math.random() * leo.length)];
    }
    if (zodiacValue === "taurus") {
      var taurus = ["taurus", "Bull", "affectionate", "sensual", "beauty", "luxury", "money", "romance", "patient", "determined", "stubborn"];
      var searchWord = taurus[Math.floor(Math.random() * taurus.length)];
    }
    if (zodiacValue === "pisces") {
      var pisces = ["pisces", "Fish", "dreamy", "artistic", "creativity", "fantasy", "deception", "curious", "compassionate", "empathy"];
      var searchWord = pisces[Math.floor(Math.random() * pisces.length)];
    }
    if (zodiacValue === "libra") {
      var libra = ["libra", "Scales", "Aesthetics", "harmony", "grace", "charisma", "style", "wealth", "justice", "honesty", "fairness", "balance"];
      var searchWord = libra[Math.floor(Math.random() * libra.length)];
    }
    if (zodiacValue === "sagittarius") {
      var sagittarius = ["sagittarius", "Archer", "Philosophical", "adventurous", "positive", "outgoing", "enlightened", "fiery", "free", "fun", "friendly", "reckless"];
      var searchWord = sagittarius[Math.floor(Math.random() * sagittarius.length)];
    }
    if (zodiacValue === "virgo") {
      var virgo = ["virgo", "Left-brained", "logical", "analytical", "rational", "efficient", "perfectionism", "communicative"];
      var searchWord = virgo[Math.floor(Math.random() * virgo.length)];
    }
    if (zodiacValue === "capricorn") {
      var capricorn = ["capricorn", "Goat", "Hardworking", "ambitious", "practical", "responsible", "committed", "disciplined", "slow", "steady"];
      var searchWord = capricorn[Math.floor(Math.random() * capricorn.length)];
    }
    if (zodiacValue === "aries") {
      var aries = ["aries", "Ram", "Passionate", "aggressive", "primal", "forceful", "confident", "fiery", "leader", "courageous", "competitive", "strong"];
      var searchWord = aries[Math.floor(Math.random() * aries.length)];
    }
    if (zodiacValue === "cancer") {
      var cancer = ["cancer", "Crab", "Emotional", "sensitive", "hermit", "moody", "loyal", "nurturing", "security", "intuitive"];
      var searchWord = cancer[Math.floor(Math.random() * cancer.length)];
    }
    if (zodiacValue === "aquarius") {
      var aquarius = ["aquarius", "Water-Bearer", "progressive", "eccentric", "revolutionary", "individuality", "radical", "mad-scientist", "inventor"];
      var searchWord = aquarius[Math.floor(Math.random() * aquarius.length)];
    }
    if (zodiacValue === "scorpio") {
      var scorpio = ["Scorpion", "Mysterious", "magnetic", "dark", "vitality", "aggressive", "secretive", "transformation", "questions"];
      var searchWord = scorpio[Math.floor(Math.random() * scorpio.length)];
    }
    if (zodiacValue === "gemini") {
      var gemini = ["gemini", "Twins", "quick - witted", "clever", "intellectual", "expressive", "communicative"];
      var searchWord = gemini[Math.floor(Math.random() * gemini.length)];
    }
    renderZodiac(searchWord);
  });

// Display Functions

  // Initial Card Display
  $("#buttons").one("click", function() {
    $("#cards")
      .css("visibility", "visible")
      .hide()
      .fadeIn("slow");
  });

  // Card Reset
  $(".zodbutton").on("click", function() {
    if ($(".flip-card").attr("data-state") == "back") {
      $(".flip-card").attr("data-state", "front");
      var inner = $(".flip-card").children(".flip-card-inner");
      inner.css("transform", "rotateY(0deg)");
    }
  });

  // Cards flip on click event
  $(".flip-card").on("click", function() {
    if ($(this).attr("data-state") == "front") {
      $(this).attr("data-state", "back");
      var inner = $(this).children(".flip-card-inner");
      inner.css("transform", "rotateY(180deg)");
    } else {
      $(this).attr("data-state", "front");
      var inner = $(this).children(".flip-card-inner");
      inner.css("transform", "rotateY(0deg)");
    }
  });

// Functions

  // Giphy Call Function
  function renderZodiac(searchWord) {
    $("#card-three").empty();
    var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + searchWord + "&api_key=VhztSlgEu1vKg29RVAQkT7bPmDTUMUEg";
    $.ajax({
      url: queryURL,
      method: "GET"
    }).then(function(response) {
      var gipfyArray = [];
      for (var i = 0; i < response.data.length; i++) {
        gipfyArray.push(response.data[i]);
      }
      var randomGiphy = gipfyArray[Math.floor(Math.random() * gipfyArray.length)];
      var wordDisplay = $("<h1>").text(searchWord);
      var randomImage = $("<img>")
        .attr("src", randomGiphy.images.fixed_width_downsampled.url)
        .css({ width: "100%", "max-height": "100%" });
      $("#card-three").append(wordDisplay, randomImage);
    });
  }

  // Random Phrase API integration with imgFlipAPI
  $(".zodbutton").on("click", function() {
    var queryURL = "https://cors-anywhere.herokuapp.com/https://typeracingapi.rishikc.com/.netlify/functions/server/text/";
    var zodsign = $(this).attr("id");
    $.ajax({
      url: queryURL,
      method: "GET"
    }).then(function(response) {
      $("#card-two").empty();
      var splitText = response.text.split(".");
      imgFlipAPI(splitText[0], splitText[1], zodsign);
    });
  });

  // imgFlipAPI: Calls Meme creation functionality
  function imgFlipAPI(text0, text1, zodsign) {
    var queryURL = "https://cors-anywhere.herokuapp.com/https://api.imgflip.com/caption_image";
    var randomTemplateID = imgFlipZodaicIDs[zodsign][Math.floor(Math.random() * imgFlipZodaicIDs[zodsign].length)];
    $.ajax({
      url: queryURL,
      method: "POST",
      data: "template_id=" + randomTemplateID + "&username=camprandowsboot&password=D6q*Ae-dqntnfkt&text0=" + text0 + "&text1=" + text1
    }).then(function(response) {
      $("#card-two").empty();
      var pic = $("<img>")
        .attr("src", response.data.url)
        .css({ width: "100%", "max-height": "100%" });
      var memeDiv = $("<div>")
        .attr("id", "memeDiv")
        .css({ height: "inherit", display: "flex", "justify-content": "center", "align-items": "center" })
        .append(pic);
      $("#card-two").append(memeDiv);
    });
  }

  // NASA API: this calls to the nasa picture of the day server, returns an image and displays it
  $(".zodbutton").on("click", function(event) {
    $("#card-one").empty();
    var sign = this.id;

    // no images in database for scorpio so use it's planets instead
    if (sign == "scorpio") {
      scorpio = ["pluto", "mars"];
      var sign = scorpio[Math.floor(Math.random() * scorpio.length)];
    }

    var queryURL = "https://images-api.nasa.gov/search?&description=" + sign + "&media_type=image";
    $.ajax({
      url: queryURL,
      method: "GET"
    }).then(function(res) {
      //error trapping- if no items are returned, use saved image
      if (res.collection.items.length === 0) {
        var imageUrl = "nasa-alt-imag.jpg";
        var wordDisplay = $("<h1>")
          .text("A Beautiful Nebula")
          .css({ position: "absolute", bottom: "3px" });
        var nasaImage = $("<img>")
          .attr("src", imageUrl)
          .css({ width: "100%", "max-height": "100%" })
          .attr("alt", "Nasa Image");
        var blurbText = "Image courtesy of NASA Image and Video Library";
        var nasaBlurb = $("<a>")
          .text(blurbText)
          .attr("target", "_blank")
          .attr("href", "https://images.nasa.gov/")
          .css({ display: "block", "font-size": "25%", "font-style": "italic" })
          .appendTo(wordDisplay);
        var nasaDiv = $("<div>")
          .attr("id", "nasaDiv")
          .css({ height: "inherit" })
          .append(nasaImage, wordDisplay);
        $("#card-one").append(nasaDiv);
      }
      //error trapping- otherwise use first image they returned
      else {
        if (res.collection.metadata.total_hits < 100) {
          var arrNum = [Math.floor(Math.random() * res.collection.metadata.total_hits)];
        } else {
          var arrNum = [Math.floor(Math.random() * 100)];
        }
        var imageUrl = res.collection.items[arrNum].links[0].href;
        var searchTitle = res.collection.items[arrNum].data[0].title;
        var wordDisplay = $("<h1>")
          .text(searchTitle)
          .css({ position: "absolute", bottom: "3px" });
      }
      renderNASA(imageUrl, wordDisplay);
    });

    //call the function that renders the NASA image, caption, and NASA call-back link
    function renderNASA(imageUrl, wordDisplay) {
      var nasaImage = $("<img>")
        .attr("src", imageUrl)
        .css({ width: "100%", "max-height": "100%" })
        .attr("alt", "Nasa Image");
      var blurbText = "Image courtesy of NASA Image and Video Library";
      var nasaBlurb = $("<a>")
        .text(blurbText)
        .attr("target", "_blank")
        .attr("href", "https://images.nasa.gov/")
        .css({ display: "block", "font-size": "25%", "font-style": "italic" })
        .appendTo(wordDisplay);
      var nasaDiv = $("<div>")
        .attr("id", "nasaDiv")
        .css({ height: "inherit" })
        .append(wordDisplay, nasaImage);
      $("#card-one").append(nasaDiv);
    }
  });
});
