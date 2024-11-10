function showMainContent() {
    document.getElementById('disclaimer').style.display = 'none';
    document.getElementById('mainContent').style.display = 'block';
    BraverySwitchAxe(); 
}

function BraverySwitchAxe() {
    fetch('https://mhw-db.com/weapons')
        .then(response => response.json())
        .then(data => {
            const switchAxes = data.filter(weapon => weapon.type === "switch-axe" && (weapon.rarity === 7 || weapon.rarity === 8));
            const randomWeapon = switchAxes[Math.floor(Math.random() * switchAxes.length)];
            const weaponCard = document.getElementById('weaponCard1');
            const weaponImage = document.getElementById('weaponImage1');
            weaponImage.src = randomWeapon.assets ? randomWeapon.assets.image : 'default-weapon.png';
            weaponCard.querySelector('h2').innerText = randomWeapon.name;
        })
        .catch(error => console.error('Error fetching weapon data:', error));

    fetch('https://mhw-db.com/armor')
        .then(response => response.json())
        .then(data => {
            const gender = "imageMale";
            const armorTypes = ['head', 'chest', 'gloves', 'waist', 'legs'];
            armorTypes.forEach((type, index) => {
                const filteredArmor = data.filter(armor => armor.type === type && armor.assets && armor.assets[gender]);
                const randomArmor = filteredArmor[Math.floor(Math.random() * filteredArmor.length)];
                const armorCard = document.getElementById(`armorCard${index + 1}`);
                const armorImageElement = document.getElementById(`armorImage${index + 1}`);
                armorImageElement.src = randomArmor.assets[gender];
                armorCard.querySelector('h2').innerText = randomArmor.name;
            });
        })
        .catch(error => console.error('Error fetching armor data:', error));

    fetch('https://mhw-db.com/monsters')
        .then(response => response.json())
        .then(data => {
            const largeMonsters = data.filter(monster => monster.type === 'large');
            const randomMonster = largeMonsters[Math.floor(Math.random() * largeMonsters.length)];
            const monsterCard = document.getElementById('monsterCard');
            monsterCard.querySelector('h2').innerText = randomMonster.name;
            monsterCard.querySelector('p').innerText = randomMonster.description || "A terrifying force of nature that lurks in the shadows, awaiting its next victim...";
        })
        .catch(error => console.error('Error fetching monster data:', error));
}

BraverySwitchAxe();


