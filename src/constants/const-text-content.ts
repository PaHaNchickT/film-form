/* eslint-disable max-lines */
import type { TFieldData } from '@/types/types';

export const TEXT_CONTENT = {
  welcome: {
    title: '«Мстители» атакуют: тест на знание Кинематографической вселенной Marvel',
    text: 'В детстве мечтали оказаться в Мстителях? Ответьте на вопросы и узнайте, подходите ли Вы для величайшей команды Земли!',
    button: 'Начать',
  },
  error: {
    errorTitle: 'Упс!',
    errorMsg: 'Что-то пошло не так!',
    notFoundTitle: '404',
    notFoundMsg: 'Страница не найдена!',
    homeBtn: 'На главную страницу',
    reloadBtn: 'Перезагрузить страницу',
    validationRequired: 'Заполните поле',
    validationFormat: 'Неверный формат',
    validationNumber: 'Введите число',
  },
};

export const FORM_DATA: TFieldData[] = [
  {
    name: 'title',
    label: 'Название проекта',
    placeholder: 'Название',
    type: 'text',
  },
  {
    name: 'genre',
    label: 'Жанр',
    placeholder: 'Жанр',
    type: 'select',
    variants: [
      'аниме',
      'биографический',
      'боевик',
      'вестерн',
      'военный',
      'детектив',
      'детский',
      'документальный',
      'драма',
      'исторический',
      'кинокомикс',
      'комедия',
      'концерт',
      'короткометражный',
      'криминал',
      'мелодрама',
      'мистика',
      'музыка',
      'мультфильм',
      'мюзикл',
      'научный',
      'нуар',
      'приключения',
      'реалити-шоу',
      'семейный',
      'спорт',
      'ток-шоу',
      'триллер',
      'ужасы',
      'фантастика',
      'фэнтези',
      'эротика',
    ],
  },
  {
    name: 'format',
    label: 'Формат (для онлайн-платформ, большого экрана, интернета, другое)',
    placeholder: 'Формат',
    type: 'select',
    variants: ['для онлайн-платформ', 'для большого экрана', 'для интернета', 'другое'],
  },
  {
    name: 'unf',
    label: '№ УНФ или отсутствует',
    placeholder: '890-000-000-00-000',
    type: 'text',
  },
  {
    name: 'country',
    label: 'Страна-производитель (копродукция)',
    placeholder: 'Страна',
    type: 'select',
    variants: [
      'Россия',
      'Австралия',
      'Австрия',
      'Азербайджан',
      'Аландские острова',
      'Албания',
      'Алжир',
      'Американское Самоа',
      'Ангилья',
      'Ангола',
      'Андора',
      'Антарктика',
      'Антигуа и Барбуда',
      'Аргентина',
      'Армения',
      'Аруба',
      'Афганистан',
      'Багамские Острова',
      'Бангладеш',
      'Барбадос',
      'Бахрейн',
      'Белиз',
      'Белоруссия',
      'Бельгия',
      'Бенин',
      'Бермудские Острова',
      'Болгария',
      'Боливия',
      'Бонэйр, Синт-Эстатиус и Саба',
      'Босния и Герцеговина',
      'Ботсвана',
      'Бразилия',
      'Британская территория в Индийском океане',
      'Британские Виргинские острова',
      'Бруней',
      'Буркина-Фасо',
      'Бурунди',
      'Бутан',
      'Вануату',
      'Ватикан',
      'Великобритания',
      'Венгрия',
      'Венесуэла',
      'Виргинские Острова',
      'Внешние малые острова США',
      'Восточный Тимор',
      'Габон',
      'Гайана',
      'Гамбия',
      'Гана',
      'Гваделупа',
      'Гватемала',
      'Гвинея',
      'Гвинея-Бисау',
      'Германия',
      'Гернси',
      'Гибралтар',
      'Гондурас',
      'Гонконг',
      'Гренада',
      'Гренландия',
      'Греция',
      'Грузия',
      'Гуам',
      'Дания',
      'Демократическая Республика Конго',
      'Джерси',
      'Джибути',
      'Доминика',
      'Доминиканская Республика',
      'Египет',
      'Замбия',
      'Западная Сахара',
      'Зимбабве',
      'Израиль',
      'Индия',
      'Индонезия',
      'Иордания',
      'Ирак',
      'Иран',
      'Ирландия',
      'Исландия',
      'Испания',
      'Италия',
      'Йемен',
      'Кабо-Верде',
      'Казахстан',
      'Каймановы острова',
      'Камбоджа',
      'Камерун',
      'Канада',
      'Катар',
      'Кения',
      'Кипр',
      'Киргизия',
      'Кирибати',
      'Китайская Народная Республика',
      'КНДР',
      'Кокосовые острова',
      'Колумбия',
      'Коморы',
      'Коста-Рика',
      'Кот-д’Ивуар',
      'Куба',
      'Кувейт',
      'Кюрасао',
      'Лаос',
      'Латвия',
      'Лесото',
      'Либерия',
      'Ливан',
      'Ливия',
      'Литва',
      'Лихтенштейн',
      'Люксембург',
      'Маврикий',
      'Мавритания',
      'Мадагаскар',
      'Майотта',
      'Макао',
      'Малави',
      'Малайзия',
      'Мали',
      'Мальдивы',
      'Мальта',
      'Марокко',
      'Мартиника',
      'Маршалловы Острова',
      'Мексика',
      'Микронезия',
      'Мозамбик',
      'Молдавия',
      'Монако',
      'Монголия',
      'Монтсеррат',
      'Мьянма',
      'Намибия',
      'Науру',
      'Непал',
      'Нигер',
      'Нигерия',
      'Нидерланды',
      'Никарагуа',
      'Ниуэ',
      'Новая Зеландия',
      'Новая Каледония',
      'Норвегия',
      'Норфолк',
      'Объединённые Арабские Эмираты',
      'Оман',
      'Остров Буве',
      'Остров Мэн',
      'Остров Рождества',
      'Остров Херд и острова Макдональд',
      'Острова Кука',
      'Острова Питкэрн',
      'Острова Святой Елены, Вознесения и Тристан-да-Кунья',
      'Пакистан',
      'Палау',
      'Палестина',
      'Панама',
      'Папуа — Новая Гвинея',
      'Парагвай',
      'Перу',
      'Польша',
      'Португалия',
      'Пуэрто-Рико',
      'Республика Гаити',
      'Республика Конго',
      'Республика Корея',
      'Республика Македония',
      'Реюньон',
      'Руанда',
      'Румыния',
      'Сальвадор',
      'Самоа',
      'Сан-Марино',
      'Сан-Томе и Принсипи',
      'Саудовская Аравия',
      'Свазиленд',
      'Северные Марианские острова',
      'Сейшельские Острова',
      'Сен-Бартелеми',
      'Сенегал',
      'Сен-Мартен (Франция)',
      'Сен-Пьер и Микелон',
      'Сент-Винсент и Гренадины',
      'Сент-Китс и Невис',
      'Сент-Люсия',
      'Сербия',
      'Сингапур',
      'Синт-Мартен',
      'Сирия',
      'Словакия',
      'Словения',
      'Соединённые Штаты Америки',
      'Соломоновы Острова',
      'Сомали',
      'Судан',
      'Суринам',
      'Сьерра-Леоне',
      'Таджикистан',
      'Таиланд',
      'Танзания',
      'Теркс и Кайкос',
      'Того',
      'Токелау',
      'Тонга',
      'Тринидад и Тобаго',
      'Тувалу',
      'Тунис',
      'Туркмения',
      'Турция',
      'Уганда',
      'Узбекистан',
      'Украина',
      'Уоллис и Футуна',
      'Уругвай',
      'Фарерские острова',
      'Фиджи',
      'Филиппины',
      'Финляндия',
      'Фолклендские острова',
      'Франция',
      'Французская Гвиана',
      'Французская Полинезия',
      'Французские Южные и Антарктические территории',
      'Хорватия',
      'Центральноафриканская Республика',
      'Чад',
      'Черногория',
      'Чехия',
      'Чили',
      'Швейцария',
      'Швеция',
      'Шпицберген и Ян-Майен',
      'Шри-Ланка',
      'Эквадор',
      'Экваториальная Гвинея',
      'Эритрея',
      'Эстония',
      'Эфиопия',
      'Южная Георгия и Южные Сандвичевы острова',
      'Южно-Африканская Республика',
      'Южный Судан',
      'Ямайка',
      'Япония',
    ],
  },
  {
    name: 'price',
    label: 'Сведения о сметной стоимости производства фильма на территории Нижегородской области, если есть',
    placeholder: 'Сметная стоимость',
    type: 'text',
  },
  {
    name: 'synopsis',
    label: 'Синопсис',
    placeholder: 'Напишите краткое изложение',
    type: 'textarea',
  },
];
