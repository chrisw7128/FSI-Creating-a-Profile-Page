let content = document.querySelector(".js-generated.content");

let header = document.createElement("h1");
header.setAttribute("class", "dog-name");
header.append("Rizzo");
content.append(header);

let dogContent = document.createElement("div");
dogContent.setAttribute("class", "dog-content");
content.append(dogContent);

let dogImage = document.createElement("img");
dogImage.setAttribute("class", "dog-image");
dogImage.setAttribute("src", "./assets/rizzo.jpg");
dogContent.append(dogImage);

let dogDetails = document.createElement("div");
dogDetails.setAttribute("class", "dog-details");
dogContent.append(dogDetails);

let header3 = document.createElement("h3");
header3.textContent = "Description:";
dogDetails.append(header3);

let p1 = document.createElement("p1");
p1.textContent =
  "This gentle dog is aloof toward her owner, and never comes when called. She always acts as though any stranger she meets will harm her, and dislikes other animals.";
dogDetails.append(p1);

let feeding = document.createElement("h3");
feeding.textContent = "Feeding Times:";
dogDetails.append(feeding);

let list = document.createElement("ul");

dogDetails.append(list);

let morning = document.createElement("li");
let afternoon = document.createElement("li");
let evening = document.createElement("li");

morning.textContent = "9:00 am";
afternoon.textContent = "12:00 pm";
evening.textContent = "5:00 pm";

list.append(morning);
list.append(afternoon);
list.append(evening);
