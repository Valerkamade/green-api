const formSendMessage = {
  nameForm: 'message',
  inputs: [
    {
      type: 'text',
      nameInput: 'message',
      placeholder: 'Введите сообщение',
      minLength: '1',
      maxLength: '4096',
    },
  ]
};

const formSerche = {
  nameForm: 'serche',
  inputs: [
    {
      type: 'text',
      nameInput: 'serche',
      placeholder: 'Поиск или новый чат',
      minLength: '1',
      maxLength: '4096',
    },
  ]
};

const formLogin = {
  nameForm: 'auth',
  title: 'Авторизация',
  buttonTextDefault: 'Авторизоваться',
  buttonTextLoading: 'Авторизация...',
  inputs: [
    {
      type: 'numbr',
      nameInput: 'id',
      placeholder: 'idInstance',
      minLength: '4',
      maxLength: '40',
    },
    {
      type: 'text',
      nameInput: 'token',
      placeholder: 'apiTokenInstance',
      minLength: '4',
      maxLength: '100',
    },
  ]
};

const headerContactButtons = [
  {
    buttonName: 'Сообщество',
    name: 'newGroup',
    onClick: 'handleNewGroup'
  },
  {
    buttonName: 'Статус',
    name: 'status',
    onClick: 'handleNewGroup'
  },
  {
    buttonName: 'Новый чат',
    name: 'newChat',
    onClick: 'handleNewGroup'
  },
  {
    buttonName: 'Меню',
    name: 'menu',
    onClick: 'handleNewGroup'
  },
]

const headerChatButtons = [
  {
    buttonName: 'Поиск по чату',
    name: 'search',
    onClick: 'handleNewGroup'
  },
  {
    buttonName: 'Меню',
    name: 'menu',
    onClick: 'handleNewGroup'
  },
  {
    buttonName: 'Выход',
    name: 'exit',
    onClick: 'handleSignOut'
  },
]

export {
  formSendMessage,
  formLogin,
  formSerche,
  headerContactButtons,
  headerChatButtons,
};