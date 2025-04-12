function addPost(boardId, usernameInputId, postInputId) {
    const usernameInput = document.getElementById(usernameInputId);
    const postInput = document.getElementById(postInputId);
    const postsContainer = document.getElementById(`posts-container-${boardId}`);
  
    // Get the user's username and post content
    const username = usernameInput.value.trim();
    const postContent = postInput.value.trim();
  
    // Check that both fields are filled
    if (username && postContent) {
      // Create a new post element
      const postElement = document.createElement('div');
      postElement.className = 'post';
  
      // Add the username and post content to the post element
      postElement.innerHTML = `
        <strong>${username}:</strong> 
        <span>${postContent}</span>
      `;
  
      // Append the post element to the posts container
      postsContainer.appendChild(postElement);
  
      // Clear the input fields after posting
      usernameInput.value = '';
      postInput.value = '';
    } else {
      // Alert if either the username or post is missing
      alert('Please enter both a username and a post!');
    }
  }
  