<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Calculadora de IMC</title>
    <script>
        function calcularIMC() {
            var peso = parseFloat(document.getElementById("peso").value);
            var altura = parseFloat(document.getElementById("altura").value);
            
            var imc = peso / (altura * altura);
            
            document.getElementById("resultado").innerHTML = "Seu IMC é: " + imc.toFixed(2);
        }
    </script>
</head>
<body>
    <h1>Calculadora de IMC</h1>
    <label for="peso">Peso (kg):</label>
    <input type="text" id="peso" placeholder="Digite seu peso"><br><br>
    
    <label for="altura">Altura (m):</label>
    <input type="text" id="altura" placeholder="Digite sua altura"><br><br>
    
    <button onclick="calcularIMC()">Calcular</button><br><br>
    
    <div id="resultado"></div>
</body>
</html>