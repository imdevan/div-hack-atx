var v, newsreader = {
    vars: {
        // ui elements
        titles: $('.article-list--header'),
        lists: $('.article-list'),
        selectors: {
            obj: $('.selector'),
            show: function (index) {
                $(this.obj[index]).toggleClass('open');
            },
            // This function is never used, consider removal
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

        // Show a menu when the associated title is clicked on
        v.titles.click(function () {
            v.updating_index = v.titles.index($(this));
            v.selectors.show(v.updating_index);
        });

        // What happens when an option is selected from a menu item that is selected
        v.selector_buttons.click(function() {
            // Close the menu
            $(v.selectors).removeClass("open");

            // Empty the associated list
            $(v.lists[v.updating_index]).empty();

            // Change the color of the background column
            $(v.lists[v.updating_index]).parent().parent().attr('class', '_column ' + $(this).attr("data-id"));

            // Change the name of the column
            var title = $(v.lists[v.updating_index]).parent().parent().find('.article-list--title-text');
            title.html(api[$(this).attr("data-id")].name);

            // Make an ajax request to refill the column with sweet sweet data
            ajaxRequest(v.lists[v.updating_index], api[$(this).attr("data-id")].url);
        });
    }
}

newsreader.init();
