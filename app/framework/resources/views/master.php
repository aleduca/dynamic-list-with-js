<!DOCTYPE html>
<html lang="pt-br">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title><?php echo $title; ?></title>
    <style>
        @import url('https://fonts.googleapis.com/css2?family=Roboto+Mono:wght@100;400;700&display=swap');
        #container {
            font-family: 'Roboto Mono', monospace;
        }
    </style>
</head>

<body>
    <div id="container">
        <?php echo $this->load(); ?>
    </div>

    <script src="app.js"></script>
</body>

</html>