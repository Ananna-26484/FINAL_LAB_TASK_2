<!DOCTYPE html>
<html>
<head>
	<title>Final Term Lab Task 2</title>
	<script type="text/javascript" src="script.js"></script>
</head>
<body>

	<h1>Final Term Lab Task 2</h1>

	<h2 id="head2">
		
	</h2>

		<form action="abc.php" onsubmit="return validate()">
			<table>
				<tr>
					<td>Usename</td>
					<td><input type="text" id="username" name="username" onkeyup="remover()" onblur="xyz()" /></td>
					<td id="userMsg"> </td>
				</tr>
				<tr>
					<td>Password</td>
					<td><input type="password" id="password" name="password"></td>
					<td id="passMsg"> </td>
				</tr>
				<tr>
					<td></td>
					<td><input type="submit" name="submit" value="submit" ></td>
					<td></td>
				</tr>
			</table>
		</form>
	
</body>
</html>