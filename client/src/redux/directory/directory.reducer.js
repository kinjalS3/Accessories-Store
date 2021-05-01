const INITIAL_STATE = {
  sections: [
    {
      title: 'cufflinks',
      imageUrl: 'https://i.ibb.co/y84WDv5/Cufflink2.webp',
      id: 1,
      linkUrl: 'shop/cufflinks'
    },
    {
      title: 'scarfs',
      imageUrl: 'https://i.ibb.co/74h1MSN/Scarf1.webp',
      id: 2,
      linkUrl: 'shop/scarfs'
    },
    {
      title: 'belts',
      imageUrl: 'https://i.ibb.co/fMg7crf/Belt1.jpg',
      id: 3,
      linkUrl: 'shop/belts'
    },
    {
      title: 'earrings',
      imageUrl: 'https://i.ibb.co/4WyGWFY/Earnings1.jpg',
      //size: 'large',
      id: 4,
      linkUrl: 'shop/earrings'
    },
    {
      title: 'rings',
      imageUrl: 'https://i.ibb.co/dPDx9xB/Ring1.webp',
      //size: 'large',
      id: 5,
      linkUrl: 'shop/rings'
    }
  ]
};

const directoryReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default directoryReducer;
