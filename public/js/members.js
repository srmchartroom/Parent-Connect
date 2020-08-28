$(document).ready(() => {
  // This file just does a GET request to figure out which user is logged in
  // and updates the HTML on the page
  $("[data-toggle='tooltip']").tooltip();

  // let currentUser = "";

  $.get("/api/user_data").then(data => {
    currentUser = data;
    $("#member-id").text(data.id);
    console.log("data: ", data);
    $(".member-name").text(data.first);
    $("#member-avicon")
      .attr("title", `${data.first} ${data.last}`)
      .attr("data-original-title", `${data.first} ${data.last}`);

    $(".member-avatar").html(
      `<img src="https://avatars.dicebear.com/api/bottts/${data.id}.svg" class="avatar-pic member-avatar-pic" />`
    );
  });

  $("input[name=filterChoices]").on("change", () => {
    if ($("input[name=filterChoices]:checked").val() === "option1") {
      $("#byParent").removeClass("hidden");
      $("#byCategory").addClass("hidden");
      $("#byGrade").addClass("hidden");
      $("#bySchool").addClass("hidden");
      $("#byDistrict").addClass("hidden");
    } else if ($("input[name=filterChoices]:checked").val() === "option2") {
      $("#byCategory").removeClass("hidden");
      $("#byParent").addClass("hidden"); // Hide Filter By Parent Form
      $("#byGrade").addClass("hidden"); // Hide Filter By Grade Form
      $("#bySchool").addClass("hidden"); // Hide Filter By School Form
      $("#byDistrict").addClass("hidden"); //Hide Filter By District Form
      $("#current").addClass("hidden"); //Hide Latest Posts
    } else if ($("input[name=filterChoices]:checked").val() === "option3") {
      $("#byGrade").removeClass("hidden");
      $("#byParent").addClass("hidden");
      $("#byCategory").addClass("hidden");
      $("#bySchool").addClass("hidden");
      $("#byDistrict").addClass("hidden");
    } else if ($("input[name=filterChoices]:checked").val() === "option4") {
      $("#bySchool").removeClass("hidden");
      $("#byParent").addClass("hidden");
      $("#byCategory").addClass("hidden");
      $("#byGrade").addClass("hidden");
      $("#byDistrict").addClass("hidden");
    } else if ($("input[name=filterChoices]:checked").val() === "option5") {
      $("#byDistrict").removeClass("hidden");
      $("#byParent").addClass("hidden");
      $("#byCategory").addClass("hidden");
      $("#byGrade").addClass("hidden");
      $("#bySchool").addClass("hidden");
    } else if ($("input[name=filterChoices]:checked").val() === "option6") {
      $("#byDistrict").addClass("hidden");
      $("#byParent").addClass("hidden");
      $("#byCategory").addClass("hidden");
      $("#byGrade").addClass("hidden");
      $("#bySchool").addClass("hidden");
    } else {
      console.log("Error; no radio selection exists.");
    }
  });

  function renderReply(reply) {
    const results = reply;
    $("#results").empty();
    results.forEach(post => {
      $("#results").append(generateReplies(post));
    });
  }

  // On click/submit of the By Parent Filter Form, Add the Parent dynamically to the results title,
  // show the parent results block and hide all other blocks
  $("#user-filter-button").on("click", () => {
    event.preventDefault();
    const parentName = $("#userFilterInput").val();
    $("#parentNameSpan").text(`Posts from ${parentName}`);
    $("#searchResults").removeClass("hidden");
    $("#categoryFilterResults").addClass("hidden");
    $("#current").addClass("hidden");
    $("#parentFilterResults").addClass("hidden");
    $("#gradeFilterResults").addClass("hidden");
    $("#schoolFilterResults").addClass("hidden");
    $("#districtFilterResults").addClass("hidden");
    $.ajax(`/api/posts-user/${parentName}`).done(reply => {
      renderReply(reply);
    });
  });

  // On click/submit of the By Grade Filter Form, Add the Grade dynamically to the results title,
  // show the grade results block and hide all other blocks
  $("#grade-filter-button").on("click", () => {
    event.preventDefault();
    const gradeSelection = $("#gradeFilterInput").val();
    $("#gradeSelectionSpan").text(`Results for Grade: ${gradeSelection}`);
    $("#searchResults").addClass("hidden");
    $("#categoryFilterResults").addClass("hidden");
    $("#current").addClass("hidden");
    $("#parentFilterResults").addClass("hidden");
    $("#gradeFilterResults").removeClass("hidden");
    $("#schoolFilterResults").addClass("hidden");
    $("#districtFilterResults").addClass("hidden");
    $.ajax(`/api/posts-grade/${gradeSelection}`).done(reply => {
      renderReply(reply);
    });
  });

  // On click/submit of the By School Filter Form, Add the name dynamically to the results title,
  // show the school results block and hide all other blocks
  $("#school-filter-button").on("click", () => {
    event.preventDefault();
    const schoolName = $("#schoolFilterInput").val();
    $("#schoolNameSpan").text(`Results for: "${schoolName}"`);
    $("#searchResults").addClass("hidden");
    $("#categoryFilterResults").addClass("hidden");
    $("#current").addClass("hidden");
    $("#parentFilterResults").addClass("hidden");
    $("#gradeFilterResults").addClass("hidden");
    $("#schoolFilterResults").removeClass("hidden");
    $("#districtFilterResults").addClass("hidden");
    $.ajax(`/api/posts-school/${schoolName}`).done(reply => {
      renderReply(reply);
    });
  });

  // On click/submit of the By District Filter Form, Add the name dynamically to the results title,
  // show the district results block and hide all other blocks
  $("#district-filter-button").on("click", () => {
    event.preventDefault();
    const districtName = $("#districtFilterInput").val();
    $("#districtNameSpan").text(`
    Results for: "${districtName}" School District
    `);
    $("#searchResults").addClass("hidden");
    $("#categoryFilterResults").addClass("hidden");
    $("#current").addClass("hidden");
    $("#parentFilterResults").addClass("hidden");
    $("#gradeFilterResults").addClass("hidden");
    $("#schoolFilterResults").addClass("hidden");
    $("#districtFilterResults").removeClass("hidden");
    $.ajax(`/api/posts-district/${districtName}`).done(reply => {
      renderReply(reply);
    });
  });

  // On submission of the search form, add terms search dynamically the results title,
  // show search results block and hide all other blocks
  $("#searchForm").on("submit", () => {
    event.preventDefault();
    const searchTerm = $("#searchInput").val();
    console.log(searchTerm);
    $("#searchTermSpan").text(`You searched for: "${searchTerm}"`);
    $("#searchResults").removeClass("hidden");
    $("#categoryFilterResults").addClass("hidden");
    $("#current").addClass("hidden");
    $("#parentFilterResults").addClass("hidden");
    $("#gradeFilterResults").addClass("hidden");
    $("#schoolFilterResults").addClass("hidden");
    $("#districtFilterResults").addClass("hidden");
    $.ajax(`/api/posts/${searchTerm}`).done(reply => {
      renderReply(reply);
    });
  });

  // On Change of the Category Selection, Add the name dynamically to the results title,
  // show the category results block and hide all other blocks
  $("#category-filter-button").on("click", () => {
    event.preventDefault();
    const catName = $("#categoryFilterInput").val();
    $("#categoryNameSpan").text(`${catName} Category Results`);
    $("#categoryFilterResults").removeClass("hidden"); // SHOW category results
    $("#current").addClass("hidden");
    $("#parentFilterResults").addClass("hidden");
    $("#gradeFilterResults").addClass("hidden");
    $("#schoolFilterResults").addClass("hidden");
    $("#districtFilterResults").addClass("hidden");
    $("#searchResults").addClass("hidden");
    $.ajax(`/api/posts-category/${catName}`).done(reply => {
      renderReply(reply);
    });
  });
});
