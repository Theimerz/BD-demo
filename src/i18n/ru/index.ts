export default {
  navigation: 'Навигация',
  filter: 'Поиск',
  noData: 'Нет данных',
  cancel: 'Отмена',
  submit: 'Подтвердить',
  page: {
    users: 'Пользователи',
    posts: 'Посты',
    albums: 'Альбомы',
    todos: 'Список задач',
  },
  users: {
    currentUser: 'Текущий пользователь',
    userNotSelected: 'Не выбран',
    table: {
      id: 'ID',
      username: 'Ник',
      name: 'Полное имя',
      email: 'Email',
      actions: 'Действия',
    },
  },
  posts: {
    table: {
      id: 'ID',
      title: 'Заголовок',
      body: 'Содержание',
    },
    createDialog: {
      title: 'Создание поста',
      form: {
        title: 'Заголовок',
        body: 'Содержимое',
      },
    },
    deleteDialog: {
      title: 'Удаление постов',
      message: 'Вы уверены?',
      result: {
        success: 'Пост был успешно удален',
        error: 'Пост не был удален',
      },
    },
  },
  comments: {
    dialog: {
      title: 'Список комментариев',
    },
  },
  albums: {
    table: {
      id: 'ID',
      title: 'Название',
    },
  },
  todos: {
    // status: 'Статус',
    all: 'Все задачи',
    completed: 'Завершенные',
    canceled: 'Не выполненные',
    table: {
      id: 'ID',
      title: 'Название',
      completed: 'Статус',
    },
    createDialog: {
      title: 'Создание задачи',
      form: {
        title: 'Заголовок',
      },
    },
  },
  validation: {
    required: 'Это поле является обязательным',
  },
};
