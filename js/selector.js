var v, newsreader = {
    vars: {
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
        v = this.vars;
        this.bindUI();
    },
    bindUI: function () {
        var apiToLoad = "";

        // event handling
        v.titles.click(function () {
            v.updating_index = v.titles.index($(this));
            v.selectors.show(v.updating_index);
        });

        v.selector_buttons.click(function() {
            $(v.selectors).removeClass("open");
            $(v.lists[v.updating_index]).empty();
            $(v.lists[v.updating_index]).parent().parent().attr('class', '_column ' + $(this).attr("data-id"));
            ajaxRequest(v.lists[v.updating_index], api[$(this).attr("data-id")]);
        });
    }
}

newsreader.init();
