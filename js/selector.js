var v, newsreader = {
    vars: {
        // api variables
        apis: {},
        // ui elements
        titles: $('.article-list--title'),
        lists: $('.article-list--list'),
        selectors: {
            obj: $('.selector'),
            show: function (index) {
                $(this.obj[index]).toggleClass('open');
            },
            hide: function (index) {
                $(this.obj[index]).removeClass('open');
            }
        },
        selector_buttons: $('.selector--list-item')
    },
    init: function () {
        console.log('init');
        v = this.vars;
        this.bindUI();
    }, 
    bindUI: function () {
        var updating_index = 0;
        var apiToLoad = ""; 

        // event handling
        v.titles.click(function () {
            updating_index = v.titles.index($(this));
            v.selectors.show(updating_index);
            console.log(updating_index);
        });

        v.selector_buttons.click(function() {
            // apiToLoad = $(this).val(); // api to loads
            // console.log(apiToLoad);
            // v.lists[updating_index]; // is the list we update

            console.log(updating_index);
            v.selectors.hide(updating_index);
        });
    }
}

newsreader.init();