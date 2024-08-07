H, W, N = gets.split.map(&:to_i)

grid = Array.new(H) { Array.new(W, '.') }

x, y = 0, 0
direction = 0

dx = [-1, 0, 1, 0]
dy = [0, 1, 0, -1]

N.times do
  if grid[x][y] == '.'
    grid[x][y] = '#'
    direction = (direction + 1) % 4
  else
    grid[x][y] = '.'
    direction = (direction + 3) % 4
  end

  x = (x + dx[direction]) % H
  y = (y + dy[direction]) % W
end

grid.each do |row|
  puts row.join
end
