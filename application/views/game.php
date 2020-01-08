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
    <div class="game-box">
        <div class="container">
            <h1 class="game-heading"><?php echo PROJECT; ?></h1>
            <h4 class="game-heading">All the Best <?php echo $_COOKIE['player1']; ?> and <?php echo $_COOKIE['player2']; ?>!</h4>
            <div class="col-sm-12 game">
                <div class="row">
                    <div class="col-sm-4 nodes" id="node1"></div>
                    <div class="col-sm-4 nodes" id="node2"></div>
                    <div class="col-sm-4 nodes" id="node3"></div>
                </div>
                <div class="row">
                    <div class="col-sm-4 nodes" id="node4"></div>
                    <div class="col-sm-4 nodes" id="node5"></div>
                    <div class="col-sm-4 nodes" id="node6"></div>
                </div>
                <div class="row">
                    <div class="col-sm-4 nodes" id="node7"></div>
                    <div class="col-sm-4 nodes" id="node8"></div>
                    <div class="col-sm-4 nodes" id="node9"></div>
                </div>
            </div>
            <a href="<?php echo base_url(); ?>"><< Back </a>
            <a href="" class="pull-right">Reload</a>
        </div>
    </div>
    <script>
        var baseURL = '<?php echo base_url(); ?>';
    </script>
    <script src="<?php echo base_url(); ?>assets/js/main.js"></script>
</body>
</html>