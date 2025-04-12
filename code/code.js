function addPost(boardId, usernameInputId, postInputId) {
    const usernameInput = document.getElementById(usernameInputId); // Grabs the username input field
    const postInput = document.getElementById(postInputId); // Grabs the post input field
    const postsContainer = document.getElementById(`posts-container-${boardId}`); // Grabs the posts container for the specific board
  
    // Get the values from the input fields
    const username = usernameInput.value.trim();
    const postContent = postInput.value.trim();
  
    // Validate that both fields are filled
    if (username && postContent) {
      // Create a new post element
      const postElement = document.createElement('div');
      postElement.className = 'post';
  
      // Format the post to include the username and content
      postElement.innerHTML = `<strong>${username}:</strong> ${postContent}`;
  
      // Append the new post to the container
      postsContainer.appendChild(postElement);
  
      // Clear the input fields after posting
      usernameInput.value = '';
      postInput.value = '';
    } else {
      // Alert the user if either field is empty
      alert('Please enter both a username and a post!');
    }
  }
  