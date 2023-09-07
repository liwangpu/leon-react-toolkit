import { memo } from 'react';
import { CardType } from '../../enums';

console.log(`card type:`, CardType);

export const Card: React.FC = memo(props => {

  return (
    <div>

    </div>
  );
});

Card.displayName = 'Card';

// export default Card;