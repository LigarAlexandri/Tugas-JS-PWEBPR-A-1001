// Define constants for elements with IDs 'iya' and 'tidak'
const yesButton = document.querySelector('#iya');
const noButton = document.querySelector('#tidak');

// Add event listener for 'iya' button click
yesButton.addEventListener('click', () => {
    // Remove all buttons
    document.querySelectorAll('button').forEach((button) => {
        button.remove();
    });

    // Update styles and content for the result display when 'iya' is clicked
    const wrapperDiv = document.querySelector('.wrapper > div');
    wrapperDiv.style.backgroundColor = '#E12E2E';
    document.querySelector('.wrapper h1').innerText = 'Anda Berbohong!';
    document.querySelector('.wrapper > div > div > div:first-child > p').innerText = 'Anda adalah seorang Teknisi';
    document.querySelector('.wrapper > div > img').setAttribute('src','assets/teknisi.png');
});

// Add event listener for 'tidak' button click
noButton.addEventListener('click', () => {
    // Remove all buttons
    document.querySelectorAll('button').forEach((button) => {
        button.remove();
    });

    // Update styles and content for the result display when 'tidak' is clicked
    const wrapperDiv = document.querySelector('.wrapper > div');
    wrapperDiv.style.backgroundColor = '#6FD240';
    document.querySelector('.wrapper h1').innerText = 'Anda Benar!';
    document.querySelector('.wrapper > div > div > div:first-child > p').innerText = 'Anda adalah seorang Mahasiswa';
    document.querySelector('.wrapper > div > img').setAttribute('src','assets/mahasiswi.png');
});
