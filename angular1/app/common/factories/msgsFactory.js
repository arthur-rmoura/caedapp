(function() {
  angular.module('caedApp').factory('msgs', ['toastr', MsgsFactory]);

  function MsgsFactory(toastr) {
    function addMsg(msgs, title, method) {
      if (msgs instanceof Array) {
        msgs.forEach(msg => toastr[method](msg, title));
      } else {
        toastr[method](msgs, title);
      }
    }

    function addSuccess(msgs) {
      addMsg(msgs, 'Sucesso', 'success');
    }

    function addError(msgs) {
      addMsg(msgs, 'Erro', 'error');
    }

    function addWarning(msgs) {
      addMsg(msgs, 'Aviso', 'warning');
    }

    return { addSuccess, addError, addWarning };
  }
})();
