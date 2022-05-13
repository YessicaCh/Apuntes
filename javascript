
window.addEventListener("load", myFunction);

async function myFunction() {
    let url = 'http://localhost:9000/api/gifts'
    let response = await fetch(url);
    if (response.ok) { 
        let gifts = await response.json();
        console.log(gifts)
        gifts.map(function(Gift) {
            console.log(Gift._id)
            console.log(Gift.name)
            const itemList =  document.createElement('div')
            itemList.setAttribute( "class", "box" );
            itemList.setAttribute( "id", Gift.name );
            itemList.onclick = function () {
                //open()
                // this.parentElement.removeChild(this);
                //document.getElementById('datos').style.display = "block";
                document.getElementById('titleElement').innerHTML  = Gift.name;
                console.log('eredado onclick')
            };

            const itemContent = document.createElement("a");
            //itemContent.setAttribute( "href", "javascript:open()" );
            itemContent.innerHTML = Gift.name;

            itemList.appendChild(itemContent)
            console.log(itemList)
            document.getElementById("listContent").appendChild(itemList);
        })

    } else {
        alert("Error-HTTP: " + response.status);
    }
   
}
