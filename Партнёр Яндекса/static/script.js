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
  moscow: {
    on_foot: 250, // Пеший курьер
    bicycle: 300, // Велокурьер
    car: 500, // На машине
  },
  spb: {
    on_foot: 230,
    bicycle: 280,
    car: 480,
  },
  novosibirsk: {
    on_foot: 200,
    bicycle: 250,
    car: 450,
  },
};

// Переменные для хранения выбранных значений города и транспорта
let selectedCity = "moscow"; // По умолчанию Москва
let selectedTransport = "on_foot"; // По умолчанию Пеший курьер

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
  "Пеший курьер"; // Можно поставить начальный транспорт

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