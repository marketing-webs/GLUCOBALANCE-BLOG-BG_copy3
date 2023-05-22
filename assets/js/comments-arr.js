const returnComment = (user, message, time) => {
  return `
       <div class="comment">
                <img
                  src="assets/images/avatar.svg"
                  alt="avatar-image"
                  class="comment-avatar"
                />
                <div class="comment-content-wrapper">
                  <div class="comment-row">
                    <p class="comment-author">${user}</p>
                    <p class="comment-date">&bull; ${time}</p>
                  </div>
                  <div class="comment-row-image">
                    <p class="comment-content">
                     ${message}
                    </p>
                  </div>
                  <div class="comment-row">
                    <img
                      src="./assets/images/icon-comment.svg"
                      alt=""
                      class="comment-rating"
                    />
                  </div>
                </div>
              </div>
      `;
};

const generateDateBefore = (daysBefore, type) => {
  let date = new Date();
  date.setDate(date.getDate() - daysBefore);
  let time = `${date.getDate().toString().padStart(2, "0")}.${(
    date.getMonth() + 1
  )
    .toString()
    .padStart(2, "0")}.${date.getFullYear()}`;
  if (type && type === "comment") {
    return date;
  }
  return time;
};

const commentsArray = [
  {
    type: "comment",
    author: "Вяра Ангелова",
    avatar: "avatar.png",
    text: "Екстра, препоръчвам го на всеки диабетик!",
    pictures: "",
    time: generateDateBefore(3, "comment"),
  },
  {
    type: "comment",
    author: "Илия Чолаков",
    avatar: "avatar.png",
    text: "Въпреки че имам диабет, аз практикувам колоездене. Благодарение на този продукт подобрих спортните си постижения и придобих повече жизнени сили!",
    pictures: "",
    time: generateDateBefore(3, "comment"),
  },
  {
    type: "comment",
    author: "Величка Йотова",
    avatar: "avatar.png",
    text: "От много години се боря с диабет тип В.  Прекомерен апетит, проблеми със зрението, истинска драма. В крайна сметка, състоянието ми се влоши толкова много, че се наложи да се предприемат действия. За щастие съпругът ми намери Glucobalance за мен. Използвах го точно както пишеше в листовката и беше истинско откритие. Желанието ми за храна спря, а общото ми състояние се подобри значително. Лекарят ми беше направо шокиран, когато видя последните ми резултати. Препоръчвам  на всички това чудо!",
    pictures: "testimony2.jpeg",
    time: generateDateBefore(1, "comment"),
  },
  {
    type: "comment",
    author: "Анелия Илиева",
    avatar: "avatar.png",
    text: "Синът ми го поръча за мен, а между другото и за сестра ми, защото и двете имаме наследствен диабет. И двете се чувстваме по-добре сега. Заслужава си!",
    pictures: "",
    time: generateDateBefore(1, "comment"),
  },
  {
    type: "comment",
    author: "Кирил Вълков",
    avatar: "avatar.png",
    text: "Това е наистина добър продукт. Регулирах нивата на захарта си и подобрих зрението си, което беше засегнато от напредналия диабет.  И всичко това безплатно!",
    pictures: "testimony3.jpeg",
    time: generateDateBefore(2, "comment"),
  },

  {
    type: "comment",
    author: "Виолина Лазарска",
    avatar: "avatar.png",
    text: "И какво, на всички ли помогна? Защото исках да поръчам за дядо ми, а той е почти на 90 години. И какво имаш предвид под 'безплатно'? Това да не е някаква измама? ",
    timestamp: "1 dzień temu",
    pictures: "",
    time: generateDateBefore(2, "comment"),
  },
  {
    type: "comment",
    author: "Костадин Николов",
    avatar: "avatar.png",
    text: `@Magdalena купих го за майка ми, която е вече почти 70-годишна. Тя се хвали, че има по-малък апетит, че е отслабнала и че кракът я боли по-малко. Получих го безплатно, така че вероятно и вие можете да го получите също безплатно без никакви проблеми. Пожелавам здраве за дядо ти, защото той  вече е на възраст.😊`,
    pictures: "",
    time: generateDateBefore(2, "comment"),
  },
  {
    type: "comment",
    author: "Виолета Попова",
    avatar: "avatar.png",
    text: "Наистина хубав продукт - в листовката пише, че той помага да се направи живота по-комфортен за хората, страдащи от диабет. И имам чувството, сякаш ме е излекувал напълно! Казаха ми, че може да се на наложи дори да ми ампутират крака, а ето че всички промени бавно започнаха да изчезват. Дори свалих няколко килограма. Приказно нещо.",
    pictures: "testimony1.jpeg",
    time: generateDateBefore(2, "comment"),
  },
  {
    type: "comment",
    author: "Велизар Царев",
    avatar: "avatar.png",
    text: "Това наистина е страхотен продукт. Той ми помогна да регулирам нивата на кръвната си захар и подобри резултатите от тестовете ми. ",
    timestamp: "2 dni temu",
    pictures: "",
    time: generateDateBefore(1, "comment"),
  },
];
