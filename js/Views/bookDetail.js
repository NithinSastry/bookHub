var BookDetailView = Backbone.View.extend({
   el : "#view",
   template : _.template($("#bookDetailView").html()),
   initialize : function(){
       this.$el.html("<p class = 'default'>Select a book to view its details</p>");
   },
   render : function(detail){
       this.$el.empty();
       this.$el.html(this.template({Publisher : detail.Publisher, ISBN : detail.ISBN, Binding : detail.Binding, rating : detail.rating, image : detail.image, description:detail.description, author:detail.author}));
   }
});