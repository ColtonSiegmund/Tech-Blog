const commentFormHandler = async (event) => {
  event.preventDefault();

  const content = document.querySelector('input[name="comment-body"]').value.trim();
  const blog_id = window.location.toString().split('/')[
    window.location.toString().split('/').length - 1
  ];

  if (content) {
    const response = await fetch(`/api/comments`, {
      method: 'POST',
      body: JSON.stringify({ blog_id, content }),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (response.ok) {
      document.location.reload();
    } else {
      alert('Failed to create comment');
    }
  }
};


document.querySelector('#comment-form').addEventListener('submit', commentFormHandler);
