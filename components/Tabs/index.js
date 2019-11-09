// Step 2: Create Tabs
// -----------------------
// Using axios send a GET request to the address: https://lambda-times-backend.herokuapp.com/topics
// Once the data is returned console.log it and review the structure.
// Iterate over the topics creating a new Tab component and add it to the DOM
// under the .topics element.
//
//  The tab component should look like this:
//    <div class="tab">topic here</div>

const promise = axios.get("https://lambda-times-backend.herokuapp.com/topics");

promise.then(response => {
  const topics = response.data.topics;

  //   for (i = 0; i < topics.length; i++) {
  //     const greatTab = topics[i];
  //     const entryPoint = document.querySelector(".topics");
  //     entryPoint.append(newTab(greatTab));
  //   }

  topics.forEach(item => {
    const entryPoint = document.querySelector(".topics");
    const tab = newTab(item);
    entryPoint.append(tab);
  });
});

function newTab(obj) {
  //  Create Element
  const tab = document.createElement("div");

  //Add Class
  tab.classList.add("tab");

  //Add Content
  tab.textContent = obj;

  return tab;
}
