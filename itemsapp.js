document.addEventListener("DOMContentLoaded", () => {

    const images = document.querySelectorAll("img");

    const paragraphs = document.querySelectorAll("p");

    const items = [];
    const element = document.getElementById("articles-content");
    const child = document.getElementById("SecondArticle");
    let itemType = getStoredValue('itemFilter');
    //console.log(itemType)
    let itemTypeTitle = itemType.replace(/([A-Z])/g, ' $1').trim()
    document.getElementById("itemCatogory").innerHTML = "Catogory: " + itemTypeTitle;
    

        fetch("https://ddragon.leagueoflegends.com/cdn/14.17.1/data/en_US/item.json")
        .then(response => response.json())
        .then(data => {
            for (let item in data.data) {
                let obj = data.data[item].maps[11];
                //console.log(obj);
                if (obj) {
                //console.log(data.data[item].maps)
                //console.log(item)
                //console.log(data.data[item].tags);
                if (itemType != "All") {
                    for(let i = 0; i < data.data[item].tags.length; i++) {
                    if (itemType == data.data[item].tags[i]) {
                        items.push(item);
                    }
                }
                } else {
                    items.push(item);
                }
            }
            
                
            }
            for (let i = 0; i < items.length; i++) {
                let Currentitem = items[i]

                        var itemImg = document.createElement('img');

                        itemImg.src = 'https://ddragon.leagueoflegends.com/cdn/14.17.1/img/item/' + data.data[Currentitem].image.full
                        itemImg.style = "display:block; margin:0 auto;";

                        var itemTitle = document.createElement('h3')
                        itemTitle.innerHTML = data.data[Currentitem].name

                        var itemDesc = document.createElement('p');
                        itemDesc.innerHTML = data.data[Currentitem].description

                        var itemPlainText = document.createElement('p')
                        itemPlainText.innerHTML = data.data[Currentitem].plaintext
                        
                        
 




                        var article = document.createElement("article")
                        .appendChild(itemTitle)
                        .parentNode
                        .appendChild(itemImg)
                        .parentNode
                        .appendChild(itemDesc)
                        .parentNode
                        .appendChild(itemPlainText)
                        .parentNode;
                    
                        


                        
                        element.insertBefore(article, child)
                        
                    
                
            }
            
            
    })
    
    
    document.getElementById("All").addEventListener("click", function(){
        //console.log(this.getAttribute('data-filter'));
        storeValue('itemFilter',this.getAttribute('data-filter'));
        location.reload();

      });

    document.getElementById("Damage").addEventListener("click", function(){
        //console.log(this.getAttribute('data-filter'));
        storeValue('itemFilter',this.getAttribute('data-filter'));
        location.reload();

      });

      document.getElementById("AttackSpeed").addEventListener("click", function(){
        //console.log(this.getAttribute('data-filter'));
        storeValue('itemFilter',this.getAttribute('data-filter'));
        location.reload();

      });

      document.getElementById("LifeSteal").addEventListener("click", function(){
        //console.log(this.getAttribute('data-filter'));
        storeValue('itemFilter',this.getAttribute('data-filter'));
        location.reload();

      });

      document.getElementById("SpellDamage").addEventListener("click", function(){
        //console.log(this.getAttribute('data-filter'));
        storeValue('itemFilter',this.getAttribute('data-filter'));
        location.reload();

      });

      document.getElementById("Health").addEventListener("click", function(){
        //console.log(this.getAttribute('data-filter'));
        storeValue('itemFilter',this.getAttribute('data-filter'));
        location.reload();

      });

      document.getElementById("SpellVamp").addEventListener("click", function(){
        //console.log(this.getAttribute('data-filter'));
        storeValue('itemFilter',this.getAttribute('data-filter'));
        location.reload();

      });

      document.getElementById("Lane").addEventListener("click", function(){
        //console.log(this.getAttribute('data-filter'));
        storeValue('itemFilter',this.getAttribute('data-filter'));
        location.reload();

      });

      document.getElementById("ManaRegen").addEventListener("click", function(){
        //console.log(this.getAttribute('data-filter'));
        storeValue('itemFilter',this.getAttribute('data-filter'));
        location.reload();

      });

      document.getElementById("SpellBlock").addEventListener("click", function(){
        //console.log(this.getAttribute('data-filter'));
        storeValue('itemFilter',this.getAttribute('data-filter'));
        location.reload();

      });

      document.getElementById("OnHit").addEventListener("click", function(){
        //console.log(this.getAttribute('data-filter'));
        storeValue('itemFilter',this.getAttribute('data-filter'));
        location.reload();

      });

      document.getElementById("Jungle").addEventListener("click", function(){
        //console.log(this.getAttribute('data-filter'));
        storeValue('itemFilter',this.getAttribute('data-filter'));
        location.reload();

      });

      document.getElementById("Trinket").addEventListener("click", function(){
        //console.log(this.getAttribute('data-filter'));
        storeValue('itemFilter',this.getAttribute('data-filter'));
        location.reload();

      });

      document.getElementById("Active").addEventListener("click", function(){
        //console.log(this.getAttribute('data-filter'));
        storeValue('itemFilter',this.getAttribute('data-filter'));
        location.reload();

      });

      document.getElementById("HealthRegen").addEventListener("click", function(){
        //console.log(this.getAttribute('data-filter'));
        storeValue('itemFilter',this.getAttribute('data-filter'));
        location.reload();

      });

      document.getElementById("Armor").addEventListener("click", function(){
        //console.log(this.getAttribute('data-filter'));
        storeValue('itemFilter',this.getAttribute('data-filter'));
        location.reload();

      });

      document.getElementById("Consumable").addEventListener("click", function(){
        //console.log(this.getAttribute('data-filter'));
        storeValue('itemFilter',this.getAttribute('data-filter'));
        location.reload();

      });

      document.getElementById("CooldownReduction").addEventListener("click", function(){
        //console.log(this.getAttribute('data-filter'));
        storeValue('itemFilter',this.getAttribute('data-filter'));
        location.reload();

      });

      document.getElementById("ArmorPenetration").addEventListener("click", function(){
        //console.log(this.getAttribute('data-filter'));
        storeValue('itemFilter',this.getAttribute('data-filter'));
        location.reload();

      });

      document.getElementById("AbilityHaste").addEventListener("click", function(){
        //console.log(this.getAttribute('data-filter'));
        storeValue('itemFilter',this.getAttribute('data-filter'));
        location.reload();

      });

      document.getElementById("Stealth").addEventListener("click", function(){
        //console.log(this.getAttribute('data-filter'));
        storeValue('itemFilter',this.getAttribute('data-filter'));
        location.reload();

      });

      document.getElementById("Vision").addEventListener("click", function(){
        //console.log(this.getAttribute('data-filter'));
        storeValue('itemFilter',this.getAttribute('data-filter'));
        location.reload();

      });

      document.getElementById("NonbootsMovement").addEventListener("click", function(){
        //console.log(this.getAttribute('data-filter'));
        storeValue('itemFilter',this.getAttribute('data-filter'));
        location.reload();

      });

      document.getElementById("Tenacity").addEventListener("click", function(){
        //console.log(this.getAttribute('data-filter'));
        storeValue('itemFilter',this.getAttribute('data-filter'));
        location.reload();

      });

      document.getElementById("CriticalStrike").addEventListener("click", function(){
        //console.log(this.getAttribute('data-filter'));
        storeValue('itemFilter',this.getAttribute('data-filter'));
        location.reload();

      });

      document.getElementById("MagicPenetration").addEventListener("click", function(){
        //console.log(this.getAttribute('data-filter'));
        storeValue('itemFilter',this.getAttribute('data-filter'));
        location.reload();

      });

      document.getElementById("MagicResist").addEventListener("click", function(){
        //console.log(this.getAttribute('data-filter'));
        storeValue('itemFilter',this.getAttribute('data-filter'));
        location.reload();

      });

      document.getElementById("Boots").addEventListener("click", function(){
        //console.log(this.getAttribute('data-filter'));
        storeValue('itemFilter',this.getAttribute('data-filter'));
        location.reload();

      });

      document.getElementById("Mana").addEventListener("click", function(){
        //console.log(this.getAttribute('data-filter'));
        storeValue('itemFilter',this.getAttribute('data-filter'));
        location.reload();

      });

      document.getElementById("Aura").addEventListener("click", function(){
        //console.log(this.getAttribute('data-filter'));
        storeValue('itemFilter',this.getAttribute('data-filter'));
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
            storeValue('itemFilter', "All");
        }
        return localStorage.getItem(key);
    } else {
        return $.cookies.get(key);
    }
}

