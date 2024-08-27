def main
  n = gets.to_i
  grid = Array.new(101) { Array.new(101, 0) }

  n.times do
    a, b, c, d = gets.split.map(&:to_i)
    (a...b).each do |x|
      (c...d).each do |y|
        grid[x][y] += 1
      end
    end
  end

  area = 0
  (0..100).each do |x|
    (0..100).each do |y|
      area += 1 if grid[x][y] > 0
    end
  end

  puts area
end

main
