function fetchSwitchAxes() {
    fetch('https://mhw-db.com/weapons')
        .then(response => response.json())
        .then(data => {
            const randomWeapon1 = data[Math.floor(Math.random() * data.length)];
            const randomWeapon2 = data[Math.floor(Math.random() * data.length)];
            const weaponImage1 = randomWeapon1.assets ? randomWeapon1.assets.image : '';
            const weaponImage2 = randomWeapon2.assets ? randomWeapon2.assets.image : '';
            const weaponCard1 = document.getElementById('weaponCard1');
            const weaponImage1Element = document.getElementById('weaponImage1');
            weaponImage1Element.src = weaponImage1;
            weaponCard1.querySelector('h2').innerText = randomWeapon1.name;
            const weaponCard2 = document.getElementById('weaponCard2');
            const weaponImage2Element = document.getElementById('weaponImage2');
            weaponImage2Element.src = weaponImage2;
            weaponCard2.querySelector('h2').innerText = randomWeapon2.name;
        })
        .catch(error => {
            console.error('Error fetching weapon data:', error);
        });
}

fetchSwitchAxes();
