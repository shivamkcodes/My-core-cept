console.log("welcome to breaking news api");

// https://saurav.tech/NewsAPI/top-headlines/category/health/in.json
const showResults = (text) => {
  console.log(text.totalResults);
  let collapse = document.getElementById("collapse");
  for (let index = 0; index < text.totalResults; index++) {
    let text1 = text.articles[index];
    // console.log(text1);
    let description = text1.description;
    /*<span class="badge badge-secondary">
                  Article ${index + 1}:</span>
    */

    collapse.innerHTML += `
        <div class="card">
          <div class="card-header" id="heading${index} ">
            <h2 class="mb-1">
              <button class="btn btn-link collapsed btn-block text-left" type="button" data-toggle="collapse" data-target="#collapse${index} " aria-expanded="true" aria-controls="collapse${index} ">
                  <b class="text-dark">
                  <span class="badge badge-secondary">
                  Article ${index + 1}:</span>
               ${text1.title}</b>
              </button>
            </h2>
          </div>   
          
    
          <div id="collapse${index}" class="collapse" aria-labelledby="heading${index} " data-parent="#accordionExample">
          <img src="${
            text1.urlToImage
          }"  class="card-img-top" alt="OOPS! Image not available">
            <div class="card-body">
             ${description}. ${text1.content}
             <a href="${text1.url}" target="_blank">ReadFullNews</a>
             <br>
             <p> Published At : <b>${text1.publishedAt}</b> <br>
              Published By : <b>${text1.source.name}</b></br> 
              Author : <b>${text1.author}</b></br> 
              </p>
            </div>
          </>
          </div>
    `;
  }
};

const searchResults = () => {
  let input = document.getElementById("search");
  let btn = document.getElementById("btn");
  let newSearch = document.getElementById("newSearch");
  btn.addEventListener("click", (e) => {
    e.preventDefault();
    console.log(input.value);
    searchValue(input.value);
  });
};

const selectCategory = () => {
  let clickbutton = document.getElementById("clickbutton");
  let key = document.querySelectorAll('input[name="exampleRadios"]');

  clickbutton.addEventListener("click", (e) => {
    e.preventDefault();
    let collapse = document.getElementById("collapse");
    collapse.innerHTML = `<div class="container" id="collapse">
    <div class="accordion" id="accordionExample">
</div>
</div>`;

    let selectedValue;
    for (const i of key) {
      if (i.checked) {
        selectedValue = i.value;
        console.log(selectedValue);
        fetch(
          `https://saurav.tech/NewsAPI/top-headlines/category/${selectedValue}/in.json`
        )
          .then((res) => res.json())
          .then((data) => {
            showResults(data);
          })
          .catch((err) => console.log(err));
        break;
      }
    }
  });
};

const chooseCountry = () => {
  console.log("country wise news");

  let clickcountry = document.getElementById("clickcountry");
  let key = document.querySelectorAll('input[name="country"]');

  clickcountry.addEventListener("click", (e) => {
    e.preventDefault();
    let collapse = document.getElementById("collapse");
    collapse.innerHTML = `<div class="container" id="collapse">
    <div class="accordion" id="accordionExample">
</div>
</div>`;

    let selectedValue;
    for (const i of key) {
      if (i.checked) {
        selectedValue = i.value;
        console.log(selectedValue);
        fetch(
          `https://saurav.tech/NewsAPI/top-headlines/category/general/${selectedValue}.json`
        )
          .then((res) => res.json())
          .then((data) => {
            showResults(data);
            // console.log(data);
          })
          .catch((err) => console.log(err));
        break;
      }
    }
  });
};

const chooseSource = () => {
  console.log("source Wise News");
  let key = document.querySelectorAll('input[name="source"]');
  let sourcebutton = document.getElementById("sourcebutton");
  sourcebutton.addEventListener("click", (e) => {
    e.preventDefault();
    let collapse = document.getElementById("collapse");
    collapse.innerHTML = `<div class="container" id="collapse">
    <div class="accordion" id="accordionExample">
</div>
</div>`;
    let selectedValue;
    for (const i of key) {
      if (i.checked) {
        selectedValue = i.value;
        console.log(selectedValue);
        fetch(`https://saurav.tech/NewsAPI/everything/${selectedValue}.json`)
          .then((res) => res.json())
          .then((data) => {
            showResults(data);
            // console.log(data);
          })
          .catch((err) => console.log(err));
        break;
      }
    }
  });
};

if (window.location.href.length === 48 || window.location.href.length === 38) {
  chooseCountry();
} else if (
  window.location.href.length === 22 ||
  window.location.href.length === 32
) {
  selectCategory();
} else if (
  window.location.href.length === 37 ||
  window.location.href.length === 47
) {
  chooseSource();
}
