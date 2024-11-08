function fetchSwitchAxesAndArmor() {
    fetch('https://mhw-db.com/weapons')
        .then(response => response.json())
        .then(data => {
            const switchAxes = data.filter(weapon => weapon.type === "switch-axe" && (weapon.rarity === 7 || weapon.rarity === 8));
            const randomWeapon1 = switchAxes[Math.floor(Math.random() * switchAxes.length)];
            const weaponImage1 = randomWeapon1.assets ? randomWeapon1.assets.image : '';
            const weaponCard1 = document.getElementById('weaponCard1');
            const weaponImage1Element = document.getElementById('weaponImage1');
            weaponImage1Element.src = weaponImage1;
            weaponCard1.querySelector('h2').innerText = randomWeapon1.name;
        })
        .catch(error => {
            console.error('Error fetching weapon data:', error);
        });


    fetch('https://mhw-db.com/armor')
        .then(response => response.json())
        .then(data => {
            const gender = "imageMale";
            const armorTypes = ['head', 'chest', 'gloves', 'waist', 'legs'];
            armorTypes.forEach((type, index) => {
                const filteredArmor = data.filter(armor => armor.type === type && (skillname => Partbreaker ));
                const randomArmor = filteredArmor[Math.floor(Math.random() * filteredArmor.length)];
                const armorImage = randomArmor.assets ? randomArmor.assets[gender] : '';
                const armorCard = document.getElementById(`armorCard${index + 1}`);
                const armorImageElement = document.getElementById(`armorImage${index + 1}`);
                armorImageElement.src = armorImage;
                armorCard.querySelector('h2').innerText = randomArmor.name;
            });
        })
        .catch(error => {
            console.error('Error fetching armor data:', error);
        });
}

fetchSwitchAxesAndArmor();
