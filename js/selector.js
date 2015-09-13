var v, newsreader = {
    vars: {
        // api variables
        apis: {
          huffpost:  "https://www.kimonolabs.com/api/1vnzmulw?apikey=82g96zzCQGXPX0Z3htZgjT74Vc7hvFCN",
          verge: "https://www.kimonolabs.com/api/2dje4o7w?apikey=F400P9FjVyuGFjUIs6x4pLLQXD8S8kpC",
          mashable:  "https://www.kimonolabs.com/api/4zgbid62?apikey=F400P9FjVyuGFjUIs6x4pLLQXD8S8kpC"
        },
        // ui elements
        titles: $('.article-list--title'),
        lists: $('.article-list'),
        selectors: {
            obj: $('.selector'),
            show: function (index) {
                $(this.obj[index]).toggleClass('open');
            },
            hide: function (index) {
                $(this.obj[index]).toggleClass('open');
            }
        },
        selector_buttons: $('.selector--list-item'),
        updating_index: 0
    },
    init: function () {
        console.log('init');
        v = this.vars;
        this.bindUI();
    },
    bindUI: function () {
        var apiToLoad = "";

        // event handling
        v.titles.click(function () {
            v.updating_index = v.titles.index($(this));
            v.selectors.show(v.updating_index);
            console.log(v.updating_index);
        });

        v.selector_buttons.click(function() {
            // apiToLoad = $(this).val(); // api to loads
            // console.log(apiToLoad);
            // v.lists[updating_index]; // is the list we update
            // updating_index = v.selector_buttons.index($(this));
            console.log(v.updating_index);
            $(v.selectors).removeClass("open");
            $(v.lists[v.updating_index]).empty();
            // ajaxRequest(v.lists[v.updating_index], v.apis[v.updating_index]);
        });
    }
}

newsreader.init();
