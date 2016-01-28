var BookRouter = Backbone.Router.extend({
  routes: {
    '': 'index',
    'book/:id': 'showBook'
  },
  initialize: function () {
    this.books = new BooksCollection()
    this.booksView = new BooksList({collection: this.books})
    $('#list').append(this.booksView.el)
    this.bookDetails = new BookDetailView()
  },
  start: function () {
    Backbone.history.start()
  },
  index: function () {
    this.books.fetch({reset: true, parse: true})
  },
  showBook: function (id) {
    var arr = this.books.toJSON()
    if (arr.length === 0) {
        this.books.fetch({
            reset : true,
            parse : true,  
            success: (function (books) {
                this.renderDetail(id);  
            }).bind(this)
        });
    }
    else {
        this.renderDetail(id);
    }
  },
  renderDetail : (function(id){
      var book = _.find(this.books.toJSON(), function (obj) {
        return obj.id === id
      })
      var detail = {
        Publisher: book.details.Publisher,
        ISBN: book.details.ISBN,
        Binding: book.details.Binding,
        rating: book.rating,
        image: book.image,
        description: book.description,
        author : book.author
      }
      this.bookDetails.render(detail)
  })
})
