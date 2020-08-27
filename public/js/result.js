function generateReplies(post) {
  return `
  <div id="latestResults" class="text-left mb-4 px-2">
  <img class="avatar-pic" src="https://avatars.dicebear.com/api/bottts/${
    post.UserId
  }.svg" width="30px" height="100%" /></a><a class="btn btn-link float-right" data-toggle="modal" data-target="#m${
    post.id
  }"><i class="fas fa-external-link-alt"></i></a><br>
  <a class="result-title" data-toggle="collapse" href="#id${
    post.id
  }" role="button" aria-expanded="false" aria-controls="id${post.id}">
      <strong>${post.title}</strong>
  
  <br>
  <span class="small pl-2">${post.createdAt}</span><br>
  <span class="small pl-2">Category: </span><span class="badge badge-light">${
    post.category
  }</span> | <span class="small">Parent Poster:</a></span><span class="badge badge-light">${post.User.first} ${
    post.User.last
  }</span> <br>
  <span class="badge badge-light">${post.grade || ""}</span>&nbsp;<span class="badge badge-light">${post.school ||
    ""}</span>&nbsp;<span class="badge badge-light">${post.district || ""}</span>
  <div class="collapse" id="id${post.id}">
      <div class="card card-body">
          ${post.body}
          <br>
          <br>
          <span class="small"><em>Open post (<i class="fas fa-external-link-alt"></i>) to view accompanying post links if available.</span>
          <br>
      </div>
  </div>


<!-- Modal -->
<div class="modal fade" id="m${post.id}" tabindex="-1" aria-labelledby="m${post.id}Label" aria-hidden="true">
<div class="modal-dialog modal-lg modal-dialog-scrollable">
  <div class="modal-content">  
    <div class="modal-body">
      <div class="post-top">
          <h5 class="modal-title" id="m${post.UserId}Label">${post.title}</h5>
          <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
          </button>
          <span class="small pl-2">${post.createdAt}</span><br>
          <img class="avatar-pic" src="https://avatars.dicebear.com/api/bottts/${
            post.UserId
          }.svg" width="30px" height="100%" /> <span class="small">Parent Poster: </span><span class="badge badge-light">${
    post.User.first
  } ${post.User.last}</span>
          <hr>
          <span class="small">Category: </span><span class="badge badge-light">${
            post.category
          }</span>&nbsp;<span class="badge badge-light">${post.grade ||
    ""}</span>&nbsp;<span class="badge badge-light">${post.school ||
    ""}</span>&nbsp;<span class="badge badge-light">${post.district || ""}</span>
          <hr>
      </div>
      <br>
      ${post.body}
      <br>
      <br>
      ${post.linkframe}<br>
      <span class="small">${post.link}</span>
      <br>
    </div>
  </div>
</div>
</div>
</div>`;
}
