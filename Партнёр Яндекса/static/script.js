document.addEventListener("DOMContentLoaded", function () {
  const hamburgerMenu = document.getElementById("hamburgerMenu");
  const hiddenMenu = document.getElementById("hiddenMenu");
  const menuLinks = hiddenMenu.querySelectorAll("a");

  // Открытие/закрытие меню по клику на гамбургер
  hamburgerMenu.addEventListener("click", function () {
    const lines = hamburgerMenu.querySelectorAll(".line");

    if (hamburgerMenu.classList.contains("active")) {
      // Сбрасываем бургер в исходное состояние
      lines[0].style.transform = "translateY(0) rotate(0)"; // Первая линия
      lines[1].style.opacity = "1"; // Средняя линия
      lines[2].style.transform = "translateY(0) rotate(0)"; // Третья линия

      // Плавное закрытие меню
      hiddenMenu.style.transition = "opacity 0.4s ease, transform 0.4s ease";
      hiddenMenu.style.opacity = "0";
      hiddenMenu.style.transform = "translateY(-20px)";
      setTimeout(() => {
        hiddenMenu.classList.remove("visible");
      }, 400); // Задержка до завершения анимации скрытия меню
      hamburgerMenu.classList.remove("active");
    } else {
      // Преобразуем линии в стрелочку
      lines[0].style.transform = "translateY(8px) rotate(45deg)"; // Первая линия
      lines[1].style.opacity = "0"; // Средняя линия исчезает
      lines[2].style.transform = "translateY(-8px) rotate(-45deg)"; // Третья линия

      // Плавное открытие меню
      hiddenMenu.classList.add("visible");
      hiddenMenu.style.transition = "opacity 0.4s ease, transform 0.4s ease";
      hiddenMenu.style.opacity = "1";
      hiddenMenu.style.transform = "translateY(0)";

      hamburgerMenu.classList.add("active");
    }
  });

  // Закрытие меню при клике на любой пункт меню
  menuLinks.forEach(function (link) {
    link.addEventListener("click", function () {
      // Плавное закрытие меню и анимация бургер-меню
      hiddenMenu.style.transition = "opacity 0.4s ease, transform 0.4s ease";
      hiddenMenu.style.opacity = "0";
      hiddenMenu.style.transform = "translateY(-20px)";

      setTimeout(() => {
        hiddenMenu.classList.remove("visible");
      }, 400); // Задержка до завершения анимации

      // Сбрасываем бургер-меню в исходное состояние
      const lines = hamburgerMenu.querySelectorAll(".line");
      lines[0].style.transform = "translateY(0) rotate(0)";
      lines[1].style.opacity = "1";
      lines[2].style.transform = "translateY(0) rotate(0)";
      hamburgerMenu.classList.remove("active");
    });
  });
});

const hourlyRates = {
  adler: {
      on_foot: 247,
      bicycle: 263,
      car: 403,
  },
  almetyevsk: {
      on_foot: 263,
      bicycle: 280,
      car: 430,
  },
  anapa: {
      on_foot: 247,
      bicycle: 263,
      car: 403,
  },
  arkhangelsk: {
      on_foot: 263,
      bicycle: 280,
      car: 430,
  },
  astrakhan: {
      on_foot: 263,
      bicycle: 280,
      car: 430,
  },
  balashiha: {
      on_foot: 328,
      bicycle: 349,
      car: 538,
  },
  barnaul: {
      on_foot: 247,
      bicycle: 263,
      car: 403,
  },
  belgorod: {
      on_foot: 263,
      bicycle: 280,
      car: 430,
  },
  bryansk: {
      on_foot: 263,
      bicycle: 280,
      car: 430,
  },
  veliky_novgorod: {
      on_foot: 247,
      bicycle: 263,
      car: 403,
  },
  vidnoe: {
      on_foot: 328,
      bicycle: 349,
      car: 538,
  },
  vladivostok: {
      on_foot: 263,
      bicycle: 280,
      car: 430,
  },
  vladykavkaz: {
      on_foot: 247,
      bicycle: 263,
      car: 403,
  },
  vladimir: {
      on_foot: 263,
      bicycle: 280,
      car: 430,
  },
  volgograd: {
      on_foot: 328,
      bicycle: 349,
      car: 538,
  },
  volzhsky: {
      on_foot: 247,
      bicycle: 263,
      car: 403,
  },
  vologda: {
      on_foot: 263,
      bicycle: 280,
      car: 430,
  },
  voronezh: {
      on_foot: 328,
      bicycle: 349,
      car: 538,
  },
  vsevolozhsk: {
      on_foot: 328,
      bicycle: 349,
      car: 538,
  },
  gelendzhik: {
      on_foot: 247,
      bicycle: 263,
      car: 403,
  },
  dzerzhinsk: {
      on_foot: 328,
      bicycle: 349,
      car: 538,
  },
  dmitrov: {
      on_foot: 328,
      bicycle: 349,
      car: 538,
  },
  dolgoprudny: {
      on_foot: 328,
      bicycle: 349,
      car: 538,
  },
  domodedovo: {
      on_foot: 328,
      bicycle: 349,
      car: 538,
  },
  egoryevsk: {
      on_foot: 328,
      bicycle: 349,
      car: 538,
  },
  yekaterinburg: {
      on_foot: 328,
      bicycle: 349,
      car: 538,
  },
  zheleznodorozhny: {
      on_foot: 328,
      bicycle: 349,
      car: 538,
  },
  zhukovsky: {
      on_foot: 328,
      bicycle: 349,
      car: 538,
  },
  zelenograd: {
      on_foot: 328,
      bicycle: 349,
      car: 538,
  },
  ivanovo: {
      on_foot: 263,
      bicycle: 280,
      car: 430,
  },
  ivanteevka: {
      on_foot: 328,
      bicycle: 349,
      car: 538,
  },
  izhevsk: {
      on_foot: 263,
      bicycle: 280,
      car: 430,
  },
  irkutsk: {
      on_foot: 247,
      bicycle: 263,
      car: 403,
  },
  yoshkar_ola: {
      on_foot: 247,
      bicycle: 263,
      car: 403,
  },
  kazan: {
      on_foot: 328,
      bicycle: 349,
      car: 538,
  },
  kaliningrad: {
      on_foot: 247,
      bicycle: 263,
      car: 403,
  },
  kaluga: {
      on_foot: 247,
      bicycle: 263,
      car: 403,
  },
  kemerovo: {
      on_foot: 247,
      bicycle: 263,
      car: 403,
  },
  kirov: {
      on_foot: 247,
      bicycle: 263,
      car: 403,
  },
  kolomna: {
      on_foot: 328,
      bicycle: 349,
      car: 538,
  },
  kolpino: {
      on_foot: 328,
      bicycle: 349,
      car: 538,
  },
  korolev: {
      on_foot: 328,
      bicycle: 349,
      car: 538,
  },
  kostroma: {
      on_foot: 263,
      bicycle: 280,
      car: 430,
  },
  krasnogorsk: {
      on_foot: 328,
      bicycle: 349,
      car: 538,
  },
  krasnodar: {
      on_foot: 328,
      bicycle: 349,
      car: 538,
  },
  krasnoyarsk: {
      on_foot: 328,
      bicycle: 349,
      car: 538,
  },
  kudrovo: {
      on_foot: 328,
      bicycle: 349,
      car: 538,
  },
  kursk: {
      on_foot: 247,
      bicycle: 263,
      car: 403,
  },
  lipetsk: {
      on_foot: 263,
      bicycle: 280,
      car: 430,
  },
  lobnya: {
      on_foot: 328,
      bicycle: 349,
      car: 538,
  },
  lyubertsy: {
      on_foot: 328,
      bicycle: 349,
      car: 538,
  },
  magnitogorsk: {
      on_foot: 247,
      bicycle: 263,
      car: 403,
  },
  maikop: {
      on_foot: 263,
      bicycle: 280,
      car: 430,
  },
  moskva: {
      on_foot: 376,
      bicycle: 403,
      car: 618,
  },
  murino: {
      on_foot: 328,
      bicycle: 349,
      car: 538,
  },
  murmansk: {
      on_foot: 263,
      bicycle: 280,
      car: 430,
  },
  mytishchi: {
      on_foot: 328,
      bicycle: 349,
      car: 538,
  },
  naberezhnye_chelny: {
      on_foot: 263,
      bicycle: 280,
      car: 430,
  },
  nalchik: {
      on_foot: 247,
      bicycle: 263,
      car: 403,
  },
  naro_fominsk: {
      on_foot: 328,
      bicycle: 349,
      car: 538,
  },
  nizhnevartovsk: {
      on_foot: 247,
      bicycle: 263,
      car: 403,
  },
  nizhnekamsk: {
      on_foot: 247,
      bicycle: 263,
      car: 403,
  },
  nizhniy_novgorod: {
      on_foot: 328,
      bicycle: 349,
      car: 538,
  },
  novokuznetsk: {
      on_foot: 247,
      bicycle: 263,
      car: 403,
  },
  novorossiysk: {
      on_foot: 247,
      bicycle: 263,
      car: 403,
  },
  novosibirsk: {
      on_foot: 328,
      bicycle: 349,
      car: 538,
  },
  novyy_urengoy: {
      on_foot: 263,
      bicycle: 280,
      car: 430,
  },
  noginsk: {
      on_foot: 328,
      bicycle: 349,
      car: 538,
  },
  obninsk: {
      on_foot: 263,
      bicycle: 280,
      car: 430,
  },
  odintsovo: {
      on_foot: 328,
      bicycle: 349,
      car: 538,
  },
  omsk: {
      on_foot: 328,
      bicycle: 349,
      car: 538,
  },
  orel: {
      on_foot: 247,
      bicycle: 263,
      car: 403,
  },
  orenburg: {
      on_foot: 247,
      bicycle: 263,
      car: 403,
  },
  penza: {
      on_foot: 247,
      bicycle: 263,
      car: 403,
  },
  perm: {
      on_foot: 328,
      bicycle: 349,
      car: 538,
  },
  petrozavodsk: {
      on_foot: 263,
      bicycle: 280,
      car: 430,
  },
  podolsk: {
      on_foot: 328,
      bicycle: 349,
      car: 538,
  },
  pskov: {
      on_foot: 247,
      bicycle: 263,
      car: 403,
  },
  putilkovo: {
      on_foot: 328,
      bicycle: 349,
      car: 538,
  },
  pushkin: {
      on_foot: 328,
      bicycle: 349,
      car: 538,
  },
  pushkino: {
      on_foot: 328,
      bicycle: 349,
      car: 538,
  },
  pyatigorsk: {
      on_foot: 247,
      bicycle: 263,
      car: 403,
  },
  ramenskoe: {
      on_foot: 328,
      bicycle: 349,
      car: 538,
  },
  rasskazovka: {
      on_foot: 328,
      bicycle: 349,
      car: 538,
  },
  reutov: {
      on_foot: 328,
      bicycle: 349,
      car: 538,
  },
  rostov_na_donu: {
      on_foot: 328,
      bicycle: 349,
      car: 538,
  },
  ryazan: {
      on_foot: 263,
      bicycle: 280,
      car: 430,
  },
  samara: {
    on_foot: 328,
    bicycle: 349,
    car: 538,
  },
  sankt_peterburg: {
      on_foot: 376,
      bicycle: 403,
      car: 618,
  },
  saransk: {
      on_foot: 247,
      bicycle: 263,
      car: 403,
  },
  saratov: {
      on_foot: 263,
      bicycle: 280,
      car: 430,
  },
  sergiev_posad: {
      on_foot: 328,
      bicycle: 349,
      car: 538,
  },
  serpukhov: {
      on_foot: 328,
      bicycle: 349,
      car: 538,
  },
  smolensk: {
      on_foot: 263,
      bicycle: 280,
      car: 430,
  },
  solnechnogorsk: {
      on_foot: 328,
      bicycle: 349,
      car: 538,
  },
  sochi: {
      on_foot: 247,
      bicycle: 263,
      car: 403,
  },
  stavropol: {
      on_foot: 263,
      bicycle: 280,
      car: 430,
  },
  stary_oskol: {
      on_foot: 247,
      bicycle: 263,
      car: 403,
  },
  sterlitamak: {
      on_foot: 247,
      bicycle: 263,
      car: 403,
  },
  stupino: {
      on_foot: 328,
      bicycle: 349,
      car: 538,
  },
  surgut: {
      on_foot: 263,
      bicycle: 280,
      car: 430,
  },
  syktyvkar: {
      on_foot: 247,
      bicycle: 263,
      car: 403,
  },
  taganrog: {
      on_foot: 263,
      bicycle: 280,
      car: 430,
  },
  tambov: {
      on_foot: 263,
      bicycle: 280,
      car: 430,
  },
  tver: {
      on_foot: 263,
      bicycle: 280,
      car: 430,
  },
  tolyatti: {
      on_foot: 247,
      bicycle: 263,
      car: 403,
  },
  tomsk: {
      on_foot: 247,
      bicycle: 263,
      car: 403,
  },
  troitsk: {
      on_foot: 328,
      bicycle: 349,
      car: 538,
  },
  tula: {
      on_foot: 263,
      bicycle: 280,
      car: 430,
  },
  tyumen: {
      on_foot: 263,
      bicycle: 280,
      car: 430,
  },
  ulyanovsk: {
      on_foot: 263,
      bicycle: 280,
      car: 430,
  },
  ufa: {
      on_foot: 328,
      bicycle: 349,
      car: 538,
  },
  khabarovsk: {
      on_foot: 263,
      bicycle: 280,
      car: 430,
  },
  khanty_mansijsk: {
      on_foot: 263,
      bicycle: 280,
      car: 430,
  },
  khimki: {
      on_foot: 328,
      bicycle: 349,
      car: 538,
  },
  cheboksary: {
      on_foot: 247,
      bicycle: 263,
      car: 403,
  },
  chelyabinsk: {
      on_foot: 328,
      bicycle: 349,
      car: 538,
  },
  cherepovets: {
      on_foot: 263,
      bicycle: 280,
      car: 430,
  },
  chekhov: {
      on_foot: 328,
      bicycle: 349,
      car: 538,
  },
  shushary: {
      on_foot: 328,
      bicycle: 349,
      car: 538,
  },
  shchelkovo: {
      on_foot: 328,
      bicycle: 349,
      car: 538,
  },
  shcherbinka: {
      on_foot: 328,
      bicycle: 349,
      car: 538,
  },
  elektrostal: {
      on_foot: 328,
      bicycle: 349,
      car: 538,
  },
  yuzhnoe_butovo: {
      on_foot: 328,
      bicycle: 349,
      car: 538,
  },
  yaroslavl: {
      on_foot: 263,
      bicycle: 280,
      car: 430,
  }
};

// Переменные для хранения выбранных значений города и транспорта
let selectedCity = "moskva"; // По умолчанию Москва
let selectedTransport = "car"; // По умолчанию Пеший курьер

// Обработчик для рабочих часов в день
document
  .getElementById("hoursPerDay")
  .addEventListener("input", function (event) {
    const value = event.target.value;
    document.getElementById("hoursDisplay").textContent = value; // Обновляем значение в span
    calculateIncome(); // Пересчитываем доход
  });

// Обработчик для рабочих дней в месяц
document
  .getElementById("daysPerMonth")
  .addEventListener("input", function (event) {
    const value = event.target.value;
    document.getElementById("daysDisplay").textContent = value; // Обновляем значение в span
    calculateIncome(); // Пересчитываем доход
  });

// Обработчик для выбора города
document.getElementById("cityChoice").addEventListener("click", function () {
  document.getElementById("cityOptions").style.display = "block";
});

// Обработчик для выбора транспорта
document
  .getElementById("transportChoice")
  .addEventListener("click", function () {
    document.getElementById("transportOptions").style.display = "block";
  });

// Обработчик для выбора города из выпадающего списка
document
  .getElementById("cityOptions")
  .addEventListener("click", function (event) {
    if (event.target.tagName === "LI") {
      selectedCity = event.target.getAttribute("data-value"); // Сохраняем выбранный город
      document.getElementById("cityChoice").querySelector("p").textContent =
        event.target.textContent;
      document.getElementById("cityOptions").style.display = "none";
      calculateIncome(); // Пересчитываем доход
    }
  });

// Обработчик для выбора способа передвижения
document
  .getElementById("transportOptions")
  .addEventListener("click", function (event) {
    if (event.target.tagName === "LI") {
      selectedTransport = event.target.getAttribute("data-value"); // Сохраняем выбранный транспорт
      document
        .getElementById("transportChoice")
        .querySelector("p").textContent = event.target.textContent;
      document.getElementById("transportOptions").style.display = "none";
      calculateIncome(); // Пересчитываем доход
    }
  });

document
  .querySelectorAll(".block_5-leftside-questions-item")
  .forEach((item) => {
    const img = item.querySelector("img");
    const answer = item.querySelector(".answer");

    item.addEventListener("click", () => {
      const isOpen = answer.classList.contains("open");

      // Закрыть все ответы
      document
        .querySelectorAll(".answer")
        .forEach((ans) => ans.classList.remove("open"));
      document
        .querySelectorAll(".block_5-leftside-questions-item img")
        .forEach((img) => img.classList.remove("rotate"));

      // Если текущий был закрыт, то открыть
      if (!isOpen) {
        answer.classList.add("open");
        img.classList.add("rotate");
      }
    });
  });

document.addEventListener("DOMContentLoaded", () => {
  const blocks = document.querySelectorAll(".block_1-info");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          observer.unobserve(entry.target); // Останавливаем наблюдение после появления
        }
      });
    },
    {
      threshold: 0.1, // Блок виден на 10%
    }
  );

  blocks.forEach((block) => observer.observe(block));
});

document.addEventListener("DOMContentLoaded", () => {
  const blocks = document.querySelectorAll(".block_2-content-card");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          observer.unobserve(entry.target); // Останавливаем наблюдение после появления
        }
      });
    },
    {
      threshold: 0.1, // Блок виден на 10%
    }
  );

  blocks.forEach((block) => observer.observe(block));
});

document.addEventListener("DOMContentLoaded", () => {
  const blocks = document.querySelectorAll(".block_4-move-card-item");
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          observer.unobserve(entry.target); // Останавливаем наблюдение после появления
        }
      });
    },
    {
      threshold: 0.1, // Блок виден на 10%
    }
  );

  blocks.forEach((block) => observer.observe(block));
});

document.addEventListener("DOMContentLoaded", () => {
  const blocks = document.querySelectorAll(".block_4-calculated");
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          observer.unobserve(entry.target); // Останавливаем наблюдение после появления
        }
      });
    },
    {
      threshold: 0.1, // Блок виден на 10%
    }
  );

  blocks.forEach((block) => observer.observe(block));
});

document.addEventListener("DOMContentLoaded", () => {
  const blocks = document.querySelectorAll("#one");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          observer.unobserve(entry.target); // Останавливаем наблюдение после появления
        }
      });
    },
    {
      threshold: 0.1, // Блок виден на 10%
    }
  );

  blocks.forEach((block) => observer.observe(block));
});

document.addEventListener("DOMContentLoaded", () => {
  const blocks = document.querySelectorAll("#one");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          observer.unobserve(entry.target); // Останавливаем наблюдение после появления
        }
      });
    },
    {
      threshold: 0.1, // Блок виден на 10%
    }
  );

  blocks.forEach((block) => observer.observe(block));
});

document.addEventListener("DOMContentLoaded", () => {
  const blocks = document.querySelectorAll("#two");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
          // Добавляем задержку на основе индекса блока
          entry.target.classList.add("visible");
          observer.unobserve(entry.target); // Останавливаем наблюдение после появления
        }
      });
    },
    {
      threshold: 0.1, // Блок виден на 10%
    }
  );

  blocks.forEach((block) => observer.observe(block));
});

document.addEventListener("DOMContentLoaded", () => {
  const blocks = document.querySelectorAll("#three");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          observer.unobserve(entry.target); // Останавливаем наблюдение после появления
        }
      });
    },
    {
      threshold: 0.1, // Блок виден на 10%
    }
  );

  blocks.forEach((block) => observer.observe(block));
});

document.addEventListener("DOMContentLoaded", () => {
  const blocks = document.querySelectorAll("#four");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          observer.unobserve(entry.target); // Останавливаем наблюдение после появления
        }
      });
    },
    {
      threshold: 0.1, // Блок виден на 10%
    }
  );

  blocks.forEach((block) => observer.observe(block));
});

document.addEventListener("DOMContentLoaded", () => {
  const blocks = document.querySelectorAll(".block_3-button");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          observer.unobserve(entry.target); // Останавливаем наблюдение после появления
        }
      });
    },
    {
      threshold: 0.1, // Блок виден на 10%
    }
  );

  blocks.forEach((block) => observer.observe(block));
});

document.addEventListener("DOMContentLoaded", () => {
  const blocks = document.querySelectorAll(".block_4-move-card-item");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          observer.unobserve(entry.target); // Останавливаем наблюдение после появления
        }
      });
    },
    {
      threshold: 0.1, // Блок виден на 10%
    }
  );

  blocks.forEach((block) => observer.observe(block));
});

document.addEventListener("DOMContentLoaded", () => {
  const blocks = document.querySelectorAll(".block_5-leftside-questions-item");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          observer.unobserve(entry.target); // Останавливаем наблюдение после появления
        }
      });
    },
    {
      threshold: 0.1, // Блок виден на 10%
    }
  );

  blocks.forEach((block) => observer.observe(block));
});

document.addEventListener("DOMContentLoaded", () => {
  const blocks = document.querySelectorAll(".help_info-start");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          observer.unobserve(entry.target); // Останавливаем наблюдение после появления
        }
      });
    },
    {
      threshold: 0.1, // Блок виден на 10%
    }
  );

  blocks.forEach((block) => observer.observe(block));
});

document.addEventListener("DOMContentLoaded", () => {
  const blocks = document.querySelectorAll(".help_info-support");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          observer.unobserve(entry.target); // Останавливаем наблюдение после появления
        }
      });
    },
    {
      threshold: 0.1, // Блок виден на 10%
    }
  );

  blocks.forEach((block) => observer.observe(block));
});

document.addEventListener("DOMContentLoaded", () => {
  const blocks = document.querySelectorAll(".feedback-section");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          observer.unobserve(entry.target); // Останавливаем наблюдение после появления
        }
      });
    },
    {
      threshold: 0.1, // Блок виден на 10%
    }
  );

  blocks.forEach((block) => observer.observe(block));
});

document.addEventListener("DOMContentLoaded", () => {
  const blocks = document.querySelectorAll(".feedback-section:nth-child(3)");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          observer.unobserve(entry.target); // Останавливаем наблюдение после появления
        }
      });
    },
    {
      threshold: 0.1, // Блок виден на 10%
    }
  );

  blocks.forEach((block) => observer.observe(block));
});



function calculateIncome() {
  const dailyHours = parseInt(document.getElementById("hoursPerDay").value, 10);
  const monthlyDays = parseInt(
    document.getElementById("daysPerMonth").value,
    10
  );

  // Получаем тариф по выбранному городу и транспорту
  const ratePerHour = hourlyRates[selectedCity][selectedTransport];

  // Подсчет дохода
  const income = dailyHours * monthlyDays * ratePerHour;

  // Обновляем отображение дохода в блоке
  document.querySelector(
    ".block_4-calculated-leftside-profit span"
  ).textContent = `${income.toLocaleString()} ₽`;
}

// Инициализация значений на старте
document.getElementById("hoursDisplay").textContent =
  document.getElementById("hoursPerDay").value;
document.getElementById("daysDisplay").textContent =
  document.getElementById("daysPerMonth").value;

// Устанавливаем начальные значения для города и транспорта
document.getElementById("cityChoice").querySelector("p").textContent = "Москва"; // Можно поставить начальный город
document.getElementById("transportChoice").querySelector("p").textContent =
  "На машине"; // Можно поставить начальный транспорт

// Пересчитываем доход на старте
calculateIncome();


// Выбираем элементы
const popup = document.getElementById('popup');
const targetBlock = document.getElementById('Courier'); // Блок, при достижении которого появляется окно

// Добавляем событие прокрутки
window.addEventListener('scroll', () => {
  const targetPosition = targetBlock.getBoundingClientRect().top; // Позиция блока относительно окна
  const windowHeight = window.innerHeight; // Высота окна браузера

  // Проверяем, достиг ли пользователь нужного блока
  if (targetPosition < windowHeight && targetPosition > 0) {
    popup.classList.add('active'); // Показываем окно
  } else {
    popup.classList.remove('active'); // Прячем окно
  }
});

// Добавляем обработчик клика (по желанию)
popup.addEventListener('click', () => {
  const block3 = document.getElementById('.help');
  block3.scrollIntoView({ behavior: 'smooth' }); // Плавный переход к блоку
});

// Добавляем событие прокрутки
window.addEventListener('scroll', () => {
  const targetPosition = targetBlock.getBoundingClientRect().top; // Позиция блока относительно окна
  const windowHeight = window.innerHeight; // Высота окна браузера

  // Проверяем, достиг ли пользователь нужного блока
  if (targetPosition < windowHeight && targetPosition > 0) {
    popup.classList.add('active'); // Показываем окно
  } else {
    popup.classList.remove('active'); // Прячем окно
  }
});

// Добавляем обработчик клика для скрытия окна
popup.addEventListener('click', () => {
  popup.classList.remove('active'); // Прячем окно
});





