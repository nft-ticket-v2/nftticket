module.exports = (req, res) => {
  return res.render('index/index', {
    page: 'index/index',
    title: 'New Face of the Tickets',
    includes: {
      external: {
        css: ['general', 'header', 'page'],
        js: ['header', 'page', 'serverRequest']
      }
    },
    slider: [
      {
        _id: '',
        link: '',
        type: '',
        name: '',
        date: '',
        hour: '',
        organizer: '',
        campaign: '',
        place: '',
        price: '',
        image: '',
        description: '',
        rules: '',
        seating_plan: '',
        floor: '',
        owners: '',
        listed: '',
        total_supply: ''
      }
    ],
    best_sellers: [
      {
        _id: '',
        link: '',
        type: '',
        name: '',
        date: '',
        hour: '',
        organizer: '',
        campaign: '',
        place: '',
        price: '',
        image: '',
        description: '',
        rules: '',
        seating_plan: '',
        floor: '',
        owners: '',
        listed: '',
        total_supply: ''
      }
    ],
    latest: [
      {
        _id: '',
        link: '',
        type: '',
        name: '',
        date: '',
        hour: '',
        organizer: '',
        campaign: '',
        place: '',
        price: '',
        image: '',
        description: '',
        rules: '',
        seating_plan: '',
        floor: '',
        owners: '',
        listed: '',
        total_supply: ''
      }
    ],
    second_slider: {
      title: '',
      events: [
        {
          _id: '',
          type: '',
          name: '',
          date: '',
          hour: '',
          organizer: '',
          campaign: '',
          place: '',
          price: '',
          image: '',
          description: '',
          rules: '',
          seating_plan: '',
          floor: '',
          owners: '',
          listed: '',
          total_supply: ''
        }
      ]
    },
    third_slider: {
      title: '',
      events: [
        {
          _id: '',
          type: '',
          name: '',
          date: '',
          hour: '',
          organizer: '',
          campaign: '',
          place: '',
          price: '',
          image: '',
          description: '',
          rules: '',
          seating_plan: '',
          floor: '',
          owners: '',
          listed: '',
          total_supply: ''
        }
      ]
    }
  });
}