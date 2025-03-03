document.querySelector('.leaderboard-button').addEventListener('click', () => { 
    window.location.href = 'leaderdboard.html';
});
function updateProgressBar() {
    const progressBars = document.querySelectorAll('.progress-bar'); 
    if (progressBars.length === 0) {
        console.log('No progress bars found on this page.');
        return;
    }
    const totalPages = 4; 
    let currentPage = parseInt(window.location.pathname.match(/\d+/)) || 1; 
    const progressPercentage = (currentPage / totalPages) * 100;
    progressBars.forEach(progressBar => {
        progressBar.style.height = `${progressPercentage}%`;
    });
}
updateProgressBar();
document.querySelectorAll('.right-arrow').forEach(arrow => {
    arrow.addEventListener('click', () => {
        goToNextPage();
        updateProgressBar(); 
    });
});

document.querySelectorAll('.left-arrow').forEach(arrow => {
    arrow.addEventListener('click', () => {
        goToPreviousPage();
        updateProgressBar(); 
    });
});


function goToNextPage() {
    const totalPages = 4;
    let currentPage = parseInt(window.location.pathname.match(/\d+/)) || 1;
    // if (currentPage === 1) {
    //     window.location.href = 'page2.html';
    // } else if (currentPage === 2) {
    //     window.location.href = 'page3.html';
    // } else if (currentPage === 3) {
    //     window.location.href = 'page4.html';
    // }
    if(currentPage<totalPages){
        window.location.href = `page${currentPage+1}.html`;
    }
}


function goToPreviousPage() {
    const totalPages = 4;
    let currentPage = parseInt(window.location.pathname.match(/\d+/)) || 1;
    // if (currentPage === 2) {
    //     window.location.href = 'index.html';
    // } else if (currentPage === 3) {
    //     window.location.href = 'page2.html';
    // } else if (currentPage === 4) {
    //     window.location.href = 'page3.html';
    // }
    if(currentPage>2){
        window.location.href = `page${currentPage-1}.html`;
    }
    else{
        window.location.href = 'index.html';
    }
}