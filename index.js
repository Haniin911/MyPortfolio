document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', function (e) {
        e.preventDefault(); 
        const targetId = this.getAttribute('href'); 
        document.querySelector(targetId).scrollIntoView({
            behavior: 'smooth' 
        });
    });
});
//js