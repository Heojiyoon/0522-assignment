const container = document.querySelector(".container");
let pages = [];

const url = "https://api.github.com/users/john-smilga/followers?per_page=100";

const fetchFollowers = async () => {
  const response = await fetch(url);
  const data = await response.json();
  return data;
};
let index = 0;
const init = async () => {
  const followers = await fetchFollowers();
  title.textContent = "Pagination";

  pages = paginate(followers);
  setupUI();
};
const setupUI = () => {
  displayFollowers(pages[index]);
  displayButtons(btnContainer, pages, index);
};

const displayFollowers = (followers) => {
  let newFollowers = followers.map((person) => {
    const { avatar_url, login, html_url } = person;

    return `
        <article class="card">
            <img src="${avatar_url}", alt='person'/>
            <h4>${login}</h4>
            <a href="${html_url}" class="btn">view profile</a>
        </article>`;
  });

  newFollowers = newFollowers.join('');
  container.innerHTML = newFollowers;
};

const displayButtons = (container, pages, activeIndex) => {
  let btns = pages.map((_, pageIndex) => {
    return `<button class="page-btn ${
      activeIndex === pageIndex ? "active-btn" : ""
    }" data-index="${pageIndex}">
    ${pageIndex + 1}</button>`;
  });
  btns.push(`<button class="next-btn">next</button>`);
  btns.unshift(`<button class="prev-btn">prev</button>`);
  container.innerHTML = btns.join('');
};
const title = document.querySelector(".section-title h1");

const paginate = (followers) => {
  const itemsPerPage = 12; // Change the number of items per page here
  const numberOfPages = Math.ceil(followers.length / itemsPerPage);

  const newFollowers = Array.from({ length: numberOfPages }, (_, index) => {
    const start = index * itemsPerPage;
    return followers.slice(start, start + itemsPerPage);
  });

  return newFollowers;
};
const btnContainer = document.querySelector(".btn-container");

btnContainer.addEventListener("click", function (e) {
  if (e.target.classList.contains("btn-container")) return;

  switch (true) {
    case e.target.classList.contains("page-btn"):
      index = parseInt(e.target.dataset.index);
      break;
    case e.target.classList.contains("next-btn"):
      index++;
      if (index > pages.length - 1) {
        index = 0;
      }
      break;
    case e.target.classList.contains("prev-btn"):
      index--;
      if (index < 0) {
        index = pages.length - 1;
      }
      break;
  }

  setupUI();
});

init();

/* (1) querySelector를 이용하여 해당 요소를 선택하여 title 변수에 할당하세요.
const title = document.querySelector('.section-title h1');

// (2)
const url = "https://api.github.com/users/john-smilga/followers?per_page=100";

const fetchFollowers = async () => {
  const response = await fetch(url);
  const data = await response.json();
  return data;
};

const init = async () => {
  const followers = await fetchFollowers();
  title.textContent = "Pagination";
  displayFollowers(followers);
  displayButtons(btnContainer, [0, 1, 2, 3, 4, 5, 6, 7, 8, 9], index);
};

let index = 0; // 추가: 초기 인덱스 설정

init();

// (1) querySelector를 이용하여 해당 요소를 선택하여 container 변수에 할당하세요.
const container = document.querySelector('.container');

const displayFollowers = (followers) => {
  let newFollowers = followers.map((person) => {

    const { avatar_url, login, html_url } = person;

    return `
      <article class="card">
        <img src="${avatar_url}" alt="person"/>
        <h4>${login}</h4>
        <a href="${html_url}" class="btn">view profile</a>
      </article>`;
  });

  newFollowers = newFollowers.join('');
  container.innerHTML = newFollowers;
};

// (1) querySelector를 이용하여 해당 요소를 선택하여 container 변수에 할당하세요.
const btnContainer = document.querySelector('.btn-container');

// (2)
const displayButtons = (container, pages, activeIndex) => {
  let btns = pages.map((pageIndex) => {
    return `<button class="page-btn ${
      activeIndex === pageIndex ? "active-btn" : ""
    }" data-index="${pageIndex}">
    ${pageIndex + 1}</button>`;
  });
  btns.push(`<button class="next-btn">next</button>`);
  btns.unshift(`<button class="prev-btn">prev</button>`);
  container.innerHTML = btns.join("");
};

// 버튼에 이벤트 리스너 추가
btnContainer.addEventListener("click", function (e) {
  if (e.target.classList.contains("page-btn")) {
    const index = parseInt(e.target.dataset.index);
    // 페이지 버튼 클릭 시 해당 인덱스로 이동
    displayFollowers(pages[index]);
  } else if (e.target.classList.contains("next-btn")) {
    // 다음 버튼 클릭 시 다음 인덱스로 이동
    displayFollowers(pages[++index % pages.length]);
  } else if (e.target.classList.contains("prev-btn")) {
    // 이전 버튼 클릭 시 이전 인덱스로 이동
    displayFollowers(pages[--index < 0 ? pages.length - 1 : index]);
  }
});*/


/*const title = document.querySelector('.section-title h1');
const container = document.querySelector('.container');
const btnContainer = document.querySelector('.btn-container');

const fetchFollowers = async () => {
  const response = await fetch(url);
  const data = await response.json();
  return data;
};

const init = async () => {
  const followers = await fetchFollowers();
  title.textContent = "Pagination";
  displayFollowers(followers);
  displayButtons(btnContainer, [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]);
};

init();

const displayFollowers = (followers) => {
  let newFollowers = followers.map((person) => {
    const { avatar_url, login, html_url } = person;
    return `
      <article class="card">
        <img src="${avatar_url}", alt='person'/>
        <h4>${login}</h4>
        <a href="${html_url}" class="btn">view profile</a>
      </article>`;
  });

  newFollowers = newFollowers.join('');
  container.innerHTML = newFollowers;
};

const displayButtons = (container, pages) => {
  let btns = pages.map((pageIndex) => {
    return `<button class="page-btn" data-index="${pageIndex}">
      ${pageIndex + 1}</button>`;
  });
  btns.push(`<button class="next-btn">next</button>`);
  btns.unshift(`<button class="prev-btn">prev</button>`);
  container.innerHTML = btns.join('');
};
*/

/*
// (1) querySelector를 이용하여 해당 요소를 선택하여 title 변수에 할당하세요.
const title = 
document.querySelector('.section-title h1');

// (2) 
const url = "https://api.github.com/users/john-smilga/followers?per_page=100";

const fetchFollowers = async () => {

const response = await fetch(url);
//fetch 백에서 서버 가져올 때 사용하기위해
const data = await response.json();
//data는 json형태를 러프하게 담고 있기 때문에....

 // .catch((error) => console.log(error))

  // 데이터 가져오기

	return data;
};

const init = async () => { 
  
  // fetchFollowers 함수의 반환값을 followers에 저장하기
	const followers = await fetchFollowers();
	// Loading -> Pagination 텍스트 수정
	title.textContent = "Pagination";
  displayFollowers(followers);
   displayButtons(btnContainer, [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]);
};


init();


// (1) querySelector를 이용하여 해당 요소를 선택하여 container 변수에 할당하세요.
const container = document.querySelector('.container');

const displayFollowers = (followers) => {
  let newFollowers = followers.map((person) => {
			// map 함수를 활용하여 각 팔로워들의 정보를 보여주는 코드를 작성하세요.
			// avatar_url은 프로필 사진 url, login은 팔로워의 이름, html_url은 팔로워의 github 주소입니다.
      const { avatar_url, login, html_url } = person;
      //구조 분해 할당
      //밑에는 returngotj html에 삽입
      
      return `
      <article class="card">
        <img src="${avatar_url}", alt='person'/><h4>${login}</h4>
        <a href="${html_url}" class="btn">view profile</a>
      </article>`;

			// 잘 모르겠다면 5/11 정기세션 실습 문제 2번 코드를 참고해보세요!
    });

	newFollowers = newFollowers.join('');
	container.innerHTML = newFollowers;
};
// (1) querySelector를 이용하여 해당 요소를 선택하여 container 변수에 할당하세요.
const btnContainer = document.querySelector('.btn-container');

// (2)
const displayButtons = (container, pages, ) => {
  //컨테이너는 버튼들이 그려질 공간을 참고하고 있음
  let btns = pages.map((pageIndex) => {
    //페이지 인덱스가 배열 받아와서 0123456ㅛ 되게죠
    //위치하는 공간을 말하는거  pages = 페이지별로 별로 무슨 데이터가 들어가는지
    //(4)
    //activeIndex와 pageIndex 번호가 같으면 active-btn 클래스를, 
    //같지 않으면 ’’(빈 문자열)을 적용할 수 있도록 삼항연산자를 이용하여 작성
    //activeIndex === pageIndex ? ".active-btn" :' ';
    //달러사인 안데 표현식

    //12345678910이 드ㄹ어가는거..
		return `<button class="page-btn" data-index="${pageIndex}">
		    ${pageIndex + 1}</button>`;
  });
  btns.push(`<button class="next-btn">next</button>`);
  //버튼즈 뒤에 넥스트버튼
  btns.unshift(`<button class="prev-btn">prev</button>`);
  //버튼즈 앞에 프리브 버튼

  container.innerHTML = btns.join("");
};


//버튼에 이벤트 달기
//에드 이벤트 라수너

//10페이지에서 넘어가면 0페이지로 갈 수 있겠끔@

//100개를 10개의 배열로 나눠서 저장!
//0~9까지 index로 접근


*/


/*const title = document.querySelector(".section-title h1");
const container = document.querySelector(".container");
const btnContainer = document.querySelector(".btn-container");

let index = 0;
let pages = [];

// 1. 데이터 가져오기
const url = "https://api.github.com/users/john-smilga/followers?per_page=100";

const fetchFollowers = async () => {
  try {
    const response = await fetch(url);
    const data = await response.json();
    return data;
  } catch (error) {
    console.log("Error fetching followers:", error);
  }
};

const init = async () => {
  const followers = await fetchFollowers();
  title.textContent = "Pagination";

  pages = paginate(followers);
  setupUI();
};

const setupUI = () => {
  displayFollowers(pages[index]);
  displayButtons(btnContainer, pages, index);
};

// 2. 데이터 보여주기
const displayFollowers = (followers) => {
  container.innerHTML = followers
    .map(
      (person) => `
        <article class="card">
            <img src="${person.avatar_url}", alt='person'/>
            <h4>${person.login}</h4>
            <a href="${person.html_url}" class="btn">view profile</a>
        </article>`
    )
    .join("");
};

// 3. 버튼 만들기
const displayButtons = (container, pages, activeIndex) => {
  const buttons = pages.map((_, pageIndex) => {
    const isActive = activeIndex === pageIndex ? "active-btn" : "";
    return `<button class="page-btn ${isActive}" data-index="${pageIndex}">
    ${pageIndex + 1}</button>`;
  });

  buttons.unshift(`<button class="prev-btn">prev</button>`);
  buttons.push(`<button class="next-btn">next</button>`);

  container.innerHTML = buttons.join("");
};

// 4. 페이지네이션
const paginate = (followers) => {
  const itemsPerPage = 10;
  const numberOfPages = Math.ceil(followers.length / itemsPerPage);

  return Array.from({ length: numberOfPages }, (_, index) =>
    followers.slice(index * itemsPerPage, (index + 1) * itemsPerPage)
  );
};

// 버튼에 이벤트 달기
btnContainer.addEventListener("click", (e) => {
  if (e.target.classList.contains("page-btn")) {
    index = parseInt(e.target.dataset.index);
  } else if (e.target.classList.contains("next-btn")) {
    index = (index + 1) % pages.length;
  } else if (e.target.classList.contains("prev-btn")) {
    index = (index - 1 + pages.length) % pages.length;
  }
  setupUI();
});

init();
*/