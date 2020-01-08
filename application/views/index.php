<!DOCTYPE html>
<html>
<head>
    <title><?=PROJECT;?></title>
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css">
    <link rel="stylesheet" type="text/css" href="<?php echo base_url(); ?>assets/css/style.css" />
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"></script>
</head>
<body>
    <div class="container">
        <div class="game-start">
            <div class="row">
                <div class="col-sm-12">
                    <div class="form-group col-sm-6">
                        <label>Player 1</label>
                        <input type="text" class="form-control" name="player1" id="player1" required value="" placeholder="Player 1" />
                    </div>
                    <div class="form-group col-sm-6">
                        <label>Player 2</label>
                        <input type="text" class="form-control" name="player2" id="player2" required value="" placeholder="Player 2" />
                    </div>
                    <div class="form-group col-sm-12 game-btn">
                        <a href="javascript:void(0);" class="start-game-btn">Start Game</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <script>
        var gameURL = '<?php echo base_url() . GAME; ?>';
    </script>
    <script src="<?php echo base_url(); ?>assets/js/main.js"></script>
</body>
</html>