// Add your JavaScript code here for interactivity
document.getElementById("post-form").addEventListener("submit", function (event) {
      event.preventDefault();
      var postText = document.getElementById("post-text").value;
      // Here, you can send the postText to the server using AJAX and update the posts dynamically.
      // For simplicity, this example doesn't include server-side interaction.
      // Instead, you can add the logic for sending data to the server as needed.
      // For now, let's just add a new post to the posts section.
      var postsContainer = document.getElementById("posts");
      var postElement = document.createElement("div");
      postElement.className = "post";
      postElement.innerHTML = "<h2>User</h2><p>" + postText + "</p>";
      postsContainer.appendChild(postElement);
      document.getElementById("post-text").value = "";
});