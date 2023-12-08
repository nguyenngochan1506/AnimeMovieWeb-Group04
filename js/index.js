import { HOST_NAME } from "./utils.js";

console.log(HOST_NAME);

const apiUrl = `${HOST_NAME}/anime?sort=view,desc&page=0&size=8`;

console.log(apiUrl);

let data;

window.addEventListener("load", async () => {
  let page = 0;
  try {
    const itemContainer = document.querySelector("#anime-list-container");

    const response = await fetch(apiUrl, {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    });

    if (!response.ok) {
      throw new Error("Lỗi. Lỗi rồi huhuhu");
    }

    data = await response.json();
    console.log(data);

    // Sử dụng dữ liệu từ API thay vì mảng cứng
    const html = data._embedded.animes
      .map((anime) => {
        return `
                <div class="col-lg-3 col-md-4 col-sm-6 position-relative p-0 mb-5 ms-xl-0 me-xl-0 me-sm-3 ms-sm-3 me-md-3 ms-md-3">
                    <img src="${anime.coverImage}" class="img-fluid" alt="${anime.name}">
                    <div class="information">
                        <div class="my-card-title fs-4">${anime.name}</div>
                        <div class="my-episodes-view d-flex justify-content-between align-items-center pe-2">
                            <span class="my-episodes fw-light">${anime.category}</span>
                            <span class="my-view fw-light">Lượt xem: ${anime.view}</span>
                        </div>
                    </div>
                </div>
            `;
      })
      .join("");

    itemContainer.innerHTML = html;

  } catch (error) {
    console.error("Lỗi. Lỗi rồi huhuhu", error);
  }

  // bien button
  const xemThemButton = document.getElementById("button_xemthem");
  xemThemButton.addEventListener('click', () => handleLoadMore(++page))
});



const handleLoadMore = async (page) => {
  document.getElementById("button_xemthem").innerHTML = `
            <div class="spinner-border text-success" role="status">
            <span class="visually-hidden">Loading...</span>
          </div>`

  try {
    const response = await fetch(`https://anime-web-production-996b.up.railway.app/anime?sort=view,desc&page=${page}&size=8`, {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    });

    if (!response.ok) {
      throw new Error("Lỗi. Lỗi rồi huhuhu");
    }

    const newData = await response.json();
    console.log(newData);

    // Thêm 6 bộ phim mới vào cuối dữ liệu hiện tại
    data._embedded.animes = data._embedded.animes.concat(
      newData._embedded.animes
    );

    const itemContainer = document.querySelector("#anime-list-container");
    if (!itemContainer) {
      throw new Error("Lỗi. Không tìm thấy phần tử #anime-list-container");
    }

    const newHtml = newData._embedded.animes
      .map((anime) => {
        return `
                    <div class="col-lg-3 col-md-4 col-sm-6 position-relative p-0 mb-5 ms-xl-0 me-xl-0 me-sm-3 ms-sm-3 me-md-3 ms-md-3">
                        <img src="${anime.coverImage}" class="img-fluid" alt="${anime.name}">
                        <div class="information">
                            <div class="my-card-title fs-4">${anime.name}</div>
                            <div class="my-episodes-view d-flex justify-content-between align-items-center pe-2">
                                <span class="my-episodes fw-light">${anime.category}</span>
                                <span class="my-view fw-light">Lượt xem: ${anime.view}</span>
                            </div>
                        </div>
                    </div>
                `;
      })
      .join("");

    itemContainer.innerHTML += newHtml;

    document.getElementById("button_xemthem").innerHTML = "Xem Thêm"

  } catch (error) {
    console.error("Lỗi. Lỗi rồi huhuhu", error);
    document.getElementById("button_xemthem").innerHTML = "Xem Thêm"
  }
};
