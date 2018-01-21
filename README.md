# jcsabfix

1. Include css styles for flexbox container -  display: flex; flex-wrap: wrap; justify-content: space-around or justify-content: space-between 
2. Include last version of **jQuery**
3. Include debouncing function from John Hann through jquery plugin **jquery.smartresize.min.js**
4. Include JCSABFIX plugin **jquery.jcsabfix.min.js**

## Example

### HTML *(index.html)*

    <!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="UTF-8"/>
        <link rel="stylesheet" href="demo.css"/>
        <title>Demo</title>
      </head>
      <body>
        <div class="grid">
          <div class="grid-item">1</div>
          <div class="grid-item">2</div>
          <div class="grid-item">3</div>
          <div class="grid-item">4</div>
          <div class="grid-item">5</div>
          <div class="grid-item">6</div>
          <div class="grid-item">7</div>
          <div class="grid-item">8</div>
          <div class="grid-item">9</div>
          <div class="grid-item">10</div>
          <div class="grid-item">11</div>
          <div class="grid-item">12</div>
          <div class="grid-item">13</div>
          <div class="grid-item">14</div>
          <div class="grid-item">15</div>
          <div class="grid-item">16</div>
          <div class="grid-item">17</div>
        </div>
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
        <script src="jquery.smartresize.min.js"></script>
        <script src="jquery.jcsabfix.min.js"></script>
        <script src="demo.js"></script>
      </body>
    </html>
   
    
### CSS *(demo.css)*

    .grid {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-around;
    }
    .grid-item {
      display: flex;
      align-items: center;
      justify-content: center;
      color: #fff;
      font-size: 1.5em;
      font-family: sans-serif;
      width: 150px;
      height: 100px;
      background: #17a2b8;
      margin-bottom: 15px;
    }
    
### JS *(demo.js)*

    $(document).ready(function(){
    
      $('.grid').jcsabfix();
    
      $(window).smartresize(function(){
        $('.grid').jcsabfix();
      });
    
    });
You can use *resize* instead *smartresize* but **smartresize recommended**
