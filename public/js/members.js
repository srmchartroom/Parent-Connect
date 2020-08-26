$(document).ready(() => {
  // This file just does a GET request to figure out which user is logged in
  // and updates the HTML on the page
  $.get("/api/user_data").then((data) => {
    $(".member-name").text(data.first);
  });

  // $.get("/api/posts-all").then((data) => {
  //   console.log(data);
  //   return { post: data };
  // });
  // document.querySelector("#filterChoices1")
  $("input[name=filterChoices]").on("change", () => {
    if ($("input[name=filterChoices]:checked").val() === "option1") {
      $("#byParent").removeClass("hidden");
      $("#byCategory").addClass("hidden");
      $("#byGrade").addClass("hidden");
      $("#bySchool").addClass("hidden");
      $("#byDistrict").addClass("hidden");
    } else if ($("input[name=filterChoices]:checked").val() === "option2") {
      $("#byCategory").removeClass("hidden");
      $("#byParent").addClass("hidden");
      $("#byGrade").addClass("hidden");
      $("#bySchool").addClass("hidden");
      $("#byDistrict").addClass("hidden");
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
    } else {
      console.log("Error; no radio selection exists.");
    }
  });
});
