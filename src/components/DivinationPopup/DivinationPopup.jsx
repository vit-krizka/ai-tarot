// import './divinationPopup.scss';
// import Card from '../Card/Card';
// import React from 'react';

// function DivinationPopup({ cards, question, onClose, answer }) {
//     return (
//         <div className='divination-popup-wrapper'>
//             <div className='divination-popup'>
//                 <div>VÝSLEDEK VĚŠTBY</div>
//                 <div className="deck">
//                     {cards.map((card, index) => (
//                         <div key={index}>
//                             <Card card={card} />
//                             {index === 0 && <div>MINULOST</div>}
//                             {index === 1 && <div>PŘÍTOMNOST</div>}
//                             {index === 2 && <div>BUDOUCNOST</div>}
//                         </div>

//                     ))}
//                 </div>
//                 <h2 className='question'>{question}</h2>
//                 <div>
//                     {answer !== null ? answer : "Věštba se připravuje"}
//                 </div>
//                 <div className='close' onClick={onClose}>X</div>
//             </div>
//         </div>
//     );
// }

// export default DivinationPopup;