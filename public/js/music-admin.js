$(function() {
    $("button#show_only_waiting").click(function(event) {
        show_only_waitings();
    });

    $("select#status").select2({
            width: "300px",
        });

    $("input.spinner").spinner({
        min: -1,
        start: function (event, ui) { return check_unset(this, event, ui); }
    }).width(30);
});

function show_only_waitings() {
    console.log('hi');
}

function check_unset(_input, event, ui) {
    var now_val = $(_input).val();
    if (now_val.length == 0) {
        now_val = 0;
    }
    
	var direction = event.toElement.innerText=="▲"?1:-1;
    var new_val = parseInt(now_val) + parseInt(direction);

    if (new_val == -1) {
        $(_input).val("");
        $(_input).addClass("unset");
		search();
        return false;
    } else {
        $(_input).removeClass("unset");
        return true;
    }
}
