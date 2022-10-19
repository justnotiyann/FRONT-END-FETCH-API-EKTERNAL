const getCardContent = document.querySelector("#card_content");
const getCardBootstrap = document.querySelector(".wrapper_content");

// const data = [
//   {
//     header: "Belajar Javascript",
//     title: "Javascript",
//     body: "Mari belajar javascript dari dasar",
//   },
//   {
//     header: "Belajar Bootstrap",
//     title: "Bootstrap",
//     body: "Mari belajar Bootstrap dari dasar",
//   },
//   {
//     header: "Belajar NodeJS",
//     title: "NodeJS",
//     body: "Mari belajar NodeJS dari dasar",
//   },
// ];

// const renderComponent = (a, b, c) => {
//   const result = `
//     <div class="wrapper">
//         <div class="card_header">${a}</div>
//         <div class="card_title">${b}</div>
//         <div class="card_body">${c}</div>
//     </div>
//         `;
//   getCardContent.insertAdjacentHTML("afterbegin", result);
// };

// data.forEach((datas) => {
//   renderComponent(datas.header, datas.title, datas.body);
// });

// const apiReq = "https://reqres.in/api/users";
// const fetchData = async () => {
//   const res = await fetch(apiReq);
//   const result = await res.json();
//   console.log(result.data);
// };
// fetchData();

// FETCH DATA DARI REQRES
const renderCard = (email, firstName, lastName, avatar) => {
  const card = `
  <div class="col-lg-4">
  <div class="card" style="width: 18rem;">
      <img src="${avatar}" class="card-img-top" alt="...">
      <div class="card-body">
          <p>Hai saya ${firstName}</p>
          <p>Email saya ${email}</p>
          <p>Lastname saya ${lastName}</p>
      </div>
  </div>
</div>
    `;
  getCardBootstrap.insertAdjacentHTML("afterbegin", card);
};

// const getAllUsers = async (e) => {
const url = `https://reqres.in/api/users/`;
const data = await fetch(url);
const result = await data.json();
const array = result.data;
array.forEach((datas) => {
  const { email, first_name, last_name, avatar } = datas;
  renderCard(email, first_name, last_name, avatar);
});
// };

// FUNCTION SEARCH
const getFormSearch = document.querySelector("#form_search");
const getInputForm = document.querySelector("#input_form");
getFormSearch.addEventListener("submit", (e) => {
  e.preventDefault();
  getUsersById(getInputForm.value);
});

const getUsersById = async (e) => {
  const url = `https://reqres.in/api/users/${e}`;
  const raw = await fetch(url);
  const rawJson = await raw.json();
  const result = rawJson.data;
  console.log(result);
  renderCard(result.email, result.first_name, result.last_name, result.avatar);
};
