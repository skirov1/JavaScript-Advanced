function lockedProfile() {
    Array.from(document.querySelectorAll('.profile button')).forEach(b => b.addEventListener('click', toggle))

    function toggle(e) {
        let profile = e.target.parentElement;
        let isActive = profile.querySelector('input[type="radio"][value="unlock"]').checked;
        let moreInfo = profile.getElementsByTagName('div')[0];

        if (isActive) {          
            if (e.target.textContent == 'Show more') {
                moreInfo.style.display = 'block';
                e.target.textContent = 'Hide it';
            } else if (e.target.textContent == 'Hide it') {
                moreInfo.style.display = 'none';
                e.target.textContent = 'Show more';
            }
        }
        
    }
}