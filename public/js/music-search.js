
var music_database = {};
var artist_database = {};
var is_expanded = {};

// --------------------------------------
// --- event: ready ---
// --------------------------------------
$(document).ready(function() {
    // download artist database
    $.ajax({
        type: "GET",
        url: "/api/fm/artists.json",
        dataType: "json",
        success: function(json) {
            artist_database = json;

            create_artist_bar();
            init_is_expanded(json);
        }
    });
});

function init_is_expanded(database) {
	is_expanded = {};
	for (var artist in database) {
		is_expanded[artist] = false;
	}

	console.log(is_expanded);
}

// --------------------------------------
// --- artist list ---
// --------------------------------------
function create_artist_bar() {
    var tbody = $("tbody");

    for (var _a in artist_database) {
        var artist = artist_database[_a];

        var artist_tr = $("<tr></tr>")
            .addClass("artist_bar")
            .addClass("artist_" + artist.id)
            .append($("<td></td>")
                .attr("colspan", 12)
                .addClass("artist")
                .text(artist.name)
            )/*.append($("<td></td>")
                .addClass("name")
            ).append($("<td></td>")
                .addClass("fl")
            ).append($("<td></td>")
                .addClass("ob")
            ).append($("<td></td>")
                .addClass("cl")
            ).append($("<td></td>")
                .addClass("fg")
            ).append($("<td></td>")
                .addClass("tp")
            ).append($("<td></td>")
                .addClass("tb")
            ).append($("<td></td>")
                .addClass("hr")
            ).append($("<td></td>")
                .addClass("tuba")
            ).append($("<td></td>")
                .addClass("timp")
            ).append($("<td></td>")
                .addClass("others")
            )*/.data("artist", artist.name)
            .data("artist_id", artist.id);

        tbody.append(artist_tr);
    }

    $("tbody tr.artist_bar").click(function(idx) {
        toggle_artist($(this).data("artist_id"));
//        var search_condition = Array();
//        search_condition["artist_id"] = $(this).data("artist_id");
//        do_search_music(search_condition);
    });
}

function clear_table() {
    $("tbody").html("");
}

function toggle_artist(artist_id) {
    var artist_bar = $("tr.artist_" + artist_id);

    if (parseInt(artist_bar.data("loaded")) == 1) {
        do_toggle_artist(artist_id);
        return;
    }

    $.ajax({
        type:"GET",
        url:"/api/fm/musics.json",
        dataType:"json",
        data: {
            artist_id: artist_id,
        },
        success:function(json) {
            create_artist_song_list(artist_id, json);
            do_toggle_artist(artist_id);
        }
    });
}

function create_artist_song_list(artist_id, songs) {
    var artist_bar = $("tr.artist_" + artist_id);
    var artist_name = artist_bar.data("artist");

    for (var _a in songs) {
        for(var _s in songs[_a]) {
        var song = songs[_a][_s];

        artist_bar.after(
            $("<tr></tr>")
                .addClass("artist_" + artist_id + "_song")
                .addClass(is_expanded[artist_name]?"":"hide")
                .data("artist_id", song.artist_id)
                .data("artist", artist_name)
                .data("name", song.name)
                .data("fl", song.fl)
                .data("ob", song.ob)
                .data("cl", song.cl)
                .data("fg", song.fg)
                .data("tp", song.tp)
                .data("tb", song.tb)
                .data("hr", song.hr)
                .data("tuba", song.tuba)
                .data("timp", song.timp)
                .data("others", song.others)
                .append(
                    $("<td></td>")
                    .addClass("artist")
                    .text(artist_name)
                ).append($("<td></td>")
                    .addClass("name")
                    .text(song.name)
                ).append($("<td></td>")
                    .addClass("fl")
                    .text(song.fl)
                ).append($("<td></td>")
                    .addClass("ob")
                    .text(song.ob)
                ).append($("<td></td>")
                    .addClass("cl")
                    .text(song.cl)
                ).append($("<td></td>")
                    .addClass("fg")
                    .text(song.fg)
                ).append($("<td></td>")
                    .addClass("tp")
                    .text(song.tp)
                ).append($("<td></td>")
                    .addClass("tb")
                    .text(song.tb)
                ).append($("<td></td>")
                    .addClass("hr")
                    .text(song.hr)
                ).append($("<td></td>")
                    .addClass("tuba")
                    .text(song.tuba)
                ).append($("<td></td>")
                    .addClass("timp")
                    .text(song.timp)
                ).append($("<td></td>")
                    .addClass("others")
                    .text(song.others)
                )
            );
    }}

    artist_bar.data("loaded", 1);

}

function do_toggle_artist(artist_id) {
    $("tr.artist_" + artist_id + "_song").toggleClass("hide");
    is_expanded[artist_database[artist_id].name] = !is_expanded[artist_database[artist_id].name];
}

function do_search_music(search_condition) {
    console.log(search_condition.artista);
    $.ajax({
        type:"GET",
        url:"/api/fm/musics.json",
        dataType:"json",
        data: {
            artist_id: search_condition.artist_id,
            artist: search_condition.artist,
            name:   search_condition.name,
            fl:     search_condition.fl,
            ob:     search_condition.ob,
            cl:     search_condition.cl,
            fg:     search_condition.fg,
            tp:     search_condition.tp,
            tb:     search_condition.tb,
            hr:     search_condition.hr,
            tuba:   search_condition.tuba,
            timp:   search_condition.timp,
            others: search_condition.others,
        },
        success:function(json) {
            clear_table();
            show_search_result(json);
        }
    });
}

function show_search_result(songs) {
    create_song_list(songs);
}

function create_song_list(songs) {
    var tbody = $("tbody");

    for (var _a in songs) {
        var artist_bar = $("<tr></tr>");
        artist_bar.append($("<td></td>")
            .text(artist_database[_a].name)
            .attr("colspan", 12)
        ).addClass("artist_bar")
         .addClass("artist_" + _a)
         .data("artist_id", _a);

        tbody.append(artist_bar);
        var song_cnt = 0;
        for(var _s in songs[_a]) {
            var song = songs[_a][_s];

            song_cnt++;

            artist_bar.after(
                $("<tr></tr>")
                    .addClass("artist_" + _a + "_song")
                    .addClass("song")
                    .addClass("hide")
                    .data("artist_id", song.artist_id)
                    .data("artist", artist_database[_a].name)
                    .data("name", song.name)
                    .data("fl", song.fl)
                    .data("ob", song.ob)
                    .data("cl", song.cl)
                    .data("fg", song.fg)
                    .data("tp", song.tp)
                    .data("tb", song.tb)
                    .data("hr", song.hr)
                    .data("tuba", song.tuba)
                    .data("timp", song.timp)
                    .data("others", song.others)
                    .append(
                        $("<td></td>")
                        .addClass("artist")
                        .text(artist_database[_a].name)
                    ).append($("<td></td>")
                        .addClass("name")
                        .text(song.name)
                    ).append($("<td></td>")
                        .addClass("fl")
                        .text(song.fl)
                    ).append($("<td></td>")
                        .addClass("ob")
                        .text(song.ob)
                    ).append($("<td></td>")
                        .addClass("cl")
                        .text(song.cl)
                    ).append($("<td></td>")
                        .addClass("fg")
                        .text(song.fg)
                    ).append($("<td></td>")
                        .addClass("tp")
                        .text(song.tp)
                    ).append($("<td></td>")
                        .addClass("tb")
                        .text(song.tb)
                    ).append($("<td></td>")
                        .addClass("hr")
                        .text(song.hr)
                    ).append($("<td></td>")
                        .addClass("tuba")
                        .text(song.tuba)
                    ).append($("<td></td>")
                        .addClass("timp")
                        .text(song.timp)
                    ).append($("<td></td>")
                        .addClass("others")
                        .text(song.others)
                    )
                );
        }
        artist_bar.data("loaded", 1);
        artist_bar.find('td').text(artist_database[_a].name + " (" + song_cnt + ")");
        artist_bar.click(function(idx) {
            $("tr.artist_" + $(this).data("artist_id") + "_song").toggleClass("hide");
        });
    }

}


// --------------------------------------
// --- search results table ---
// --------------------------------------

function update_table(obj) {
    var song_table = $("table.instrumentation-table tbody");

    var artist_name;
    var song_name;

	song_table.empty();

	// Each artist
    for (var artist in obj) {
        artist_name = artist;

        // 作曲者名のかかれた<tr>つくる
        var artist_bar = $("<tr></tr>")
            .addClass("artist_bar")
            .data("artist", artist_name)
            .append($("<td></td>")
                .addClass("artist")
                .text(artist_name)
            ).append($("<td></td>")
                .addClass("name")
            ).append($("<td></td>")
                .addClass("fl")
            ).append($("<td></td>")
                .addClass("ob")
            ).append($("<td></td>")
                .addClass("cl")
            ).append($("<td></td>")
                .addClass("fg")
            ).append($("<td></td>")
                .addClass("tp")
            ).append($("<td></td>")
                .addClass("tb")
            ).append($("<td></td>")
                .addClass("hr")
            ).append($("<td></td>")
                .addClass("tuba")
            ).append($("<td></td>")
                .addClass("timp")
            ).append($("<td></td>")
                .addClass("others")
            ).click(function() {
                toggle_artist($(this).data("artist"));
//                $("tr.artist_" + $(this).data("artist")).toggleClass("hide");
            });
            song_table.append(artist_bar);

        var song_count = 0;
        for (var _song in obj[artist]) { // 曲のループ
            var song = obj[artist][_song];

			var new_row = $("<tr></tr>")
                .addClass("artist_" + artist_name)
                .addClass("song_" + song_count);

			if(is_expanded[artist] == false){
				new_row.addClass("hide");
			}

			new_row.append($("<td></td>")
                    .addClass("artist")
                    .text(artist_name)
                ).append($("<td></td>")
                    .addClass("name")
                    .text(song.name)
                ).append($("<td></td>")
                    .addClass("fl")
                    .text(song.fl)
                ).append($("<td></td>")
                    .addClass("ob")
                    .text(song.ob)
                ).append($("<td></td>")
                    .addClass("cl")
                    .text(song.cl)
                ).append($("<td></td>")
                    .addClass("fg")
                    .text(song.fg)
                ).append($("<td></td>")
                    .addClass("tp")
                    .text(song.tp)
                ).append($("<td></td>")
                    .addClass("tb")
                    .text(song.tb)
                ).append($("<td></td>")
                    .addClass("hr")
                    .text(song.hr)
                ).append($("<td></td>")
                    .addClass("tuba")
                    .text(song.tuba)
                ).append($("<td></td>")
                    .addClass("timp")
                    .text(song.timp)
                ).append($("<td></td>")
                    .addClass("others")
                    .text(song.others)
                );
            
			song_table.append(new_row);

            song_count++;
            // 曲ごとの<tr class="hide">でつくる
        }

        $("tr.artist_" + artist_name).data("songcount", song_count);
    }
}

function search() {
	var search_condition = Array();
    var check = false;

	$("input.instr").each(function(idx) {
		var val = $(this).val();
		if(val != ""){
			search_condition[$(this).attr("id")] = val;
            check = true;
		}
	});

    
    if (check) {
        do_search_music(search_condition);
    } else {
        clear_table();
        create_artist_bar();
    }

}




// --------------------------------------
// --- search boxes ---
// --------------------------------------
$(function(){
	$("input").keyup(function() {
		search();
	});
	
	$("input.spinner").spinner({
		min: -1,
		spin: function( event, ui ){ setTimeout("search()", 10); },
        start: function (event, ui) { return check_unset(this, event, ui); },
	});
	$("input.spinner").width(30);
	
	$("button#clear").click(function() {
		clear_search_form();
		$(this).addClass("hide");
	});

//	$("table.instrumentation-table").tablesorter();
});

function toggle_each(artist_name, song_count) {

    $("tr.artist_" + artist_name + ".song_" + song_count).toggleClass("hide");

    var max_song = $("tr.artist_" + artist_name).data("songcount");
    if (song_count < max_song)
        toggle_each(artist_name, song_count+1);
//        setTimeout("toggle_each(\"" + artist_name + "\", " + parseInt(song_count + 1) + ")", 5);
}
/*
function toggle_artist(artist_name) {
	is_expanded[artist_name] = !is_expanded[artist_name];
    toggle_each(artist_name, 0);
//    setTimeout("toggle_each(\"" + artist_name + "\", 0)", 5);
}
*/

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

function clear_search_form() {
	$("input").val("");
	search();
}

