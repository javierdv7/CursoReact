import { TwitterFollowCard } from './TwitterFollowCard.jsx'
import './TwitterFollowCard.css'
import './index.css'

export function App () {
    return (
      <div className="tw-followCard-container">
        <TwitterFollowCard
          userName="JoVargass"
        >
            Javier
        </TwitterFollowCard>
        <TwitterFollowCard
          userName="JoVargass"
        >
            José
        </TwitterFollowCard>
      </div>
    );
} 