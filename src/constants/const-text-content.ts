import type { TFieldData } from '@/types/types';

export const TEXT_CONTENT = {
  header: {
    headerTitle: 'Тестик',
  },
  footer: {
    madeby: 'Сделал Павел Терно',
    works: 'Больше работ тут:',
  },
  welcome: {
    title: '«Мстители» атакуют: тест на знание Кинематографической вселенной Marvel',
    text: 'В детстве мечтали оказаться в Мстителях? Ответьте на вопросы и узнайте, подходите ли Вы для величайшей команды Земли!',
    button: 'Начать',
  },
  questions: {
    title: 'Тестирование',
    answerBtn: 'Ответить',
    endBtn: 'Закончить',
    textLowLabel: 'Введите свой ответ:',
    textHighLabel: 'Напишите развернутый ответ:',
    errorText: 'Пожалуйста, ответьте на вопрос',
    isCorrect: 'Необходима проверка вручную',
  },
  ending: {
    success: {
      title: 'Тестирование завершено!',
      text: 'Ваши ответы успешно записаны. В течение нескольких дней результат появится в вашем личном кабинете.',
      button: 'Главная страница',
    },
    failure: {
      title: 'К сожалению, время истекло!',
      text: 'Не расстраивайтесь! Вы можете попробовать пройти тест заново.',
      button: 'Попробовать еще',
    },
  } as { [key: string]: { [key: string]: string } },
  error: {
    errorTitle: 'Упс!',
    errorMsg: 'Что-то пошло не так!',
    notFoundTitle: '404',
    notFoundMsg: 'Страница не найдена!',
    homeBtn: 'На главную страницу',
    reloadBtn: 'Перезагрузить страницу',
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
    type: 'text',
  },
  {
    name: 'format',
    label: 'Формат (для онлайн-платформ, большого экрана, интернета, другое)',
    placeholder: 'Формат',
    type: 'text',
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
    type: 'text',
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
    type: 'text',
  },
];
