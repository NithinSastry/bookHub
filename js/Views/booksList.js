var BooksList = Backbone.View.extend({
    el : "#list",
    initialize : function(){
        this.listenTo(this.collection, 'reset', this.render);
    },
    events : {
      "change input[type=radio]" : "select_sort"  
    },
    addOne : function(book){
      var bookView = new BookItem({model : book});
      this.$el.find("#items").append(bookView.render().el); 
    },
    render : function(){
        this.$el.find("#items").empty();
        this.collection.toJSON().forEach(this.addOne, this);
        $("#totalbooks").append(this.collection.toJSON().length);
    },
    select_sort : function(e){
      if(e.target.id === "price"){
          this.sortByPrice();
      }else{
          this.sortByRating();
      }
    },
    sortByPrice : function(){
        // this.collection.comparator = function(item){
        //     return item.price;
        // }
        // this.collection.sort();
        // this.$el.find("#items").empty();
        // this.render();
        // var arr = this.collection.toJSON();
        // this.collection.models = _.sortBy(arr, function(obj){
        //    return obj.price.split(''); 
        // });
        // this.$el.find("#items").empty();
        // this.render();
    },
    sortByRating : function(){
        // this.collection.comparator = function(item){
        //     return item.rating;
        // }
        // this.collection.sort();
        // this.$el.find("#items").empty();
        // this.render();
        // this.$el.find("#items").empty();
    }
});