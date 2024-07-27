n = gets.to_i

grid_a = []
n.times do
  grid_a << gets.chomp.chars
end

grid_b = []
n.times do
  grid_b << gets.chomp.chars
end

(0...n).each do |i|
  (0...n).each do |j|
    if grid_a[i][j] != grid_b[i][j]
      puts "#{i + 1} #{j + 1}"
      exit
    end
  end
end
