M, D = gets.split(" ").map(&:to_i)
y, m, d = gets.split(" ").map(&:to_i)

if d > D
  d = 1
  m += 1
elsif m > M
  m = 1
  y += 1
end

puts "#{y} #{m} #{d}"
