const showResults = (text) => {
  console.log(text.totalResults);
  let collapse = document.getElementById("collapse");
  for (let index = 0; index < text.totalResults; index++) {
    let text1 = text.articles[index];
    // console.log(text1.totalResults);
    let description = text1.description;
    collapse.innerHTML += `
          <div class="card">
            <div class="card-header" id="heading${index} ">
              <h2 class="mb-0">
                <button class="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#collapse${index} " aria-expanded="true" aria-controls="collapse${index} ">
                    <b class="text-dark">
                    <span class="badge badge-secondary">
                    Breaking News ${index + 1}:</span>
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

chooseCountry();
