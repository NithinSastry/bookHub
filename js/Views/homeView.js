var HomeView = Backbone.View.extend({
    el : '#mainApp',
    tagName : 'div',
    template : _.template($("#mainHome").html()),
    initialize : function(){
        this.render();
    },
    render : function(){
        this.$el.html(this.template());
    }
});

var homeView = new HomeView();