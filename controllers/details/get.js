module.exports = (req, res) => {
  return res.render('index/details', {
    page: 'index/details',
    title: 'Ticket Details',
    includes: {
      external: {
        css: ['general', 'header', 'page'],
        js: ['header', 'page', 'serverRequest']
      }
    },
    event: {
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
    },
    tickets: [
      {
        _id: '',
        type: '',
        status: '',
        name: '',
        seat: '',
        row: '',
        category: '',
        campaign: '',
        price: '',
        image: ''
      }
    ]
  });
}