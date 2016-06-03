import homeTemplate from './home.html!text';

var viewModel = kendo.observable({
    title: "Home"
})

var view = new kendo.View(homeTemplate, {
    model: viewModel,
    show: function () {
        kendo.fx(this.element).fade('in').duration(500).play();
    }
});

export { view };