export const CarouselService = {
  getData() {
    return [
      {
        itemImageSrc:
          'https://polleriaslagranja.com/wp-content/uploads/2022/10/La-Granja-Real-Food-Chicken-Granja-Chicharron.png',
        alt: 'Description for Image 1',
        link: 'https://polleriaslagranja.com/wp-content/uploads/2022/10/La-Granja-Real-Food-Chicken-Granja-Chicharron.png'
      },
      {
        itemImageSrc:
          'https://polleriaslagranja.com/wp-content/uploads/2022/10/La-Granja-Real-Food-Chicken-Granja-Chicharron.png',
        alt: 'Description for Image 2',
        link: 'https://polleriaslagranja.com/wp-content/uploads/2022/10/La-Granja-Real-Food-Chicken-Granja-Chicharron.png'
      },
      {
        itemImageSrc:
          'https://polleriaslagranja.com/wp-content/uploads/2022/10/La-Granja-Real-Food-Chicken-Granja-Chicharron.png',
        alt: 'Description for Image 3',
        link: 'https://polleriaslagranja.com/wp-content/uploads/2022/10/La-Granja-Real-Food-Chicken-Granja-Chicharron.png'
      },
      {
        itemImageSrc:
          'https://polleriaslagranja.com/wp-content/uploads/2022/10/La-Granja-Real-Food-Chicken-Granja-Chicharron.png',
        alt: 'Description for Image 4',
        link: 'https://polleriaslagranja.com/wp-content/uploads/2022/10/La-Granja-Real-Food-Chicken-Granja-Chicharron.png'
      }
    ];
  },

  getImages() {
    return Promise.resolve(this.getData());
  }
};

export default CarouselService;
