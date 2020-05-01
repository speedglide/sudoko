<html>
    <head>
        <title>PHP Test</title>
    </head>
    <body>
        <?php
        $puzzle=<<<XML
        <puzzleboard>
            <row0>1,2,3,4,5,6,7,8,9</row0>
            <row1>1,2,3,4,5,6,7,8,9</row1>
            <row2>1,2,3,4,5,6,7,8,9</row2>
            <row3>1,2,3,4,5,6,7,8,9</row3>
            <row4>1,2,3,4,5,6,7,8,9</row4>
            <row5>1,2,3,4,5,6,7,8,9</row5>
            <row6>1,2,3,4,5,6,7,8,9</row6>
            <row7>1,2,3,4,5,6,7,8,9</row7>
            <row8>1,2,3,4,5,6,7,8,9</row8>         
        </puzzleboard>
        XML;

        $xml=new SimpleXMLElement($puzzle);
        echo $xml->asXML();
        ?>

        <p>Select View Source to see the XML.</p>
    </body>
</html>
