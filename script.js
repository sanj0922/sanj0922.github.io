const copyBtn = document.getElementById('copyBtn');
const emailText = document.getElementById('emailText').textContent;
const copyMessage = document.getElementById('copyMessage');

copyBtn.addEventListener('click', async () => {
    try {
        await navigator.clipboard.writeText(emailText);

        copyMessage.style.display = 'block';
    } catch (err) {
        alert('Failed to copy email.');
    }
});