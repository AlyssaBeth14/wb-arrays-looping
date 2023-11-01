const grid = [
    ['A', 'B', 'C'],
    ['D', 'E', 'F'],
    ['G', 'H', 'I'],
  ];

  console.log(grid[1]);
  console.log(grid[2][2])
  console.log(grid[0][2]);
  
  grid[1].splice(1, 1, "e")
  console.log(grid)

  grid[1][1]= grid[1][1].toLowerCase()


//outer loop grabs each row
//inner loop grabs each letter
for(const row of grid){
    console.log(row);
    for(const cell of row){
console.log(cell);
    }
}