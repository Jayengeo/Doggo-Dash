import { useRouter } from 'next/router';
import io from "socket.io-client";
import { useState, useEffect } from "react";
import { useUser } from '@auth0/nextjs-auth0/client';
import styles from '../../styles/message.module.css';
import { faEnvelope, faPaperPlane } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Chat() {
  const [socket, setSocket] = useState(null);
  const { user, error, isLoading } = useUser();
  const [chosenUsername, setChosenUsername] = useState("");
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);
  const router = useRouter();

  useEffect(() => {
    if (!isLoading && !user) {
      router.push('/api/auth/login');
    }
  }, [user, isLoading, router]);

  useEffect(() => {
    const socketInitializer = async () => {
      // We just call it because we don't need anything else out of it
      await fetch("/api/socket");

      const newSocket = io();
      setSocket(newSocket);
    };

    socketInitializer();
  }, []);

  useEffect(() => {
    if (socket) {
      socket.on("newIncomingMessage", handleNewIncomingMessage);

      return () => {
        socket.off("newIncomingMessage", handleNewIncomingMessage);
      };
    }
  }, [socket]);

  const handleNewIncomingMessage = (msg) => {
    setMessages((currentMsg) => {
      const author = msg.author.split("@")[0];
      const currentUser = chosenUsername.split("@")[0];
      const isCurrentUser = author === currentUser;
      const newMsg = { author, message: msg.message, isCurrentUser };
      return [...currentMsg, newMsg];
    });
  };
  
  

  const sendMessage = () => {
    if (message.trim()) {
      const newMessage = { author: username, message };
      setMessages((currentMessages) => [...currentMessages, newMessage]);
      socket.emit("createdMessage", newMessage);
      setMessage("");
    }
  };
  
  
  const handleKeypress = (e) => {
    //it triggers by pressing the enter key
    if (e.keyCode === 13) {
      if (message) {
        sendMessage();
      }
    }
  };

  useEffect(() => {
    if (!isLoading && user) {
      setChosenUsername(user.email);
    }
  }, [user, isLoading]);

  const username = chosenUsername.split("@")[0];

  console.log(messages);

  return (
    <div className={styles['chat-container']}>
      <div className={styles['chat-area']}>
        <h1 className="flex justify-center text-2xl font-bold tracking-tight sm:text-2xl">
          <FontAwesomeIcon icon={faEnvelope} className="mr-3" size="lg" />
          User: {chosenUsername}
        </h1>
        <div className={styles['chat-box']}>
        {messages.map((msg, i) => {
          const author = msg.author.split("@")[0]; // Get the modified author value
          const isCurrentUser = author === chosenUsername;
          const bubbleClass = isCurrentUser ? styles['bubble-sent'] : styles['bubble-receive'];

          return (
            <div
              className={styles['message-row']}
              key={`messageRowItem${i}`}
            >
              <div className={`${styles['message-bubble']} ${bubbleClass}`}>
                {isCurrentUser ? (
                  <span className={styles['username']}>{chosenUsername}: </span>
                ) : (
                  <span className={styles['username']}>{msg.author}: </span>
                )}
                {msg.message}
              </div>
            </div>
          );
        })}

        </div>
        <div className={styles['chat-footer']}>
          <div className={styles['chat-input']}>
            <input
              type="text"
              placeholder="New message..."
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              onKeyUp={handleKeypress}
            />
          </div>
          <button className={styles['send-btn']} onClick={sendMessage}>
            <FontAwesomeIcon icon={faPaperPlane} className="mr-3" size="lg" />
            Send
          </button>
        </div>
      </div>
    </div>
  );
}
