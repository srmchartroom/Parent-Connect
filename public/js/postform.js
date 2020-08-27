$(document).ready(function() {
  console.log("succesfully loaded postform.js");
  let titleInput = $("#title");
  let bodyInput = $("#body");
  let linkInput = $("#link");
  let categoryInput = $("#category");
  let districtInput = $("#district");
  let schoolInput = $("#school");
  let gradeInput = $("#grade");
  //add event listener when form is submitted
  $("#post_form").on("submit", handleFormSubmit);

  function handleFormSubmit(event) {
    event.preventDefault();
    let newPost = {
      user_id: $("#member-id").text(),
      title: titleInput.val(),
      body: bodyInput.val(),
      link: linkInput.val(),
      category: categoryInput.val(),
      district: districtInput.val(),
      school: schoolInput.val(),
      grade: gradeInput.val()
    };
    submitPost(newPost);
    console.log(newPost);
  }
  function submitPost(post) {
    $.post("/api/posts", post, function() {
      window.location.href = "/members";
    });
  }
});
