$(function ($w) {

  var ToDo = function () {
    var self = $('.ToDo'),
        template = $('#ToDo-list-template').html();

    $('.ToDo--input').keydown(function (e) {
      // enter
      if (e.keyCode === 13 && this.value !== '') {
        var todo = $(template);
        todo.children('.ToDo---title').text(this.value);
        this.value = '';

        todo.find('.ToDo----checkbox').change(function () {
          var title = todo.children('.ToDo---title');
          this.checked ? title.addClass('done') : title.removeClass('done');
        });
        self.children('.ToDo-list').append(todo);
      }
    }).focus();
  };

  $(window).load(function() {
    ToDo();
  });

}(window));
