
var request = new XMLHttpRequest();
request.open('GET', 'data/books.json', false);
request.send(null);
var data = JSON.parse(request.responseText);

var books = data.books;

var table = document.createElement('table');
table.setAttribute('id','table');

var headrow = document.createElement('tr');
	var header = document.createElement('th');
	header.innerHTML = "Title";
	headrow.appendChild(header);
	
	header = document.createElement('th');
	header.innerHTML = "Year";
	headrow.appendChild(header);
	
	header = document.createElement('th');
	header.innerHTML = "ISBN";
	headrow.appendChild(header);
	
	header = document.createElement('th');
	header.innerHTML = "Authors";
	headrow.appendChild(header);
	
	table.appendChild(headrow);



for (var i=0; i < books.length; i++) {
	var row = document.createElement('tr');
		var column = document.createElement('td');
		column.innerHTML = books[i].title;
		row.appendChild(column);
		
		column = document.createElement('td');
		column.innerHTML = books[i].year;
		row.appendChild(column);
		
		column = document.createElement('td');
		column.innerHTML = books[i].isbn;
		row.appendChild(column);
		
		column = document.createElement('td');
		column.innerHTML = books[i].authors;
		row.appendChild(column);
		table.appendChild(row);
}

document.body.appendChild(table);

var tablex = document.getElementById('table');
var rows = tablex.getElementsByTagName('tr');
for (i = 0; i < rows.length; i++) {
        var currentRow = table.rows[i];
        var createClickHandler = function(row) {
            return function() { 
                var cell = row.getElementsByTagName("td")[0];
                var title = cell.innerHTML;
                document.getElementById('result').innerHTML = title;
                
             };
        };
    currentRow.onclick = createClickHandler(currentRow);
}











