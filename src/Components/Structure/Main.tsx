import { useState } from 'react';
import Conversation from '../Containers/Conversation';
import { ConversationType } from '../../Types/Parameters';

function Main({ conversation }: { conversation: ConversationType[] }) {
  const [showAll, setShowAll] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const showNext = () => {
    setCurrentIndex((prev) => Math.min(prev + 1, conversation.length - 1));
  };
  const handleShowAllClick = () => {
    setCurrentIndex(conversation.length - 1);
    setShowAll(true);
  };
  return (
    <main className="flex flex-col items-center justify-center">
      <button className="bg-blue-500 text-white" onClick={handleShowAllClick}>
        Press me
      </button>
      <ul className="px-5 sm:px-28 md:px-36 lg:px-56 xl:px-72 2xl:px-96 w-full flex flex-col justify-center">
        {conversation.slice(0, currentIndex + 1).map((element, index) => {
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
    </main>
  );
}

export default Main;
