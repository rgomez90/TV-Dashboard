$(document).ready(function () {
    var today = new Date();
    var dd = today.getHours() + ':'+ today.getMinutes()
    var ddl = today.getHours()-1 + ':'+ today.getMinutes()
    $('#nextUpdate').html(dd)
    $('#lastUpdate').html(ddl)
})