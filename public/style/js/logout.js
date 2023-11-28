const logout = document.querySelector('.logout');

logout?.addEventListener('click', async (event) => {
  event.preventDefault();
  try {
    const response = await fetch('/logout');
    console.log(response);
    if (response.ok) {
      const result = await response.json();
      if (result.msg === 'Success') {
        window.location.href = '/';
      }
    }
  } catch (error) {
    console.error(error);
  }
});
