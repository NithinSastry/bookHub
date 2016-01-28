var BookItem = Backbone.View.extend({
    className : "bookItem",
    template : _.template($("#bookItemView").html()),
    render : function(){
        this.$el.html(this.template({name : this.model.name, price :this.model.price.split(' ')[0],rupee: this.model.price.split(' ')[1], id: this.model.id, book : this.model}))
        return this;
    }   
});