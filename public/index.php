<!DOCTYPE html>
<html lang="ja">

<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE-edge">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>オーケストラの楽曲検索</title>
  <meta name="description" content="">
  <meta name="keywords" content="">

  <!-- Minified Bootstrap CSS -->
  <link rel="stylesheet" href="./css/bootstrap-3.3.2.min.css">
  <!-- Custom CSS -->
  <link rel="stylesheet" href="./css/custom.css">

  <!-- HTML5 shim and Respond.js for IE8 support of HTML5 elements and mesia queries -->
  <!--[if lt IE 9]>
    <script src="https://oss.maxcdn.com/html5shiv/3.7.2/html5shiv.min.js"></script>
	<script src="https://oss.maxcdn.com/respond/1.4.2/respond.min.js"></script>
  <![endif]-->
</head>


<body>
  <div class="container">
    <h1>オーケストラの楽曲検索</h1>
  </div>

  <div class="container">
    <div class="hero-unit">
    <span>楽曲条件</span>
    <div class="form-inline form-group">
      <div class="form-group">
          <label for="artist">アーティスト名</label>
          <input id="artist" type="text" name="artist" class="form-control instr" />
      </div>
    </div>
    <div class="form-inline form-group second-line">
      <div class="form-group">
          <label for="artist">曲名</label>
          <input id="name" type="text" name="name" class="form-control instr" />
      </div>
    </div>
    
    <span>編成条件</span>
    <div class="form-inline form-group">
      <div class="form-group">
          <label for="fl">フルート</label>
		  <input id="fl" type="text" name="fl" class="form-control instr spinner unset" placeholder="未指定"/>
          <label for="ob">オーボエ</label>
          <input id="ob" type="text" name="ob" class="form-control instr spinner unset" placeholder="未指定"/>
          <label for="cl">クラリネット</label>
          <input id="cl" type="text" name="cl" class="form-control instr spinner unset" placeholder="未指定" />
          <label for="fg">ファゴット</label>
          <input id="fg" type="text" name="fg" class="form-control instr spinner unset" placeholder="未指定" />
          <label for="tp">トランペット</label>
          <input id="tp" type="text" name="tp" class="form-control instr spinner unset" placeholder="未指定" />
          <label for="tb">トロンボーン</label>
          <input id="tb" type="text" name="tb" class="form-control instr spinner unset" placeholder="未指定" />
      </div>
      
      <div class="form-group second-line">
          <label for="hr">ホルン</label>
          <input id="hr" type="text" name="hr" class="form-control instr spinner unset" placeholder="未指定" />
          <label for="tuba">チューバ</label>
          <input id="tuba" type="text" name="tuba" class="form-control instr spinner unset" placeholder="未指定" />
          <label for="timp">ティンパニ</label>
          <input id="timp" type="text" name="timp" class="form-control instr spinner unset" placeholder="未指定" />
          <label for="others">その他</label>
          <input id="others" type="text" name="others" class="form-control instr unset" placeholder="未指定" />
          
          <button id="clear" type="button" class="btn-warning hide">検索条件をクリア</button>
      </div>
    </div>
  </div>
  </div>

  <nav class="navbar navbar-inverse navbar-fixed-top">
    <div class="container">
	  <div class="navbar-header">
	    <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
		  <span class="sr-only">Toggle navication</span>
		  <span class="icon-bar"></span>
		  <span class="icon-bar"></span>
		  <span class="icon-bar"></span>
		</button>
		<a class="navbar-brand" href="#">オーケストラの楽曲検索</a>
	  </div>
	  <div id="navbar" class="collapse navbar-collapse">
	    <ul class="nav navbar-nav">
		  <li class="active"><a href="#">Home</a></li>
		  <li><a href="#about">About</a></li>
		  <li><a href="#contact">Contact</a></li>
		</ul>
	  </div>
	</div>
  </nav>

  <div class="container" id="infobar">
    <span id="info"></span>
  </div>

  <div class="container">
    <table class="instrumentation-table table table-striped">
      <thead>
        <tr>
          <th class="artist">作曲者</th>
          <th class="name">曲名</th>
          <th class="fl">Fl</th>
          <th class="ob">Ob</th>
          <th class="cl">Cl</th> <!-- Bb or A -->
          <th class="fg">Fg</th>
          <th class="tp">Tp</th>
          <th class="tb">Tb</th>
          <th class="hr">Hr</th>
          <th class="tuba">Tuba</th>
          <th class="timp">Timp</th>
          <th class="others">Others</th>
          <!-- Picc, E.Hr, Bs.Cl, C.Fg, Harp, Celesta, Perc -->
        </tr>
      </thead>
	  <tbody>

      </tbody>
    </table>
  </div>

  <!-- JQuery (necessary for Bootstrap's JavaScript plugins) -->
  <script src="./js/jquery-1.11.2.min.js"></script>
  <!-- Latest compiled and minified JavaScript -->
  <script src="./js/bootstrap-3.3.2.min.js"></script>
  <!-- -->
  <script src="./js/jquery-ui-1.11.2.js"></script>
  <!-- Find music script -->
  <script src="./js/music-search.js"></script>

</body>

</html>
