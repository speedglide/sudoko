<html>
    <head>
        <title>PHP Test</title>
    </head>
    <body>
        <?php
        $note=<<<XML
        <note>
        <to>Tove</to>
        <from>Jani</from>
        <heading>Reminder</heading>
        <body>Do not forget me this weekend!</body>
        </note>
        XML;

        $xml=new SimpleXMLElement($note);
        echo $xml->asXML();
        ?>

        <p>Select View Source to see the XML.</p>
    </body>
</html>
