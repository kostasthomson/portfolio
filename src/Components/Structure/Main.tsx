import { useState } from 'react';
import Conversation from '../Containers/Conversation';
import { ParameterTypes } from '../../Types';

function Main({
  conversation,
  hasFooter,
  showFooter,
}: {
  conversation: ParameterTypes.ConversationType[];
  hasFooter: boolean;
  showFooter: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  const [showAll, setShowAll] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const showNext = () => {
    setCurrentIndex((prev) => Math.min(prev + 1, conversation.length - 1));
  };
  const handleShowAllClick = () => {
    setCurrentIndex(conversation.length - 1);
    setShowAll(true);
  };
  if (conversation.length < 0) return;
  return (
    <main className="flex flex-col items-center justify-center">
      <ul className="px-5 sm:px-28 md:px-36 lg:px-56 xl:px-72 2xl:px-96 w-full flex flex-col justify-center">
        {conversation.slice(0, currentIndex + 1).map((element, index) => {
          if (index == conversation.length - 1)
            return (
              <Conversation
                key={index}
                conversation={element}
                showNext={showNext}
                showAll={showAll}
                showFooter={showFooter}
              />
            );
          return (
            <Conversation
              key={index}
              conversation={element}
              showNext={showNext}
              showAll={showAll}
            />
          );
        })}
      </ul>
      {!hasFooter && (
        <button
          className="fixed bottom-4 z-50 bg-transparent text-white"
          onClick={handleShowAllClick}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="42"
            height="42"
            viewBox="0 0 16 16"
          >
            <circle cx="8" cy="8" r="8" className="fill-primary" />

            <path
              d="M8.5 4.5a.5.5 0 0 0-1 0v5.793L5.354 8.146a.5.5 0 1 0-.708.708l3 3a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293z"
              className="fill-highlight"
              transform="scale(0.8) translate(2.2,2.2)"
            />
          </svg>
        </button>
      )}
    </main>
  );
}

export default Main;
