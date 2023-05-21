import React, { useEffect, useState } from 'react';
import './App.css';
// import { GlobalStyle } from "./styles";
import Header from '../Header/Header';
import Login from '../Login/Login';
import Main from '../Main/Main';
import * as api from '../../utils/api';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';
import Contact from '../Contact/Contact';
import Chat from '../Chat/Chat';
import { headerChatButtons, headerContactButtons } from '../../utils/data-list';
import { CurrentChatContext } from '../../contexts/CurrentChatContext';

function App() {
  const [isLogin, setIsLogin] = useState(false);
  const [authUser, setAuthUser] = useState({});
  const [contacts, setContacts] = useState([]);
  const [value, setValue] = useState({});
  const [messages, setMessages] = useState([]);
  const [chats, setChats] = useState([]);
  const [messagesCurrentChat, setMessagesCurrentChat] = useState([]);
  const [currentIdChat, setCurrentIdChat] = useState('');
  const [currentChat, setCurrentChate] = useState({});

  function handleChange(evt) {
    setValue({ ...value, [evt.target.name]: evt.target.value });
  }

  function handleLogin() {
    api
      .authorize(value)
      .then((user) => {
        localStorage.setItem('user', user.wid);
        localStorage.setItem('idInstance', value.id);
        localStorage.setItem('apiTokenInstance', value.token);

        setIsLogin(true);
        api.avatar(value.id, value.token, user.wid).then((avatar) => {
          localStorage.setItem('urlAvatar', avatar.urlAvatar);
          setAuthUser({
            ...value,
            user: user.wid,
            avatar: avatar.urlAvatar,
          });
          setValue({});
        });
      })
      .catch((err) => console.log(err));
  }

  // useEffect(() => {
  //   currentIdChat &&
  //     api
  //       .messageReceve(authUser)
  //       .then((res) => console.log(res))
  //       .catch((err) => console.log(err));
  // });

  function handleSendMessage(chatId, message) {
    api
      .sendMessage(authUser, chatId, message)
      .then((res) => {
        setMessagesCurrentChat([...messagesCurrentChat, {}]);
        setValue({});
      })
      .catch((err) => console.log(err));
  }

  function getMessage(messageOut, messageIn, contacts) {
    const allMessage = [...messageOut, ...messageIn].sort(
      (a, b) => a.timestamp - b.timestamp
    );
    const uniqueMessage = [
      ...new Map(allMessage.map((item) => [item.chatId, item])).values(),
    ];
    uniqueMessage.map(
      (item) =>
        (item.chat = contacts.find((contact) => contact.id === item.chatId))
    );
    return uniqueMessage;
  }

  useEffect(() => {
    const user = localStorage.getItem('user');
    if (user) {
      setIsLogin(true);
      setAuthUser({
        id: localStorage.idInstance,
        token: localStorage.apiTokenInstance,
        user: localStorage.user,
        avatar: localStorage.urlAvatar,
      });
      isLogin &&
        Promise.all([
          api.contact({
            id: localStorage.idInstance,
            token: localStorage.apiTokenInstance,
            user: localStorage.user,
          }),
          api.messageOut({
            id: localStorage.idInstance,
            token: localStorage.apiTokenInstance,
          }),
          api.messageIncoming({
            id: localStorage.idInstance,
            token: localStorage.apiTokenInstance,
          }),
          api.getChats({
            id: localStorage.idInstance,
            token: localStorage.apiTokenInstance,
          }),
        ])
          .then(([contacts, messagesOut, messageIn, chats]) => {
            setMessages(
              getMessage(messagesOut, messageIn, contacts).sort(
                (a, b) => b.timestamp - a.timestamp
              )
            );
            setChats(chats);
            setContacts(contacts);
            // console.log(contacts);
            // contacts.map((contsct) => {
            //   setTimeout(() => {
            // api.historyMessage(authUser, contsct.id)
            // }, 1000);
            // api.historyMessage(authUser, contsct.id)
            // });
          })
          .catch((err) => console.log(err));
    }
  }, [isLogin]);

  function onOpenChat(id) {
    setCurrentIdChat(id);
    api
      .historyMessage(authUser, id)
      .then((messages) => {
        setMessagesCurrentChat(messages.reverse());
      })
      .catch((err) => console.log(err));
  }

  return (
    <CurrentUserContext.Provider value={authUser}>
      <CurrentChatContext.Provider value={currentChat}>
        {!isLogin ? (
          <Login
            onLogin={handleLogin}
            value={value}
            handleChange={handleChange}
          />
        ) : (
          <div className='column'>
            <div className='column__first'>
              <Header contacts={contacts} buttonList={headerContactButtons} />
              <Main value={value} handleChange={handleChange}>
                <ul>
                  {messages
                    // .filter((message, i, messages) => message === messages.find(m => m.senderId === message.senderId))
                    // reduce((acc, n) => (acc[n.senderId] = n, acc), {})
                    .map((message) => (
                      // console.log(message)
                      <Contact
                        message={message.textMessage}
                        key={message.idMessage}
                        name={message.chat.name}
                        chatId={message.chatId}
                        onOpenChat={onOpenChat}
                        setCurrentChate={setCurrentChate}
                        // type={contact.type}
                      />
                    ))}
                  {/* {contacts.map((contact) => (
                <Contact
                  // message={message}
                  key={contact.id}
                  name={contact.name}
                  type={contact.type}
                  chatId={contact.id}
                  onOpenChat={onOpenChat}
                />
              ))} */}
                </ul>
              </Main>
            </div>
            <div className='column__second'>
              <Header
                setIsLogin={setIsLogin}
                currentIdChat={currentIdChat}
                buttonList={headerChatButtons}
              />
              <Main>
                {currentIdChat && (
                  <Chat
                    messages={messagesCurrentChat}
                    value={value}
                    handleChange={handleChange}
                    onSendMessage={handleSendMessage}
                    errorMessage={''}
                    chatId={currentIdChat}
                  />
                )}
              </Main>
            </div>
          </div>
        )}
      </CurrentChatContext.Provider>
    </CurrentUserContext.Provider>
  );
}

export default App;
