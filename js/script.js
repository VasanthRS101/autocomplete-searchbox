const searchWrapper = document.querySelector(".search-input");
const inputBox = searchWrapper.querySelector("input");
const suggBox = searchWrapper.querySelector(".autocom-box");
const searchButton = document.querySelector(".icon")
let linkTag = searchWrapper.querySelector("a");
let webLink;

inputBox.onkeyup = (e)=> {
    let userData = e.target.value;
    let emptyArray = [];
    if(userData) {
        emptyArray = suggestions.filter((data)=> {
            return data.toLocaleLowerCase().startsWith(userData.toLocaleLowerCase());
        });
        emptyArray = emptyArray.map((data)=> {
            return data = '<li>'+ data +'</li>'
        });
        searchWrapper.classList.add("active");
        showSuggestions(emptyArray);
        let allList = suggBox.querySelectorAll("li");
        for (let index = 0; index < allList.length; index++) {
           allList[index].setAttribute("onclick", "select(this)")
            
        }
    }else {
        searchWrapper.classList.remove("active");
    }
    
}

function select(element) {
    let selectedElement = element.textContent;
    inputBox.value = selectedElement;
    searchButton.onclick = ()=>{
        webLink = `https://www.google.com/search?q=${selectedElement}`;
        linkTag.setAttribute("href", webLink);
        linkTag.click();
    }
    searchWrapper.classList.remove("active");
}

function showSuggestions(list) {
    let listData;
    if(!list.length){
      userValue = inputBox.value;
      listData ='<li>'+ userValue +'</li>' 
    } else {
        listData = list.join('');
    }
    suggBox.innerHTML = listData;
}


