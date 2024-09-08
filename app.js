document.addEventListener("DOMContentLoaded", () => {

    const images = document.querySelectorAll("img");

    const paragraphs = document.querySelectorAll("p");

    const champions = [];

    const element = document.getElementById("articles-content");
    const child = document.getElementById("SecondArticle");
    let championType = getStoredValue('champFilter');
    console.log(championType)

    document.getElementById("championRoles").innerHTML = "Role: " + championType;
    

        fetch("https://ddragon.leagueoflegends.com/cdn/14.17.1/data/en_US/champion.json")
        .then(response => response.json())
        .then(data => {
            for (champion in data.data) {
                //console.log(data.data[champion].tags);
                if (championType != "All") {
                    for(let i = 0; i < data.data[champion].tags.length; i++) {
                    if (championType == data.data[champion].tags[i]) {
                        champions.push(champion);
                    }
                }
                } else {
                    champions.push(champion);
                }
                
            }
            for (let i = 0; i < champions.length; i++) {
                let CurrentChamp = champions[i]
                if (data.data.hasOwnProperty(CurrentChamp)) {
                    fetch("https://ddragon.leagueoflegends.com/cdn/14.17.1/data/en_US/champion/"+CurrentChamp+".json")
                    .then(response => response.json())
                    .then(data => {
                        var ChampImg = document.createElement('img');
                        ChampImg.src = 'https://ddragon.leagueoflegends.com/cdn/img/champion/loading/' + CurrentChamp + '_0.jpg'
                        ChampImg.style = "display:block; margin:0 auto;";
                        let spellName = [];
                        let spellDescription = [];
                        let spellImage = [];

                        for (let i = 0; i < data.data[CurrentChamp].spells.length; i++) {
                            let obj = data.data[CurrentChamp].spells[i]
                            spellName.push(obj.name);
                            spellDescription.push(obj.description);
                            spellImage.push(obj.image.full);
                        }
                        spellName.push(data.data[CurrentChamp].passive.name)
                        spellDescription.push(data.data[CurrentChamp].passive.description)

                        var SpellQ = document.createElement('img');
                        SpellQ.src = 'https://ddragon.leagueoflegends.com/cdn/14.17.1/img/spell/' + spellImage[0]
                        var SpellW = document.createElement('img');
                        SpellW.src = 'https://ddragon.leagueoflegends.com/cdn/14.17.1/img/spell/' + spellImage[1] 
                        var SpellE = document.createElement('img');
                        SpellE.src = 'https://ddragon.leagueoflegends.com/cdn/14.17.1/img/spell/' + spellImage[2] 
                        var SpellR = document.createElement('img');
                        SpellR.src = 'https://ddragon.leagueoflegends.com/cdn/14.17.1/img/spell/' + spellImage[3] 
                        var SpellP = document.createElement('img');
                        SpellP.src = 'https://ddragon.leagueoflegends.com/cdn/14.17.1/img/passive/' + data.data[CurrentChamp].passive.image.full 

                        var article = document.createElement("article")
                        .appendChild(document.createElement("h3"))
                            .appendChild(document.createTextNode(data.data[CurrentChamp].name +", " + data.data[CurrentChamp].title))
                        .parentNode.parentNode 
                        .appendChild(ChampImg)
                        .parentNode
                        .appendChild(document.createElement("p"))
                        .appendChild(document.createTextNode(data.data[CurrentChamp].lore))
                        .parentNode.parentNode
                        .appendChild(document.createElement("h4"))
                        .appendChild(document.createTextNode("Abilities"))
                        .parentNode.parentNode
                        .appendChild(document.createElement("h5"))
                        .appendChild(document.createTextNode(spellName[0]))
                        .parentNode.parentNode
                        .appendChild(document.createElement("p"))
                        .appendChild(document.createTextNode(spellDescription[0]))
                        .parentNode.parentNode
                        .appendChild(SpellQ)
                        .parentNode
                        .appendChild(document.createElement("h5"))
                        .appendChild(document.createTextNode(spellName[1]))
                        .parentNode.parentNode
                        .appendChild(document.createElement("p"))
                        .appendChild(document.createTextNode(spellDescription[1]))
                        .parentNode.parentNode
                        .appendChild(SpellW)
                        .parentNode
                        .appendChild(document.createElement("h5"))
                        .appendChild(document.createTextNode(spellName[2]))
                        .parentNode.parentNode
                        .appendChild(document.createElement("p"))
                        .appendChild(document.createTextNode(spellDescription[2]))
                        .parentNode.parentNode
                        .appendChild(SpellE)
                        .parentNode
                        .appendChild(document.createElement("h5"))
                        .appendChild(document.createTextNode(spellName[3]))
                        .parentNode.parentNode
                        .appendChild(document.createElement("p"))
                        .appendChild(document.createTextNode(spellDescription[3]))
                        .parentNode.parentNode
                        .appendChild(SpellR)
                        .parentNode
                        .appendChild(document.createElement("h4"))
                        .appendChild(document.createTextNode("Passive"))
                        .parentNode.parentNode
                        .appendChild(document.createElement("h5"))
                        .appendChild(document.createTextNode(spellName[4]))
                        .parentNode.parentNode
                        .appendChild(document.createElement("p"))
                        .appendChild(document.createTextNode(spellDescription[4]))
                        .parentNode.parentNode
                        .appendChild(SpellP)
                        .parentNode;
                    
                        


                        
                        element.insertBefore(article, child)
                        
                    })
                }
            }
            
            
    })
    
    
    document.getElementById("All").addEventListener("click", function(){
        //console.log(this.getAttribute('data-filter'));
        storeValue('champFilter',this.getAttribute('data-filter'));
        location.reload();

      });

    document.getElementById("Fighter").addEventListener("click", function(){
        //console.log(this.getAttribute('data-filter'));
        storeValue('champFilter',this.getAttribute('data-filter'));
        location.reload();

      });

      document.getElementById("Mage").addEventListener("click", function(){
        //console.log(this.getAttribute('data-filter'));
        storeValue('champFilter',this.getAttribute('data-filter'));
        location.reload();

      });

      document.getElementById("Support").addEventListener("click", function(){
        //console.log(this.getAttribute('data-filter'));
        storeValue('champFilter',this.getAttribute('data-filter'));
        location.reload();

      });

      document.getElementById("Tank").addEventListener("click", function(){
        //console.log(this.getAttribute('data-filter'));
        storeValue('champFilter',this.getAttribute('data-filter'));
        location.reload();

      });

      document.getElementById("Assassin").addEventListener("click", function(){
        //console.log(this.getAttribute('data-filter'));
        storeValue('champFilter',this.getAttribute('data-filter'));
        location.reload();

      });

      document.getElementById("Marksman").addEventListener("click", function(){
        //console.log(this.getAttribute('data-filter'));
        storeValue('champFilter',this.getAttribute('data-filter'));
        location.reload();

      });

})

function storeValue(key, value) {
    if (localStorage) {
        localStorage.setItem(key, value);
    } else {
        $.cookies.set(key, value);
    }
}

function getStoredValue(key) {
    if (localStorage) {
        if (localStorage.getItem(key) == null)
        {
            storeValue('champFilter', "All");
        }
        return localStorage.getItem(key);
    } else {
        return $.cookies.get(key);
    }
}