var BookModel = Backbone.Model.extend({
    idAttribute : "id",
    urlRoot : "https://capillary.0x10.info/api/books?type=json&query=list_books" 
});