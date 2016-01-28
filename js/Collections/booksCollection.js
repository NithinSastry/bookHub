var BooksCollection = Backbone.Collection.extend({
    model : BookModel,
    url : "https://capillary.0x10.info/api/books?type=json&query=list_books",
    parse : function(response){
        return response.books;
    } 
});